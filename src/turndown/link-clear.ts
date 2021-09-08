import TurndownService from 'turndown'

export default function LinkClear(turndownService: TurndownService) {
  turndownService.addRule('LinkClear', {
    filter: (node) => {
      const link = node.getAttribute('href')
      return node.tagName === 'A'
        && (
          !link?.startsWith('#')
          || !link?.startsWith('javascript:')
        )
    },
    replacement: () => ''
  })
}
