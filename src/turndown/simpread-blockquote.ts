import TurndownService from 'turndown'

export default function SimpreadBlockquote(turndownService: TurndownService) {
  turndownService.addRule('SimpreadBlockquote', {
    filter: (node) => node.tagName === 'SR-BLOCKQUOTE',
    replacement: (content) => content.split('\n').filter(it => it.length).map(it => `> ${it}`).join('\n')
  })
}
