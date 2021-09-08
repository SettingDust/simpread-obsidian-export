import nunjucks from 'nunjucks'
import noteTemplate from './notes-markdown.md'
import sanitize from 'sanitize-filename'

interface Annotate {
  content?: string
  note?: string
  tags?: string[]
}

interface Info {
  href: string,
  title?: string
  description?: string
  note?: string
  tags?: string[]
}

const anchorRegex = /.*\^(.*)$/g

function fetchInfo(): Info {
  const card = $('sr-annote-sidebar-cards sr-annote-sidebar-card')
  return {
    href: location.href,
    title: sanitize($('sr-rd-title').text()),
    description: $('sr-rd-desc').text(),
    note: card.find('sr-annote-sidebar-note').text(),
    tags: card
      .find('sr-annote-sidebar-tag')
      .map((_, tagElement) => $(tagElement).text().slice(1))
      .get()
  }
}

function fetchAnnotates(): Annotate[] {
  return $('sr-annote-sidebar-cards sr-annote-sidebar-card')
    .map((_, element) => {
      const $element = $(element)
      const $detail = $element.find('sr-annote-sidebar-detail')
      return {
        content: $detail.find('span').text(),
        note: $element.find('sr-annote-sidebar-note').text(),
        tags: $detail
          .find('sr-annote-sidebar-tag')
          .map((_, tagElement) => $(tagElement).text().slice(1))
          .get()
      }
    })
    .get()
}

export function exportAnnotates(content: string) {
  const lines = content.split('\n')
  let anchorIndex = 0
  const annotates = fetchAnnotates()
    .map((annotate) => {
      const lineIndex = lines.findIndex((it) => it.includes(`==${annotate.content}==`))
      const line: string = lines[lineIndex]
      const anchorResult = [...line.matchAll(anchorRegex)].flat()
      let currentAnchor
      if (!anchorResult.length) {
        currentAnchor = anchorIndex++
        lines[lineIndex] = `${line} ^${currentAnchor}`
      } else currentAnchor = anchorResult[1]
      if (annotate.tags?.length || annotate.note?.length) {
        return { anchor: currentAnchor, ...annotate }
      }
      return null
    })
    .filter((it) => it)

  const info = fetchInfo()

  return {
    info,
    origin: lines.join('\n'),
    annotates
  }
}
