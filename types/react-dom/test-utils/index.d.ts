import {
    AbstractView, Component, ComponentClass,
    ReactElement, ReactInstance, ClassType,
    DOMElement, SFCElement, CElement,
    ReactHTMLElement, DOMAttributes, SFC, TypedReactElement, ReactType, ComponentElement
} from 'react';

import { ElementInstanceType } from "..";

// tslint:disable-next-line:export-just-namespace
export = ReactTestUtils;

declare namespace ReactTestUtils {
    interface OptionalEventProperties {
        bubbles?: boolean;
        cancelable?: boolean;
        currentTarget?: EventTarget;
        defaultPrevented?: boolean;
        eventPhase?: number;
        isTrusted?: boolean;
        nativeEvent?: Event;
        preventDefault?(): void;
        stopPropagation?(): void;
        target?: EventTarget;
        timeStamp?: Date;
        type?: string;
    }

    interface SyntheticEventData extends OptionalEventProperties {
        altKey?: boolean;
        button?: number;
        buttons?: number;
        clientX?: number;
        clientY?: number;
        changedTouches?: TouchList;
        charCode?: boolean;
        clipboardData?: DataTransfer;
        ctrlKey?: boolean;
        deltaMode?: number;
        deltaX?: number;
        deltaY?: number;
        deltaZ?: number;
        detail?: number;
        getModifierState?(key: string): boolean;
        key?: string;
        keyCode?: number;
        locale?: string;
        location?: number;
        metaKey?: boolean;
        pageX?: number;
        pageY?: number;
        relatedTarget?: EventTarget;
        repeat?: boolean;
        screenX?: number;
        screenY?: number;
        shiftKey?: boolean;
        targetTouches?: TouchList;
        touches?: TouchList;
        view?: AbstractView;
        which?: number;
    }

    type EventSimulator = (element: Element | Component<any>, eventData?: SyntheticEventData) => void;

    interface MockedComponentClass {
        new (props: any): any;
    }

    interface ShallowRenderer {
        /**
         * After `shallowRenderer.render()` has been called, returns shallowly rendered output.
         */
        getRenderOutput<E extends ReactElement<any>>(): E;
        /**
         * After `shallowRenderer.render()` has been called, returns shallowly rendered output.
         */
        getRenderOutput(): ReactElement<any>;
        /**
         * Similar to `ReactDOM.render` but it doesn't require DOM and only renders a single level deep.
         */
        render(element: ReactElement<any>, context?: any): void;
        unmount(): void;
    }

    /**
     * Simulate an event dispatch on a DOM node with optional `eventData` event data.
     * `Simulate` has a method for every event that React understands.
     */
    namespace Simulate {
        const abort: EventSimulator;
        const animationEnd: EventSimulator;
        const animationIteration: EventSimulator;
        const animationStart: EventSimulator;
        const blur: EventSimulator;
        const canPlay: EventSimulator;
        const canPlayThrough: EventSimulator;
        const change: EventSimulator;
        const click: EventSimulator;
        const compositionEnd: EventSimulator;
        const compositionStart: EventSimulator;
        const compositionUpdate: EventSimulator;
        const contextMenu: EventSimulator;
        const copy: EventSimulator;
        const cut: EventSimulator;
        const doubleClick: EventSimulator;
        const drag: EventSimulator;
        const dragEnd: EventSimulator;
        const dragEnter: EventSimulator;
        const dragExit: EventSimulator;
        const dragLeave: EventSimulator;
        const dragOver: EventSimulator;
        const dragStart: EventSimulator;
        const drop: EventSimulator;
        const durationChange: EventSimulator;
        const emptied: EventSimulator;
        const encrypted: EventSimulator;
        const ended: EventSimulator;
        const error: EventSimulator;
        const focus: EventSimulator;
        const input: EventSimulator;
        const invalid: EventSimulator;
        const keyDown: EventSimulator;
        const keyPress: EventSimulator;
        const keyUp: EventSimulator;
        const load: EventSimulator;
        const loadStart: EventSimulator;
        const loadedData: EventSimulator;
        const loadedMetadata: EventSimulator;
        const mouseDown: EventSimulator;
        const mouseEnter: EventSimulator;
        const mouseLeave: EventSimulator;
        const mouseMove: EventSimulator;
        const mouseOut: EventSimulator;
        const mouseOver: EventSimulator;
        const mouseUp: EventSimulator;
        const paste: EventSimulator;
        const pause: EventSimulator;
        const play: EventSimulator;
        const playing: EventSimulator;
        const progress: EventSimulator;
        const rateChange: EventSimulator;
        const scroll: EventSimulator;
        const seeked: EventSimulator;
        const seeking: EventSimulator;
        const select: EventSimulator;
        const stalled: EventSimulator;
        const submit: EventSimulator;
        const suspend: EventSimulator;
        const timeUpdate: EventSimulator;
        const touchCancel: EventSimulator;
        const touchEnd: EventSimulator;
        const touchMove: EventSimulator;
        const touchStart: EventSimulator;
        const transitionEnd: EventSimulator;
        const volumeChange: EventSimulator;
        const waiting: EventSimulator;
        const wheel: EventSimulator;
    }

    /**
     * Render a React element into a detached DOM node in the document. __This function requires a DOM__.
     */
    function renderIntoDocument<T extends DOMElement<any, any> | ComponentElement<any, any> | TypedReactElement<any>>(
        element: T): ElementInstanceType<T>;
    function renderIntoDocument(
        element: SFCElement<any>): void;
    // If we replace `P` with `any` in this overload, then some tests fail because
    // calls to `renderIntoDocument` choose the last overload on the
    // subtype-relation pass and get an undesirably broad return type.  Using `P`
    // allows this overload to match on the subtype-relation pass.
    function renderIntoDocument<P, T extends Component<P>>(
        element: CElement<P, T>): T;
    function renderIntoDocument<P>(
        element: ReactElement<P>): Component<P> | Element | void;

    /**
     * Pass a mocked component module to this method to augment it with useful methods that allow it to
     * be used as a dummy React component. Instead of rendering as usual, the component will become
     * a simple `<div>` (or other tag if `mockTagName` is provided) containing any provided children.
     */
    function mockComponent(
        mocked: MockedComponentClass, mockTagName?: string): typeof ReactTestUtils;

    /**
     * Returns `true` if `element` is any React element.
     */
    function isElement(element: any): boolean;

    /**
     * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
     */
    function isElementOfType<T extends HTMLElement>(
        element: ReactElement<any>, type: string): element is ReactHTMLElement<T>;
    /**
     * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
     */
    function isElementOfType<P extends DOMAttributes<{}>, T extends Element>(
        element: ReactElement<any>, type: string): element is DOMElement<P, T>;
    /**
     * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
     */
    function isElementOfType<P>(
        element: ReactElement<any>, type: SFC<P>): element is SFCElement<P>;
    /**
     * Returns `true` if `element` is a React element whose type is of a React `componentClass`.
     */
    function isElementOfType<P, T extends Component<P>, C extends ComponentClass<P>>(
        element: ReactElement<any>, type: ClassType<P, T, C>): element is CElement<P, T>;

    /**
     * Returns `true` if `instance` is a DOM component (such as a `<div>` or `<span>`).
     */
    function isDOMComponent(instance: ReactInstance): instance is Element;
    /**
     * Returns `true` if `instance` is a user-defined component, such as a class or a function.
     */
    function isCompositeComponent(instance: ReactInstance): instance is Component<any>;
    /**
     * Returns `true` if `instance` is a component whose type is of a React `componentClass`.
     */
    function isCompositeComponentWithType<T extends Component<any>, C extends ComponentClass<any>>(
        instance: ReactInstance, type: ClassType<any, T, C>): boolean;

    /**
     * Traverse all components in `tree` and accumulate all components where
     * `test(component)` is `true`. This is not that useful on its own, but it's used
     * as a primitive for other test utils.
     */
    function findAllInRenderedTree(
        root: Component<any>,
        fn: (i: ReactInstance) => boolean): ReactInstance[];

    /**
     * Finds all DOM elements of components in the rendered tree that are
     * DOM components with the class name matching `className`.
     */
    function scryRenderedDOMComponentsWithClass(
        root: Component<any>,
        className: string): Element[];
    /**
     * Like `scryRenderedDOMComponentsWithClass()` but expects there to be one result,
     * and returns that one result, or throws exception if there is any other
     * number of matches besides one.
     */
    function findRenderedDOMComponentWithClass(
        root: Component<any>,
        className: string): Element;

    /**
     * Finds all DOM elements of components in the rendered tree that are
     * DOM components with the tag name matching `tagName`.
     */
    function scryRenderedDOMComponentsWithTag(
        root: Component<any>,
        tagName: string): Element[];
    /**
     * Like `scryRenderedDOMComponentsWithTag()` but expects there to be one result,
     * and returns that one result, or throws exception if there is any other
     * number of matches besides one.
     */
    function findRenderedDOMComponentWithTag(
        root: Component<any>,
        tagName: string): Element;

    /**
     * Finds all instances of components with type equal to `componentClass`.
     */
    function scryRenderedComponentsWithType<T extends Component<any>, C extends ComponentClass<any>>(
        root: Component<any>,
        type: ClassType<any, T, C>): T[];

    /**
     * Same as `scryRenderedComponentsWithType()` but expects there to be one result
     * and returns that one result, or throws exception if there is any other
     * number of matches besides one.
     */
    function findRenderedComponentWithType<T extends Component<any>, C extends ComponentClass<any>>(
        root: Component<any>,
        type: ClassType<any, T, C>): T;

    /**
     * Call this in your tests to create a shallow renderer.
     */
    function createRenderer(): ShallowRenderer;
}
