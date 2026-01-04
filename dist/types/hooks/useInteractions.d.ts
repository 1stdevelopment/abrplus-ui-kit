import { AnyHandlerEventTypes, GestureHandlers } from '@use-gesture/react';
/**
 * @example
 *   const { isTabFocused, eventHandlers } = useInteractions();
 *
 *   return <button {...eventHandlers()} />;
 */
declare function useInteractions<HandlerTypes extends AnyHandlerEventTypes>({ onHover, onBlur, onFocus, onMouseDown, onMouseUp, onMouseLeave, onKeyUp, ...handlers }?: GestureHandlers<HandlerTypes>): {
    eventHandlers: (...args: any[]) => import('@use-gesture/react/dist/declarations/src/types').ReactDOMAttributes;
    isFocused: boolean;
    isHovered: boolean;
    isActive: boolean;
    isTabFocused: boolean;
};
export { useInteractions };
