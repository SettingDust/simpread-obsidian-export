declare interface Simpread {
}

declare interface Highlight {
}

/**
 * @param pluginId
 * @param data read when null
 * @param callback
 */
declare function simpreadStorage(pluginId: string, data?: any, callback: (result: any) => void)

declare function controlBar(type: 'markdown', callback: (data: { detail: string }) => void)

declare function save(data: object, callback: () => void)

declare interface Themes {
  colors: string[]
  names: string[]
  theme: string
}

declare function Export(type: string, title: string, desc: string, content: string)

declare interface Style {
  BgColor: (bgColor: string, opacity: number) => string
}

declare namespace window.simpread {
  function testPlugin(...functions: Function)
}

declare interface SimpreadEvent extends Event {
  detail?: {
    type: 'export'
    value: string
  }
}

declare namespace Mousetrap {
  function stopCallback(e: ExtendedKeyboardEvent, element: Element, combo: string): boolean;

  function bind(
    keys: string | string[],
    callback: (e: ExtendedKeyboardEvent, combo: string) => any,
    action?: string
  ): this;

  function unbind(keys: string | string[], action?: string): this;

  function trigger(keys: string, action?: string): this;

  function handleKey(character: string, modifiers: string[], e: ExtendedKeyboardEvent): void;

  function reset(): this;
}
