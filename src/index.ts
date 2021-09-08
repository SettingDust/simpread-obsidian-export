import TurndownService from 'turndown'
import SimpreadHighlight from './turndown/simpread-highlight'
import { exportAnnotates } from './annotate'
import LinkClear from './turndown/link-clear'
import SimpreadBlockquote from './turndown/simpread-blockquote'
import { gfm } from 'turndown-plugin-gfm'
import nunjucks from 'nunjucks'
import noteTemplate from './notes-markdown.md'
import { SimpreadStorage } from './utils'

const turndown = new TurndownService()
turndown
  .use(SimpreadHighlight)
  .use(LinkClear)
  .use(SimpreadBlockquote)
  .use(gfm)

async function plugin(
  version: string,
  $read: JQuery,
  $title: JQuery,
  $desc: JQuery,
  $content: JQuery,
  $footer: JQuery,
  $process: JQuery,
  $toc: JQuery,
  Notify: Notify,
  $$highlight: Highlight,
  browser: typeof chrome,
  $$storage: typeof simpreadStorage,
  $$simpread: Simpread,
  /**
   * $$read 与上个对象基本一致
   */
  $$read: any,
  $$controlBar: typeof controlBar,
  $$save: typeof save,
  $$theme: Themes,
  $$export: typeof Export,
  $$style: Style,
  $$service: any,
  $$waves: any,
  $$ui: any,
  $$serviceNames: any,
  $$actionBar: any
) {
  const pluginId = 'H7rgpgZBjT'
  const storage = new SimpreadStorage(pluginId, $$storage)

  const downloadWithHelper = (title: string, content: string) =>
    browser.runtime.sendMessage({
      type: 'corb2', value: {
        settings: {
          type: 'POST',
          url: 'http://localhost:7026/plain',
          data: { title, content }
        }
      }
    }, result => {
      if (result['fail']) {
        $$service.download('data:text/json;charset=utf-8,' + encodeURIComponent(content), title)
      } else {
        console.log(result)
      }
    })

  async function exportMarkdown() {
    const { origin: markdown, annotates, info } = exportAnnotates(turndown.turndown($content.html()))
    const currentNoteTemplate = await storage.read('note-template', noteTemplate)
    downloadWithHelper(`${info.title}.md`, markdown)
    downloadWithHelper(`${info.title}@annotate.md`, nunjucks.renderString(currentNoteTemplate, { info, annotates }))
  }

  Mousetrap.bind('e o', exportMarkdown)
}

const style = () => ``

// @ts-ignore
window.simpread.testPlugin(style, plugin)
