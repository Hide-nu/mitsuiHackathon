import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _styled;

import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { elementTypeAcceptingRef, refType } from '@mui/utils';
import { useButton } from '@mui/core/ButtonUnstyled';
import composeClasses from '@mui/core/composeClasses';
import styled from '../styles/styled';
import useThemeProps from '../styles/useThemeProps';
import useForkRef from '../utils/useForkRef';
import TouchRipple from './TouchRipple';
import buttonBaseClasses, { getButtonBaseUtilityClass } from './buttonBaseClasses';
import useTouchRipple from '../useTouchRipple';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var disabled = ownerState.disabled,
      focusVisible = ownerState.focusVisible,
      focusVisibleClassName = ownerState.focusVisibleClassName,
      classes = ownerState.classes;
  var slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  var composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);

  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += " ".concat(focusVisibleClassName);
  }

  return composedClasses;
};

export var ButtonBaseRoot = styled('button', {
  name: 'MuiButtonBase',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})((_styled = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.

  }
}, _defineProperty(_styled, "&.".concat(buttonBaseClasses.disabled), {
  pointerEvents: 'none',
  // Disable link interactions
  cursor: 'default'
}), _defineProperty(_styled, '@media print', {
  colorAdjust: 'exact'
}), _styled));
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

var ButtonBase = /*#__PURE__*/React.forwardRef(function ButtonBase(inProps, ref) {
  var props = useThemeProps({
    props: inProps,
    name: 'MuiButtonBase'
  });

  var action = props.action,
      _props$centerRipple = props.centerRipple,
      centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
      children = props.children,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableRipple = props.disableRipple,
      disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
      _props$disableTouchRi = props.disableTouchRipple,
      disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
      _props$focusRipple = props.focusRipple,
      focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$LinkComponent = props.LinkComponent,
      LinkComponent = _props$LinkComponent === void 0 ? 'a' : _props$LinkComponent,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onContextMenu = props.onContextMenu,
      onDragLeave = props.onDragLeave,
      onFocus = props.onFocus,
      onFocusVisible = props.onFocusVisible,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onMouseDown = props.onMouseDown,
      onMouseLeave = props.onMouseLeave,
      onMouseUp = props.onMouseUp,
      onTouchEnd = props.onTouchEnd,
      onTouchMove = props.onTouchMove,
      onTouchStart = props.onTouchStart,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      TouchRippleProps = props.TouchRippleProps,
      type = props.type,
      other = _objectWithoutProperties(props, ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"]);

  var buttonRef = React.useRef(null);
  var handleRef = useForkRef(buttonRef, ref);
  var rippleRef = React.useRef(null);
  var ComponentProp = component;

  if (ComponentProp === 'button' && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }

  var _useButton = useButton(_extends({}, props, {
    component: ComponentProp,
    ref: handleRef
  })),
      focusVisible = _useButton.focusVisible,
      setFocusVisible = _useButton.setFocusVisible,
      getRootProps = _useButton.getRootProps;

  React.useImperativeHandle(action, function () {
    return {
      focusVisible: function focusVisible() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, [setFocusVisible]);

  var _useTouchRipple = useTouchRipple({
    disabled: disabled,
    disableFocusRipple: !focusRipple,
    disableRipple: disableRipple,
    disableTouchRipple: disableTouchRipple,
    focusVisible: focusVisible,
    rippleRef: rippleRef
  }),
      enableTouchRipple = _useTouchRipple.enableTouchRipple,
      getRippleHandlers = _useTouchRipple.getRippleHandlers;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(function () {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(['Material-UI: The `component` prop provided to ButtonBase is invalid.', 'Please make sure the children prop is rendered in this custom component.'].join('\n'));
      }
    }, [enableTouchRipple]);
  }

  var ownerState = _extends({}, props, {
    centerRipple: centerRipple,
    component: component,
    disabled: disabled,
    disableRipple: disableRipple,
    disableTouchRipple: disableTouchRipple,
    focusRipple: focusRipple,
    tabIndex: tabIndex,
    focusVisible: focusVisible
  });

  var classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState: ownerState
  }, getRootProps(getRippleHandlers(props)), other, {
    children: [children, enableTouchRipple ?
    /*#__PURE__*/

    /* TouchRipple is only needed client-side, x2 boost on the server. */
    _jsx(TouchRipple, _extends({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});
process.env.NODE_ENV !== "production" ? ButtonBase.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: refType,

  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: PropTypes.bool,

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef,

  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,

  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: PropTypes.bool,

  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: PropTypes.bool,

  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes.string,

  /**
   * @ignore
   */
  href: PropTypes
  /* @typescript-to-proptypes-ignore */
  .any,

  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: PropTypes.elementType,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * @ignore
   */
  onClick: PropTypes.func,

  /**
   * @ignore
   */
  onContextMenu: PropTypes.func,

  /**
   * @ignore
   */
  onDragLeave: PropTypes.func,

  /**
   * @ignore
   */
  onFocus: PropTypes.func,

  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: PropTypes.func,

  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,

  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,

  /**
   * @ignore
   */
  onMouseDown: PropTypes.func,

  /**
   * @ignore
   */
  onMouseLeave: PropTypes.func,

  /**
   * @ignore
   */
  onMouseUp: PropTypes.func,

  /**
   * @ignore
   */
  onTouchEnd: PropTypes.func,

  /**
   * @ignore
   */
  onTouchMove: PropTypes.func,

  /**
   * @ignore
   */
  onTouchStart: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,

  /**
   * @default 0
   */
  tabIndex: PropTypes.number,

  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes.object,

  /**
   * @ignore
   */
  type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string])
} : void 0;
export default ButtonBase;