// Type definitions for Slate-React
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Andy Kent <https://github.com/andykent>
//                 Jamie Talbot <https://github.com/majelbstoat>
//                 Jan Löbel <https://github.com/JanLoebel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
declare module 'slate-react' {
  import * as Slate from 'slate'
  import * as Immutable from 'immutable'
  import { ReactNode } from 'react'

  type RenderMarkProps = {
    mark: { type: string }
    children: ReactNode
  }

  type RenderNodeProps = {
    node: Slate.Block
    children: ReactNode
    attributes: any
    isSelected: boolean
    editor: Editor
  }

  interface Plugin {
    onBeforeInput?: (event: Event, change: Slate.Change, editor: Editor) => any | void
    onBlur?: (event: Event, change: Slate.Change, editor: Editor) => any | void
    onFocus?: (event: Event, change: Slate.Change, editor: Editor) => any | void
    onClick?: (event: Event, change: Slate.Change, editor: Editor) => any | void
    onCopy?: (event: Event, change: Slate.Change, editor: Editor) => any | void
    onCut?: (event: Event, change: Slate.Change, editor: Editor) => any | void
    onDrop?: (event: Event, change: Slate.Change, editor: Editor) => any | void
    onKeyDown?: (event: Event, change: Slate.Change, editor: Editor) => any | void
    onKeyUp?: (event: Event, change: Slate.Change, editor: Editor) => any | void
    onPaste?: (event: Event, change: Slate.Change, editor: Editor) => any | void
    onSelect?: (event: Event, change: Slate.Change, editor: Editor) => any | void
    onChange?: (change: Slate.Change) => any | void
    renderEditor?: (props: { [key: string]: any }, editor: Editor) => any | void
    schema?: Slate.Schema
    decorateNode?: (node: Slate.Node) => Slate.Range[] | void
    renderMark?: (props: RenderMarkProps) => any
    renderNode?: (props: RenderNodeProps) => any
    renderPlaceholder?: (props: { [key: string]: any }) => any
    renderPortal?: (props: { [key: string]: any }) => any
    validateNode?: (node: Slate.Node) => any
  }

  type BasicEditorProps = {
    value: Slate.Value
    autoCorrect?: boolean
    autoFocus?: boolean
    className?: string
    onChange?: (change: Slate.Change) => void
    placeholder?: any
    plugins?: Plugin[]
    readOnly?: boolean
    role?: string
    schema?: Slate.Schema
    spellCheck?: boolean
    style?: { [key: string]: string }
    tabIndex?: number
  }

  type EditorProps = BasicEditorProps & Plugin

  type EditorState = {
    schema: Slate.Schema
    value: Slate.Value
    stack: Slate.Stack // [TODO] define stack
  }

  export class Editor extends React.Component<EditorProps, EditorState> {
    schema: Slate.Schema
    value: Slate.Value
    stack: Slate.Stack

    // Instance Methods
    blur(): void
    change(fn: (change: Slate.Change) => any | void): void
    change(...args: any[]): void
    focus(): void
  }

  type SlateType = 'fragment' | 'html' | 'node' | 'rich' | 'text'

  export function findDOMNode(node: Slate.Node): Element
  export function findDOMRange(range: Slate.Range): Slate.Range
  export function findNode(element: Element, value: Slate.Value): Slate.Node
  export function findRange(selection: Slate.Selection, value: Slate.Value): Slate.Range
  export function getEventRange(event: Event, value: Slate.Value): Slate.Range
  export function getEventTransfer(event: Event): { type: SlateType; node: Slate.Node }
  export function setEventTransfer(event: Event, type: SlateType, data: any): void
}
