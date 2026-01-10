"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const antd = require("antd");
const React = require("react");
const index$1 = require("./index-D10ZFpVh.cjs");
const tailwindMerge = require("tailwind-merge");
const colors = require("./colors-BIS4kHo_.cjs");
const index = require("./index-BJvlKrDL.cjs");
const index$2 = require("./index-CJu4Ntp3.cjs");
const reactI18next = require("react-i18next");
const starkString = require("starkstring");
require("./index-D1yLR6A8.cjs");
const i18n = require("i18next");
const lib$2 = require("antd/lib");
const require$$2 = require("react-dom");
const reactRouterDom = require("react-router-dom");
const useDebounce = (fn, delay) => {
  const timerRef = React.useRef(null);
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
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
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
function touchDistanceAngle(event, ids2) {
  const [P1, P2] = Array.from(event.touches).filter((touch) => ids2.includes(touch.identifier));
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
function noop$1() {
}
function chain(...fns) {
  if (fns.length === 0) return noop$1;
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
    const memo = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, shared), state), {}, {
      [this.aliasKey]: state.values
    }));
    if (memo !== void 0) state.memo = memo;
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
    let memo = void 0;
    if (state.first && startKey in handlers) handlers[startKey](state);
    if (handlerKey in handlers) memo = handlers[handlerKey](state);
    if (state.last && endKey in handlers) handlers[endKey](state);
    return memo;
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
  const [isFocused, setFocused] = React.useState(false);
  const [isHovered, setHovered] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const [isTabFocused, setTabFocused] = React.useState(false);
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
class InternalRequestError extends Error {
  constructor(message, status, response) {
    super(message);
    this.message = message;
    this.status = status;
    this.response = response;
  }
  isApiException = true;
  static isRequestError(error) {
    return error.isApiException;
  }
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
  const props = React.useMemo(() => {
    const prettifyChildren = ({ props: props2 }, index2) => {
      let label = props2.label;
      if (typeof label === "string") {
        label = /* @__PURE__ */ jsxRuntime.jsx(
          index$1.Text,
          {
            size: 18,
            color: colors.colors[currentIndex === index2 + 1 ? "primary_dark_1" : "primary_light_1"],
            weight: currentIndex === index2 + 1 ? "bold" : "medium",
            children: label
          }
        );
      }
      return { ...props2, label, key: index2 + 1 };
    };
    return React.Children.map(children, prettifyChildren);
  }, [children, currentIndex]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: tailwindMerge.twMerge(
        "flex flex-1 flex-col gap-[16px] py-[20px]",
        indexedStyle && "pe-[60px] ps-[16px]",
        noGapBetweenItems && "gap-0"
      ),
      ref: accordionRef,
      children: props.map((item, index2) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: " flex w-full items-start gap-[16px]", children: [
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: indexedStyle, children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex h-full w-[30px] flex-col", children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-full items-start justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: tailwindMerge.twMerge(
                currentIndex > index2 ? "bg-positive" : "bg-primary-light-2",
                `z-[1] mt-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full`
              ),
              children: /* @__PURE__ */ jsxRuntime.jsx(
                index$1.Render,
                {
                  when: currentIndex > index2 + 1,
                  fallback: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.white_ff, size: 16, children: index2 + 1 }),
                  children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Checkmark", size: 18, color: colors.colors.white_ff })
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: index2 !== props.length - 1, children: /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              className: tailwindMerge.twMerge(
                "absolute left-[calc(50%-0.5px)] top-[25px] z-0 h-full w-[1px] border-l-[1px] border-dashed border-primary-light-2",
                currentIndex > index2 && "border-positive-light-2"
              )
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          antd.Collapse,
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
            items: [props[index2]],
            expandIcon: ({ isActive }) => /* @__PURE__ */ jsxRuntime.jsx(
              index$1.Icon,
              {
                name: isActive ? "Chevron_Down" : "Chevron_Up",
                color: colors.colors[isActive ? "primary" : "primary_light_1"]
              }
            ),
            style: { boxShadow: "0 1px 6px 0 rgba(72, 88, 118, 0.16)" },
            className: tailwindMerge.twMerge(
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
const ActionHeader = React.forwardRef(
  ({ children, title, route, hasBorder, gap = 8, className }, ref2) => {
    const headerTitle = (title2, route2) => {
      if (route2) {
        return /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "min-w-max", children: /* @__PURE__ */ jsxRuntime.jsx(index.Breadcrumbs, { route: route2 }) });
      }
      if (title2) {
        return /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "min-w-max", children: typeof title2 === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 16, weight: "medium", color: colors.colors.primary, children: title2 }) : title2 });
      }
      return null;
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      index$1.Flex,
      {
        className: tailwindMerge.twMerge(
          "bg-light-1 w-full px-6 py-4",
          hasBorder && "border-light-7 border-b",
          className
        ),
        align: "center",
        justify: "space-between",
        children: [
          headerTitle(title, route),
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { ref: ref2, gap, className: "w-full justify-end", children })
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
  const audioElRef = React.useRef(null);
  const analyserRef = React.useRef(null);
  const audioContextRef = React.useRef(null);
  const animationFrameRef = React.useRef(null);
  const visualizerContainerRef = React.useRef(null);
  const microphoneStreamRef = React.useRef(null);
  React.useEffect(() => {
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
  React.useEffect(() => {
    if (!deviceId || !audioElRef.current) return;
    let cancelled = false;
    const setupVisualizer = async () => {
      microphoneStreamRef.current?.getTracks().forEach((t) => t.stop());
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
      microphoneStreamRef.current?.getTracks().forEach((t) => t.stop());
      audioContextRef.current?.close();
      microphoneStreamRef.current = null;
      audioContextRef.current = null;
      analyserRef.current = null;
      resetVisualizerBars();
    };
  }, [deviceId]);
  React.useEffect(() => {
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
  React.useEffect(() => {
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
    barContainer.className = tailwindMerge.twMerge(barContainerClassName);
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
      bar.className = tailwindMerge.twMerge(barClassName);
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
        bars[i].style.backgroundColor = i < numActiveBars ? colors.colors.team.action : "#d1d5db";
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
  return /* @__PURE__ */ jsxRuntime.jsx(
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
      className: tailwindMerge.twMerge(containerClassName)
    }
  );
};
const AvatarUpload = ({ customRequest, src, shape, size, isLoading }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(index.Upload, { accept: ".jpg, .jpeg, .img", showUploadList: false, customRequest, children: /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "relative cursor-pointer overflow-hidden group",
      style: {
        borderRadius: shape === "circle" ? "50%" : 4
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            style: {
              position: "absolute",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(
              index$1.Icon,
              {
                name: "Add_photo",
                color: colors.colors.white_ff,
                className: "opacity-0 group-hover:opacity-100",
                style: { transition: "all 0.2s" }
              }
            )
          }
        ),
        isLoading ? /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: " bg-light-2 ",
            style: {
              width: size,
              height: size
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Loading, { isLoading: true, size, color: colors.colors.primary_light_1 })
          }
        ) : /* @__PURE__ */ jsxRuntime.jsxs(
          index$1.Flex,
          {
            className: tailwindMerge.twMerge("cursor-pointer items-center justify-center"),
            style: {
              minWidth: size,
              minHeight: size,
              width: size,
              height: size,
              borderRadius: shape === "circle" ? 9999 : 4,
              border: `1px solid ${colors.colors.light_7}`,
              position: "relative",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                index$2.Avatar,
                {
                  icon: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "User" }),
                  src,
                  size,
                  shape,
                  style: {
                    width: "100%",
                    height: "100%"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
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
  const { t } = reactI18next.useTranslation();
  if (error) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-[calc(100%-56px)] w-full p-4", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-full w-full flex-col items-center justify-center gap-y-4 overflow-y-auto overflow-x-hidden", children: [
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.negative_light_1, children: t("common.literal.serverError") }),
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: Boolean(retry), children: /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          onClick: retry,
          className: "rounded bg-primary px-4 py-2 shadow-sm hover:bg-primary-dark-1",
          children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.white_ff, children: t("common.message.tryAgain") })
        }
      ) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(React.Fragment, { children });
};
const ChevronIcon = ({ direction, ...rest }) => {
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const getIconName = (direction2 = "forward") => {
    if (direction2 === "forward") {
      return i18n2.language === "en" ? "Chevron_Right" : "Chevron_Left";
    } else {
      return i18n2.language === "en" ? "Chevron_Left" : "Chevron_Right";
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: getIconName(direction), ...rest });
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
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
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
  function _possibleConstructorReturn(self, call2) {
    if (call2 && (_typeof(call2) === "object" || typeof call2 === "function")) {
      return call2;
    } else if (call2 !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
  const { t } = reactI18next.useTranslation();
  const [showTooltip, setShowTooltip] = React.useState(false);
  React.useEffect(() => {
    showTooltip && setTimeout(() => {
      setShowTooltip(false);
    }, 750);
  }, [showTooltip]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    libExports$1.CopyToClipboard,
    {
      text: textToCopy,
      onCopy: (result) => {
        result && setShowTooltip(true);
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(index.Tooltip, { variant, title: t("common.message.copied"), open: showTooltip, children: renderButton ? renderButton : /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { align: "center", gap: 4, className: "cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 18, color: colors.colors.primary_light_1, name: "file_copy_line" }),
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { children: t("common.literal.copy") })
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
  } = React.useMemo(() => ({ ...props }), [props]);
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const _onChangeText = React.useCallback(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index$1.Flex,
    {
      vertical: true,
      className: tailwindMerge.twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName
      ),
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
            index$1.Text,
            {
              lang,
              size: inputSize === "large" ? 14 : 12,
              color: colors.colors.primary,
              weight: "normal",
              children: label
            }
          ) }) : label,
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          antd.Input.TextArea,
          {
            autoSize: true,
            ref: ref2,
            className: tailwindMerge.twMerge(
              "text-primary-dark-1  w-full  text-[14px] font-medium  outline-none",
              className
            ),
            classNames: {
              textarea: tailwindMerge.twMerge(
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
        !hideErrorMessage && error?.message && !helperText && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: error?.message }),
        helperText && /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.primary, className: "helperText", children: helperText })
      ]
    }
  );
};
const InputTextArea = React.forwardRef(InputTextArea$);
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
  } = React.useMemo(() => ({ ...props }), [props]);
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const _onChangeText = React.useCallback(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index$1.Flex,
    {
      vertical: true,
      className: tailwindMerge.twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName,
        "[&_.ant-input-clear-icon]:!flex"
      ),
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-[22px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
            index$1.Text,
            {
              size: inputSize === "large" ? 14 : 12,
              color: colors.colors.primary,
              weight: "normal",
              children: label
            }
          ) }) : label,
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          antd.Input,
          {
            ref: ref2,
            className: "w-full text-[14px] font-medium text-primary-dark-1 outline-none hover:border-primary-light-2",
            classNames: {
              input: tailwindMerge.twMerge(
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
            suffix: suffix || error?.message ? /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: tailwindMerge.twMerge("flex h-full justify-center"),
                onClick: (e) => e.stopPropagation(),
                children: suffix && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `flex h-full items-center justify-center `, children: [
                  " ",
                  suffix
                ] }) || error?.message && helperText && !suffix && !disabled && /* @__PURE__ */ jsxRuntime.jsx(
                  "div",
                  {
                    id: "my-anchor-element",
                    className: `flex h-full cursor-pointer items-center justify-center `,
                    children: /* @__PURE__ */ jsxRuntime.jsx(
                      index.Tooltip,
                      {
                        variant: "error",
                        color: colors.colors.negative,
                        title: error.message,
                        arrow: true,
                        children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "alert-line", color: colors.colors.negative })
                      }
                    )
                  }
                )
              }
            ) : void 0,
            prefix: prefix ? /* @__PURE__ */ jsxRuntime.jsx("div", { onClick: (e) => e.stopPropagation(), children: prefix }) : void 0,
            ...rest
          }
        ),
        !hideErrorMessage && error?.message && !helperText && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: error?.message }),
        helperText && /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.primary, children: helperText })
      ]
    }
  );
};
const InputDefault = React.forwardRef(InputDefault$);
const EmojiPicker = ({
  value,
  onChange,
  label,
  emojis = ["😊", "👍", "❤️", "😂", "🔥"]
  // Default emojis
}) => {
  const inputRef = React.useRef(null);
  const [cursor, setCursor] = React.useState(value.length);
  const getInput = () => inputRef.current?.input ?? inputRef.current;
  const updateCursor = () => {
    const el = getInput();
    if (el && el.selectionStart !== null) {
      setCursor(el.selectionStart);
    }
  };
  const addEmoji = React.useCallback(
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
  return /* @__PURE__ */ jsxRuntime.jsx(
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
        /* @__PURE__ */ jsxRuntime.jsx(
          index$2.Dropdown,
          {
            trigger: ["click"],
            placement: "topRight",
            openClassName: "flex bg-light-5",
            overlayClassName: "[&_.ant-dropdown-menu]:flex",
            dropdownRender: () => /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "bg-white-ff max-h-40 overflow-x-auto rounded-md p-2", gap: 8, children: emojis.map((emoji, i) => /* @__PURE__ */ jsxRuntime.jsx(
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
            children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "hover:bg-light-5 rounded-full bg-transparent p-1", children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "smile-outlined", className: "cursor-pointer" }) })
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
  } = React.useMemo(() => ({ ...props }), [props]);
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const _onChangeText = React.useCallback(
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
  const InputClassName = tailwindMerge.twMerge(
    `w-full flex items-center rounded-[4px] bg-white-ff bg-none outline-none transition-all border-none duration-200`,
    disabled ? "bg-light-6 text-primary-light-2" : "bg-none text-primary-light-2"
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index$1.Flex,
    {
      className: `flex w-full flex-col justify-start gap-[2px] text-[14px] ${wrapperClassName} `,
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: inputSize === "medium" ? 14 : 12, color: colors.colors.primary, weight: "medium", children: label }) : label,
          required && /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 8, color: colors.colors.primary_light_3 })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: `${InputClassName} focus-within:border-primary `,
            style: {
              border: `${error?.message && !disabled ? `1px solid ${colors.colors.negative}` : ""}`
            },
            children: [
              prefix && /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: tailwindMerge.twMerge(
                    "absolute flex items-center justify-center",
                    inputSize === "medium" ? "ps-[12px]" : "ps-[8px]"
                  ),
                  children: prefix
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
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
              (suffix || error?.message) && /* @__PURE__ */ jsxRuntime.jsx(
                "div",
                {
                  className: tailwindMerge.twMerge(
                    "flex h-full justify-center",
                    suffix ? inputSize === "medium" ? "pe-3" : "pe-2" : null
                  ),
                  children: suffix && /* @__PURE__ */ jsxRuntime.jsx("div", { className: ` flex h-full items-center justify-center`, children: suffix }) || error?.message && helperText && !suffix && !disabled && /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      id: "my-anchor-element",
                      className: ` flex h-full cursor-pointer items-center justify-center`,
                      children: /* @__PURE__ */ jsxRuntime.jsx(antd.Tooltip, { color: colors.colors.negative, title: error.message, arrow: true, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "alert-line", color: colors.colors.negative }) })
                    }
                  )
                }
              )
            ]
          }
        ),
        !helperText && error && /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { className: "min-h-[24px]", size: 12, color: colors.colors.negative_light_1, children: error?.message }),
        helperText && /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.primary, children: helperText })
      ]
    }
  );
};
const InputGhost = React.forwardRef(InputGhost$);
const InputNumber = React.forwardRef((props, ref2) => {
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
  } = React.useMemo(() => ({ ...props }), [props]);
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const _onChangeText = React.useCallback(
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
  const handleArrowBtns = React.useCallback(
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index$1.Flex,
    {
      vertical: true,
      className: tailwindMerge.twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName
      ),
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-[24px] items-center gap-1", children: [
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: inputSize === "large" ? 14 : 12, color: colors.colors.primary, weight: "normal", children: label }) }) : label,
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          antd.Input,
          {
            value: isCurrency && value ? starkString(value).toCurrency().toString() : value || "",
            ref: ref2,
            className: tailwindMerge.twMerge(
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
            suffix: /* @__PURE__ */ jsxRuntime.jsx("div", { className: tailwindMerge.twMerge("flex h-full"), children: /* @__PURE__ */ jsxRuntime.jsxs(
              index$1.Flex,
              {
                vertical: true,
                flex: 1,
                className: " border-primary-light-3 w-full border-s border-solid p-0",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    index$1.Flex,
                    {
                      flex: 1,
                      className: "bg-light-1 w-10 cursor-pointer items-center  justify-center  rounded	border-solid ",
                      onClick: () => handleArrowBtns(-step),
                      children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Chevron_Up", size: "small", color: colors.colors.primary_dark_2 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsx(antd.Divider, { className: "bg-primary-light-3 m-0 p-0" }),
                  /* @__PURE__ */ jsxRuntime.jsx(
                    index$1.Flex,
                    {
                      flex: 1,
                      onClick: () => handleArrowBtns(+step),
                      className: "bg-light-1 border-1 w-10 cursor-pointer items-center justify-center  rounded	border-solid",
                      children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Chevron_Down", size: "small", color: colors.colors.primary_dark_2 })
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
        !hideErrorMessage && error?.message && !helperText && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: error?.message }),
        helperText && /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.primary, className: "helperText", children: helperText })
      ]
    }
  );
});
const InputSearch = React.forwardRef(
  ({ onIconClick, ...rest }, ref2) => {
    const { t } = reactI18next.useTranslation();
    return /* @__PURE__ */ jsxRuntime.jsx(
      InputDefault,
      {
        placeholder: t("common.literal.search"),
        suffix: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Search_header", onClick: onIconClick }),
        ref: ref2,
        hideErrorMessage: true,
        ...rest
      }
    );
  }
);
const InputTag = React.memo(
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
    const addTag = React.useCallback(() => {
      const newTag = inputRef.current?.value.trim();
      if (!newTag || value.includes(newTag)) return;
      onChange?.([...value, newTag]);
      inputRef.current && (inputRef.current.value = "");
    }, [value, onChange]);
    const removeTag = React.useCallback(
      (removedTag) => {
        onChange?.(value.filter((tag) => tag !== removedTag));
      },
      [value, onChange]
    );
    const onKeyDown = React.useCallback(
      (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          addTag();
        }
      },
      [addTag]
    );
    const onChangeInput = React.useCallback((e) => {
      inputRef.current && (inputRef.current.value = e.target.value);
    }, []);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      antd.Flex,
      {
        vertical: true,
        className: tailwindMerge.twMerge(
          "w-full",
          !hideErrorMessage && "inputErrorMessageContainer",
          wrapperClassName,
          "[&_.ant-input-clear-icon]:!flex"
        ),
        children: [
          label && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-[24px] items-center gap-1", children: [
            typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: /* @__PURE__ */ jsxRuntime.jsx(
              index$1.Text,
              {
                size: 14,
                color: colors.colors.primary,
                weight: "normal",
                children: label
              }
            ) }) : label,
            /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(
            antd.Flex,
            {
              wrap: true,
              className: tailwindMerge.twMerge(
                "min-h-10 w-full gap-1 rounded border border-solid border-primary-light-3 bg-white-ff p-2 text-[14px] font-medium hover:border-primary-light-2",
                error && "border-negative"
              ),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: value.map((tag) => /* @__PURE__ */ jsxRuntime.jsx(
                  antd.Tag,
                  {
                    closable: !disabled,
                    onClose: () => removeTag(tag),
                    style: { marginInlineEnd: 4 },
                    children: tag
                  },
                  tag
                )) }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  "input",
                  {
                    ref: inputRef,
                    onChange: onChangeInput,
                    placeholder: value.length === 0 ? placeholder : void 0,
                    className: tailwindMerge.twMerge(
                      "placeholder:text-primary_light_3 flex-1 border-none font-yekan-normal text-primary-dark-1 outline-none"
                    ),
                    onKeyDown
                  }
                )
              ]
            }
          ),
          !hideErrorMessage && error?.message && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: error?.message })
        ]
      }
    );
  }
);
const Input = index.batch({
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
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const [open, setOpen] = React.useState(false);
  const value = React.useMemo(() => {
    if (valueISO) {
      return index.moment(valueISO);
    }
    return valueProp;
  }, [valueISO, valueProp]);
  const onChange = React.useCallback(
    (date, dateString) => {
      const isoString = date ? date.toISOString() : "";
      onChangeProp?.(date, dateString);
      onChangeISO?.(isoString);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const language = locale || i18n2.language;
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, className: `w-full ${!hideErrorMessage && "inputErrorMessageContainer"}`, children: [
    /* @__PURE__ */ jsxRuntime.jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: helperText, children: /* @__PURE__ */ jsxRuntime.jsx(index.Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Help_header", color: colors.colors.primary_light_3, size: 15 }) }) }),
      typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { className: "mb-[3px]", color: colors.colors.primary, children: label }) : label,
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      index.mainExports.InputDatePicker,
      {
        open,
        onOpenChange: setOpen,
        format: language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
        locale: language === "fa" ? "fa" : "en",
        pickerProps: {
          style: { fontFamily: locale === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
        },
        customColors: index.datePickerColors,
        style: { fontFamily: "YekanBakhFaRegular", fontSize: 16 },
        inputMode: "numeric",
        className: "placeholder:text-primary-light-3",
        wrapperStyle: {
          fontFamily: "YekanBakhFaRegular",
          borderColor: error?.message ? colors.colors.negative : colors.colors.primary_light_3,
          ...wrapperStyle
        },
        onChange,
        value,
        placeholder,
        closeOnChange: true,
        ...props
      }
    ),
    !hideErrorMessage && error?.message && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: getErrorMessage(error) })
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
  const { i18n: i18n2 } = reactI18next.useTranslation();
  const pickerRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const isValueValid = (value?.filter(Boolean)?.length || 0) > 0 && !!value;
  const language = locale || i18n2.language;
  React.useEffect(() => {
    if (value?.length === 2 && pickerRef.current) {
      setOpen(false);
    }
  }, [value]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index$1.Flex,
    {
      vertical: true,
      className: tailwindMerge.twMerge(
        "w-full",
        !hideErrorMessage && "inputErrorMessageContainer",
        wrapperClassName
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("label", { htmlFor: "language-textarea", className: "flex flex-row items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: helperText, children: /* @__PURE__ */ jsxRuntime.jsx(index.Tooltip, { variant: "default", title: helperText, arrow: { pointAtCenter: true }, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Help_header", color: colors.colors.primary_light_3, size: 15 }) }) }),
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: colors.colors.primary, className: "mb-[3px]", children: label }) : label,
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { ref: pickerRef, className: tailwindMerge.twMerge("h-full w-full", inputWrapperClassName), children: /* @__PURE__ */ jsxRuntime.jsx(
          index.mainExports.InputRangePicker,
          {
            open,
            onOpenChange: setOpen,
            format: language === "fa" ? "jYYYY/jMM/jDD" : "YYYY/MM/DD",
            locale: language === "fa" ? "fa" : "en",
            rangeProps: {
              style: { fontFamily: locale === "en" ? "RobotoLight" : "YekanBakhFaRegular" }
            },
            customColors: index.datePickerColors,
            inputMode: "numeric",
            wrapperStyle: {
              fontFamily: "YekanBakhFaRegular",
              borderColor: error?.message ? colors.colors.negative : colors.colors.primary_light_3,
              minHeight: 40,
              ...wrapperStyle
            },
            value: isValueValid ? value : null,
            ...props
          }
        ) }),
        !hideErrorMessage && error?.message && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: error?.message })
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
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { justify: "center", align: "center", gap: 4, className: "h-[100px]", children: [
    error?.message ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: errorIcon, size: 24, color: colors.colors.negative_light_2 }) : /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: noContentIcon, size: 24, color: colors.colors.primary_light_3 }),
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 14, color: error?.message ? colors.colors.negative : colors.colors.primary_light_2, children: noContentFoundMessage ? noContentFoundMessage : error?.message ? t("common.literal.listError") : t("common.message.noResultFound") })
  ] });
};
lib$2.notification.config({
  closeIcon: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 16, name: "Close", color: colors.colors.white_ff }),
  placement: "bottomRight",
  rtl: true,
  bottom: 0,
  duration: 7
});
const useNotification = () => {
  const { t } = reactI18next.useTranslation();
  const success = (props) => {
    lib$2.notification.open({
      ...props,
      style: {
        backgroundColor: colors.colors.positive,
        alignItems: "center",
        borderRadius: 4
      },
      //TODO if need button
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      icon: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 16, name: "Checkmark_Circle", color: colors.colors.white_ff }),
      message: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          index$1.Text,
          {
            showTooltipOnTruncate: false,
            className: "flex flex-1 ",
            weight: "medium",
            size: 16,
            color: colors.colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.VerticalLine, { color: colors.colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const neutral = (props) => {
    lib$2.notification.open({
      ...props,
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.colors.primary_dark_1, borderRadius: 4, alignItems: "center" },
      message: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { gap: 8, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          index$1.Text,
          {
            showTooltipOnTruncate: false,
            className: "flex flex-1  ",
            weight: "medium",
            size: 16,
            color: colors.colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.VerticalLine, { color: colors.colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const informative = (props) => {
    lib$2.notification.open({
      ...props,
      // btn: (
      //   <Text className="flex justify-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.colors.secondary, borderRadius: 4, alignItems: "center" },
      icon: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 16, name: "information", color: colors.colors.white_ff }),
      message: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { gap: 8, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          index$1.Text,
          {
            showTooltipOnTruncate: false,
            className: "flex flex-1 ",
            weight: "medium",
            size: 16,
            color: colors.colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.VerticalLine, { color: colors.colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const negative = (props) => {
    lib$2.notification.open({
      ...props,
      // btn: (
      //   <Text className="self-end" weight="medium" size={16} color={colors.white_ff}>
      //     {props.btn}
      //   </Text>
      // ),
      style: { backgroundColor: colors.colors.negative, borderRadius: 4, alignItems: "center" },
      icon: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 16, name: "Alert", color: colors.colors.white_ff }),
      message: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { gap: 8, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          index$1.Text,
          {
            showTooltipOnTruncate: false,
            className: " flex flex-1 ",
            weight: "medium",
            size: 16,
            color: colors.colors.white_ff,
            children: props.message
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.VerticalLine, { color: colors.colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const error = (error2) => {
    lib$2.notification.open({
      style: { backgroundColor: colors.colors.negative, borderRadius: 4, alignItems: "center" },
      icon: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 16, name: "Alert", color: colors.colors.white_ff }),
      message: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { gap: 8, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          index$1.Text,
          {
            showTooltipOnTruncate: false,
            weight: "medium",
            size: 16,
            className: " flex flex-1  ",
            color: colors.colors.white_ff,
            children: error2 || t("common.error.errorOccurred")
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index.VerticalLine, { color: colors.colors.white_ff_20, className: "min-h-full w-full" })
      ] })
    });
  };
  const successfullyAdded = () => {
    success({
      message: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.colors.white_ff, children: t("common.message.successfullyAdded") })
    });
  };
  const successfullyEdited = () => {
    success({
      message: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.colors.white_ff, children: t("common.message.successfullyEdited") })
    });
  };
  const successfullyDeleted = () => {
    success({
      message: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.colors.white_ff, children: t("common.message.successfullyDeleted") })
    });
  };
  const copied = () => {
    success({
      message: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { showTooltipOnTruncate: false, weight: "medium", size: 16, color: colors.colors.white_ff, children: t("common.message.copied") })
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
  const { i18n: i18n2 } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(
    index$1.Icon,
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
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "label",
    {
      className: "flex flex-row items-center justify-between",
      style: { marginBlockEnd: offset },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: false, align: "center", gap: 1, children: [
          typeof label === "string" ? /* @__PURE__ */ jsxRuntime.jsx(
            index$1.Text,
            {
              className: "h-[24px]",
              weight: "normal",
              size: size === "medium" ? 14 : 12,
              color: disabled ? colors.colors.primary_light_2 : colors.colors.primary,
              children: label
            }
          ) : /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: label }),
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: required, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Asterisk", size: 6, color: colors.colors.negative, className: "mb-2" }) })
        ] }),
        labelExtraNode
      ]
    }
  );
};
const SelectNotFound = ({ error, noContentFoundMessage }) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { justify: "center", align: "center", gap: 4, className: "h-[100px]", children: [
    error?.message ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "alert-line", size: 24, color: colors.colors.negative_light_2 }) : /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Search_fail", size: 24, color: colors.colors.primary_light_3 }),
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 14, color: error?.message ? colors.colors.negative : colors.colors.primary_light_2, children: noContentFoundMessage ? noContentFoundMessage : error?.message ? t("common.literal.listError") : t("common.message.noResultFound") })
  ] });
};
const SelectPlaceholder = ({
  placeholder,
  isHovered,
  disabled,
  isTabFocused
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    index$1.Text,
    {
      weight: "normal",
      size: 14,
      color: disabled ? colors.colors.primary_light_2 : isHovered || isTabFocused ? colors.colors.primary_dark_1 : colors.colors.primary_light_3,
      children: placeholder
    }
  );
};
const SelectSuffix = ({ isHovered, isTabFocused, disabled, error }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { align: "center", gap: 8, children: [
    error?.message && /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Alert", size: 18, color: colors.colors.negative }),
    /* @__PURE__ */ jsxRuntime.jsx(
      index$1.Icon,
      {
        name: "Chevron_Down",
        size: 18,
        color: disabled ? colors.colors.primary_light_2 : isHovered || isTabFocused ? colors.colors.primary_dark_1 : colors.colors.primary_dark_1
      }
    )
  ] });
};
const CustomizedAntSelectConfig = {
  components: {
    Select: {
      multipleItemBg: colors.colors.light_1,
      multipleItemBorderColor: colors.colors.primary_light_3,
      multipleItemBorderColorDisabled: colors.colors.primary_light_3,
      multipleItemColorDisabled: colors.colors.negative,
      multipleItemHeight: 20,
      multipleItemHeightLG: 20,
      multipleSelectorBgDisabled: colors.colors.light_1,
      optionActiveBg: colors.colors.light_1,
      optionFontSize: 20,
      optionHeight: 20,
      optionPadding: 0,
      optionSelectedBg: colors.colors.white_ff,
      singleItemHeightLG: 20,
      zIndexPopup: 20,
      colorTextPlaceholder: colors.colors.primary_light_3
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
  return tailwindMerge.twMerge(
    `min-w-[200px] flex-1 border rounded border-primary-light-3 bg-white-ff hover:border-primary-light-2 `,
    "[&_.ant-select-selection-item]:!border-none [&_.ant-select-selection-item]:!bg-transparent",
    extraOverrides[size],
    disabled && "!bg-light-6 !border-light-6",
    error && "border-negative hover:border-negative-dark-1 ",
    isTabFocused && `border-[2px] border-primary-dark-1`
  );
};
const { Option: Option$2 } = antd.Select;
const MultipleSelect = React.forwardRef(
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
    const { t } = reactI18next.useTranslation();
    const { eventHandlers, isHovered, isTabFocused } = useInteractions();
    const [isOpen, setIsOpen] = React.useState(false);
    const memoizedSelectedOptions = React.useRef(
      new Map(value?.map((v) => [valueExtractor(v), v]))
    );
    const _value = React.useMemo(() => {
      const selectedItems = [];
      if (selectedValue) {
        selectedItems.push(...selectedValue);
      }
      if (value) {
        selectedItems.push(...value.map(valueExtractor));
      }
      return selectedItems;
    }, [selectedValue, value, valueExtractor]);
    const currentSelectedItems = React.useMemo(() => {
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
    const _renderItem = React.useCallback(
      ({
        item,
        index: index$22,
        isActive,
        disabled: disabled2
      }) => {
        const extractedLabel = labelExtractor(item);
        return /* @__PURE__ */ jsxRuntime.jsx(
          index$1.Flex,
          {
            className: tailwindMerge.twMerge(
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
            children: renderItem ? /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: "min-h-[32px] w-full flex-1 items-center px-2", gap: 8, children: [
              /* @__PURE__ */ jsxRuntime.jsx(index.Checkbox, { checked: isActive }),
              renderItem(item, index$22, isActive, disabled2)
            ] }) : /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { gap: 8, className: tailwindMerge.twMerge("h-10 w-full flex-1 items-center px-2"), children: [
              /* @__PURE__ */ jsxRuntime.jsx(index.Checkbox, { checked: isActive }),
              typeof extractedLabel === "string" ? /* @__PURE__ */ jsxRuntime.jsx(
                index$1.Text,
                {
                  weight: isActive ? "bold" : "normal",
                  color: colors.colors.primary_dark_1,
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
    React.useEffect(() => {
      if (!disableOutsideScroll) return;
      if (isOpen) {
        document.addEventListener("scroll", scrollHandler, true);
      } else {
        document.removeEventListener("scroll", scrollHandler, true);
      }
    }, [isOpen, disableOutsideScroll]);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      index$1.Flex,
      {
        vertical: labelPosition === "vertical",
        className: tailwindMerge.twMerge(
          "h-fit w-full",
          !hideErrorMessage && "inputErrorMessageContainer",
          labelPosition === "horizontal" && "items-center gap-3",
          wrapperClassName
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(SelectLabel, { ...{ disabled, label, labelExtraNode, required, size } }),
          /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: CustomizedAntSelectConfig, children: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { align: "center", children: [
            addonBefore,
            /* @__PURE__ */ jsxRuntime.jsx(
              antd.Select,
              {
                ...rest,
                mode: "multiple",
                menuItemSelectedIcon: null,
                ref: ref2,
                className: tailwindMerge.twMerge(
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
                maxTagPlaceholder: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { children: t("common.message.itemsSelectedWithCount", { count: _value.length }) }),
                placeholder: /* @__PURE__ */ jsxRuntime.jsx(SelectPlaceholder, { ...{ isHovered, isTabFocused, placeholder, size, disabled } }),
                allowClear: allowClear ? {
                  clearIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectClearIcon, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ jsxRuntime.jsx(SelectNotFound, { ...{ error, noContentFoundMessage } }),
                suffixIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectSuffix, { ...{ isHovered, loading, disabled, isTabFocused, error } }),
                popupClassName: tailwindMerge.twMerge("p-0 small-custom-scrollbar z-[1000]", popupClassName),
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
                    return /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Loading, { isLoading: true, size: 24 }) });
                  }
                  const tags = /* @__PURE__ */ jsxRuntime.jsx(
                    index$1.Flex,
                    {
                      align: "center",
                      gap: 8,
                      className: "tiny-custom-scrollbar-horizontal border-b-light-7 flex-1 overflow-x-auto border-b p-3",
                      children: currentSelectedItems.map((i) => {
                        return /* @__PURE__ */ jsxRuntime.jsx(
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
                  const dropdown = /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, children: [
                    tags,
                    header && /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { vertical: true, className: "relative overflow-auto", children: menu }),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index$1.Flex,
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
                  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, children: [
                    tags,
                    header && /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      index$1.Flex,
                      {
                        vertical: true,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ jsxRuntime.jsx(
                          index$2.InfiniteLoader,
                          {
                            hasMore: infinite.hasMore,
                            onNextPage: infinite.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: options?.map((item, index2) => {
                              const isActive = !!_value?.find((i) => i === valueExtractor(item));
                              return _renderItem({ index: index2, isActive, item });
                            })
                          }
                        )
                      }
                    ),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index$1.Flex,
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
                children: options?.map((item, index2) => {
                  const isActive = !!_value?.find((i) => i === valueExtractor(item));
                  return /* @__PURE__ */ jsxRuntime.jsx(
                    Option$2,
                    {
                      value: valueExtractor(item),
                      disabled: disableExtractor(item),
                      children: _renderItem({
                        index: index2,
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
          error?.message && !hideErrorMessage && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: error?.message })
        ]
      }
    );
  }
);
const { Option: Option$1 } = antd.Select;
const SingleSelect = React.forwardRef(
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
    const [isOpen, setIsOpen] = React.useState(false);
    const _value = React.useMemo(() => {
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
    const _label = React.useMemo(() => {
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
    const _renderItem = React.useCallback(
      ({ item, index: index2, isActive }) => {
        return /* @__PURE__ */ jsxRuntime.jsx(
          index$1.Flex,
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
            children: renderItem ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "min-h-[32px] w-full flex-1 items-center justify-between", children: renderItem(item, index2, isActive) }) : /* @__PURE__ */ jsxRuntime.jsxs(
              index$1.Flex,
              {
                className: tailwindMerge.twMerge(
                  "h-10 w-full flex-1 items-center justify-between border-r-2 border-r-transparent px-4",
                  "hover:border-r-2 hover:border-r-primary"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(
                    index$1.Text,
                    {
                      weight: isActive ? "bold" : "normal",
                      color: colors.colors.primary_dark_1,
                      lang: lang || i18n.language,
                      className: "max-w-full overflow-hidden text-ellipsis",
                      children: labelExtractor(item)
                    }
                  ),
                  isActive && /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "Checkmark", color: colors.colors.positive })
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
    React.useEffect(() => {
      if (!disableOutsideScroll) return;
      if (isOpen) {
        document.addEventListener("scroll", scrollHandler, true);
      } else {
        document.removeEventListener("scroll", scrollHandler, true);
      }
    }, [isOpen, disableOutsideScroll]);
    return /* @__PURE__ */ jsxRuntime.jsxs(
      index$1.Flex,
      {
        vertical: labelPosition === "vertical",
        className: tailwindMerge.twMerge(
          "h-fit w-full",
          !hideErrorMessage && "inputErrorMessageContainer",
          labelPosition === "horizontal" && "items-center gap-3",
          wrapperClassName
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            SelectLabel,
            {
              ...{ disabled, label, labelExtraNode, required, size, offset: labelOffset }
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: CustomizedAntSelectConfig, children: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { align: "center", children: [
            addonBefore,
            /* @__PURE__ */ jsxRuntime.jsx(
              antd.Select,
              {
                ref: ref2,
                className: tailwindMerge.twMerge(
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
                placeholder: /* @__PURE__ */ jsxRuntime.jsx(SelectPlaceholder, { ...{ isHovered, isTabFocused, placeholder, size, disabled } }),
                allowClear: allowClear ? {
                  clearIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectClearIcon, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ jsxRuntime.jsx(SelectNotFound, { ...{ error, noContentFoundMessage } }),
                suffixIcon: suffixIcon ?? /* @__PURE__ */ jsxRuntime.jsx(SelectSuffix, { ...{ isHovered, loading, disabled, isTabFocused, error } }),
                labelInValue: true,
                popupClassName: tailwindMerge.twMerge("p-0 small-custom-scrollbar z-[1000]", popupClassName),
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
                    return /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Loading, { isLoading: true, size: 24 }) });
                  }
                  const dropdown = /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { vertical: true, className: "relative overflow-auto scroll-smooth", children: menu }),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index$1.Flex,
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
                  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      index$1.Flex,
                      {
                        vertical: true,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ jsxRuntime.jsx(
                          index$2.InfiniteLoader,
                          {
                            hasMore: infinite.hasMore,
                            onNextPage: infinite.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: options?.map((item, index2) => {
                              const isActive = !!_value && _value === valueExtractor(item);
                              return _renderItem({ index: index2, isActive, item });
                            })
                          }
                        )
                      }
                    ),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index$1.Flex,
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
                children: options?.map((item, index2) => {
                  const isActive = !!_value && _value === valueExtractor(item);
                  return /* @__PURE__ */ jsxRuntime.jsx(
                    Option$1,
                    {
                      label: labelExtractor(item),
                      value: valueExtractor(item),
                      valueRender: renderSelectedItem ? renderSelectedItem(item) : /* @__PURE__ */ jsxRuntime.jsx(
                        index$1.Text,
                        {
                          color: colors.colors.primary_dark_1,
                          lang: lang || i18n.language,
                          children: labelExtractor(item)
                        }
                      ),
                      disabled: disableExtractor(item),
                      children: _renderItem({ index: index2, item, isActive })
                    },
                    valueExtractor(item)
                  );
                })
              }
            ),
            addonAfter
          ] }) }),
          error?.message && !hideErrorMessage && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: error?.message })
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
      return colors.colors.primary_light_2;
    }
    if (isHovered || isActive) {
      return colors.colors.primary_dark_1;
    }
    return colors.colors.primary;
  };
  const getIconColor = () => {
    if (disabled) {
      return colors.colors.primary_light_2;
    }
    if (isHovered || isActive) {
      return colors.colors.primary_dark_1;
    }
    return colors.colors.primary_light_3;
  };
  const getBorder = () => {
    const baseBorder = `1px solid`;
    if (disabled) {
      return baseBorder + colors.colors.light_6;
    }
    if (isActive || isHovered) {
      return baseBorder + colors.colors.primary_dark_1;
    }
    return baseBorder + colors.colors.primary_light_3;
  };
  const renderTitle = () => {
    if (autoSlice && title?.length > sliceLength) {
      return title.slice(0, sliceLength) + "...";
    } else {
      return title;
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    antd.Tooltip,
    {
      color: colors.colors.primary_dark_1,
      title: title?.length > 10 ? title : void 0,
      autoAdjustOverflow: true,
      style: { width: "auto" },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        index$1.Flex,
        {
          align: "center",
          justify: "center",
          tabIndex: 0,
          className: tailwindMerge.twMerge(
            " h-[26px] max-h-[26px] rounded border bg-light-1  px-2 py-1 focus-visible:outline-none",
            disabled && "cursor-not-allowed bg-light-6 ",
            className
          ),
          style: {
            border: getBorder(),
            ...style
          },
          ...eventHandlers(),
          children: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { align: "center", children: [
            imageSrc && /* @__PURE__ */ jsxRuntime.jsx(index$2.Image, { preview: false, src: imageSrc, className: "me-2 h-4 w-4" }),
            /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { color: getColor(), className: "cursor-default", children: renderTitle() }),
            closable && /* @__PURE__ */ jsxRuntime.jsx(
              index$1.Icon,
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
  const [items, setitmes] = React.useState(treeData);
  const [isLoading, setLoading] = React.useState(true);
  const { t } = reactI18next.useTranslation();
  const [selectedItems, setselectedItems] = React.useState(
    initialValue ? initialValue : []
  );
  const value = valueProps ? Array.isArray(valueProps) ? valueProps : [valueProps] : selectedItems;
  const { isTabFocused, eventHandlers } = useInteractions();
  React.useEffect(() => {
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
    const dropdown = /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, children: [
      header && /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
      /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { vertical: true, className: "relative overflow-auto scroll-smooth", children: menu }),
      footer && /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { gap: 8, flex: 1, align: "center", className: "border-light-7 border-t px-4 py-2", children: footer })
    ] });
    return dropdown;
  };
  const renderTree = (item) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      antd.TreeSelect.TreeNode,
      {
        title: renderItem ? renderItem(item) : /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { lang: "fa", color: colors.colors.primary_dark_1, children: item.label }),
        value: item.value,
        label: item.label,
        checkable: item.checkable,
        children: [
          item.hasChildren && /* @__PURE__ */ jsxRuntime.jsx("div", { style: { display: "none" }, children: "blank children for showing switcher icon" }),
          item.children && item.children.map((opt) => renderTree(opt))
        ]
      },
      item.value
    );
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { style, ...eventHandlers(), className: tailwindMerge.twMerge("flex-col", wrapperClassName), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(SelectLabel, { ...{ disabled, label, required, size, offset: labelOffset } }),
    /* @__PURE__ */ jsxRuntime.jsxs(lib$2.ConfigProvider, { children: [
      addonBefore,
      /* @__PURE__ */ jsxRuntime.jsx(
        antd.TreeSelect,
        {
          listItemHeight: 50,
          className: tailwindMerge.twMerge(
            `${generateSelectClassNames$1({
              size,
              error: !!error?.message || hasError,
              disabled,
              isTabFocused
            })}`,
            className,
            "flex-none [&_.ant-select-selector]:!border-none"
          ),
          popupClassName: tailwindMerge.twMerge(
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
          showCheckedStrategy: antd.TreeSelect.SHOW_PARENT,
          labelInValue: true,
          value,
          suffixIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectSuffix, { ...{ disabled, isTabFocused, error } }),
          tagRender: (props) => {
            return value && value?.length < 3 ? /* @__PURE__ */ jsxRuntime.jsx(Tag, { title: props.label, ...props }) : props.value === value?.[0].value ? /* @__PURE__ */ jsxRuntime.jsxs("span", { children: [
              value.length,
              " ",
              t("common.message.itemSelected")
            ] }) : null;
          },
          treeNodeLabelProp: "label",
          notFoundContent: isLoading ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Loading, {}) : /* @__PURE__ */ jsxRuntime.jsx(SelectNotFound, {}),
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
const Select = index.batch({ Single: SingleSelect, Multiple: MultipleSelect, Tree: PlusTreeSelect });
function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return React.useMemo(
    () => (node) => {
      refs.forEach((ref2) => ref2(node));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    refs
  );
}
const canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
function isWindow(element) {
  const elementString = Object.prototype.toString.call(element);
  return elementString === "[object Window]" || // In Electron context the Window object serializes to [object global]
  elementString === "[object global]";
}
function isNode(node) {
  return "nodeType" in node;
}
function getWindow(target) {
  var _target$ownerDocument, _target$ownerDocument2;
  if (!target) {
    return window;
  }
  if (isWindow(target)) {
    return target;
  }
  if (!isNode(target)) {
    return window;
  }
  return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}
function isDocument(node) {
  const {
    Document
  } = getWindow(node);
  return node instanceof Document;
}
function isHTMLElement(node) {
  if (isWindow(node)) {
    return false;
  }
  return node instanceof getWindow(node).HTMLElement;
}
function isSVGElement(node) {
  return node instanceof getWindow(node).SVGElement;
}
function getOwnerDocument(target) {
  if (!target) {
    return document;
  }
  if (isWindow(target)) {
    return target.document;
  }
  if (!isNode(target)) {
    return document;
  }
  if (isDocument(target)) {
    return target;
  }
  if (isHTMLElement(target) || isSVGElement(target)) {
    return target.ownerDocument;
  }
  return document;
}
const useIsomorphicLayoutEffect = canUseDOM ? React.useLayoutEffect : React.useEffect;
function useEvent(handler) {
  const handlerRef = React.useRef(handler);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return React.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return handlerRef.current == null ? void 0 : handlerRef.current(...args);
  }, []);
}
function useInterval() {
  const intervalRef = React.useRef(null);
  const set = React.useCallback((listener, duration) => {
    intervalRef.current = setInterval(listener, duration);
  }, []);
  const clear = React.useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return [set, clear];
}
function useLatestValue(value, dependencies) {
  if (dependencies === void 0) {
    dependencies = [value];
  }
  const valueRef = React.useRef(value);
  useIsomorphicLayoutEffect(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;
    }
  }, dependencies);
  return valueRef;
}
function useLazyMemo(callback, dependencies) {
  const valueRef = React.useRef();
  return React.useMemo(
    () => {
      const newValue = callback(valueRef.current);
      valueRef.current = newValue;
      return newValue;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...dependencies]
  );
}
function useNodeRef(onChange) {
  const onChangeHandler = useEvent(onChange);
  const node = React.useRef(null);
  const setNodeRef = React.useCallback(
    (element) => {
      if (element !== node.current) {
        onChangeHandler == null ? void 0 : onChangeHandler(element, node.current);
      }
      node.current = element;
    },
    //eslint-disable-next-line
    []
  );
  return [node, setNodeRef];
}
function usePrevious(value) {
  const ref2 = React.useRef();
  React.useEffect(() => {
    ref2.current = value;
  }, [value]);
  return ref2.current;
}
let ids = {};
function useUniqueId(prefix, value) {
  return React.useMemo(() => {
    if (value) {
      return value;
    }
    const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id;
    return prefix + "-" + id;
  }, [prefix, value]);
}
function createAdjustmentFn(modifier) {
  return function(object) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }
    return adjustments.reduce((accumulator, adjustment) => {
      const entries = Object.entries(adjustment);
      for (const [key, valueAdjustment] of entries) {
        const value = accumulator[key];
        if (value != null) {
          accumulator[key] = value + modifier * valueAdjustment;
        }
      }
      return accumulator;
    }, {
      ...object
    });
  };
}
const add = /* @__PURE__ */ createAdjustmentFn(1);
const subtract = /* @__PURE__ */ createAdjustmentFn(-1);
function hasViewportRelativeCoordinates(event) {
  return "clientX" in event && "clientY" in event;
}
function isKeyboardEvent(event) {
  if (!event) {
    return false;
  }
  const {
    KeyboardEvent
  } = getWindow(event.target);
  return KeyboardEvent && event instanceof KeyboardEvent;
}
function isTouchEvent(event) {
  if (!event) {
    return false;
  }
  const {
    TouchEvent
  } = getWindow(event.target);
  return TouchEvent && event instanceof TouchEvent;
}
function getEventCoordinates(event) {
  if (isTouchEvent(event)) {
    if (event.touches && event.touches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.touches[0];
      return {
        x,
        y
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.changedTouches[0];
      return {
        x,
        y
      };
    }
  }
  if (hasViewportRelativeCoordinates(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }
  return null;
}
const CSS = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }
      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }
      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }
  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }
      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(" ");
    }
  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing
      } = _ref;
      return property + " " + duration + "ms " + easing;
    }
  }
});
const SELECTOR = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function findFirstFocusableNode(element) {
  if (element.matches(SELECTOR)) {
    return element;
  }
  return element.querySelector(SELECTOR);
}
const hiddenStyles = {
  display: "none"
};
function HiddenText(_ref) {
  let {
    id,
    value
  } = _ref;
  return React.createElement("div", {
    id,
    style: hiddenStyles
  }, value);
}
function LiveRegion(_ref) {
  let {
    id,
    announcement,
    ariaLiveType = "assertive"
  } = _ref;
  const visuallyHidden = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return React.createElement("div", {
    id,
    style: visuallyHidden,
    role: "status",
    "aria-live": ariaLiveType,
    "aria-atomic": true
  }, announcement);
}
function useAnnouncement() {
  const [announcement, setAnnouncement] = React.useState("");
  const announce = React.useCallback((value) => {
    if (value != null) {
      setAnnouncement(value);
    }
  }, []);
  return {
    announce,
    announcement
  };
}
const DndMonitorContext = /* @__PURE__ */ React.createContext(null);
function useDndMonitor(listener) {
  const registerListener = React.useContext(DndMonitorContext);
  React.useEffect(() => {
    if (!registerListener) {
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    }
    const unsubscribe = registerListener(listener);
    return unsubscribe;
  }, [listener, registerListener]);
}
function useDndMonitorProvider() {
  const [listeners] = React.useState(() => /* @__PURE__ */ new Set());
  const registerListener = React.useCallback((listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, [listeners]);
  const dispatch = React.useCallback((_ref) => {
    let {
      type: type2,
      event
    } = _ref;
    listeners.forEach((listener) => {
      var _listener$type;
      return (_listener$type = listener[type2]) == null ? void 0 : _listener$type.call(listener, event);
    });
  }, [listeners]);
  return [dispatch, registerListener];
}
const defaultScreenReaderInstructions = {
  draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
};
const defaultAnnouncements = {
  onDragStart(_ref) {
    let {
      active
    } = _ref;
    return "Picked up draggable item " + active.id + ".";
  },
  onDragOver(_ref2) {
    let {
      active,
      over
    } = _ref2;
    if (over) {
      return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
    }
    return "Draggable item " + active.id + " is no longer over a droppable area.";
  },
  onDragEnd(_ref3) {
    let {
      active,
      over
    } = _ref3;
    if (over) {
      return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
    }
    return "Draggable item " + active.id + " was dropped.";
  },
  onDragCancel(_ref4) {
    let {
      active
    } = _ref4;
    return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
  }
};
function Accessibility(_ref) {
  let {
    announcements = defaultAnnouncements,
    container,
    hiddenTextDescribedById,
    screenReaderInstructions = defaultScreenReaderInstructions
  } = _ref;
  const {
    announce,
    announcement
  } = useAnnouncement();
  const liveRegionId = useUniqueId("DndLiveRegion");
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  useDndMonitor(React.useMemo(() => ({
    onDragStart(_ref2) {
      let {
        active
      } = _ref2;
      announce(announcements.onDragStart({
        active
      }));
    },
    onDragMove(_ref3) {
      let {
        active,
        over
      } = _ref3;
      if (announcements.onDragMove) {
        announce(announcements.onDragMove({
          active,
          over
        }));
      }
    },
    onDragOver(_ref4) {
      let {
        active,
        over
      } = _ref4;
      announce(announcements.onDragOver({
        active,
        over
      }));
    },
    onDragEnd(_ref5) {
      let {
        active,
        over
      } = _ref5;
      announce(announcements.onDragEnd({
        active,
        over
      }));
    },
    onDragCancel(_ref6) {
      let {
        active,
        over
      } = _ref6;
      announce(announcements.onDragCancel({
        active,
        over
      }));
    }
  }), [announce, announcements]));
  if (!mounted) {
    return null;
  }
  const markup = React.createElement(React.Fragment, null, React.createElement(HiddenText, {
    id: hiddenTextDescribedById,
    value: screenReaderInstructions.draggable
  }), React.createElement(LiveRegion, {
    id: liveRegionId,
    announcement
  }));
  return container ? require$$2.createPortal(markup, container) : markup;
}
var Action;
(function(Action2) {
  Action2["DragStart"] = "dragStart";
  Action2["DragMove"] = "dragMove";
  Action2["DragEnd"] = "dragEnd";
  Action2["DragCancel"] = "dragCancel";
  Action2["DragOver"] = "dragOver";
  Action2["RegisterDroppable"] = "registerDroppable";
  Action2["SetDroppableDisabled"] = "setDroppableDisabled";
  Action2["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));
function noop() {
}
function useSensor(sensor, options) {
  return React.useMemo(
    () => ({
      sensor,
      options: options != null ? options : {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sensor, options]
  );
}
function useSensors() {
  for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) {
    sensors[_key] = arguments[_key];
  }
  return React.useMemo(
    () => [...sensors].filter((sensor) => sensor != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...sensors]
  );
}
const defaultCoordinates = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function sortCollisionsDesc(_ref3, _ref4) {
  let {
    data: {
      value: a
    }
  } = _ref3;
  let {
    data: {
      value: b
    }
  } = _ref4;
  return b - a;
}
function getFirstCollision(collisions, property) {
  if (!collisions || collisions.length === 0) {
    return null;
  }
  const [firstCollision] = collisions;
  return firstCollision[property];
}
function getIntersectionRatio(entry, target) {
  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + target.width, entry.left + entry.width);
  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  const width = right - left;
  const height = bottom - top;
  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  }
  return 0;
}
const rectIntersection = (_ref) => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const collisions = [];
  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);
    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);
      if (intersectionRatio > 0) {
        collisions.push({
          id,
          data: {
            droppableContainer,
            value: intersectionRatio
          }
        });
      }
    }
  }
  return collisions.sort(sortCollisionsDesc);
};
function adjustScale(transform, rect1, rect2) {
  return {
    ...transform,
    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
  };
}
function getRectDelta(rect1, rect2) {
  return rect1 && rect2 ? {
    x: rect1.left - rect2.left,
    y: rect1.top - rect2.top
  } : defaultCoordinates;
}
function createRectAdjustmentFn(modifier) {
  return function adjustClientRect(rect) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }
    return adjustments.reduce((acc, adjustment) => ({
      ...acc,
      top: acc.top + modifier * adjustment.y,
      bottom: acc.bottom + modifier * adjustment.y,
      left: acc.left + modifier * adjustment.x,
      right: acc.right + modifier * adjustment.x
    }), {
      ...rect
    });
  };
}
const getAdjustedRect = /* @__PURE__ */ createRectAdjustmentFn(1);
function parseTransform(transform) {
  if (transform.startsWith("matrix3d(")) {
    const transformArray = transform.slice(9, -1).split(/, /);
    return {
      x: +transformArray[12],
      y: +transformArray[13],
      scaleX: +transformArray[0],
      scaleY: +transformArray[5]
    };
  } else if (transform.startsWith("matrix(")) {
    const transformArray = transform.slice(7, -1).split(/, /);
    return {
      x: +transformArray[4],
      y: +transformArray[5],
      scaleX: +transformArray[0],
      scaleY: +transformArray[3]
    };
  }
  return null;
}
function inverseTransform(rect, transform, transformOrigin) {
  const parsedTransform = parseTransform(transform);
  if (!parsedTransform) {
    return rect;
  }
  const {
    scaleX,
    scaleY,
    x: translateX,
    y: translateY
  } = parsedTransform;
  const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
  const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
  const w = scaleX ? rect.width / scaleX : rect.width;
  const h = scaleY ? rect.height / scaleY : rect.height;
  return {
    width: w,
    height: h,
    top: y,
    right: x + w,
    bottom: y + h,
    left: x
  };
}
const defaultOptions = {
  ignoreTransform: false
};
function getClientRect(element, options) {
  if (options === void 0) {
    options = defaultOptions;
  }
  let rect = element.getBoundingClientRect();
  if (options.ignoreTransform) {
    const {
      transform,
      transformOrigin
    } = getWindow(element).getComputedStyle(element);
    if (transform) {
      rect = inverseTransform(rect, transform, transformOrigin);
    }
  }
  const {
    top,
    left,
    width,
    height,
    bottom,
    right
  } = rect;
  return {
    top,
    left,
    width,
    height,
    bottom,
    right
  };
}
function getTransformAgnosticClientRect(element) {
  return getClientRect(element, {
    ignoreTransform: true
  });
}
function getWindowClientRect(element) {
  const width = element.innerWidth;
  const height = element.innerHeight;
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}
function isFixed(node, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = getWindow(node).getComputedStyle(node);
  }
  return computedStyle.position === "fixed";
}
function isScrollable(element, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = getWindow(element).getComputedStyle(element);
  }
  const overflowRegex = /(auto|scroll|overlay)/;
  const properties2 = ["overflow", "overflowX", "overflowY"];
  return properties2.some((property) => {
    const value = computedStyle[property];
    return typeof value === "string" ? overflowRegex.test(value) : false;
  });
}
function getScrollableAncestors(element, limit) {
  const scrollParents = [];
  function findScrollableAncestors(node) {
    if (limit != null && scrollParents.length >= limit) {
      return scrollParents;
    }
    if (!node) {
      return scrollParents;
    }
    if (isDocument(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
      scrollParents.push(node.scrollingElement);
      return scrollParents;
    }
    if (!isHTMLElement(node) || isSVGElement(node)) {
      return scrollParents;
    }
    if (scrollParents.includes(node)) {
      return scrollParents;
    }
    const computedStyle = getWindow(element).getComputedStyle(node);
    if (node !== element) {
      if (isScrollable(node, computedStyle)) {
        scrollParents.push(node);
      }
    }
    if (isFixed(node, computedStyle)) {
      return scrollParents;
    }
    return findScrollableAncestors(node.parentNode);
  }
  if (!element) {
    return scrollParents;
  }
  return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
  const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
  return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}
function getScrollableElement(element) {
  if (!canUseDOM || !element) {
    return null;
  }
  if (isWindow(element)) {
    return element;
  }
  if (!isNode(element)) {
    return null;
  }
  if (isDocument(element) || element === getOwnerDocument(element).scrollingElement) {
    return window;
  }
  if (isHTMLElement(element)) {
    return element;
  }
  return null;
}
function getScrollXCoordinate(element) {
  if (isWindow(element)) {
    return element.scrollX;
  }
  return element.scrollLeft;
}
function getScrollYCoordinate(element) {
  if (isWindow(element)) {
    return element.scrollY;
  }
  return element.scrollTop;
}
function getScrollCoordinates(element) {
  return {
    x: getScrollXCoordinate(element),
    y: getScrollYCoordinate(element)
  };
}
var Direction;
(function(Direction2) {
  Direction2[Direction2["Forward"] = 1] = "Forward";
  Direction2[Direction2["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));
function isDocumentScrollingElement(element) {
  if (!canUseDOM || !element) {
    return false;
  }
  return element === document.scrollingElement;
}
function getScrollPosition(scrollingContainer) {
  const minScroll = {
    x: 0,
    y: 0
  };
  const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: scrollingContainer.clientHeight,
    width: scrollingContainer.clientWidth
  };
  const maxScroll = {
    x: scrollingContainer.scrollWidth - dimensions.width,
    y: scrollingContainer.scrollHeight - dimensions.height
  };
  const isTop = scrollingContainer.scrollTop <= minScroll.y;
  const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
  const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
  const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
  return {
    isTop,
    isLeft,
    isBottom,
    isRight,
    maxScroll,
    minScroll
  };
}
const defaultThreshold = {
  x: 0.2,
  y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
  let {
    top,
    left,
    right,
    bottom
  } = _ref;
  if (acceleration === void 0) {
    acceleration = 10;
  }
  if (thresholdPercentage === void 0) {
    thresholdPercentage = defaultThreshold;
  }
  const {
    isTop,
    isBottom,
    isLeft,
    isRight
  } = getScrollPosition(scrollContainer);
  const direction = {
    x: 0,
    y: 0
  };
  const speed = {
    x: 0,
    y: 0
  };
  const threshold = {
    height: scrollContainerRect.height * thresholdPercentage.y,
    width: scrollContainerRect.width * thresholdPercentage.x
  };
  if (!isTop && top <= scrollContainerRect.top + threshold.height) {
    direction.y = Direction.Backward;
    speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
  } else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
    direction.y = Direction.Forward;
    speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
  }
  if (!isRight && right >= scrollContainerRect.right - threshold.width) {
    direction.x = Direction.Forward;
    speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
  } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
    direction.x = Direction.Backward;
    speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
  }
  return {
    direction,
    speed
  };
}
function getScrollElementRect(element) {
  if (element === document.scrollingElement) {
    const {
      innerWidth,
      innerHeight
    } = window;
    return {
      top: 0,
      left: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight
    };
  }
  const {
    top,
    left,
    right,
    bottom
  } = element.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getScrollOffsets(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return add(acc, getScrollCoordinates(node));
  }, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollXCoordinate(node);
  }, 0);
}
function getScrollYOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollYCoordinate(node);
  }, 0);
}
function scrollIntoViewIfNeeded(element, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }
  if (!element) {
    return;
  }
  const {
    top,
    left,
    bottom,
    right
  } = measure(element);
  const firstScrollableAncestor = getFirstScrollableAncestor(element);
  if (!firstScrollableAncestor) {
    return;
  }
  if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
    element.scrollIntoView({
      block: "center",
      inline: "center"
    });
  }
}
const properties = [["x", ["left", "right"], getScrollXOffset], ["y", ["top", "bottom"], getScrollYOffset]];
class Rect {
  constructor(rect, element) {
    this.rect = void 0;
    this.width = void 0;
    this.height = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.right = void 0;
    this.left = void 0;
    const scrollableAncestors = getScrollableAncestors(element);
    const scrollOffsets = getScrollOffsets(scrollableAncestors);
    this.rect = {
      ...rect
    };
    this.width = rect.width;
    this.height = rect.height;
    for (const [axis, keys, getScrollOffset] of properties) {
      for (const key of keys) {
        Object.defineProperty(this, key, {
          get: () => {
            const currentOffsets = getScrollOffset(scrollableAncestors);
            const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
            return this.rect[key] + scrollOffsetsDeltla;
          },
          enumerable: true
        });
      }
    }
    Object.defineProperty(this, "rect", {
      enumerable: false
    });
  }
}
class Listeners {
  constructor(target) {
    this.target = void 0;
    this.listeners = [];
    this.removeAll = () => {
      this.listeners.forEach((listener) => {
        var _this$target;
        return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
      });
    };
    this.target = target;
  }
  add(eventName, handler, options) {
    var _this$target2;
    (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
    this.listeners.push([eventName, handler, options]);
  }
}
function getEventListenerTarget(target) {
  const {
    EventTarget
  } = getWindow(target);
  return target instanceof EventTarget ? target : getOwnerDocument(target);
}
function hasExceededDistance(delta, measurement) {
  const dx = Math.abs(delta.x);
  const dy = Math.abs(delta.y);
  if (typeof measurement === "number") {
    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  }
  if ("x" in measurement && "y" in measurement) {
    return dx > measurement.x && dy > measurement.y;
  }
  if ("x" in measurement) {
    return dx > measurement.x;
  }
  if ("y" in measurement) {
    return dy > measurement.y;
  }
  return false;
}
var EventName;
(function(EventName2) {
  EventName2["Click"] = "click";
  EventName2["DragStart"] = "dragstart";
  EventName2["Keydown"] = "keydown";
  EventName2["ContextMenu"] = "contextmenu";
  EventName2["Resize"] = "resize";
  EventName2["SelectionChange"] = "selectionchange";
  EventName2["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));
function preventDefault(event) {
  event.preventDefault();
}
function stopPropagation(event) {
  event.stopPropagation();
}
var KeyboardCode;
(function(KeyboardCode2) {
  KeyboardCode2["Space"] = "Space";
  KeyboardCode2["Down"] = "ArrowDown";
  KeyboardCode2["Right"] = "ArrowRight";
  KeyboardCode2["Left"] = "ArrowLeft";
  KeyboardCode2["Up"] = "ArrowUp";
  KeyboardCode2["Esc"] = "Escape";
  KeyboardCode2["Enter"] = "Enter";
  KeyboardCode2["Tab"] = "Tab";
})(KeyboardCode || (KeyboardCode = {}));
const defaultKeyboardCodes = {
  start: [KeyboardCode.Space, KeyboardCode.Enter],
  cancel: [KeyboardCode.Esc],
  end: [KeyboardCode.Space, KeyboardCode.Enter, KeyboardCode.Tab]
};
const defaultKeyboardCoordinateGetter = (event, _ref) => {
  let {
    currentCoordinates
  } = _ref;
  switch (event.code) {
    case KeyboardCode.Right:
      return {
        ...currentCoordinates,
        x: currentCoordinates.x + 25
      };
    case KeyboardCode.Left:
      return {
        ...currentCoordinates,
        x: currentCoordinates.x - 25
      };
    case KeyboardCode.Down:
      return {
        ...currentCoordinates,
        y: currentCoordinates.y + 25
      };
    case KeyboardCode.Up:
      return {
        ...currentCoordinates,
        y: currentCoordinates.y - 25
      };
  }
  return void 0;
};
class KeyboardSensor {
  constructor(props) {
    this.props = void 0;
    this.autoScrollEnabled = false;
    this.referenceCoordinates = void 0;
    this.listeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    const {
      event: {
        target
      }
    } = props;
    this.props = props;
    this.listeners = new Listeners(getOwnerDocument(target));
    this.windowListeners = new Listeners(getWindow(target));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }
  attach() {
    this.handleStart();
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode,
      onStart
    } = this.props;
    const node = activeNode.node.current;
    if (node) {
      scrollIntoViewIfNeeded(node);
    }
    onStart(defaultCoordinates);
  }
  handleKeyDown(event) {
    if (isKeyboardEvent(event)) {
      const {
        active,
        context,
        options
      } = this.props;
      const {
        keyboardCodes = defaultKeyboardCodes,
        coordinateGetter = defaultKeyboardCoordinateGetter,
        scrollBehavior = "smooth"
      } = options;
      const {
        code
      } = event;
      if (keyboardCodes.end.includes(code)) {
        this.handleEnd(event);
        return;
      }
      if (keyboardCodes.cancel.includes(code)) {
        this.handleCancel(event);
        return;
      }
      const {
        collisionRect
      } = context.current;
      const currentCoordinates = collisionRect ? {
        x: collisionRect.left,
        y: collisionRect.top
      } : defaultCoordinates;
      if (!this.referenceCoordinates) {
        this.referenceCoordinates = currentCoordinates;
      }
      const newCoordinates = coordinateGetter(event, {
        active,
        context: context.current,
        currentCoordinates
      });
      if (newCoordinates) {
        const coordinatesDelta = subtract(newCoordinates, currentCoordinates);
        const scrollDelta = {
          x: 0,
          y: 0
        };
        const {
          scrollableAncestors
        } = context.current;
        for (const scrollContainer of scrollableAncestors) {
          const direction = event.code;
          const {
            isTop,
            isRight,
            isLeft,
            isBottom,
            maxScroll,
            minScroll
          } = getScrollPosition(scrollContainer);
          const scrollElementRect = getScrollElementRect(scrollContainer);
          const clampedCoordinates = {
            x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
            y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
          };
          const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
          const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;
          if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
            const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
            const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;
            if (canScrollToNewCoordinates && !coordinatesDelta.y) {
              scrollContainer.scrollTo({
                left: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }
            if (canScrollToNewCoordinates) {
              scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
            } else {
              scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
            }
            if (scrollDelta.x) {
              scrollContainer.scrollBy({
                left: -scrollDelta.x,
                behavior: scrollBehavior
              });
            }
            break;
          } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
            const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
            const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;
            if (canScrollToNewCoordinates && !coordinatesDelta.x) {
              scrollContainer.scrollTo({
                top: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }
            if (canScrollToNewCoordinates) {
              scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
            } else {
              scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
            }
            if (scrollDelta.y) {
              scrollContainer.scrollBy({
                top: -scrollDelta.y,
                behavior: scrollBehavior
              });
            }
            break;
          }
        }
        this.handleMove(event, add(subtract(newCoordinates, this.referenceCoordinates), scrollDelta));
      }
    }
  }
  handleMove(event, coordinates) {
    const {
      onMove
    } = this.props;
    event.preventDefault();
    onMove(coordinates);
  }
  handleEnd(event) {
    const {
      onEnd
    } = this.props;
    event.preventDefault();
    this.detach();
    onEnd();
  }
  handleCancel(event) {
    const {
      onCancel
    } = this.props;
    event.preventDefault();
    this.detach();
    onCancel();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }
}
KeyboardSensor.activators = [{
  eventName: "onKeyDown",
  handler: (event, _ref, _ref2) => {
    let {
      keyboardCodes = defaultKeyboardCodes,
      onActivation
    } = _ref;
    let {
      active
    } = _ref2;
    const {
      code
    } = event.nativeEvent;
    if (keyboardCodes.start.includes(code)) {
      const activator = active.activatorNode.current;
      if (activator && event.target !== activator) {
        return false;
      }
      event.preventDefault();
      onActivation == null ? void 0 : onActivation({
        event: event.nativeEvent
      });
      return true;
    }
    return false;
  }
}];
function isDistanceConstraint(constraint) {
  return Boolean(constraint && "distance" in constraint);
}
function isDelayConstraint(constraint) {
  return Boolean(constraint && "delay" in constraint);
}
class AbstractPointerSensor {
  constructor(props, events2, listenerTarget) {
    var _getEventCoordinates;
    if (listenerTarget === void 0) {
      listenerTarget = getEventListenerTarget(props.event.target);
    }
    this.props = void 0;
    this.events = void 0;
    this.autoScrollEnabled = true;
    this.document = void 0;
    this.activated = false;
    this.initialCoordinates = void 0;
    this.timeoutId = null;
    this.listeners = void 0;
    this.documentListeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    this.events = events2;
    const {
      event
    } = props;
    const {
      target
    } = event;
    this.props = props;
    this.events = events2;
    this.document = getOwnerDocument(target);
    this.documentListeners = new Listeners(this.document);
    this.listeners = new Listeners(listenerTarget);
    this.windowListeners = new Listeners(getWindow(target));
    this.initialCoordinates = (_getEventCoordinates = getEventCoordinates(event)) != null ? _getEventCoordinates : defaultCoordinates;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }
  attach() {
    const {
      events: events2,
      props: {
        options: {
          activationConstraint,
          bypassActivationConstraint
        }
      }
    } = this;
    this.listeners.add(events2.move.name, this.handleMove, {
      passive: false
    });
    this.listeners.add(events2.end.name, this.handleEnd);
    if (events2.cancel) {
      this.listeners.add(events2.cancel.name, this.handleCancel);
    }
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.DragStart, preventDefault);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    this.windowListeners.add(EventName.ContextMenu, preventDefault);
    this.documentListeners.add(EventName.Keydown, this.handleKeydown);
    if (activationConstraint) {
      if (bypassActivationConstraint != null && bypassActivationConstraint({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      })) {
        return this.handleStart();
      }
      if (isDelayConstraint(activationConstraint)) {
        this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
        this.handlePending(activationConstraint);
        return;
      }
      if (isDistanceConstraint(activationConstraint)) {
        this.handlePending(activationConstraint);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
    setTimeout(this.documentListeners.removeAll, 50);
    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
  handlePending(constraint, offset) {
    const {
      active,
      onPending
    } = this.props;
    onPending(active, constraint, this.initialCoordinates, offset);
  }
  handleStart() {
    const {
      initialCoordinates
    } = this;
    const {
      onStart
    } = this.props;
    if (initialCoordinates) {
      this.activated = true;
      this.documentListeners.add(EventName.Click, stopPropagation, {
        capture: true
      });
      this.removeTextSelection();
      this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
      onStart(initialCoordinates);
    }
  }
  handleMove(event) {
    var _getEventCoordinates2;
    const {
      activated,
      initialCoordinates,
      props
    } = this;
    const {
      onMove,
      options: {
        activationConstraint
      }
    } = props;
    if (!initialCoordinates) {
      return;
    }
    const coordinates = (_getEventCoordinates2 = getEventCoordinates(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
    const delta = subtract(initialCoordinates, coordinates);
    if (!activated && activationConstraint) {
      if (isDistanceConstraint(activationConstraint)) {
        if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
        if (hasExceededDistance(delta, activationConstraint.distance)) {
          return this.handleStart();
        }
      }
      if (isDelayConstraint(activationConstraint)) {
        if (hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
      }
      this.handlePending(activationConstraint, delta);
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    onMove(coordinates);
  }
  handleEnd() {
    const {
      onAbort,
      onEnd
    } = this.props;
    this.detach();
    if (!this.activated) {
      onAbort(this.props.active);
    }
    onEnd();
  }
  handleCancel() {
    const {
      onAbort,
      onCancel
    } = this.props;
    this.detach();
    if (!this.activated) {
      onAbort(this.props.active);
    }
    onCancel();
  }
  handleKeydown(event) {
    if (event.code === KeyboardCode.Esc) {
      this.handleCancel();
    }
  }
  removeTextSelection() {
    var _this$document$getSel;
    (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
  }
}
const events = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class PointerSensor extends AbstractPointerSensor {
  constructor(props) {
    const {
      event
    } = props;
    const listenerTarget = getOwnerDocument(event.target);
    super(props, events, listenerTarget);
  }
}
PointerSensor.activators = [{
  eventName: "onPointerDown",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    if (!event.isPrimary || event.button !== 0) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
const events$1 = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var MouseButton;
(function(MouseButton2) {
  MouseButton2[MouseButton2["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));
class MouseSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$1, getOwnerDocument(props.event.target));
  }
}
MouseSensor.activators = [{
  eventName: "onMouseDown",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    if (event.button === MouseButton.RightClick) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
const events$2 = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class TouchSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$2);
  }
  static setup() {
    window.addEventListener(events$2.move.name, noop2, {
      capture: false,
      passive: false
    });
    return function teardown() {
      window.removeEventListener(events$2.move.name, noop2);
    };
    function noop2() {
    }
  }
}
TouchSensor.activators = [{
  eventName: "onTouchStart",
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    const {
      touches
    } = event;
    if (touches.length > 1) {
      return false;
    }
    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];
var AutoScrollActivator;
(function(AutoScrollActivator2) {
  AutoScrollActivator2[AutoScrollActivator2["Pointer"] = 0] = "Pointer";
  AutoScrollActivator2[AutoScrollActivator2["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));
var TraversalOrder;
(function(TraversalOrder2) {
  TraversalOrder2[TraversalOrder2["TreeOrder"] = 0] = "TreeOrder";
  TraversalOrder2[TraversalOrder2["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));
function useAutoScroller(_ref) {
  let {
    acceleration,
    activator = AutoScrollActivator.Pointer,
    canScroll,
    draggingRect,
    enabled,
    interval = 5,
    order = TraversalOrder.TreeOrder,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects,
    delta,
    threshold
  } = _ref;
  const scrollIntent = useScrollIntent({
    delta,
    disabled: !enabled
  });
  const [setAutoScrollInterval, clearAutoScrollInterval] = useInterval();
  const scrollSpeed = React.useRef({
    x: 0,
    y: 0
  });
  const scrollDirection = React.useRef({
    x: 0,
    y: 0
  });
  const rect = React.useMemo(() => {
    switch (activator) {
      case AutoScrollActivator.Pointer:
        return pointerCoordinates ? {
          top: pointerCoordinates.y,
          bottom: pointerCoordinates.y,
          left: pointerCoordinates.x,
          right: pointerCoordinates.x
        } : null;
      case AutoScrollActivator.DraggableRect:
        return draggingRect;
    }
  }, [activator, draggingRect, pointerCoordinates]);
  const scrollContainerRef = React.useRef(null);
  const autoScroll = React.useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      return;
    }
    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
    scrollContainer.scrollBy(scrollLeft, scrollTop);
  }, []);
  const sortedScrollableAncestors = React.useMemo(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
  React.useEffect(
    () => {
      if (!enabled || !scrollableAncestors.length || !rect) {
        clearAutoScrollInterval();
        return;
      }
      for (const scrollContainer of sortedScrollableAncestors) {
        if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
          continue;
        }
        const index2 = scrollableAncestors.indexOf(scrollContainer);
        const scrollContainerRect = scrollableAncestorRects[index2];
        if (!scrollContainerRect) {
          continue;
        }
        const {
          direction,
          speed
        } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);
        for (const axis of ["x", "y"]) {
          if (!scrollIntent[axis][direction[axis]]) {
            speed[axis] = 0;
            direction[axis] = 0;
          }
        }
        if (speed.x > 0 || speed.y > 0) {
          clearAutoScrollInterval();
          scrollContainerRef.current = scrollContainer;
          setAutoScrollInterval(autoScroll, interval);
          scrollSpeed.current = speed;
          scrollDirection.current = direction;
          return;
        }
      }
      scrollSpeed.current = {
        x: 0,
        y: 0
      };
      scrollDirection.current = {
        x: 0,
        y: 0
      };
      clearAutoScrollInterval();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      acceleration,
      autoScroll,
      canScroll,
      clearAutoScrollInterval,
      enabled,
      interval,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(rect),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(scrollIntent),
      setAutoScrollInterval,
      scrollableAncestors,
      sortedScrollableAncestors,
      scrollableAncestorRects,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(threshold)
    ]
  );
}
const defaultScrollIntent = {
  x: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  },
  y: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  }
};
function useScrollIntent(_ref2) {
  let {
    delta,
    disabled
  } = _ref2;
  const previousDelta = usePrevious(delta);
  return useLazyMemo((previousIntent) => {
    if (disabled || !previousDelta || !previousIntent) {
      return defaultScrollIntent;
    }
    const direction = {
      x: Math.sign(delta.x - previousDelta.x),
      y: Math.sign(delta.y - previousDelta.y)
    };
    return {
      x: {
        [Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
        [Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
      },
      y: {
        [Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
        [Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
      }
    };
  }, [disabled, delta, previousDelta]);
}
function useCachedNode(draggableNodes, id) {
  const draggableNode = id != null ? draggableNodes.get(id) : void 0;
  const node = draggableNode ? draggableNode.node.current : null;
  return useLazyMemo((cachedNode) => {
    var _ref;
    if (id == null) {
      return null;
    }
    return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
  }, [node, id]);
}
function useCombineActivators(sensors, getSyntheticHandler) {
  return React.useMemo(() => sensors.reduce((accumulator, sensor) => {
    const {
      sensor: Sensor
    } = sensor;
    const sensorActivators = Sensor.activators.map((activator) => ({
      eventName: activator.eventName,
      handler: getSyntheticHandler(activator.handler, sensor)
    }));
    return [...accumulator, ...sensorActivators];
  }, []), [sensors, getSyntheticHandler]);
}
var MeasuringStrategy;
(function(MeasuringStrategy2) {
  MeasuringStrategy2[MeasuringStrategy2["Always"] = 0] = "Always";
  MeasuringStrategy2[MeasuringStrategy2["BeforeDragging"] = 1] = "BeforeDragging";
  MeasuringStrategy2[MeasuringStrategy2["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));
var MeasuringFrequency;
(function(MeasuringFrequency2) {
  MeasuringFrequency2["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));
const defaultValue = /* @__PURE__ */ new Map();
function useDroppableMeasuring(containers, _ref) {
  let {
    dragging,
    dependencies,
    config
  } = _ref;
  const [queue, setQueue] = React.useState(null);
  const {
    frequency,
    measure,
    strategy
  } = config;
  const containersRef = React.useRef(containers);
  const disabled = isDisabled();
  const disabledRef = useLatestValue(disabled);
  const measureDroppableContainers = React.useCallback(function(ids2) {
    if (ids2 === void 0) {
      ids2 = [];
    }
    if (disabledRef.current) {
      return;
    }
    setQueue((value) => {
      if (value === null) {
        return ids2;
      }
      return value.concat(ids2.filter((id) => !value.includes(id)));
    });
  }, [disabledRef]);
  const timeoutId = React.useRef(null);
  const droppableRects = useLazyMemo((previousValue) => {
    if (disabled && !dragging) {
      return defaultValue;
    }
    if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
      const map = /* @__PURE__ */ new Map();
      for (let container of containers) {
        if (!container) {
          continue;
        }
        if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
          map.set(container.id, container.rect.current);
          continue;
        }
        const node = container.node.current;
        const rect = node ? new Rect(measure(node), node) : null;
        container.rect.current = rect;
        if (rect) {
          map.set(container.id, rect);
        }
      }
      return map;
    }
    return previousValue;
  }, [containers, queue, dragging, disabled, measure]);
  React.useEffect(() => {
    containersRef.current = containers;
  }, [containers]);
  React.useEffect(
    () => {
      if (disabled) {
        return;
      }
      measureDroppableContainers();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dragging, disabled]
  );
  React.useEffect(
    () => {
      if (queue && queue.length > 0) {
        setQueue(null);
      }
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(queue)]
  );
  React.useEffect(
    () => {
      if (disabled || typeof frequency !== "number" || timeoutId.current !== null) {
        return;
      }
      timeoutId.current = setTimeout(() => {
        measureDroppableContainers();
        timeoutId.current = null;
      }, frequency);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [frequency, disabled, measureDroppableContainers, ...dependencies]
  );
  return {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled: queue != null
  };
  function isDisabled() {
    switch (strategy) {
      case MeasuringStrategy.Always:
        return false;
      case MeasuringStrategy.BeforeDragging:
        return dragging;
      default:
        return !dragging;
    }
  }
}
function useInitialValue(value, computeFn) {
  return useLazyMemo((previousValue) => {
    if (!value) {
      return null;
    }
    if (previousValue) {
      return previousValue;
    }
    return typeof computeFn === "function" ? computeFn(value) : value;
  }, [computeFn, value]);
}
function useInitialRect(node, measure) {
  return useInitialValue(node, measure);
}
function useMutationObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleMutations = useEvent(callback);
  const mutationObserver = React.useMemo(() => {
    if (disabled || typeof window === "undefined" || typeof window.MutationObserver === "undefined") {
      return void 0;
    }
    const {
      MutationObserver
    } = window;
    return new MutationObserver(handleMutations);
  }, [handleMutations, disabled]);
  React.useEffect(() => {
    return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
  }, [mutationObserver]);
  return mutationObserver;
}
function useResizeObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleResize = useEvent(callback);
  const resizeObserver = React.useMemo(
    () => {
      if (disabled || typeof window === "undefined" || typeof window.ResizeObserver === "undefined") {
        return void 0;
      }
      const {
        ResizeObserver
      } = window;
      return new ResizeObserver(handleResize);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disabled]
  );
  React.useEffect(() => {
    return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
  }, [resizeObserver]);
  return resizeObserver;
}
function defaultMeasure(element) {
  return new Rect(getClientRect(element), element);
}
function useRect(element, measure, fallbackRect) {
  if (measure === void 0) {
    measure = defaultMeasure;
  }
  const [rect, setRect] = React.useState(null);
  function measureRect() {
    setRect((currentRect) => {
      if (!element) {
        return null;
      }
      if (element.isConnected === false) {
        var _ref;
        return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
      }
      const newRect = measure(element);
      if (JSON.stringify(currentRect) === JSON.stringify(newRect)) {
        return currentRect;
      }
      return newRect;
    });
  }
  const mutationObserver = useMutationObserver({
    callback(records) {
      if (!element) {
        return;
      }
      for (const record of records) {
        const {
          type: type2,
          target
        } = record;
        if (type2 === "childList" && target instanceof HTMLElement && target.contains(element)) {
          measureRect();
          break;
        }
      }
    }
  });
  const resizeObserver = useResizeObserver({
    callback: measureRect
  });
  useIsomorphicLayoutEffect(() => {
    measureRect();
    if (element) {
      resizeObserver == null ? void 0 : resizeObserver.observe(element);
      mutationObserver == null ? void 0 : mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    } else {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      mutationObserver == null ? void 0 : mutationObserver.disconnect();
    }
  }, [element]);
  return rect;
}
function useRectDelta(rect) {
  const initialRect = useInitialValue(rect);
  return getRectDelta(rect, initialRect);
}
const defaultValue$1 = [];
function useScrollableAncestors(node) {
  const previousNode = React.useRef(node);
  const ancestors = useLazyMemo((previousValue) => {
    if (!node) {
      return defaultValue$1;
    }
    if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
      return previousValue;
    }
    return getScrollableAncestors(node);
  }, [node]);
  React.useEffect(() => {
    previousNode.current = node;
  }, [node]);
  return ancestors;
}
function useScrollOffsets(elements) {
  const [scrollCoordinates, setScrollCoordinates] = React.useState(null);
  const prevElements = React.useRef(elements);
  const handleScroll = React.useCallback((event) => {
    const scrollingElement = getScrollableElement(event.target);
    if (!scrollingElement) {
      return;
    }
    setScrollCoordinates((scrollCoordinates2) => {
      if (!scrollCoordinates2) {
        return null;
      }
      scrollCoordinates2.set(scrollingElement, getScrollCoordinates(scrollingElement));
      return new Map(scrollCoordinates2);
    });
  }, []);
  React.useEffect(() => {
    const previousElements = prevElements.current;
    if (elements !== previousElements) {
      cleanup(previousElements);
      const entries = elements.map((element) => {
        const scrollableElement = getScrollableElement(element);
        if (scrollableElement) {
          scrollableElement.addEventListener("scroll", handleScroll, {
            passive: true
          });
          return [scrollableElement, getScrollCoordinates(scrollableElement)];
        }
        return null;
      }).filter((entry) => entry != null);
      setScrollCoordinates(entries.length ? new Map(entries) : null);
      prevElements.current = elements;
    }
    return () => {
      cleanup(elements);
      cleanup(previousElements);
    };
    function cleanup(elements2) {
      elements2.forEach((element) => {
        const scrollableElement = getScrollableElement(element);
        scrollableElement == null ? void 0 : scrollableElement.removeEventListener("scroll", handleScroll);
      });
    }
  }, [handleScroll, elements]);
  return React.useMemo(() => {
    if (elements.length) {
      return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => add(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
    }
    return defaultCoordinates;
  }, [elements, scrollCoordinates]);
}
function useScrollOffsetsDelta(scrollOffsets, dependencies) {
  if (dependencies === void 0) {
    dependencies = [];
  }
  const initialScrollOffsets = React.useRef(null);
  React.useEffect(
    () => {
      initialScrollOffsets.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );
  React.useEffect(() => {
    const hasScrollOffsets = scrollOffsets !== defaultCoordinates;
    if (hasScrollOffsets && !initialScrollOffsets.current) {
      initialScrollOffsets.current = scrollOffsets;
    }
    if (!hasScrollOffsets && initialScrollOffsets.current) {
      initialScrollOffsets.current = null;
    }
  }, [scrollOffsets]);
  return initialScrollOffsets.current ? subtract(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}
function useSensorSetup(sensors) {
  React.useEffect(
    () => {
      if (!canUseDOM) {
        return;
      }
      const teardownFns = sensors.map((_ref) => {
        let {
          sensor
        } = _ref;
        return sensor.setup == null ? void 0 : sensor.setup();
      });
      return () => {
        for (const teardown of teardownFns) {
          teardown == null ? void 0 : teardown();
        }
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sensors.map((_ref2) => {
      let {
        sensor
      } = _ref2;
      return sensor;
    })
  );
}
function useSyntheticListeners(listeners, id) {
  return React.useMemo(() => {
    return listeners.reduce((acc, _ref) => {
      let {
        eventName,
        handler
      } = _ref;
      acc[eventName] = (event) => {
        handler(event, id);
      };
      return acc;
    }, {});
  }, [listeners, id]);
}
function useWindowRect(element) {
  return React.useMemo(() => element ? getWindowClientRect(element) : null, [element]);
}
const defaultValue$2 = [];
function useRects(elements, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }
  const [firstElement] = elements;
  const windowRect = useWindowRect(firstElement ? getWindow(firstElement) : null);
  const [rects, setRects] = React.useState(defaultValue$2);
  function measureRects() {
    setRects(() => {
      if (!elements.length) {
        return defaultValue$2;
      }
      return elements.map((element) => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
    });
  }
  const resizeObserver = useResizeObserver({
    callback: measureRects
  });
  useIsomorphicLayoutEffect(() => {
    resizeObserver == null ? void 0 : resizeObserver.disconnect();
    measureRects();
    elements.forEach((element) => resizeObserver == null ? void 0 : resizeObserver.observe(element));
  }, [elements]);
  return rects;
}
function getMeasurableNode(node) {
  if (!node) {
    return null;
  }
  if (node.children.length > 1) {
    return node;
  }
  const firstChild = node.children[0];
  return isHTMLElement(firstChild) ? firstChild : node;
}
function useDragOverlayMeasuring(_ref) {
  let {
    measure
  } = _ref;
  const [rect, setRect] = React.useState(null);
  const handleResize = React.useCallback((entries) => {
    for (const {
      target
    } of entries) {
      if (isHTMLElement(target)) {
        setRect((rect2) => {
          const newRect = measure(target);
          return rect2 ? {
            ...rect2,
            width: newRect.width,
            height: newRect.height
          } : newRect;
        });
        break;
      }
    }
  }, [measure]);
  const resizeObserver = useResizeObserver({
    callback: handleResize
  });
  const handleNodeChange = React.useCallback((element) => {
    const node = getMeasurableNode(element);
    resizeObserver == null ? void 0 : resizeObserver.disconnect();
    if (node) {
      resizeObserver == null ? void 0 : resizeObserver.observe(node);
    }
    setRect(node ? measure(node) : null);
  }, [measure, resizeObserver]);
  const [nodeRef, setRef] = useNodeRef(handleNodeChange);
  return React.useMemo(() => ({
    nodeRef,
    rect,
    setRef
  }), [rect, nodeRef, setRef]);
}
const defaultSensors = [{
  sensor: PointerSensor,
  options: {}
}, {
  sensor: KeyboardSensor,
  options: {}
}];
const defaultData = {
  current: {}
};
const defaultMeasuringConfiguration = {
  draggable: {
    measure: getTransformAgnosticClientRect
  },
  droppable: {
    measure: getTransformAgnosticClientRect,
    strategy: MeasuringStrategy.WhileDragging,
    frequency: MeasuringFrequency.Optimized
  },
  dragOverlay: {
    measure: getClientRect
  }
};
class DroppableContainersMap extends Map {
  get(id) {
    var _super$get;
    return id != null ? (_super$get = super.get(id)) != null ? _super$get : void 0 : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((_ref) => {
      let {
        disabled
      } = _ref;
      return !disabled;
    });
  }
  getNodeFor(id) {
    var _this$get$node$curren, _this$get;
    return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : void 0;
  }
}
const defaultPublicContext = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new DroppableContainersMap(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: noop
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: defaultMeasuringConfiguration,
  measureDroppableContainers: noop,
  windowRect: null,
  measuringScheduled: false
};
const defaultInternalContext = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: noop,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: noop
};
const InternalContext = /* @__PURE__ */ React.createContext(defaultInternalContext);
const PublicContext = /* @__PURE__ */ React.createContext(defaultPublicContext);
function getInitialState() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new DroppableContainersMap()
    }
  };
}
function reducer(state, action) {
  switch (action.type) {
    case Action.DragStart:
      return {
        ...state,
        draggable: {
          ...state.draggable,
          initialCoordinates: action.initialCoordinates,
          active: action.active
        }
      };
    case Action.DragMove:
      if (state.draggable.active == null) {
        return state;
      }
      return {
        ...state,
        draggable: {
          ...state.draggable,
          translate: {
            x: action.coordinates.x - state.draggable.initialCoordinates.x,
            y: action.coordinates.y - state.draggable.initialCoordinates.y
          }
        }
      };
    case Action.DragEnd:
    case Action.DragCancel:
      return {
        ...state,
        draggable: {
          ...state.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case Action.RegisterDroppable: {
      const {
        element
      } = action;
      const {
        id
      } = element;
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.set(id, element);
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    case Action.SetDroppableDisabled: {
      const {
        id,
        key,
        disabled
      } = action;
      const element = state.droppable.containers.get(id);
      if (!element || key !== element.key) {
        return state;
      }
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.set(id, {
        ...element,
        disabled
      });
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    case Action.UnregisterDroppable: {
      const {
        id,
        key
      } = action;
      const element = state.droppable.containers.get(id);
      if (!element || key !== element.key) {
        return state;
      }
      const containers = new DroppableContainersMap(state.droppable.containers);
      containers.delete(id);
      return {
        ...state,
        droppable: {
          ...state.droppable,
          containers
        }
      };
    }
    default: {
      return state;
    }
  }
}
function RestoreFocus(_ref) {
  let {
    disabled
  } = _ref;
  const {
    active,
    activatorEvent,
    draggableNodes
  } = React.useContext(InternalContext);
  const previousActivatorEvent = usePrevious(activatorEvent);
  const previousActiveId = usePrevious(active == null ? void 0 : active.id);
  React.useEffect(() => {
    if (disabled) {
      return;
    }
    if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
      if (!isKeyboardEvent(previousActivatorEvent)) {
        return;
      }
      if (document.activeElement === previousActivatorEvent.target) {
        return;
      }
      const draggableNode = draggableNodes.get(previousActiveId);
      if (!draggableNode) {
        return;
      }
      const {
        activatorNode,
        node
      } = draggableNode;
      if (!activatorNode.current && !node.current) {
        return;
      }
      requestAnimationFrame(() => {
        for (const element of [activatorNode.current, node.current]) {
          if (!element) {
            continue;
          }
          const focusableNode = findFirstFocusableNode(element);
          if (focusableNode) {
            focusableNode.focus();
            break;
          }
        }
      });
    }
  }, [activatorEvent, disabled, draggableNodes, previousActiveId, previousActivatorEvent]);
  return null;
}
function applyModifiers(modifiers, _ref) {
  let {
    transform,
    ...args
  } = _ref;
  return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
    return modifier({
      transform: accumulator,
      ...args
    });
  }, transform) : transform;
}
function useMeasuringConfiguration(config) {
  return React.useMemo(
    () => ({
      draggable: {
        ...defaultMeasuringConfiguration.draggable,
        ...config == null ? void 0 : config.draggable
      },
      droppable: {
        ...defaultMeasuringConfiguration.droppable,
        ...config == null ? void 0 : config.droppable
      },
      dragOverlay: {
        ...defaultMeasuringConfiguration.dragOverlay,
        ...config == null ? void 0 : config.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [config == null ? void 0 : config.draggable, config == null ? void 0 : config.droppable, config == null ? void 0 : config.dragOverlay]
  );
}
function useLayoutShiftScrollCompensation(_ref) {
  let {
    activeNode,
    measure,
    initialRect,
    config = true
  } = _ref;
  const initialized = React.useRef(false);
  const {
    x,
    y
  } = typeof config === "boolean" ? {
    x: config,
    y: config
  } : config;
  useIsomorphicLayoutEffect(() => {
    const disabled = !x && !y;
    if (disabled || !activeNode) {
      initialized.current = false;
      return;
    }
    if (initialized.current || !initialRect) {
      return;
    }
    const node = activeNode == null ? void 0 : activeNode.node.current;
    if (!node || node.isConnected === false) {
      return;
    }
    const rect = measure(node);
    const rectDelta = getRectDelta(rect, initialRect);
    if (!x) {
      rectDelta.x = 0;
    }
    if (!y) {
      rectDelta.y = 0;
    }
    initialized.current = true;
    if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
      const firstScrollableAncestor = getFirstScrollableAncestor(node);
      if (firstScrollableAncestor) {
        firstScrollableAncestor.scrollBy({
          top: rectDelta.y,
          left: rectDelta.x
        });
      }
    }
  }, [activeNode, x, y, initialRect, measure]);
}
const ActiveDraggableContext = /* @__PURE__ */ React.createContext({
  ...defaultCoordinates,
  scaleX: 1,
  scaleY: 1
});
var Status;
(function(Status2) {
  Status2[Status2["Uninitialized"] = 0] = "Uninitialized";
  Status2[Status2["Initializing"] = 1] = "Initializing";
  Status2[Status2["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));
const DndContext = /* @__PURE__ */ React.memo(function DndContext2(_ref) {
  var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;
  let {
    id,
    accessibility,
    autoScroll = true,
    children,
    sensors = defaultSensors,
    collisionDetection = rectIntersection,
    measuring,
    modifiers,
    ...props
  } = _ref;
  const store = React.useReducer(reducer, void 0, getInitialState);
  const [state, dispatch] = store;
  const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
  const [status, setStatus] = React.useState(Status.Uninitialized);
  const isInitialized = status === Status.Initialized;
  const {
    draggable: {
      active: activeId,
      nodes: draggableNodes,
      translate
    },
    droppable: {
      containers: droppableContainers
    }
  } = state;
  const node = activeId != null ? draggableNodes.get(activeId) : null;
  const activeRects = React.useRef({
    initial: null,
    translated: null
  });
  const active = React.useMemo(() => {
    var _node$data;
    return activeId != null ? {
      id: activeId,
      // It's possible for the active node to unmount while dragging
      data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
      rect: activeRects
    } : null;
  }, [activeId, node]);
  const activeRef = React.useRef(null);
  const [activeSensor, setActiveSensor] = React.useState(null);
  const [activatorEvent, setActivatorEvent] = React.useState(null);
  const latestProps = useLatestValue(props, Object.values(props));
  const draggableDescribedById = useUniqueId("DndDescribedBy", id);
  const enabledDroppableContainers = React.useMemo(() => droppableContainers.getEnabled(), [droppableContainers]);
  const measuringConfiguration = useMeasuringConfiguration(measuring);
  const {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled
  } = useDroppableMeasuring(enabledDroppableContainers, {
    dragging: isInitialized,
    dependencies: [translate.x, translate.y],
    config: measuringConfiguration.droppable
  });
  const activeNode = useCachedNode(draggableNodes, activeId);
  const activationCoordinates = React.useMemo(() => activatorEvent ? getEventCoordinates(activatorEvent) : null, [activatorEvent]);
  const autoScrollOptions = getAutoScrollerOptions();
  const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
  useLayoutShiftScrollCompensation({
    activeNode: activeId != null ? draggableNodes.get(activeId) : null,
    config: autoScrollOptions.layoutShiftCompensation,
    initialRect: initialActiveNodeRect,
    measure: measuringConfiguration.draggable.measure
  });
  const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
  const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
  const sensorContext = React.useRef({
    activatorEvent: null,
    active: null,
    activeNode,
    collisionRect: null,
    collisions: null,
    droppableRects,
    draggableNodes,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  });
  const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
  const dragOverlay = useDragOverlayMeasuring({
    measure: measuringConfiguration.dragOverlay.measure
  });
  const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
  const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
  const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect);
  const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect);
  const windowRect = useWindowRect(draggingNode ? getWindow(draggingNode) : null);
  const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
  const scrollableAncestorRects = useRects(scrollableAncestors);
  const modifiedTranslate = applyModifiers(modifiers, {
    transform: {
      x: translate.x - nodeRectDelta.x,
      y: translate.y - nodeRectDelta.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect,
    over: sensorContext.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  });
  const pointerCoordinates = activationCoordinates ? add(activationCoordinates, translate) : null;
  const scrollOffsets = useScrollOffsets(scrollableAncestors);
  const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets);
  const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
  const scrollAdjustedTranslate = add(modifiedTranslate, scrollAdjustment);
  const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
  const collisions = active && collisionRect ? collisionDetection({
    active,
    collisionRect,
    droppableRects,
    droppableContainers: enabledDroppableContainers,
    pointerCoordinates
  }) : null;
  const overId = getFirstCollision(collisions, "id");
  const [over, setOver] = React.useState(null);
  const appliedTranslate = usesDragOverlay ? modifiedTranslate : add(modifiedTranslate, activeNodeScrollDelta);
  const transform = adjustScale(appliedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
  const activeSensorRef = React.useRef(null);
  const instantiateSensor = React.useCallback(
    (event, _ref2) => {
      let {
        sensor: Sensor,
        options
      } = _ref2;
      if (activeRef.current == null) {
        return;
      }
      const activeNode2 = draggableNodes.get(activeRef.current);
      if (!activeNode2) {
        return;
      }
      const activatorEvent2 = event.nativeEvent;
      const sensorInstance = new Sensor({
        active: activeRef.current,
        activeNode: activeNode2,
        event: activatorEvent2,
        options,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: sensorContext,
        onAbort(id2) {
          const draggableNode = draggableNodes.get(id2);
          if (!draggableNode) {
            return;
          }
          const {
            onDragAbort
          } = latestProps.current;
          const event2 = {
            id: id2
          };
          onDragAbort == null ? void 0 : onDragAbort(event2);
          dispatchMonitorEvent({
            type: "onDragAbort",
            event: event2
          });
        },
        onPending(id2, constraint, initialCoordinates, offset) {
          const draggableNode = draggableNodes.get(id2);
          if (!draggableNode) {
            return;
          }
          const {
            onDragPending
          } = latestProps.current;
          const event2 = {
            id: id2,
            constraint,
            initialCoordinates,
            offset
          };
          onDragPending == null ? void 0 : onDragPending(event2);
          dispatchMonitorEvent({
            type: "onDragPending",
            event: event2
          });
        },
        onStart(initialCoordinates) {
          const id2 = activeRef.current;
          if (id2 == null) {
            return;
          }
          const draggableNode = draggableNodes.get(id2);
          if (!draggableNode) {
            return;
          }
          const {
            onDragStart
          } = latestProps.current;
          const event2 = {
            activatorEvent: activatorEvent2,
            active: {
              id: id2,
              data: draggableNode.data,
              rect: activeRects
            }
          };
          require$$2.unstable_batchedUpdates(() => {
            onDragStart == null ? void 0 : onDragStart(event2);
            setStatus(Status.Initializing);
            dispatch({
              type: Action.DragStart,
              initialCoordinates,
              active: id2
            });
            dispatchMonitorEvent({
              type: "onDragStart",
              event: event2
            });
            setActiveSensor(activeSensorRef.current);
            setActivatorEvent(activatorEvent2);
          });
        },
        onMove(coordinates) {
          dispatch({
            type: Action.DragMove,
            coordinates
          });
        },
        onEnd: createHandler(Action.DragEnd),
        onCancel: createHandler(Action.DragCancel)
      });
      activeSensorRef.current = sensorInstance;
      function createHandler(type2) {
        return async function handler() {
          const {
            active: active2,
            collisions: collisions2,
            over: over2,
            scrollAdjustedTranslate: scrollAdjustedTranslate2
          } = sensorContext.current;
          let event2 = null;
          if (active2 && scrollAdjustedTranslate2) {
            const {
              cancelDrop
            } = latestProps.current;
            event2 = {
              activatorEvent: activatorEvent2,
              active: active2,
              collisions: collisions2,
              delta: scrollAdjustedTranslate2,
              over: over2
            };
            if (type2 === Action.DragEnd && typeof cancelDrop === "function") {
              const shouldCancel = await Promise.resolve(cancelDrop(event2));
              if (shouldCancel) {
                type2 = Action.DragCancel;
              }
            }
          }
          activeRef.current = null;
          require$$2.unstable_batchedUpdates(() => {
            dispatch({
              type: type2
            });
            setStatus(Status.Uninitialized);
            setOver(null);
            setActiveSensor(null);
            setActivatorEvent(null);
            activeSensorRef.current = null;
            const eventName = type2 === Action.DragEnd ? "onDragEnd" : "onDragCancel";
            if (event2) {
              const handler2 = latestProps.current[eventName];
              handler2 == null ? void 0 : handler2(event2);
              dispatchMonitorEvent({
                type: eventName,
                event: event2
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draggableNodes]
  );
  const bindActivatorToSensorInstantiator = React.useCallback((handler, sensor) => {
    return (event, active2) => {
      const nativeEvent = event.nativeEvent;
      const activeDraggableNode = draggableNodes.get(active2);
      if (
        // Another sensor is already instantiating
        activeRef.current !== null || // No active draggable
        !activeDraggableNode || // Event has already been captured
        nativeEvent.dndKit || nativeEvent.defaultPrevented
      ) {
        return;
      }
      const activationContext = {
        active: activeDraggableNode
      };
      const shouldActivate = handler(event, sensor.options, activationContext);
      if (shouldActivate === true) {
        nativeEvent.dndKit = {
          capturedBy: sensor.sensor
        };
        activeRef.current = active2;
        instantiateSensor(event, sensor);
      }
    };
  }, [draggableNodes, instantiateSensor]);
  const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
  useSensorSetup(sensors);
  useIsomorphicLayoutEffect(() => {
    if (activeNodeRect && status === Status.Initializing) {
      setStatus(Status.Initialized);
    }
  }, [activeNodeRect, status]);
  React.useEffect(
    () => {
      const {
        onDragMove
      } = latestProps.current;
      const {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        over: over2
      } = sensorContext.current;
      if (!active2 || !activatorEvent2) {
        return;
      }
      const event = {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        delta: {
          x: scrollAdjustedTranslate.x,
          y: scrollAdjustedTranslate.y
        },
        over: over2
      };
      require$$2.unstable_batchedUpdates(() => {
        onDragMove == null ? void 0 : onDragMove(event);
        dispatchMonitorEvent({
          type: "onDragMove",
          event
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]
  );
  React.useEffect(
    () => {
      const {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        droppableContainers: droppableContainers2,
        scrollAdjustedTranslate: scrollAdjustedTranslate2
      } = sensorContext.current;
      if (!active2 || activeRef.current == null || !activatorEvent2 || !scrollAdjustedTranslate2) {
        return;
      }
      const {
        onDragOver
      } = latestProps.current;
      const overContainer = droppableContainers2.get(overId);
      const over2 = overContainer && overContainer.rect.current ? {
        id: overContainer.id,
        rect: overContainer.rect.current,
        data: overContainer.data,
        disabled: overContainer.disabled
      } : null;
      const event = {
        active: active2,
        activatorEvent: activatorEvent2,
        collisions: collisions2,
        delta: {
          x: scrollAdjustedTranslate2.x,
          y: scrollAdjustedTranslate2.y
        },
        over: over2
      };
      require$$2.unstable_batchedUpdates(() => {
        setOver(over2);
        onDragOver == null ? void 0 : onDragOver(event);
        dispatchMonitorEvent({
          type: "onDragOver",
          event
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [overId]
  );
  useIsomorphicLayoutEffect(() => {
    sensorContext.current = {
      activatorEvent,
      active,
      activeNode,
      collisionRect,
      collisions,
      droppableRects,
      draggableNodes,
      draggingNode,
      draggingNodeRect,
      droppableContainers,
      over,
      scrollableAncestors,
      scrollAdjustedTranslate
    };
    activeRects.current = {
      initial: draggingNodeRect,
      translated: collisionRect
    };
  }, [active, activeNode, collisions, collisionRect, draggableNodes, draggingNode, draggingNodeRect, droppableRects, droppableContainers, over, scrollableAncestors, scrollAdjustedTranslate]);
  useAutoScroller({
    ...autoScrollOptions,
    delta: translate,
    draggingRect: collisionRect,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects
  });
  const publicContext = React.useMemo(() => {
    const context = {
      active,
      activeNode,
      activeNodeRect,
      activatorEvent,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringConfiguration,
      measuringScheduled,
      windowRect
    };
    return context;
  }, [active, activeNode, activeNodeRect, activatorEvent, collisions, containerNodeRect, dragOverlay, draggableNodes, droppableContainers, droppableRects, over, measureDroppableContainers, scrollableAncestors, scrollableAncestorRects, measuringConfiguration, measuringScheduled, windowRect]);
  const internalContext = React.useMemo(() => {
    const context = {
      activatorEvent,
      activators,
      active,
      activeNodeRect,
      ariaDescribedById: {
        draggable: draggableDescribedById
      },
      dispatch,
      draggableNodes,
      over,
      measureDroppableContainers
    };
    return context;
  }, [activatorEvent, activators, active, activeNodeRect, dispatch, draggableDescribedById, draggableNodes, over, measureDroppableContainers]);
  return React.createElement(DndMonitorContext.Provider, {
    value: registerMonitorListener
  }, React.createElement(InternalContext.Provider, {
    value: internalContext
  }, React.createElement(PublicContext.Provider, {
    value: publicContext
  }, React.createElement(ActiveDraggableContext.Provider, {
    value: transform
  }, children)), React.createElement(RestoreFocus, {
    disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false
  })), React.createElement(Accessibility, {
    ...accessibility,
    hiddenTextDescribedById: draggableDescribedById
  }));
  function getAutoScrollerOptions() {
    const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
    const autoScrollGloballyDisabled = typeof autoScroll === "object" ? autoScroll.enabled === false : autoScroll === false;
    const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;
    if (typeof autoScroll === "object") {
      return {
        ...autoScroll,
        enabled
      };
    }
    return {
      enabled
    };
  }
});
const NullContext = /* @__PURE__ */ React.createContext(null);
const defaultRole = "button";
const ID_PREFIX$1 = "Draggable";
function useDraggable(_ref) {
  let {
    id,
    data,
    disabled = false,
    attributes
  } = _ref;
  const key = useUniqueId(ID_PREFIX$1);
  const {
    activators,
    activatorEvent,
    active,
    activeNodeRect,
    ariaDescribedById,
    draggableNodes,
    over
  } = React.useContext(InternalContext);
  const {
    role = defaultRole,
    roleDescription = "draggable",
    tabIndex = 0
  } = attributes != null ? attributes : {};
  const isDragging = (active == null ? void 0 : active.id) === id;
  const transform = React.useContext(isDragging ? ActiveDraggableContext : NullContext);
  const [node, setNodeRef] = useNodeRef();
  const [activatorNode, setActivatorNodeRef] = useNodeRef();
  const listeners = useSyntheticListeners(activators, id);
  const dataRef = useLatestValue(data);
  useIsomorphicLayoutEffect(
    () => {
      draggableNodes.set(id, {
        id,
        key,
        node,
        activatorNode,
        data: dataRef
      });
      return () => {
        const node2 = draggableNodes.get(id);
        if (node2 && node2.key === key) {
          draggableNodes.delete(id);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draggableNodes, id]
  );
  const memoizedAttributes = React.useMemo(() => ({
    role,
    tabIndex,
    "aria-disabled": disabled,
    "aria-pressed": isDragging && role === defaultRole ? true : void 0,
    "aria-roledescription": roleDescription,
    "aria-describedby": ariaDescribedById.draggable
  }), [disabled, role, tabIndex, isDragging, roleDescription, ariaDescribedById.draggable]);
  return {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: memoizedAttributes,
    isDragging,
    listeners: disabled ? void 0 : listeners,
    node,
    over,
    setNodeRef,
    setActivatorNodeRef,
    transform
  };
}
function useDndContext() {
  return React.useContext(PublicContext);
}
const ID_PREFIX$1$1 = "Droppable";
const defaultResizeObserverConfig = {
  timeout: 25
};
function useDroppable(_ref) {
  let {
    data,
    disabled = false,
    id,
    resizeObserverConfig
  } = _ref;
  const key = useUniqueId(ID_PREFIX$1$1);
  const {
    active,
    dispatch,
    over,
    measureDroppableContainers
  } = React.useContext(InternalContext);
  const previous = React.useRef({
    disabled
  });
  const resizeObserverConnected = React.useRef(false);
  const rect = React.useRef(null);
  const callbackId = React.useRef(null);
  const {
    disabled: resizeObserverDisabled,
    updateMeasurementsFor,
    timeout: resizeObserverTimeout
  } = {
    ...defaultResizeObserverConfig,
    ...resizeObserverConfig
  };
  const ids2 = useLatestValue(updateMeasurementsFor != null ? updateMeasurementsFor : id);
  const handleResize = React.useCallback(
    () => {
      if (!resizeObserverConnected.current) {
        resizeObserverConnected.current = true;
        return;
      }
      if (callbackId.current != null) {
        clearTimeout(callbackId.current);
      }
      callbackId.current = setTimeout(() => {
        measureDroppableContainers(Array.isArray(ids2.current) ? ids2.current : [ids2.current]);
        callbackId.current = null;
      }, resizeObserverTimeout);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [resizeObserverTimeout]
  );
  const resizeObserver = useResizeObserver({
    callback: handleResize,
    disabled: resizeObserverDisabled || !active
  });
  const handleNodeChange = React.useCallback((newElement, previousElement) => {
    if (!resizeObserver) {
      return;
    }
    if (previousElement) {
      resizeObserver.unobserve(previousElement);
      resizeObserverConnected.current = false;
    }
    if (newElement) {
      resizeObserver.observe(newElement);
    }
  }, [resizeObserver]);
  const [nodeRef, setNodeRef] = useNodeRef(handleNodeChange);
  const dataRef = useLatestValue(data);
  React.useEffect(() => {
    if (!resizeObserver || !nodeRef.current) {
      return;
    }
    resizeObserver.disconnect();
    resizeObserverConnected.current = false;
    resizeObserver.observe(nodeRef.current);
  }, [nodeRef, resizeObserver]);
  React.useEffect(
    () => {
      dispatch({
        type: Action.RegisterDroppable,
        element: {
          id,
          key,
          disabled,
          node: nodeRef,
          rect,
          data: dataRef
        }
      });
      return () => dispatch({
        type: Action.UnregisterDroppable,
        key,
        id
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );
  React.useEffect(() => {
    if (disabled !== previous.current.disabled) {
      dispatch({
        type: Action.SetDroppableDisabled,
        id,
        key,
        disabled
      });
      previous.current.disabled = disabled;
    }
  }, [id, key, disabled, dispatch]);
  return {
    active,
    rect,
    isOver: (over == null ? void 0 : over.id) === id,
    node: nodeRef,
    over,
    setNodeRef
  };
}
function arrayMove(array, from, to) {
  const newArray = array.slice();
  newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}
function getSortedRects(items, rects) {
  return items.reduce((accumulator, id, index2) => {
    const rect = rects.get(id);
    if (rect) {
      accumulator[index2] = rect;
    }
    return accumulator;
  }, Array(items.length));
}
function isValidIndex(index2) {
  return index2 !== null && index2 >= 0;
}
function itemsEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
function normalizeDisabled(disabled) {
  if (typeof disabled === "boolean") {
    return {
      draggable: disabled,
      droppable: disabled
    };
  }
  return disabled;
}
const rectSortingStrategy = (_ref) => {
  let {
    rects,
    activeIndex,
    overIndex,
    index: index2
  } = _ref;
  const newRects = arrayMove(rects, overIndex, activeIndex);
  const oldRect = rects[index2];
  const newRect = newRects[index2];
  if (!newRect || !oldRect) {
    return null;
  }
  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};
const defaultScale$1 = {
  scaleX: 1,
  scaleY: 1
};
const verticalListSortingStrategy = (_ref) => {
  var _rects$activeIndex;
  let {
    activeIndex,
    activeNodeRect: fallbackActiveRect,
    index: index2,
    rects,
    overIndex
  } = _ref;
  const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;
  if (!activeNodeRect) {
    return null;
  }
  if (index2 === activeIndex) {
    const overIndexRect = rects[overIndex];
    if (!overIndexRect) {
      return null;
    }
    return {
      x: 0,
      y: activeIndex < overIndex ? overIndexRect.top + overIndexRect.height - (activeNodeRect.top + activeNodeRect.height) : overIndexRect.top - activeNodeRect.top,
      ...defaultScale$1
    };
  }
  const itemGap = getItemGap$1(rects, index2, activeIndex);
  if (index2 > activeIndex && index2 <= overIndex) {
    return {
      x: 0,
      y: -activeNodeRect.height - itemGap,
      ...defaultScale$1
    };
  }
  if (index2 < activeIndex && index2 >= overIndex) {
    return {
      x: 0,
      y: activeNodeRect.height + itemGap,
      ...defaultScale$1
    };
  }
  return {
    x: 0,
    y: 0,
    ...defaultScale$1
  };
};
function getItemGap$1(clientRects, index2, activeIndex) {
  const currentRect = clientRects[index2];
  const previousRect = clientRects[index2 - 1];
  const nextRect = clientRects[index2 + 1];
  if (!currentRect) {
    return 0;
  }
  if (activeIndex < index2) {
    return previousRect ? currentRect.top - (previousRect.top + previousRect.height) : nextRect ? nextRect.top - (currentRect.top + currentRect.height) : 0;
  }
  return nextRect ? nextRect.top - (currentRect.top + currentRect.height) : previousRect ? currentRect.top - (previousRect.top + previousRect.height) : 0;
}
const ID_PREFIX = "Sortable";
const Context = /* @__PURE__ */ React.createContext({
  activeIndex: -1,
  containerId: ID_PREFIX,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: rectSortingStrategy,
  disabled: {
    draggable: false,
    droppable: false
  }
});
function SortableContext(_ref) {
  let {
    children,
    id,
    items: userDefinedItems,
    strategy = rectSortingStrategy,
    disabled: disabledProp = false
  } = _ref;
  const {
    active,
    dragOverlay,
    droppableRects,
    over,
    measureDroppableContainers
  } = useDndContext();
  const containerId = useUniqueId(ID_PREFIX, id);
  const useDragOverlay = Boolean(dragOverlay.rect !== null);
  const items = React.useMemo(() => userDefinedItems.map((item) => typeof item === "object" && "id" in item ? item.id : item), [userDefinedItems]);
  const isDragging = active != null;
  const activeIndex = active ? items.indexOf(active.id) : -1;
  const overIndex = over ? items.indexOf(over.id) : -1;
  const previousItemsRef = React.useRef(items);
  const itemsHaveChanged = !itemsEqual(items, previousItemsRef.current);
  const disableTransforms = overIndex !== -1 && activeIndex === -1 || itemsHaveChanged;
  const disabled = normalizeDisabled(disabledProp);
  useIsomorphicLayoutEffect(() => {
    if (itemsHaveChanged && isDragging) {
      measureDroppableContainers(items);
    }
  }, [itemsHaveChanged, items, isDragging, measureDroppableContainers]);
  React.useEffect(() => {
    previousItemsRef.current = items;
  }, [items]);
  const contextValue = React.useMemo(
    () => ({
      activeIndex,
      containerId,
      disabled,
      disableTransforms,
      items,
      overIndex,
      useDragOverlay,
      sortedRects: getSortedRects(items, droppableRects),
      strategy
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeIndex, containerId, disabled.draggable, disabled.droppable, disableTransforms, items, overIndex, droppableRects, useDragOverlay, strategy]
  );
  return React.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
const defaultNewIndexGetter = (_ref) => {
  let {
    id,
    items,
    activeIndex,
    overIndex
  } = _ref;
  return arrayMove(items, activeIndex, overIndex).indexOf(id);
};
const defaultAnimateLayoutChanges = (_ref2) => {
  let {
    containerId,
    isSorting,
    wasDragging,
    index: index2,
    items,
    newIndex,
    previousItems,
    previousContainerId,
    transition
  } = _ref2;
  if (!transition || !wasDragging) {
    return false;
  }
  if (previousItems !== items && index2 === newIndex) {
    return false;
  }
  if (isSorting) {
    return true;
  }
  return newIndex !== index2 && containerId === previousContainerId;
};
const defaultTransition = {
  duration: 200,
  easing: "ease"
};
const transitionProperty = "transform";
const disabledTransition = /* @__PURE__ */ CSS.Transition.toString({
  property: transitionProperty,
  duration: 0,
  easing: "linear"
});
const defaultAttributes = {
  roleDescription: "sortable"
};
function useDerivedTransform(_ref) {
  let {
    disabled,
    index: index2,
    node,
    rect
  } = _ref;
  const [derivedTransform, setDerivedtransform] = React.useState(null);
  const previousIndex = React.useRef(index2);
  useIsomorphicLayoutEffect(() => {
    if (!disabled && index2 !== previousIndex.current && node.current) {
      const initial = rect.current;
      if (initial) {
        const current = getClientRect(node.current, {
          ignoreTransform: true
        });
        const delta = {
          x: initial.left - current.left,
          y: initial.top - current.top,
          scaleX: initial.width / current.width,
          scaleY: initial.height / current.height
        };
        if (delta.x || delta.y) {
          setDerivedtransform(delta);
        }
      }
    }
    if (index2 !== previousIndex.current) {
      previousIndex.current = index2;
    }
  }, [disabled, index2, node, rect]);
  React.useEffect(() => {
    if (derivedTransform) {
      setDerivedtransform(null);
    }
  }, [derivedTransform]);
  return derivedTransform;
}
function useSortable(_ref) {
  let {
    animateLayoutChanges = defaultAnimateLayoutChanges,
    attributes: userDefinedAttributes,
    disabled: localDisabled,
    data: customData,
    getNewIndex = defaultNewIndexGetter,
    id,
    strategy: localStrategy,
    resizeObserverConfig,
    transition = defaultTransition
  } = _ref;
  const {
    items,
    containerId,
    activeIndex,
    disabled: globalDisabled,
    disableTransforms,
    sortedRects,
    overIndex,
    useDragOverlay,
    strategy: globalStrategy
  } = React.useContext(Context);
  const disabled = normalizeLocalDisabled(localDisabled, globalDisabled);
  const index2 = items.indexOf(id);
  const data = React.useMemo(() => ({
    sortable: {
      containerId,
      index: index2,
      items
    },
    ...customData
  }), [containerId, customData, index2, items]);
  const itemsAfterCurrentSortable = React.useMemo(() => items.slice(items.indexOf(id)), [items, id]);
  const {
    rect,
    node,
    isOver,
    setNodeRef: setDroppableNodeRef
  } = useDroppable({
    id,
    data,
    disabled: disabled.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: itemsAfterCurrentSortable,
      ...resizeObserverConfig
    }
  });
  const {
    active,
    activatorEvent,
    activeNodeRect,
    attributes,
    setNodeRef: setDraggableNodeRef,
    listeners,
    isDragging,
    over,
    setActivatorNodeRef,
    transform
  } = useDraggable({
    id,
    data,
    attributes: {
      ...defaultAttributes,
      ...userDefinedAttributes
    },
    disabled: disabled.draggable
  });
  const setNodeRef = useCombinedRefs(setDroppableNodeRef, setDraggableNodeRef);
  const isSorting = Boolean(active);
  const displaceItem = isSorting && !disableTransforms && isValidIndex(activeIndex) && isValidIndex(overIndex);
  const shouldDisplaceDragSource = !useDragOverlay && isDragging;
  const dragSourceDisplacement = shouldDisplaceDragSource && displaceItem ? transform : null;
  const strategy = localStrategy != null ? localStrategy : globalStrategy;
  const finalTransform = displaceItem ? dragSourceDisplacement != null ? dragSourceDisplacement : strategy({
    rects: sortedRects,
    activeNodeRect,
    activeIndex,
    overIndex,
    index: index2
  }) : null;
  const newIndex = isValidIndex(activeIndex) && isValidIndex(overIndex) ? getNewIndex({
    id,
    items,
    activeIndex,
    overIndex
  }) : index2;
  const activeId = active == null ? void 0 : active.id;
  const previous = React.useRef({
    activeId,
    items,
    newIndex,
    containerId
  });
  const itemsHaveChanged = items !== previous.current.items;
  const shouldAnimateLayoutChanges = animateLayoutChanges({
    active,
    containerId,
    isDragging,
    isSorting,
    id,
    index: index2,
    items,
    newIndex: previous.current.newIndex,
    previousItems: previous.current.items,
    previousContainerId: previous.current.containerId,
    transition,
    wasDragging: previous.current.activeId != null
  });
  const derivedTransform = useDerivedTransform({
    disabled: !shouldAnimateLayoutChanges,
    index: index2,
    node,
    rect
  });
  React.useEffect(() => {
    if (isSorting && previous.current.newIndex !== newIndex) {
      previous.current.newIndex = newIndex;
    }
    if (containerId !== previous.current.containerId) {
      previous.current.containerId = containerId;
    }
    if (items !== previous.current.items) {
      previous.current.items = items;
    }
  }, [isSorting, newIndex, containerId, items]);
  React.useEffect(() => {
    if (activeId === previous.current.activeId) {
      return;
    }
    if (activeId != null && previous.current.activeId == null) {
      previous.current.activeId = activeId;
      return;
    }
    const timeoutId = setTimeout(() => {
      previous.current.activeId = activeId;
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [activeId]);
  return {
    active,
    activeIndex,
    attributes,
    data,
    rect,
    index: index2,
    newIndex,
    items,
    isOver,
    isSorting,
    isDragging,
    listeners,
    node,
    overIndex,
    over,
    setNodeRef,
    setActivatorNodeRef,
    setDroppableNodeRef,
    setDraggableNodeRef,
    transform: derivedTransform != null ? derivedTransform : finalTransform,
    transition: getTransition()
  };
  function getTransition() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      derivedTransform || // Or to prevent items jumping to back to their "new" position when items change
      itemsHaveChanged && previous.current.newIndex === index2
    ) {
      return disabledTransition;
    }
    if (shouldDisplaceDragSource && !isKeyboardEvent(activatorEvent) || !transition) {
      return void 0;
    }
    if (isSorting || shouldAnimateLayoutChanges) {
      return CSS.Transition.toString({
        ...transition,
        property: transitionProperty
      });
    }
    return void 0;
  }
}
function normalizeLocalDisabled(localDisabled, globalDisabled) {
  var _localDisabled$dragga, _localDisabled$droppa;
  if (typeof localDisabled === "boolean") {
    return {
      draggable: localDisabled,
      // Backwards compatibility
      droppable: false
    };
  }
  return {
    draggable: (_localDisabled$dragga = localDisabled == null ? void 0 : localDisabled.draggable) != null ? _localDisabled$dragga : globalDisabled.draggable,
    droppable: (_localDisabled$droppa = localDisabled == null ? void 0 : localDisabled.droppable) != null ? _localDisabled$droppa : globalDisabled.droppable
  };
}
[KeyboardCode.Down, KeyboardCode.Right, KeyboardCode.Up, KeyboardCode.Left];
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
  return /* @__PURE__ */ jsxRuntime.jsx(DndContext, { sensors, onDragEnd: handleDragEnd, ...dndContextProps, children: /* @__PURE__ */ jsxRuntime.jsx(
    SortableContext,
    {
      items: data,
      strategy: verticalListSortingStrategy,
      ...sortableContextProps,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          className: tailwindMerge.twMerge(wrapperClassName, sortableWrapperClassName),
          ...restSortableWrapperProps,
          children: data.map((item, index2) => /* @__PURE__ */ jsxRuntime.jsx(SortableItem, { item, ...sortableItemProps, children: renderItem(item, index2) }, item.id))
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
  return /* @__PURE__ */ jsxRuntime.jsx("div", { style, ref: setNodeRef, ...attributes, ...listeners, ...rest, children });
};
const Spliter = ({ children, title, direction = "center", expand = false }) => {
  const [expanded, setExpanded] = React.useState(expand);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: "items-center w-full", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        index$1.Flex,
        {
          className: "bg-light-1 border-primary-light-3 p-1 rounded border cursor-pointer",
          onClick: toggleExpand,
          children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: expanded ? "Chevron_Up" : "Chevron_Down" })
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(index.BorderedTitle, { align: direction, title })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        className: `overflow-hidden transition-max-height duration-300 ease-in-out ${expanded ? "max-h-[1000px]" : "max-h-0"}`,
        children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "p-2 mt-2", children })
      }
    )
  ] });
};
const NotFoundAddItem = ({ onAddNewItem }) => {
  const { t } = reactI18next.useTranslation();
  return /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { justify: "start", align: "center", gap: 4, className: "p-5", children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { className: "bg-light-2 w-full cursor-pointer p-2", size: 14, onClick: onAddNewItem, children: t("common.literal.addInputTag") }) });
};
const CustomizedAntSelectTagConfig = {
  components: {
    Select: {
      multipleItemBg: colors.colors.light_1,
      multipleItemBorderColor: colors.colors.primary_light_3,
      multipleItemBorderColorDisabled: colors.colors.primary_light_3,
      multipleItemColorDisabled: colors.colors.negative,
      multipleItemHeight: 30,
      multipleItemHeightLG: 20,
      multipleSelectorBgDisabled: colors.colors.light_1,
      optionActiveBg: colors.colors.light_1,
      optionFontSize: 20,
      optionHeight: 20,
      optionPadding: 0,
      optionSelectedBg: colors.colors.white_ff,
      singleItemHeightLG: 20,
      zIndexPopup: 20,
      colorTextPlaceholder: colors.colors.primary_light_3
    }
  }
};
const generateSelectClassNames = ({
  size,
  error,
  disabled,
  isTabFocused
}) => {
  const className = tailwindMerge.twMerge(
    `min-w-[200px] flex-1 border rounded border-primary-light-3 bg-white-ff hover:border-primary-light-2 `,
    "[&_.ant-select-selection-item]:!border-none [&_.ant-select-selection-item]:!bg-transparent",
    disabled && "!bg-light-6 !border-light-6",
    error && "border-negative hover:border-negative-dark-1 ",
    isTabFocused && `border-[2px] border-primary-dark-1`
  );
  if (size === "medium") {
    return tailwindMerge.twMerge("", className);
  }
  return tailwindMerge.twMerge("h-[34px]", className);
};
const { Option } = antd.Select;
const TagInput = React.forwardRef(
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
    const [isOpen, setIsOpen] = React.useState(false);
    const [newItem, setNewItem] = React.useState("");
    const _value = React.useMemo(() => {
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
    const allOptions = React.useMemo(() => {
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
    const handleSearch = React.useCallback(
      (value2) => {
        setNewItem(value2);
        onSearch?.(value2);
      },
      [onSearch]
    );
    const _renderItem = React.useCallback(
      ({ item, index: index$22, isActive }) => {
        const extractedLabel = labelExtractor(item);
        return /* @__PURE__ */ jsxRuntime.jsx(
          index$1.Flex,
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
            children: renderItem ? /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: "min-h-[32px] w-full flex-1 items-center px-2", gap: 8, children: [
              /* @__PURE__ */ jsxRuntime.jsx(index.Checkbox, { checked: isActive }),
              renderItem(item, index$22, isActive)
            ] }) : /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { gap: 8, className: tailwindMerge.twMerge("h-10 w-full flex-1 items-center px-2"), children: [
              /* @__PURE__ */ jsxRuntime.jsx(index.Checkbox, { checked: isActive }),
              typeof extractedLabel === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { children: extractedLabel }) : extractedLabel
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
      return /* @__PURE__ */ jsxRuntime.jsx(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      index$1.Flex,
      {
        vertical: labelPosition === "vertical",
        className: tailwindMerge.twMerge(
          "h-fit w-full",
          !hideErrorMessage && "inputErrorMessageContainer",
          labelPosition === "horizontal" && "items-center gap-3"
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(SelectLabel, { ...{ disabled, label, labelExtraNode, required, size } }),
          /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: CustomizedAntSelectTagConfig, children: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { align: "center", children: [
            addonBefore,
            /* @__PURE__ */ jsxRuntime.jsx(
              antd.Select,
              {
                ...rest,
                mode: "multiple",
                style: { minHeight: height },
                menuItemSelectedIcon: null,
                ref: ref2,
                className: tailwindMerge.twMerge(
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
                placeholder: /* @__PURE__ */ jsxRuntime.jsx(SelectPlaceholder, { ...{ isHovered, isTabFocused, placeholder, size, disabled } }),
                allowClear: allowClear ? {
                  clearIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectClearIcon, {})
                } : void 0,
                notFoundContent: /* @__PURE__ */ jsxRuntime.jsx(NotFoundAddItem, { onAddNewItem }),
                suffixIcon: /* @__PURE__ */ jsxRuntime.jsx(SelectSuffix, { ...{ isHovered, loading, disabled, isTabFocused, error } }),
                popupClassName: tailwindMerge.twMerge("p-0 small-custom-scrollbar z-[1000]", popupClassName),
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
                    return /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "h-[100px] items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Loading, { isLoading: true, size: 24 }) });
                  }
                  const dropdown = /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { vertical: true, className: "relative overflow-auto", children: menu }),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index$1.Flex,
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
                  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, children: [
                    header && /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { gap: 8, align: "center", className: "px-4 py-3", children: header }),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      index$1.Flex,
                      {
                        vertical: true,
                        id: "selectContainer",
                        className: "tiny-custom-scrollbar max-h-[200px] min-h-8 overflow-y-auto",
                        children: /* @__PURE__ */ jsxRuntime.jsx(
                          index$2.InfiniteLoader,
                          {
                            hasMore: infinite.hasMore,
                            onNextPage: infinite.fetchNextPage,
                            scrollableNodeId: "selectContainer",
                            children: options?.map((item, index2) => {
                              const isActive = !!_value?.find((i) => i === valueExtractor(item));
                              return _renderItem({ index: index2, item, isActive });
                            })
                          }
                        )
                      }
                    ),
                    footer && /* @__PURE__ */ jsxRuntime.jsx(
                      index$1.Flex,
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
                children: options?.map((item, index2) => {
                  const isActive = !!_value?.find((i) => i === valueExtractor(item));
                  return /* @__PURE__ */ jsxRuntime.jsx(
                    Option,
                    {
                      label: labelExtractor(item),
                      value: valueExtractor(item),
                      disabled: disableExtractor(item),
                      children: _renderItem({ index: index2, item, isActive })
                    },
                    valueExtractor(item)
                  );
                })
              }
            ),
            addonAfter
          ] }) }),
          !hideErrorMessage && error?.message && /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: error?.message })
        ]
      }
    );
  }
);
const timePickerTheme = {
  components: {
    DatePicker: {
      colorBorder: colors.colors.primary_light_3,
      colorTextPlaceholder: colors.colors.primary_light_3
    }
  }
};
const InputTimePicker = ({ className, error, ...rest }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(antd.ConfigProvider, { theme: timePickerTheme, children: /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      antd.TimePicker,
      {
        size: "large",
        suffixIcon: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: "time", color: colors.colors.primary }),
        className: tailwindMerge.twMerge(
          "w-full text-[14px] font-medium text-primary-dark-1 !shadow-none outline-none hover:border-primary-light-2",
          error?.message && "border-negative",
          className
        ),
        needConfirm: false,
        showNow: false,
        popupStyle: { scrollbarWidth: "thin", scrollbarColor: colors.colors.primary },
        popupClassName: "[&_.ant-picker-content]:flex-row-reverse ",
        ...rest
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(index.InputErrorMessage, { message: getErrorMessage(error) })
  ] }) });
};
const StatusBox = ({ active }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    index$1.Icon,
    {
      name: active ? "Checkmark_Circle" : "Close_Circle_fill",
      color: colors.colors[active ? "positive" : "negative"]
    }
  );
};
const TitleBox = ({ children, title }) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: false, gap: 24, align: "flex-start", children: [
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { flex: 1, className: "bg-light-1 rounded px-4 py-2", children: typeof title === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { weight: "medium", children: title }) : title }),
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { flex: 3, className: "bg-light-1 rounded px-4 py-2", children: typeof children === "string" ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 16, style: { textAlign: "justify" }, children }) : children })
  ] });
};
const Box = index.batch({ Title: TitleBox, Status: StatusBox });
const TreeSearchBar = ({ onSearch, ...props }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearch = useDebounce(onSearch, 500);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Input.Search,
    {
      value: searchTerm,
      onChange: (e) => {
        setSearchTerm(e.target.value);
        debouncedSearch(e.target.value);
      },
      placeholder: i18n.t("common.literal.search") ?? "Search",
      ...props
    }
  );
};
const renderTreeNodes = (data, renderIcon, nodeClassName, renderRightIcons, defaultIcon) => {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: data.map((node) => /* @__PURE__ */ jsxRuntime.jsx(
    antd.Tree.TreeNode,
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
      className: tailwindMerge.twMerge("flex items-center justify-between", nodeClassName),
      title: /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: "w-full items-center justify-between p-1", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { className: "items-center gap-2", children: [
          node.icon ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 20, name: node.icon }) : renderIcon ? typeof renderIcon === "function" ? renderIcon(node) : renderIcon : defaultIcon ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 20, name: defaultIcon }) : /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { size: 20, name: "folder_fill" }),
          /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { className: " truncate", children: node.label }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "items-center gap-1", children: renderRightIcons?.(node) })
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
  const [isExpanded, setIsExpanded] = React.useState(true);
  const { t } = reactI18next.useTranslation();
  const handleDrawerToggle = () => {
    setIsExpanded((prev) => {
      const newState = !prev;
      onDrawerToggle?.(newState);
      return newState;
    });
  };
  const content = /* @__PURE__ */ jsxRuntime.jsx(
    antd.Tree,
    {
      ...rest,
      "data-testid": "tree-container",
      switcherIcon: /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { name: switcherIconName || "Chevron_Down" }),
      className: tailwindMerge.twMerge(
        className,
        "tiny-custom-scrollbar w-full overflow-y-auto overflow-x-hidden"
      ),
      children: renderTreeNodes(treeData, renderIcon, nodeClassName, renderRightIcons, titleIcon)
    }
  );
  return /* @__PURE__ */ jsxRuntime.jsxs(
    index$1.Flex,
    {
      vertical: true,
      className: tailwindMerge.twMerge(
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
        isExpandable && /* @__PURE__ */ jsxRuntime.jsxs(
          index$1.Flex,
          {
            gap: 4,
            className: tailwindMerge.twMerge(
              "relative border-light-7 pb-2.5 pl-0 pr-3 pt-3",
              isExpanded && "border"
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { gap: 8, ...!isExpanded ? { vertical: true } : {}, children: [
                /* @__PURE__ */ jsxRuntime.jsx(index$1.Icon, { color: colors.colors.primary_light_1, name: titleIcon }),
                /* @__PURE__ */ jsxRuntime.jsx(
                  index$1.Text,
                  {
                    className: tailwindMerge.twMerge(!isExpanded && "rotate-180"),
                    style: !isExpanded ? { writingMode: "vertical-rl" } : {},
                    weight: "bold",
                    color: colors.colors.primary_light_1,
                    children: titleHeader
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx(
                index.IconButton,
                {
                  color: colors.colors.primary_light_1,
                  iconName: !isExpanded ? "Chevron_Right" : "Chevron_Left",
                  onClick: handleDrawerToggle,
                  "data-testid": "drawer-toggle",
                  className: "absolute left-[-10px] z-40 w-5 cursor-pointer items-center justify-center rounded-sm border border-light-7 bg-white-ff p-2"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(index$1.Render, { when: isExpanded && hasSearch && onSearch, children: /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: " border border-primary-light-3/60 bg-white-ff p-2", children: /* @__PURE__ */ jsxRuntime.jsx(TreeSearchBar, { onSearch }) }) }),
        isExpanded && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "tiny-custom-scrollbar flex h-full flex-col overflow-y-auto bg-white-ff", children: isLoading ? /* @__PURE__ */ jsxRuntime.jsx(antd.Spin, { size: "large" }) : treeData.length === 0 ? /* @__PURE__ */ jsxRuntime.jsx(index$1.Text, { size: 14, className: "text-gray-500", children: t("common.error.noItem") }) : infiniteProps ? /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            id: "tree-scroll-container",
            className: " tiny-custom-scrollbar relative overflow-y-auto bg-white-ff",
            children: /* @__PURE__ */ jsxRuntime.jsx(
              index$2.InfiniteLoader,
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
const require$$0 = /* @__PURE__ */ index.getAugmentedNamespace(__viteBrowserExternal$1);
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
    if (typeof globalThis !== "undefined" && obj === globalThis || typeof index.commonjsGlobal !== "undefined" && obj === index.commonjsGlobal) {
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
  function nameOf(f) {
    if (f.name) {
      return f.name;
    }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
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
  _isNaN = Number.isNaN || function isNaN2(a) {
    return a !== a;
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
  var concatty = function concatty2(a, b) {
    var arr = [];
    for (var i = 0; i < a.length; i += 1) {
      arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
      arr[j + a.length] = b[j];
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
  var combine = function combine2(a, b) {
    return [].concat(a, b);
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
        var index2 = parseInt(cleanRoot, 10);
        if (!options.parseArrays && cleanRoot === "") {
          obj = { 0: leaf };
        } else if (!isNaN(index2) && root !== cleanRoot && String(index2) === cleanRoot && index2 >= 0 && (options.parseArrays && index2 <= options.arrayLimit)) {
          obj = [];
          obj[index2] = leaf;
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
const qs = /* @__PURE__ */ index.getDefaultExportFromCjs(libExports);
const Tab = (_props) => null;
const VerticalTabs = ({ children, query = true, defaultActiveTab }) => {
  const navigate = reactRouterDom.useNavigate();
  const [searchParams] = reactRouterDom.useSearchParams();
  const [activeTab, setActiveTab] = React.useState(
    defaultActiveTab || children[0].props.tab
  );
  const props = React.Children.map(children, (child) => child.props);
  const { activeContent, className, isTransparent, extraNode } = React.useMemo(() => {
    const activeProp = props.find((prop) => prop.tab === activeTab);
    if (!activeProp) return { activeContent: null, isTransparent: false };
    return {
      activeContent: activeProp.children,
      className: activeProp.className,
      isTransparent: activeProp.transparent,
      extraNode: activeProp.extraNode
    };
  }, [activeTab, props]);
  const setQuery = React.useCallback(
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
  React.useEffect(() => {
    if (!searchParams || !query) return;
    const q = Object.fromEntries(searchParams.entries()) ?? {};
    if ("tab" in q && props.find((item) => item.tab === q["tab"])) {
      setActiveTab(q["tab"]);
    }
  }, [props, query, searchParams]);
  return /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: false, className: "p-6", flex: 1, align: "flex-start", gap: 24, children: [
    /* @__PURE__ */ jsxRuntime.jsx(index$1.Flex, { className: "h-full max-w-[200px]", vertical: true, flex: 1, gap: 16, children: props.map(({ tab, title }) => /* @__PURE__ */ jsxRuntime.jsx(
      index$1.Flex,
      {
        className: tailwindMerge.twMerge(
          "cursor-pointer rounded-bl rounded-tl border-r-[3px] border-transparent px-[22px]  py-2",
          tab === activeTab && "border-secondary bg-white-ff  shadow-[0_1px_2px_0_rgba(67,88,121,0.26)]"
        ),
        onClick: () => {
          setActiveTab(tab);
          setQuery(tab);
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(
          index$1.Text,
          {
            size: 16,
            color: colors.colors[tab === activeTab ? "secondary" : "primary"],
            weight: tab === activeTab ? "bold" : "normal",
            children: title
          }
        )
      },
      tab
    )) }),
    /* @__PURE__ */ jsxRuntime.jsxs(index$1.Flex, { vertical: true, flex: 1, className: "h-full", children: [
      React.isValidElement(extraNode) && extraNode,
      /* @__PURE__ */ jsxRuntime.jsx(
        index.Card,
        {
          className: tailwindMerge.twMerge(
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
exports.Button = index.Button;
exports.InputErrorMessage = index.InputErrorMessage;
exports.buttonDefaultClasses = index.buttonDefaultClasses;
exports.fontSizePicker = index.fontSizePicker;
exports.paddingPicker = index.paddingPicker;
exports.Accordion = Accordion;
exports.ActionHeader = ActionHeader;
exports.AudioVisualizer = AudioVisualizer;
exports.AvatarUpload = AvatarUpload;
exports.Box = Box;
exports.Catch = Catch;
exports.ChevronIcon = ChevronIcon;
exports.CopyButton = CopyButton;
exports.Input = Input;
exports.InputDatePicker = InputDatePicker;
exports.InputRangePicker = InputRangePicker;
exports.InputTimePicker = InputTimePicker;
exports.NotResult = NotResult;
exports.Select = Select;
exports.SelectClearIcon = SelectClearIcon;
exports.SelectLabel = SelectLabel;
exports.SelectNotFound = SelectNotFound;
exports.SelectPlaceholder = SelectPlaceholder;
exports.SelectSuffix = SelectSuffix;
exports.SortableList = SortableList;
exports.Spliter = Spliter;
exports.Tag = Tag;
exports.TagInput = TagInput;
exports.Tree = Tree;
exports.VerticalTabs = VerticalTabs;
exports.useNotification = useNotification;
