import TurndownService from 'turndown'

export default function SimpreadHighlight(turndownService: TurndownService) {
  turndownService.addRule('SimpreadHighlight', {
    filter: (node) => node.tagName === 'SR-ANNOTE',
    replacement: (content, node) =>
      `==${
        (
          Array.from(node.childNodes)
            .filter((child) => child.nodeType === Node.TEXT_NODE)
            .pop() as ChildNode
        ).textContent
      }==`
  })
}
