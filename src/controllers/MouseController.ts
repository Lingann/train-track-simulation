export interface MouseEventType {
  click: (e: MouseEvent) => void
  dblclick: (e: MouseEvent) => void
  contextmenu: (e: MouseEvent) => void
  mouseover: (e: MouseEvent) => void
  mouseout: (e: MouseEvent) => void
  mouseenter: (e: MouseEvent) => void
  mouseleave: (e: MouseEvent) => void
  mousemove: (e: MouseEvent) => void
  mousedown: (e: MouseEvent) => void
  mouseup: (e: MouseEvent) => void
  drag: (e: MouseEvent) => void
  dragover: (e: MouseEvent) => void
  dragenter: (e: MouseEvent) => void
  dragleave: (e: MouseEvent) => void
}

export type MouseEventTypeKey = keyof MouseEventType

export type MouseEventHandlers = MouseEventType[MouseEventTypeKey]

export interface ViewportPosition {
  x: number
  y: number
}

export interface IMouseController {
  position: ViewportPosition

  on: <T extends MouseEventTypeKey>(type: T, handler: MouseEventType[T]) => void
  off: <T extends MouseEventTypeKey>(type: T, handler: MouseEventType[T]) => void
}
