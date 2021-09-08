namespace Notify {
  type VERSION = '2.0.2.0621'

  type Mode = 'toast' | 'modal' | 'snackbar'

  enum Type {
    NORMAL,
    SUCCESS,
    WARNING,
    ERROR,
    INFO
  }

  type State = 'loading' | 'holdon'
  type EventType = 'action' | 'cancel' | 'holdon'

  interface Option {
    version?: VERSION
    title?: string
    content?: string
    type?: Notify.Type
    mode?: Notify.Mode
    state?: State
    flat?: boolean
    delay?: number
    icon?: string
    action?: string
    cancel?: string
    exit?: boolean
    callback?: (type: EventType) => any
    complete?: (type: EventType) => any
  }
}

declare class Notify {
  constructor() {}

  Render(content: string)

  Render(content: string, action: string, callback: (type: Notify.EventType) => any)

  Render(title: string, content: string)

  Render(type: Notify.Type, content: string)

  Render(mode: Notify.Mode, content: string)

  Render(mode: Notify.Mode, content: string, action: string, callback: (type: Notify.EventType) => any)

  Render(option: Notify.Option)
}
