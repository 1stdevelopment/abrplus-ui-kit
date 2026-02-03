import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { Collapse, Input as Input$1, Tooltip as Tooltip$1, Divider, Flex as Flex$1, Tag as Tag$1, Select as Select$1, ConfigProvider, TreeSelect, TimePicker, Tree as Tree$1, Spin } from "antd";
import React, { useRef, useState, useMemo, Children, forwardRef, useEffect, Fragment, useCallback, memo, isValidElement } from "react";
import { R as Render, I as Icon, T as Text, F as Flex, L as Loading } from "./index-C24zbKLS.js";
import { twMerge } from "tailwind-merge";
import { c as colors } from "./colors-CztsZ6e_.js";
import { a as Breadcrumbs, U as Upload, I as InputErrorMessage, m as mainExports, d as datePickerColors, V as VerticalLine, b as Checkbox, B as BorderedTitle, C as Card } from "./index-WgcaHHjH.js";
import { A as Avatar } from "./index-DLUd_0LP.js";
import { T as Tooltip, b as batch, I as IconButton } from "./index-CQKRmQkW.js";
import { B, a, f, p } from "./index-CQKRmQkW.js";
import { useTranslation } from "react-i18next";
import starkString from "starkstring";
import { D as Dropdown, I as InfiniteLoader, a as Image } from "./index-DCojd1ld.js";
import require$$0$1 from "moment-jalaali";
import { I as InternalRequestError, u as useSensors, a as useSensor, D as DndContext, S as SortableContext, v as verticalListSortingStrategy, M as MouseSensor, b as useSortable, C as CSS } from "./sortable.esm-DfJu5xWT.js";
import { L } from "./sortable.esm-DfJu5xWT.js";
import i18n, { t } from "i18next";
import { notification, ConfigProvider as ConfigProvider$1 } from "antd/lib";
import { useNavigate, useSearchParams } from "react-router-dom";
const useDebounce = (fn, delay) => {
  const timerRef = useRef(null);
  return (...args) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
function clamp(v, min2, max2) {
  return Math.max(min2, Math.min(v, max2));
}
const V = {
  toVector(v, fallback) {
    if (v === void 0) v = fallback;
    return Array.isArray(v) ? v : [v, v];
  },
  add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
  },
  sub(v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1]];
  },
  addTo(v1, v2) {
    v1[0] += v2[0];
    v1[1] += v2[1];
  },
  subTo(v1, v2) {
    v1[0] -= v2[0];
    v1[1] -= v2[1];
  }
};
function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity) return Math.pow(distance, constant * 5);
  return distance * dimension * constant / (dimension + constant * distance);
}
function rubberbandIfOutOfBounds(position, min2, max2, constant = 0.15) {
  if (constant === 0) return clamp(position, min2, max2);
  if (position < min2) return -rubberband(min2 - position, max2 - min2, constant) + min2;
  if (position > max2) return +rubberband(position - max2, max2 - min2, constant) + max2;
  return position;
}
function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
  const [[X0, X1], [Y0, Y1]] = bounds;
  return [rubberbandIfOutOfBounds(Vx, X0, X1, Rx), rubberbandIfOutOfBounds(Vy, Y0, Y1, Ry)];
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e, r) {
  var t2 = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
      _defineProperty(e, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e;
}
const EVENT_TYPE_MAP = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function capitalize(string) {
  if (!string) return "";
  return string[0].toUpperCase() + string.slice(1);
}
const actionsWithoutCaptureSupported = ["enter", "leave"];
function hasCapture(capture = false, actionKey) {
  return capture && !actionsWithoutCaptureSupported.includes(actionKey);
}
function toHandlerProp(device, action = "", capture = false) {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return "on" + capitalize(device) + capitalize(actionKey) + (hasCapture(capture, actionKey) ? "Capture" : "");
}
const pointerCaptureEvents = ["gotpointercapture", "lostpointercapture"];
function parseProp(prop) {
  let eventKey = prop.substring(2).toLowerCase();
  const passive = !!~eventKey.indexOf("passive");
  if (passive) eventKey = eventKey.replace("passive", "");
  const captureKey = pointerCaptureEvents.includes(eventKey) ? "capturecapture" : "capture";
  const capture = !!~eventKey.indexOf(captureKey);
  if (capture) eventKey = eventKey.replace("capture", "");
  return {
    device: eventKey,
    capture,
    passive
  };
}
function toDomEventType(device, action = "") {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return device + actionKey;
}
function isTouch(event) {
  return "touches" in event;
}
function getPointerType(event) {
  if (isTouch(event)) return "touch";
  if ("pointerType" in event) return event.pointerType;
  return "mouse";
}
function getCurrentTargetTouchList(event) {
  return Array.from(event.touches).filter((e) => {
    var _event$currentTarget, _event$currentTarget$;
    return e.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 || (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e.target));
  });
}
function getTouchList(event) {
  return event.type === "touchend" || event.type === "touchcancel" ? event.changedTouches : event.targetTouches;
}
function getValueEvent(event) {
  return isTouch(event) ? getTouchList(event)[0] : event;
}
function distanceAngle(P1, P2) {
  try {
    const dx = P2.clientX - P1.clientX;
    const dy = P2.clientY - P1.clientY;
    const cx = (P2.clientX + P1.clientX) / 2;
    const cy = (P2.clientY + P1.clientY) / 2;
    const distance = Math.hypot(dx, dy);
    const angle = -(Math.atan2(dx, dy) * 180) / Math.PI;
    const origin = [cx, cy];
    return {
      angle,
      distance,
      origin
    };
  } catch (_unused) {
  }
  return null;
}
function touchIds(event) {
  return getCurrentTargetTouchList(event).map((touch) => touch.identifier);
}
function touchDistanceAngle(event, ids) {
  const [P1, P2] = Array.from(event.touches).filter((touch) => ids.includes(touch.identifier));
  return distanceAngle(P1, P2);
}
function pointerId(event) {
  const valueEvent = getValueEvent(event);
  return isTouch(event) ? valueEvent.identifier : valueEvent.pointerId;
}
function pointerValues(event) {
  const valueEvent = getValueEvent(event);
  return [valueEvent.clientX, valueEvent.clientY];
}
const LINE_HEIGHT = 40;
const PAGE_HEIGHT = 800;
function wheelValues(event) {
  let {
    deltaX,
    deltaY,
    deltaMode
  } = event;
  if (deltaMode === 1) {
    deltaX *= LINE_HEIGHT;
    deltaY *= LINE_HEIGHT;
  } else if (deltaMode === 2) {
    deltaX *= PAGE_HEIGHT;
    deltaY *= PAGE_HEIGHT;
  }
  return [deltaX, deltaY];
}
function scrollValues(event) {
  var _ref, _ref2;
  const {
    scrollX,
    scrollY,
    scrollLeft,
    scrollTop
  } = event.currentTarget;
  return [(_ref = scrollX !== null && scrollX !== void 0 ? scrollX : scrollLeft) !== null && _ref !== void 0 ? _ref : 0, (_ref2 = scrollY !== null && scrollY !== void 0 ? scrollY : scrollTop) !== null && _ref2 !== void 0 ? _ref2 : 0];
}
function getEventDetails(event) {
  const payload = {};
  if ("buttons" in event) payload.buttons = event.buttons;
  if ("shiftKey" in event) {
    const {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    } = event;
    Object.assign(payload, {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    });
  }
  return payload;
}
function call(v, ...args) {
  if (typeof v === "function") {
    return v(...args);
  } else {
    return v;
  }
}
function noop() {
}
function chain(...fns) {
  if (fns.length === 0) return noop;
  if (fns.length === 1) return fns[0];
  return function() {
    let result;
    for (const fn of fns) {
      result = fn.apply(this, arguments) || result;
    }
    return result;
  };
}
function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {});
}
const BEFORE_LAST_KINEMATICS_DELAY = 32;
class Engine {
  constructor(ctrl, args, key) {
    this.ctrl = ctrl;
    this.args = args;
    this.key = key;
    if (!this.state) {
      this.state = {};
      this.computeValues([0, 0]);
      this.computeInitial();
      if (this.init) this.init();
      this.reset();
    }
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(state) {
    this.ctrl.state[this.key] = state;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state,
      shared,
      ingKey,
      args
    } = this;
    shared[ingKey] = state._active = state.active = state._blocked = state._force = false;
    state._step = [false, false];
    state.intentional = false;
    state._movement = [0, 0];
    state._distance = [0, 0];
    state._direction = [0, 0];
    state._delta = [0, 0];
    state._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]];
    state.args = args;
    state.axis = void 0;
    state.memo = void 0;
    state.elapsedTime = state.timeDelta = 0;
    state.direction = [0, 0];
    state.distance = [0, 0];
    state.overflow = [0, 0];
    state._movementBound = [false, false];
    state.velocity = [0, 0];
    state.movement = [0, 0];
    state.delta = [0, 0];
    state.timeStamp = 0;
  }
  start(event) {
    const state = this.state;
    const config = this.config;
    if (!state._active) {
      this.reset();
      this.computeInitial();
      state._active = true;
      state.target = event.target;
      state.currentTarget = event.currentTarget;
      state.lastOffset = config.from ? call(config.from, state) : state.offset;
      state.offset = state.lastOffset;
      state.startTime = state.timeStamp = event.timeStamp;
    }
  }
  computeValues(values) {
    const state = this.state;
    state._values = values;
    state.values = this.config.transform(values);
  }
  computeInitial() {
    const state = this.state;
    state._initial = state._values;
    state.initial = state.values;
  }
  compute(event) {
    const {
      state,
      config,
      shared
    } = this;
    state.args = this.args;
    let dt = 0;
    if (event) {
      state.event = event;
      if (config.preventDefault && event.cancelable) state.event.preventDefault();
      state.type = event.type;
      shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size;
      shared.locked = !!document.pointerLockElement;
      Object.assign(shared, getEventDetails(event));
      shared.down = shared.pressed = shared.buttons % 2 === 1 || shared.touches > 0;
      dt = event.timeStamp - state.timeStamp;
      state.timeStamp = event.timeStamp;
      state.elapsedTime = state.timeStamp - state.startTime;
    }
    if (state._active) {
      const _absoluteDelta = state._delta.map(Math.abs);
      V.addTo(state._distance, _absoluteDelta);
    }
    if (this.axisIntent) this.axisIntent(event);
    const [_m0, _m1] = state._movement;
    const [t0, t1] = config.threshold;
    const {
      _step,
      values
    } = state;
    if (config.hasCustomTransform) {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && values[0];
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && values[1];
    } else {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && Math.sign(_m0) * t0;
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && Math.sign(_m1) * t1;
    }
    state.intentional = _step[0] !== false || _step[1] !== false;
    if (!state.intentional) return;
    const movement = [0, 0];
    if (config.hasCustomTransform) {
      const [v0, v1] = values;
      movement[0] = _step[0] !== false ? v0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? v1 - _step[1] : 0;
    } else {
      movement[0] = _step[0] !== false ? _m0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? _m1 - _step[1] : 0;
    }
    if (this.restrictToAxis && !state._blocked) this.restrictToAxis(movement);
    const previousOffset = state.offset;
    const gestureIsActive = state._active && !state._blocked || state.active;
    if (gestureIsActive) {
      state.first = state._active && !state.active;
      state.last = !state._active && state.active;
      state.active = shared[this.ingKey] = state._active;
      if (event) {
        if (state.first) {
          if ("bounds" in config) state._bounds = call(config.bounds, state);
          if (this.setup) this.setup();
        }
        state.movement = movement;
        this.computeOffset();
      }
    }
    const [ox, oy] = state.offset;
    const [[x0, x1], [y0, y1]] = state._bounds;
    state.overflow = [ox < x0 ? -1 : ox > x1 ? 1 : 0, oy < y0 ? -1 : oy > y1 ? 1 : 0];
    state._movementBound[0] = state.overflow[0] ? state._movementBound[0] === false ? state._movement[0] : state._movementBound[0] : false;
    state._movementBound[1] = state.overflow[1] ? state._movementBound[1] === false ? state._movement[1] : state._movementBound[1] : false;
    const rubberband2 = state._active ? config.rubberband || [0, 0] : [0, 0];
    state.offset = computeRubberband(state._bounds, state.offset, rubberband2);
    state.delta = V.sub(state.offset, previousOffset);
    this.computeMovement();
    if (gestureIsActive && (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY)) {
      state.delta = V.sub(state.offset, previousOffset);
      const absoluteDelta = state.delta.map(Math.abs);
      V.addTo(state.distance, absoluteDelta);
      state.direction = state.delta.map(Math.sign);
      state._direction = state._delta.map(Math.sign);
      if (!state.first && dt > 0) {
        state.velocity = [absoluteDelta[0] / dt, absoluteDelta[1] / dt];
        state.timeDelta = dt;
      }
    }
  }
  emit() {
    const state = this.state;
    const shared = this.shared;
    const config = this.config;
    if (!state._active) this.clean();
    if ((state._blocked || !state.intentional) && !state._force && !config.triggerAllEvents) return;
    const memo2 = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, shared), state), {}, {
      [this.aliasKey]: state.values
    }));
    if (memo2 !== void 0) state.memo = memo2;
  }
  clean() {
    this.eventStore.clean();
    this.timeoutStore.clean();
  }
}
function selectAxis([dx, dy], threshold) {
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);
  if (absDx > absDy && absDx > threshold) {
    return "x";
  }
  if (absDy > absDx && absDy > threshold) {
    return "y";
  }
  return void 0;
}
class CoordinatesEngine extends Engine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "aliasKey", "xy");
  }
  reset() {
    super.reset();
    this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0];
    this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = V.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = V.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(event) {
    const state = this.state;
    const config = this.config;
    if (!state.axis && event) {
      const threshold = typeof config.axisThreshold === "object" ? config.axisThreshold[getPointerType(event)] : config.axisThreshold;
      state.axis = selectAxis(state._movement, threshold);
    }
    state._blocked = (config.lockDirection || !!config.axis) && !state.axis || !!config.axis && config.axis !== state.axis;
  }
  restrictToAxis(v) {
    if (this.config.axis || this.config.lockDirection) {
      switch (this.state.axis) {
        case "x":
          v[1] = 0;
          break;
        case "y":
          v[0] = 0;
          break;
      }
    }
  }
}
const identity = (v) => v;
const DEFAULT_RUBBERBAND = 0.15;
const commonConfigResolver = {
  enabled(value = true) {
    return value;
  },
  eventOptions(value, _k, config) {
    return _objectSpread2(_objectSpread2({}, config.shared.eventOptions), value);
  },
  preventDefault(value = false) {
    return value;
  },
  triggerAllEvents(value = false) {
    return value;
  },
  rubberband(value = 0) {
    switch (value) {
      case true:
        return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND];
      case false:
        return [0, 0];
      default:
        return V.toVector(value);
    }
  },
  from(value) {
    if (typeof value === "function") return value;
    if (value != null) return V.toVector(value);
  },
  transform(value, _k, config) {
    const transform = value || config.shared.transform;
    this.hasCustomTransform = !!transform;
    if (process.env.NODE_ENV === "development") {
      const originalTransform = transform || identity;
      return (v) => {
        const r = originalTransform(v);
        if (!isFinite(r[0]) || !isFinite(r[1])) {
          console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${r[0]},${[1]}]`);
        }
        return r;
      };
    }
    return transform || identity;
  },
  threshold(value) {
    return V.toVector(value, 0);
  }
};
if (process.env.NODE_ENV === "development") {
  Object.assign(commonConfigResolver, {
    domTarget(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
      }
      return NaN;
    },
    lockDirection(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`lockDirection\` option has been merged with \`axis\`. Use it as in \`{ axis: 'lock' }\``);
      }
      return NaN;
    },
    initial(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`initial\` option has been renamed to \`from\`.`);
      }
      return NaN;
    }
  });
}
const DEFAULT_AXIS_THRESHOLD = 0;
const coordinatesConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  axis(_v, _k, {
    axis
  }) {
    this.lockDirection = axis === "lock";
    if (!this.lockDirection) return axis;
  },
  axisThreshold(value = DEFAULT_AXIS_THRESHOLD) {
    return value;
  },
  bounds(value = {}) {
    if (typeof value === "function") {
      return (state) => coordinatesConfigResolver.bounds(value(state));
    }
    if ("current" in value) {
      return () => value.current;
    }
    if (typeof HTMLElement === "function" && value instanceof HTMLElement) {
      return value;
    }
    const {
      left = -Infinity,
      right = Infinity,
      top = -Infinity,
      bottom = Infinity
    } = value;
    return [[left, right], [top, bottom]];
  }
});
const KEYS_DELTA_MAP = {
  ArrowRight: (displacement, factor = 1) => [displacement * factor, 0],
  ArrowLeft: (displacement, factor = 1) => [-1 * displacement * factor, 0],
  ArrowUp: (displacement, factor = 1) => [0, -1 * displacement * factor],
  ArrowDown: (displacement, factor = 1) => [0, displacement * factor]
};
class DragEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    const state = this.state;
    state._pointerId = void 0;
    state._pointerActive = false;
    state._keyboardActive = false;
    state._preventScroll = false;
    state._delayed = false;
    state.swipe = [0, 0];
    state.tap = false;
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
  }
  setup() {
    const state = this.state;
    if (state._bounds instanceof HTMLElement) {
      const boundRect = state._bounds.getBoundingClientRect();
      const targetRect = state.currentTarget.getBoundingClientRect();
      const _bounds = {
        left: boundRect.left - targetRect.left + state.offset[0],
        right: boundRect.right - targetRect.right + state.offset[0],
        top: boundRect.top - targetRect.top + state.offset[1],
        bottom: boundRect.bottom - targetRect.bottom + state.offset[1]
      };
      state._bounds = coordinatesConfigResolver.bounds(_bounds);
    }
  }
  cancel() {
    const state = this.state;
    if (state.canceled) return;
    state.canceled = true;
    state._active = false;
    setTimeout(() => {
      this.compute();
      this.emit();
    }, 0);
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean();
    this.state._pointerActive = false;
    this.state._keyboardActive = false;
    super.clean();
  }
  pointerDown(event) {
    const config = this.config;
    const state = this.state;
    if (event.buttons != null && (Array.isArray(config.pointerButtons) ? !config.pointerButtons.includes(event.buttons) : config.pointerButtons !== -1 && config.pointerButtons !== event.buttons)) return;
    const ctrlIds = this.ctrl.setEventIds(event);
    if (config.pointerCapture) {
      event.target.setPointerCapture(event.pointerId);
    }
    if (ctrlIds && ctrlIds.size > 1 && state._pointerActive) return;
    this.start(event);
    this.setupPointer(event);
    state._pointerId = pointerId(event);
    state._pointerActive = true;
    this.computeValues(pointerValues(event));
    this.computeInitial();
    if (config.preventScrollAxis && getPointerType(event) !== "mouse") {
      state._active = false;
      this.setupScrollPrevention(event);
    } else if (config.delay > 0) {
      this.setupDelayTrigger(event);
      if (config.triggerAllEvents) {
        this.compute(event);
        this.emit();
      }
    } else {
      this.startPointerDrag(event);
    }
  }
  startPointerDrag(event) {
    const state = this.state;
    state._active = true;
    state._preventScroll = true;
    state._delayed = false;
    this.compute(event);
    this.emit();
  }
  pointerMove(event) {
    const state = this.state;
    const config = this.config;
    if (!state._pointerActive) return;
    const id = pointerId(event);
    if (state._pointerId !== void 0 && id !== state._pointerId) return;
    const _values = pointerValues(event);
    if (document.pointerLockElement === event.target) {
      state._delta = [event.movementX, event.movementY];
    } else {
      state._delta = V.sub(_values, state._values);
      this.computeValues(_values);
    }
    V.addTo(state._movement, state._delta);
    this.compute(event);
    if (state._delayed && state.intentional) {
      this.timeoutStore.remove("dragDelay");
      state.active = false;
      this.startPointerDrag(event);
      return;
    }
    if (config.preventScrollAxis && !state._preventScroll) {
      if (state.axis) {
        if (state.axis === config.preventScrollAxis || config.preventScrollAxis === "xy") {
          state._active = false;
          this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag");
          this.startPointerDrag(event);
          return;
        }
      } else {
        return;
      }
    }
    this.emit();
  }
  pointerUp(event) {
    this.ctrl.setEventIds(event);
    try {
      if (this.config.pointerCapture && event.target.hasPointerCapture(event.pointerId)) {
        ;
        event.target.releasePointerCapture(event.pointerId);
      }
    } catch (_unused) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`[@use-gesture]: If you see this message, it's likely that you're using an outdated version of \`@react-three/fiber\`. 

Please upgrade to the latest version.`);
      }
    }
    const state = this.state;
    const config = this.config;
    if (!state._active || !state._pointerActive) return;
    const id = pointerId(event);
    if (state._pointerId !== void 0 && id !== state._pointerId) return;
    this.state._pointerActive = false;
    this.setActive();
    this.compute(event);
    const [dx, dy] = state._distance;
    state.tap = dx <= config.tapsThreshold && dy <= config.tapsThreshold;
    if (state.tap && config.filterTaps) {
      state._force = true;
    } else {
      const [_dx, _dy] = state._delta;
      const [_mx, _my] = state._movement;
      const [svx, svy] = config.swipe.velocity;
      const [sx, sy] = config.swipe.distance;
      const sdt = config.swipe.duration;
      if (state.elapsedTime < sdt) {
        const _vx = Math.abs(_dx / state.timeDelta);
        const _vy = Math.abs(_dy / state.timeDelta);
        if (_vx > svx && Math.abs(_mx) > sx) state.swipe[0] = Math.sign(_dx);
        if (_vy > svy && Math.abs(_my) > sy) state.swipe[1] = Math.sign(_dy);
      }
    }
    this.emit();
  }
  pointerClick(event) {
    if (!this.state.tap && event.detail > 0) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  setupPointer(event) {
    const config = this.config;
    const device = config.device;
    if (process.env.NODE_ENV === "development") {
      try {
        if (device === "pointer" && config.preventScrollDelay === void 0) {
          const currentTarget = "uv" in event ? event.sourceEvent.currentTarget : event.currentTarget;
          const style = window.getComputedStyle(currentTarget);
          if (style.touchAction === "auto") {
            console.warn(`[@use-gesture]: The drag target has its \`touch-action\` style property set to \`auto\`. It is recommended to add \`touch-action: 'none'\` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.

This message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.`, currentTarget);
          }
        }
      } catch (_unused2) {
      }
    }
    if (config.pointerLock) {
      event.currentTarget.requestPointerLock();
    }
    if (!config.pointerCapture) {
      this.eventStore.add(this.sharedConfig.window, device, "change", this.pointerMove.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, "end", this.pointerUp.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, "cancel", this.pointerUp.bind(this));
    }
  }
  pointerClean() {
    if (this.config.pointerLock && document.pointerLockElement === this.state.currentTarget) {
      document.exitPointerLock();
    }
  }
  preventScroll(event) {
    if (this.state._preventScroll && event.cancelable) {
      event.preventDefault();
    }
  }
  setupScrollPrevention(event) {
    this.state._preventScroll = false;
    persistEvent(event);
    const remove = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: false
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", remove);
    this.eventStore.add(this.sharedConfig.window, "touch", "cancel", remove);
    this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, event);
  }
  setupDelayTrigger(event) {
    this.state._delayed = true;
    this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0];
      this.startPointerDrag(event);
    }, this.config.delay);
  }
  keyDown(event) {
    const deltaFn = KEYS_DELTA_MAP[event.key];
    if (deltaFn) {
      const state = this.state;
      const factor = event.shiftKey ? 10 : event.altKey ? 0.1 : 1;
      this.start(event);
      state._delta = deltaFn(this.config.keyboardDisplacement, factor);
      state._keyboardActive = true;
      V.addTo(state._movement, state._delta);
      this.compute(event);
      this.emit();
    }
  }
  keyUp(event) {
    if (!(event.key in KEYS_DELTA_MAP)) return;
    this.state._keyboardActive = false;
    this.setActive();
    this.compute(event);
    this.emit();
  }
  bind(bindFunction) {
    const device = this.config.device;
    bindFunction(device, "start", this.pointerDown.bind(this));
    if (this.config.pointerCapture) {
      bindFunction(device, "change", this.pointerMove.bind(this));
      bindFunction(device, "end", this.pointerUp.bind(this));
      bindFunction(device, "cancel", this.pointerUp.bind(this));
      bindFunction("lostPointerCapture", "", this.pointerUp.bind(this));
    }
    if (this.config.keys) {
      bindFunction("key", "down", this.keyDown.bind(this));
      bindFunction("key", "up", this.keyUp.bind(this));
    }
    if (this.config.filterTaps) {
      bindFunction("click", "", this.pointerClick.bind(this), {
        capture: true,
        passive: false
      });
    }
  }
}
function persistEvent(event) {
  "persist" in event && typeof event.persist === "function" && event.persist();
}
const isBrowser = typeof window !== "undefined" && window.document && window.document.createElement;
function supportsTouchEvents() {
  return isBrowser && "ontouchstart" in window;
}
function isTouchScreen() {
  return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
}
function supportsPointerEvents() {
  return isBrowser && "onpointerdown" in window;
}
function supportsPointerLock() {
  return isBrowser && "exitPointerLock" in window.document;
}
function supportsGestureEvents() {
  try {
    return "constructor" in GestureEvent;
  } catch (e) {
    return false;
  }
}
const SUPPORT = {
  isBrowser,
  gesture: supportsGestureEvents(),
  touch: supportsTouchEvents(),
  touchscreen: isTouchScreen(),
  pointer: supportsPointerEvents(),
  pointerLock: supportsPointerLock()
};
const DEFAULT_PREVENT_SCROLL_DELAY = 250;
const DEFAULT_DRAG_DELAY = 180;
const DEFAULT_SWIPE_VELOCITY = 0.5;
const DEFAULT_SWIPE_DISTANCE = 50;
const DEFAULT_SWIPE_DURATION = 250;
const DEFAULT_KEYBOARD_DISPLACEMENT = 10;
const DEFAULT_DRAG_AXIS_THRESHOLD = {
  mouse: 0,
  touch: 0,
  pen: 8
};
const dragConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  device(_v, _k, {
    pointer: {
      touch = false,
      lock = false,
      mouse = false
    } = {}
  }) {
    this.pointerLock = lock && SUPPORT.pointerLock;
    if (SUPPORT.touch && touch) return "touch";
    if (this.pointerLock) return "mouse";
    if (SUPPORT.pointer && !mouse) return "pointer";
    if (SUPPORT.touch) return "touch";
    return "mouse";
  },
  preventScrollAxis(value, _k, {
    preventScroll
  }) {
    this.preventScrollDelay = typeof preventScroll === "number" ? preventScroll : preventScroll || preventScroll === void 0 && value ? DEFAULT_PREVENT_SCROLL_DELAY : void 0;
    if (!SUPPORT.touchscreen || preventScroll === false) return void 0;
    return value ? value : preventScroll !== void 0 ? "y" : void 0;
  },
  pointerCapture(_v, _k, {
    pointer: {
      capture = true,
      buttons = 1,
      keys = true
    } = {}
  }) {
    this.pointerButtons = buttons;
    this.keys = keys;
    return !this.pointerLock && this.device === "pointer" && capture;
  },
  threshold(value, _k, {
    filterTaps = false,
    tapsThreshold = 3,
    axis = void 0
  }) {
    const threshold = V.toVector(value, filterTaps ? tapsThreshold : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    this.tapsThreshold = tapsThreshold;
    return threshold;
  },
  swipe({
    velocity = DEFAULT_SWIPE_VELOCITY,
    distance = DEFAULT_SWIPE_DISTANCE,
    duration = DEFAULT_SWIPE_DURATION
  } = {}) {
    return {
      velocity: this.transform(V.toVector(velocity)),
      distance: this.transform(V.toVector(distance)),
      duration
    };
  },
  delay(value = 0) {
    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;
      case false:
        return 0;
      default:
        return value;
    }
  },
  axisThreshold(value) {
    if (!value) return DEFAULT_DRAG_AXIS_THRESHOLD;
    return _objectSpread2(_objectSpread2({}, DEFAULT_DRAG_AXIS_THRESHOLD), value);
  },
  keyboardDisplacement(value = DEFAULT_KEYBOARD_DISPLACEMENT) {
    return value;
  }
});
if (process.env.NODE_ENV === "development") {
  Object.assign(dragConfigResolver, {
    useTouch(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`useTouch\` option has been renamed to \`pointer.touch\`. Use it as in \`{ pointer: { touch: true } }\`.`);
      }
      return NaN;
    },
    experimental_preventWindowScrollY(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`experimental_preventWindowScrollY\` option has been renamed to \`preventScroll\`.`);
      }
      return NaN;
    },
    swipeVelocity(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeVelocity\` option has been renamed to \`swipe.velocity\`. Use it as in \`{ swipe: { velocity: 0.5 } }\`.`);
      }
      return NaN;
    },
    swipeDistance(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeDistance\` option has been renamed to \`swipe.distance\`. Use it as in \`{ swipe: { distance: 50 } }\`.`);
      }
      return NaN;
    },
    swipeDuration(value) {
      if (value !== void 0) {
        throw Error(`[@use-gesture]: \`swipeDuration\` option has been renamed to \`swipe.duration\`. Use it as in \`{ swipe: { duration: 250 } }\`.`);
      }
      return NaN;
    }
  });
}
function clampStateInternalMovementToBounds(state) {
  const [ox, oy] = state.overflow;
  const [dx, dy] = state._delta;
  const [dirx, diry] = state._direction;
  if (ox < 0 && dx > 0 && dirx < 0 || ox > 0 && dx < 0 && dirx > 0) {
    state._movement[0] = state._movementBound[0];
  }
  if (oy < 0 && dy > 0 && diry < 0 || oy > 0 && dy < 0 && diry > 0) {
    state._movement[1] = state._movementBound[1];
  }
}
const SCALE_ANGLE_RATIO_INTENT_DEG = 30;
const PINCH_WHEEL_RATIO = 100;
class PinchEngine extends Engine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "pinching");
    _defineProperty(this, "aliasKey", "da");
  }
  init() {
    this.state.offset = [1, 0];
    this.state.lastOffset = [1, 0];
    this.state._pointerEvents = /* @__PURE__ */ new Map();
  }
  reset() {
    super.reset();
    const state = this.state;
    state._touchIds = [];
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
    state.turns = 0;
  }
  computeOffset() {
    const {
      type: type2,
      movement,
      lastOffset
    } = this.state;
    if (type2 === "wheel") {
      this.state.offset = V.add(movement, lastOffset);
    } else {
      this.state.offset = [(1 + movement[0]) * lastOffset[0], movement[1] + lastOffset[1]];
    }
  }
  computeMovement() {
    const {
      offset,
      lastOffset
    } = this.state;
    this.state.movement = [offset[0] / lastOffset[0], offset[1] - lastOffset[1]];
  }
  axisIntent() {
    const state = this.state;
    const [_m0, _m1] = state._movement;
    if (!state.axis) {
      const axisMovementDifference = Math.abs(_m0) * SCALE_ANGLE_RATIO_INTENT_DEG - Math.abs(_m1);
      if (axisMovementDifference < 0) state.axis = "angle";
      else if (axisMovementDifference > 0) state.axis = "scale";
    }
  }
  restrictToAxis(v) {
    if (this.config.lockDirection) {
      if (this.state.axis === "scale") v[1] = 0;
      else if (this.state.axis === "angle") v[0] = 0;
    }
  }
  cancel() {
    const state = this.state;
    if (state.canceled) return;
    setTimeout(() => {
      state.canceled = true;
      state._active = false;
      this.compute();
      this.emit();
    }, 0);
  }
  touchStart(event) {
    this.ctrl.setEventIds(event);
    const state = this.state;
    const ctrlTouchIds = this.ctrl.touchIds;
    if (state._active) {
      if (state._touchIds.every((id) => ctrlTouchIds.has(id))) return;
    }
    if (ctrlTouchIds.size < 2) return;
    this.start(event);
    state._touchIds = Array.from(ctrlTouchIds).slice(0, 2);
    const payload = touchDistanceAngle(event, state._touchIds);
    if (!payload) return;
    this.pinchStart(event, payload);
  }
  pointerStart(event) {
    if (event.buttons != null && event.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(event);
    event.target.setPointerCapture(event.pointerId);
    const state = this.state;
    const _pointerEvents = state._pointerEvents;
    const ctrlPointerIds = this.ctrl.pointerIds;
    if (state._active) {
      if (Array.from(_pointerEvents.keys()).every((id) => ctrlPointerIds.has(id))) return;
    }
    if (_pointerEvents.size < 2) {
      _pointerEvents.set(event.pointerId, event);
    }
    if (state._pointerEvents.size < 2) return;
    this.start(event);
    const payload = distanceAngle(...Array.from(_pointerEvents.values()));
    if (!payload) return;
    this.pinchStart(event, payload);
  }
  pinchStart(event, payload) {
    const state = this.state;
    state.origin = payload.origin;
    this.computeValues([payload.distance, payload.angle]);
    this.computeInitial();
    this.compute(event);
    this.emit();
  }
  touchMove(event) {
    if (!this.state._active) return;
    const payload = touchDistanceAngle(event, this.state._touchIds);
    if (!payload) return;
    this.pinchMove(event, payload);
  }
  pointerMove(event) {
    const _pointerEvents = this.state._pointerEvents;
    if (_pointerEvents.has(event.pointerId)) {
      _pointerEvents.set(event.pointerId, event);
    }
    if (!this.state._active) return;
    const payload = distanceAngle(...Array.from(_pointerEvents.values()));
    if (!payload) return;
    this.pinchMove(event, payload);
  }
  pinchMove(event, payload) {
    const state = this.state;
    const prev_a = state._values[1];
    const delta_a = payload.angle - prev_a;
    let delta_turns = 0;
    if (Math.abs(delta_a) > 270) delta_turns += Math.sign(delta_a);
    this.computeValues([payload.distance, payload.angle - 360 * delta_turns]);
    state.origin = payload.origin;
    state.turns = delta_turns;
    state._movement = [state._values[0] / state._initial[0] - 1, state._values[1] - state._initial[1]];
    this.compute(event);
    this.emit();
  }
  touchEnd(event) {
    this.ctrl.setEventIds(event);
    if (!this.state._active) return;
    if (this.state._touchIds.some((id) => !this.ctrl.touchIds.has(id))) {
      this.state._active = false;
      this.compute(event);
      this.emit();
    }
  }
  pointerEnd(event) {
    const state = this.state;
    this.ctrl.setEventIds(event);
    try {
      event.target.releasePointerCapture(event.pointerId);
    } catch (_unused) {
    }
    if (state._pointerEvents.has(event.pointerId)) {
      state._pointerEvents.delete(event.pointerId);
    }
    if (!state._active) return;
    if (state._pointerEvents.size < 2) {
      state._active = false;
      this.compute(event);
      this.emit();
    }
  }
  gestureStart(event) {
    if (event.cancelable) event.preventDefault();
    const state = this.state;
    if (state._active) return;
    this.start(event);
    this.computeValues([event.scale, event.rotation]);
    state.origin = [event.clientX, event.clientY];
    this.compute(event);
    this.emit();
  }
  gestureMove(event) {
    if (event.cancelable) event.preventDefault();
    if (!this.state._active) return;
    const state = this.state;
    this.computeValues([event.scale, event.rotation]);
    state.origin = [event.clientX, event.clientY];
    const _previousMovement = state._movement;
    state._movement = [event.scale - 1, event.rotation];
    state._delta = V.sub(state._movement, _previousMovement);
    this.compute(event);
    this.emit();
  }
  gestureEnd(event) {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute(event);
    this.emit();
  }
  wheel(event) {
    const modifierKey = this.config.modifierKey;
    if (modifierKey && (Array.isArray(modifierKey) ? !modifierKey.find((k) => event[k]) : !event[modifierKey])) return;
    if (!this.state._active) this.wheelStart(event);
    else this.wheelChange(event);
    this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelStart(event) {
    this.start(event);
    this.wheelChange(event);
  }
  wheelChange(event) {
    const isR3f = "uv" in event;
    if (!isR3f) {
      if (event.cancelable) {
        event.preventDefault();
      }
      if (process.env.NODE_ENV === "development" && !event.defaultPrevented) {
        console.warn(`[@use-gesture]: To properly support zoom on trackpads, try using the \`target\` option.

This message will only appear in development mode.`);
      }
    }
    const state = this.state;
    state._delta = [-wheelValues(event)[1] / PINCH_WHEEL_RATIO * state.offset[0], 0];
    V.addTo(state._movement, state._delta);
    clampStateInternalMovementToBounds(state);
    this.state.origin = [event.clientX, event.clientY];
    this.compute(event);
    this.emit();
  }
  wheelEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    const device = this.config.device;
    if (!!device) {
      bindFunction(device, "start", this[device + "Start"].bind(this));
      bindFunction(device, "change", this[device + "Move"].bind(this));
      bindFunction(device, "end", this[device + "End"].bind(this));
      bindFunction(device, "cancel", this[device + "End"].bind(this));
      bindFunction("lostPointerCapture", "", this[device + "End"].bind(this));
    }
    if (this.config.pinchOnWheel) {
      bindFunction("wheel", "", this.wheel.bind(this), {
        passive: false
      });
    }
  }
}
const pinchConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  device(_v, _k, {
    shared,
    pointer: {
      touch = false
    } = {}
  }) {
    const sharedConfig = shared;
    if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture) return "gesture";
    if (SUPPORT.touch && touch) return "touch";
    if (SUPPORT.touchscreen) {
      if (SUPPORT.pointer) return "pointer";
      if (SUPPORT.touch) return "touch";
    }
  },
  bounds(_v, _k, {
    scaleBounds = {},
    angleBounds = {}
  }) {
    const _scaleBounds = (state) => {
      const D = assignDefault(call(scaleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D.min, D.max];
    };
    const _angleBounds = (state) => {
      const A = assignDefault(call(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A.min, A.max];
    };
    if (typeof scaleBounds !== "function" && typeof angleBounds !== "function") return [_scaleBounds(), _angleBounds()];
    return (state) => [_scaleBounds(state), _angleBounds(state)];
  },
  threshold(value, _k, config) {
    this.lockDirection = config.axis === "lock";
    const threshold = V.toVector(value, this.lockDirection ? [0.1, 3] : 0);
    return threshold;
  },
  modifierKey(value) {
    if (value === void 0) return "ctrlKey";
    return value;
  },
  pinchOnWheel(value = true) {
    return value;
  }
});
class MoveEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "moving");
  }
  move(event) {
    if (this.config.mouseOnly && event.pointerType !== "mouse") return;
    if (!this.state._active) this.moveStart(event);
    else this.moveChange(event);
    this.timeoutStore.add("moveEnd", this.moveEnd.bind(this));
  }
  moveStart(event) {
    this.start(event);
    this.computeValues(pointerValues(event));
    this.compute(event);
    this.computeInitial();
    this.emit();
  }
  moveChange(event) {
    if (!this.state._active) return;
    const values = pointerValues(event);
    const state = this.state;
    state._delta = V.sub(values, state._values);
    V.addTo(state._movement, state._delta);
    this.computeValues(values);
    this.compute(event);
    this.emit();
  }
  moveEnd(event) {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute(event);
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("pointer", "change", this.move.bind(this));
    bindFunction("pointer", "leave", this.moveEnd.bind(this));
  }
}
const moveConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});
class ScrollEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "scrolling");
  }
  scroll(event) {
    if (!this.state._active) this.start(event);
    this.scrollChange(event);
    this.timeoutStore.add("scrollEnd", this.scrollEnd.bind(this));
  }
  scrollChange(event) {
    if (event.cancelable) event.preventDefault();
    const state = this.state;
    const values = scrollValues(event);
    state._delta = V.sub(values, state._values);
    V.addTo(state._movement, state._delta);
    this.computeValues(values);
    this.compute(event);
    this.emit();
  }
  scrollEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("scroll", "", this.scroll.bind(this));
  }
}
const scrollConfigResolver = coordinatesConfigResolver;
class WheelEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "wheeling");
  }
  wheel(event) {
    if (!this.state._active) this.start(event);
    this.wheelChange(event);
    this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(event) {
    const state = this.state;
    state._delta = wheelValues(event);
    V.addTo(state._movement, state._delta);
    clampStateInternalMovementToBounds(state);
    this.compute(event);
    this.emit();
  }
  wheelEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("wheel", "", this.wheel.bind(this));
  }
}
const wheelConfigResolver = coordinatesConfigResolver;
class HoverEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", "hovering");
  }
  enter(event) {
    if (this.config.mouseOnly && event.pointerType !== "mouse") return;
    this.start(event);
    this.computeValues(pointerValues(event));
    this.compute(event);
    this.emit();
  }
  leave(event) {
    if (this.config.mouseOnly && event.pointerType !== "mouse") return;
    const state = this.state;
    if (!state._active) return;
    state._active = false;
    const values = pointerValues(event);
    state._movement = state._delta = V.sub(values, state._values);
    this.computeValues(values);
    this.compute(event);
    state.delta = state.movement;
    this.emit();
  }
  bind(bindFunction) {
    bindFunction("pointer", "enter", this.enter.bind(this));
    bindFunction("pointer", "leave", this.leave.bind(this));
  }
}
const hoverConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});
const EngineMap = /* @__PURE__ */ new Map();
const ConfigResolverMap = /* @__PURE__ */ new Map();
function registerAction(action) {
  EngineMap.set(action.key, action.engine);
  ConfigResolverMap.set(action.key, action.resolver);
}
const dragAction = {
  key: "drag",
  engine: DragEngine,
  resolver: dragConfigResolver
};
const hoverAction = {
  key: "hover",
  engine: HoverEngine,
  resolver: hoverConfigResolver
};
const moveAction = {
  key: "move",
  engine: MoveEngine,
  resolver: moveConfigResolver
};
const pinchAction = {
  key: "pinch",
  engine: PinchEngine,
  resolver: pinchConfigResolver
};
const scrollAction = {
  key: "scroll",
  engine: ScrollEngine,
  resolver: scrollConfigResolver
};
const wheelAction = {
  key: "wheel",
  engine: WheelEngine,
  resolver: wheelConfigResolver
};
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
const sharedConfigResolver = {
  target(value) {
    if (value) {
      return () => "current" in value ? value.current : value;
    }
    return void 0;
  },
  enabled(value = true) {
    return value;
  },
  window(value = SUPPORT.isBrowser ? window : void 0) {
    return value;
  },
  eventOptions({
    passive = true,
    capture = false
  } = {}) {
    return {
      passive,
      capture
    };
  },
  transform(value) {
    return value;
  }
};
const _excluded = ["target", "eventOptions", "window", "enabled", "transform"];
function resolveWith(config = {}, resolvers) {
  const result = {};
  for (const [key, resolver] of Object.entries(resolvers)) {
    switch (typeof resolver) {
      case "function":
        if (process.env.NODE_ENV === "development") {
          const r = resolver.call(result, config[key], key, config);
          if (!Number.isNaN(r)) result[key] = r;
        } else {
          result[key] = resolver.call(result, config[key], key, config);
        }
        break;
      case "object":
        result[key] = resolveWith(config[key], resolver);
        break;
      case "boolean":
        if (resolver) result[key] = config[key];
        break;
    }
  }
  return result;
}
function parse$1(newConfig, gestureKey, _config = {}) {
  const _ref = newConfig, {
    target,
    eventOptions,
    window: window2,
    enabled,
    transform
  } = _ref, rest = _objectWithoutProperties(_ref, _excluded);
  _config.shared = resolveWith({
    target,
    eventOptions,
    window: window2,
    enabled,
    transform
  }, sharedConfigResolver);
  if (gestureKey) {
    const resolver = ConfigResolverMap.get(gestureKey);
    _config[gestureKey] = resolveWith(_objectSpread2({
      shared: _config.shared
    }, rest), resolver);
  } else {
    for (const key in rest) {
      const resolver = ConfigResolverMap.get(key);
      if (resolver) {
        _config[key] = resolveWith(_objectSpread2({
          shared: _config.shared
        }, rest[key]), resolver);
      } else if (process.env.NODE_ENV === "development") {
        if (!["drag", "pinch", "scroll", "wheel", "move", "hover"].includes(key)) {
          if (key === "domTarget") {
            throw Error(`[@use-gesture]: \`domTarget\` option has been renamed to \`target\`.`);
          }
          console.warn(`[@use-gesture]: Unknown config key \`${key}\` was used. Please read the documentation for further information.`);
        }
      }
    }
  }
  return _config;
}
class EventStore {
  constructor(ctrl, gestureKey) {
    _defineProperty(this, "_listeners", /* @__PURE__ */ new Set());
    this._ctrl = ctrl;
    this._gestureKey = gestureKey;
  }
  add(element, device, action, handler, options) {
    const listeners = this._listeners;
    const type2 = toDomEventType(device, action);
    const _options = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {};
    const eventOptions = _objectSpread2(_objectSpread2({}, _options), options);
    element.addEventListener(type2, handler, eventOptions);
    const remove = () => {
      element.removeEventListener(type2, handler, eventOptions);
      listeners.delete(remove);
    };
    listeners.add(remove);
    return remove;
  }
  clean() {
    this._listeners.forEach((remove) => remove());
    this._listeners.clear();
  }
}
class TimeoutStore {
  constructor() {
    _defineProperty(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(key, callback, ms = 140, ...args) {
    this.remove(key);
    this._timeouts.set(key, window.setTimeout(callback, ms, ...args));
  }
  remove(key) {
    const timeout = this._timeouts.get(key);
    if (timeout) window.clearTimeout(timeout);
  }
  clean() {
    this._timeouts.forEach((timeout) => void window.clearTimeout(timeout));
    this._timeouts.clear();
  }
}
class Controller {
  constructor(handlers) {
    _defineProperty(this, "gestures", /* @__PURE__ */ new Set());
    _defineProperty(this, "_targetEventStore", new EventStore(this));
    _defineProperty(this, "gestureEventStores", {});
    _defineProperty(this, "gestureTimeoutStores", {});
    _defineProperty(this, "handlers", {});
    _defineProperty(this, "config", {});
    _defineProperty(this, "pointerIds", /* @__PURE__ */ new Set());
    _defineProperty(this, "touchIds", /* @__PURE__ */ new Set());
    _defineProperty(this, "state", {
      shared: {
        shiftKey: false,
        metaKey: false,
        ctrlKey: false,
        altKey: false
      }
    });
    resolveGestures(this, handlers);
  }
  setEventIds(event) {
    if (isTouch(event)) {
      this.touchIds = new Set(touchIds(event));
      return this.touchIds;
    } else if ("pointerId" in event) {
      if (event.type === "pointerup" || event.type === "pointercancel") this.pointerIds.delete(event.pointerId);
      else if (event.type === "pointerdown") this.pointerIds.add(event.pointerId);
      return this.pointerIds;
    }
  }
  applyHandlers(handlers, nativeHandlers) {
    this.handlers = handlers;
    this.nativeHandlers = nativeHandlers;
  }
  applyConfig(config, gestureKey) {
    this.config = parse$1(config, gestureKey, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const key of this.gestures) {
      this.gestureEventStores[key].clean();
      this.gestureTimeoutStores[key].clean();
    }
  }
  effect() {
    if (this.config.shared.target) this.bind();
    return () => this._targetEventStore.clean();
  }
  bind(...args) {
    const sharedConfig = this.config.shared;
    const props = {};
    let target;
    if (sharedConfig.target) {
      target = sharedConfig.target();
      if (!target) return;
    }
    if (sharedConfig.enabled) {
      for (const gestureKey of this.gestures) {
        const gestureConfig = this.config[gestureKey];
        const bindFunction = bindToProps(props, gestureConfig.eventOptions, !!target);
        if (gestureConfig.enabled) {
          const Engine2 = EngineMap.get(gestureKey);
          new Engine2(this, args, gestureKey).bind(bindFunction);
        }
      }
      const nativeBindFunction = bindToProps(props, sharedConfig.eventOptions, !!target);
      for (const eventKey in this.nativeHandlers) {
        nativeBindFunction(eventKey, "", (event) => this.nativeHandlers[eventKey](_objectSpread2(_objectSpread2({}, this.state.shared), {}, {
          event,
          args
        })), void 0, true);
      }
    }
    for (const handlerProp in props) {
      props[handlerProp] = chain(...props[handlerProp]);
    }
    if (!target) return props;
    for (const handlerProp in props) {
      const {
        device,
        capture,
        passive
      } = parseProp(handlerProp);
      this._targetEventStore.add(target, device, "", props[handlerProp], {
        capture,
        passive
      });
    }
  }
}
function setupGesture(ctrl, gestureKey) {
  ctrl.gestures.add(gestureKey);
  ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl, gestureKey);
  ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore();
}
function resolveGestures(ctrl, internalHandlers) {
  if (internalHandlers.drag) setupGesture(ctrl, "drag");
  if (internalHandlers.wheel) setupGesture(ctrl, "wheel");
  if (internalHandlers.scroll) setupGesture(ctrl, "scroll");
  if (internalHandlers.move) setupGesture(ctrl, "move");
  if (internalHandlers.pinch) setupGesture(ctrl, "pinch");
  if (internalHandlers.hover) setupGesture(ctrl, "hover");
}
const bindToProps = (props, eventOptions, withPassiveOption) => (device, action, handler, options = {}, isNative = false) => {
  var _options$capture, _options$passive;
  const capture = (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
  const passive = (_options$passive = options.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
  let handlerProp = isNative ? device : toHandlerProp(device, action, capture);
  if (withPassiveOption && passive) handlerProp += "Passive";
  props[handlerProp] = props[handlerProp] || [];
  props[handlerProp].push(handler);
};
const RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function sortHandlers(_handlers) {
  const native = {};
  const handlers = {};
  const actions = /* @__PURE__ */ new Set();
  for (let key in _handlers) {
    if (RE_NOT_NATIVE.test(key)) {
      actions.add(RegExp.lastMatch);
      handlers[key] = _handlers[key];
    } else {
      native[key] = _handlers[key];
    }
  }
  return [handlers, native, actions];
}
function registerGesture(actions, handlers, handlerKey, key, internalHandlers, config) {
  if (!actions.has(handlerKey)) return;
  if (!EngineMap.has(key)) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${key}\` gesture but isn't properly configured.

Please add \`${key}Action\` when creating your handler.`);
    }
    return;
  }
  const startKey = handlerKey + "Start";
  const endKey = handlerKey + "End";
  const fn = (state) => {
    let memo2 = void 0;
    if (state.first && startKey in handlers) handlers[startKey](state);
    if (handlerKey in handlers) memo2 = handlers[handlerKey](state);
    if (state.last && endKey in handlers) handlers[endKey](state);
    return memo2;
  };
  internalHandlers[key] = fn;
  config[key] = config[key] || {};
}
function parseMergedHandlers(mergedHandlers, mergedConfig) {
  const [handlers, nativeHandlers, actions] = sortHandlers(mergedHandlers);
  const internalHandlers = {};
  registerGesture(actions, handlers, "onDrag", "drag", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onWheel", "wheel", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onScroll", "scroll", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onPinch", "pinch", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onMove", "move", internalHandlers, mergedConfig);
  registerGesture(actions, handlers, "onHover", "hover", internalHandlers, mergedConfig);
  return {
    handlers: internalHandlers,
    config: mergedConfig,
    nativeHandlers
  };
}
function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
  const ctrl = React.useMemo(() => new Controller(handlers), []);
  ctrl.applyHandlers(handlers, nativeHandlers);
  ctrl.applyConfig(config, gestureKey);
  React.useEffect(ctrl.effect.bind(ctrl));
  React.useEffect(() => {
    return ctrl.clean.bind(ctrl);
  }, []);
  if (config.target === void 0) {
    return ctrl.bind.bind(ctrl);
  }
  return void 0;
}
function createUseGesture(actions) {
  actions.forEach(registerAction);
  return function useGesture2(_handlers, _config) {
    const {
      handlers,
      nativeHandlers,
      config
    } = parseMergedHandlers(_handlers, _config || {});
    return useRecognizers(handlers, config, void 0, nativeHandlers);
  };
}
function useGesture(handlers, config) {
  const hook = createUseGesture([dragAction, pinchAction, scrollAction, wheelAction, moveAction, hoverAction]);
  return hook(handlers, {});
}
function useInteractions({
  onHover,
  onBlur,
  onFocus,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  onKeyUp,
  ...handlers
} = {}) {
  const usedProperty = [];
  const [isFocused, setFocused] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isTabFocused, setTabFocused] = useState(false);
  const eventHandlers = useGesture({
    ...handlers,
    // focus
    onFocus(...args) {
      usedProperty.includes("isFocused") && setFocused(true);
      onFocus?.(...args);
    },
    onBlur(...args) {
      usedProperty.includes("isFocused") && setFocused(false);
      usedProperty.includes("isTabFocused") && isTabFocused && setTabFocused(false);
      onBlur?.(...args);
    },
    // Hover
    onHover(hover) {
      const { hovering: isHovering } = hover;
      usedProperty.includes("isHovered") && setHovered(Boolean(isHovering));
      onHover?.(hover);
    },
    // Active
    onMouseDown(...args) {
      usedProperty.includes("isActive") && setActive(true);
      onMouseDown?.(...args);
    },
    onMouseUp(...args) {
      usedProperty.includes("isActive") && setActive(false);
      onMouseUp?.(...args);
    },
    onMouseLeave(...args) {
      usedProperty.includes("isActive") && setActive(false);
      onMouseLeave?.(...args);
    },
    onKeyUp(state, ...args) {
      const { event } = state;
      if (event.key === "Tab") {
        usedProperty.includes("isTabFocused") && setTabFocused(true);
      }
      onKeyUp?.(state, ...args);
    }
  });
  const target = {
    eventHandlers,
    isFocused,
    isHovered,
    isActive,
    isTabFocused
  };
  const proxyHandler = {
    get: function(target2, prop) {
      usedProperty.push(prop);
      return target2[prop];
    }
  };
  const proxy3 = new Proxy(target, proxyHandler);
  return proxy3;
}
function getErrorMessage(error) {
  if (!error) {
    return "";
  }
  if (InternalRequestError.isRequestError(error)) {
    return error.message || i18n.t("common.error.errorOccurred");
  }
  if (typeof error === "string") {
    return error;
  }
  if (typeof error === "object" && error !== null && "message" in error && typeof error.message === "string") {
    return error.message;
  }
  return i18n.t("common.error.errorOccurred");
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var f2 = n.default;
  if (typeof f2 == "function") {
    var a2 = function a3() {
      var isInstance = false;
      try {
        isInstance = this instanceof a3;
      } catch {
      }
      if (isInstance) {
        return Reflect.construct(f2, arguments, this.constructor);
      }
      return f2.apply(this, arguments);
    };
    a2.prototype = f2.prototype;
  } else a2 = {};
  Object.defineProperty(a2, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a2, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a2;
}
const Item = (_props) => null;
const Accordion = ({
  children,
  accordionRef,
  onChangeIndex,
  currentIndex = 1,
  indexedStyle = true,
  noPaddingItem,
  noGapBetweenItems,
  transparent
}) => {
  const props = useMemo(() => {
    const prettifyChildren = ({ props: props2 }, index) => {
      let label = props2.label;
      if (typeof label === "string") {
        label = /* @__PURE__ */ jsx(
          Text,
          {
            size: 18,
            color: colors[currentIndex === index + 1 ? "primary_dark_1" : "primary_light_1"],
            weight: currentIndex === index + 1 ? "bold" : "medium",
            children: label
          }
        );
      }
      return { ...props2, label, key: index + 1 };
    };
    return Children.map(children, prettifyChildren);
  }, [children, currentIndex]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: twMerge(
        "flex flex-1 flex-col gap-[16px] py-[20px]",
        indexedStyle && "pe-[60px] ps-[16px]",
        noGapBetweenItems && "gap-0"
      ),
      ref: accordionRef,
      children: props.map((item, index) => /* @__PURE__ */ jsxs("div", { className: " flex w-full items-start gap-[16px]", children: [
        /* @__PURE__ */ jsx(Render, { when: indexedStyle, children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-full w-[30px] flex-col", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-full items-start justify-center", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: twMerge(
                currentIndex > index ? "bg-positive" : "bg-primary-light-2",
                `z-[1] mt-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full`
              ),
              children: /* @__PURE__ */ jsx(
                Render,
                {
                  when: currentIndex > index + 1,
                  fallback: /* @__PURE__ */ jsx(Text, { color: colors.white_ff, size: 16, children: index + 1 }),
                  children: /* @__PURE__ */ jsx(Icon, { name: "Checkmark", size: 18, color: colors.white_ff })
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsx(Render, { when: index !== props.length - 1, children: /* @__PURE__ */ jsx(
            "div",
            {
              className: twMerge(
                "absolute left-[calc(50%-0.5px)] top-[25px] z-0 h-full w-[1px] border-l-[1px] border-dashed border-primary-light-2",
                currentIndex > index && "border-positive-light-2"
              )
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx(
          Collapse,
          {
            accordion: true,
            bordered: false,
            activeKey: currentIndex,
            expandIconPosition: "end",
            onChange: (key) => {
              if (Array.isArray(key)) {
                return onChangeIndex?.(Number(key[0]));
              }
              return onChangeIndex?.(Number(key));
            },
            items: [props[index]],
            expandIcon: ({ isActive }) => /* @__PURE__ */ jsx(
              Icon,
              {
                name: isActive ? "Chevron_Down" : "Chevron_Up",
                color: colors[isActive ? "primary" : "primary_light_1"]
              }
            ),
            style: { boxShadow: "0 1px 6px 0 rgba(72, 88, 118, 0.16)" },
            className: twMerge(
              `w-full overflow-hidden border-b-0 bg-white-ff [&_.ant-collapse-header]:cursor-default`,
              !indexedStyle ? "[&_.ant-collapse-header]:!bg-action/10" : transparent ? "[&_.ant-collapse-header]:!bg-transparent" : "[&_.ant-collapse-header]:!bg-light-1",
              noPaddingItem && "[&_.ant-collapse-header]:!p-0",
              indexedStyle ? "rounded-lg" : "rounded-none",
              // indexedStyle && '[&_.ant-collapse-header]:hover:!bg-positive/20',
              indexedStyle && "[&_.ant-collapse-header]:shadow-[0_1px_6px_0_rgba(72,88,118,0.16)]"
            )
          }
        )
      ] }, item.key))
    }
  );
};
Accordion.Item = Item;
const ActionHeader = forwardRef(
  ({ children, title, route, hasBorder, gap = 8, className }, ref2) => {
    const headerTitle = (title2, route2) => {
      if (route2) {
        return /* @__PURE__ */ jsx(Flex, { className: "min-w-max", children: /* @__PURE__ */ jsx(Breadcrumbs, { route: route2 }) });
      }
      if (title2) {
        return /* @__PURE__ */ jsx(Flex, { className: "min-w-max", children: typeof title2 === "string" ? /* @__PURE__ */ jsx(Text, { size: 16, weight: "medium", color: colors.primary, children: title2 }) : title2 });
      }
      return null;
    };
    return /* @__PURE__ */ jsxs(
      Flex,
      {
        className: twMerge(
          "bg-light-1 w-full px-6 py-4",
          hasBorder && "border-light-7 border-b",
          className
        ),
        align: "center",
        justify: "space-between",
        children: [
          headerTitle(title, route),
          /* @__PURE__ */ jsx(Flex, { ref: ref2, gap, className: "w-full justify-end", children })
        ]
      }
    );
  }
);
const NUM_BARS = 48;
const AudioVisualizer = ({
  deviceId,
  speakerId,
  monitor = "off",
  containerStyle,
  containerClassName,
  barContainerStyle,
  barContainerClassName,
  barStyle,
  barClassName,
  barsNumber = NUM_BARS
}) => {
  const audioElRef = useRef(null);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);
  const animationFrameRef = useRef(null);
  const visualizerContainerRef = useRef(null);
  const microphoneStreamRef = useRef(null);
  useEffect(() => {
    const audio = document.createElement("audio");
    audio.autoplay = true;
    audio.controls = false;
    audioElRef.current = audio;
    document.body.appendChild(audio);
    return () => {
      audio.pause();
      audio.srcObject = null;
      audio.remove();
    };
  }, []);
  useEffect(() => {
    if (!deviceId || !audioElRef.current) return;
    let cancelled = false;
    const setupVisualizer = async () => {
      microphoneStreamRef.current?.getTracks().forEach((t2) => t2.stop());
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: { exact: deviceId } }
      });
      if (cancelled) return;
      microphoneStreamRef.current = stream;
      const audioCtx = new AudioContext();
      audioContextRef.current = audioCtx;
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.75;
      analyserRef.current = analyser;
      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);
      drawVisualization();
    };
    setupVisualizer();
    return () => {
      cancelled = true;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      microphoneStreamRef.current?.getTracks().forEach((t2) => t2.stop());
      audioContextRef.current?.close();
      microphoneStreamRef.current = null;
      audioContextRef.current = null;
      analyserRef.current = null;
      resetVisualizerBars();
    };
  }, [deviceId]);
  useEffect(() => {
    const audioEl = audioElRef.current;
    const audioCtx = audioContextRef.current;
    const analyser = analyserRef.current;
    const stream = microphoneStreamRef.current;
    if (!audioEl || !audioCtx || !analyser || !stream) return;
    if (monitor === "on") {
      analyser.connect(audioCtx.destination);
      audioEl.srcObject = stream;
      if (speakerId && typeof audioEl.setSinkId === "function") {
        audioEl.setSinkId(speakerId).catch(() => {
        });
      }
    } else {
      audioEl.srcObject = null;
    }
  }, [monitor, speakerId]);
  useEffect(() => {
    const container = visualizerContainerRef.current;
    if (!container) return;
    container.innerHTML = "";
    const barContainer = document.createElement("div");
    Object.assign(barContainer.style, {
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "100%",
      position: "relative",
      ...barContainerStyle
    });
    barContainer.className = twMerge(barContainerClassName);
    for (let i = 0; i < barsNumber; i++) {
      const bar = document.createElement("div");
      Object.assign(bar.style, {
        backgroundColor: "#d1d5db",
        // default color (gray)
        height: "80%",
        transition: "background-color 0.1s ease-out",
        margin: "0 1px",
        borderRadius: "2px",
        width: "100%",
        ...barStyle
      });
      bar.className = twMerge(barClassName);
      barContainer.appendChild(bar);
    }
    container.appendChild(barContainer);
  }, [barsNumber, barClassName, barContainerClassName, barStyle, barContainerStyle]);
  const drawVisualization = () => {
    if (!analyserRef.current || !visualizerContainerRef.current) return;
    const barContainer = visualizerContainerRef.current.querySelector(
      'div[style*="display: flex"]'
    );
    if (!barContainer) return;
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const render = () => {
      analyserRef.current.getByteFrequencyData(dataArray);
      const overallAvg = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
      const normalizedLoudness = Math.min(overallAvg / 140, 1);
      const numActiveBars = Math.floor(normalizedLoudness * barsNumber);
      const bars = barContainer.children;
      for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = i < numActiveBars ? colors.team.action : "#d1d5db";
      }
      animationFrameRef.current = requestAnimationFrame(render);
    };
    render();
  };
  const resetVisualizerBars = () => {
    const container = visualizerContainerRef.current;
    if (!container) return;
    const barContainer = container.querySelector('div[style*="display: flex"]');
    if (!barContainer) return;
    const bars = barContainer.children;
    for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = "#d1d5db";
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: visualizerContainerRef,
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "1rem",
        width: "100%",
        borderRadius: "0.5rem",
        boxSizing: "border-box",
        ...containerStyle
      },
      className: twMerge(containerClassName)
    }
  );
};
const AvatarUpload = ({ customRequest, src, shape, size, isLoading }) => {
  return /* @__PURE__ */ jsx(Upload, { accept: ".jpg, .jpeg, .img", showUploadList: false, customRequest, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative cursor-pointer overflow-hidden group",
      style: {
        borderRadius: shape === "circle" ? "50%" : 4
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            },
            children: /* @__PURE__ */ jsx(
              Icon,
              {
                name: "Add_photo",
                color: colors.white_ff,
                className: "opacity-0 group-hover:opacity-100",
                style: { transition: "all 0.2s" }
              }
            )
          }
        ),
        isLoading ? /* @__PURE__ */ jsx(
          "div",
          {
            className: " bg-light-2 ",
            style: {
              width: size,
              height: size
            },
            children: /* @__PURE__ */ jsx(Loading, { isLoading: true, size, color: colors.primary_light_1 })
          }
        ) : /* @__PURE__ */ jsxs(
          Flex,
          {
            className: twMerge("cursor-pointer items-center justify-center"),
            style: {
              minWidth: size,
              minHeight: size,
              width: size,
              height: size,
              borderRadius: shape === "circle" ? 9999 : 4,
              border: `1px solid ${colors.light_7}`,
              position: "relative",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsx(
                Avatar,
                {
                  icon: /* @__PURE__ */ jsx(Icon, { name: "User" }),
                  src,
                  size,
                  shape,
                  style: {
                    width: "100%",
                    height: "100%"
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "opacity-0 group-hover:opacity-100",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    transition: "opacity 0.2s ease-in-out"
                  }
                }
              )
            ]
          }
        )
      ]
    }
  ) });
};
const Catch = ({ children, error, retry }) => {
  const { t: t2 } = useTranslation();
  if (error) {
    return /* @__PURE__ */ jsx("div", { className: "flex h-[calc(100%-56px)] w-full p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full w-full flex-col items-center justify-center gap-y-4 overflow-y-auto overflow-x-hidden", children: [
      /* @__PURE__ */ jsx(Text, { color: colors.negative_light_1, children: t2("common.literal.serverError") }),
      /* @__PURE__ */ jsx(Render, { when: Boolean(retry), children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: retry,
          className: "rounded bg-primary px-4 py-2 shadow-sm hover:bg-primary-dark-1",
          children: /* @__PURE__ */ jsx(Text, { color: colors.white_ff, children: t2("common.message.tryAgain") })
        }
      ) })
    ] }) });
  }
  return /* @__PURE__ */ jsx(Fragment, { children });
};
const ChevronIcon = ({ direction, ...rest }) => {
  const { i18n: i18n2 } = useTranslation();
  const getIconName = (direction2 = "forward") => {
    if (direction2 === "forward") {
      return i18n2.language === "en" ? "Chevron_Right" : "Chevron_Left";
    } else {
      return i18n2.language === "en" ? "Chevron_Left" : "Chevron_Right";
    }
  };
  return /* @__PURE__ */ jsx(Icon, { name: getIconName(direction), ...rest });
};
var Component = {};
var toggleSelection;
var hasRequiredToggleSelection;
function requireToggleSelection() {
  if (hasRequiredToggleSelection) return toggleSelection;
  hasRequiredToggleSelection = 1;
  toggleSelection = function() {
    var selection = document.getSelection();
    if (!selection.rangeCount) {
      return function() {
      };
    }
    var active = document.activeElement;
    var ranges = [];
    for (var i = 0; i < selection.rangeCount; i++) {
      ranges.push(selection.getRangeAt(i));
    }
    switch (active.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        active.blur();
        break;
      default:
        active = null;
        break;
    }
    selection.removeAllRanges();
    return function() {
      selection.type === "Caret" && selection.removeAllRanges();
      if (!selection.rangeCount) {
        ranges.forEach(function(range2) {
          selection.addRange(range2);
        });
      }
      active && active.focus();
    };
  };
  return toggleSelection;
}
var copyToClipboard;
var hasRequiredCopyToClipboard;
function requireCopyToClipboard() {
  if (hasRequiredCopyToClipboard) return copyToClipboard;
  hasRequiredCopyToClipboard = 1;
  var deselectCurrent = requireToggleSelection();
  var clipboardToIE11Formatting = {
    "text/plain": "Text",
    "text/html": "Url",
    "default": "Text"
  };
  var defaultMessage = "Copy to clipboard: #{key}, Enter";
  function format(message) {
    var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return message.replace(/#{\s*key\s*}/g, copyKey);
  }
  function copy(text, options) {
    var debug, message, reselectPrevious, range2, selection, mark, success = false;
    if (!options) {
      options = {};
    }
    debug = options.debug || false;
    try {
      reselectPrevious = deselectCurrent();
      range2 = document.createRange();
      selection = document.getSelection();
      mark = document.createElement("span");
      mark.textContent = text;
      mark.ariaHidden = "true";
      mark.style.all = "unset";
      mark.style.position = "fixed";
      mark.style.top = 0;
      mark.style.clip = "rect(0, 0, 0, 0)";
      mark.style.whiteSpace = "pre";
      mark.style.webkitUserSelect = "text";
      mark.style.MozUserSelect = "text";
      mark.style.msUserSelect = "text";
      mark.style.userSelect = "text";
      mark.addEventListener("copy", function(e) {
        e.stopPropagation();
        if (options.format) {
          e.preventDefault();
          if (typeof e.clipboardData === "undefined") {
            debug && console.warn("unable to use e.clipboardData");
            debug && console.warn("trying IE specific stuff");
            window.clipboardData.clearData();
            var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
            window.clipboardData.setData(format2, text);
          } else {
            e.clipboardData.clearData();
            e.clipboardData.setData(options.format, text);
          }
        }
        if (options.onCopy) {
          e.preventDefault();
          options.onCopy(e.clipboardData);
        }
      });
      document.body.appendChild(mark);
      range2.selectNodeContents(mark);
      selection.addRange(range2);
      var successful = document.execCommand("copy");
      if (!successful) {
        throw new Error("copy command was unsuccessful");
      }
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using execCommand: ", err);
      debug && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(options.format || "text", text);
        options.onCopy && options.onCopy(window.clipboardData);
        success = true;
      } catch (err2) {
        debug && console.error("unable to copy using clipboardData: ", err2);
        debug && console.error("falling back to prompt");
        message = format("message" in options ? options.message : defaultMessage);
        window.prompt(message, text);
      }
    } finally {
      if (selection) {
        if (typeof selection.removeRange == "function") {
          selection.removeRange(range2);
        } else {
          selection.removeAllRanges();
        }
      }
      if (mark) {
        document.body.removeChild(mark);
      }
      reselectPrevious();
    }
    return success;
  }
  copyToClipboard = copy;
  return copyToClipboard;
}
var hasRequiredComponent;
function requireComponent() {
  if (hasRequiredComponent) return Component;
  hasRequiredComponent = 1;
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  Object.defineProperty(Component, "__esModule", {
    value: true
  });
  Component.CopyToClipboard = void 0;
  var _react = _interopRequireDefault(React);
  var _copyToClipboard = _interopRequireDefault(requireCopyToClipboard());
  var _excluded2 = ["text", "onCopy", "options", "children"];
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function ownKeys2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty2(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _objectWithoutProperties2(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose2(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call2) {
    if (call2 && (_typeof(call2) === "object" || typeof call2 === "function")) {
      return call2;
    } else if (call2 !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var CopyToClipboard = /* @__PURE__ */ (function(_React$PureComponent) {
    _inherits(CopyToClipboard2, _React$PureComponent);
    var _super = _createSuper(CopyToClipboard2);
    function CopyToClipboard2() {
      var _this;
      _classCallCheck(this, CopyToClipboard2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty2(_assertThisInitialized(_this), "onClick", function(event) {
        var _this$props = _this.props, text = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
        var elem = _react["default"].Children.only(children);
        var result = (0, _copyToClipboard["default"])(text, options);
        if (onCopy) {
          onCopy(text, result);
        }
        if (elem && elem.props && typeof elem.props.onClick === "function") {
          elem.props.onClick(event);
        }
      });
      return _this;
    }
    _createClass(CopyToClipboard2, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props;
        _this$props2.text;
        _this$props2.onCopy;
        _this$props2.options;
        var children = _this$props2.children, props = _objectWithoutProperties2(_this$props2, _excluded2);
        var elem = _react["default"].Children.only(children);
        return /* @__PURE__ */ _react["default"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, {
          onClick: this.onClick
        }));
      }
    }]);
    return CopyToClipboard2;
  })(_react["default"].PureComponent);
  Component.CopyToClipboard = CopyToClipboard;
  _defineProperty2(CopyToClipboard, "defaultProps", {
    onCopy: void 0,
    options: void 0
  });
  return Component;
}
var lib$1;
var hasRequiredLib$1;
function requireLib$1() {
  if (hasRequiredLib$1) return lib$1;
  hasRequiredLib$1 = 1;
  var _require = requireComponent(), CopyToClipboard = _require.CopyToClipboard;
  CopyToClipboard.CopyToClipboard = CopyToClipboard;
  lib$1 = CopyToClipboard;
  return lib$1;
}
var libExports$1 = requireLib$1();
const CopyButton = ({ textToCopy, variant = "success", renderButton }) => {
  const { t: t2 } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);
  useEffect(() => {
    showTooltip && setTimeout(() => {
      setShowTooltip(false);
    }, 750);
  }, [showTooltip]);
  return /* @__PURE__ */ jsx(
    libExports$1.CopyToClipboard,
    {
      text: textToCopy,
      onCopy: (result) => {
        result && setShowTooltip(true);
      },
      children: /* @__PURE__ */ jsx(Tooltip, { variant, title: t2("common.message.copied"), open: showTooltip, children: renderButton ? renderButton : /* @__PURE__ */ jsxs(Flex, { align: "center", gap: 4, className: "cursor-pointer", children: [
        /* @__PURE__ */ jsx(Icon, { size: 18, color: colors.primary_light_1, name: "file_copy_line" }),
        /* @__PURE__ */ jsx(Text, { children: t2("common.literal.copy") })
      ] }) })
    }
  );
};
const InputTextArea$ = (props, ref2) => {
  const {
    placeholder,
    background = "#fff",
    inputSize = "large",
    error,
    lang,
    helperText,
    disabled,
    onlyNumber,
    isCurrency,
    onChangeText,
    onChange,
    status,
    prefix,
    required,
    label,
    readOnly,
    className,
    classNames,
    wrapperClassName,
    hideErrorMessage = false,
    height,
    rows,
    ...rest
  } = useMemo(() => ({ ...props }), [props]);
  const { i18n: i18n2 } = useTranslation();
  const _onChangeText = useCallback(
    (e) => {
      const star = starkString(e.target.value);
      if (onlyNumber || isCurrency) {
        star.parseNumber();
      }
      onChangeText?.(star.toString());
      onChange?.(e);
    },
    [isCurrency, onChange, onChangeText, onlyNumber]
  );
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      vertical: true,
      className: twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName
      ),
      children: [
        label && /* @__PURE__ */ jsxs("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(
            Text,
            {
              lang,
              size: inputSize === "large" ? 14 : 12,
              color: colors.primary,
              weight: "normal",
              children: label
            }
          ) }) : label,
          /* @__PURE__ */ jsx(Render, { when: required, children: /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 6, color: colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsx(
          Input$1.TextArea,
          {
            autoSize: true,
            ref: ref2,
            className: twMerge(
              "text-primary-dark-1  w-full  text-[14px] font-medium  outline-none",
              className
            ),
            classNames: {
              textarea: twMerge(
                (lang || i18n2.language) === "fa" ? "font-yekan-normal direction-rtl" : "font-roboto-normal direction-ltr",
                "placeholder:text-primary_light_3",
                readOnly && "cursor-default"
              ),
              ...classNames
            },
            placeholder,
            size: inputSize,
            rows,
            readOnly,
            style: { background, height, outline: "none" },
            onChange: _onChangeText,
            status: error?.message ? "error" : status,
            disabled,
            ...rest
          }
        ),
        !hideErrorMessage && error?.message && !helperText && /* @__PURE__ */ jsx(InputErrorMessage, { message: error?.message }),
        helperText && /* @__PURE__ */ jsx(Text, { color: colors.primary, className: "helperText", children: helperText })
      ]
    }
  );
};
const InputTextArea = forwardRef(InputTextArea$);
const InputDefault$ = (props, ref2) => {
  const {
    placeholder,
    background = "#fff",
    inputSize = "large",
    error,
    lang,
    helperText,
    disabled,
    onlyNumber,
    isCurrency,
    onChangeText,
    onChange,
    status,
    prefix,
    suffix,
    required,
    label,
    height = 38,
    readOnly,
    classNames,
    wrapperClassName,
    direction,
    hideErrorMessage = false,
    ...rest
  } = useMemo(() => ({ ...props }), [props]);
  const { i18n: i18n2 } = useTranslation();
  const _onChangeText = useCallback(
    (e) => {
      const star = starkString(e.target.value);
      if (onlyNumber || isCurrency) {
        star.parseNumber();
      }
      onChangeText?.(star.toString());
      onChange?.(e);
    },
    [isCurrency, onChange, onChangeText, onlyNumber]
  );
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      vertical: true,
      className: twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName,
        "[&_.ant-input-clear-icon]:!flex"
      ),
      children: [
        label && /* @__PURE__ */ jsxs("div", { className: "flex h-[22px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(
            Text,
            {
              size: inputSize === "large" ? 14 : 12,
              color: colors.primary,
              weight: "normal",
              children: label
            }
          ) }) : label,
          /* @__PURE__ */ jsx(Render, { when: required, children: /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 6, color: colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsx(
          Input$1,
          {
            ref: ref2,
            className: "w-full text-[14px] font-medium text-primary-dark-1 outline-none hover:border-primary-light-2",
            classNames: {
              input: twMerge(
                (lang || i18n2.language) === "fa" ? "font-yekan-normal direction-rtl" : "font-roboto-normal direction-ltr",
                "placeholder:text-primary_light_3",
                readOnly && "cursor-default",
                direction === "ltr" ? "direction-ltr" : "direction-rtl"
              ),
              ...classNames
            },
            rootClassName: "!rounded",
            placeholder,
            size: inputSize,
            readOnly,
            style: { background, height, outline: "none" },
            onChange: _onChangeText,
            status: error?.message ? "error" : status,
            disabled,
            suffix: suffix || error?.message ? /* @__PURE__ */ jsx(
              "div",
              {
                className: twMerge("flex h-full justify-center"),
                onClick: (e) => e.stopPropagation(),
                children: suffix && /* @__PURE__ */ jsxs("div", { className: `flex h-full items-center justify-center `, children: [
                  " ",
                  suffix
                ] }) || error?.message && helperText && !suffix && !disabled && /* @__PURE__ */ jsx(
                  "div",
                  {
                    id: "my-anchor-element",
                    className: `flex h-full cursor-pointer items-center justify-center `,
                    children: /* @__PURE__ */ jsx(
                      Tooltip,
                      {
                        variant: "error",
                        color: colors.negative,
                        title: error.message,
                        arrow: true,
                        children: /* @__PURE__ */ jsx(Icon, { name: "alert-line", color: colors.negative })
                      }
                    )
                  }
                )
              }
            ) : void 0,
            prefix: prefix ? /* @__PURE__ */ jsx("div", { onClick: (e) => e.stopPropagation(), children: prefix }) : void 0,
            ...rest
          }
        ),
        !hideErrorMessage && error?.message && !helperText && /* @__PURE__ */ jsx(InputErrorMessage, { message: error?.message }),
        helperText && /* @__PURE__ */ jsx(Text, { color: colors.primary, children: helperText })
      ]
    }
  );
};
const InputDefault = forwardRef(InputDefault$);
const EmojiPicker = ({
  value,
  onChange,
  label,
  emojis = ["😊", "👍", "❤️", "😂", "🔥"]
  // Default emojis
}) => {
  const inputRef = useRef(null);
  const [cursor, setCursor] = useState(value.length);
  const getInput = () => inputRef.current?.input ?? inputRef.current;
  const updateCursor = () => {
    const el = getInput();
    if (el && el.selectionStart !== null) {
      setCursor(el.selectionStart);
    }
  };
  const addEmoji = useCallback(
    (emoji) => {
      const el = getInput();
      const pos = cursor ?? value.length;
      const newValue = value.slice(0, pos) + emoji + value.slice(pos);
      onChange(newValue);
      requestAnimationFrame(() => {
        if (el) {
          const newPos = pos + emoji.length;
          el.setSelectionRange(newPos, newPos);
          el.focus();
          setCursor(newPos);
        }
      });
    },
    [cursor, value, onChange]
  );
  return /* @__PURE__ */ jsx(
    Input.Default,
    {
      ref: inputRef,
      value,
      onChange: (e) => {
        onChange(e.target.value);
        updateCursor();
      },
      onClick: updateCursor,
      onKeyUp: updateCursor,
      onSelect: updateCursor,
      hideErrorMessage: true,
      label,
      suffix: (
        // Emoji picker dropdown
        /* @__PURE__ */ jsx(
          Dropdown,
          {
            trigger: ["click"],
            placement: "topRight",
            openClassName: "flex bg-light-5",
            overlayClassName: "[&_.ant-dropdown-menu]:flex",
            dropdownRender: () => /* @__PURE__ */ jsx(Flex, { className: "bg-white-ff max-h-40 overflow-x-auto rounded-md p-2", gap: 8, children: emojis.map((emoji, i) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "hover:bg-light-5 mb-1 flex cursor-pointer items-center justify-center rounded text-xl leading-none",
                onMouseDown: (e) => {
                  e.preventDefault();
                  addEmoji(emoji);
                },
                children: emoji
              },
              i
            )) }),
            children: /* @__PURE__ */ jsx(Flex, { className: "hover:bg-light-5 rounded-full bg-transparent p-1", children: /* @__PURE__ */ jsx(Icon, { name: "smile-outlined", className: "cursor-pointer" }) })
          }
        )
      )
    }
  );
};
const InputGhost$ = (props, ref2) => {
  const {
    label,
    inputSize = "medium",
    error,
    readOnly,
    value,
    height = 38,
    isCurrency,
    required = false,
    wrapperClassName,
    prefix,
    placeHolder,
    suffix,
    onChange,
    onlyNumber,
    style,
    onChangeText,
    disabled,
    lang,
    helperText,
    ...rest
  } = useMemo(() => ({ ...props }), [props]);
  const { i18n: i18n2 } = useTranslation();
  const _onChangeText = useCallback(
    (e) => {
      const star = starkString(e.target.value);
      if (onlyNumber || isCurrency) {
        star.parseNumber();
      }
      onChangeText?.(star.toString());
      onChange?.(e);
    },
    [isCurrency, onChange, onChangeText, onlyNumber]
  );
  const InputClassName = twMerge(
    `w-full flex items-center rounded-[4px] bg-white-ff bg-none outline-none transition-all border-none duration-200`,
    disabled ? "bg-light-6 text-primary-light-2" : "bg-none text-primary-light-2"
  );
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      className: `flex w-full flex-col justify-start gap-[2px] text-[14px] ${wrapperClassName} `,
      children: [
        label && /* @__PURE__ */ jsxs("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsx(Text, { size: inputSize === "medium" ? 14 : 12, color: colors.primary, weight: "medium", children: label }) : label,
          required && /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 8, color: colors.primary_light_3 })
        ] }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `${InputClassName} focus-within:border-primary `,
            style: {
              border: `${error?.message && !disabled ? `1px solid ${colors.negative}` : ""}`
            },
            children: [
              prefix && /* @__PURE__ */ jsx(
                "div",
                {
                  className: twMerge(
                    "absolute flex items-center justify-center",
                    inputSize === "medium" ? "ps-[12px]" : "ps-[8px]"
                  ),
                  children: prefix
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  ref: ref2,
                  placeholder: placeHolder,
                  disabled,
                  ...rest,
                  style: {
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                    ...style
                  },
                  onChange: _onChangeText,
                  value,
                  className: `text-primary disabled:placeholder:text-primary-light-2 border-none bg-transparent placeholder:text-opacity-50 ${prefix ? "pe-3 ps-8" : "px-3"} 
            ${inputSize === "medium" ? "px-[12px] text-[16px] placeholder:text-[16px] " : "px-[8px] text-[14px] placeholder:text-[14px]"} 
            ${(lang || i18n2.language) === "fa" ? "font-yekan-normal direction-rtl" : "font-roboto-normal direction-ltr"} placeholder:text-primary  text-primary-dark-1 w-full  border-none text-[14px] font-medium outline-none ${inputSize === "medium" ? "h-[38px]  text-[16px]" : "h-[32px] text-[14px]"}`,
                  readOnly
                }
              ),
              (suffix || error?.message) && /* @__PURE__ */ jsx(
                "div",
                {
                  className: twMerge(
                    "flex h-full justify-center",
                    suffix ? inputSize === "medium" ? "pe-3" : "pe-2" : null
                  ),
                  children: suffix && /* @__PURE__ */ jsx("div", { className: ` flex h-full items-center justify-center`, children: suffix }) || error?.message && helperText && !suffix && !disabled && /* @__PURE__ */ jsx(
                    "div",
                    {
                      id: "my-anchor-element",
                      className: ` flex h-full cursor-pointer items-center justify-center`,
                      children: /* @__PURE__ */ jsx(Tooltip$1, { color: colors.negative, title: error.message, arrow: true, children: /* @__PURE__ */ jsx(Icon, { name: "alert-line", color: colors.negative }) })
                    }
                  )
                }
              )
            ]
          }
        ),
        !helperText && error && /* @__PURE__ */ jsx(Text, { className: "min-h-[24px]", size: 12, color: colors.negative_light_1, children: error?.message }),
        helperText && /* @__PURE__ */ jsx(Text, { color: colors.primary, children: helperText })
      ]
    }
  );
};
const InputGhost = forwardRef(InputGhost$);
const InputNumber = forwardRef((props, ref2) => {
  const {
    placeHolder,
    background,
    inputSize = "large",
    error,
    lang,
    helperText,
    disabled,
    isCurrency,
    onChange,
    value,
    status,
    prefix,
    suffix,
    required,
    label,
    height = 38,
    step = 1,
    className,
    wrapperClassName,
    max: max2,
    min: min2,
    hideErrorMessage = false,
    disableNegative = false,
    ...rest
  } = useMemo(() => ({ ...props }), [props]);
  const { i18n: i18n2 } = useTranslation();
  const _onChangeText = useCallback(
    (e) => {
      const star = starkString(e);
      if (isCurrency) {
        star.parseNumber();
      }
      const value2 = Number(e);
      if (!isNaN(value2)) {
        const minimumIsValid = min2 !== void 0 && Number.isInteger(min2);
        const maximumIsValid = max2 !== void 0 && Number.isInteger(max2);
        if (maximumIsValid && minimumIsValid && max2 < min2) {
          throw new Error("Maximum should be bigger than Minimum");
        }
        if (disableNegative && value2 < 0 || minimumIsValid && min2 == 0 && value2 < 0 || maximumIsValid && max2 == 0 && value2 > 0) {
          return;
        }
        if (minimumIsValid && value2 < Number(min2)) {
          return;
        }
        if (maximumIsValid && value2 > Number(max2)) {
          return;
        }
        onChange?.(star.toStringNumber({ negative: true }));
      } else {
        onChange?.(star.toStringNumber({ negative: true }));
      }
    },
    [isCurrency, onChange, min2, max2, disableNegative]
  );
  const handleArrowBtns = useCallback(
    (sp) => {
      const DEFAULT_VALUE = 0;
      const currentNumber = value === void 0 ? DEFAULT_VALUE : value;
      const [integerPart, decimalPart = ""] = currentNumber.toString().split(".");
      const updatedDecimalPart = (Number(integerPart) - sp).toString();
      const combinedNumberString = decimalPart ? `${updatedDecimalPart}.${decimalPart}` : updatedDecimalPart;
      const updatedNumber = Number(combinedNumberString).toFixed(decimalPart.length);
      _onChangeText(updatedNumber);
    },
    [value, _onChangeText]
  );
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      vertical: true,
      className: twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName
      ),
      children: [
        label && /* @__PURE__ */ jsxs("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(Text, { size: inputSize === "large" ? 14 : 12, color: colors.primary, weight: "normal", children: label }) }) : label,
          /* @__PURE__ */ jsx(Render, { when: required, children: /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 6, color: colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsx(
          Input$1,
          {
            value: isCurrency && value ? starkString(value).toCurrency().toString() : value || "",
            ref: ref2,
            className: twMerge(
              (lang || i18n2.language) === "fa" ? "font-yekan-normal direction-rtl " : "font-roboto-normal direction-ltr",
              "placeholder:text-primary text-primary-dark-1 w-full select-none py-0  pe-0 ps-2 text-[14px] font-medium outline-none",
              className
            ),
            classNames: {
              input: "py-2 !placeholder:text-right"
            },
            styles: { input: { unicodeBidi: "plaintext" } },
            placeholder: placeHolder,
            size: inputSize,
            style: { background, height, outline: "none", unicodeBidi: "plaintext" },
            onChange: (e) => _onChangeText(e.target.value),
            status: error?.message ? "error" : status,
            disabled,
            suffix: /* @__PURE__ */ jsx("div", { className: twMerge("flex h-full"), children: /* @__PURE__ */ jsxs(
              Flex,
              {
                vertical: true,
                flex: 1,
                className: " border-primary-light-3 w-full border-s border-solid p-0",
                children: [
                  /* @__PURE__ */ jsx(
                    Flex,
                    {
                      flex: 1,
                      className: "bg-light-1 w-10 cursor-pointer items-center  justify-center  rounded	border-solid ",
                      onClick: () => handleArrowBtns(-step),
                      children: /* @__PURE__ */ jsx(Icon, { name: "Chevron_Up", size: "small", color: colors.primary_dark_2 })
                    }
                  ),
                  /* @__PURE__ */ jsx(Divider, { className: "bg-primary-light-3 m-0 p-0" }),
                  /* @__PURE__ */ jsx(
                    Flex,
                    {
                      flex: 1,
                      onClick: () => handleArrowBtns(+step),
                      className: "bg-light-1 border-1 w-10 cursor-pointer items-center justify-center  rounded	border-solid",
                      children: /* @__PURE__ */ jsx(Icon, { name: "Chevron_Down", size: "small", color: colors.primary_dark_2 })
                    }
                  )
                ]
              }
            ) }),
            prefix,
            step,
            ...rest
          }
        ),
        !hideErrorMessage && error?.message && !helperText && /* @__PURE__ */ jsx(InputErrorMessage, { message: error?.message }),
        helperText && /* @__PURE__ */ jsx(Text, { color: colors.primary, className: "helperText", children: helperText })
      ]
    }
  );
});
const InputSearch = forwardRef(
  ({ onIconClick, ...rest }, ref2) => {
    const { t: t2 } = useTranslation();
    return /* @__PURE__ */ jsx(
      InputDefault,
      {
        placeholder: t2("common.literal.search"),
        suffix: /* @__PURE__ */ jsx(Icon, { name: "Search_header", onClick: onIconClick }),
        ref: ref2,
        hideErrorMessage: true,
        ...rest
      }
    );
  }
);
const InputTag = memo(
  ({
    value = [],
    onChange,
    placeholder,
    disabled,
    label,
    required,
    hideErrorMessage,
    error,
    wrapperClassName
  }) => {
    const inputRef = React.useRef(null);
    const addTag = useCallback(() => {
      const newTag = inputRef.current?.value.trim();
      if (!newTag || value.includes(newTag)) return;
      onChange?.([...value, newTag]);
      inputRef.current && (inputRef.current.value = "");
    }, [value, onChange]);
    const removeTag = useCallback(
      (removedTag) => {
        onChange?.(value.filter((tag) => tag !== removedTag));
      },
      [value, onChange]
    );
    const onKeyDown = useCallback(
      (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          addTag();
        }
      },
      [addTag]
    );
    const onChangeInput = useCallback((e) => {
      inputRef.current && (inputRef.current.value = e.target.value);
    }, []);
    return /* @__PURE__ */ jsxs(
      Flex$1,
      {
        vertical: true,
        className: twMerge(
          "w-full",
          !hideErrorMessage && "inputErrorMessageContainer",
          wrapperClassName,
          "[&_.ant-input-clear-icon]:!flex"
        ),
        children: [
          label && /* @__PURE__ */ jsxs("div", { className: "flex h-[24px] items-center gap-1", children: [
            typeof label === "string" ? /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx(
              Text,
              {
                size: 14,
                color: colors.primary,
                weight: "normal",
                children: label
              }
            ) }) : label,
            /* @__PURE__ */ jsx(Render, { when: required, children: /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 6, color: colors.negative, className: "mb-2" }) })
          ] }),
          /* @__PURE__ */ jsxs(
            Flex$1,
            {
              wrap: true,
              className: twMerge(
                "min-h-10 w-full gap-1 rounded border border-solid border-primary-light-3 bg-white-ff p-2 text-[14px] font-medium hover:border-primary-light-2",
                error && "border-negative"
              ),
              children: [
                /* @__PURE__ */ jsx(Fragment$1, { children: value.map((tag) => /* @__PURE__ */ jsx(
                  Tag$1,
                  {
                    closable: !disabled,
                    onClose: () => removeTag(tag),
                    style: { marginInlineEnd: 4 },
                    children: tag
                  },
                  tag
                )) }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    ref: inputRef,
                    onChange: onChangeInput,
                    placeholder: value.length === 0 ? placeholder : void 0,
                    className: twMerge(
                      "placeholder:text-primary_light_3 flex-1 border-none font-yekan-normal text-primary-dark-1 outline-none"
                    ),
                    onKeyDown
                  }
                )
              ]
            }
          ),
          !hideErrorMessage && error?.message && /* @__PURE__ */ jsx(InputErrorMessage, { message: error?.message })
        ]
      }
    );
  }
);
const Input = batch({
  Default: InputDefault,
  Ghost: InputGhost,
  Number: InputNumber,
  Search: InputSearch,
  TextArea: InputTextArea,
  EmojiPicker,
  Tag: InputTag
});
const InputDatePicker = ({
  helperText,
  required,
  label,
  error,
  wrapperClassName,
  onChange: onChangeProp,
  onChangeISO,
  value: valueProp,
  valueISO,
  locale,
  placeholder,
  wrapperStyle,
  hideErrorMessage = false,
  ...props
}) => {
  const { i18n: i18n2 } = useTranslation();
  const [open, setOpen] = useState(false);
  const value = useMemo(() => {
    if (valueISO) {
      return require$$0$1(valueISO);
    }
    return valueProp;
  }, [valueISO, valueProp]);
  const onChange = useCallback(
    (date, dateString) => {
      const isoString = date ? date.toISOString() : "";
      onChangeProp?.(date, dateString);
      onChangeISO?.(isoString);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const language = locale || i18n2.language;
  return /* @__PURE__ */ jsxs(Flex, { vertical: true, className: `w-full ${!hideErrorMessage && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ jsx(Render, { when: helperText, children: /* @__PURE__ */ jsx(Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsx(Icon, { name: "Help_header", color: colors.primary_light_3, size: 15 }) }) }),
      typeof label === "string" ? /* @__PURE__ */ jsx(Text, { className: "mb-[3px]", color: colors.primary, children: label }) : label,
      /* @__PURE__ */ jsx(Render, { when: required, children: /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 6, color: colors.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ jsx(
      mainExports.InputDatePicker,
      {
        open,
        onOpenChange: setOpen,
        format: language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: language === "fa" ? "fa" : "en",
        pickerProps: {
          style: { fontFamily: locale === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
        },
        customColors: datePickerColors,
        style: { fontFamily: "YekanBakhFaRegular", fontSize: 16 },
        inputMode: "numeric",
        className: "placeholder:text-primary-light-3",
        wrapperStyle: {
          fontFamily: "YekanBakhFaRegular",
          borderColor: error?.message ? colors.negative : colors.primary_light_3,
          ...wrapperStyle
        },
        onChange,
        value,
        placeholder,
        closeOnChange: true,
        ...props
      }
    ),
    !hideErrorMessage && error?.message && /* @__PURE__ */ jsx(InputErrorMessage, { message: getErrorMessage(error) })
  ] });
};
const InputRangePicker = ({
  helperText,
  required,
  label,
  error,
  wrapperClassName,
  inputWrapperClassName,
  value,
  locale,
  wrapperStyle,
  hideErrorMessage = false,
  height,
  ...props
}) => {
  const { i18n: i18n2 } = useTranslation();
  const pickerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const isValueValid = (value?.filter(Boolean)?.length || 0) > 0 && !!value;
  const language = locale || i18n2.language;
  useEffect(() => {
    if (value?.length === 2 && pickerRef.current) {
      setOpen(false);
    }
  }, [value]);
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      vertical: true,
      className: twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName
      ),
      children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
          /* @__PURE__ */ jsx(Render, { when: helperText, children: /* @__PURE__ */ jsx(Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsx(Icon, { name: "Help_header", color: colors.primary_light_3, size: 15 }) }) }),
          typeof label === "string" ? /* @__PURE__ */ jsx(Text, { color: colors.primary, className: "mb-[3px]", children: label }) : label,
          /* @__PURE__ */ jsx(Render, { when: required, children: /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 6, color: colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsx(Flex, { ref: pickerRef, className: twMerge("h-full w-full", inputWrapperClassName), children: /* @__PURE__ */ jsx(
          mainExports.InputRangePicker,
          {
            open,
            onOpenChange: setOpen,
            format: language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
            locale: language === "fa" ? "fa" : "en",
            rangeProps: {
              style: { fontFamily: locale === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
            },
            customColors: datePickerColors,
            inputMode: "numeric",
            wrapperStyle: {
              fontFamily: "YekanBakhFaRegular",
              borderColor: error?.message ? colors.negative : colors.primary_light_3,
              minHeight: 40,
              ...wrapperStyle
            },
            value: isValueValid ? value : null,
            ...props
          }
        ) }),
        !hideErrorMessage && error?.message && /* @__PURE__ */ jsx(InputErrorMessage, { message: error?.message })
      ]
    }
  );
};
const NotResult = ({
  error,
  noContentFoundMessage,
  errorIcon,
  noContentIcon
}) => {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsxs(Flex, { justify: "center", align: "center", gap: 4, className: "h-[100px]", children: [
    error?.message ? /* @__PURE__ */ jsx(Icon, { name: errorIcon, size: 24, color: colors.negative_light_2 }) : /* @__PURE__ */ jsx(Icon, { name: noContentIcon, size: 24, color: colors.primary_light_3 }),
    /* @__PURE__ */ jsx(Text, { size: 14, color: error?.message ? colors.negative : colors.primary_light_2, children: noContentFoundMessage ? noContentFoundMessage : error?.message ? t2("common.literal.listError") : t2("common.message.noResultFound") })
  ] });
};
notification.config({
  closeIcon: /* @__PURE__ */ jsx(Icon, { size: 16, name: "Close", color: colors.white_ff }),
  placement: "bottomRight",
  rtl: true,
  bottom: 0,
  duration: 7
});
const useNotification = () => {
  const { t: t2 } = useTranslation();
  const success = (props) => {
    notification.open({
      ...props,
      style: {
        backgroundColor: colors.positive,
        alignItems: "center",
        borderRadius: 4
      },
      //TODO if need button
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      icon: /* @__PURE__ */ jsx(Icon, { size: 16, name: "Checkmark_Circle", color: colors.white_ff }),
      message: /* @__PURE__ */ jsxs(Flex, { className: "flex-1", children: [
        /* @__PURE__ */ jsx(
          Text,
          {
            showTooltipOnTruncate: false,
            className: "flex flex-1 ",
            weight: "medium",
            size: 16,
            color: colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsx(VerticalLine, { color: colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const neutral = (props) => {
    notification.open({
      ...props,
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.primary_dark_1, borderRadius: 4, alignItems: "center" },
      message: /* @__PURE__ */ jsxs(Flex, { gap: 8, children: [
        /* @__PURE__ */ jsx(
          Text,
          {
            showTooltipOnTruncate: false,
            className: "flex flex-1  ",
            weight: "medium",
            size: 16,
            color: colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsx(VerticalLine, { color: colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const informative = (props) => {
    notification.open({
      ...props,
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.secondary, borderRadius: 4, alignItems: "center" },
      icon: /* @__PURE__ */ jsx(Icon, { size: 16, name: "information", color: colors.white_ff }),
      message: /* @__PURE__ */ jsxs(Flex, { gap: 8, children: [
        /* @__PURE__ */ jsx(
          Text,
          {
            showTooltipOnTruncate: false,
            className: "flex flex-1 ",
            weight: "medium",
            size: 16,
            color: colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsx(VerticalLine, { color: colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const negative = (props) => {
    notification.open({
      ...props,
      // btn: (
      //   <Text className="self-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.negative, borderRadius: 4, alignItems: "center" },
      icon: /* @__PURE__ */ jsx(Icon, { size: 16, name: "Alert", color: colors.white_ff }),
      message: /* @__PURE__ */ jsxs(Flex, { gap: 8, children: [
        /* @__PURE__ */ jsx(
          Text,
          {
            showTooltipOnTruncate: false,
            className: " flex flex-1 ",
            weight: "medium",
            size: 16,
            color: colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsx(VerticalLine, { color: colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const error = (error2) => {
    notification.open({
      style: { backgroundColor: colors.negative, borderRadius: 4, alignItems: "center" },
      icon: /* @__PURE__ */ jsx(Icon, { size: 16, name: "Alert", color: colors.white_ff }),
      message: /* @__PURE__ */ jsxs(Flex, { gap: 8, children: [
        /* @__PURE__ */ jsx(
          Text,
          {
            showTooltipOnTruncate: false,
            weight: "medium",
            size: 16,
            className: " flex flex-1  ",
            color: colors.white_ff,
            children: error2 || t2("common.error.errorOccurred")
          }
        ),
        /* @__PURE__ */ jsx(VerticalLine, { color: colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const successfullyAdded = () => {
    success({
      message: /* @__PURE__ */ jsx(Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.white_ff, children: t2("common.message.successfullyAdded") })
    });
  };
  const successfullyEdited = () => {
    success({
      message: /* @__PURE__ */ jsx(Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.white_ff, children: t2("common.message.successfullyEdited") })
    });
  };
  const successfullyDeleted = () => {
    success({
      message: /* @__PURE__ */ jsx(Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.white_ff, children: t2("common.message.successfullyDeleted") })
    });
  };
  const copied = () => {
    success({
      message: /* @__PURE__ */ jsx(Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.white_ff, children: t2("common.message.copied") })
    });
  };
  return {
    success,
    neutral,
    negative,
    informative,
    successfullyAdded,
    successfullyEdited,
    successfullyDeleted,
    copied,
    error
  };
};
const SelectClearIcon = () => {
  const { i18n: i18n2 } = useTranslation();
  return /* @__PURE__ */ jsx(
    Icon,
    {
      name: "Close_Circle",
      size: 18,
      className: "text-light-1 hover:text-secondary",
      style: {
        position: "absolute",
        right: i18n2.language === "fa" ? -10 : 20,
        top: -3,
        width: "fit-content"
      }
    }
  );
};
const SelectLabel = ({
  disabled,
  label,
  labelExtraNode,
  required,
  size,
  offset = 0
}) => {
  if (!label) {
    return null;
  }
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: "flex flex-row items-center justify-between",
      style: { marginBlockEnd: offset },
      children: [
        /* @__PURE__ */ jsxs(Flex, { vertical: false, align: "center", gap: 1, children: [
          typeof label === "string" ? /* @__PURE__ */ jsx(
            Text,
            {
              className: "h-[24px]",
              weight: "normal",
              size: size === "medium" ? 14 : 12,
              color: disabled ? colors.primary_light_2 : colors.primary,
              children: label
            }
          ) : /* @__PURE__ */ jsx(Fragment$1, { children: label }),
          /* @__PURE__ */ jsx(Render, { when: required, children: /* @__PURE__ */ jsx(Icon, { name: "Asterisk", size: 6, color: colors.negative, className: "mb-2" }) })
        ] }),
        labelExtraNode
      ]
    }
  );
};
const SelectNotFound = ({ error, noContentFoundMessage }) => {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsxs(Flex, { justify: "center", align: "center", gap: 4, className: "h-[100px]", children: [
    error?.message ? /* @__PURE__ */ jsx(Icon, { name: "alert-line", size: 24, color: colors.negative_light_2 }) : /* @__PURE__ */ jsx(Icon, { name: "Search_fail", size: 24, color: colors.primary_light_3 }),
    /* @__PURE__ */ jsx(Text, { size: 14, color: error?.message ? colors.negative : colors.primary_light_2, children: noContentFoundMessage ? noContentFoundMessage : error?.message ? t2("common.literal.listError") : t2("common.message.noResultFound") })
  ] });
};
const SelectPlaceholder = ({
  placeholder,
  isHovered,
  disabled,
  isTabFocused
}) => {
  return /* @__PURE__ */ jsx(
    Text,
    {
      weight: "normal",
      size: 14,
      color: disabled ? colors.primary_light_2 : isHovered || isTabFocused ? colors.primary_dark_1 : colors.primary_light_3,
      children: placeholder
    }
  );
};
const SelectSuffix = ({ isHovered, isTabFocused, disabled, error }) => {
  return /* @__PURE__ */ jsxs(Flex, { align: "center", gap: 8, children: [
    error?.message && /* @__PURE__ */ jsx(Icon, { name: "Alert", size: 18, color: colors.negative }),
    /* @__PURE__ */ jsx(
      Icon,
      {
        name: "Chevron_Down",
        size: 18,
        color: disabled ? colors.primary_light_2 : isHovered || isTabFocused ? colors.primary_dark_1 : colors.primary_dark_1
      }
    )
  ] });
};
const CustomizedAntSelectConfig = {
  components: {
    Select: {
      multipleItemBg: colors.light_1,
      multipleItemBorderColor: colors.primary_light_3,
      multipleItemBorderColorDisabled: colors.primary_light_3,
      multipleItemColorDisabled: colors.negative,
      multipleItemHeight: 20,
      multipleItemHeightLG: 20,
      multipleSelectorBgDisabled: colors.light_1,
      optionActiveBg: colors.light_1,
      optionFontSize: 20,
      optionHeight: 20,
      optionPadding: 0,
      optionSelectedBg: colors.white_ff,
      singleItemHeightLG: 20,
      zIndexPopup: 20,
      colorTextPlaceholder: colors.primary_light_3
    }
  }
};
const generateSelectClassNames$1 = ({
  size = "medium",
  error,
  disabled,
  isTabFocused
}) => {
  const extraOverrides = {
    small: "h-[34px] [&_input]:!h-[32px]",
    medium: "h-[40px] [&_input]:!h-[38px]",
    large: "h-[46px] [&_input]:!h-[44px]"
  };
  return twMerge(
    `min-w-[200px] flex-1 border rounded border-primary-light-3 bg-white-ff hover:border-primary-light-2 `,
    "[&_.ant-select-selection-item]:!border-none [&_.ant-select-selection-item]:!bg-transparent",
    extraOverrides[size],
    disabled && "!bg-light-6 !border-light-6",
    error && "border-negative hover:border-negative-dark-1 ",
    isTabFocused && `border-[2px] border-primary-dark-1`
  );
};
const { Option: Option$2 } = Select$1;
const MultipleSelect = forwardRef(
  ({
    error,
    className,
    underlined,
    value,
    label,
    labelExtraNode = null,
    onDropdownVisibleChange,
    open,
    showSearch = false,
    options,
    labelExtractor = (item) => item?.label,
    valueExtractor = (item) => item.value,
    tagExtractor = (item) => item.label,
    disableExtractor = (_item) => false,
    onChange,
    renderItem,
    renderSelectedItem,
    onChangeValue,
    selectedValue,
    wrapperClassName,
    disabled = false,
    loading = false,
    noContentFoundMessage,
    labelPosition = "vertical",
    size = "medium",
    placeholder,
    popupClassName,
    allowClear,
    header,
    footer,
    infinite,
    hasError,
    addonBefore,
    addonAfter,
    required,
    lang,
    disableOutsideScroll,
    hideErrorMessage = false,
    getTagProps,
    ...rest
  }, ref2) => {
    const { t: t2 } = useTranslation();
    const { eventHandlers, isHovered, isTabFocused } = useInteractions();
    const [isOpen, setIsOpen] = useState(false);
    const memoizedSelectedOptions = useRef(
      new Map(value?.map((v) => [valueExtractor(v), v]))
    );
    const _value = useMemo(() => {
      const selectedItems = [];
      if (selectedValue) {
        selectedItems.push(...selectedValue);
      }
      if (value) {
        selectedItems.push(...value.map(valueExtractor));
      }
      return selectedItems;
    }, [selectedValue, value, valueExtractor]);
    const currentSelectedItems = useMemo(() => {
      const mappedSelectedOptions = memoizedSelectedOptions.current;
      const unMappedOptions = [...mappedSelectedOptions].map(([_, option]) => option);
      const currents = unMappedOptions?.filter((item) => _value.some((i) => i === valueExtractor(item))) || [];
      return currents.map((cur) => ({ value: valueExtractor(cur), label: tagExtractor(cur) }));
    }, [_value, valueExtractor, tagExtractor]);
    const onVisibleChange = (open2) => {
      onDropdownVisibleChange?.(open2);
      setIsOpen(open2);
    };
    const _onChange = (items) => {
      const mappedOptions = new Map(options?.map((option) => [valueExtractor(option), option]));
      const mappedItems = new Set(items);
      const mappedSelectedOptions = memoizedSelectedOptions.current;
      items.forEach((item) => {
        if (mappedOptions.has(item)) {
          const option = mappedOptions.get(item);
          mappedSelectedOptions.set(valueExtractor(option), option);
        }
      });
      const unMappedSelectedOptions = [...mappedSelectedOptions].map(([_, option]) => option);
      unMappedSelectedOptions.forEach((option) => {
        if (!mappedItems.has(valueExtractor(option)))
          mappedSelectedOptions.delete(valueExtractor(option));
      });
      const selectedOptions = [];
      [...mappedSelectedOptions].forEach(([id, option]) => {
        selectedOptions.push(option);
      });
      onChange?.(selectedOptions);
      const itemsValue = items.map((i) => i);
      onChangeValue?.(itemsValue);
    };
    const _renderItem = useCallback(
      ({
        item,
        index,
        isActive,
        disabled: disabled2
      }) => {
        const extractedLabel = labelExtractor(item);
        return /* @__PURE__ */ jsx(
          Flex,
          {
            className: twMerge(
              "cursor-pointer",
              disabled2 && "pointer-events-none cursor-default opacity-50"
            ),
            onClick: () => {
              const convertedValueToMatchOnChange = _value.map((i) => i);
              if (convertedValueToMatchOnChange.some((i) => i === valueExtractor(item))) {
                _onChange(convertedValueToMatchOnChange.filter((i) => i !== valueExtractor(item)));
              } else {
                _onChange([...convertedValueToMatchOnChange, valueExtractor(item)]);
              }
            },
            children: renderItem ? /* @__PURE__ */ jsxs(Flex, { className: "min-h-[32px] w-full flex-1 items-center px-2", gap: 8, children: [
              /* @__PURE__ */ jsx(Checkbox, { checked: isActive }),
              renderItem(item, index, isActive, disabled2)
            ] }) : /* @__PURE__ */ jsxs(Flex, { gap: 8, className: twMerge("h-10 w-full flex-1 items-center px-2"), children: [
              /* @__PURE__ */ jsx(Checkbox, { checked: isActive }),
              typeof extractedLabel === "string" ? /* @__PURE__ */ jsx(
                Text,
                {
                  weight: isActive ? "bold" : "normal",
                  color: colors.primary_dark_1,
                  lang,
                  className: "max-w-full overflow-hidden text-ellipsis",
                  children: extractedLabel
                }
              ) : extractedLabel
            ] })
          }
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [_value, renderItem]
    );
    const scrollHandler = (event) => {
      const { target } = event;
      if (!target.classList.contains("rc-virtual-list-holder")) {
        setIsOpen(false);
      }
    };
    useEffect(() => {
      if (!disableOutsideScroll) return;
      if (isOpen) {
        document.addEventListener("scroll", scrollHandler, true);
      } else {
        document.removeEventListener("scroll", scrollHandler, true);
      }
    }, [isOpen, disableOutsideScroll]);
    return /* @__PURE__ */ jsxs(
      Flex,
      {
        vertical: labelPosition === "vertical",
        className: twMerge(
          "h-fit w-full",
          !hideErrorMessage && "inputErrorMessageContainer",
          labelPosition === "horizontal" && "items-center gap-3",
          wrapperClassName
        ),
        children: [
          /* @__PURE__ */ jsx(SelectLabel, { ...{ disabled, label, labelExtraNode, required, size } }),
          /* @__PURE__ */ jsx(ConfigProvider, { theme: CustomizedAntSelectConfig, children: /* @__PURE__ */ jsxs(Flex, { align: "center", children: [
            addonBefore,
            /* @__PURE__ */ jsx(
              Select$1,
              {
                ...rest,
                mode: "multiple",
                menuItemSelectedIcon: null,
                ref: ref2,
                className: twMerge(
                  `${generateSelectClassNames$1({
                    size,
                    error: !!error?.message || hasError,
                    disabled,
                    isTabFocused
                  })}`,
                  className
                ),
                disabled,
                ...eventHandlers(),
                showSearch,
                bordered: false,
                maxTagCount: 0,
                maxTagPlaceholder: /* @__PURE__ */ jsx(Text, { children: t2("common.message.itemsSelectedWithCount", { count: _value.length }) }),
                placeholder: /* @__PURE__ */ jsx(SelectPlaceholder, { ...{ isHovered, isTabFocused, placeholder, size, disabled } }),
                allowClear: allowClear ? {
                  clearIcon: /* @__PURE__ */ jsx(SelectClearIcon, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ jsx(SelectNotFound, { ...{ error, noContentFoundMessage } }),
                suffixIcon: /* @__PURE__ */ jsx(SelectSuffix, { ...{ isHovered, loading, disabled, isTabFocused, error } }),
                popupClassName: twMerge("p-0 small-custom-scrollbar z-[1000]", popupClassName),
                value: _value,
                onDropdownVisibleChange: onVisibleChange,
                onPopupScroll: (e) => {
                  e.persist();
                  const target = e.target;
                  if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
                    infinite?.hasMore && infinite?.fetchNextPage();
                  }
                },
                loading: false,
                open: disabled ? false : open === void 0 ? isOpen : open,
                optionLabelProp: "valueRender",
                dropdownRender: (menu) => {
                  if (loading) {
                    return /* @__PURE__ */ jsx(Flex, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ jsx(Loading, { isLoading: true, size: 24 }) });
                  }
                  const tags = /* @__PURE__ */ jsx(
                    Flex,
                    {
                      align: "center",
                      gap: 8,
                      className: "tiny-custom-scrollbar-horizontal border-b-light-7 flex-1 overflow-x-auto border-b p-3",
                      children: currentSelectedItems.map((i) => {
                        return /* @__PURE__ */ jsx(
                          Tag,
                          {
                            closable: true,
                            className: "!min-w-max",
                            title: i.label || "",
                            onClose: () => {
                              const filteredItems = _value?.filter((x) => i?.value !== x);
                              _onChange(filteredItems);
                            },
                            ...getTagProps?.(i)
                          },
                          i.value
                        );
                      })
                    }
                  );
                  const dropdown = /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
                    tags,
                    header && /* @__PURE__ */ jsx(Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsx(Flex, { vertical: true, className: "relative overflow-auto", children: menu }),
                    footer && /* @__PURE__ */ jsx(
                      Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                  if (!infinite) {
                    return dropdown;
                  }
                  return /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
                    tags,
                    header && /* @__PURE__ */ jsx(Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsx(
                      Flex,
                      {
                        vertical: true,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ jsx(
                          InfiniteLoader,
                          {
                            hasMore: infinite.hasMore,
                            onNextPage: infinite.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: options?.map((item, index) => {
                              const isActive = !!_value?.find((i) => i === valueExtractor(item));
                              return _renderItem({ index, isActive, item });
                            })
                          }
                        )
                      }
                    ),
                    footer && /* @__PURE__ */ jsx(
                      Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                },
                children: options?.map((item, index) => {
                  const isActive = !!_value?.find((i) => i === valueExtractor(item));
                  return /* @__PURE__ */ jsx(
                    Option$2,
                    {
                      value: valueExtractor(item),
                      disabled: disableExtractor(item),
                      children: _renderItem({
                        index,
                        item,
                        isActive,
                        disabled: disableExtractor ? disableExtractor(item) : false
                      })
                    },
                    valueExtractor(item)
                  );
                })
              }
            ),
            addonAfter
          ] }) }),
          error?.message && !hideErrorMessage && /* @__PURE__ */ jsx(InputErrorMessage, { message: error?.message })
        ]
      }
    );
  }
);
const { Option: Option$1 } = Select$1;
const SingleSelect = forwardRef(
  ({
    error,
    className,
    underlined,
    value,
    label,
    labelExtraNode = null,
    onDropdownVisibleChange,
    open,
    showSearch = false,
    options,
    labelExtractor = (item) => item?.label,
    valueExtractor = (item) => item.value,
    disableExtractor = (_item) => false,
    onChange,
    renderItem,
    onClickItem,
    renderSelectedItem,
    onChangeValue,
    selectedValue,
    wrapperClassName,
    disabled = false,
    loading = false,
    noContentFoundMessage,
    labelPosition = "vertical",
    size = "medium",
    placeholder,
    popupClassName,
    allowClear,
    header,
    footer,
    infinite,
    hasError,
    addonBefore,
    addonAfter,
    required,
    labelOffset = 0,
    lang,
    style,
    hideErrorMessage = false,
    suffixIcon,
    isLocaleSearch = false,
    disableOutsideScroll,
    ...rest
  }, ref2) => {
    const { eventHandlers, isHovered, isTabFocused } = useInteractions();
    const [isOpen, setIsOpen] = useState(false);
    const _value = useMemo(() => {
      let selectItem = null;
      if (selectedValue) {
        const item = options?.find((option) => valueExtractor(option) === selectedValue);
        if (item) {
          selectItem = item;
        }
      }
      if (value) {
        selectItem = value;
      }
      if (selectItem) return valueExtractor(selectItem);
      return selectItem;
    }, [options, selectedValue, value, valueExtractor]);
    const _label = useMemo(() => {
      const current = options?.find((item) => valueExtractor(item) === _value) ?? value;
      if (!current) return null;
      return labelExtractor(current);
    }, [_value, options, labelExtractor, valueExtractor, value]);
    const onVisibleChange = (open2) => {
      onDropdownVisibleChange?.(open2);
      setIsOpen(open2);
    };
    const _onChange = (selected) => {
      if (!selected?.value) {
        return onChange?.(null);
      }
      if (selected) onChangeValue?.(selected.value || "");
      const original = options?.find(
        (item) => valueExtractor(item) === selected?.value
      );
      onChange?.(original);
    };
    const _renderItem = useCallback(
      ({ item, index, isActive }) => {
        return /* @__PURE__ */ jsx(
          Flex,
          {
            className: "cursor-pointer",
            onClick: () => {
              _onChange({
                label: labelExtractor(item),
                value: valueExtractor(item),
                key: valueExtractor(item)
              });
              onClickItem?.({
                label: labelExtractor(item),
                value: valueExtractor(item),
                key: valueExtractor(item)
              });
              setIsOpen(false);
            },
            children: renderItem ? /* @__PURE__ */ jsx(Flex, { className: "min-h-[32px] w-full flex-1 items-center justify-between", children: renderItem(item, index, isActive) }) : /* @__PURE__ */ jsxs(
              Flex,
              {
                className: twMerge(
                  "h-10 w-full flex-1 items-center justify-between border-r-2 border-r-transparent px-4",
                  "hover:border-r-2 hover:border-r-primary"
                ),
                children: [
                  /* @__PURE__ */ jsx(
                    Text,
                    {
                      weight: isActive ? "bold" : "normal",
                      color: colors.primary_dark_1,
                      lang: lang || i18n.language,
                      className: "max-w-full overflow-hidden text-ellipsis",
                      children: labelExtractor(item)
                    }
                  ),
                  isActive && /* @__PURE__ */ jsx(Icon, { name: "Checkmark", color: colors.positive })
                ]
              }
            )
          },
          valueExtractor(item)
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [labelExtractor, renderItem, valueExtractor]
    );
    const scrollHandler = (event) => {
      const { target } = event;
      if (!target.classList.contains("rc-virtual-list-holder")) {
        setIsOpen(false);
      }
    };
    useEffect(() => {
      if (!disableOutsideScroll) return;
      if (isOpen) {
        document.addEventListener("scroll", scrollHandler, true);
      } else {
        document.removeEventListener("scroll", scrollHandler, true);
      }
    }, [isOpen, disableOutsideScroll]);
    return /* @__PURE__ */ jsxs(
      Flex,
      {
        vertical: labelPosition === "vertical",
        className: twMerge(
          "h-fit w-full",
          !hideErrorMessage && "inputErrorMessageContainer",
          labelPosition === "horizontal" && "items-center gap-3",
          wrapperClassName
        ),
        children: [
          /* @__PURE__ */ jsx(
            SelectLabel,
            {
              ...{ disabled, label, labelExtraNode, required, size, offset: labelOffset }
            }
          ),
          /* @__PURE__ */ jsx(ConfigProvider, { theme: CustomizedAntSelectConfig, children: /* @__PURE__ */ jsxs(Flex, { align: "center", children: [
            addonBefore,
            /* @__PURE__ */ jsx(
              Select$1,
              {
                ref: ref2,
                className: twMerge(
                  `${generateSelectClassNames$1({
                    size,
                    error: !!error?.message || hasError,
                    disabled,
                    isTabFocused
                  })}`,
                  className
                ),
                disabled,
                ...eventHandlers(),
                ...rest,
                showSearch,
                style,
                variant: "borderless",
                placeholder: /* @__PURE__ */ jsx(SelectPlaceholder, { ...{ isHovered, isTabFocused, placeholder, size, disabled } }),
                allowClear: allowClear ? {
                  clearIcon: /* @__PURE__ */ jsx(SelectClearIcon, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ jsx(SelectNotFound, { ...{ error, noContentFoundMessage } }),
                suffixIcon: suffixIcon ?? /* @__PURE__ */ jsx(SelectSuffix, { ...{ isHovered, loading, disabled, isTabFocused, error } }),
                labelInValue: true,
                popupClassName: twMerge("p-0 small-custom-scrollbar z-[1000]", popupClassName),
                value: _value ? { value: _value, label: _label } : void 0,
                onDropdownVisibleChange: onVisibleChange,
                onPopupScroll: (e) => {
                  e.persist();
                  const target = e.target;
                  if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
                    infinite?.hasMore && infinite?.fetchNextPage();
                  }
                },
                loading: false,
                open: disabled ? false : open === void 0 ? isOpen : open,
                onChange: _onChange,
                optionLabelProp: "valueRender",
                dropdownRender: (menu) => {
                  if (loading) {
                    return /* @__PURE__ */ jsx(Flex, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ jsx(Loading, { isLoading: true, size: 24 }) });
                  }
                  const dropdown = /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsx(Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsx(Flex, { vertical: true, className: "relative overflow-auto scroll-smooth", children: menu }),
                    footer && /* @__PURE__ */ jsx(
                      Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-t border-light-7 px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                  if (!infinite) {
                    return dropdown;
                  }
                  return /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsx(Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsx(
                      Flex,
                      {
                        vertical: true,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ jsx(
                          InfiniteLoader,
                          {
                            hasMore: infinite.hasMore,
                            onNextPage: infinite.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: options?.map((item, index) => {
                              const isActive = !!_value && _value === valueExtractor(item);
                              return _renderItem({ index, isActive, item });
                            })
                          }
                        )
                      }
                    ),
                    footer && /* @__PURE__ */ jsx(
                      Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-t border-light-7 px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                },
                filterOption: isLocaleSearch ? (input, option) => {
                  if (!input || !option) return true;
                  const label2 = option.label;
                  return typeof label2 === "string" && label2.toLowerCase().includes(input.toLowerCase());
                } : false,
                children: options?.map((item, index) => {
                  const isActive = !!_value && _value === valueExtractor(item);
                  return /* @__PURE__ */ jsx(
                    Option$1,
                    {
                      label: labelExtractor(item),
                      value: valueExtractor(item),
                      valueRender: renderSelectedItem ? renderSelectedItem(item) : /* @__PURE__ */ jsx(
                        Text,
                        {
                          color: colors.primary_dark_1,
                          lang: lang || i18n.language,
                          children: labelExtractor(item)
                        }
                      ),
                      disabled: disableExtractor(item),
                      children: _renderItem({ index, item, isActive })
                    },
                    valueExtractor(item)
                  );
                })
              }
            ),
            addonAfter
          ] }) }),
          error?.message && !hideErrorMessage && /* @__PURE__ */ jsx(InputErrorMessage, { message: error?.message })
        ]
      }
    );
  }
);
const Tag = ({
  closable,
  onClose,
  imageSrc,
  title,
  disabled,
  className,
  style,
  autoSlice = true,
  sliceLength = 10
}) => {
  const { isHovered, isActive, eventHandlers } = useInteractions();
  const getColor = () => {
    if (disabled) {
      return colors.primary_light_2;
    }
    if (isHovered || isActive) {
      return colors.primary_dark_1;
    }
    return colors.primary;
  };
  const getIconColor = () => {
    if (disabled) {
      return colors.primary_light_2;
    }
    if (isHovered || isActive) {
      return colors.primary_dark_1;
    }
    return colors.primary_light_3;
  };
  const getBorder = () => {
    const baseBorder = `1px solid`;
    if (disabled) {
      return baseBorder + colors.light_6;
    }
    if (isActive || isHovered) {
      return baseBorder + colors.primary_dark_1;
    }
    return baseBorder + colors.primary_light_3;
  };
  const renderTitle = () => {
    if (autoSlice && title?.length > sliceLength) {
      return title.slice(0, sliceLength) + "...";
    } else {
      return title;
    }
  };
  return /* @__PURE__ */ jsx(
    Tooltip$1,
    {
      color: colors.primary_dark_1,
      title: title?.length > 10 ? title : void 0,
      autoAdjustOverflow: true,
      style: { width: "auto" },
      children: /* @__PURE__ */ jsx(
        Flex,
        {
          align: "center",
          justify: "center",
          tabIndex: 0,
          className: twMerge(
            " h-[26px] max-h-[26px] rounded border bg-light-1  px-2 py-1 focus-visible:outline-none",
            disabled && "cursor-not-allowed bg-light-6 ",
            className
          ),
          style: {
            border: getBorder(),
            ...style
          },
          ...eventHandlers(),
          children: /* @__PURE__ */ jsxs(Flex, { align: "center", children: [
            imageSrc && /* @__PURE__ */ jsx(Image, { preview: false, src: imageSrc, className: "me-2 h-4 w-4" }),
            /* @__PURE__ */ jsx(Text, { color: getColor(), className: "cursor-default", children: renderTitle() }),
            closable && /* @__PURE__ */ jsx(
              Icon,
              {
                color: getIconColor(),
                name: "Close",
                size: "xsmall",
                className: "ms-2 cursor-pointer",
                onClick: onClose
              }
            )
          ] })
        }
      )
    }
  );
};
const PlusTreeSelect = ({
  initialValue,
  value: valueProps,
  label,
  beforeLabelIcon,
  renderPrefix,
  treeData,
  placeholder,
  treeDefaultExpandAll,
  warning,
  disabled = false,
  searchable,
  addable,
  multiple,
  onChange,
  onAddButtonClick,
  renderItem,
  className,
  style,
  onTreeExpand,
  onSearch,
  localSearch = true,
  wrapperClassName,
  error,
  required,
  size = "medium",
  labelOffset,
  hasError,
  addonBefore,
  popupClassName,
  header,
  footer,
  onSelect,
  onDeselect,
  treeDataHashMap,
  ...rest
}) => {
  const [items, setitmes] = useState(treeData);
  const [isLoading, setLoading] = useState(true);
  const { t: t2 } = useTranslation();
  const [selectedItems, setselectedItems] = useState(
    initialValue ? initialValue : []
  );
  const value = valueProps ? Array.isArray(valueProps) ? valueProps : [valueProps] : selectedItems;
  const { isTabFocused, eventHandlers } = useInteractions();
  useEffect(() => {
    if (treeData === null) {
      setLoading(true);
      setitmes([]);
    }
    if (treeData?.length === 0) {
      setLoading(false);
      setitmes([]);
    }
    if (treeData?.length > 0) {
      setLoading(false);
      setitmes(treeData);
    }
  }, [treeData]);
  const renderDropDownContent = (menu) => {
    const dropdown = /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
      header && /* @__PURE__ */ jsx(Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
      /* @__PURE__ */ jsx(Flex, { vertical: true, className: "relative overflow-auto scroll-smooth", children: menu }),
      footer && /* @__PURE__ */ jsx(Flex, { gap: 8, flex: 1, align: "center", className: "border-light-7 border-t px-4 py-2", children: footer })
    ] });
    return dropdown;
  };
  const renderTree = (item) => {
    return /* @__PURE__ */ jsxs(
      TreeSelect.TreeNode,
      {
        title: renderItem ? renderItem(item) : /* @__PURE__ */ jsx(Text, { lang: "fa", color: colors.primary_dark_1, children: item.label }),
        value: item.value,
        label: item.label,
        checkable: item.checkable,
        children: [
          item.hasChildren && /* @__PURE__ */ jsx("div", { style: { display: "none" }, children: "blank children for showing switcher icon" }),
          item.children && item.children.map((opt) => renderTree(opt))
        ]
      },
      item.value
    );
  };
  return /* @__PURE__ */ jsxs(Flex, { style, ...eventHandlers(), className: twMerge("flex-col", wrapperClassName), children: [
    label && /* @__PURE__ */ jsx(SelectLabel, { ...{ disabled, label, required, size, offset: labelOffset } }),
    /* @__PURE__ */ jsxs(ConfigProvider$1, { children: [
      addonBefore,
      /* @__PURE__ */ jsx(
        TreeSelect,
        {
          listItemHeight: 50,
          className: twMerge(
            `${generateSelectClassNames$1({
              size,
              error: !!error?.message || hasError,
              disabled,
              isTabFocused
            })}`,
            className,
            "flex-none [&_.ant-select-selector]:!border-none"
          ),
          popupClassName: twMerge(
            "p-0 small-custom-scrollbar [&_.ant-select-selector]:!border-none [&_.ant-select-tree-node-content-wrapper]:!p-0 [&_.ant-select-tree-node-selected]:!bg-light-1 [&_.ant-select-tree-treenode]:!h-10 z-[1000]",
            popupClassName
          ),
          showSearch: false,
          onTreeExpand: (expandedKeys) => {
            onTreeExpand(expandedKeys.map((key) => String(key)));
          },
          treeDefaultExpandAll,
          disabled,
          treeCheckable: multiple,
          showCheckedStrategy: TreeSelect.SHOW_PARENT,
          labelInValue: true,
          value,
          suffixIcon: /* @__PURE__ */ jsx(SelectSuffix, { ...{ disabled, isTabFocused, error } }),
          tagRender: (props) => {
            return value && value?.length < 3 ? /* @__PURE__ */ jsx(Tag, { title: props.label, ...props }) : props.value === value?.[0].value ? /* @__PURE__ */ jsxs("span", { children: [
              value.length,
              " ",
              t2("common.message.itemSelected")
            ] }) : null;
          },
          treeNodeLabelProp: "label",
          notFoundContent: isLoading ? /* @__PURE__ */ jsx(Loading, {}) : /* @__PURE__ */ jsx(SelectNotFound, {}),
          onChange: (value2) => {
            let values = value2;
            if (multiple && treeDataHashMap && treeDataHashMap?.size) {
              values = value2.map((v) => treeDataHashMap?.get(v.value) ?? v);
            }
            setselectedItems(values);
            onChange?.(values);
          },
          onSelect: (value2) => {
            const _value = value2;
            if (multiple && treeDataHashMap && treeDataHashMap?.size) {
              onSelect?.(
                treeDataHashMap.get(_value) || {},
                value2
              );
            } else {
              onSelect?.(
                items.find((item) => item.value === _value) || {},
                value2
              );
            }
          },
          placeholder,
          dropdownRender: renderDropDownContent,
          onInputKeyDown: (event) => {
            if (event.key === "Backspace") {
              event.stopPropagation();
            }
          },
          onDeselect: (value2) => {
            const _value = value2;
            if (multiple && treeDataHashMap && treeDataHashMap?.size) {
              onDeselect?.(
                treeDataHashMap.get(_value) || {},
                value2
              );
            } else {
              onDeselect?.(
                items.find((item) => item.value === _value) || {},
                value2
              );
            }
          },
          ...rest,
          children: items.map((item) => {
            return renderTree(item);
          })
        }
      )
    ] })
  ] });
};
const Select = batch({ Single: SingleSelect, Multiple: MultipleSelect, Tree: PlusTreeSelect });
const SortableList = ({
  move,
  renderItem,
  data,
  wrapperClassName,
  activateDistance = 5,
  dndContextProps,
  sortableContextProps,
  sortableWrapperProps: { className: sortableWrapperClassName, ...restSortableWrapperProps } = {},
  sortableItemProps
}) => {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: activateDistance
      }
    })
  );
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const fromIndex = data.findIndex((el) => el.id === active.id);
    const toIndex = data.findIndex((el) => el.id === over.id);
    if (fromIndex !== -1 && toIndex !== -1) {
      move(fromIndex, toIndex);
    }
  };
  return /* @__PURE__ */ jsx(DndContext, { sensors, onDragEnd: handleDragEnd, ...dndContextProps, children: /* @__PURE__ */ jsx(
    SortableContext,
    {
      items: data,
      strategy: verticalListSortingStrategy,
      ...sortableContextProps,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: twMerge(wrapperClassName, sortableWrapperClassName),
          ...restSortableWrapperProps,
          children: data.map((item, index) => /* @__PURE__ */ jsx(SortableItem, { item, ...sortableItemProps, children: renderItem(item, index) }, item.id))
        }
      )
    }
  ) });
};
const SortableItem = ({ children, item, ...rest }) => {
  const { setNodeRef, attributes, listeners, transform, transition } = useSortable({
    id: item.id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return /* @__PURE__ */ jsx("div", { style, ref: setNodeRef, ...attributes, ...listeners, ...rest, children });
};
const Spliter = ({ children, title, direction = "center", expand = false }) => {
  const [expanded, setExpanded] = useState(expand);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxs(Flex, { className: "items-center w-full", children: [
      /* @__PURE__ */ jsx(
        Flex,
        {
          className: "bg-light-1 border-primary-light-3 p-1 rounded border cursor-pointer",
          onClick: toggleExpand,
          children: /* @__PURE__ */ jsx(Icon, { name: expanded ? "Chevron_Up" : "Chevron_Down" })
        }
      ),
      /* @__PURE__ */ jsx(BorderedTitle, { align: direction, title })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `overflow-hidden transition-max-height duration-300 ease-in-out ${expanded ? "max-h-[1000px]" : "max-h-0"}`,
        children: /* @__PURE__ */ jsx(Flex, { className: "p-2 mt-2", children })
      }
    )
  ] });
};
const NotFoundAddItem = ({ onAddNewItem }) => {
  const { t: t2 } = useTranslation();
  return /* @__PURE__ */ jsx(Flex, { justify: "start", align: "center", gap: 4, className: "p-5", children: /* @__PURE__ */ jsx(Text, { className: "bg-light-2 w-full cursor-pointer p-2", size: 14, onClick: onAddNewItem, children: t2("common.literal.addInputTag") }) });
};
const CustomizedAntSelectTagConfig = {
  components: {
    Select: {
      multipleItemBg: colors.light_1,
      multipleItemBorderColor: colors.primary_light_3,
      multipleItemBorderColorDisabled: colors.primary_light_3,
      multipleItemColorDisabled: colors.negative,
      multipleItemHeight: 30,
      multipleItemHeightLG: 20,
      multipleSelectorBgDisabled: colors.light_1,
      optionActiveBg: colors.light_1,
      optionFontSize: 20,
      optionHeight: 20,
      optionPadding: 0,
      optionSelectedBg: colors.white_ff,
      singleItemHeightLG: 20,
      zIndexPopup: 20,
      colorTextPlaceholder: colors.primary_light_3
    }
  }
};
const generateSelectClassNames = ({
  size,
  error,
  disabled,
  isTabFocused
}) => {
  const className = twMerge(
    `min-w-[200px] flex-1 border rounded border-primary-light-3 bg-white-ff hover:border-primary-light-2 `,
    "[&_.ant-select-selection-item]:!border-none [&_.ant-select-selection-item]:!bg-transparent",
    disabled && "!bg-light-6 !border-light-6",
    error && "border-negative hover:border-negative-dark-1 ",
    isTabFocused && `border-[2px] border-primary-dark-1`
  );
  if (size === "medium") {
    return twMerge("", className);
  }
  return twMerge("h-[34px]", className);
};
const { Option } = Select$1;
const TagInput = forwardRef(
  ({
    error,
    className,
    height = 48,
    underlined,
    value,
    label,
    labelExtraNode = null,
    onDropdownVisibleChange,
    onAddNew,
    open,
    showSearch = true,
    options,
    labelExtractor = (item) => item?.label,
    valueExtractor = (item) => item.value,
    tagExtractor = (item) => item.label,
    disableExtractor = (_item) => false,
    onChange,
    renderItem,
    renderSelectedItem,
    onChangeValue,
    selectedValue,
    selectedValues,
    wrapperClassName,
    disabled = false,
    loading,
    noContentFoundMessage,
    labelPosition = "vertical",
    size = "medium",
    placeholder,
    popupClassName,
    allowClear = true,
    header,
    footer,
    hasError,
    addonBefore,
    addonAfter,
    required,
    infinite,
    hideErrorMessage = false,
    onSearch,
    ...rest
  }, ref2) => {
    const { eventHandlers, isHovered, isTabFocused } = useInteractions();
    const [isOpen, setIsOpen] = useState(false);
    const [newItem, setNewItem] = useState("");
    const _value = useMemo(() => {
      const selectedItems = [];
      if (selectedValue) {
        selectedItems.push(...selectedValue);
      }
      if (selectedValues) {
        selectedItems.push(...selectedValues.map(valueExtractor));
      }
      if (value) {
        selectedItems.push(...value.map(valueExtractor));
      }
      return selectedItems;
    }, [selectedValue, value, selectedValues, valueExtractor]);
    const onVisibleChange = (open2) => {
      onDropdownVisibleChange?.(open2);
      setIsOpen(open2);
    };
    const allOptions = useMemo(() => {
      const optionsMap = /* @__PURE__ */ new Map();
      options?.forEach((option) => {
        optionsMap.set(valueExtractor(option), option);
      });
      selectedValues?.forEach((option) => {
        optionsMap.set(valueExtractor(option), option);
      });
      return Array.from(optionsMap.values());
    }, [options, selectedValues, valueExtractor]);
    const _onChange = (items) => {
      const selectedOptions = allOptions.filter(
        (option) => items.some((item) => item === valueExtractor(option))
      );
      onChange?.(selectedOptions);
      setIsOpen(true);
      setNewItem("");
      selectedOptions && onChangeValue?.(selectedOptions);
    };
    const handleSearch = useCallback(
      (value2) => {
        setNewItem(value2);
        onSearch?.(value2);
      },
      [onSearch]
    );
    const _renderItem = useCallback(
      ({ item, index, isActive }) => {
        const extractedLabel = labelExtractor(item);
        return /* @__PURE__ */ jsx(
          Flex,
          {
            className: "cursor-pointer",
            onClick: () => {
              const convertedValueToMatchOnChange = _value?.map((i) => i?.toString() || "") || [];
              if (convertedValueToMatchOnChange?.some((i) => i === valueExtractor(item))) {
                _onChange(convertedValueToMatchOnChange.filter((i) => i !== valueExtractor(item)));
              } else {
                _onChange([...convertedValueToMatchOnChange, valueExtractor(item)]);
              }
            },
            children: renderItem ? /* @__PURE__ */ jsxs(Flex, { className: "min-h-[32px] w-full flex-1 items-center px-2", gap: 8, children: [
              /* @__PURE__ */ jsx(Checkbox, { checked: isActive }),
              renderItem(item, index, isActive)
            ] }) : /* @__PURE__ */ jsxs(Flex, { gap: 8, className: twMerge("h-10 w-full flex-1 items-center px-2"), children: [
              /* @__PURE__ */ jsx(Checkbox, { checked: isActive }),
              typeof extractedLabel === "string" ? /* @__PURE__ */ jsx(Text, { children: extractedLabel }) : extractedLabel
            ] })
          }
        );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [_value, renderItem]
    );
    const onAddNewItem = () => {
      const isNew = options?.filter((option) => labelExtractor(option) === newItem);
      if (isNew?.length === 0 && newItem !== "") {
        setIsOpen(true);
        onAddNew?.(newItem);
        setNewItem("");
      }
    };
    const tagRender = ({ value: value2, closable, onClose }) => {
      const item = selectedValues ? selectedValues?.find((item2) => valueExtractor(item2) === value2) : options?.find((item2) => valueExtractor(item2) === value2);
      const selectedLabel = item && labelExtractor(item);
      return /* @__PURE__ */ jsx(
        Tag,
        {
          closable,
          onClose,
          title: selectedLabel?.toString() || "",
          style: { margin: 5 }
        },
        value2
      );
    };
    return /* @__PURE__ */ jsxs(
      Flex,
      {
        vertical: labelPosition === "vertical",
        className: twMerge(
          "h-fit w-full",
          !hideErrorMessage && "inputErrorMessageContainer",
          labelPosition === "horizontal" && "items-center gap-3"
        ),
        children: [
          /* @__PURE__ */ jsx(SelectLabel, { ...{ disabled, label, labelExtraNode, required, size } }),
          /* @__PURE__ */ jsx(ConfigProvider, { theme: CustomizedAntSelectTagConfig, children: /* @__PURE__ */ jsxs(Flex, { align: "center", children: [
            addonBefore,
            /* @__PURE__ */ jsx(
              Select$1,
              {
                ...rest,
                mode: "multiple",
                style: { minHeight: height },
                menuItemSelectedIcon: null,
                ref: ref2,
                className: twMerge(
                  `${generateSelectClassNames({
                    size,
                    error: !!error?.message || hasError,
                    disabled,
                    isTabFocused
                  })}`,
                  className
                ),
                onSearch: handleSearch,
                disabled,
                filterOption: true,
                ...eventHandlers(),
                showSearch,
                bordered: false,
                tagRender,
                placeholder: /* @__PURE__ */ jsx(SelectPlaceholder, { ...{ isHovered, isTabFocused, placeholder, size, disabled } }),
                allowClear: allowClear ? {
                  clearIcon: /* @__PURE__ */ jsx(SelectClearIcon, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ jsx(NotFoundAddItem, { onAddNewItem }),
                suffixIcon: /* @__PURE__ */ jsx(SelectSuffix, { ...{ isHovered, loading, disabled, isTabFocused, error } }),
                popupClassName: twMerge("p-0 small-custom-scrollbar z-[1000]", popupClassName),
                value: _value,
                onDropdownVisibleChange: onVisibleChange,
                loading: false,
                searchValue: newItem,
                open: disabled ? false : open === void 0 ? isOpen : open,
                onChange: _onChange,
                optionFilterProp: "label",
                dropdownAlign: { offset: [0, 6] },
                onInputKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === "Tab") {
                    e.preventDefault();
                    onAddNewItem();
                  }
                },
                onPopupScroll: (e) => {
                  e.persist();
                  const target = e.target;
                  if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
                    infinite?.hasMore && infinite?.fetchNextPage();
                  }
                },
                dropdownRender: (menu) => {
                  if (loading) {
                    return /* @__PURE__ */ jsx(Flex, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ jsx(Loading, { isLoading: true, size: 24 }) });
                  }
                  const dropdown = /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsx(Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsx(Flex, { vertical: true, className: "relative overflow-auto", children: menu }),
                    footer && /* @__PURE__ */ jsx(
                      Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                  if (!infinite) {
                    return dropdown;
                  }
                  return /* @__PURE__ */ jsxs(Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsx(Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsx(
                      Flex,
                      {
                        vertical: true,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ jsx(
                          InfiniteLoader,
                          {
                            hasMore: infinite.hasMore,
                            onNextPage: infinite.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: options?.map((item, index) => {
                              const isActive = !!_value?.find((i) => i === valueExtractor(item));
                              return _renderItem({ index, item, isActive });
                            })
                          }
                        )
                      }
                    ),
                    footer && /* @__PURE__ */ jsx(
                      Flex,
                      {
                        gap: 8,
                        flex: 1,
                        align: "center",
                        className: "border-light-7 border-t px-4 py-2",
                        children: footer
                      }
                    )
                  ] });
                },
                children: options?.map((item, index) => {
                  const isActive = !!_value?.find((i) => i === valueExtractor(item));
                  return /* @__PURE__ */ jsx(
                    Option,
                    {
                      label: labelExtractor(item),
                      value: valueExtractor(item),
                      disabled: disableExtractor(item),
                      children: _renderItem({ index, item, isActive })
                    },
                    valueExtractor(item)
                  );
                })
              }
            ),
            addonAfter
          ] }) }),
          !hideErrorMessage && error?.message && /* @__PURE__ */ jsx(InputErrorMessage, { message: error?.message })
        ]
      }
    );
  }
);
const timePickerTheme = {
  components: {
    DatePicker: {
      colorBorder: colors.primary_light_3,
      colorTextPlaceholder: colors.primary_light_3
    }
  }
};
const InputTimePicker = ({ className, error, ...rest }) => {
  return /* @__PURE__ */ jsx(ConfigProvider, { theme: timePickerTheme, children: /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      TimePicker,
      {
        size: "large",
        suffixIcon: /* @__PURE__ */ jsx(Icon, { name: "time", color: colors.primary }),
        className: twMerge(
          "w-full text-[14px] font-medium text-primary-dark-1 !shadow-none outline-none hover:border-primary-light-2",
          error?.message && "border-negative",
          className
        ),
        needConfirm: false,
        showNow: false,
        popupStyle: { scrollbarWidth: "thin", scrollbarColor: colors.primary },
        popupClassName: "[&_.ant-picker-content]:flex-row-reverse ",
        ...rest
      }
    ),
    /* @__PURE__ */ jsx(InputErrorMessage, { message: getErrorMessage(error) })
  ] }) });
};
const StatusBox = ({ active }) => {
  return /* @__PURE__ */ jsx(
    Icon,
    {
      name: active ? "Checkmark_Circle" : "Close_Circle_fill",
      color: colors[active ? "positive" : "negative"]
    }
  );
};
const TitleBox = ({ children, title }) => {
  return /* @__PURE__ */ jsxs(Flex, { vertical: false, gap: 24, align: "flex-start", children: [
    /* @__PURE__ */ jsx(Flex, { flex: 1, className: "bg-light-1 rounded px-4 py-2", children: typeof title === "string" ? /* @__PURE__ */ jsx(Text, { weight: "medium", children: title }) : title }),
    /* @__PURE__ */ jsx(Flex, { flex: 3, className: "bg-light-1 rounded px-4 py-2", children: typeof children === "string" ? /* @__PURE__ */ jsx(Text, { size: 16, style: { textAlign: "justify" }, children }) : children })
  ] });
};
const Box = batch({ Title: TitleBox, Status: StatusBox });
const TreeSearchBar = ({ onSearch, ...props }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(onSearch, 500);
  return /* @__PURE__ */ jsx(
    Input.Search,
    {
      value: searchTerm,
      onChange: (e) => {
        setSearchTerm(e.target.value);
        debouncedSearch(e.target.value);
      },
      placeholder: t("common.literal.search") ?? "Search",
      ...props
    }
  );
};
const renderTreeNodes = (data, renderIcon, nodeClassName, renderRightIcons, defaultIcon) => {
  return /* @__PURE__ */ jsx(Fragment$1, { children: data.map((node) => /* @__PURE__ */ jsx(
    Tree$1.TreeNode,
    {
      isLeaf: !node.hasChildren,
      data: {
        title: node.label,
        key: node.value,
        children: node.children?.map((child) => ({
          title: child.label,
          key: child.value,
          children: []
        })) || []
      },
      className: twMerge("flex items-center justify-between", nodeClassName),
      title: /* @__PURE__ */ jsxs(Flex, { className: "w-full items-center justify-between p-1", children: [
        /* @__PURE__ */ jsxs(Flex, { className: "items-center gap-2", children: [
          node.icon ? /* @__PURE__ */ jsx(Icon, { size: 20, name: node.icon }) : renderIcon ? typeof renderIcon === "function" ? renderIcon(node) : renderIcon : defaultIcon ? /* @__PURE__ */ jsx(Icon, { size: 20, name: defaultIcon }) : /* @__PURE__ */ jsx(Icon, { size: 20, name: "folder_fill" }),
          /* @__PURE__ */ jsx(Flex, { children: /* @__PURE__ */ jsx(Text, { className: " truncate", children: node.label }) })
        ] }),
        /* @__PURE__ */ jsx(Flex, { className: "items-center gap-1", children: renderRightIcons?.(node) })
      ] }),
      children: node.children?.length ? renderTreeNodes(
        node.children,
        renderIcon,
        nodeClassName,
        renderRightIcons,
        defaultIcon
      ) : null
    },
    node.value
  )) });
};
const Tree = ({
  switcherIconName,
  treeData,
  isLoading,
  className,
  nodeClassName,
  renderIcon,
  renderRightIcons,
  isExpandable,
  titleHeader,
  titleIcon,
  expandedWidth = 350,
  collapsedWidth = 48,
  onDrawerToggle,
  infiniteProps,
  onSearch,
  hasSearch = false,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { t: t2 } = useTranslation();
  const handleDrawerToggle = () => {
    setIsExpanded((prev) => {
      const newState = !prev;
      onDrawerToggle?.(newState);
      return newState;
    });
  };
  const content = /* @__PURE__ */ jsx(
    Tree$1,
    {
      ...rest,
      "data-testid": "tree-container",
      switcherIcon: /* @__PURE__ */ jsx(Icon, { name: switcherIconName || "Chevron_Down" }),
      className: twMerge(
        className,
        "tiny-custom-scrollbar w-full overflow-y-auto overflow-x-hidden"
      ),
      children: renderTreeNodes(treeData, renderIcon, nodeClassName, renderRightIcons, titleIcon)
    }
  );
  return /* @__PURE__ */ jsxs(
    Flex,
    {
      vertical: true,
      className: twMerge(
        "h-full w-[350px] max-w-[30px] bg-light-1 transition-all",
        "[&_.ant-tree_.ant-tree-node-content-wrapper:hover]:bg-primary-light-2/20",
        "[&_.ant-tree_.ant-tree-node-content-wrapper.ant-tree-node-selected]:bg-transparent"
      ),
      style: {
        width: isExpandable && !isExpanded ? `${collapsedWidth}px` : `${expandedWidth}px`,
        minWidth: isExpandable && !isExpanded ? `${collapsedWidth}px` : `${expandedWidth}px`,
        maxWidth: isExpandable && !isExpanded ? `${collapsedWidth}px` : `${expandedWidth}px`
      },
      children: [
        isExpandable && /* @__PURE__ */ jsxs(
          Flex,
          {
            gap: 4,
            className: twMerge(
              "relative border-light-7 pb-2.5 pl-0 pr-3 pt-3",
              isExpanded && "border"
            ),
            children: [
              /* @__PURE__ */ jsxs(Flex, { gap: 8, ...!isExpanded ? { vertical: true } : {}, children: [
                /* @__PURE__ */ jsx(Icon, { color: colors.primary_light_1, name: titleIcon }),
                /* @__PURE__ */ jsx(
                  Text,
                  {
                    className: twMerge(!isExpanded && "rotate-180"),
                    style: !isExpanded ? { writingMode: "vertical-rl" } : {},
                    weight: "bold",
                    color: colors.primary_light_1,
                    children: titleHeader
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                IconButton,
                {
                  color: colors.primary_light_1,
                  iconName: !isExpanded ? "Chevron_Right" : "Chevron_Left",
                  onClick: handleDrawerToggle,
                  "data-testid": "drawer-toggle",
                  className: "absolute left-[-10px] z-40 w-5 cursor-pointer items-center justify-center rounded-sm border border-light-7 bg-white-ff p-2"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(Render, { when: isExpanded && hasSearch && !!onSearch, children: /* @__PURE__ */ jsx(Flex, { className: " border border-primary-light-3/60 bg-white-ff p-2", children: /* @__PURE__ */ jsx(TreeSearchBar, { onSearch }) }) }),
        isExpanded && /* @__PURE__ */ jsx("div", { className: "tiny-custom-scrollbar flex h-full flex-col overflow-y-auto bg-white-ff", children: isLoading ? /* @__PURE__ */ jsx(Spin, { size: "large" }) : treeData.length === 0 ? /* @__PURE__ */ jsx(Text, { size: 14, className: "text-gray-500", children: t2("common.error.noItem") }) : infiniteProps ? /* @__PURE__ */ jsx(
          "div",
          {
            id: "tree-scroll-container",
            className: " tiny-custom-scrollbar relative overflow-y-auto bg-white-ff",
            children: /* @__PURE__ */ jsx(
              InfiniteLoader,
              {
                hasMore: infiniteProps?.hasMore,
                onNextPage: infiniteProps?.fetchNextPage,
                scrollableNodeId: "tree-scroll-container",
                children: content
              }
            )
          }
        ) : content })
      ]
    }
  );
};
var type;
var hasRequiredType;
function requireType() {
  if (hasRequiredType) return type;
  hasRequiredType = 1;
  type = TypeError;
  return type;
}
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var objectInspect;
var hasRequiredObjectInspect;
function requireObjectInspect() {
  if (hasRequiredObjectInspect) return objectInspect;
  hasRequiredObjectInspect = 1;
  var hasMap = typeof Map === "function" && Map.prototype;
  var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
  var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
  var mapForEach = hasMap && Map.prototype.forEach;
  var hasSet = typeof Set === "function" && Set.prototype;
  var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
  var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
  var setForEach = hasSet && Set.prototype.forEach;
  var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
  var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
  var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
  var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
  var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
  var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
  var booleanValueOf = Boolean.prototype.valueOf;
  var objectToString = Object.prototype.toString;
  var functionToString = Function.prototype.toString;
  var $match = String.prototype.match;
  var $slice = String.prototype.slice;
  var $replace = String.prototype.replace;
  var $toUpperCase = String.prototype.toUpperCase;
  var $toLowerCase = String.prototype.toLowerCase;
  var $test = RegExp.prototype.test;
  var $concat = Array.prototype.concat;
  var $join = Array.prototype.join;
  var $arrSlice = Array.prototype.slice;
  var $floor = Math.floor;
  var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
  var gOPS = Object.getOwnPropertySymbols;
  var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
  var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
  var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
    return O.__proto__;
  } : null);
  function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
      return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
      var int = num < 0 ? -$floor(-num) : $floor(num);
      if (int !== num) {
        var intStr = String(int);
        var dec = $slice.call(str, intStr.length + 1);
        return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return $replace.call(str, sepRegex, "$&_");
  }
  var utilInspect = require$$0;
  var inspectCustom = utilInspect.custom;
  var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
  var quotes = {
    __proto__: null,
    "double": '"',
    single: "'"
  };
  var quoteREs = {
    __proto__: null,
    "double": /(["\\])/g,
    single: /(['\\])/g
  };
  objectInspect = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    }
    if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") {
      return "undefined";
    }
    if (obj === null) {
      return "null";
    }
    if (typeof obj === "boolean") {
      return obj ? "true" : "false";
    }
    if (typeof obj === "string") {
      return inspectString(obj, opts);
    }
    if (typeof obj === "number") {
      if (obj === 0) {
        return Infinity / obj > 0 ? "0" : "-0";
      }
      var str = String(obj);
      return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
      var bigIntStr = String(obj) + "n";
      return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") {
      depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
      return isArray(obj) ? "[Array]" : "[Object]";
    }
    var indent = getIndent(opts, depth);
    if (typeof seen === "undefined") {
      seen = [];
    } else if (indexOf(seen, obj) >= 0) {
      return "[Circular]";
    }
    function inspect(value, from, noIndent) {
      if (from) {
        seen = $arrSlice.call(seen);
        seen.push(from);
      }
      if (noIndent) {
        var newOpts = {
          depth: opts.depth
        };
        if (has(opts, "quoteStyle")) {
          newOpts.quoteStyle = opts.quoteStyle;
        }
        return inspect_(value, newOpts, depth + 1, seen);
      }
      return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === "function" && !isRegExp(obj)) {
      var name = nameOf(obj);
      var keys = arrObjKeys(obj, inspect);
      return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
    }
    if (isSymbol(obj)) {
      var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
      return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
      var s = "<" + $toLowerCase.call(String(obj.nodeName));
      var attrs = obj.attributes || [];
      for (var i = 0; i < attrs.length; i++) {
        s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
      }
      s += ">";
      if (obj.childNodes && obj.childNodes.length) {
        s += "...";
      }
      s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
      return s;
    }
    if (isArray(obj)) {
      if (obj.length === 0) {
        return "[]";
      }
      var xs = arrObjKeys(obj, inspect);
      if (indent && !singleLineValues(xs)) {
        return "[" + indentedJoin(xs, indent) + "]";
      }
      return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
      var parts = arrObjKeys(obj, inspect);
      if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
        return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
      }
      if (parts.length === 0) {
        return "[" + String(obj) + "]";
      }
      return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
      if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
        return utilInspect(obj, { depth: maxDepth - depth });
      } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
        return obj.inspect();
      }
    }
    if (isMap(obj)) {
      var mapParts = [];
      if (mapForEach) {
        mapForEach.call(obj, function(value, key) {
          mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
      }
      return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
      var setParts = [];
      if (setForEach) {
        setForEach.call(obj, function(value) {
          setParts.push(inspect(value, obj));
        });
      }
      return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
      return weakCollectionOf("WeakMap");
    }
    if (isWeakSet(obj)) {
      return weakCollectionOf("WeakSet");
    }
    if (isWeakRef(obj)) {
      return weakCollectionOf("WeakRef");
    }
    if (isNumber(obj)) {
      return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
      return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
      return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
      return markBoxed(inspect(String(obj)));
    }
    if (typeof window !== "undefined" && obj === window) {
      return "{ [object Window] }";
    }
    if (typeof globalThis !== "undefined" && obj === globalThis || typeof commonjsGlobal !== "undefined" && obj === commonjsGlobal) {
      return "{ [object globalThis] }";
    }
    if (!isDate(obj) && !isRegExp(obj)) {
      var ys = arrObjKeys(obj, inspect);
      var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
      var protoTag = obj instanceof Object ? "" : "null prototype";
      var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
      var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
      var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
      if (ys.length === 0) {
        return tag + "{}";
      }
      if (indent) {
        return tag + "{" + indentedJoin(ys, indent) + "}";
      }
      return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
  };
  function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
  }
  function quote(s) {
    return $replace.call(String(s), /"/g, "&quot;");
  }
  function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
  }
  function isArray(obj) {
    return toStr(obj) === "[object Array]" && canTrustToString(obj);
  }
  function isDate(obj) {
    return toStr(obj) === "[object Date]" && canTrustToString(obj);
  }
  function isRegExp(obj) {
    return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
  }
  function isError(obj) {
    return toStr(obj) === "[object Error]" && canTrustToString(obj);
  }
  function isString(obj) {
    return toStr(obj) === "[object String]" && canTrustToString(obj);
  }
  function isNumber(obj) {
    return toStr(obj) === "[object Number]" && canTrustToString(obj);
  }
  function isBoolean(obj) {
    return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
  }
  function isSymbol(obj) {
    if (hasShammedSymbols) {
      return obj && typeof obj === "object" && obj instanceof Symbol;
    }
    if (typeof obj === "symbol") {
      return true;
    }
    if (!obj || typeof obj !== "object" || !symToString) {
      return false;
    }
    try {
      symToString.call(obj);
      return true;
    } catch (e) {
    }
    return false;
  }
  function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) {
      return false;
    }
    try {
      bigIntValueOf.call(obj);
      return true;
    } catch (e) {
    }
    return false;
  }
  var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
  };
  function has(obj, key) {
    return hasOwn.call(obj, key);
  }
  function toStr(obj) {
    return objectToString.call(obj);
  }
  function nameOf(f2) {
    if (f2.name) {
      return f2.name;
    }
    var m = $match.call(functionToString.call(f2), /^function\s*([\w$]+)/);
    if (m) {
      return m[1];
    }
    return null;
  }
  function indexOf(xs, x) {
    if (xs.indexOf) {
      return xs.indexOf(x);
    }
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  }
  function isMap(x) {
    if (!mapSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      mapSize.call(x);
      try {
        setSize.call(x);
      } catch (s) {
        return true;
      }
      return x instanceof Map;
    } catch (e) {
    }
    return false;
  }
  function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakMapHas.call(x, weakMapHas);
      try {
        weakSetHas.call(x, weakSetHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakMap;
    } catch (e) {
    }
    return false;
  }
  function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakRefDeref.call(x);
      return true;
    } catch (e) {
    }
    return false;
  }
  function isSet(x) {
    if (!setSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      setSize.call(x);
      try {
        mapSize.call(x);
      } catch (m) {
        return true;
      }
      return x instanceof Set;
    } catch (e) {
    }
    return false;
  }
  function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakSetHas.call(x, weakSetHas);
      try {
        weakMapHas.call(x, weakMapHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakSet;
    } catch (e) {
    }
    return false;
  }
  function isElement(x) {
    if (!x || typeof x !== "object") {
      return false;
    }
    if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
      return true;
    }
    return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
  }
  function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
      var remaining = str.length - opts.maxStringLength;
      var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
      return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || "single"];
    quoteRE.lastIndex = 0;
    var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, "single", opts);
  }
  function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[n];
    if (x) {
      return "\\" + x;
    }
    return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
  }
  function markBoxed(str) {
    return "Object(" + str + ")";
  }
  function weakCollectionOf(type2) {
    return type2 + " { ? }";
  }
  function collectionOf(type2, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type2 + " (" + size + ") {" + joinedEntries + "}";
  }
  function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
      if (indexOf(xs[i], "\n") >= 0) {
        return false;
      }
    }
    return true;
  }
  function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") {
      baseIndent = "	";
    } else if (typeof opts.indent === "number" && opts.indent > 0) {
      baseIndent = $join.call(Array(opts.indent + 1), " ");
    } else {
      return null;
    }
    return {
      base: baseIndent,
      prev: $join.call(Array(depth + 1), baseIndent)
    };
  }
  function indentedJoin(xs, indent) {
    if (xs.length === 0) {
      return "";
    }
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
  }
  function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
      xs.length = obj.length;
      for (var i = 0; i < obj.length; i++) {
        xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
      }
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
      symMap = {};
      for (var k = 0; k < syms.length; k++) {
        symMap["$" + syms[k]] = syms[k];
      }
    }
    for (var key in obj) {
      if (!has(obj, key)) {
        continue;
      }
      if (isArr && String(Number(key)) === key && key < obj.length) {
        continue;
      }
      if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
        continue;
      } else if ($test.call(/[^\w$]/, key)) {
        xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
      } else {
        xs.push(key + ": " + inspect(obj[key], obj));
      }
    }
    if (typeof gOPS === "function") {
      for (var j = 0; j < syms.length; j++) {
        if (isEnumerable.call(obj, syms[j])) {
          xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
        }
      }
    }
    return xs;
  }
  return objectInspect;
}
var sideChannelList;
var hasRequiredSideChannelList;
function requireSideChannelList() {
  if (hasRequiredSideChannelList) return sideChannelList;
  hasRequiredSideChannelList = 1;
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var listGetNode = function(list, key, isDelete) {
    var prev = list;
    var curr;
    for (; (curr = prev.next) != null; prev = curr) {
      if (curr.key === key) {
        prev.next = curr.next;
        if (!isDelete) {
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list.next;
          list.next = curr;
        }
        return curr;
      }
    }
  };
  var listGet = function(objects, key) {
    if (!objects) {
      return void 0;
    }
    var node = listGetNode(objects, key);
    return node && node.value;
  };
  var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
      node.value = value;
    } else {
      objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
      {
        // eslint-disable-line no-param-reassign, no-extra-parens
        key,
        next: objects.next,
        value
      };
    }
  };
  var listHas = function(objects, key) {
    if (!objects) {
      return false;
    }
    return !!listGetNode(objects, key);
  };
  var listDelete = function(objects, key) {
    if (objects) {
      return listGetNode(objects, key, true);
    }
  };
  sideChannelList = function getSideChannelList() {
    var $o;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        var root = $o && $o.next;
        var deletedNode = listDelete($o, key);
        if (deletedNode && root && root === deletedNode) {
          $o = void 0;
        }
        return !!deletedNode;
      },
      get: function(key) {
        return listGet($o, key);
      },
      has: function(key) {
        return listHas($o, key);
      },
      set: function(key, value) {
        if (!$o) {
          $o = {
            next: void 0
          };
        }
        listSet(
          /** @type {NonNullable<typeof $o>} */
          $o,
          key,
          value
        );
      }
    };
    return channel;
  };
  return sideChannelList;
}
var esObjectAtoms;
var hasRequiredEsObjectAtoms;
function requireEsObjectAtoms() {
  if (hasRequiredEsObjectAtoms) return esObjectAtoms;
  hasRequiredEsObjectAtoms = 1;
  esObjectAtoms = Object;
  return esObjectAtoms;
}
var esErrors;
var hasRequiredEsErrors;
function requireEsErrors() {
  if (hasRequiredEsErrors) return esErrors;
  hasRequiredEsErrors = 1;
  esErrors = Error;
  return esErrors;
}
var _eval;
var hasRequired_eval;
function require_eval() {
  if (hasRequired_eval) return _eval;
  hasRequired_eval = 1;
  _eval = EvalError;
  return _eval;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  range = RangeError;
  return range;
}
var ref;
var hasRequiredRef;
function requireRef() {
  if (hasRequiredRef) return ref;
  hasRequiredRef = 1;
  ref = ReferenceError;
  return ref;
}
var syntax;
var hasRequiredSyntax;
function requireSyntax() {
  if (hasRequiredSyntax) return syntax;
  hasRequiredSyntax = 1;
  syntax = SyntaxError;
  return syntax;
}
var uri;
var hasRequiredUri;
function requireUri() {
  if (hasRequiredUri) return uri;
  hasRequiredUri = 1;
  uri = URIError;
  return uri;
}
var abs;
var hasRequiredAbs;
function requireAbs() {
  if (hasRequiredAbs) return abs;
  hasRequiredAbs = 1;
  abs = Math.abs;
  return abs;
}
var floor;
var hasRequiredFloor;
function requireFloor() {
  if (hasRequiredFloor) return floor;
  hasRequiredFloor = 1;
  floor = Math.floor;
  return floor;
}
var max;
var hasRequiredMax;
function requireMax() {
  if (hasRequiredMax) return max;
  hasRequiredMax = 1;
  max = Math.max;
  return max;
}
var min;
var hasRequiredMin;
function requireMin() {
  if (hasRequiredMin) return min;
  hasRequiredMin = 1;
  min = Math.min;
  return min;
}
var pow;
var hasRequiredPow;
function requirePow() {
  if (hasRequiredPow) return pow;
  hasRequiredPow = 1;
  pow = Math.pow;
  return pow;
}
var round;
var hasRequiredRound;
function requireRound() {
  if (hasRequiredRound) return round;
  hasRequiredRound = 1;
  round = Math.round;
  return round;
}
var _isNaN;
var hasRequired_isNaN;
function require_isNaN() {
  if (hasRequired_isNaN) return _isNaN;
  hasRequired_isNaN = 1;
  _isNaN = Number.isNaN || function isNaN2(a2) {
    return a2 !== a2;
  };
  return _isNaN;
}
var sign;
var hasRequiredSign;
function requireSign() {
  if (hasRequiredSign) return sign;
  hasRequiredSign = 1;
  var $isNaN = /* @__PURE__ */ require_isNaN();
  sign = function sign2(number) {
    if ($isNaN(number) || number === 0) {
      return number;
    }
    return number < 0 ? -1 : 1;
  };
  return sign;
}
var gOPD;
var hasRequiredGOPD;
function requireGOPD() {
  if (hasRequiredGOPD) return gOPD;
  hasRequiredGOPD = 1;
  gOPD = Object.getOwnPropertyDescriptor;
  return gOPD;
}
var gopd;
var hasRequiredGopd;
function requireGopd() {
  if (hasRequiredGopd) return gopd;
  hasRequiredGopd = 1;
  var $gOPD = /* @__PURE__ */ requireGOPD();
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e) {
      $gOPD = null;
    }
  }
  gopd = $gOPD;
  return gopd;
}
var esDefineProperty;
var hasRequiredEsDefineProperty;
function requireEsDefineProperty() {
  if (hasRequiredEsDefineProperty) return esDefineProperty;
  hasRequiredEsDefineProperty = 1;
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = false;
    }
  }
  esDefineProperty = $defineProperty;
  return esDefineProperty;
}
var shams;
var hasRequiredShams;
function requireShams() {
  if (hasRequiredShams) return shams;
  hasRequiredShams = 1;
  shams = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = /* @__PURE__ */ Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (var _ in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(obj, sym)
      );
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  return shams;
}
var hasSymbols;
var hasRequiredHasSymbols;
function requireHasSymbols() {
  if (hasRequiredHasSymbols) return hasSymbols;
  hasRequiredHasSymbols = 1;
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = requireShams();
  hasSymbols = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof /* @__PURE__ */ Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  return hasSymbols;
}
var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;
function requireReflect_getPrototypeOf() {
  if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
  hasRequiredReflect_getPrototypeOf = 1;
  Reflect_getPrototypeOf = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  return Reflect_getPrototypeOf;
}
var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;
function requireObject_getPrototypeOf() {
  if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
  hasRequiredObject_getPrototypeOf = 1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  Object_getPrototypeOf = $Object.getPrototypeOf || null;
  return Object_getPrototypeOf;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation) return implementation;
  hasRequiredImplementation = 1;
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr = Object.prototype.toString;
  var max2 = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty2(a2, b) {
    var arr = [];
    for (var i = 0; i < a2.length; i += 1) {
      arr[i] = a2[i];
    }
    for (var j = 0; j < b.length; j += 1) {
      arr[j + a2.length] = b[j];
    }
    return arr;
  };
  var slicy = function slicy2(arrLike, offset) {
    var arr = [];
    for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
      arr[j] = arrLike[i];
    }
    return arr;
  };
  var joiny = function(arr, joiner) {
    var str = "";
    for (var i = 0; i < arr.length; i += 1) {
      str += arr[i];
      if (i + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  implementation = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(
          this,
          concatty(args, arguments)
        );
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(
        that,
        concatty(args, arguments)
      );
    };
    var boundLength = max2(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs[i] = "$" + i;
    }
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  return implementation;
}
var functionBind;
var hasRequiredFunctionBind;
function requireFunctionBind() {
  if (hasRequiredFunctionBind) return functionBind;
  hasRequiredFunctionBind = 1;
  var implementation2 = requireImplementation();
  functionBind = Function.prototype.bind || implementation2;
  return functionBind;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  functionCall = Function.prototype.call;
  return functionCall;
}
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply) return functionApply;
  hasRequiredFunctionApply = 1;
  functionApply = Function.prototype.apply;
  return functionApply;
}
var reflectApply;
var hasRequiredReflectApply;
function requireReflectApply() {
  if (hasRequiredReflectApply) return reflectApply;
  hasRequiredReflectApply = 1;
  reflectApply = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  return reflectApply;
}
var actualApply;
var hasRequiredActualApply;
function requireActualApply() {
  if (hasRequiredActualApply) return actualApply;
  hasRequiredActualApply = 1;
  var bind = requireFunctionBind();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var $reflectApply = requireReflectApply();
  actualApply = $reflectApply || bind.call($call, $apply);
  return actualApply;
}
var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;
function requireCallBindApplyHelpers() {
  if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
  hasRequiredCallBindApplyHelpers = 1;
  var bind = requireFunctionBind();
  var $TypeError = /* @__PURE__ */ requireType();
  var $call = requireFunctionCall();
  var $actualApply = requireActualApply();
  callBindApplyHelpers = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== "function") {
      throw new $TypeError("a function is required");
    }
    return $actualApply(bind, $call, args);
  };
  return callBindApplyHelpers;
}
var get;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet) return get;
  hasRequiredGet = 1;
  var callBind = requireCallBindApplyHelpers();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var hasProtoAccessor;
  try {
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (e) {
    if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
      throw e;
    }
  }
  var desc = !!hasProtoAccessor && gOPD2 && gOPD2(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  );
  var $Object = Object;
  var $getPrototypeOf = $Object.getPrototypeOf;
  get = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
    /** @type {import('./get')} */
    function getDunder(value) {
      return $getPrototypeOf(value == null ? value : $Object(value));
    }
  ) : false;
  return get;
}
var getProto;
var hasRequiredGetProto;
function requireGetProto() {
  if (hasRequiredGetProto) return getProto;
  hasRequiredGetProto = 1;
  var reflectGetProto = requireReflect_getPrototypeOf();
  var originalGetProto = requireObject_getPrototypeOf();
  var getDunderProto = /* @__PURE__ */ requireGet();
  getProto = reflectGetProto ? function getProto2(O) {
    return reflectGetProto(O);
  } : originalGetProto ? function getProto2(O) {
    if (!O || typeof O !== "object" && typeof O !== "function") {
      throw new TypeError("getProto: not an object");
    }
    return originalGetProto(O);
  } : getDunderProto ? function getProto2(O) {
    return getDunderProto(O);
  } : null;
  return getProto;
}
var hasown;
var hasRequiredHasown;
function requireHasown() {
  if (hasRequiredHasown) return hasown;
  hasRequiredHasown = 1;
  var call2 = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind = requireFunctionBind();
  hasown = bind.call(call2, $hasOwn);
  return hasown;
}
var getIntrinsic;
var hasRequiredGetIntrinsic;
function requireGetIntrinsic() {
  if (hasRequiredGetIntrinsic) return getIntrinsic;
  hasRequiredGetIntrinsic = 1;
  var undefined$1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  var $Error = /* @__PURE__ */ requireEsErrors();
  var $EvalError = /* @__PURE__ */ require_eval();
  var $RangeError = /* @__PURE__ */ requireRange();
  var $ReferenceError = /* @__PURE__ */ requireRef();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $TypeError = /* @__PURE__ */ requireType();
  var $URIError = /* @__PURE__ */ requireUri();
  var abs2 = /* @__PURE__ */ requireAbs();
  var floor2 = /* @__PURE__ */ requireFloor();
  var max2 = /* @__PURE__ */ requireMax();
  var min2 = /* @__PURE__ */ requireMin();
  var pow2 = /* @__PURE__ */ requirePow();
  var round2 = /* @__PURE__ */ requireRound();
  var sign2 = /* @__PURE__ */ requireSign();
  var $Function = Function;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {
    }
  };
  var $gOPD = /* @__PURE__ */ requireGopd();
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? (function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  })() : throwTypeError;
  var hasSymbols2 = requireHasSymbols()();
  var getProto2 = requireGetProto();
  var $ObjectGPO = requireObject_getPrototypeOf();
  var $ReflectGPO = requireReflect_getPrototypeOf();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" || !getProto2 ? undefined$1 : getProto2(Uint8Array);
  var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": $EvalError,
    "%Float16Array%": typeof Float16Array === "undefined" ? undefined$1 : Float16Array,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(getProto2([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": $Object,
    "%Object.getOwnPropertyDescriptor%": $gOPD,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
    "%Function.prototype.call%": $call,
    "%Function.prototype.apply%": $apply,
    "%Object.defineProperty%": $defineProperty,
    "%Object.getPrototypeOf%": $ObjectGPO,
    "%Math.abs%": abs2,
    "%Math.floor%": floor2,
    "%Math.max%": max2,
    "%Math.min%": min2,
    "%Math.pow%": pow2,
    "%Math.round%": round2,
    "%Math.sign%": sign2,
    "%Reflect.getPrototypeOf%": $ReflectGPO
  };
  if (getProto2) {
    try {
      null.error;
    } catch (e) {
      var errorProto = getProto2(getProto2(e));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
  }
  var doEval = function doEval2(name) {
    var value;
    if (name === "%AsyncFunction%") {
      value = getEvalledConstructor("async function () {}");
    } else if (name === "%GeneratorFunction%") {
      value = getEvalledConstructor("function* () {}");
    } else if (name === "%AsyncGeneratorFunction%") {
      value = getEvalledConstructor("async function* () {}");
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen && getProto2) {
        value = getProto2(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind = requireFunctionBind();
  var hasOwn = /* @__PURE__ */ requireHasown();
  var $concat = bind.call($call, Array.prototype.concat);
  var $spliceApply = bind.call($apply, Array.prototype.splice);
  var $replace = bind.call($call, String.prototype.replace);
  var $strSlice = bind.call($call, String.prototype.slice);
  var $exec = bind.call($call, RegExp.prototype.exec);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath2(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  getIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return void undefined$1;
        }
        if ($gOPD && i + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  return getIntrinsic;
}
var callBound;
var hasRequiredCallBound;
function requireCallBound() {
  if (hasRequiredCallBound) return callBound;
  hasRequiredCallBound = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBindBasic = requireCallBindApplyHelpers();
  var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
  callBound = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      GetIntrinsic(name, !!allowMissing)
    );
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
      return callBindBasic(
        /** @type {const} */
        [intrinsic]
      );
    }
    return intrinsic;
  };
  return callBound;
}
var sideChannelMap;
var hasRequiredSideChannelMap;
function requireSideChannelMap() {
  if (hasRequiredSideChannelMap) return sideChannelMap;
  hasRequiredSideChannelMap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var $Map = GetIntrinsic("%Map%", true);
  var $mapGet = callBound2("Map.prototype.get", true);
  var $mapSet = callBound2("Map.prototype.set", true);
  var $mapHas = callBound2("Map.prototype.has", true);
  var $mapDelete = callBound2("Map.prototype.delete", true);
  var $mapSize = callBound2("Map.prototype.size", true);
  sideChannelMap = !!$Map && /** @type {Exclude<import('.'), false>} */
  function getSideChannelMap() {
    var $m;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        if ($m) {
          var result = $mapDelete($m, key);
          if ($mapSize($m) === 0) {
            $m = void 0;
          }
          return result;
        }
        return false;
      },
      get: function(key) {
        if ($m) {
          return $mapGet($m, key);
        }
      },
      has: function(key) {
        if ($m) {
          return $mapHas($m, key);
        }
        return false;
      },
      set: function(key, value) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key, value);
      }
    };
    return channel;
  };
  return sideChannelMap;
}
var sideChannelWeakmap;
var hasRequiredSideChannelWeakmap;
function requireSideChannelWeakmap() {
  if (hasRequiredSideChannelWeakmap) return sideChannelWeakmap;
  hasRequiredSideChannelWeakmap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelMap = requireSideChannelMap();
  var $TypeError = /* @__PURE__ */ requireType();
  var $WeakMap = GetIntrinsic("%WeakMap%", true);
  var $weakMapGet = callBound2("WeakMap.prototype.get", true);
  var $weakMapSet = callBound2("WeakMap.prototype.set", true);
  var $weakMapHas = callBound2("WeakMap.prototype.has", true);
  var $weakMapDelete = callBound2("WeakMap.prototype.delete", true);
  sideChannelWeakmap = $WeakMap ? (
    /** @type {Exclude<import('.'), false>} */
    function getSideChannelWeakMap() {
      var $wm;
      var $m;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapDelete($wm, key);
            }
          } else if (getSideChannelMap) {
            if ($m) {
              return $m["delete"](key);
            }
          }
          return false;
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          }
          return $m && $m.get(key);
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          }
          return !!$m && $m.has(key);
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if (getSideChannelMap) {
            if (!$m) {
              $m = getSideChannelMap();
            }
            $m.set(key, value);
          }
        }
      };
      return channel;
    }
  ) : getSideChannelMap;
  return sideChannelWeakmap;
}
var sideChannel;
var hasRequiredSideChannel;
function requireSideChannel() {
  if (hasRequiredSideChannel) return sideChannel;
  hasRequiredSideChannel = 1;
  var $TypeError = /* @__PURE__ */ requireType();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelList = requireSideChannelList();
  var getSideChannelMap = requireSideChannelMap();
  var getSideChannelWeakMap = requireSideChannelWeakmap();
  var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
  sideChannel = function getSideChannel() {
    var $channelData;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        return !!$channelData && $channelData["delete"](key);
      },
      get: function(key) {
        return $channelData && $channelData.get(key);
      },
      has: function(key) {
        return !!$channelData && $channelData.has(key);
      },
      set: function(key, value) {
        if (!$channelData) {
          $channelData = makeChannel();
        }
        $channelData.set(key, value);
      }
    };
    return channel;
  };
  return sideChannel;
}
var formats;
var hasRequiredFormats;
function requireFormats() {
  if (hasRequiredFormats) return formats;
  hasRequiredFormats = 1;
  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;
  var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  formats = {
    "default": Format.RFC3986,
    formatters: {
      RFC1738: function(value) {
        return replace.call(value, percentTwenties, "+");
      },
      RFC3986: function(value) {
        return String(value);
      }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
  };
  return formats;
}
var utils;
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  var formats2 = requireFormats();
  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;
  var hexTable = (function() {
    var array = [];
    for (var i = 0; i < 256; ++i) {
      array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
    }
    return array;
  })();
  var compactQueue = function compactQueue2(queue) {
    while (queue.length > 1) {
      var item = queue.pop();
      var obj = item.obj[item.prop];
      if (isArray(obj)) {
        var compacted = [];
        for (var j = 0; j < obj.length; ++j) {
          if (typeof obj[j] !== "undefined") {
            compacted.push(obj[j]);
          }
        }
        item.obj[item.prop] = compacted;
      }
    }
  };
  var arrayToObject = function arrayToObject2(source, options) {
    var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
      if (typeof source[i] !== "undefined") {
        obj[i] = source[i];
      }
    }
    return obj;
  };
  var merge = function merge2(target, source, options) {
    if (!source) {
      return target;
    }
    if (typeof source !== "object") {
      if (isArray(target)) {
        target.push(source);
      } else if (target && typeof target === "object") {
        if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
          target[source] = true;
        }
      } else {
        return [target, source];
      }
      return target;
    }
    if (!target || typeof target !== "object") {
      return [target].concat(source);
    }
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
      mergeTarget = arrayToObject(target, options);
    }
    if (isArray(target) && isArray(source)) {
      source.forEach(function(item, i) {
        if (has.call(target, i)) {
          var targetItem = target[i];
          if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
            target[i] = merge2(targetItem, item, options);
          } else {
            target.push(item);
          }
        } else {
          target[i] = item;
        }
      });
      return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
      var value = source[key];
      if (has.call(acc, key)) {
        acc[key] = merge2(acc[key], value, options);
      } else {
        acc[key] = value;
      }
      return acc;
    }, mergeTarget);
  };
  var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
      acc[key] = source[key];
      return acc;
    }, target);
  };
  var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") {
      return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    try {
      return decodeURIComponent(strWithoutPlus);
    } catch (e) {
      return strWithoutPlus;
    }
  };
  var encode = function encode2(str, defaultEncoder, charset, kind, format) {
    if (str.length === 0) {
      return str;
    }
    var string = str;
    if (typeof str === "symbol") {
      string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== "string") {
      string = String(str);
    }
    if (charset === "iso-8859-1") {
      return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
      });
    }
    var out = "";
    for (var i = 0; i < string.length; ++i) {
      var c = string.charCodeAt(i);
      if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats2.RFC1738 && (c === 40 || c === 41)) {
        out += string.charAt(i);
        continue;
      }
      if (c < 128) {
        out = out + hexTable[c];
        continue;
      }
      if (c < 2048) {
        out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
        continue;
      }
      if (c < 55296 || c >= 57344) {
        out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
        continue;
      }
      i += 1;
      c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
      out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
    }
    return out;
  };
  var compact = function compact2(value) {
    var queue = [{ obj: { o: value }, prop: "o" }];
    var refs = [];
    for (var i = 0; i < queue.length; ++i) {
      var item = queue[i];
      var obj = item.obj[item.prop];
      var keys = Object.keys(obj);
      for (var j = 0; j < keys.length; ++j) {
        var key = keys[j];
        var val = obj[key];
        if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
          queue.push({ obj, prop: key });
          refs.push(val);
        }
      }
    }
    compactQueue(queue);
    return value;
  };
  var isRegExp = function isRegExp2(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
  };
  var isBuffer = function isBuffer2(obj) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };
  var combine = function combine2(a2, b) {
    return [].concat(a2, b);
  };
  var maybeMap = function maybeMap2(val, fn) {
    if (isArray(val)) {
      var mapped = [];
      for (var i = 0; i < val.length; i += 1) {
        mapped.push(fn(val[i]));
      }
      return mapped;
    }
    return fn(val);
  };
  utils = {
    arrayToObject,
    assign,
    combine,
    compact,
    decode,
    encode,
    isBuffer,
    isRegExp,
    maybeMap,
    merge
  };
  return utils;
}
var stringify_1;
var hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify_1;
  hasRequiredStringify = 1;
  var getSideChannel = requireSideChannel();
  var utils2 = requireUtils();
  var formats2 = requireFormats();
  var has = Object.prototype.hasOwnProperty;
  var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
      return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key) {
      return prefix + "[" + key + "]";
    },
    repeat: function repeat(prefix) {
      return prefix;
    }
  };
  var isArray = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
  };
  var toISO = Date.prototype.toISOString;
  var defaultFormat = formats2["default"];
  var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encoder: utils2.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats2.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
      return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
  };
  var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
    return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
  };
  var sentinel = {};
  var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel2) {
    var obj = object;
    var tmpSc = sideChannel2;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
      var pos = tmpSc.get(object);
      step += 1;
      if (typeof pos !== "undefined") {
        if (pos === step) {
          throw new RangeError("Cyclic object value");
        } else {
          findFlag = true;
        }
      }
      if (typeof tmpSc.get(sentinel) === "undefined") {
        step = 0;
      }
    }
    if (typeof filter === "function") {
      obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
      obj = serializeDate(obj);
    } else if (generateArrayPrefix === "comma" && isArray(obj)) {
      obj = utils2.maybeMap(obj, function(value2) {
        if (value2 instanceof Date) {
          return serializeDate(value2);
        }
        return value2;
      });
    }
    if (obj === null) {
      if (strictNullHandling) {
        return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
      }
      obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils2.isBuffer(obj)) {
      if (encoder) {
        var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
        return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
      }
      return [formatter(prefix) + "=" + formatter(String(obj))];
    }
    var values = [];
    if (typeof obj === "undefined") {
      return values;
    }
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray(obj)) {
      if (encodeValuesOnly && encoder) {
        obj = utils2.maybeMap(obj, encoder);
      }
      objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
    } else if (isArray(filter)) {
      objKeys = filter;
    } else {
      var keys = Object.keys(obj);
      objKeys = sort ? keys.sort(sort) : keys;
    }
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + "[]" : prefix;
    for (var j = 0; j < objKeys.length; ++j) {
      var key = objKeys[j];
      var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
      if (skipNulls && value === null) {
        continue;
      }
      var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
      sideChannel2.set(object, step);
      var valueSideChannel = getSideChannel();
      valueSideChannel.set(sentinel, sideChannel2);
      pushToArray(values, stringify2(
        value,
        keyPrefix,
        generateArrayPrefix,
        commaRoundTrip,
        strictNullHandling,
        skipNulls,
        generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
        filter,
        sort,
        allowDots,
        serializeDate,
        format,
        formatter,
        encodeValuesOnly,
        charset,
        valueSideChannel
      ));
    }
    return values;
  };
  var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
    if (!opts) {
      return defaults;
    }
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
      throw new TypeError("Encoder has to be a function.");
    }
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var format = formats2["default"];
    if (typeof opts.format !== "undefined") {
      if (!has.call(formats2.formatters, opts.format)) {
        throw new TypeError("Unknown format option provided.");
      }
      format = opts.format;
    }
    var formatter = formats2.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === "function" || isArray(opts.filter)) {
      filter = opts.filter;
    }
    return {
      addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
      allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
      delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
      encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
      encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
      encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
      filter,
      format,
      formatter,
      serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
      skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
      sort: typeof opts.sort === "function" ? opts.sort : null,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
  };
  stringify_1 = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === "function") {
      filter = options.filter;
      obj = filter("", obj);
    } else if (isArray(options.filter)) {
      filter = options.filter;
      objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== "object" || obj === null) {
      return "";
    }
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
      arrayFormat = opts.arrayFormat;
    } else if (opts && "indices" in opts) {
      arrayFormat = opts.indices ? "indices" : "repeat";
    } else {
      arrayFormat = "indices";
    }
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    }
    var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
    if (!objKeys) {
      objKeys = Object.keys(obj);
    }
    if (options.sort) {
      objKeys.sort(options.sort);
    }
    var sideChannel2 = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
      var key = objKeys[i];
      if (options.skipNulls && obj[key] === null) {
        continue;
      }
      pushToArray(keys, stringify(
        obj[key],
        key,
        generateArrayPrefix,
        commaRoundTrip,
        options.strictNullHandling,
        options.skipNulls,
        options.encode ? options.encoder : null,
        options.filter,
        options.sort,
        options.allowDots,
        options.serializeDate,
        options.format,
        options.formatter,
        options.encodeValuesOnly,
        options.charset,
        sideChannel2
      ));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
      if (options.charset === "iso-8859-1") {
        prefix += "utf8=%26%2310003%3B&";
      } else {
        prefix += "utf8=%E2%9C%93&";
      }
    }
    return joined.length > 0 ? prefix + joined : "";
  };
  return stringify_1;
}
var parse;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse;
  hasRequiredParse = 1;
  var utils2 = requireUtils();
  var has = Object.prototype.hasOwnProperty;
  var isArray = Array.isArray;
  var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decoder: utils2.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1e3,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
  };
  var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
      return String.fromCharCode(parseInt(numberStr, 10));
    });
  };
  var parseArrayValue = function(val, options) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
      return val.split(",");
    }
    return val;
  };
  var isoSentinel = "utf8=%26%2310003%3B";
  var charsetSentinel = "utf8=%E2%9C%93";
  var parseValues = function parseQueryStringValues(str, options) {
    var obj = { __proto__: null };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1;
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
      for (i = 0; i < parts.length; ++i) {
        if (parts[i].indexOf("utf8=") === 0) {
          if (parts[i] === charsetSentinel) {
            charset = "utf-8";
          } else if (parts[i] === isoSentinel) {
            charset = "iso-8859-1";
          }
          skipIndex = i;
          i = parts.length;
        }
      }
    }
    for (i = 0; i < parts.length; ++i) {
      if (i === skipIndex) {
        continue;
      }
      var part = parts[i];
      var bracketEqualsPos = part.indexOf("]=");
      var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
      var key, val;
      if (pos === -1) {
        key = options.decoder(part, defaults.decoder, charset, "key");
        val = options.strictNullHandling ? null : "";
      } else {
        key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
        val = utils2.maybeMap(
          parseArrayValue(part.slice(pos + 1), options),
          function(encodedVal) {
            return options.decoder(encodedVal, defaults.decoder, charset, "value");
          }
        );
      }
      if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
        val = interpretNumericEntities(val);
      }
      if (part.indexOf("[]=") > -1) {
        val = isArray(val) ? [val] : val;
      }
      if (has.call(obj, key)) {
        obj[key] = utils2.combine(obj[key], val);
      } else {
        obj[key] = val;
      }
    }
    return obj;
  };
  var parseObject = function(chain2, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for (var i = chain2.length - 1; i >= 0; --i) {
      var obj;
      var root = chain2[i];
      if (root === "[]" && options.parseArrays) {
        obj = [].concat(leaf);
      } else {
        obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
        var index = parseInt(cleanRoot, 10);
        if (!options.parseArrays && cleanRoot === "") {
          obj = { 0: leaf };
        } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
          obj = [];
          obj[index] = leaf;
        } else if (cleanRoot !== "__proto__") {
          obj[cleanRoot] = leaf;
        }
      }
      leaf = obj;
    }
    return leaf;
  };
  var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
      return;
    }
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    var keys = [];
    if (parent) {
      if (!options.plainObjects && has.call(Object.prototype, parent)) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys.push(parent);
    }
    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
      i += 1;
      if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys.push(segment[1]);
    }
    if (segment) {
      keys.push("[" + key.slice(segment.index) + "]");
    }
    return parseObject(keys, val, options, valuesParsed);
  };
  var normalizeParseOptions = function normalizeParseOptions2(opts) {
    if (!opts) {
      return defaults;
    }
    if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
      throw new TypeError("Decoder has to be a function.");
    }
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
    return {
      allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
      allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
      allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
      arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
      comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
      decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
      delimiter: typeof opts.delimiter === "string" || utils2.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
      ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
      interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
      parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
      parseArrays: opts.parseArrays !== false,
      plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
  };
  parse = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") {
      return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    }
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
      obj = utils2.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
      return obj;
    }
    return utils2.compact(obj);
  };
  return parse;
}
var lib;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  var stringify = requireStringify();
  var parse2 = requireParse();
  var formats2 = requireFormats();
  lib = {
    formats: formats2,
    parse: parse2,
    stringify
  };
  return lib;
}
var libExports = requireLib();
const qs = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
const Tab = (_props) => null;
const VerticalTabs = ({ children, query = true, defaultActiveTab }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || children[0].props.tab
  );
  const props = Children.map(children, (child) => child.props);
  const { activeContent, className, isTransparent, extraNode } = useMemo(() => {
    const activeProp = props.find((prop) => prop.tab === activeTab);
    if (!activeProp) return { activeContent: null, isTransparent: false };
    return {
      activeContent: activeProp.children,
      className: activeProp.className,
      isTransparent: activeProp.transparent,
      extraNode: activeProp.extraNode
    };
  }, [activeTab, props]);
  const setQuery = useCallback(
    (tab) => {
      const currentQueries = new URLSearchParams(window.location.search);
      if (query) {
        if (tab) currentQueries.set("tab", tab);
      } else {
        if (currentQueries.has("tab")) currentQueries.delete("tab");
      }
      const q = Object.fromEntries(currentQueries.entries());
      const search = qs.stringify(q, { addQueryPrefix: true, encode: false });
      navigate({ search });
    },
    [navigate, query]
  );
  useEffect(() => {
    if (!searchParams || !query) return;
    const q = Object.fromEntries(searchParams.entries()) ?? {};
    if ("tab" in q && props.find((item) => item.tab === q["tab"])) {
      setActiveTab(q["tab"]);
    }
  }, [props, query, searchParams]);
  return /* @__PURE__ */ jsxs(Flex, { vertical: false, className: "p-6", flex: 1, align: "flex-start", gap: 24, children: [
    /* @__PURE__ */ jsx(Flex, { className: "h-full max-w-[200px]", vertical: true, flex: 1, gap: 16, children: props.map(({ tab, title }) => /* @__PURE__ */ jsx(
      Flex,
      {
        className: twMerge(
          "cursor-pointer rounded-bl rounded-tl border-r-[3px] border-transparent px-[22px]  py-2",
          tab === activeTab && "border-secondary bg-white-ff  shadow-[0_1px_2px_0_rgba(67,88,121,0.26)]"
        ),
        onClick: () => {
          setActiveTab(tab);
          setQuery(tab);
        },
        children: /* @__PURE__ */ jsx(
          Text,
          {
            size: 16,
            color: colors[tab === activeTab ? "secondary" : "primary"],
            weight: tab === activeTab ? "bold" : "normal",
            children: title
          }
        )
      },
      tab
    )) }),
    /* @__PURE__ */ jsxs(Flex, { vertical: true, flex: 1, className: "h-full", children: [
      isValidElement(extraNode) && extraNode,
      /* @__PURE__ */ jsx(
        Card,
        {
          className: twMerge(
            "small-custom-scrollbar h-fit overflow-y-hidden shadow-[0_3px_6px_0_rgba(67,88,121,0.16)]",
            isTransparent && "bg-transparent p-0 !shadow-none",
            className
          ),
          children: activeContent
        }
      )
    ] })
  ] });
};
VerticalTabs.Tab = Tab;
export {
  Accordion,
  ActionHeader,
  AudioVisualizer,
  AvatarUpload,
  Box,
  B as Button,
  Catch,
  ChevronIcon,
  CopyButton,
  Input,
  InputDatePicker,
  InputErrorMessage,
  InputRangePicker,
  InputTimePicker,
  L as Logo,
  NotResult,
  Select,
  SelectClearIcon,
  SelectLabel,
  SelectNotFound,
  SelectPlaceholder,
  SelectSuffix,
  SortableList,
  Spliter,
  Tag,
  TagInput,
  Tree,
  VerticalTabs,
  a as buttonDefaultClasses,
  f as fontSizePicker,
  p as paddingPicker,
  useNotification
};
