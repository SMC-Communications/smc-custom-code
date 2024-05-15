var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/gsap/dist/gsap.js
var require_gsap = __commonJS({
  "node_modules/gsap/dist/gsap.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = global || self, factory(global.window = global.window || {}));
    })(exports, function(exports2) {
      "use strict";
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }
      function _assertThisInitialized(self2) {
        if (self2 === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self2;
      }
      var _config = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
          lineHeight: ""
        }
      }, _defaults2 = {
        duration: 0.5,
        overwrite: false,
        delay: 0
      }, _suppressOverwrites2, _reverting, _context5, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString3 = function _isString4(value) {
        return typeof value === "string";
      }, _isFunction3 = function _isFunction4(value) {
        return typeof value === "function";
      }, _isNumber3 = function _isNumber4(value) {
        return typeof value === "number";
      }, _isUndefined = function _isUndefined2(value) {
        return typeof value === "undefined";
      }, _isObject3 = function _isObject4(value) {
        return typeof value === "object";
      }, _isNotFalse = function _isNotFalse2(value) {
        return value !== false;
      }, _windowExists5 = function _windowExists6() {
        return typeof window !== "undefined";
      }, _isFuncOrString = function _isFuncOrString2(value) {
        return _isFunction3(value) || _isString3(value);
      }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
      }, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win5, _coreInitted5, _doc5, _globals = {}, _installScope = {}, _coreReady, _install = function _install2(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap12;
      }, _missingPlugin = function _missingPlugin2(property, value) {
        return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
      }, _warn = function _warn2(message, suppress) {
        return !suppress && console.warn(message);
      }, _addGlobal = function _addGlobal2(name, obj) {
        return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
      }, _emptyFunc = function _emptyFunc2() {
        return 0;
      }, _startAtRevertConfig = {
        suppressEvents: true,
        isStart: true,
        kill: false
      }, _revertConfigNoKill = {
        suppressEvents: true,
        kill: false
      }, _revertConfig = {
        suppressEvents: true
      }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness2(targets) {
        var target = targets[0], harnessPlugin, i2;
        _isObject3(target) || _isFunction3(target) || (targets = [targets]);
        if (!(harnessPlugin = (target._gsap || {}).harness)) {
          i2 = _harnessPlugins.length;
          while (i2-- && !_harnessPlugins[i2].targetTest(target)) {
          }
          harnessPlugin = _harnessPlugins[i2];
        }
        i2 = targets.length;
        while (i2--) {
          targets[i2] && (targets[i2]._gsap || (targets[i2]._gsap = new GSCache(targets[i2], harnessPlugin))) || targets.splice(i2, 1);
        }
        return targets;
      }, _getCache = function _getCache2(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
      }, _getProperty = function _getProperty2(target, property, v) {
        return (v = target[property]) && _isFunction3(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
      }, _forEachName = function _forEachName2(names, func) {
        return (names = names.split(",")).forEach(func) || names;
      }, _round5 = function _round6(value) {
        return Math.round(value * 1e5) / 1e5 || 0;
      }, _roundPrecise = function _roundPrecise2(value) {
        return Math.round(value * 1e7) / 1e7 || 0;
      }, _parseRelative = function _parseRelative2(start, value) {
        var operator = value.charAt(0), end = parseFloat(value.substr(2));
        start = parseFloat(start);
        return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
      }, _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
        var l = toFind.length, i2 = 0;
        for (; toSearch.indexOf(toFind[i2]) < 0 && ++i2 < l; ) {
        }
        return i2 < l;
      }, _lazyRender = function _lazyRender2() {
        var l = _lazyTweens.length, a = _lazyTweens.slice(0), i2, tween;
        _lazyLookup = {};
        _lazyTweens.length = 0;
        for (i2 = 0; i2 < l; i2++) {
          tween = a[i2];
          tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
      }, _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
        _lazyTweens.length && !_reverting && _lazyRender();
        animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
        _lazyTweens.length && !_reverting && _lazyRender();
      }, _numericIfPossible = function _numericIfPossible2(value) {
        var n = parseFloat(value);
        return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString3(value) ? value.trim() : value;
      }, _passThrough3 = function _passThrough4(p) {
        return p;
      }, _setDefaults3 = function _setDefaults4(obj, defaults) {
        for (var p in defaults) {
          p in obj || (obj[p] = defaults[p]);
        }
        return obj;
      }, _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
        return function(obj, defaults) {
          for (var p in defaults) {
            p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
          }
        };
      }, _merge = function _merge2(base, toMerge) {
        for (var p in toMerge) {
          base[p] = toMerge[p];
        }
        return base;
      }, _mergeDeep = function _mergeDeep2(base, toMerge) {
        for (var p in toMerge) {
          p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject3(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
        }
        return base;
      }, _copyExcluding = function _copyExcluding2(obj, excluding) {
        var copy = {}, p;
        for (p in obj) {
          p in excluding || (copy[p] = obj[p]);
        }
        return copy;
      }, _inheritDefaults = function _inheritDefaults2(vars) {
        var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults3;
        if (_isNotFalse(vars.inherit)) {
          while (parent) {
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
          }
        }
        return vars;
      }, _arraysMatch = function _arraysMatch2(a1, a2) {
        var i2 = a1.length, match = i2 === a2.length;
        while (match && i2-- && a1[i2] === a2[i2]) {
        }
        return i2 < 0;
      }, _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = parent[lastProp], t;
        if (sortBy) {
          t = child[sortBy];
          while (prev && prev[sortBy] > t) {
            prev = prev._prev;
          }
        }
        if (prev) {
          child._next = prev._next;
          prev._next = child;
        } else {
          child._next = parent[firstProp];
          parent[firstProp] = child;
        }
        if (child._next) {
          child._next._prev = child;
        } else {
          parent[lastProp] = child;
        }
        child._prev = prev;
        child.parent = child._dp = parent;
        return child;
      }, _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = child._prev, next = child._next;
        if (prev) {
          prev._next = next;
        } else if (parent[firstProp] === child) {
          parent[firstProp] = next;
        }
        if (next) {
          next._prev = prev;
        } else if (parent[lastProp] === child) {
          parent[lastProp] = prev;
        }
        child._next = child._prev = child.parent = null;
      }, _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
        child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
        child._act = 0;
      }, _uncache = function _uncache2(animation, child) {
        if (animation && (!child || child._end > animation._dur || child._start < 0)) {
          var a = animation;
          while (a) {
            a._dirty = 1;
            a = a.parent;
          }
        }
        return animation;
      }, _recacheAncestors = function _recacheAncestors2(animation) {
        var parent = animation.parent;
        while (parent && parent.parent) {
          parent._dirty = 1;
          parent.totalDuration();
          parent = parent.parent;
        }
        return animation;
      }, _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
        return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
      }, _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
        return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
      }, _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
        return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
      }, _animationCycle = function _animationCycle2(tTime, cycleDuration) {
        var whole = Math.floor(tTime /= cycleDuration);
        return tTime && whole === tTime ? whole - 1 : whole;
      }, _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
        return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
      }, _setEnd = function _setEnd2(animation) {
        return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
      }, _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
        var parent = animation._dp;
        if (parent && parent.smoothChildTiming && animation._ts) {
          animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
          _setEnd(animation);
          parent._dirty || _uncache(parent, animation);
        }
        return animation;
      }, _postAddChecks = function _postAddChecks2(timeline, child) {
        var t;
        if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
          t = _parentToChildTotalTime(timeline.rawTime(), child);
          if (!child._dur || _clamp4(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
            child.render(t, true);
          }
        }
        if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
          if (timeline._dur < timeline.duration()) {
            t = timeline;
            while (t._dp) {
              t.rawTime() >= 0 && t.totalTime(t._tTime);
              t = t._dp;
            }
          }
          timeline._zTime = -_tinyNum;
        }
      }, _addToTimeline = function _addToTimeline2(timeline, child, position, skipChecks) {
        child.parent && _removeFromParent(child);
        child._start = _roundPrecise((_isNumber3(position) ? position : position || timeline !== _globalTimeline ? _parsePosition3(timeline, position, child) : timeline._time) + child._delay);
        child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
        _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
        _isFromOrFromStart(child) || (timeline._recent = child);
        skipChecks || _postAddChecks(timeline, child);
        timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
        return timeline;
      }, _scrollTrigger = function _scrollTrigger2(animation, trigger) {
        return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
      }, _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
        _initTween(tween, time, tTime);
        if (!tween._initted) {
          return 1;
        }
        if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
          _lazyTweens.push(tween);
          tween._lazy = [tTime, suppressEvents];
          return 1;
        }
      }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
        var parent = _ref.parent;
        return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
      }, _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
        var data = _ref2.data;
        return data === "isFromStart" || data === "isStart";
      }, _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
        var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
        if (repeatDelay && tween._repeat) {
          tTime = _clamp4(0, tween._tDur, totalTime);
          iteration = _animationCycle(tTime, repeatDelay);
          tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
          if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
          }
        }
        if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
          if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
            return;
          }
          prevIteration = tween._zTime;
          tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
          suppressEvents || (suppressEvents = totalTime && !prevIteration);
          tween.ratio = ratio;
          tween._from && (ratio = 1 - ratio);
          tween._time = 0;
          tween._tTime = tTime;
          pt = tween._pt;
          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
          totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
          tween._onUpdate && !suppressEvents && _callback3(tween, "onUpdate");
          tTime && tween._repeat && !suppressEvents && tween.parent && _callback3(tween, "onRepeat");
          if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents && !_reverting) {
              _callback3(tween, ratio ? "onComplete" : "onReverseComplete", true);
              tween._prom && tween._prom();
            }
          }
        } else if (!tween._zTime) {
          tween._zTime = totalTime;
        }
      }, _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
        var child;
        if (time > prevTime) {
          child = animation._first;
          while (child && child._start <= time) {
            if (child.data === "isPause" && child._start > prevTime) {
              return child;
            }
            child = child._next;
          }
        } else {
          child = animation._last;
          while (child && child._start >= time) {
            if (child.data === "isPause" && child._start < prevTime) {
              return child;
            }
            child = child._prev;
          }
        }
      }, _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
        var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
        totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
        animation._dur = dur;
        animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
        totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
        animation.parent && _setEnd(animation);
        skipUncache || _uncache(animation.parent, animation);
        return animation;
      }, _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
        return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
      }, _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc,
        totalDuration: _emptyFunc
      }, _parsePosition3 = function _parsePosition4(animation, position, percentAnimation) {
        var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i2, offset, isPercent;
        if (_isString3(position) && (isNaN(position) || position in labels)) {
          offset = position.charAt(0);
          isPercent = position.substr(-1) === "%";
          i2 = position.indexOf("=");
          if (offset === "<" || offset === ">") {
            i2 >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i2 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
          }
          if (i2 < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
          }
          offset = parseFloat(position.charAt(i2 - 1) + position.substr(i2 + 1));
          if (isPercent && percentAnimation) {
            offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
          }
          return i2 > 1 ? _parsePosition4(animation, position.substr(0, i2 - 1), percentAnimation) + offset : clippedDuration + offset;
        }
        return position == null ? clippedDuration : +position;
      }, _createTweenType = function _createTweenType2(type, params, timeline) {
        var isLegacy = _isNumber3(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
        isLegacy && (vars.duration = params[1]);
        vars.parent = timeline;
        if (type) {
          irVars = vars;
          parent = timeline;
          while (parent && !("immediateRender" in irVars)) {
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
          }
          vars.immediateRender = _isNotFalse(irVars.immediateRender);
          type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
        }
        return new Tween(params[0], vars, params[varsIndex + 1]);
      }, _conditionalReturn = function _conditionalReturn2(value, func) {
        return value || value === 0 ? func(value) : func;
      }, _clamp4 = function _clamp5(min, max, value) {
        return value < min ? min : value > max ? max : value;
      }, getUnit = function getUnit2(value, v) {
        return !_isString3(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
      }, clamp = function clamp2(min, max, value) {
        return _conditionalReturn(value, function(v) {
          return _clamp4(min, max, v);
        });
      }, _slice = [].slice, _isArrayLike = function _isArrayLike2(value, nonEmpty) {
        return value && _isObject3(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject3(value[0])) && !value.nodeType && value !== _win5;
      }, _flatten = function _flatten2(ar, leaveStrings, accumulator) {
        if (accumulator === void 0) {
          accumulator = [];
        }
        return ar.forEach(function(value) {
          var _accumulator;
          return _isString3(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
        }) || accumulator;
      }, toArray = function toArray2(value, scope, leaveStrings) {
        return _context5 && !scope && _context5.selector ? _context5.selector(value) : _isString3(value) && !leaveStrings && (_coreInitted5 || !_wake()) ? _slice.call((scope || _doc5).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
      }, selector = function selector2(value) {
        value = toArray(value)[0] || _warn("Invalid scope") || {};
        return function(v) {
          var el = value.current || value.nativeElement || value;
          return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc5.createElement("div") : value);
        };
      }, shuffle = function shuffle2(a) {
        return a.sort(function() {
          return 0.5 - Math.random();
        });
      }, distribute = function distribute2(v) {
        if (_isFunction3(v)) {
          return v;
        }
        var vars = _isObject3(v) ? v : {
          each: v
        }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
        if (_isString3(from)) {
          ratioX = ratioY = {
            center: 0.5,
            edges: 0.5,
            end: 1
          }[from] || 0;
        } else if (!isDecimal && ratios) {
          ratioX = from[0];
          ratioY = from[1];
        }
        return function(i2, target, a) {
          var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
          if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
            if (!wrapAt) {
              max = -_bigNum;
              while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
              }
              wrapAt < l && wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for (j = 0; j < l; j++) {
              x = j % wrapAt - originX;
              y = originY - (j / wrapAt | 0);
              distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
              d > max && (max = d);
              d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0;
            ease = ease && l < 0 ? _invertEase(ease) : ease;
          }
          l = (distances[i2] - distances.min) / distances.max || 0;
          return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
        };
      }, _roundModifier = function _roundModifier2(v) {
        var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
        return function(raw) {
          var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
          return (n - n % 1) / p + (_isNumber3(raw) ? 0 : getUnit(raw));
        };
      }, snap = function snap2(snapTo, value) {
        var isArray = _isArray(snapTo), radius, is2D;
        if (!isArray && _isObject3(snapTo)) {
          radius = isArray = snapTo.radius || _bigNum;
          if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber3(snapTo[0])) {
              radius *= radius;
            }
          } else {
            snapTo = _roundModifier(snapTo.increment);
          }
        }
        return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction3(snapTo) ? function(raw) {
          is2D = snapTo(raw);
          return Math.abs(is2D - raw) <= radius ? is2D : raw;
        } : function(raw) {
          var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i2 = snapTo.length, dx, dy;
          while (i2--) {
            if (is2D) {
              dx = snapTo[i2].x - x;
              dy = snapTo[i2].y - y;
              dx = dx * dx + dy * dy;
            } else {
              dx = Math.abs(snapTo[i2] - x);
            }
            if (dx < min) {
              min = dx;
              closest = i2;
            }
          }
          closest = !radius || min <= radius ? snapTo[closest] : raw;
          return is2D || closest === raw || _isNumber3(raw) ? closest : closest + getUnit(raw);
        });
      }, random = function random2(min, max, roundingIncrement, returnFunction) {
        return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
          return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
        });
      }, pipe = function pipe2() {
        for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
          functions[_key] = arguments[_key];
        }
        return function(value) {
          return functions.reduce(function(v, f) {
            return f(v);
          }, value);
        };
      }, unitize = function unitize2(func, unit) {
        return function(value) {
          return func(parseFloat(value)) + (unit || getUnit(value));
        };
      }, normalize = function normalize2(min, max, value) {
        return mapRange(min, max, 0, 1, value);
      }, _wrapArray = function _wrapArray2(a, wrapper, value) {
        return _conditionalReturn(value, function(index) {
          return a[~~wrapper(index)];
        });
      }, wrap = function wrap2(min, max, value) {
        var range = max - min;
        return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
          return (range + (value2 - min) % range) % range + min;
        });
      }, wrapYoyo = function wrapYoyo2(min, max, value) {
        var range = max - min, total = range * 2;
        return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
          value2 = (total + (value2 - min) % total) % total || 0;
          return min + (value2 > range ? total - value2 : value2);
        });
      }, _replaceRandom = function _replaceRandom2(value) {
        var prev = 0, s = "", i2, nums, end, isArray;
        while (~(i2 = value.indexOf("random(", prev))) {
          end = value.indexOf(")", i2);
          isArray = value.charAt(i2 + 7) === "[";
          nums = value.substr(i2 + 7, end - i2 - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
          s += value.substr(prev, i2 - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
          prev = end + 1;
        }
        return s + value.substr(prev, value.length - prev);
      }, mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
        var inRange = inMax - inMin, outRange = outMax - outMin;
        return _conditionalReturn(value, function(value2) {
          return outMin + ((value2 - inMin) / inRange * outRange || 0);
        });
      }, interpolate = function interpolate2(start, end, progress, mutate) {
        var func = isNaN(start + end) ? 0 : function(p2) {
          return (1 - p2) * start + p2 * end;
        };
        if (!func) {
          var isString = _isString3(start), master = {}, p, i2, interpolators, l, il;
          progress === true && (mutate = 1) && (progress = null);
          if (isString) {
            start = {
              p: start
            };
            end = {
              p: end
            };
          } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for (i2 = 1; i2 < l; i2++) {
              interpolators.push(interpolate2(start[i2 - 1], start[i2]));
            }
            l--;
            func = function func2(p2) {
              p2 *= l;
              var i3 = Math.min(il, ~~p2);
              return interpolators[i3](p2 - i3);
            };
            progress = end;
          } else if (!mutate) {
            start = _merge(_isArray(start) ? [] : {}, start);
          }
          if (!interpolators) {
            for (p in end) {
              _addPropTween.call(master, start, p, "get", end[p]);
            }
            func = function func2(p2) {
              return _renderPropTweens(p2, master) || (isString ? start.p : start);
            };
          }
        }
        return _conditionalReturn(progress, func);
      }, _getLabelInDirection = function _getLabelInDirection2(timeline, fromTime, backward) {
        var labels = timeline.labels, min = _bigNum, p, distance, label;
        for (p in labels) {
          distance = labels[p] - fromTime;
          if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
          }
        }
        return label;
      }, _callback3 = function _callback4(animation, type, executeLazyFirst) {
        var v = animation.vars, callback2 = v[type], prevContext = _context5, context = animation._ctx, params, scope, result;
        if (!callback2) {
          return;
        }
        params = v[type + "Params"];
        scope = v.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender();
        context && (_context5 = context);
        result = params ? callback2.apply(scope, params) : callback2.call(scope);
        _context5 = prevContext;
        return result;
      }, _interrupt = function _interrupt2(animation) {
        _removeFromParent(animation);
        animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
        animation.progress() < 1 && _callback3(animation, "onInterrupt");
        return animation;
      }, _quickTween, _registerPluginQueue = [], _createPlugin = function _createPlugin2(config2) {
        if (!config2)
          return;
        config2 = !config2.name && config2["default"] || config2;
        if (_windowExists5() || config2.headless) {
          var name = config2.name, isFunc = _isFunction3(config2), Plugin = name && !isFunc && config2.init ? function() {
            this._props = [];
          } : config2, instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
          }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0
          };
          _wake();
          if (config2 !== Plugin) {
            if (_plugins[name]) {
              return;
            }
            _setDefaults3(Plugin, _setDefaults3(_copyExcluding(config2, instanceDefaults), statics));
            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config2, statics)));
            _plugins[Plugin.prop = name] = Plugin;
            if (config2.targetTest) {
              _harnessPlugins.push(Plugin);
              _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
          }
          _addGlobal(name, Plugin);
          config2.register && config2.register(gsap12, Plugin, PropTween);
        } else {
          _registerPluginQueue.push(config2);
        }
      }, _255 = 255, _colorLookup = {
        aqua: [0, _255, _255],
        lime: [0, _255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _255],
        navy: [0, 0, 128],
        white: [_255, _255, _255],
        olive: [128, 128, 0],
        yellow: [_255, _255, 0],
        orange: [_255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_255, 0, 0],
        pink: [_255, 192, 203],
        cyan: [0, _255, _255],
        transparent: [_255, _255, _255, 0]
      }, _hue = function _hue2(h, m1, m2) {
        h += h < 0 ? 1 : h > 1 ? -1 : 0;
        return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
      }, splitColor = function splitColor2(v, toHSL, forceAlpha) {
        var a = !v ? _colorLookup.black : _isNumber3(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
        if (!a) {
          if (v.substr(-1) === ",") {
            v = v.substr(0, v.length - 1);
          }
          if (_colorLookup[v]) {
            a = _colorLookup[v];
          } else if (v.charAt(0) === "#") {
            if (v.length < 6) {
              r = v.charAt(1);
              g = v.charAt(2);
              b = v.charAt(3);
              v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
              a = parseInt(v.substr(1, 6), 16);
              return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
            }
            v = parseInt(v.substr(1), 16);
            a = [v >> 16, v >> 8 & _255, v & _255];
          } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
              h = +a[0] % 360 / 360;
              s = +a[1] / 100;
              l = +a[2] / 100;
              g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
              r = l * 2 - g;
              a.length > 3 && (a[3] *= 1);
              a[0] = _hue(h + 1 / 3, r, g);
              a[1] = _hue(h, r, g);
              a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
              a = v.match(_numExp);
              forceAlpha && a.length < 4 && (a[3] = 1);
              return a;
            }
          } else {
            a = v.match(_strictNumExp) || _colorLookup.transparent;
          }
          a = a.map(Number);
        }
        if (toHSL && !wasHSL) {
          r = a[0] / _255;
          g = a[1] / _255;
          b = a[2] / _255;
          max = Math.max(r, g, b);
          min = Math.min(r, g, b);
          l = (max + min) / 2;
          if (max === min) {
            h = s = 0;
          } else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
          }
          a[0] = ~~(h + 0.5);
          a[1] = ~~(s * 100 + 0.5);
          a[2] = ~~(l * 100 + 0.5);
        }
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }, _colorOrderData = function _colorOrderData2(v) {
        var values = [], c = [], i2 = -1;
        v.split(_colorExp).forEach(function(v2) {
          var a = v2.match(_numWithUnitExp) || [];
          values.push.apply(values, a);
          c.push(i2 += a.length + 1);
        });
        values.c = c;
        return values;
      }, _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
        var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i2 = 0, c, shell, d, l;
        if (!colors) {
          return s;
        }
        colors = colors.map(function(color) {
          return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
        });
        if (orderMatchData) {
          d = _colorOrderData(s);
          c = orderMatchData.c;
          if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for (; i2 < l; i2++) {
              result += shell[i2] + (~c.indexOf(i2) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
          }
        }
        if (!shell) {
          shell = s.split(_colorExp);
          l = shell.length - 1;
          for (; i2 < l; i2++) {
            result += shell[i2] + colors[i2];
          }
        }
        return result + shell[l];
      }, _colorExp = function() {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
        for (p in _colorLookup) {
          s += "|" + p + "\\b";
        }
        return new RegExp(s + ")", "gi");
      }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter2(a) {
        var combined = a.join(" "), toHSL;
        _colorExp.lastIndex = 0;
        if (_colorExp.test(combined)) {
          toHSL = _hslExp.test(combined);
          a[1] = _formatColors(a[1], toHSL);
          a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
          return true;
        }
      }, _tickerActive, _ticker = function() {
        var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
          var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
          (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
          _lastUpdate += elapsed;
          time = _lastUpdate - _startTime;
          overlap = time - _nextTime;
          if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1e3;
            _self.time = time = time / 1e3;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
          }
          manual || (_id = _req(_tick2));
          if (dispatch) {
            for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
              _listeners3[_i2](time, _delta, frame, v);
            }
          }
        };
        _self = {
          time: 0,
          frame: 0,
          tick: function tick() {
            _tick(true);
          },
          deltaRatio: function deltaRatio(fps) {
            return _delta / (1e3 / (fps || 60));
          },
          wake: function wake() {
            if (_coreReady) {
              if (!_coreInitted5 && _windowExists5()) {
                _win5 = _coreInitted5 = window;
                _doc5 = _win5.document || {};
                _globals.gsap = gsap12;
                (_win5.gsapVersions || (_win5.gsapVersions = [])).push(gsap12.version);
                _install(_installScope || _win5.GreenSockGlobals || !_win5.gsap && _win5 || {});
                _registerPluginQueue.forEach(_createPlugin);
              }
              _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
              _id && _self.sleep();
              _req = _raf || function(f) {
                return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
              };
              _tickerActive = 1;
              _tick(2);
            }
          },
          sleep: function sleep() {
            (_raf ? cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
          },
          lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || Infinity;
            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
          },
          fps: function fps(_fps) {
            _gap = 1e3 / (_fps || 240);
            _nextTime = _self.time * 1e3 + _gap;
          },
          add: function add(callback2, once, prioritize) {
            var func = once ? function(t, d, f, v) {
              callback2(t, d, f, v);
              _self.remove(func);
            } : callback2;
            _self.remove(callback2);
            _listeners3[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
          },
          remove: function remove(callback2, i2) {
            ~(i2 = _listeners3.indexOf(callback2)) && _listeners3.splice(i2, 1) && _i2 >= i2 && _i2--;
          },
          _listeners: _listeners3
        };
        return _self;
      }(), _wake = function _wake2() {
        return !_tickerActive && _ticker.wake();
      }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString2(value) {
        var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i2 = 1, l = split.length, index, val, parsedVal;
        for (; i2 < l; i2++) {
          val = split[i2];
          index = i2 !== l - 1 ? val.lastIndexOf(",") : val.length;
          parsedVal = val.substr(0, index);
          obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
          key = val.substr(index + 1).trim();
        }
        return obj;
      }, _valueInParentheses = function _valueInParentheses2(value) {
        var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
        return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
      }, _configEaseFromString = function _configEaseFromString2(name) {
        var split = (name + "").split("("), ease = _easeMap[split[0]];
        return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
      }, _invertEase = function _invertEase2(ease) {
        return function(p) {
          return 1 - ease(1 - p);
        };
      }, _propagateYoyoEase = function _propagateYoyoEase2(timeline, isYoyo) {
        var child = timeline._first, ease;
        while (child) {
          if (child instanceof Timeline) {
            _propagateYoyoEase2(child, isYoyo);
          } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) {
              _propagateYoyoEase2(child.timeline, isYoyo);
            } else {
              ease = child._ease;
              child._ease = child._yEase;
              child._yEase = ease;
              child._yoyo = isYoyo;
            }
          }
          child = child._next;
        }
      }, _parseEase = function _parseEase2(ease, defaultEase) {
        return !ease ? defaultEase : (_isFunction3(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
      }, _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
        if (easeOut === void 0) {
          easeOut = function easeOut2(p) {
            return 1 - easeIn(1 - p);
          };
        }
        if (easeInOut === void 0) {
          easeInOut = function easeInOut2(p) {
            return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
          };
        }
        var ease = {
          easeIn,
          easeOut,
          easeInOut
        }, lowercaseName;
        _forEachName(names, function(name) {
          _easeMap[name] = _globals[name] = ease;
          _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
          for (var p in ease) {
            _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
          }
        });
        return ease;
      }, _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
        return function(p) {
          return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
        };
      }, _configElastic = function _configElastic2(type, amplitude, period) {
        var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
          return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        p2 = _2PI / p2;
        ease.config = function(amplitude2, period2) {
          return _configElastic2(type, amplitude2, period2);
        };
        return ease;
      }, _configBack = function _configBack2(type, overshoot) {
        if (overshoot === void 0) {
          overshoot = 1.70158;
        }
        var easeOut = function easeOut2(p) {
          return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
          return 1 - easeOut(1 - p);
        } : _easeInOutFromOut(easeOut);
        ease.config = function(overshoot2) {
          return _configBack2(type, overshoot2);
        };
        return ease;
      };
      _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i2) {
        var power = i2 < 5 ? i2 + 1 : i2;
        _insertEase(name + ",Power" + (power - 1), i2 ? function(p) {
          return Math.pow(p, power);
        } : function(p) {
          return p;
        }, function(p) {
          return 1 - Math.pow(1 - p, power);
        }, function(p) {
          return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
        });
      });
      _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
      _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
      (function(n, c) {
        var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
          return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
        };
        _insertEase("Bounce", function(p) {
          return 1 - easeOut(1 - p);
        }, easeOut);
      })(7.5625, 2.75);
      _insertEase("Expo", function(p) {
        return p ? Math.pow(2, 10 * (p - 1)) : 0;
      });
      _insertEase("Circ", function(p) {
        return -(_sqrt(1 - p * p) - 1);
      });
      _insertEase("Sine", function(p) {
        return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
      });
      _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
      _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
        config: function config2(steps, immediateStart) {
          if (steps === void 0) {
            steps = 1;
          }
          var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
          return function(p) {
            return ((p2 * _clamp4(0, max, p) | 0) + p3) * p1;
          };
        }
      };
      _defaults2.ease = _easeMap["quad.out"];
      _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
        return _callbackNames += name + "," + name + "Params,";
      });
      var GSCache = function GSCache2(target, harness) {
        this.id = _gsID++;
        target._gsap = this;
        this.target = target;
        this.harness = harness;
        this.get = harness ? harness.get : _getProperty;
        this.set = harness ? harness.getSetter : _getSetter;
      };
      var Animation = function() {
        function Animation2(vars) {
          this.vars = vars;
          this._delay = +vars.delay || 0;
          if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
          }
          this._ts = 1;
          _setDuration(this, +vars.duration, 1, 1);
          this.data = vars.data;
          if (_context5) {
            this._ctx = _context5;
            _context5.data.push(this);
          }
          _tickerActive || _ticker.wake();
        }
        var _proto = Animation2.prototype;
        _proto.delay = function delay(value) {
          if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
          }
          return this._delay;
        };
        _proto.duration = function duration(value) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
        };
        _proto.totalDuration = function totalDuration(value) {
          if (!arguments.length) {
            return this._tDur;
          }
          this._dirty = 0;
          return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
        };
        _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
          _wake();
          if (!arguments.length) {
            return this._tTime;
          }
          var parent = this._dp;
          if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this);
            while (parent && parent.parent) {
              if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                parent.totalTime(parent._tTime, true);
              }
              parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
              _addToTimeline(this._dp, this, this._start - this._delay);
            }
          }
          if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            this._ts || (this._pTime = _totalTime);
            _lazySafeRender(this, _totalTime, suppressEvents);
          }
          return this;
        };
        _proto.time = function time(value, suppressEvents) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
        };
        _proto.totalProgress = function totalProgress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
        };
        _proto.progress = function progress(value, suppressEvents) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
        };
        _proto.iteration = function iteration(value, suppressEvents) {
          var cycleDuration = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
        };
        _proto.timeScale = function timeScale(value, suppressEvents) {
          if (!arguments.length) {
            return this._rts === -_tinyNum ? 0 : this._rts;
          }
          if (this._rts === value) {
            return this;
          }
          var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
          this._rts = +value || 0;
          this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
          this.totalTime(_clamp4(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
          _setEnd(this);
          return _recacheAncestors(this);
        };
        _proto.paused = function paused(value) {
          if (!arguments.length) {
            return this._ps;
          }
          if (this._ps !== value) {
            this._ps = value;
            if (value) {
              this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
              this._ts = this._act = 0;
            } else {
              _wake();
              this._ts = this._rts;
              this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
            }
          }
          return this;
        };
        _proto.startTime = function startTime(value) {
          if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
          }
          return this._start;
        };
        _proto.endTime = function endTime(includeRepeats) {
          return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
        };
        _proto.rawTime = function rawTime(wrapRepeats) {
          var parent = this.parent || this._dp;
          return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
        };
        _proto.revert = function revert(config2) {
          if (config2 === void 0) {
            config2 = _revertConfig;
          }
          var prevIsReverting = _reverting;
          _reverting = config2;
          if (this._initted || this._startAt) {
            this.timeline && this.timeline.revert(config2);
            this.totalTime(-0.01, config2.suppressEvents);
          }
          this.data !== "nested" && config2.kill !== false && this.kill();
          _reverting = prevIsReverting;
          return this;
        };
        _proto.globalTime = function globalTime(rawTime) {
          var animation = this, time = arguments.length ? rawTime : animation.rawTime();
          while (animation) {
            time = animation._start + time / (Math.abs(animation._ts) || 1);
            animation = animation._dp;
          }
          return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
        };
        _proto.repeat = function repeat(value) {
          if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
          }
          return this._repeat === -2 ? Infinity : this._repeat;
        };
        _proto.repeatDelay = function repeatDelay(value) {
          if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
          }
          return this._rDelay;
        };
        _proto.yoyo = function yoyo(value) {
          if (arguments.length) {
            this._yoyo = value;
            return this;
          }
          return this._yoyo;
        };
        _proto.seek = function seek(position, suppressEvents) {
          return this.totalTime(_parsePosition3(this, position), _isNotFalse(suppressEvents));
        };
        _proto.restart = function restart(includeDelay, suppressEvents) {
          return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
        };
        _proto.play = function play(from, suppressEvents) {
          from != null && this.seek(from, suppressEvents);
          return this.reversed(false).paused(false);
        };
        _proto.reverse = function reverse(from, suppressEvents) {
          from != null && this.seek(from || this.totalDuration(), suppressEvents);
          return this.reversed(true).paused(false);
        };
        _proto.pause = function pause(atTime, suppressEvents) {
          atTime != null && this.seek(atTime, suppressEvents);
          return this.paused(true);
        };
        _proto.resume = function resume() {
          return this.paused(false);
        };
        _proto.reversed = function reversed(value) {
          if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
            return this;
          }
          return this._rts < 0;
        };
        _proto.invalidate = function invalidate() {
          this._initted = this._act = 0;
          this._zTime = -_tinyNum;
          return this;
        };
        _proto.isActive = function isActive() {
          var parent = this.parent || this._dp, start = this._start, rawTime;
          return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
        };
        _proto.eventCallback = function eventCallback(type, callback2, params) {
          var vars = this.vars;
          if (arguments.length > 1) {
            if (!callback2) {
              delete vars[type];
            } else {
              vars[type] = callback2;
              params && (vars[type + "Params"] = params);
              type === "onUpdate" && (this._onUpdate = callback2);
            }
            return this;
          }
          return vars[type];
        };
        _proto.then = function then(onFulfilled) {
          var self2 = this;
          return new Promise(function(resolve) {
            var f = _isFunction3(onFulfilled) ? onFulfilled : _passThrough3, _resolve = function _resolve2() {
              var _then = self2.then;
              self2.then = null;
              _isFunction3(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
              resolve(f);
              self2.then = _then;
            };
            if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
              _resolve();
            } else {
              self2._prom = _resolve;
            }
          });
        };
        _proto.kill = function kill() {
          _interrupt(this);
        };
        return Animation2;
      }();
      _setDefaults3(Animation.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: false,
        parent: null,
        _initted: false,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -_tinyNum,
        _prom: 0,
        _ps: false,
        _rts: 1
      });
      var Timeline = function(_Animation) {
        _inheritsLoose(Timeline2, _Animation);
        function Timeline2(vars, position) {
          var _this;
          if (vars === void 0) {
            vars = {};
          }
          _this = _Animation.call(this, vars) || this;
          _this.labels = {};
          _this.smoothChildTiming = !!vars.smoothChildTiming;
          _this.autoRemoveChildren = !!vars.autoRemoveChildren;
          _this._sort = _isNotFalse(vars.sortChildren);
          _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
          vars.reversed && _this.reverse();
          vars.paused && _this.paused(true);
          vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
          return _this;
        }
        var _proto2 = Timeline2.prototype;
        _proto2.to = function to(targets, vars, position) {
          _createTweenType(0, arguments, this);
          return this;
        };
        _proto2.from = function from(targets, vars, position) {
          _createTweenType(1, arguments, this);
          return this;
        };
        _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
          _createTweenType(2, arguments, this);
          return this;
        };
        _proto2.set = function set(targets, vars, position) {
          vars.duration = 0;
          vars.parent = this;
          _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
          vars.immediateRender = !!vars.immediateRender;
          new Tween(targets, vars, _parsePosition3(this, position), 1);
          return this;
        };
        _proto2.call = function call(callback2, params, position) {
          return _addToTimeline(this, Tween.delayedCall(0, callback2, params), position);
        };
        _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.duration = duration;
          vars.stagger = vars.stagger || stagger;
          vars.onComplete = onCompleteAll;
          vars.onCompleteParams = onCompleteAllParams;
          vars.parent = this;
          new Tween(targets, vars, _parsePosition3(this, position));
          return this;
        };
        _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
          vars.runBackwards = 1;
          _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
          return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
          toVars.startAt = fromVars;
          _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
          return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
        };
        _proto2.render = function render(totalTime, suppressEvents, force) {
          var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
          this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
          if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
              tTime += this._time - prevTime;
              totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
              dur || (prevTime = this._zTime);
              (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
              yoyo = this._yoyo;
              cycleDuration = dur + this._rDelay;
              if (this._repeat < -1 && totalTime < 0) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
              time = _roundPrecise(tTime % cycleDuration);
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                iteration = ~~(tTime / cycleDuration);
                if (iteration && iteration === tTime / cycleDuration) {
                  time = dur;
                  iteration--;
                }
                time > dur && (time = dur);
              }
              prevIteration = _animationCycle(this._tTime, cycleDuration);
              !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
              if (yoyo && iteration & 1) {
                time = dur - time;
                isYoyo = 1;
              }
              if (iteration !== prevIteration && !this._lock) {
                var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                iteration < prevIteration && (rewinding = !rewinding);
                prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
                this._lock = 1;
                this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                this._tTime = tTime;
                !suppressEvents && this.parent && _callback3(this, "onRepeat");
                this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                  return this;
                }
                dur = this._dur;
                tDur = this._tDur;
                if (doesWrap) {
                  this._lock = 2;
                  prevTime = rewinding ? dur : -1e-4;
                  this.render(prevTime, true);
                  this.vars.repeatRefresh && !isYoyo && this.invalidate();
                }
                this._lock = 0;
                if (!this._ts && !prevPaused) {
                  return this;
                }
                _propagateYoyoEase(this, isYoyo);
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
              pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
              if (pauseTween) {
                tTime -= time - (time = pauseTween._start);
              }
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale;
            if (!this._initted) {
              this._onUpdate = this.vars.onUpdate;
              this._initted = 1;
              this._zTime = totalTime;
              prevTime = 0;
            }
            if (!prevTime && time && !suppressEvents && !iteration) {
              _callback3(this, "onStart");
              if (this._tTime !== tTime) {
                return this;
              }
            }
            if (time >= prevTime && totalTime >= 0) {
              child = this._first;
              while (child) {
                next = child._next;
                if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
                  child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = -_tinyNum);
                    break;
                  }
                }
                child = next;
              }
            } else {
              child = this._last;
              var adjustedTime = totalTime < 0 ? totalTime : time;
              while (child) {
                next = child._prev;
                if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                  if (child.parent !== this) {
                    return this.render(totalTime, suppressEvents, force);
                  }
                  child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
                  if (time !== this._time || !this._ts && !prevPaused) {
                    pauseTween = 0;
                    next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                    break;
                  }
                }
                child = next;
              }
            }
            if (pauseTween && !suppressEvents) {
              this.pause();
              pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
              if (this._ts) {
                this._start = prevStart;
                _setEnd(this);
                return this.render(totalTime, suppressEvents, force);
              }
            }
            this._onUpdate && !suppressEvents && _callback3(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
              if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                if (!this._lock) {
                  (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                  if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                    _callback3(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                  }
                }
              }
            }
          }
          return this;
        };
        _proto2.add = function add(child, position) {
          var _this2 = this;
          _isNumber3(position) || (position = _parsePosition3(this, position, child));
          if (!(child instanceof Animation)) {
            if (_isArray(child)) {
              child.forEach(function(obj) {
                return _this2.add(obj, position);
              });
              return this;
            }
            if (_isString3(child)) {
              return this.addLabel(child, position);
            }
            if (_isFunction3(child)) {
              child = Tween.delayedCall(0, child);
            } else {
              return this;
            }
          }
          return this !== child ? _addToTimeline(this, child, position) : this;
        };
        _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
          if (nested === void 0) {
            nested = true;
          }
          if (tweens === void 0) {
            tweens = true;
          }
          if (timelines === void 0) {
            timelines = true;
          }
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = -_bigNum;
          }
          var a = [], child = this._first;
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              if (child instanceof Tween) {
                tweens && a.push(child);
              } else {
                timelines && a.push(child);
                nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
              }
            }
            child = child._next;
          }
          return a;
        };
        _proto2.getById = function getById(id) {
          var animations = this.getChildren(1, 1, 1), i2 = animations.length;
          while (i2--) {
            if (animations[i2].vars.id === id) {
              return animations[i2];
            }
          }
        };
        _proto2.remove = function remove(child) {
          if (_isString3(child)) {
            return this.removeLabel(child);
          }
          if (_isFunction3(child)) {
            return this.killTweensOf(child);
          }
          _removeLinkedListItem(this, child);
          if (child === this._recent) {
            this._recent = this._last;
          }
          return _uncache(this);
        };
        _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
          if (!arguments.length) {
            return this._tTime;
          }
          this._forcing = 1;
          if (!this._dp && this._ts) {
            this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
          }
          _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
          this._forcing = 0;
          return this;
        };
        _proto2.addLabel = function addLabel(label, position) {
          this.labels[label] = _parsePosition3(this, position);
          return this;
        };
        _proto2.removeLabel = function removeLabel(label) {
          delete this.labels[label];
          return this;
        };
        _proto2.addPause = function addPause(position, callback2, params) {
          var t = Tween.delayedCall(0, callback2 || _emptyFunc, params);
          t.data = "isPause";
          this._hasPause = 1;
          return _addToTimeline(this, t, _parsePosition3(this, position));
        };
        _proto2.removePause = function removePause(position) {
          var child = this._first;
          position = _parsePosition3(this, position);
          while (child) {
            if (child._start === position && child.data === "isPause") {
              _removeFromParent(child);
            }
            child = child._next;
          }
        };
        _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          var tweens = this.getTweensOf(targets, onlyActive), i2 = tweens.length;
          while (i2--) {
            _overwritingTween !== tweens[i2] && tweens[i2].kill(targets, props);
          }
          return this;
        };
        _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
          var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber3(onlyActive), children;
          while (child) {
            if (child instanceof Tween) {
              if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                a.push(child);
              }
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
              a.push.apply(a, children);
            }
            child = child._next;
          }
          return a;
        };
        _proto2.tweenTo = function tweenTo(position, vars) {
          vars = vars || {};
          var tl = this, endTime = _parsePosition3(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults3({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
              tl.pause();
              if (!initted) {
                var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                initted = 1;
              }
              _onStart && _onStart.apply(tween, onStartParams || []);
            }
          }, vars));
          return immediateRender ? tween.render(0) : tween;
        };
        _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
          return this.tweenTo(toPosition, _setDefaults3({
            startAt: {
              time: _parsePosition3(this, fromPosition)
            }
          }, vars));
        };
        _proto2.recent = function recent() {
          return this._recent;
        };
        _proto2.nextLabel = function nextLabel(afterTime) {
          if (afterTime === void 0) {
            afterTime = this._time;
          }
          return _getLabelInDirection(this, _parsePosition3(this, afterTime));
        };
        _proto2.previousLabel = function previousLabel(beforeTime) {
          if (beforeTime === void 0) {
            beforeTime = this._time;
          }
          return _getLabelInDirection(this, _parsePosition3(this, beforeTime), 1);
        };
        _proto2.currentLabel = function currentLabel(value) {
          return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
        };
        _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
          if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = 0;
          }
          var child = this._first, labels = this.labels, p;
          while (child) {
            if (child._start >= ignoreBeforeTime) {
              child._start += amount;
              child._end += amount;
            }
            child = child._next;
          }
          if (adjustLabels) {
            for (p in labels) {
              if (labels[p] >= ignoreBeforeTime) {
                labels[p] += amount;
              }
            }
          }
          return _uncache(this);
        };
        _proto2.invalidate = function invalidate(soft) {
          var child = this._first;
          this._lock = 0;
          while (child) {
            child.invalidate(soft);
            child = child._next;
          }
          return _Animation.prototype.invalidate.call(this, soft);
        };
        _proto2.clear = function clear(includeLabels) {
          if (includeLabels === void 0) {
            includeLabels = true;
          }
          var child = this._first, next;
          while (child) {
            next = child._next;
            this.remove(child);
            child = next;
          }
          this._dp && (this._time = this._tTime = this._pTime = 0);
          includeLabels && (this.labels = {});
          return _uncache(this);
        };
        _proto2.totalDuration = function totalDuration(value) {
          var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
          if (arguments.length) {
            return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
          }
          if (self2._dirty) {
            parent = self2.parent;
            while (child) {
              prev = child._prev;
              child._dirty && child.totalDuration();
              start = child._start;
              if (start > prevStart && self2._sort && child._ts && !self2._lock) {
                self2._lock = 1;
                _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
              } else {
                prevStart = start;
              }
              if (start < 0 && child._ts) {
                max -= start;
                if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
                  self2._start += start / self2._ts;
                  self2._time -= start;
                  self2._tTime -= start;
                }
                self2.shiftChildren(-start, false, -Infinity);
                prevStart = 0;
              }
              child._end > max && child._ts && (max = child._end);
              child = prev;
            }
            _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
            self2._dirty = 0;
          }
          return self2._tDur;
        };
        Timeline2.updateRoot = function updateRoot(time) {
          if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
          }
          if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
              if (_config.autoSleep && _ticker._listeners.length < 2) {
                while (child && !child._ts) {
                  child = child._next;
                }
                child || _ticker.sleep();
              }
            }
          }
        };
        return Timeline2;
      }(Animation);
      _setDefaults3(Timeline.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
        var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (hasRandom = ~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }
        if (stringFilter) {
          a = [start, end];
          stringFilter(a, target, prop);
          start = a[0];
          end = a[1];
        }
        startNums = start.match(_complexStringNumExp) || [];
        while (result = _complexStringNumExp.exec(end)) {
          endNum = result[0];
          chunk = end.substring(index, result.index);
          if (color) {
            color = (color + 1) % 5;
          } else if (chunk.substr(-5) === "rgba(") {
            color = 1;
          }
          if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0;
            pt._pt = {
              _next: pt._pt,
              p: chunk || matchIndex === 1 ? chunk : ",",
              s: startNum,
              c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
              m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
          }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : "";
        pt.fp = funcParam;
        if (_relExp.test(end) || hasRandom) {
          pt.e = 0;
        }
        this._pt = pt;
        return pt;
      }, _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
        _isFunction3(end) && (end = end(index || 0, target, targets));
        var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction3(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction3(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction3(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
        if (_isString3(end)) {
          if (~end.indexOf("random(")) {
            end = _replaceRandom(end);
          }
          if (end.charAt(1) === "=") {
            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) {
              end = pt;
            }
          }
        }
        if (!optional || parsedStart !== end || _forceAllPropTweens) {
          if (!isNaN(parsedStart * end) && end !== "") {
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
          }
          !currentValue && !(prop in target) && _missingPlugin(prop, end);
          return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
        }
      }, _processVars = function _processVars2(vars, index, target, targets, tween) {
        _isFunction3(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
        if (!_isObject3(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
          return _isString3(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
        }
        var copy = {}, p;
        for (p in vars) {
          copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
        }
        return copy;
      }, _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
        var plugin, pt, ptLookup, i2;
        if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
          if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
            i2 = plugin._props.length;
            while (i2--) {
              ptLookup[plugin._props[i2]] = pt;
            }
          }
        }
        return plugin;
      }, _overwritingTween, _forceAllPropTweens, _initTween = function _initTween2(tween, time, tTime) {
        var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites2, tl = tween.timeline, cleanVars, i2, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
        tl && (!keyframes || !ease) && (ease = "none");
        tween._ease = _parseEase(ease, _defaults2.ease);
        tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults2.ease)) : 0;
        if (yoyoEase && tween._yoyo && !tween._repeat) {
          yoyoEase = tween._yEase;
          tween._yEase = tween._ease;
          tween._ease = yoyoEase;
        }
        tween._from = !tl && !!vars.runBackwards;
        if (!tl || keyframes && !vars.stagger) {
          harness = targets[0] ? _getCache(targets[0]).harness : 0;
          harnessVars = harness && vars[harness.prop];
          cleanVars = _copyExcluding(vars, _reservedProps);
          if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1);
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
            prevStartAt._lazy = 0;
          }
          if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults3({
              data: "isStart",
              overwrite: false,
              parent,
              immediateRender: true,
              lazy: !prevStartAt && _isNotFalse(lazy),
              startAt: null,
              delay: 0,
              onUpdate: onUpdate && function() {
                return _callback3(tween, "onUpdate");
              },
              stagger: 0
            }, startAt)));
            tween._startAt._dp = 0;
            tween._startAt._sat = tween;
            time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
            if (immediateRender) {
              if (dur && time <= 0 && tTime <= 0) {
                time && (tween._zTime = time);
                return;
              }
            }
          } else if (runBackwards && dur) {
            if (!prevStartAt) {
              time && (immediateRender = false);
              p = _setDefaults3({
                overwrite: false,
                data: "isFromStart",
                lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                immediateRender,
                stagger: 0,
                parent
              }, cleanVars);
              harnessVars && (p[harness.prop] = harnessVars);
              _removeFromParent(tween._startAt = Tween.set(targets, p));
              tween._startAt._dp = 0;
              tween._startAt._sat = tween;
              time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
              tween._zTime = time;
              if (!immediateRender) {
                _initTween2(tween._startAt, _tinyNum, _tinyNum);
              } else if (!time) {
                return;
              }
            }
          }
          tween._pt = tween._ptCache = 0;
          lazy = dur && _isNotFalse(lazy) || lazy && !dur;
          for (i2 = 0; i2 < targets.length; i2++) {
            target = targets[i2];
            gsData = target._gsap || _harness(targets)[i2]._gsap;
            tween._ptLookup[i2] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
            index = fullTargets === targets ? i2 : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
              tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
              plugin._props.forEach(function(name) {
                ptLookup[name] = pt;
              });
              plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
              for (p in cleanVars) {
                if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                  plugin.priority && (hasPriority = 1);
                } else {
                  ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                }
              }
            }
            tween._op && tween._op[i2] && tween.kill(target, tween._op[i2]);
            if (autoOverwrite && tween._pt) {
              _overwritingTween = tween;
              _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
              overwritten = !tween.parent;
              _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
          }
          hasPriority && _sortPropTweensByPriority(tween);
          tween._onInit && tween._onInit(tween);
        }
        tween._onUpdate = onUpdate;
        tween._initted = (!tween._op || tween._pt) && !overwritten;
        keyframes && time <= 0 && tl.render(_bigNum, true, true);
      }, _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
        var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i2;
        if (!ptCache) {
          ptCache = tween._ptCache[property] = [];
          lookup = tween._ptLookup;
          i2 = tween._targets.length;
          while (i2--) {
            pt = lookup[i2][property];
            if (pt && pt.d && pt.d._pt) {
              pt = pt.d._pt;
              while (pt && pt.p !== property && pt.fp !== property) {
                pt = pt._next;
              }
            }
            if (!pt) {
              _forceAllPropTweens = 1;
              tween.vars[property] = "+=0";
              _initTween(tween, time);
              _forceAllPropTweens = 0;
              return skipRecursion ? _warn(property + " not eligible for reset") : 1;
            }
            ptCache.push(pt);
          }
        }
        i2 = ptCache.length;
        while (i2--) {
          rootPT = ptCache[i2];
          pt = rootPT._pt || rootPT;
          pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
          pt.c = value - pt.s;
          rootPT.e && (rootPT.e = _round5(value) + getUnit(rootPT.e));
          rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
        }
      }, _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
        var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i2, aliases;
        if (!propertyAliases) {
          return vars;
        }
        copy = _merge({}, vars);
        for (p in propertyAliases) {
          if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i2 = aliases.length;
            while (i2--) {
              copy[aliases[i2]] = copy[p];
            }
          }
        }
        return copy;
      }, _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
        var ease = obj.ease || easeEach || "power1.inOut", p, a;
        if (_isArray(obj)) {
          a = allProps[prop] || (allProps[prop] = []);
          obj.forEach(function(value, i2) {
            return a.push({
              t: i2 / (obj.length - 1) * 100,
              v: value,
              e: ease
            });
          });
        } else {
          for (p in obj) {
            a = allProps[p] || (allProps[p] = []);
            p === "ease" || a.push({
              t: parseFloat(prop),
              v: obj[p],
              e: ease
            });
          }
        }
      }, _parseFuncOrString = function _parseFuncOrString2(value, tween, i2, target, targets) {
        return _isFunction3(value) ? value.call(tween, i2, target, targets) : _isString3(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
      }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
      _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
        return _staggerPropsToSkip[name] = 1;
      });
      var Tween = function(_Animation2) {
        _inheritsLoose(Tween2, _Animation2);
        function Tween2(targets, vars, position, skipInherit) {
          var _this3;
          if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
          }
          _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
          var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber3(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i2, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
          _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
          _this3._ptLookup = [];
          _this3._overwrite = overwrite;
          if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
              data: "nested",
              defaults: defaults || {},
              targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            });
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
              l = parsedTargets.length;
              staggerFunc = stagger && distribute(stagger);
              if (_isObject3(stagger)) {
                for (p in stagger) {
                  if (~_staggerTweenProps.indexOf(p)) {
                    staggerVarsToMerge || (staggerVarsToMerge = {});
                    staggerVarsToMerge[p] = stagger[p];
                  }
                }
              }
              for (i2 = 0; i2 < l; i2++) {
                copy = _copyExcluding(vars, _staggerPropsToSkip);
                copy.stagger = 0;
                yoyoEase && (copy.yoyoEase = yoyoEase);
                staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                curTarget = parsedTargets[i2];
                copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i2, curTarget, parsedTargets);
                copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i2, curTarget, parsedTargets) || 0) - _this3._delay;
                if (!stagger && l === 1 && copy.delay) {
                  _this3._delay = delay = copy.delay;
                  _this3._start += delay;
                  copy.delay = 0;
                }
                tl.to(curTarget, copy, staggerFunc ? staggerFunc(i2, curTarget, parsedTargets) : 0);
                tl._ease = _easeMap.none;
              }
              tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
            } else if (keyframes) {
              _inheritDefaults(_setDefaults3(tl.vars.defaults, {
                ease: "none"
              }));
              tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
              var time = 0, a, kf, v;
              if (_isArray(keyframes)) {
                keyframes.forEach(function(frame) {
                  return tl.to(parsedTargets, frame, ">");
                });
                tl.duration();
              } else {
                copy = {};
                for (p in keyframes) {
                  p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                }
                for (p in copy) {
                  a = copy[p].sort(function(a2, b) {
                    return a2.t - b.t;
                  });
                  time = 0;
                  for (i2 = 0; i2 < a.length; i2++) {
                    kf = a[i2];
                    v = {
                      ease: kf.e,
                      duration: (kf.t - (i2 ? a[i2 - 1].t : 0)) / 100 * duration
                    };
                    v[p] = kf.v;
                    tl.to(parsedTargets, v, time);
                    time += v.duration;
                  }
                }
                tl.duration() < duration && tl.to({}, {
                  duration: duration - tl.duration()
                });
              }
            }
            duration || _this3.duration(duration = tl.duration());
          } else {
            _this3.timeline = 0;
          }
          if (overwrite === true && !_suppressOverwrites2) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
          }
          _addToTimeline(parent, _assertThisInitialized(_this3), position);
          vars.reversed && _this3.reverse();
          vars.paused && _this3.paused(true);
          if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum;
            _this3.render(Math.max(0, -delay) || 0);
          }
          scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
          return _this3;
        }
        var _proto3 = Tween2.prototype;
        _proto3.render = function render(totalTime, suppressEvents, force) {
          var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
          if (!dur) {
            _renderZeroDurationTween(this, totalTime, suppressEvents, force);
          } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
              cycleDuration = dur + this._rDelay;
              if (this._repeat < -1 && isNegative) {
                return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
              }
              time = _roundPrecise(tTime % cycleDuration);
              if (tTime === tDur) {
                iteration = this._repeat;
                time = dur;
              } else {
                iteration = ~~(tTime / cycleDuration);
                if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
                  time = dur;
                  iteration--;
                }
                time > dur && (time = dur);
              }
              isYoyo = this._yoyo && iteration & 1;
              if (isYoyo) {
                yoyoEase = this._yEase;
                time = dur - time;
              }
              prevIteration = _animationCycle(this._tTime, cycleDuration);
              if (time === prevTime && !force && this._initted && iteration === prevIteration) {
                this._tTime = tTime;
                return this;
              }
              if (iteration !== prevIteration) {
                timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
                  this._lock = force = 1;
                  this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                }
              }
            }
            if (!this._initted) {
              if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                this._tTime = 0;
                return this;
              }
              if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
                return this;
              }
              if (dur !== this._dur) {
                return this.render(totalTime, suppressEvents, force);
              }
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
              this._act = 1;
              this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) {
              this.ratio = ratio = 1 - ratio;
            }
            if (time && !prevTime && !suppressEvents && !iteration) {
              _callback3(this, "onStart");
              if (this._tTime !== tTime) {
                return this;
              }
            }
            pt = this._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
              isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
              _callback3(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback3(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
              isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
              (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                _callback3(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
          return this;
        };
        _proto3.targets = function targets() {
          return this._targets;
        };
        _proto3.invalidate = function invalidate(soft) {
          (!soft || !this.vars.runBackwards) && (this._startAt = 0);
          this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
          this._ptLookup = [];
          this.timeline && this.timeline.invalidate(soft);
          return _Animation2.prototype.invalidate.call(this, soft);
        };
        _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
          _tickerActive || _ticker.wake();
          this._ts || this.play();
          var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
          this._initted || _initTween(this, time);
          ratio = this._ease(time / this._dur);
          if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
            return this.resetTo(property, value, start, startIsRelative, 1);
          }
          _alignPlayhead(this, 0);
          this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
          return this.render(0);
        };
        _proto3.kill = function kill(targets, vars) {
          if (vars === void 0) {
            vars = "all";
          }
          if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? _interrupt(this) : this;
          }
          if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
            return this;
          }
          var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i2;
          if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
          }
          overwrittenProps = this._op = this._op || [];
          if (vars !== "all") {
            if (_isString3(vars)) {
              p = {};
              _forEachName(vars, function(name) {
                return p[name] = 1;
              });
              vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
          }
          i2 = parsedTargets.length;
          while (i2--) {
            if (~killingTargets.indexOf(parsedTargets[i2])) {
              curLookup = propTweenLookup[i2];
              if (vars === "all") {
                overwrittenProps[i2] = vars;
                props = curLookup;
                curOverwriteProps = {};
              } else {
                curOverwriteProps = overwrittenProps[i2] = overwrittenProps[i2] || {};
                props = vars;
              }
              for (p in props) {
                pt = curLookup && curLookup[p];
                if (pt) {
                  if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                    _removeLinkedListItem(this, pt, "_pt");
                  }
                  delete curLookup[p];
                }
                if (curOverwriteProps !== "all") {
                  curOverwriteProps[p] = 1;
                }
              }
            }
          }
          this._initted && !this._pt && firstPT && _interrupt(this);
          return this;
        };
        Tween2.to = function to(targets, vars) {
          return new Tween2(targets, vars, arguments[2]);
        };
        Tween2.from = function from(targets, vars) {
          return _createTweenType(1, arguments);
        };
        Tween2.delayedCall = function delayedCall(delay, callback2, params, scope) {
          return new Tween2(callback2, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay,
            onComplete: callback2,
            onReverseComplete: callback2,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
          });
        };
        Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
          return _createTweenType(2, arguments);
        };
        Tween2.set = function set(targets, vars) {
          vars.duration = 0;
          vars.repeatDelay || (vars.repeat = 0);
          return new Tween2(targets, vars);
        };
        Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          return _globalTimeline.killTweensOf(targets, props, onlyActive);
        };
        return Tween2;
      }(Animation);
      _setDefaults3(Tween.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      });
      _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
        Tween[name] = function() {
          var tl = new Timeline(), params = _slice.call(arguments, 0);
          params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
          return tl[name].apply(tl, params);
        };
      });
      var _setterPlain = function _setterPlain2(target, property, value) {
        return target[property] = value;
      }, _setterFunc = function _setterFunc2(target, property, value) {
        return target[property](value);
      }, _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
        return target[property](data.fp, value);
      }, _setterAttribute = function _setterAttribute2(target, property, value) {
        return target.setAttribute(property, value);
      }, _getSetter = function _getSetter2(target, property) {
        return _isFunction3(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
      }, _renderPlain = function _renderPlain2(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
      }, _renderBoolean = function _renderBoolean2(ratio, data) {
        return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
      }, _renderComplexString = function _renderComplexString2(ratio, data) {
        var pt = data._pt, s = "";
        if (!ratio && data.b) {
          s = data.b;
        } else if (ratio === 1 && data.e) {
          s = data.e;
        } else {
          while (pt) {
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
            pt = pt._next;
          }
          s += data.c;
        }
        data.set(data.t, data.p, s, data);
      }, _renderPropTweens = function _renderPropTweens2(ratio, data) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      }, _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
        var pt = this._pt, next;
        while (pt) {
          next = pt._next;
          pt.p === property && pt.modifier(modifier, tween, target);
          pt = next;
        }
      }, _killPropTweensOf = function _killPropTweensOf2(property) {
        var pt = this._pt, hasNonDependentRemaining, next;
        while (pt) {
          next = pt._next;
          if (pt.p === property && !pt.op || pt.op === property) {
            _removeLinkedListItem(this, pt, "_pt");
          } else if (!pt.dep) {
            hasNonDependentRemaining = 1;
          }
          pt = next;
        }
        return !hasNonDependentRemaining;
      }, _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
        data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
      }, _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
        var pt = parent._pt, next, pt2, first, last;
        while (pt) {
          next = pt._next;
          pt2 = first;
          while (pt2 && pt2.pr > pt.pr) {
            pt2 = pt2._next;
          }
          if (pt._prev = pt2 ? pt2._prev : last) {
            pt._prev._next = pt;
          } else {
            first = pt;
          }
          if (pt._next = pt2) {
            pt2._prev = pt;
          } else {
            last = pt;
          }
          pt = next;
        }
        parent._pt = first;
      };
      var PropTween = function() {
        function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
          this.t = target;
          this.s = start;
          this.c = change;
          this.p = prop;
          this.r = renderer || _renderPlain;
          this.d = data || this;
          this.set = setter || _setterPlain;
          this.pr = priority || 0;
          this._next = next;
          if (next) {
            next._prev = this;
          }
        }
        var _proto4 = PropTween2.prototype;
        _proto4.modifier = function modifier(func, tween, target) {
          this.mSet = this.mSet || this.set;
          this.set = _setterWithModifier;
          this.m = func;
          this.mt = target;
          this.tween = tween;
        };
        return PropTween2;
      }();
      _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
        return _reservedProps[name] = 1;
      });
      _globals.TweenMax = _globals.TweenLite = Tween;
      _globals.TimelineLite = _globals.TimelineMax = Timeline;
      _globalTimeline = new Timeline({
        sortChildren: false,
        defaults: _defaults2,
        autoRemoveChildren: true,
        id: "root",
        smoothChildTiming: true
      });
      _config.stringFilter = _colorStringFilter;
      var _media = [], _listeners2 = {}, _emptyArray2 = [], _lastMediaTime = 0, _contextID = 0, _dispatch3 = function _dispatch4(type) {
        return (_listeners2[type] || _emptyArray2).map(function(f) {
          return f();
        });
      }, _onMediaChange = function _onMediaChange2() {
        var time = Date.now(), matches = [];
        if (time - _lastMediaTime > 2) {
          _dispatch3("matchMediaInit");
          _media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for (p in queries) {
              match = _win5.matchMedia(queries[p]).matches;
              match && (anyMatch = 1);
              if (match !== conditions[p]) {
                conditions[p] = match;
                toggled = 1;
              }
            }
            if (toggled) {
              c.revert();
              anyMatch && matches.push(c);
            }
          });
          _dispatch3("matchMediaRevert");
          matches.forEach(function(c) {
            return c.onMatch(c, function(func) {
              return c.add(null, func);
            });
          });
          _lastMediaTime = time;
          _dispatch3("matchMedia");
        }
      };
      var Context = function() {
        function Context2(func, scope) {
          this.selector = scope && selector(scope);
          this.data = [];
          this._r = [];
          this.isReverted = false;
          this.id = _contextID++;
          func && this.add(func);
        }
        var _proto5 = Context2.prototype;
        _proto5.add = function add(name, func, scope) {
          if (_isFunction3(name)) {
            scope = func;
            func = name;
            name = _isFunction3;
          }
          var self2 = this, f = function f2() {
            var prev = _context5, prevSelector = self2.selector, result;
            prev && prev !== self2 && prev.data.push(self2);
            scope && (self2.selector = selector(scope));
            _context5 = self2;
            result = func.apply(self2, arguments);
            _isFunction3(result) && self2._r.push(result);
            _context5 = prev;
            self2.selector = prevSelector;
            self2.isReverted = false;
            return result;
          };
          self2.last = f;
          return name === _isFunction3 ? f(self2, function(func2) {
            return self2.add(null, func2);
          }) : name ? self2[name] = f : f;
        };
        _proto5.ignore = function ignore(func) {
          var prev = _context5;
          _context5 = null;
          func(this);
          _context5 = prev;
        };
        _proto5.getTweens = function getTweens() {
          var a = [];
          this.data.forEach(function(e) {
            return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
          });
          return a;
        };
        _proto5.clear = function clear() {
          this._r.length = this.data.length = 0;
        };
        _proto5.kill = function kill(revert, matchMedia) {
          var _this4 = this;
          if (revert) {
            (function() {
              var tweens = _this4.getTweens(), i3 = _this4.data.length, t;
              while (i3--) {
                t = _this4.data[i3];
                if (t.data === "isFlip") {
                  t.revert();
                  t.getChildren(true, true, false).forEach(function(tween) {
                    return tweens.splice(tweens.indexOf(tween), 1);
                  });
                }
              }
              tweens.map(function(t2) {
                return {
                  g: t2._dur || t2._delay || t2._sat && !t2._sat.vars.immediateRender ? t2.globalTime(0) : -Infinity,
                  t: t2
                };
              }).sort(function(a, b) {
                return b.g - a.g || -Infinity;
              }).forEach(function(o) {
                return o.t.revert(revert);
              });
              i3 = _this4.data.length;
              while (i3--) {
                t = _this4.data[i3];
                if (t instanceof Timeline) {
                  if (t.data !== "nested") {
                    t.scrollTrigger && t.scrollTrigger.revert();
                    t.kill();
                  }
                } else {
                  !(t instanceof Tween) && t.revert && t.revert(revert);
                }
              }
              _this4._r.forEach(function(f) {
                return f(revert, _this4);
              });
              _this4.isReverted = true;
            })();
          } else {
            this.data.forEach(function(e) {
              return e.kill && e.kill();
            });
          }
          this.clear();
          if (matchMedia) {
            var i2 = _media.length;
            while (i2--) {
              _media[i2].id === this.id && _media.splice(i2, 1);
            }
          }
        };
        _proto5.revert = function revert(config2) {
          this.kill(config2 || {});
        };
        return Context2;
      }();
      var MatchMedia = function() {
        function MatchMedia2(scope) {
          this.contexts = [];
          this.scope = scope;
          _context5 && _context5.data.push(this);
        }
        var _proto6 = MatchMedia2.prototype;
        _proto6.add = function add(conditions, func, scope) {
          _isObject3(conditions) || (conditions = {
            matches: conditions
          });
          var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
          _context5 && !context.selector && (context.selector = _context5.selector);
          this.contexts.push(context);
          func = context.add("onMatch", func);
          context.queries = conditions;
          for (p in conditions) {
            if (p === "all") {
              active = 1;
            } else {
              mq = _win5.matchMedia(conditions[p]);
              if (mq) {
                _media.indexOf(context) < 0 && _media.push(context);
                (cond[p] = mq.matches) && (active = 1);
                mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
              }
            }
          }
          active && func(context, function(f) {
            return context.add(null, f);
          });
          return this;
        };
        _proto6.revert = function revert(config2) {
          this.kill(config2 || {});
        };
        _proto6.kill = function kill(revert) {
          this.contexts.forEach(function(c) {
            return c.kill(revert, true);
          });
        };
        return MatchMedia2;
      }();
      var _gsap = {
        registerPlugin: function registerPlugin() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          args.forEach(function(config2) {
            return _createPlugin(config2);
          });
        },
        timeline: function timeline(vars) {
          return new Timeline(vars);
        },
        getTweensOf: function getTweensOf(targets, onlyActive) {
          return _globalTimeline.getTweensOf(targets, onlyActive);
        },
        getProperty: function getProperty(target, property, unit, uncache) {
          _isString3(target) && (target = toArray(target)[0]);
          var getter = _getCache(target || {}).get, format = unit ? _passThrough3 : _numericIfPossible;
          unit === "native" && (unit = "");
          return !target ? target : !property ? function(property2, unit2, uncache2) {
            return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
          } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        },
        quickSetter: function quickSetter(target, property, unit) {
          target = toArray(target);
          if (target.length > 1) {
            var setters = target.map(function(t) {
              return gsap12.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
              var i2 = l;
              while (i2--) {
                setters[i2](value);
              }
            };
          }
          target = target[0] || {};
          var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
            var p2 = new Plugin();
            _quickTween._pt = 0;
            p2.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
            p2.render(1, p2);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
          } : cache.set(target, p);
          return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
          };
        },
        quickTo: function quickTo(target, property, vars) {
          var _merge2;
          var tween = gsap12.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func2(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
          };
          func.tween = tween;
          return func;
        },
        isTweening: function isTweening(targets) {
          return _globalTimeline.getTweensOf(targets, true).length > 0;
        },
        defaults: function defaults(value) {
          value && value.ease && (value.ease = _parseEase(value.ease, _defaults2.ease));
          return _mergeDeep(_defaults2, value || {});
        },
        config: function config2(value) {
          return _mergeDeep(_config, value || {});
        },
        registerEffect: function registerEffect(_ref3) {
          var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
          (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
          });
          _effects[name] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults3(vars || {}, defaults), tl);
          };
          if (extendTimeline) {
            Timeline.prototype[name] = function(targets, vars, position) {
              return this.add(_effects[name](targets, _isObject3(vars) ? vars : (position = vars) && {}, this), position);
            };
          }
        },
        registerEase: function registerEase(name, ease) {
          _easeMap[name] = _parseEase(ease);
        },
        parseEase: function parseEase(ease, defaultEase) {
          return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
        },
        getById: function getById(id) {
          return _globalTimeline.getById(id);
        },
        exportRoot: function exportRoot(vars, includeDelayedCalls) {
          if (vars === void 0) {
            vars = {};
          }
          var tl = new Timeline(vars), child, next;
          tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
          _globalTimeline.remove(tl);
          tl._dp = 0;
          tl._time = tl._tTime = _globalTimeline._time;
          child = _globalTimeline._first;
          while (child) {
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
              _addToTimeline(tl, child, child._start - child._delay);
            }
            child = next;
          }
          _addToTimeline(_globalTimeline, tl, 0);
          return tl;
        },
        context: function context(func, scope) {
          return func ? new Context(func, scope) : _context5;
        },
        matchMedia: function matchMedia(scope) {
          return new MatchMedia(scope);
        },
        matchMediaRefresh: function matchMediaRefresh() {
          return _media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for (p in cond) {
              if (cond[p]) {
                cond[p] = false;
                found = 1;
              }
            }
            found && c.revert();
          }) || _onMediaChange();
        },
        addEventListener: function addEventListener(type, callback2) {
          var a = _listeners2[type] || (_listeners2[type] = []);
          ~a.indexOf(callback2) || a.push(callback2);
        },
        removeEventListener: function removeEventListener(type, callback2) {
          var a = _listeners2[type], i2 = a && a.indexOf(callback2);
          i2 >= 0 && a.splice(i2, 1);
        },
        utils: {
          wrap,
          wrapYoyo,
          distribute,
          random,
          snap,
          normalize,
          getUnit,
          clamp,
          splitColor,
          toArray,
          selector,
          mapRange,
          pipe,
          unitize,
          interpolate,
          shuffle
        },
        install: _install,
        effects: _effects,
        ticker: _ticker,
        updateRoot: Timeline.updateRoot,
        plugins: _plugins,
        globalTimeline: _globalTimeline,
        core: {
          PropTween,
          globals: _addGlobal,
          Tween,
          Timeline,
          Animation,
          getCache: _getCache,
          _removeLinkedListItem,
          reverting: function reverting() {
            return _reverting;
          },
          context: function context(toAdd) {
            if (toAdd && _context5) {
              _context5.data.push(toAdd);
              toAdd._ctx = _context5;
            }
            return _context5;
          },
          suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites2 = value;
          }
        }
      };
      _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
        return _gsap[name] = Tween[name];
      });
      _ticker.add(Timeline.updateRoot);
      _quickTween = _gsap.to({}, {
        duration: 0
      });
      var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
        var pt = plugin._pt;
        while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
          pt = pt._next;
        }
        return pt;
      }, _addModifiers = function _addModifiers2(tween, modifiers) {
        var targets = tween._targets, p, i2, pt;
        for (p in modifiers) {
          i2 = targets.length;
          while (i2--) {
            pt = tween._ptLookup[i2][p];
            if (pt && (pt = pt.d)) {
              if (pt._pt) {
                pt = _getPluginPropTween(pt, p);
              }
              pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i2], p);
            }
          }
        }
      }, _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
        return {
          name,
          rawVars: 1,
          init: function init(target, vars, tween) {
            tween._onInit = function(tween2) {
              var temp, p;
              if (_isString3(vars)) {
                temp = {};
                _forEachName(vars, function(name2) {
                  return temp[name2] = 1;
                });
                vars = temp;
              }
              if (modifier) {
                temp = {};
                for (p in vars) {
                  temp[p] = modifier(vars[p]);
                }
                vars = temp;
              }
              _addModifiers(tween2, vars);
            };
          }
        };
      };
      var gsap12 = _gsap.registerPlugin({
        name: "attr",
        init: function init(target, vars, tween, index, targets) {
          var p, pt, v;
          this.tween = tween;
          for (p in vars) {
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v;
            this._props.push(p);
          }
        },
        render: function render(ratio, data) {
          var pt = data._pt;
          while (pt) {
            _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
            pt = pt._next;
          }
        }
      }, {
        name: "endArray",
        init: function init(target, value) {
          var i2 = value.length;
          while (i2--) {
            this.add(target, i2, target[i2] || 0, value[i2], 0, 0, 0, 0, 0, 1);
          }
        }
      }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
      Tween.version = Timeline.version = gsap12.version = "3.12.5";
      _coreReady = 1;
      _windowExists5() && _wake();
      var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
      var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting$1, _windowExists$1 = function _windowExists6() {
        return typeof window !== "undefined";
      }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp2 = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
      }, _renderCSSProp = function _renderCSSProp2(ratio, data) {
        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
      }, _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
        return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
      }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
        return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
      }, _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
        var value = data.s + data.c * ratio;
        data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
      }, _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
      }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
        return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
      }, _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
        return target.style[property] = value;
      }, _setterCSSProp = function _setterCSSProp2(target, property, value) {
        return target.style.setProperty(property, value);
      }, _setterTransform = function _setterTransform2(target, property, value) {
        return target._gsap[property] = value;
      }, _setterScale = function _setterScale2(target, property, value) {
        return target._gsap.scaleX = target._gsap.scaleY = value;
      }, _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache.scaleX = cache.scaleY = value;
        cache.renderTransform(ratio, cache);
      }, _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
        var cache = target._gsap;
        cache[property] = value;
        cache.renderTransform(ratio, cache);
      }, _transformProp2 = "transform", _transformOriginProp = _transformProp2 + "Origin", _saveStyle = function _saveStyle2(property, isNotCSS) {
        var _this = this;
        var target = this.target, style = target.style, cache = target._gsap;
        if (property in _transformProps && style) {
          this.tfm = this.tfm || {};
          if (property !== "transform") {
            property = _propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
              return _this.tfm[a] = _get(target, a);
            }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
            property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
          } else {
            return _propertyAliases.transform.split(",").forEach(function(p) {
              return _saveStyle2.call(_this, p, isNotCSS);
            });
          }
          if (this.props.indexOf(_transformProp2) >= 0) {
            return;
          }
          if (cache.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push(_transformOriginProp, isNotCSS, "");
          }
          property = _transformProp2;
        }
        (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
      }, _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
        if (style.translate) {
          style.removeProperty("translate");
          style.removeProperty("scale");
          style.removeProperty("rotate");
        }
      }, _revertStyle = function _revertStyle2() {
        var props = this.props, target = this.target, style = target.style, cache = target._gsap, i2, p;
        for (i2 = 0; i2 < props.length; i2 += 3) {
          props[i2 + 1] ? target[props[i2]] = props[i2 + 2] : props[i2 + 2] ? style[props[i2]] = props[i2 + 2] : style.removeProperty(props[i2].substr(0, 2) === "--" ? props[i2] : props[i2].replace(_capsExp2, "-$1").toLowerCase());
        }
        if (this.tfm) {
          for (p in this.tfm) {
            cache[p] = this.tfm[p];
          }
          if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
          }
          i2 = _reverting$1();
          if ((!i2 || !i2.isStart) && !style[_transformProp2]) {
            _removeIndependentTransforms(style);
            if (cache.zOrigin && style[_transformOriginProp]) {
              style[_transformOriginProp] += " " + cache.zOrigin + "px";
              cache.zOrigin = 0;
              cache.renderTransform();
            }
            cache.uncache = 1;
          }
        }
      }, _getStyleSaver = function _getStyleSaver2(target, properties) {
        var saver = {
          target,
          props: [],
          revert: _revertStyle,
          save: _saveStyle
        };
        target._gsap || gsap12.core.getCache(target);
        properties && properties.split(",").forEach(function(p) {
          return saver.save(p);
        });
        return saver;
      }, _supports3D, _createElement = function _createElement2(type, ns) {
        var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
        return e && e.style ? e : _doc$1.createElement(type);
      }, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
        var cs = getComputedStyle(target);
        return cs[property] || cs.getPropertyValue(property.replace(_capsExp2, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
      }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
        var e = element || _tempDiv, s = e.style, i2 = 5;
        if (property in s && !preferPrefix) {
          return property;
        }
        property = property.charAt(0).toUpperCase() + property.substr(1);
        while (i2-- && !(_prefixes[i2] + property in s)) {
        }
        return i2 < 0 ? null : (i2 === 3 ? "ms" : i2 >= 0 ? _prefixes[i2] : "") + property;
      }, _initCore5 = function _initCore6() {
        if (_windowExists$1() && window.document) {
          _win$1 = window;
          _doc$1 = _win$1.document;
          _docElement = _doc$1.documentElement;
          _tempDiv = _createElement("div") || {
            style: {}
          };
          _tempDivStyler = _createElement("div");
          _transformProp2 = _checkPropPrefix(_transformProp2);
          _transformOriginProp = _transformProp2 + "Origin";
          _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
          _supports3D = !!_checkPropPrefix("perspective");
          _reverting$1 = gsap12.core.reverting;
          _pluginInitted = 1;
        }
      }, _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
        var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
        _docElement.appendChild(svg);
        svg.appendChild(this);
        this.style.display = "block";
        if (swapIfPossible) {
          try {
            bbox = this.getBBox();
            this._gsapBBox = this.getBBox;
            this.getBBox = _getBBoxHack2;
          } catch (e) {
          }
        } else if (this._gsapBBox) {
          bbox = this._gsapBBox();
        }
        if (oldParent) {
          if (oldSibling) {
            oldParent.insertBefore(this, oldSibling);
          } else {
            oldParent.appendChild(this);
          }
        }
        _docElement.removeChild(svg);
        this.style.cssText = oldCSS;
        return bbox;
      }, _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
        var i2 = attributesArray.length;
        while (i2--) {
          if (target.hasAttribute(attributesArray[i2])) {
            return target.getAttribute(attributesArray[i2]);
          }
        }
      }, _getBBox = function _getBBox2(target) {
        var bounds;
        try {
          bounds = target.getBBox();
        } catch (error) {
          bounds = _getBBoxHack.call(target, true);
        }
        bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
        return bounds && !bounds.width && !bounds.x && !bounds.y ? {
          x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
          y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0
        } : bounds;
      }, _isSVG = function _isSVG2(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
      }, _removeProperty = function _removeProperty2(target, property) {
        if (property) {
          var style = target.style, first2Chars;
          if (property in _transformProps && property !== _transformOriginProp) {
            property = _transformProp2;
          }
          if (style.removeProperty) {
            first2Chars = property.substr(0, 2);
            if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
              property = "-" + property;
            }
            style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp2, "-$1").toLowerCase());
          } else {
            style.removeAttribute(property);
          }
        }
      }, _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
        var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
        plugin._pt = pt;
        pt.b = beginning;
        pt.e = end;
        plugin._props.push(property);
        return pt;
      }, _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1
      }, _nonStandardLayouts = {
        grid: 1,
        flex: 1
      }, _convertToUnit = function _convertToUnit2(target, property, value, unit) {
        var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
        if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
          return curValue;
        }
        curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
        isSVG = target.getCTM && _isSVG(target);
        if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
          px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
          return _round5(toPercent ? curValue / px * amount : curValue / 100 * px);
        }
        style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
        parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
        if (isSVG) {
          parent = (target.ownerSVGElement || {}).parentNode;
        }
        if (!parent || parent === _doc$1 || !parent.appendChild) {
          parent = _doc$1.body;
        }
        cache = parent._gsap;
        if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
          return _round5(curValue / cache.width * amount);
        } else {
          if (toPercent && (property === "height" || property === "width")) {
            var v = target.style[property];
            target.style[property] = amount + unit;
            px = target[measureProperty];
            v ? target.style[property] = v : _removeProperty(target, property);
          } else {
            (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
            parent === target && (style.position = "static");
            parent.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent.removeChild(_tempDiv);
            style.position = "absolute";
          }
          if (horizontal && toPercent) {
            cache = _getCache(parent);
            cache.time = _ticker.time;
            cache.width = parent[measureProperty];
          }
        }
        return _round5(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
      }, _get = function _get2(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore5();
        if (property in _propertyAliases && property !== "transform") {
          property = _propertyAliases[property];
          if (~property.indexOf(",")) {
            property = property.split(",")[0];
          }
        }
        if (_transformProps[property] && property !== "transform") {
          value = _parseTransform(target, uncache);
          value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
        } else {
          value = target.style[property];
          if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
            value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
          }
        }
        return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
      }, _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
        if (!start || start === "none") {
          var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
          if (s && s !== start) {
            prop = p;
            start = s;
          } else if (prop === "borderColor") {
            start = _getComputedProperty(target, "borderTopColor");
          }
        }
        var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
        pt.b = start;
        pt.e = end;
        start += "";
        end += "";
        if (end === "auto") {
          startValue = target.style[prop];
          target.style[prop] = end;
          end = _getComputedProperty(target, prop) || end;
          startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
        }
        a = [start, end];
        _colorStringFilter(a);
        start = a[0];
        end = a[1];
        startValues = start.match(_numWithUnitExp) || [];
        endValues = end.match(_numWithUnitExp) || [];
        if (endValues.length) {
          while (result = _numWithUnitExp.exec(end)) {
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
              color = (color + 1) % 5;
            } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
              color = 1;
            }
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
              startNum = parseFloat(startValue) || 0;
              startUnit = startValue.substr((startNum + "").length);
              endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
              endNum = parseFloat(endValue);
              endUnit = endValue.substr((endNum + "").length);
              index = _numWithUnitExp.lastIndex - endUnit.length;
              if (!endUnit) {
                endUnit = endUnit || _config.units[prop] || startUnit;
                if (index === end.length) {
                  end += endUnit;
                  pt.e += endUnit;
                }
              }
              if (startUnit !== endUnit) {
                startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
              }
              pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                s: startNum,
                c: endNum - startNum,
                m: color && color < 4 || prop === "zIndex" ? Math.round : 0
              };
            }
          }
          pt.c = index < end.length ? end.substring(index, end.length) : "";
        } else {
          pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
        }
        _relExp.test(end) && (pt.e = 0);
        this._pt = pt;
        return pt;
      }, _keywordToPercent = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
      }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
        var split = value.split(" "), x = split[0], y = split[1] || "50%";
        if (x === "top" || x === "bottom" || y === "left" || y === "right") {
          value = x;
          x = y;
          y = value;
        }
        split[0] = _keywordToPercent[x] || x;
        split[1] = _keywordToPercent[y] || y;
        return split.join(" ");
      }, _renderClearProps = function _renderClearProps2(ratio, data) {
        if (data.tween && data.tween._time === data.tween._dur) {
          var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i2;
          if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
          } else {
            props = props.split(",");
            i2 = props.length;
            while (--i2 > -1) {
              prop = props[i2];
              if (_transformProps[prop]) {
                clearTransforms = 1;
                prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp2;
              }
              _removeProperty(target, prop);
            }
          }
          if (clearTransforms) {
            _removeProperty(target, _transformProp2);
            if (cache) {
              cache.svg && target.removeAttribute("transform");
              _parseTransform(target, 1);
              cache.uncache = 1;
              _removeIndependentTransforms(style);
            }
          }
        }
      }, _specialProps = {
        clearProps: function clearProps(plugin, target, property, endValue, tween) {
          if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
          }
        }
      }, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform2(value) {
        return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
      }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
        var matrixString = _getComputedProperty(target, _transformProp2);
        return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round5);
      }, _getMatrix = function _getMatrix2(target, force2D) {
        var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
        if (cache.svg && target.getAttribute("transform")) {
          temp = target.transform.baseVal.consolidate().matrix;
          matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
          return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
        } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
          temp = style.display;
          style.display = "block";
          parent = target.parentNode;
          if (!parent || !target.offsetParent) {
            addedToDOM = 1;
            nextSibling = target.nextElementSibling;
            _docElement.appendChild(target);
          }
          matrix = _getComputedTransformMatrixAsArray(target);
          temp ? style.display = temp : _removeProperty(target, "display");
          if (addedToDOM) {
            nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
          }
        }
        return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
      }, _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
        var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
        if (!originIsAbsolute) {
          bounds = _getBBox(target);
          xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
          yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
        } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
          x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
          y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
          xOrigin = x;
          yOrigin = y;
        }
        if (smooth || smooth !== false && cache.smooth) {
          tx = xOrigin - xOriginOld;
          ty = yOrigin - yOriginOld;
          cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
          cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
        } else {
          cache.xOffset = cache.yOffset = 0;
        }
        cache.xOrigin = xOrigin;
        cache.yOrigin = yOrigin;
        cache.smooth = !!smooth;
        cache.origin = origin;
        cache.originIsAbsolute = !!originIsAbsolute;
        target.style[_transformOriginProp] = "0px 0px";
        if (pluginToAddPropTweensTo) {
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
          _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
        }
        target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
      }, _parseTransform = function _parseTransform2(target, uncache) {
        var cache = target._gsap || new GSCache(target);
        if ("x" in cache && !uncache && !cache.uncache) {
          return cache;
        }
        var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
        x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
        scaleX = scaleY = 1;
        cache.svg = !!(target.getCTM && _isSVG(target));
        if (cs.translate) {
          if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
            style[_transformProp2] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp2] !== "none" ? cs[_transformProp2] : "");
          }
          style.scale = style.rotate = style.translate = "none";
        }
        matrix = _getMatrix(target, cache.svg);
        if (cache.svg) {
          if (cache.uncache) {
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
          } else {
            t1 = !uncache && target.getAttribute("data-svg-origin");
          }
          _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
        }
        xOrigin = cache.xOrigin || 0;
        yOrigin = cache.yOrigin || 0;
        if (matrix !== _identity2DMatrix) {
          a = matrix[0];
          b = matrix[1];
          c = matrix[2];
          d = matrix[3];
          x = a12 = matrix[4];
          y = a22 = matrix[5];
          if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
              x -= xOrigin - (xOrigin * a + yOrigin * c);
              y -= yOrigin - (xOrigin * b + yOrigin * d);
            }
          } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a12 * cos + a13 * sin;
              t2 = a22 * cos + a23 * sin;
              t3 = a32 * cos + a33 * sin;
              a13 = a12 * -sin + a13 * cos;
              a23 = a22 * -sin + a23 * cos;
              a33 = a32 * -sin + a33 * cos;
              a43 = a42 * -sin + a43 * cos;
              a12 = t1;
              a22 = t2;
              a32 = t3;
            }
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a * cos - a13 * sin;
              t2 = b * cos - a23 * sin;
              t3 = c * cos - a33 * sin;
              a43 = d * sin + a43 * cos;
              a = t1;
              b = t2;
              c = t3;
            }
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(angle);
              sin = Math.sin(angle);
              t1 = a * cos + b * sin;
              t2 = a12 * cos + a22 * sin;
              b = b * cos - a * sin;
              a22 = a22 * cos - a12 * sin;
              a = t1;
              a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
              rotationX = rotation = 0;
              rotationY = 180 - rotationY;
            }
            scaleX = _round5(Math.sqrt(a * a + b * b + c * c));
            scaleY = _round5(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          }
          if (cache.svg) {
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp2));
            t1 && target.setAttribute("transform", t1);
          }
        }
        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
          if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
          } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
          }
        }
        uncache = uncache || cache.uncache;
        cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
        cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
        cache.z = z + px;
        cache.scaleX = _round5(scaleX);
        cache.scaleY = _round5(scaleY);
        cache.rotation = _round5(rotation) + deg;
        cache.rotationX = _round5(rotationX) + deg;
        cache.rotationY = _round5(rotationY) + deg;
        cache.skewX = skewX + deg;
        cache.skewY = skewY + deg;
        cache.transformPerspective = perspective + px;
        if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
          style[_transformOriginProp] = _firstTwoOnly(origin);
        }
        cache.xOffset = cache.yOffset = 0;
        cache.force3D = _config.force3D;
        cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
        cache.uncache = 0;
        return cache;
      }, _firstTwoOnly = function _firstTwoOnly2(value) {
        return (value = value.split(" "))[0] + " " + value[1];
      }, _addPxTranslate = function _addPxTranslate2(target, start, value) {
        var unit = getUnit(start);
        return _round5(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
      }, _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
        cache.z = "0px";
        cache.rotationY = cache.rotationX = "0deg";
        cache.force3D = 0;
        _renderCSSTransforms(ratio, cache);
      }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
        var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
          var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
          angle = parseFloat(rotationX) * _DEG2RAD;
          cos = Math.cos(angle);
          x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
          y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
          z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
        }
        if (transformPerspective !== _zeroPx) {
          transforms += "perspective(" + transformPerspective + _endParenthesis;
        }
        if (xPercent || yPercent) {
          transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
        }
        if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
          transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
        }
        if (rotation !== _zeroDeg) {
          transforms += "rotate(" + rotation + _endParenthesis;
        }
        if (rotationY !== _zeroDeg) {
          transforms += "rotateY(" + rotationY + _endParenthesis;
        }
        if (rotationX !== _zeroDeg) {
          transforms += "rotateX(" + rotationX + _endParenthesis;
        }
        if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
          transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
        }
        if (scaleX !== 1 || scaleY !== 1) {
          transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
        }
        target.style[_transformProp2] = transforms || "translate(0, 0)";
      }, _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
        var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
        rotation = parseFloat(rotation);
        skewX = parseFloat(skewX);
        skewY = parseFloat(skewY);
        if (skewY) {
          skewY = parseFloat(skewY);
          skewX += skewY;
          rotation += skewY;
        }
        if (rotation || skewX) {
          rotation *= _DEG2RAD;
          skewX *= _DEG2RAD;
          a11 = Math.cos(rotation) * scaleX;
          a21 = Math.sin(rotation) * scaleX;
          a12 = Math.sin(rotation - skewX) * -scaleY;
          a22 = Math.cos(rotation - skewX) * scaleY;
          if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
              temp = Math.tan(skewY);
              temp = Math.sqrt(1 + temp * temp);
              a11 *= temp;
              a21 *= temp;
            }
          }
          a11 = _round5(a11);
          a21 = _round5(a21);
          a12 = _round5(a12);
          a22 = _round5(a22);
        } else {
          a11 = scaleX;
          a22 = scaleY;
          a21 = a12 = 0;
        }
        if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
          tx = _convertToUnit(target, "x", x, "px");
          ty = _convertToUnit(target, "y", y, "px");
        }
        if (xOrigin || yOrigin || xOffset || yOffset) {
          tx = _round5(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
          ty = _round5(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
        }
        if (xPercent || yPercent) {
          temp = target.getBBox();
          tx = _round5(tx + xPercent / 100 * temp.width);
          ty = _round5(ty + yPercent / 100 * temp.height);
        }
        temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
        target.setAttribute("transform", temp);
        forceCSS && (target.style[_transformProp2] = temp);
      }, _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
        var cap = 360, isString = _isString3(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
        if (isString) {
          direction = endValue.split("_")[1];
          if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) {
              change += change < 0 ? cap : -cap;
            }
          }
          if (direction === "cw" && change < 0) {
            change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
          } else if (direction === "ccw" && change > 0) {
            change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
          }
        }
        plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
        pt.e = finalValue;
        pt.u = "deg";
        plugin._props.push(property);
        return pt;
      }, _assign = function _assign2(target, source) {
        for (var p in source) {
          target[p] = source[p];
        }
        return target;
      }, _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
        var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
        if (startCache.svg) {
          startValue = target.getAttribute("transform");
          target.setAttribute("transform", "");
          style[_transformProp2] = transforms;
          endCache = _parseTransform(target, 1);
          _removeProperty(target, _transformProp2);
          target.setAttribute("transform", startValue);
        } else {
          startValue = getComputedStyle(target)[_transformProp2];
          style[_transformProp2] = transforms;
          endCache = _parseTransform(target, 1);
          style[_transformProp2] = startValue;
        }
        for (p in _transformProps) {
          startValue = startCache[p];
          endValue = endCache[p];
          if (startValue !== endValue && exclude.indexOf(p) < 0) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
          }
        }
        _assign(endCache, startCache);
      };
      _forEachName("padding,margin,Width,Radius", function(name, index) {
        var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
          return index < 2 ? name + side : "border" + side + name;
        });
        _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
          var a, vars;
          if (arguments.length < 4) {
            a = props.map(function(prop) {
              return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
          }
          a = (endValue + "").split(" ");
          vars = {};
          props.forEach(function(prop, i2) {
            return vars[prop] = a[i2] = a[i2] || a[(i2 - 1) / 2 | 0];
          });
          plugin.init(target, vars, tween);
        };
      });
      var CSSPlugin = {
        name: "css",
        register: _initCore5,
        targetTest: function targetTest(target) {
          return target.style && target.nodeType;
        },
        init: function init(target, vars, tween, index, targets) {
          var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
          _pluginInitted || _initCore5();
          this.styles = this.styles || _getStyleSaver(target);
          inlineProps = this.styles.props;
          this.tween = tween;
          for (p in vars) {
            if (p === "autoRound") {
              continue;
            }
            endValue = vars[p];
            if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
              continue;
            }
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
              endValue = endValue.call(tween, index, target, targets);
              type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) {
              endValue = _replaceRandom(endValue);
            }
            if (specialProp) {
              specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            } else if (p.substr(0, 2) === "--") {
              startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
              endValue += "";
              _colorExp.lastIndex = 0;
              if (!_colorExp.test(startValue)) {
                startUnit = getUnit(startValue);
                endUnit = getUnit(endValue);
              }
              endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
              this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
              props.push(p);
              inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
              if (startAt && p in startAt) {
                startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                _isString3(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
                (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
              } else {
                startValue = _get(target, p);
              }
              startNum = parseFloat(startValue);
              relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
              relative && (endValue = endValue.substr(2));
              endNum = parseFloat(endValue);
              if (p in _propertyAliases) {
                if (p === "autoAlpha") {
                  if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                    startNum = 0;
                  }
                  inlineProps.push("visibility", 0, style.visibility);
                  _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                }
                if (p !== "scale" && p !== "transform") {
                  p = _propertyAliases[p];
                  ~p.indexOf(",") && (p = p.split(",")[0]);
                }
              }
              isTransformRelated = p in _transformProps;
              if (isTransformRelated) {
                this.styles.save(p);
                if (!transformPropTween) {
                  cache = target._gsap;
                  cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                  smooth = vars.smoothOrigin !== false && cache.smooth;
                  transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp2, 0, 1, cache.renderTransform, cache, 0, -1);
                  transformPropTween.dep = 1;
                }
                if (p === "scale") {
                  this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                  this._pt.u = 0;
                  props.push("scaleY", p);
                  p += "X";
                } else if (p === "transformOrigin") {
                  inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                  endValue = _convertKeywordsToPercentages(endValue);
                  if (cache.svg) {
                    _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                  } else {
                    endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                    endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                    _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                  }
                  continue;
                } else if (p === "svgOrigin") {
                  _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                  continue;
                } else if (p in _rotationalProperties) {
                  _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                  continue;
                } else if (p === "smoothOrigin") {
                  _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                  continue;
                } else if (p === "force3D") {
                  cache[p] = endValue;
                  continue;
                } else if (p === "transform") {
                  _addRawTransformPTs(this, endValue, target);
                  continue;
                }
              } else if (!(p in style)) {
                p = _checkPropPrefix(p) || p;
              }
              if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                startUnit = (startValue + "").substr((startNum + "").length);
                endNum || (endNum = 0);
                endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                this._pt.u = endUnit || 0;
                if (startUnit !== endUnit && endUnit !== "%") {
                  this._pt.b = startValue;
                  this._pt.r = _renderCSSPropWithBeginning;
                }
              } else if (!(p in style)) {
                if (p in target) {
                  this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                } else if (p !== "parseTransform") {
                  _missingPlugin(p, endValue);
                  continue;
                }
              } else {
                _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
              }
              isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
              props.push(p);
            }
          }
          hasPriority && _sortPropTweensByPriority(this);
        },
        render: function render(ratio, data) {
          if (data.tween._time || !_reverting$1()) {
            var pt = data._pt;
            while (pt) {
              pt.r(ratio, pt.d);
              pt = pt._next;
            }
          } else {
            data.styles.revert();
          }
        },
        get: _get,
        aliases: _propertyAliases,
        getSetter: function getSetter(target, property, plugin) {
          var p = _propertyAliases[property];
          p && p.indexOf(",") < 0 && (property = p);
          return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
        },
        core: {
          _removeProperty,
          _getMatrix
        }
      };
      gsap12.utils.checkPrefix = _checkPropPrefix;
      gsap12.core.getStyleSaver = _getStyleSaver;
      (function(positionAndScale, rotation, others, aliases) {
        var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
          _transformProps[name] = 1;
        });
        _forEachName(rotation, function(name) {
          _config.units[name] = "deg";
          _rotationalProperties[name] = 1;
        });
        _propertyAliases[all[13]] = positionAndScale + "," + rotation;
        _forEachName(aliases, function(name) {
          var split = name.split(":");
          _propertyAliases[split[1]] = all[split[0]];
        });
      })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
      _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
        _config.units[name] = "px";
      });
      gsap12.registerPlugin(CSSPlugin);
      var gsapWithCSS = gsap12.registerPlugin(CSSPlugin) || gsap12, TweenMaxWithCSS = gsapWithCSS.core.Tween;
      exports2.Back = Back;
      exports2.Bounce = Bounce;
      exports2.CSSPlugin = CSSPlugin;
      exports2.Circ = Circ;
      exports2.Cubic = Cubic;
      exports2.Elastic = Elastic;
      exports2.Expo = Expo;
      exports2.Linear = Linear;
      exports2.Power0 = Power0;
      exports2.Power1 = Power1;
      exports2.Power2 = Power2;
      exports2.Power3 = Power3;
      exports2.Power4 = Power4;
      exports2.Quad = Quad;
      exports2.Quart = Quart;
      exports2.Quint = Quint;
      exports2.Sine = Sine;
      exports2.SteppedEase = SteppedEase;
      exports2.Strong = Strong;
      exports2.TimelineLite = Timeline;
      exports2.TimelineMax = Timeline;
      exports2.TweenLite = Tween;
      exports2.TweenMax = TweenMaxWithCSS;
      exports2.default = gsapWithCSS;
      exports2.gsap = gsapWithCSS;
      if (typeof window === "undefined" || window !== exports2) {
        Object.defineProperty(exports2, "__esModule", { value: true });
      } else {
        delete window.default;
      }
    });
  }
});

// node_modules/gsap/Observer.js
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var gsap, _coreInitted, _clamp, _win, _doc, _docEl, _body, _isTouch, _pointerType, ScrollTrigger, _root, _normalizer, _eventTypes, _context, _getGSAP, _startup, _observers, _scrollers, _proxies, _getTime, _bridge, _integrate, _getProxyProp, _isViewport, _addListener, _removeListener, _scrollLeft, _scrollTop, _onScroll, _scrollCacheFunc, _horizontal, _vertical, _getTarget, _getScrollFunc, _getVelocityProp, _getEvent, _getAbsoluteMax, _setScrollTrigger, _initCore, Observer;
var init_Observer = __esm({
  "node_modules/gsap/Observer.js"() {
    _getGSAP = function _getGSAP2() {
      return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
    };
    _startup = 1;
    _observers = [];
    _scrollers = [];
    _proxies = [];
    _getTime = Date.now;
    _bridge = function _bridge2(name, value) {
      return value;
    };
    _integrate = function _integrate2() {
      var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
      scrollers.push.apply(scrollers, _scrollers);
      proxies.push.apply(proxies, _proxies);
      _scrollers = scrollers;
      _proxies = proxies;
      _bridge = function _bridge3(name, value) {
        return data[name](value);
      };
    };
    _getProxyProp = function _getProxyProp2(element, property) {
      return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
    };
    _isViewport = function _isViewport2(el) {
      return !!~_root.indexOf(el);
    };
    _addListener = function _addListener2(element, type, func, passive, capture) {
      return element.addEventListener(type, func, {
        passive: passive !== false,
        capture: !!capture
      });
    };
    _removeListener = function _removeListener2(element, type, func, capture) {
      return element.removeEventListener(type, func, !!capture);
    };
    _scrollLeft = "scrollLeft";
    _scrollTop = "scrollTop";
    _onScroll = function _onScroll2() {
      return _normalizer && _normalizer.isPressed || _scrollers.cache++;
    };
    _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
      var cachingFunc = function cachingFunc2(value) {
        if (value || value === 0) {
          _startup && (_win.history.scrollRestoration = "manual");
          var isNormalizing = _normalizer && _normalizer.isPressed;
          value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
          f(value);
          cachingFunc2.cacheID = _scrollers.cache;
          isNormalizing && _bridge("ss", value);
        } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
          cachingFunc2.cacheID = _scrollers.cache;
          cachingFunc2.v = f();
        }
        return cachingFunc2.v + cachingFunc2.offset;
      };
      cachingFunc.offset = 0;
      return f && cachingFunc;
    };
    _horizontal = {
      s: _scrollLeft,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
      })
    };
    _vertical = {
      s: _scrollTop,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: _horizontal,
      sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
      })
    };
    _getTarget = function _getTarget2(t, self2) {
      return (self2 && self2._ctx && self2._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
    };
    _getScrollFunc = function _getScrollFunc2(element, _ref) {
      var s = _ref.s, sc = _ref.sc;
      _isViewport(element) && (element = _doc.scrollingElement || _docEl);
      var i2 = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
      !~i2 && (i2 = _scrollers.push(element) - 1);
      _scrollers[i2 + offset] || _addListener(element, "scroll", _onScroll);
      var prev = _scrollers[i2 + offset], func = prev || (_scrollers[i2 + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
        return arguments.length ? element[s] = value : element[s];
      })));
      func.target = element;
      prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth");
      return func;
    };
    _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
      var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
        var t = _getTime();
        if (force || t - t1 > min) {
          v2 = v1;
          v1 = value2;
          t2 = t1;
          t1 = t;
        } else if (useDelta) {
          v1 += value2;
        } else {
          v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
        }
      }, reset = function reset2() {
        v2 = v1 = useDelta ? 0 : v1;
        t2 = t1 = 0;
      }, getVelocity = function getVelocity2(latestValue) {
        var tOld = t2, vOld = v2, t = _getTime();
        (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
        return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
      };
      return {
        update,
        reset,
        getVelocity
      };
    };
    _getEvent = function _getEvent2(e, preventDefault) {
      preventDefault && !e._gsapAllow && e.preventDefault();
      return e.changedTouches ? e.changedTouches[0] : e;
    };
    _getAbsoluteMax = function _getAbsoluteMax2(a) {
      var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
      return Math.abs(max) >= Math.abs(min) ? max : min;
    };
    _setScrollTrigger = function _setScrollTrigger2() {
      ScrollTrigger = gsap.core.globals().ScrollTrigger;
      ScrollTrigger && ScrollTrigger.core && _integrate();
    };
    _initCore = function _initCore2(core) {
      gsap = core || _getGSAP();
      if (!_coreInitted && gsap && typeof document !== "undefined" && document.body) {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
        _root = [_win, _doc, _docEl, _body];
        _clamp = gsap.utils.clamp;
        _context = gsap.core.context || function() {
        };
        _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
        _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
        _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
        setTimeout(function() {
          return _startup = 0;
        }, 500);
        _setScrollTrigger();
        _coreInitted = 1;
      }
      return _coreInitted;
    };
    _horizontal.op = _vertical;
    _scrollers.cache = 0;
    Observer = /* @__PURE__ */ function() {
      function Observer2(vars) {
        this.init(vars);
      }
      var _proto = Observer2.prototype;
      _proto.init = function init(vars) {
        _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
        ScrollTrigger || _setScrollTrigger();
        var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
        this.target = target = _getTarget(target) || _docEl;
        this.vars = vars;
        ignore && (ignore = gsap.utils.toArray(ignore));
        tolerance = tolerance || 1e-9;
        dragMinimum = dragMinimum || 0;
        wheelSpeed = wheelSpeed || 1;
        scrollSpeed = scrollSpeed || 1;
        type = type || "wheel,touch,pointer";
        debounce = debounce !== false;
        lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);
        var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
          return onClickTime = _getTime();
        }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
          return (self2.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
        }, onStopFunc = function onStopFunc2() {
          self2._vx.reset();
          self2._vy.reset();
          onStopDelayedCall.pause();
          onStop && onStop(self2);
        }, update = function update2() {
          var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
          onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
          if (changedX) {
            onRight && self2.deltaX > 0 && onRight(self2);
            onLeft && self2.deltaX < 0 && onLeft(self2);
            onChangeX && onChangeX(self2);
            onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
            prevDeltaX = self2.deltaX;
            deltaX[0] = deltaX[1] = deltaX[2] = 0;
          }
          if (changedY) {
            onDown && self2.deltaY > 0 && onDown(self2);
            onUp && self2.deltaY < 0 && onUp(self2);
            onChangeY && onChangeY(self2);
            onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
            prevDeltaY = self2.deltaY;
            deltaY[0] = deltaY[1] = deltaY[2] = 0;
          }
          if (moved || dragged) {
            onMove && onMove(self2);
            if (dragged) {
              onDrag(self2);
              dragged = false;
            }
            moved = false;
          }
          locked && !(locked = false) && onLockAxis && onLockAxis(self2);
          if (wheeled) {
            onWheel(self2);
            wheeled = false;
          }
          id = 0;
        }, onDelta = function onDelta2(x, y, index) {
          deltaX[index] += x;
          deltaY[index] += y;
          self2._vx.update(x);
          self2._vy.update(y);
          debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
          if (lockAxis && !axis) {
            self2.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
            locked = true;
          }
          if (axis !== "y") {
            deltaX[2] += x;
            self2._vx.update(x, true);
          }
          if (axis !== "x") {
            deltaY[2] += y;
            self2._vy.update(y, true);
          }
          debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, _onDrag = function _onDrag2(e) {
          if (_ignoreCheck(e, 1)) {
            return;
          }
          e = _getEvent(e, preventDefault);
          var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
          self2.x = x;
          self2.y = y;
          if (isDragging || Math.abs(self2.startX - x) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum) {
            onDrag && (dragged = true);
            isDragging || (self2.isDragging = true);
            onTouchOrPointerDelta(dx, dy);
            isDragging || onDragStart && onDragStart(self2);
          }
        }, _onPress = self2.onPress = function(e) {
          if (_ignoreCheck(e, 1) || e && e.button) {
            return;
          }
          self2.axis = axis = null;
          onStopDelayedCall.pause();
          self2.isPressed = true;
          e = _getEvent(e);
          prevDeltaX = prevDeltaY = 0;
          self2.startX = self2.x = e.clientX;
          self2.startY = self2.y = e.clientY;
          self2._vx.reset();
          self2._vy.reset();
          _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
          self2.deltaX = self2.deltaY = 0;
          onPress && onPress(self2);
        }, _onRelease = self2.onRelease = function(e) {
          if (_ignoreCheck(e, 1)) {
            return;
          }
          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging, isDragNotClick = wasDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e);
          if (!isDragNotClick && isTrackingDrag) {
            self2._vx.reset();
            self2._vy.reset();
            if (preventDefault && allowClicks) {
              gsap.delayedCall(0.08, function() {
                if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                  if (e.target.click) {
                    e.target.click();
                  } else if (ownerDoc.createEvent) {
                    var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                    syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                    e.target.dispatchEvent(syntheticEvent);
                  }
                }
              });
            }
          }
          self2.isDragging = self2.isGesturing = self2.isPressed = false;
          onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
          onDragEnd && wasDragging && onDragEnd(self2);
          onRelease && onRelease(self2, isDragNotClick);
        }, _onGestureStart = function _onGestureStart2(e) {
          return e.touches && e.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e, self2.isDragging);
        }, _onGestureEnd = function _onGestureEnd2() {
          return (self2.isGesturing = false) || onGestureEnd(self2);
        }, onScroll = function onScroll2(e) {
          if (_ignoreCheck(e)) {
            return;
          }
          var x = scrollFuncX(), y = scrollFuncY();
          onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
          scrollX = x;
          scrollY = y;
          onStop && onStopDelayedCall.restart(true);
        }, _onWheel = function _onWheel2(e) {
          if (_ignoreCheck(e)) {
            return;
          }
          e = _getEvent(e, preventDefault);
          onWheel && (wheeled = true);
          var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
          onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
          onStop && !isNormalizer && onStopDelayedCall.restart(true);
        }, _onMove = function _onMove2(e) {
          if (_ignoreCheck(e)) {
            return;
          }
          var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y;
          self2.x = x;
          self2.y = y;
          moved = true;
          onStop && onStopDelayedCall.restart(true);
          (dx || dy) && onTouchOrPointerDelta(dx, dy);
        }, _onHover = function _onHover2(e) {
          self2.event = e;
          onHover(self2);
        }, _onHoverEnd = function _onHoverEnd2(e) {
          self2.event = e;
          onHoverEnd(self2);
        }, _onClick = function _onClick2(e) {
          return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self2);
        };
        onStopDelayedCall = self2._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
        self2.deltaX = self2.deltaY = 0;
        self2._vx = _getVelocityProp(0, 50, true);
        self2._vy = _getVelocityProp(0, 50, true);
        self2.scrollX = scrollFuncX;
        self2.scrollY = scrollFuncY;
        self2.isDragging = self2.isGesturing = self2.isPressed = false;
        _context(this);
        self2.enable = function(e) {
          if (!self2.isEnabled) {
            _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
            type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
            type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
            if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
              _addListener(target, _eventTypes[0], _onPress, passive, capture);
              _addListener(ownerDoc, _eventTypes[2], _onRelease);
              _addListener(ownerDoc, _eventTypes[3], _onRelease);
              allowClicks && _addListener(target, "click", clickCapture, true, true);
              onClick && _addListener(target, "click", _onClick);
              onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
              onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
              onHover && _addListener(target, _pointerType + "enter", _onHover);
              onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
              onMove && _addListener(target, _pointerType + "move", _onMove);
            }
            self2.isEnabled = true;
            e && e.type && _onPress(e);
            onEnable && onEnable(self2);
          }
          return self2;
        };
        self2.disable = function() {
          if (self2.isEnabled) {
            _observers.filter(function(o) {
              return o !== self2 && _isViewport(o.target);
            }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
            if (self2.isPressed) {
              self2._vx.reset();
              self2._vy.reset();
              _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
            }
            _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
            _removeListener(target, "wheel", _onWheel, capture);
            _removeListener(target, _eventTypes[0], _onPress, capture);
            _removeListener(ownerDoc, _eventTypes[2], _onRelease);
            _removeListener(ownerDoc, _eventTypes[3], _onRelease);
            _removeListener(target, "click", clickCapture, true);
            _removeListener(target, "click", _onClick);
            _removeListener(ownerDoc, "gesturestart", _onGestureStart);
            _removeListener(ownerDoc, "gestureend", _onGestureEnd);
            _removeListener(target, _pointerType + "enter", _onHover);
            _removeListener(target, _pointerType + "leave", _onHoverEnd);
            _removeListener(target, _pointerType + "move", _onMove);
            self2.isEnabled = self2.isPressed = self2.isDragging = false;
            onDisable && onDisable(self2);
          }
        };
        self2.kill = self2.revert = function() {
          self2.disable();
          var i2 = _observers.indexOf(self2);
          i2 >= 0 && _observers.splice(i2, 1);
          _normalizer === self2 && (_normalizer = 0);
        };
        _observers.push(self2);
        isNormalizer && _isViewport(target) && (_normalizer = self2);
        self2.enable(event);
      };
      _createClass(Observer2, [{
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        }
      }, {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        }
      }]);
      return Observer2;
    }();
    Observer.version = "3.12.5";
    Observer.create = function(vars) {
      return new Observer(vars);
    };
    Observer.register = _initCore;
    Observer.getAll = function() {
      return _observers.slice();
    };
    Observer.getById = function(id) {
      return _observers.filter(function(o) {
        return o.vars.id === id;
      })[0];
    };
    _getGSAP() && gsap.registerPlugin(Observer);
  }
});

// node_modules/gsap/ScrollTrigger.js
var gsap2, _coreInitted2, _win2, _doc2, _docEl2, _body2, _root2, _resizeDelay, _toArray, _clamp2, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _normalizer2, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context2, _scrollRestoration, _div100vh, _100vh, _isReverted, _clampingMax, _limitCallbacks, _startup2, _getTime2, _time1, _lastScrollTime, _enabled, _parseClamp, _keepClamp, _rafBugFix, _pointerDownHandler, _pointerUpHandler, _passThrough, _round, _windowExists, _getGSAP3, _isViewport3, _getViewportDimension, _getBoundsFunc, _getSizeFunc, _getOffsetsFunc, _maxScroll, _iterateAutoRefresh, _isString, _isFunction, _isNumber, _isObject, _endAnimation, _callback, _abs, _left, _top, _right, _bottom, _width, _height, _Right, _Left, _Top, _Bottom, _padding, _margin, _Width, _Height, _px, _getComputedStyle, _makePositionable, _setDefaults, _getBounds, _getSize, _getLabelRatioArray, _getClosestLabel, _snapDirectional, _getLabelAtDirection, _multiListener, _addListener3, _removeListener3, _wheelListener, _markerDefaults, _defaults, _keywords, _offsetToPx, _createMarker, _positionMarker, _triggers, _ids, _rafID, _sync, _onScroll3, _setBaseDimensions, _onResize, _listeners, _emptyArray, _softRefresh, _dispatch, _savedStyles, _revertRecorded, _revertAll, _clearScrollMemory, _refreshingAll, _refreshID, _queueRefreshID, _queueRefreshAll, _refresh100vh, _hideAllMarkers, _refreshAll, _lastScroll, _direction, _primary, _updateAll, _propNamesToCopy, _stateProps, _swapPinOut, _swapPinIn, _capsExp, _setState, _getState, _copyState, _winOffsets, _parsePosition, _prefixExp, _reparent, _interruptionTracker, _shiftMarker, _getTweenCreator, ScrollTrigger2, _clampScrollAndGetDurationMultiplier, _allowNativePanning, _overflow, _nestedScroll, _inputObserver, _inputExp, _inputIsFocused, _captureInputs, _getScrollNormalizer;
var init_ScrollTrigger = __esm({
  "node_modules/gsap/ScrollTrigger.js"() {
    init_Observer();
    _startup2 = 1;
    _getTime2 = Date.now;
    _time1 = _getTime2();
    _lastScrollTime = 0;
    _enabled = 0;
    _parseClamp = function _parseClamp2(value, type, self2) {
      var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
      self2["_" + type + "Clamp"] = clamp;
      return clamp ? value.substr(6, value.length - 7) : value;
    };
    _keepClamp = function _keepClamp2(value, clamp) {
      return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
    };
    _rafBugFix = function _rafBugFix2() {
      return _enabled && requestAnimationFrame(_rafBugFix2);
    };
    _pointerDownHandler = function _pointerDownHandler2() {
      return _pointerIsDown = 1;
    };
    _pointerUpHandler = function _pointerUpHandler2() {
      return _pointerIsDown = 0;
    };
    _passThrough = function _passThrough2(v) {
      return v;
    };
    _round = function _round2(value) {
      return Math.round(value * 1e5) / 1e5 || 0;
    };
    _windowExists = function _windowExists2() {
      return typeof window !== "undefined";
    };
    _getGSAP3 = function _getGSAP4() {
      return gsap2 || _windowExists() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
    };
    _isViewport3 = function _isViewport4(e) {
      return !!~_root2.indexOf(e);
    };
    _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
      return (dimensionProperty === "Height" ? _100vh : _win2["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body2["client" + dimensionProperty];
    };
    _getBoundsFunc = function _getBoundsFunc2(element) {
      return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
        _winOffsets.width = _win2.innerWidth;
        _winOffsets.height = _100vh;
        return _winOffsets;
      } : function() {
        return _getBounds(element);
      });
    };
    _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
      var d = _ref.d, d2 = _ref.d2, a = _ref.a;
      return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
        return a()[d];
      } : function() {
        return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
      };
    };
    _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
      return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
        return _winOffsets;
      };
    };
    _maxScroll = function _maxScroll2(element, _ref2) {
      var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
      return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body2[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
    };
    _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
      for (var i2 = 0; i2 < _autoRefresh.length; i2 += 3) {
        (!events || ~events.indexOf(_autoRefresh[i2 + 1])) && func(_autoRefresh[i2], _autoRefresh[i2 + 1], _autoRefresh[i2 + 2]);
      }
    };
    _isString = function _isString2(value) {
      return typeof value === "string";
    };
    _isFunction = function _isFunction2(value) {
      return typeof value === "function";
    };
    _isNumber = function _isNumber2(value) {
      return typeof value === "number";
    };
    _isObject = function _isObject2(value) {
      return typeof value === "object";
    };
    _endAnimation = function _endAnimation2(animation, reversed, pause) {
      return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
    };
    _callback = function _callback2(self2, func) {
      if (self2.enabled) {
        var result = self2._ctx ? self2._ctx.add(function() {
          return func(self2);
        }) : func(self2);
        result && result.totalTime && (self2.callbackAnimation = result);
      }
    };
    _abs = Math.abs;
    _left = "left";
    _top = "top";
    _right = "right";
    _bottom = "bottom";
    _width = "width";
    _height = "height";
    _Right = "Right";
    _Left = "Left";
    _Top = "Top";
    _Bottom = "Bottom";
    _padding = "padding";
    _margin = "margin";
    _Width = "Width";
    _Height = "Height";
    _px = "px";
    _getComputedStyle = function _getComputedStyle2(element) {
      return _win2.getComputedStyle(element);
    };
    _makePositionable = function _makePositionable2(element) {
      var position = _getComputedStyle(element).position;
      element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
    };
    _setDefaults = function _setDefaults2(obj, defaults) {
      for (var p in defaults) {
        p in obj || (obj[p] = defaults[p]);
      }
      return obj;
    };
    _getBounds = function _getBounds2(element, withoutTransforms) {
      var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap2.to(element, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
      }).progress(1), bounds = element.getBoundingClientRect();
      tween && tween.progress(0).kill();
      return bounds;
    };
    _getSize = function _getSize2(element, _ref3) {
      var d2 = _ref3.d2;
      return element["offset" + d2] || element["client" + d2] || 0;
    };
    _getLabelRatioArray = function _getLabelRatioArray2(timeline) {
      var a = [], labels = timeline.labels, duration = timeline.duration(), p;
      for (p in labels) {
        a.push(labels[p] / duration);
      }
      return a;
    };
    _getClosestLabel = function _getClosestLabel2(animation) {
      return function(value) {
        return gsap2.utils.snap(_getLabelRatioArray(animation), value);
      };
    };
    _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
      var snap = gsap2.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
        return a2 - b;
      });
      return a ? function(value, direction, threshold) {
        if (threshold === void 0) {
          threshold = 1e-3;
        }
        var i2;
        if (!direction) {
          return snap(value);
        }
        if (direction > 0) {
          value -= threshold;
          for (i2 = 0; i2 < a.length; i2++) {
            if (a[i2] >= value) {
              return a[i2];
            }
          }
          return a[i2 - 1];
        } else {
          i2 = a.length;
          value += threshold;
          while (i2--) {
            if (a[i2] <= value) {
              return a[i2];
            }
          }
        }
        return a[0];
      } : function(value, direction, threshold) {
        if (threshold === void 0) {
          threshold = 1e-3;
        }
        var snapped = snap(value);
        return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
      };
    };
    _getLabelAtDirection = function _getLabelAtDirection2(timeline) {
      return function(value, st) {
        return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
      };
    };
    _multiListener = function _multiListener2(func, element, types, callback2) {
      return types.split(",").forEach(function(type) {
        return func(element, type, callback2);
      });
    };
    _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
      return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
      });
    };
    _removeListener3 = function _removeListener4(element, type, func, capture) {
      return element.removeEventListener(type, func, !!capture);
    };
    _wheelListener = function _wheelListener2(func, el, scrollFunc) {
      scrollFunc = scrollFunc && scrollFunc.wheelHandler;
      if (scrollFunc) {
        func(el, "wheel", scrollFunc);
        func(el, "touchmove", scrollFunc);
      }
    };
    _markerDefaults = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    };
    _defaults = {
      toggleActions: "play",
      anticipatePin: 0
    };
    _keywords = {
      top: 0,
      left: 0,
      center: 0.5,
      bottom: 1,
      right: 1
    };
    _offsetToPx = function _offsetToPx2(value, size) {
      if (_isString(value)) {
        var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
        if (~eqIndex) {
          value.indexOf("%") > eqIndex && (relative *= size / 100);
          value = value.substr(0, eqIndex - 1);
        }
        value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
      }
      return value;
    };
    _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
      var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
      var e = _doc2.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
      (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
      matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
      e._isStart = isStart;
      e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
      e.style.cssText = css;
      e.innerText = name || name === 0 ? type + "-" + name : type;
      parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
      e._offset = e["offset" + direction.op.d2];
      _positionMarker(e, 0, direction, isStart);
      return e;
    };
    _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
      var vars = {
        display: "block"
      }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
      marker._isFlipped = flipped;
      vars[direction.a + "Percent"] = flipped ? -100 : 0;
      vars[direction.a] = flipped ? "1px" : 0;
      vars["border" + side + _Width] = 1;
      vars["border" + oppositeSide + _Width] = 0;
      vars[direction.p] = start + "px";
      gsap2.set(marker, vars);
    };
    _triggers = [];
    _ids = {};
    _sync = function _sync2() {
      return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
    };
    _onScroll3 = function _onScroll4() {
      if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
        _scrollers.cache++;
        if (_normalizer2) {
          _rafID || (_rafID = requestAnimationFrame(_updateAll));
        } else {
          _updateAll();
        }
        _lastScrollTime || _dispatch("scrollStart");
        _lastScrollTime = _getTime2();
      }
    };
    _setBaseDimensions = function _setBaseDimensions2() {
      _baseScreenWidth = _win2.innerWidth;
      _baseScreenHeight = _win2.innerHeight;
    };
    _onResize = function _onResize2() {
      _scrollers.cache++;
      !_refreshing && !_ignoreResize && !_doc2.fullscreenElement && !_doc2.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win2.innerWidth || Math.abs(_win2.innerHeight - _baseScreenHeight) > _win2.innerHeight * 0.25) && _resizeDelay.restart(true);
    };
    _listeners = {};
    _emptyArray = [];
    _softRefresh = function _softRefresh2() {
      return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
    };
    _dispatch = function _dispatch2(type) {
      return _listeners[type] && _listeners[type].map(function(f) {
        return f();
      }) || _emptyArray;
    };
    _savedStyles = [];
    _revertRecorded = function _revertRecorded2(media) {
      for (var i2 = 0; i2 < _savedStyles.length; i2 += 5) {
        if (!media || _savedStyles[i2 + 4] && _savedStyles[i2 + 4].query === media) {
          _savedStyles[i2].style.cssText = _savedStyles[i2 + 1];
          _savedStyles[i2].getBBox && _savedStyles[i2].setAttribute("transform", _savedStyles[i2 + 2] || "");
          _savedStyles[i2 + 3].uncache = 1;
        }
      }
    };
    _revertAll = function _revertAll2(kill, media) {
      var trigger;
      for (_i = 0; _i < _triggers.length; _i++) {
        trigger = _triggers[_i];
        if (trigger && (!media || trigger._ctx === media)) {
          if (kill) {
            trigger.kill(1);
          } else {
            trigger.revert(true, true);
          }
        }
      }
      _isReverted = true;
      media && _revertRecorded(media);
      media || _dispatch("revert");
    };
    _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
      _scrollers.cache++;
      (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
        return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
      });
      _isString(scrollRestoration) && (_win2.history.scrollRestoration = _scrollRestoration = scrollRestoration);
    };
    _refreshID = 0;
    _queueRefreshAll = function _queueRefreshAll2() {
      if (_queueRefreshID !== _refreshID) {
        var id = _queueRefreshID = _refreshID;
        requestAnimationFrame(function() {
          return id === _refreshID && _refreshAll(true);
        });
      }
    };
    _refresh100vh = function _refresh100vh2() {
      _body2.appendChild(_div100vh);
      _100vh = !_normalizer2 && _div100vh.offsetHeight || _win2.innerHeight;
      _body2.removeChild(_div100vh);
    };
    _hideAllMarkers = function _hideAllMarkers2(hide) {
      return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
        return el.style.display = hide ? "none" : "block";
      });
    };
    _refreshAll = function _refreshAll2(force, skipRevert) {
      if (_lastScrollTime && !force && !_isReverted) {
        _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
        return;
      }
      _refresh100vh();
      _refreshingAll = ScrollTrigger2.isRefreshing = true;
      _scrollers.forEach(function(obj) {
        return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
      });
      var refreshInits = _dispatch("refreshInit");
      _sort && ScrollTrigger2.sort();
      skipRevert || _revertAll();
      _scrollers.forEach(function(obj) {
        if (_isFunction(obj)) {
          obj.smooth && (obj.target.style.scrollBehavior = "auto");
          obj(0);
        }
      });
      _triggers.slice(0).forEach(function(t) {
        return t.refresh();
      });
      _isReverted = false;
      _triggers.forEach(function(t) {
        if (t._subPinOffset && t.pin) {
          var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
          t.revert(true, 1);
          t.adjustPinSpacing(t.pin[prop] - original);
          t.refresh();
        }
      });
      _clampingMax = 1;
      _hideAllMarkers(true);
      _triggers.forEach(function(t) {
        var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
        (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
      });
      _hideAllMarkers(false);
      _clampingMax = 0;
      refreshInits.forEach(function(result) {
        return result && result.render && result.render(-1);
      });
      _scrollers.forEach(function(obj) {
        if (_isFunction(obj)) {
          obj.smooth && requestAnimationFrame(function() {
            return obj.target.style.scrollBehavior = "smooth";
          });
          obj.rec && obj(obj.rec);
        }
      });
      _clearScrollMemory(_scrollRestoration, 1);
      _resizeDelay.pause();
      _refreshID++;
      _refreshingAll = 2;
      _updateAll(2);
      _triggers.forEach(function(t) {
        return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
      });
      _refreshingAll = ScrollTrigger2.isRefreshing = false;
      _dispatch("refresh");
    };
    _lastScroll = 0;
    _direction = 1;
    _updateAll = function _updateAll2(force) {
      if (force === 2 || !_refreshingAll && !_isReverted) {
        ScrollTrigger2.isUpdating = true;
        _primary && _primary.update(0);
        var l = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
        _direction = _lastScroll > scroll ? -1 : 1;
        _refreshingAll || (_lastScroll = scroll);
        if (recordVelocity) {
          if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
            _lastScrollTime = 0;
            _dispatch("scrollEnd");
          }
          _time2 = _time1;
          _time1 = time;
        }
        if (_direction < 0) {
          _i = l;
          while (_i-- > 0) {
            _triggers[_i] && _triggers[_i].update(0, recordVelocity);
          }
          _direction = 1;
        } else {
          for (_i = 0; _i < l; _i++) {
            _triggers[_i] && _triggers[_i].update(0, recordVelocity);
          }
        }
        ScrollTrigger2.isUpdating = false;
      }
      _rafID = 0;
    };
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
    _swapPinOut = function _swapPinOut2(pin, spacer, state) {
      _setState(state);
      var cache = pin._gsap;
      if (cache.spacerIsNative) {
        _setState(cache.spacerState);
      } else if (pin._gsap.swappedIn) {
        var parent = spacer.parentNode;
        if (parent) {
          parent.insertBefore(pin, spacer);
          parent.removeChild(spacer);
        }
      }
      pin._gsap.swappedIn = false;
    };
    _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
      if (!pin._gsap.swappedIn) {
        var i2 = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
        while (i2--) {
          p = _propNamesToCopy[i2];
          spacerStyle[p] = cs[p];
        }
        spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
        cs.display === "inline" && (spacerStyle.display = "inline-block");
        pinStyle[_bottom] = pinStyle[_right] = "auto";
        spacerStyle.flexBasis = cs.flexBasis || "auto";
        spacerStyle.overflow = "visible";
        spacerStyle.boxSizing = "border-box";
        spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
        spacerStyle[_height] = _getSize(pin, _vertical) + _px;
        spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
        _setState(spacerState);
        pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
        pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
        pinStyle[_padding] = cs[_padding];
        if (pin.parentNode !== spacer) {
          pin.parentNode.insertBefore(spacer, pin);
          spacer.appendChild(pin);
        }
        pin._gsap.swappedIn = true;
      }
    };
    _capsExp = /([A-Z])/g;
    _setState = function _setState2(state) {
      if (state) {
        var style = state.t.style, l = state.length, i2 = 0, p, value;
        (state.t._gsap || gsap2.core.getCache(state.t)).uncache = 1;
        for (; i2 < l; i2 += 2) {
          value = state[i2 + 1];
          p = state[i2];
          if (value) {
            style[p] = value;
          } else if (style[p]) {
            style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
          }
        }
      }
    };
    _getState = function _getState2(element) {
      var l = _stateProps.length, style = element.style, state = [], i2 = 0;
      for (; i2 < l; i2++) {
        state.push(_stateProps[i2], style[_stateProps[i2]]);
      }
      state.t = element;
      return state;
    };
    _copyState = function _copyState2(state, override, omitOffsets) {
      var result = [], l = state.length, i2 = omitOffsets ? 8 : 0, p;
      for (; i2 < l; i2 += 2) {
        p = state[i2];
        result.push(p, p in override ? override[p] : state[i2 + 1]);
      }
      result.t = state.t;
      return result;
    };
    _winOffsets = {
      left: 0,
      top: 0
    };
    _parsePosition = function _parsePosition2(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
      _isFunction(value) && (value = value(self2));
      if (_isString(value) && value.substr(0, 3) === "max") {
        value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
      }
      var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
      containerAnimation && containerAnimation.seek(0);
      isNaN(value) || (value = +value);
      if (!_isNumber(value)) {
        _isFunction(trigger) && (trigger = trigger(self2));
        var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
        element = _getTarget(trigger, self2) || _body2;
        bounds = _getBounds(element) || {};
        if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
          display = element.style.display;
          element.style.display = "block";
          bounds = _getBounds(element);
          display ? element.style.display = display : element.style.removeProperty("display");
        }
        localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
        globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
        value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
        markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
        scrollerSize -= scrollerSize - globalOffset;
      } else {
        containerAnimation && (value = gsap2.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
        markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
      }
      if (clampZeroProp) {
        self2[clampZeroProp] = value || -1e-3;
        value < 0 && (value = 0);
      }
      if (marker) {
        var position = value + scrollerSize, isStart = marker._isStart;
        p1 = "scroll" + direction.d2;
        _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
        if (useFixedPosition) {
          scrollerBounds = _getBounds(markerScroller);
          useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
        }
      }
      if (containerAnimation && element) {
        p1 = _getBounds(element);
        containerAnimation.seek(scrollerMax);
        p2 = _getBounds(element);
        containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
        value = value / containerAnimation._caScrollDist * scrollerMax;
      }
      containerAnimation && containerAnimation.seek(time);
      return containerAnimation ? value : Math.round(value);
    };
    _prefixExp = /(webkit|moz|length|cssText|inset)/i;
    _reparent = function _reparent2(element, parent, top, left) {
      if (element.parentNode !== parent) {
        var style = element.style, p, cs;
        if (parent === _body2) {
          element._stOrig = style.cssText;
          cs = _getComputedStyle(element);
          for (p in cs) {
            if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
              style[p] = cs[p];
            }
          }
          style.top = top;
          style.left = left;
        } else {
          style.cssText = element._stOrig;
        }
        gsap2.core.getCache(element).uncache = 1;
        parent.appendChild(element);
      }
    };
    _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
      var last1 = initialValue, last2 = last1;
      return function(value) {
        var current = Math.round(getValueFunc());
        if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
          value = current;
          onInterrupt && onInterrupt();
        }
        last2 = last1;
        last1 = value;
        return value;
      };
    };
    _shiftMarker = function _shiftMarker2(marker, direction, value) {
      var vars = {};
      vars[direction.p] = "+=" + value;
      gsap2.set(marker, vars);
    };
    _getTweenCreator = function _getTweenCreator2(scroller, direction) {
      var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
        var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
        initialValue = initialValue || getScroll();
        var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
          tween.kill();
          getTween2.tween = 0;
        });
        change2 = change1 && change2 || 0;
        change1 = change1 || scrollTo - initialValue;
        tween && tween.kill();
        vars[prop] = scrollTo;
        vars.inherit = false;
        vars.modifiers = modifiers;
        modifiers[prop] = function() {
          return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
        };
        vars.onUpdate = function() {
          _scrollers.cache++;
          getTween2.tween && _updateAll();
        };
        vars.onComplete = function() {
          getTween2.tween = 0;
          onComplete && onComplete.call(tween);
        };
        tween = getTween2.tween = gsap2.to(scroller, vars);
        return tween;
      };
      scroller[prop] = getScroll;
      getScroll.wheelHandler = function() {
        return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
      };
      _addListener3(scroller, "wheel", getScroll.wheelHandler);
      ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
      return getTween;
    };
    ScrollTrigger2 = /* @__PURE__ */ function() {
      function ScrollTrigger4(vars, animation) {
        _coreInitted2 || ScrollTrigger4.register(gsap2) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
        _context2(this);
        this.init(vars, animation);
      }
      var _proto = ScrollTrigger4.prototype;
      _proto.init = function init(vars, animation) {
        this.progress = this.start = 0;
        this.vars && this.kill(true, true);
        if (!_enabled) {
          this.update = this.refresh = this.kill = _passThrough;
          return;
        }
        vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
          trigger: vars
        } : vars, _defaults);
        var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win2), scrollerCache = gsap2.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
          return vars.onRefreshInit(self2);
        }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
        self2._startClamp = self2._endClamp = false;
        self2._dir = direction;
        anticipatePin *= 45;
        self2.scroller = scroller;
        self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
        scroll1 = scrollFunc();
        self2.vars = vars;
        animation = animation || vars.animation;
        if ("refreshPriority" in vars) {
          _sort = 1;
          vars.refreshPriority === -9999 && (_primary = self2);
        }
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
          top: _getTweenCreator(scroller, _vertical),
          left: _getTweenCreator(scroller, _horizontal)
        };
        self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
        self2.scrubDuration = function(value) {
          scrubSmooth = _isNumber(value) && value;
          if (!scrubSmooth) {
            scrubTween && scrubTween.progress(1).kill();
            scrubTween = 0;
          } else {
            scrubTween ? scrubTween.duration(value) : scrubTween = gsap2.to(animation, {
              ease: "expo",
              totalProgress: "+=0",
              inherit: false,
              duration: scrubSmooth,
              paused: true,
              onComplete: function onComplete() {
                return onScrubComplete && onScrubComplete(self2);
              }
            });
          }
        };
        if (animation) {
          animation.vars.lazy = false;
          animation._initted && !self2.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
          self2.animation = animation.pause();
          animation.scrollTrigger = self2;
          self2.scrubDuration(scrub);
          snap1 = 0;
          id || (id = animation.vars.id);
        }
        if (snap) {
          if (!_isObject(snap) || snap.push) {
            snap = {
              snapTo: snap
            };
          }
          "scrollBehavior" in _body2.style && gsap2.set(isViewport ? [_body2, _docEl2] : scroller, {
            scrollBehavior: "auto"
          });
          _scrollers.forEach(function(o) {
            return _isFunction(o) && o.target === (isViewport ? _doc2.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
          });
          snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
            return _snapDirectional(snap.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
          } : gsap2.utils.snap(snap.snapTo);
          snapDurClamp = snap.duration || {
            min: 0.1,
            max: 2
          };
          snapDurClamp = _isObject(snapDurClamp) ? _clamp2(snapDurClamp.min, snapDurClamp.max) : _clamp2(snapDurClamp, snapDurClamp);
          snapDelayedCall = gsap2.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
            var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
            if ((refreshedRecently || Math.abs(self2.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
              var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap2.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
              endValue = snapFunc(naturalEnd, self2);
              _isNumber(endValue) || (endValue = naturalEnd);
              endScroll = Math.round(start + endValue * change);
              if (scroll <= end && scroll >= start && endScroll !== scroll) {
                if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                  return;
                }
                if (snap.inertia === false) {
                  change1 = endValue - progress;
                }
                tweenTo(endScroll, {
                  duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                  ease: snap.ease || "power3",
                  data: _abs(endScroll - scroll),
                  // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                  onInterrupt: function onInterrupt() {
                    return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
                  },
                  onComplete: function onComplete() {
                    self2.update();
                    lastSnap = scrollFunc();
                    if (animation) {
                      scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                    }
                    snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                    onSnapComplete && onSnapComplete(self2);
                    _onComplete && _onComplete(self2);
                  }
                }, scroll, change1 * change, endScroll - scroll - change1 * change);
                onStart && onStart(self2, tweenTo.tween);
              }
            } else if (self2.isActive && lastSnap !== scroll) {
              snapDelayedCall.restart(true);
            }
          }).pause();
        }
        id && (_ids[id] = self2);
        trigger = self2.trigger = _getTarget(trigger || pin !== true && pin);
        customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
        customRevertReturn && (customRevertReturn = customRevertReturn(self2));
        pin = pin === true ? trigger : _getTarget(pin);
        _isString(toggleClass) && (toggleClass = {
          targets: trigger,
          className: toggleClass
        });
        if (pin) {
          pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
          self2.pin = pin;
          pinCache = gsap2.core.getCache(pin);
          if (!pinCache.spacer) {
            if (pinSpacer) {
              pinSpacer = _getTarget(pinSpacer);
              pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
              pinCache.spacerIsNative = !!pinSpacer;
              pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
            }
            pinCache.spacer = spacer = pinSpacer || _doc2.createElement("div");
            spacer.classList.add("pin-spacer");
            id && spacer.classList.add("pin-spacer-" + id);
            pinCache.pinState = pinOriginalState = _getState(pin);
          } else {
            pinOriginalState = pinCache.pinState;
          }
          vars.force3D !== false && gsap2.set(pin, {
            force3D: true
          });
          self2.spacer = spacer = pinCache.spacer;
          cs = _getComputedStyle(pin);
          spacingStart = cs[pinSpacing + direction.os2];
          pinGetter = gsap2.getProperty(pin);
          pinSetter = gsap2.quickSetter(pin, direction.a, _px);
          _swapPinIn(pin, spacer, cs);
          pinState = _getState(pin);
        }
        if (markers) {
          markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
          markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
          markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
          offset = markerStartTrigger["offset" + direction.op.d2];
          var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
          markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
          markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
          containerAnimation && (caMarkerSetter = gsap2.quickSetter([markerStart, markerEnd], direction.a, _px));
          if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
            _makePositionable(isViewport ? _body2 : scroller);
            gsap2.set([markerStartTrigger, markerEndTrigger], {
              force3D: true
            });
            markerStartSetter = gsap2.quickSetter(markerStartTrigger, direction.a, _px);
            markerEndSetter = gsap2.quickSetter(markerEndTrigger, direction.a, _px);
          }
        }
        if (containerAnimation) {
          var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
          containerAnimation.eventCallback("onUpdate", function() {
            self2.update(0, 0, 1);
            oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
          });
        }
        self2.previous = function() {
          return _triggers[_triggers.indexOf(self2) - 1];
        };
        self2.next = function() {
          return _triggers[_triggers.indexOf(self2) + 1];
        };
        self2.revert = function(revert, temp) {
          if (!temp) {
            return self2.kill(true);
          }
          var r = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
          if (r !== self2.isReverted) {
            if (r) {
              prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
              prevProgress = self2.progress;
              prevAnimProgress = animation && animation.progress();
            }
            markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
              return m.style.display = r ? "none" : "block";
            });
            if (r) {
              _refreshing = self2;
              self2.update(r);
            }
            if (pin && (!pinReparent || !self2.isActive)) {
              if (r) {
                _swapPinOut(pin, spacer, pinOriginalState);
              } else {
                _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
              }
            }
            r || self2.update(r);
            _refreshing = prevRefreshing;
            self2.isReverted = r;
          }
        };
        self2.refresh = function(soft, force, position, pinOffset) {
          if ((_refreshing || !self2.enabled) && !force) {
            return;
          }
          if (pin && soft && _lastScrollTime) {
            _addListener3(ScrollTrigger4, "scrollEnd", _softRefresh);
            return;
          }
          !_refreshingAll && onRefreshInit && onRefreshInit(self2);
          _refreshing = self2;
          if (tweenTo.tween && !position) {
            tweenTo.tween.kill();
            tweenTo.tween = 0;
          }
          scrubTween && scrubTween.pause();
          invalidateOnRefresh && animation && animation.revert({
            kill: false
          }).invalidate();
          self2.isReverted || self2.revert(true, true);
          self2._subPinOffset = false;
          var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self2), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i2 = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
          if (markers && _isObject(position)) {
            markerStartOffset = gsap2.getProperty(markerStartTrigger, direction.p);
            markerEndOffset = gsap2.getProperty(markerEndTrigger, direction.p);
          }
          while (i2--) {
            curTrigger = _triggers[i2];
            curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self2);
            curPin = curTrigger.pin;
            if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
              revertedPins || (revertedPins = []);
              revertedPins.unshift(curTrigger);
              curTrigger.revert(true, true);
            }
            if (curTrigger !== _triggers[i2]) {
              triggerIndex--;
              i2--;
            }
          }
          _isFunction(parsedStart) && (parsedStart = parsedStart(self2));
          parsedStart = _parseClamp(parsedStart, "start", self2);
          start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
          _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self2));
          if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
            if (~parsedEnd.indexOf(" ")) {
              parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
            } else {
              offset2 = _offsetToPx(parsedEnd.substr(2), size);
              parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap2.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
              parsedEndTrigger = trigger;
            }
          }
          parsedEnd = _parseClamp(parsedEnd, "end", self2);
          end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._endClamp && "_endClamp")) || -1e-3;
          offset2 = 0;
          i2 = triggerIndex;
          while (i2--) {
            curTrigger = _triggers[i2];
            curPin = curTrigger.pin;
            if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
              cs2 = curTrigger.end - (self2._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
              if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
                offset2 += cs2 * (1 - curTrigger.progress);
              }
              curPin === pin && (otherPinOffset += cs2);
            }
          }
          start += offset2;
          end += offset2;
          self2._startClamp && (self2._startClamp += offset2);
          if (self2._endClamp && !_refreshingAll) {
            self2._endClamp = end || -1e-3;
            end = Math.min(end, _maxScroll(scroller, direction));
          }
          change = end - start || (start -= 0.01) && 1e-3;
          if (isFirstRefresh) {
            prevProgress = gsap2.utils.clamp(0, 1, gsap2.utils.normalize(start, end, prevScroll));
          }
          self2._pinPush = otherPinOffset;
          if (markerStart && offset2) {
            cs2 = {};
            cs2[direction.a] = "+=" + offset2;
            pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
            gsap2.set([markerStart, markerEnd], cs2);
          }
          if (pin && !(_clampingMax && self2.end >= _maxScroll(scroller, direction))) {
            cs2 = _getComputedStyle(pin);
            isVertical = direction === _vertical;
            scroll = scrollFunc();
            pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
            if (!max && end > 1) {
              forcedOverflow = (isViewport ? _doc2.scrollingElement || _docEl2 : scroller).style;
              forcedOverflow = {
                style: forcedOverflow,
                value: forcedOverflow["overflow" + direction.a.toUpperCase()]
              };
              if (isViewport && _getComputedStyle(_body2)["overflow" + direction.a.toUpperCase()] !== "scroll") {
                forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
              }
            }
            _swapPinIn(pin, spacer, cs2);
            pinState = _getState(pin);
            bounds = _getBounds(pin, true);
            oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
            if (pinSpacing) {
              spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
              spacerState.t = spacer;
              i2 = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
              if (i2) {
                spacerState.push(direction.d, i2 + _px);
                spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i2 + _px);
              }
              _setState(spacerState);
              if (pinnedContainer) {
                _triggers.forEach(function(t) {
                  if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                    t._subPinOffset = true;
                  }
                });
              }
              useFixedPosition && scrollFunc(prevScroll);
            } else {
              i2 = _getSize(pin, direction);
              i2 && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i2 + _px);
            }
            if (useFixedPosition) {
              override = {
                top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                boxSizing: "border-box",
                position: "fixed"
              };
              override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
              override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
              override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
              override[_padding] = cs2[_padding];
              override[_padding + _Top] = cs2[_padding + _Top];
              override[_padding + _Right] = cs2[_padding + _Right];
              override[_padding + _Bottom] = cs2[_padding + _Bottom];
              override[_padding + _Left] = cs2[_padding + _Left];
              pinActiveState = _copyState(pinOriginalState, override, pinReparent);
              _refreshingAll && scrollFunc(0);
            }
            if (animation) {
              initted = animation._initted;
              _suppressOverwrites(1);
              animation.render(animation.duration(), true, true);
              pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
              pinMoves = Math.abs(change - pinChange) > 1;
              useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
              animation.render(0, true, true);
              initted || animation.invalidate(true);
              animation.parent || animation.totalTime(animation.totalTime());
              _suppressOverwrites(0);
            } else {
              pinChange = change;
            }
            forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
          } else if (trigger && scrollFunc() && !containerAnimation) {
            bounds = trigger.parentNode;
            while (bounds && bounds !== _body2) {
              if (bounds._pinOffset) {
                start -= bounds._pinOffset;
                end -= bounds._pinOffset;
              }
              bounds = bounds.parentNode;
            }
          }
          revertedPins && revertedPins.forEach(function(t) {
            return t.revert(false, true);
          });
          self2.start = start;
          self2.end = end;
          scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
          if (!containerAnimation && !_refreshingAll) {
            scroll1 < prevScroll && scrollFunc(prevScroll);
            self2.scroll.rec = 0;
          }
          self2.revert(false, true);
          lastRefresh = _getTime2();
          if (snapDelayedCall) {
            lastSnap = -1;
            snapDelayedCall.restart(true);
          }
          _refreshing = 0;
          animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
          if (isFirstRefresh || prevProgress !== self2.progress || containerAnimation || invalidateOnRefresh) {
            animation && !isToggle && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap2.utils.normalize(start, end, 0) : prevProgress, true);
            self2.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
          }
          pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
          scrubTween && scrubTween.invalidate();
          if (!isNaN(markerStartOffset)) {
            markerStartOffset -= gsap2.getProperty(markerStartTrigger, direction.p);
            markerEndOffset -= gsap2.getProperty(markerEndTrigger, direction.p);
            _shiftMarker(markerStartTrigger, direction, markerStartOffset);
            _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
            _shiftMarker(markerEndTrigger, direction, markerEndOffset);
            _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
          }
          isFirstRefresh && !_refreshingAll && self2.update();
          if (onRefresh && !_refreshingAll && !executingOnRefresh) {
            executingOnRefresh = true;
            onRefresh(self2);
            executingOnRefresh = false;
          }
        };
        self2.getVelocity = function() {
          return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
        };
        self2.endAnimation = function() {
          _endAnimation(self2.callbackAnimation);
          if (animation) {
            scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
          }
        };
        self2.labelToScroll = function(label) {
          return animation && animation.labels && (start || self2.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
        };
        self2.getTrailing = function(name) {
          var i2 = _triggers.indexOf(self2), a = self2.direction > 0 ? _triggers.slice(0, i2).reverse() : _triggers.slice(i2 + 1);
          return (_isString(name) ? a.filter(function(t) {
            return t.vars.preventOverlaps === name;
          }) : a).filter(function(t) {
            return self2.direction > 0 ? t.end <= start : t.start >= end;
          });
        };
        self2.update = function(reset, recordVelocity, forceFake) {
          if (containerAnimation && !forceFake && !reset) {
            return;
          }
          var scroll = _refreshingAll === true ? prevScroll : self2.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
          if (recordVelocity) {
            scroll2 = scroll1;
            scroll1 = containerAnimation ? scrollFunc() : scroll;
            if (snap) {
              snap2 = snap1;
              snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
            }
          }
          if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
            if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
              clipped = 1e-4;
            } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
              clipped = 0.9999;
            }
          }
          if (clipped !== prevProgress2 && self2.enabled) {
            isActive = self2.isActive = !!clipped && clipped < 1;
            wasActive = !!prevProgress2 && prevProgress2 < 1;
            toggled = isActive !== wasActive;
            stateChanged = toggled || !!clipped !== !!prevProgress2;
            self2.direction = clipped > prevProgress2 ? 1 : -1;
            self2.progress = clipped;
            if (stateChanged && !_refreshing) {
              toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
              if (isToggle) {
                action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
                isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
              }
            }
            preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t) {
              return t.endAnimation();
            }));
            if (!isToggle) {
              if (scrubTween && !_refreshing && !_startup2) {
                scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
                if (scrubTween.resetTo) {
                  scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                } else {
                  scrubTween.vars.totalProgress = clipped;
                  scrubTween.invalidate().restart();
                }
              } else if (animation) {
                animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
              }
            }
            if (pin) {
              reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
              if (!useFixedPosition) {
                pinSetter(_round(pinStart + pinChange * clipped));
              } else if (stateChanged) {
                isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
                if (pinReparent) {
                  if (!reset && (isActive || isAtMax)) {
                    var bounds = _getBounds(pin, true), _offset = scroll - start;
                    _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                  } else {
                    _reparent(pin, spacer);
                  }
                }
                _setState(isActive || isAtMax ? pinActiveState : pinState);
                pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
              }
            }
            snap && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
            toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
              return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
            });
            onUpdate && !isToggle && !reset && onUpdate(self2);
            if (stateChanged && !_refreshing) {
              if (isToggle) {
                if (isTakingAction) {
                  if (action === "complete") {
                    animation.pause().totalProgress(1);
                  } else if (action === "reset") {
                    animation.restart(true).pause();
                  } else if (action === "restart") {
                    animation.restart(true);
                  } else {
                    animation[action]();
                  }
                }
                onUpdate && onUpdate(self2);
              }
              if (toggled || !_limitCallbacks) {
                onToggle && toggled && _callback(self2, onToggle);
                callbacks[toggleState] && _callback(self2, callbacks[toggleState]);
                once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
                if (!toggled) {
                  toggleState = clipped === 1 ? 1 : 3;
                  callbacks[toggleState] && _callback(self2, callbacks[toggleState]);
                }
              }
              if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
                _endAnimation(self2.callbackAnimation);
                scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
              }
            } else if (isToggle && onUpdate && !_refreshing) {
              onUpdate(self2);
            }
          }
          if (markerEndSetter) {
            var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
            markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
            markerEndSetter(n);
          }
          caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
        };
        self2.enable = function(reset, refresh) {
          if (!self2.enabled) {
            self2.enabled = true;
            _addListener3(scroller, "resize", _onResize);
            isViewport || _addListener3(scroller, "scroll", _onScroll3);
            onRefreshInit && _addListener3(ScrollTrigger4, "refreshInit", onRefreshInit);
            if (reset !== false) {
              self2.progress = prevProgress = 0;
              scroll1 = scroll2 = lastSnap = scrollFunc();
            }
            refresh !== false && self2.refresh();
          }
        };
        self2.getTween = function(snap3) {
          return snap3 && tweenTo ? tweenTo.tween : scrubTween;
        };
        self2.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
          if (containerAnimation) {
            var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
            newStart = st.start + _change * newStart / duration;
            newEnd = st.start + _change * newEnd / duration;
          }
          self2.refresh(false, false, {
            start: _keepClamp(newStart, keepClamp && !!self2._startClamp),
            end: _keepClamp(newEnd, keepClamp && !!self2._endClamp)
          }, pinOffset);
          self2.update();
        };
        self2.adjustPinSpacing = function(amount) {
          if (spacerState && amount) {
            var i2 = spacerState.indexOf(direction.d) + 1;
            spacerState[i2] = parseFloat(spacerState[i2]) + amount + _px;
            spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
            _setState(spacerState);
          }
        };
        self2.disable = function(reset, allowAnimation) {
          if (self2.enabled) {
            reset !== false && self2.revert(true, true);
            self2.enabled = self2.isActive = false;
            allowAnimation || scrubTween && scrubTween.pause();
            prevScroll = 0;
            pinCache && (pinCache.uncache = 1);
            onRefreshInit && _removeListener3(ScrollTrigger4, "refreshInit", onRefreshInit);
            if (snapDelayedCall) {
              snapDelayedCall.pause();
              tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
            }
            if (!isViewport) {
              var i2 = _triggers.length;
              while (i2--) {
                if (_triggers[i2].scroller === scroller && _triggers[i2] !== self2) {
                  return;
                }
              }
              _removeListener3(scroller, "resize", _onResize);
              isViewport || _removeListener3(scroller, "scroll", _onScroll3);
            }
          }
        };
        self2.kill = function(revert, allowAnimation) {
          self2.disable(revert, allowAnimation);
          scrubTween && !allowAnimation && scrubTween.kill();
          id && delete _ids[id];
          var i2 = _triggers.indexOf(self2);
          i2 >= 0 && _triggers.splice(i2, 1);
          i2 === _i && _direction > 0 && _i--;
          i2 = 0;
          _triggers.forEach(function(t) {
            return t.scroller === self2.scroller && (i2 = 1);
          });
          i2 || _refreshingAll || (self2.scroll.rec = 0);
          if (animation) {
            animation.scrollTrigger = null;
            revert && animation.revert({
              kill: false
            });
            allowAnimation || animation.kill();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.parentNode && m.parentNode.removeChild(m);
          });
          _primary === self2 && (_primary = 0);
          if (pin) {
            pinCache && (pinCache.uncache = 1);
            i2 = 0;
            _triggers.forEach(function(t) {
              return t.pin === pin && i2++;
            });
            i2 || (pinCache.spacer = 0);
          }
          vars.onKill && vars.onKill(self2);
        };
        _triggers.push(self2);
        self2.enable(false, false);
        customRevertReturn && customRevertReturn(self2);
        if (animation && animation.add && !change) {
          var updateFunc = self2.update;
          self2.update = function() {
            self2.update = updateFunc;
            start || end || self2.refresh();
          };
          gsap2.delayedCall(0.01, self2.update);
          change = 0.01;
          start = end = 0;
        } else {
          self2.refresh();
        }
        pin && _queueRefreshAll();
      };
      ScrollTrigger4.register = function register(core) {
        if (!_coreInitted2) {
          gsap2 = core || _getGSAP3();
          _windowExists() && window.document && ScrollTrigger4.enable();
          _coreInitted2 = _enabled;
        }
        return _coreInitted2;
      };
      ScrollTrigger4.defaults = function defaults(config2) {
        if (config2) {
          for (var p in config2) {
            _defaults[p] = config2[p];
          }
        }
        return _defaults;
      };
      ScrollTrigger4.disable = function disable(reset, kill) {
        _enabled = 0;
        _triggers.forEach(function(trigger) {
          return trigger[kill ? "kill" : "disable"](reset);
        });
        _removeListener3(_win2, "wheel", _onScroll3);
        _removeListener3(_doc2, "scroll", _onScroll3);
        clearInterval(_syncInterval);
        _removeListener3(_doc2, "touchcancel", _passThrough);
        _removeListener3(_body2, "touchstart", _passThrough);
        _multiListener(_removeListener3, _doc2, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_removeListener3, _doc2, "pointerup,touchend,mouseup", _pointerUpHandler);
        _resizeDelay.kill();
        _iterateAutoRefresh(_removeListener3);
        for (var i2 = 0; i2 < _scrollers.length; i2 += 3) {
          _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 1]);
          _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 2]);
        }
      };
      ScrollTrigger4.enable = function enable() {
        _win2 = window;
        _doc2 = document;
        _docEl2 = _doc2.documentElement;
        _body2 = _doc2.body;
        if (gsap2) {
          _toArray = gsap2.utils.toArray;
          _clamp2 = gsap2.utils.clamp;
          _context2 = gsap2.core.context || _passThrough;
          _suppressOverwrites = gsap2.core.suppressOverwrites || _passThrough;
          _scrollRestoration = _win2.history.scrollRestoration || "auto";
          _lastScroll = _win2.pageYOffset;
          gsap2.core.globals("ScrollTrigger", ScrollTrigger4);
          if (_body2) {
            _enabled = 1;
            _div100vh = document.createElement("div");
            _div100vh.style.height = "100vh";
            _div100vh.style.position = "absolute";
            _refresh100vh();
            _rafBugFix();
            Observer.register(gsap2);
            ScrollTrigger4.isTouch = Observer.isTouch;
            _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
            _ignoreMobileResize = Observer.isTouch === 1;
            _addListener3(_win2, "wheel", _onScroll3);
            _root2 = [_win2, _doc2, _docEl2, _body2];
            if (gsap2.matchMedia) {
              ScrollTrigger4.matchMedia = function(vars) {
                var mm2 = gsap2.matchMedia(), p;
                for (p in vars) {
                  mm2.add(p, vars[p]);
                }
                return mm2;
              };
              gsap2.addEventListener("matchMediaInit", function() {
                return _revertAll();
              });
              gsap2.addEventListener("matchMediaRevert", function() {
                return _revertRecorded();
              });
              gsap2.addEventListener("matchMedia", function() {
                _refreshAll(0, 1);
                _dispatch("matchMedia");
              });
              gsap2.matchMedia("(orientation: portrait)", function() {
                _setBaseDimensions();
                return _setBaseDimensions;
              });
            } else {
              console.warn("Requires GSAP 3.11.0 or later");
            }
            _setBaseDimensions();
            _addListener3(_doc2, "scroll", _onScroll3);
            var bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap2.core.Animation.prototype, bounds, i2;
            AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
              value: function value() {
                return this.time(-0.01, true);
              }
            });
            bodyStyle.borderTopStyle = "solid";
            bounds = _getBounds(_body2);
            _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
            _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
            border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
            _syncInterval = setInterval(_sync, 250);
            gsap2.delayedCall(0.5, function() {
              return _startup2 = 0;
            });
            _addListener3(_doc2, "touchcancel", _passThrough);
            _addListener3(_body2, "touchstart", _passThrough);
            _multiListener(_addListener3, _doc2, "pointerdown,touchstart,mousedown", _pointerDownHandler);
            _multiListener(_addListener3, _doc2, "pointerup,touchend,mouseup", _pointerUpHandler);
            _transformProp = gsap2.utils.checkPrefix("transform");
            _stateProps.push(_transformProp);
            _coreInitted2 = _getTime2();
            _resizeDelay = gsap2.delayedCall(0.2, _refreshAll).pause();
            _autoRefresh = [_doc2, "visibilitychange", function() {
              var w = _win2.innerWidth, h = _win2.innerHeight;
              if (_doc2.hidden) {
                _prevWidth = w;
                _prevHeight = h;
              } else if (_prevWidth !== w || _prevHeight !== h) {
                _onResize();
              }
            }, _doc2, "DOMContentLoaded", _refreshAll, _win2, "load", _refreshAll, _win2, "resize", _onResize];
            _iterateAutoRefresh(_addListener3);
            _triggers.forEach(function(trigger) {
              return trigger.enable(0, 1);
            });
            for (i2 = 0; i2 < _scrollers.length; i2 += 3) {
              _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 1]);
              _wheelListener(_removeListener3, _scrollers[i2], _scrollers[i2 + 2]);
            }
          }
        }
      };
      ScrollTrigger4.config = function config2(vars) {
        "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
        var ms = vars.syncInterval;
        ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
        "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger4.isTouch === 1 && vars.ignoreMobileResize);
        if ("autoRefreshEvents" in vars) {
          _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
          _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
        }
      };
      ScrollTrigger4.scrollerProxy = function scrollerProxy(target, vars) {
        var t = _getTarget(target), i2 = _scrollers.indexOf(t), isViewport = _isViewport3(t);
        if (~i2) {
          _scrollers.splice(i2, isViewport ? 6 : 2);
        }
        if (vars) {
          isViewport ? _proxies.unshift(_win2, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t, vars);
        }
      };
      ScrollTrigger4.clearMatchMedia = function clearMatchMedia(query) {
        _triggers.forEach(function(t) {
          return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
        });
      };
      ScrollTrigger4.isInViewport = function isInViewport(element, ratio, horizontal) {
        var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
        return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win2.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win2.innerHeight;
      };
      ScrollTrigger4.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
        _isString(element) && (element = _getTarget(element));
        var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
        return horizontal ? (bounds.left + offset) / _win2.innerWidth : (bounds.top + offset) / _win2.innerHeight;
      };
      ScrollTrigger4.killAll = function killAll(allowListeners) {
        _triggers.slice(0).forEach(function(t) {
          return t.vars.id !== "ScrollSmoother" && t.kill();
        });
        if (allowListeners !== true) {
          var listeners = _listeners.killAll || [];
          _listeners = {};
          listeners.forEach(function(f) {
            return f();
          });
        }
      };
      return ScrollTrigger4;
    }();
    ScrollTrigger2.version = "3.12.5";
    ScrollTrigger2.saveStyles = function(targets) {
      return targets ? _toArray(targets).forEach(function(target) {
        if (target && target.style) {
          var i2 = _savedStyles.indexOf(target);
          i2 >= 0 && _savedStyles.splice(i2, 5);
          _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap2.core.getCache(target), _context2());
        }
      }) : _savedStyles;
    };
    ScrollTrigger2.revert = function(soft, media) {
      return _revertAll(!soft, media);
    };
    ScrollTrigger2.create = function(vars, animation) {
      return new ScrollTrigger2(vars, animation);
    };
    ScrollTrigger2.refresh = function(safe) {
      return safe ? _onResize() : (_coreInitted2 || ScrollTrigger2.register()) && _refreshAll(true);
    };
    ScrollTrigger2.update = function(force) {
      return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
    };
    ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
    ScrollTrigger2.maxScroll = function(element, horizontal) {
      return _maxScroll(element, horizontal ? _horizontal : _vertical);
    };
    ScrollTrigger2.getScrollFunc = function(element, horizontal) {
      return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
    };
    ScrollTrigger2.getById = function(id) {
      return _ids[id];
    };
    ScrollTrigger2.getAll = function() {
      return _triggers.filter(function(t) {
        return t.vars.id !== "ScrollSmoother";
      });
    };
    ScrollTrigger2.isScrolling = function() {
      return !!_lastScrollTime;
    };
    ScrollTrigger2.snapDirectional = _snapDirectional;
    ScrollTrigger2.addEventListener = function(type, callback2) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback2) || a.push(callback2);
    };
    ScrollTrigger2.removeEventListener = function(type, callback2) {
      var a = _listeners[type], i2 = a && a.indexOf(callback2);
      i2 >= 0 && a.splice(i2, 1);
    };
    ScrollTrigger2.batch = function(targets, vars) {
      var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback2) {
        var elements2 = [], triggers = [], delay = gsap2.delayedCall(interval, function() {
          callback2(elements2, triggers);
          elements2 = [];
          triggers = [];
        }).pause();
        return function(self2) {
          elements2.length || delay.restart(true);
          elements2.push(self2.trigger);
          triggers.push(self2);
          batchMax <= elements2.length && delay.progress(1);
        };
      }, p;
      for (p in vars) {
        varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
      }
      if (_isFunction(batchMax)) {
        batchMax = batchMax();
        _addListener3(ScrollTrigger2, "refresh", function() {
          return batchMax = vars.batchMax();
        });
      }
      _toArray(targets).forEach(function(target) {
        var config2 = {};
        for (p in varsCopy) {
          config2[p] = varsCopy[p];
        }
        config2.trigger = target;
        result.push(ScrollTrigger2.create(config2));
      });
      return result;
    };
    _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
      current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
      return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
    };
    _allowNativePanning = function _allowNativePanning2(target, direction) {
      if (direction === true) {
        target.style.removeProperty("touch-action");
      } else {
        target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
      }
      target === _docEl2 && _allowNativePanning2(_body2, direction);
    };
    _overflow = {
      auto: 1,
      scroll: 1
    };
    _nestedScroll = function _nestedScroll2(_ref5) {
      var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
      var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap2.core.getCache(node), time = _getTime2(), cs;
      if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
        while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
          node = node.parentNode;
        }
        cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
        cache._isScrollT = time;
      }
      if (cache._isScroll || axis === "x") {
        event.stopPropagation();
        event._gsapAllow = true;
      }
    };
    _inputObserver = function _inputObserver2(target, type, inputs, nested) {
      return Observer.create({
        target,
        capture: true,
        debounce: false,
        lockAxis: true,
        type,
        onWheel: nested = nested && _nestedScroll,
        onPress: nested,
        onDrag: nested,
        onScroll: nested,
        onEnable: function onEnable() {
          return inputs && _addListener3(_doc2, Observer.eventTypes[0], _captureInputs, false, true);
        },
        onDisable: function onDisable() {
          return _removeListener3(_doc2, Observer.eventTypes[0], _captureInputs, true);
        }
      });
    };
    _inputExp = /(input|label|select|textarea)/i;
    _captureInputs = function _captureInputs2(e) {
      var isInput = _inputExp.test(e.target.tagName);
      if (isInput || _inputIsFocused) {
        e._gsapAllow = true;
        _inputIsFocused = isInput;
      }
    };
    _getScrollNormalizer = function _getScrollNormalizer2(vars) {
      _isObject(vars) || (vars = {});
      vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
      vars.type || (vars.type = "wheel,touch");
      vars.debounce = !!vars.debounce;
      vars.id = vars.id || "normalizer";
      var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self2, maxY, target = _getTarget(vars.target) || _docEl2, smoother2 = gsap2.core.globals().ScrollSmoother, smootherInstance = smoother2 && smoother2.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win2.visualViewport ? _win2.visualViewport.scale * _win2.visualViewport.width : _win2.outerWidth) / _win2.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
        return momentum(self2);
      } : function() {
        return momentum || 2.8;
      }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
        return skipTouchMove = false;
      }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps2() {
        maxY = _maxScroll(target, _vertical);
        scrollClampY = _clamp2(_fixIOSBug ? 1 : 0, maxY);
        normalizeScrollX && (scrollClampX = _clamp2(0, _maxScroll(target, _horizontal)));
        lastRefreshID = _refreshID;
      }, removeContentOffset = function removeContentOffset2() {
        content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
      }, ignoreDrag = function ignoreDrag2() {
        if (skipTouchMove) {
          requestAnimationFrame(resumeTouchMove);
          var offset = _round(self2.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
          if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
            scrollFuncY.offset = scroll - scrollFuncY.v;
            var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
            content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
            content._gsap.y = y + "px";
            scrollFuncY.cacheID = _scrollers.cache;
            _updateAll();
          }
          return true;
        }
        scrollFuncY.offset && removeContentOffset();
        skipTouchMove = true;
      }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
        updateClamps();
        if (tween.isActive() && tween.vars.scrollY > maxY) {
          scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
        }
      };
      content && gsap2.set(content, {
        y: "+=0"
      });
      vars.ignoreCheck = function(e) {
        return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self2.isGesturing || e.touches && e.touches.length > 1;
      };
      vars.onPress = function() {
        skipTouchMove = false;
        var prevScale = scale;
        scale = _round((_win2.visualViewport && _win2.visualViewport.scale || 1) / initialScale);
        tween.pause();
        prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
        startScrollX = scrollFuncX();
        startScrollY = scrollFuncY();
        updateClamps();
        lastRefreshID = _refreshID;
      };
      vars.onRelease = vars.onGestureStart = function(self3, wasDragging) {
        scrollFuncY.offset && removeContentOffset();
        if (!wasDragging) {
          onStopDelayedCall.restart(true);
        } else {
          _scrollers.cache++;
          var dur = resolveMomentumDuration(), currentScroll, endScroll;
          if (normalizeScrollX) {
            currentScroll = scrollFuncX();
            endScroll = currentScroll + dur * 0.05 * -self3.velocityX / 0.227;
            dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
            tween.vars.scrollX = scrollClampX(endScroll);
          }
          currentScroll = scrollFuncY();
          endScroll = currentScroll + dur * 0.05 * -self3.velocityY / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
          tween.vars.scrollY = scrollClampY(endScroll);
          tween.invalidate().duration(dur).play(0.01);
          if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
            gsap2.to({}, {
              onUpdate: onResize,
              duration: dur
            });
          }
        }
        onRelease && onRelease(self3);
      };
      vars.onWheel = function() {
        tween._ts && tween.pause();
        if (_getTime2() - wheelRefresh > 1e3) {
          lastRefreshID = 0;
          wheelRefresh = _getTime2();
        }
      };
      vars.onChange = function(self3, dx, dy, xArray, yArray) {
        _refreshID !== lastRefreshID && updateClamps();
        dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self3.startX - self3.x) : scrollFuncX() + dx - xArray[1]));
        if (dy) {
          scrollFuncY.offset && removeContentOffset();
          var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self3.startY - self3.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
          isTouch && y !== yClamped && (startScrollY += yClamped - y);
          scrollFuncY(yClamped);
        }
        (dy || dx) && _updateAll();
      };
      vars.onEnable = function() {
        _allowNativePanning(target, normalizeScrollX ? false : "x");
        ScrollTrigger2.addEventListener("refresh", onResize);
        _addListener3(_win2, "resize", onResize);
        if (scrollFuncY.smooth) {
          scrollFuncY.target.style.scrollBehavior = "auto";
          scrollFuncY.smooth = scrollFuncX.smooth = false;
        }
        inputObserver.enable();
      };
      vars.onDisable = function() {
        _allowNativePanning(target, true);
        _removeListener3(_win2, "resize", onResize);
        ScrollTrigger2.removeEventListener("refresh", onResize);
        inputObserver.kill();
      };
      vars.lockAxis = vars.lockAxis !== false;
      self2 = new Observer(vars);
      self2.iOS = _fixIOSBug;
      _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
      _fixIOSBug && gsap2.ticker.add(_passThrough);
      onStopDelayedCall = self2._dc;
      tween = gsap2.to(self2, {
        ease: "power4",
        paused: true,
        inherit: false,
        scrollX: normalizeScrollX ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
            return tween.pause();
          })
        },
        onUpdate: _updateAll,
        onComplete: onStopDelayedCall.vars.onComplete
      });
      return self2;
    };
    ScrollTrigger2.sort = function(func) {
      return _triggers.sort(func || function(a, b) {
        return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
      });
    };
    ScrollTrigger2.observe = function(vars) {
      return new Observer(vars);
    };
    ScrollTrigger2.normalizeScroll = function(vars) {
      if (typeof vars === "undefined") {
        return _normalizer2;
      }
      if (vars === true && _normalizer2) {
        return _normalizer2.enable();
      }
      if (vars === false) {
        _normalizer2 && _normalizer2.kill();
        _normalizer2 = vars;
        return;
      }
      var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
      _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
      _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
      return normalizer;
    };
    ScrollTrigger2.core = {
      // smaller file size way to leverage in ScrollSmoother and Observer
      _getVelocityProp,
      _inputObserver,
      _scrollers,
      _proxies,
      bridge: {
        // when normalizeScroll sets the scroll position (ss = setScroll)
        ss: function ss() {
          _lastScrollTime || _dispatch("scrollStart");
          _lastScrollTime = _getTime2();
        },
        // a way to get the _refreshing value in Observer
        ref: function ref() {
          return _refreshing;
        }
      }
    };
    _getGSAP3() && gsap2.registerPlugin(ScrollTrigger2);
  }
});

// our-process.js
var our_process_exports = {};
var import_gsap3, section, items, i;
var init_our_process = __esm({
  "our-process.js"() {
    import_gsap3 = __toESM(require_gsap());
    init_ScrollTrigger();
    import_gsap3.gsap.registerPlugin(ScrollTrigger2);
    section = document.querySelector(".our-process-section");
    items = import_gsap3.gsap.utils.toArray(".our-process-process-item");
    i = 1;
    items.forEach((item) => {
      item.dataset.index = i++;
      ScrollTrigger2.create({
        trigger: item,
        start: "top bottom",
        onEnter: () => {
          section.style.cursor = "var(--process-cursor-" + item.dataset.index + "), auto";
        },
        onEnterBack: () => {
          section.style.cursor = "var(--process-cursor-" + item.dataset.index + "), auto";
        }
      });
    });
    if (section) {
      ScrollTrigger2.create({
        trigger: "#process-heading",
        pin: true,
        start: "top top",
        end: (self2) => "+=" + self2.offsetHeight
      });
    }
  }
});

// node_modules/gsap/ScrollSmoother.js
function _defineProperties2(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  return Constructor;
}
var gsap6, _coreInitted3, _win3, _doc3, _docEl3, _body3, _root3, _toArray2, _clamp3, ScrollTrigger3, _mainInstance, _expo, _getVelocityProp3, _inputObserver3, _context3, _onResizeDelayedCall, _windowExists3, _getGSAP5, _round3, _maxScroll3, _autoDistance, _wrap, ScrollSmoother;
var init_ScrollSmoother = __esm({
  "node_modules/gsap/ScrollSmoother.js"() {
    _windowExists3 = function _windowExists4() {
      return typeof window !== "undefined";
    };
    _getGSAP5 = function _getGSAP6() {
      return gsap6 || _windowExists3() && (gsap6 = window.gsap) && gsap6.registerPlugin && gsap6;
    };
    _round3 = function _round4(value) {
      return Math.round(value * 1e5) / 1e5 || 0;
    };
    _maxScroll3 = function _maxScroll4(scroller) {
      return ScrollTrigger3.maxScroll(scroller || _win3);
    };
    _autoDistance = function _autoDistance2(el, progress) {
      var parent = el.parentNode || _docEl3, b1 = el.getBoundingClientRect(), b2 = parent.getBoundingClientRect(), gapTop = b2.top - b1.top, gapBottom = b2.bottom - b1.bottom, change = (Math.abs(gapTop) > Math.abs(gapBottom) ? gapTop : gapBottom) / (1 - progress), offset = -change * progress, ratio, extraChange;
      if (change > 0) {
        ratio = b2.height / (_win3.innerHeight + b2.height);
        extraChange = ratio === 0.5 ? b2.height * 2 : Math.min(b2.height, Math.abs(-change * ratio / (2 * ratio - 1))) * 2 * (progress || 1);
        offset += progress ? -extraChange * progress : -extraChange / 2;
        change += extraChange;
      }
      return {
        change,
        offset
      };
    };
    _wrap = function _wrap2(el) {
      var wrapper = _doc3.querySelector(".ScrollSmoother-wrapper");
      if (!wrapper) {
        wrapper = _doc3.createElement("div");
        wrapper.classList.add("ScrollSmoother-wrapper");
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
      }
      return wrapper;
    };
    ScrollSmoother = /* @__PURE__ */ function() {
      function ScrollSmoother2(vars) {
        var _this = this;
        _coreInitted3 || ScrollSmoother2.register(gsap6) || console.warn("Please gsap.registerPlugin(ScrollSmoother)");
        vars = this.vars = vars || {};
        _mainInstance && _mainInstance.kill();
        _mainInstance = this;
        _context3(this);
        var _vars = vars, smoothTouch = _vars.smoothTouch, _onUpdate = _vars.onUpdate, onStop = _vars.onStop, smooth = _vars.smooth, onFocusIn = _vars.onFocusIn, normalizeScroll = _vars.normalizeScroll, wholePixels = _vars.wholePixels, content, wrapper, height2, mainST, effects, sections2, intervalID, wrapperCSS, contentCSS, paused, pausedNormalizer, recordedRefreshScroll, recordedRefreshScrub, allowUpdates, self2 = this, effectsPrefix = vars.effectsPrefix || "", scrollFunc = ScrollTrigger3.getScrollFunc(_win3), smoothDuration = ScrollTrigger3.isTouch === 1 ? smoothTouch === true ? 0.8 : parseFloat(smoothTouch) || 0 : smooth === 0 || smooth === false ? 0 : parseFloat(smooth) || 0.8, speed = smoothDuration && +vars.speed || 1, currentY = 0, delta = 0, startupPhase = 1, tracker = _getVelocityProp3(0), updateVelocity = function updateVelocity2() {
          return tracker.update(-currentY);
        }, scroll = {
          y: 0
        }, removeScroll = function removeScroll2() {
          return content.style.overflow = "visible";
        }, isProxyScrolling, killScrub = function killScrub2(trigger) {
          trigger.update();
          var scrub = trigger.getTween();
          if (scrub) {
            scrub.pause();
            scrub._time = scrub._dur;
            scrub._tTime = scrub._tDur;
          }
          isProxyScrolling = false;
          trigger.animation.progress(trigger.progress, true);
        }, render = function render2(y, force) {
          if (y !== currentY && !paused || force) {
            wholePixels && (y = Math.round(y));
            if (smoothDuration) {
              content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
              content._gsap.y = y + "px";
            }
            delta = y - currentY;
            currentY = y;
            ScrollTrigger3.isUpdating || ScrollSmoother2.isRefreshing || ScrollTrigger3.update();
          }
        }, scrollTop = function scrollTop2(value) {
          if (arguments.length) {
            value < 0 && (value = 0);
            scroll.y = -value;
            isProxyScrolling = true;
            paused ? currentY = -value : render(-value);
            ScrollTrigger3.isRefreshing ? mainST.update() : scrollFunc(value / speed);
            return this;
          }
          return -currentY;
        }, resizeObserver = typeof ResizeObserver !== "undefined" && vars.autoResize !== false && new ResizeObserver(function() {
          if (!ScrollTrigger3.isRefreshing) {
            var max = _maxScroll3(wrapper) * speed;
            max < -currentY && scrollTop(max);
            _onResizeDelayedCall.restart(true);
          }
        }), lastFocusElement, _onFocusIn = function _onFocusIn2(e) {
          wrapper.scrollTop = 0;
          if (e.target.contains && e.target.contains(wrapper) || onFocusIn && onFocusIn(_this, e) === false) {
            return;
          }
          ScrollTrigger3.isInViewport(e.target) || e.target === lastFocusElement || _this.scrollTo(e.target, false, "center center");
          lastFocusElement = e.target;
        }, _transformPosition = function _transformPosition2(position, st) {
          if (position < st.start) {
            return position;
          }
          var ratio = isNaN(st.ratio) ? 1 : st.ratio, change = st.end - st.start, distance = position - st.start, offset = st.offset || 0, pins = st.pins || [], pinOffset = pins.offset || 0, progressOffset = st._startClamp && st.start <= 0 || st.pins && st.pins.offset ? 0 : st._endClamp && st.end === _maxScroll3() ? 1 : 0.5;
          pins.forEach(function(p) {
            change -= p.distance;
            if (p.nativeStart <= position) {
              distance -= p.distance;
            }
          });
          if (pinOffset) {
            distance *= (change - pinOffset / ratio) / change;
          }
          return position + (distance - offset * progressOffset) / ratio - distance;
        }, adjustEffectRelatedTriggers = function adjustEffectRelatedTriggers2(st, triggers, partial) {
          partial || (st.pins.length = st.pins.offset = 0);
          var pins = st.pins, markers = st.markers, dif, isClamped, start, end, nativeStart, nativeEnd, i2, trig;
          for (i2 = 0; i2 < triggers.length; i2++) {
            trig = triggers[i2];
            if (st.trigger && trig.trigger && st !== trig && (trig.trigger === st.trigger || trig.pinnedContainer === st.trigger || st.trigger.contains(trig.trigger))) {
              nativeStart = trig._startNative || trig._startClamp || trig.start;
              nativeEnd = trig._endNative || trig._endClamp || trig.end;
              start = _transformPosition(nativeStart, st);
              end = trig.pin && nativeEnd > 0 ? start + (nativeEnd - nativeStart) : _transformPosition(nativeEnd, st);
              trig.setPositions(start, end, true, (trig._startClamp ? Math.max(0, start) : start) - nativeStart);
              trig.markerStart && markers.push(gsap6.quickSetter([trig.markerStart, trig.markerEnd], "y", "px"));
              if (trig.pin && trig.end > 0 && !partial) {
                dif = trig.end - trig.start;
                isClamped = st._startClamp && trig.start < 0;
                if (isClamped) {
                  if (st.start > 0) {
                    st.setPositions(0, st.end + (st._startNative - st.start), true);
                    adjustEffectRelatedTriggers2(st, triggers);
                    return;
                  }
                  dif += trig.start;
                  pins.offset = -trig.start;
                }
                pins.push({
                  start: trig.start,
                  nativeStart,
                  end: trig.end,
                  distance: dif,
                  trig
                });
                st.setPositions(st.start, st.end + (isClamped ? -trig.start : dif), true);
              }
            }
          }
        }, adjustParallaxPosition = function adjustParallaxPosition2(triggers, createdAfterEffectWasApplied) {
          effects.forEach(function(st) {
            return adjustEffectRelatedTriggers(st, triggers, createdAfterEffectWasApplied);
          });
        }, onRefresh = function onRefresh2() {
          removeScroll();
          requestAnimationFrame(removeScroll);
          if (effects) {
            ScrollTrigger3.getAll().forEach(function(st) {
              st._startNative = st.start;
              st._endNative = st.end;
            });
            effects.forEach(function(st) {
              var start = st._startClamp || st.start, end = st.autoSpeed ? Math.min(_maxScroll3(), st.end) : start + Math.abs((st.end - start) / st.ratio), offset = end - st.end;
              start -= offset / 2;
              end -= offset / 2;
              if (start > end) {
                var s = start;
                start = end;
                end = s;
              }
              if (st._startClamp && start < 0) {
                end = st.ratio < 0 ? _maxScroll3() : st.end / st.ratio;
                offset = end - st.end;
                start = 0;
              } else if (st.ratio < 0 || st._endClamp && end >= _maxScroll3()) {
                end = _maxScroll3();
                start = st.ratio < 0 ? 0 : st.ratio > 1 ? 0 : end - (end - st.start) / st.ratio;
                offset = (end - start) * st.ratio - (st.end - st.start);
              }
              st.offset = offset || 1e-4;
              st.pins.length = st.pins.offset = 0;
              st.setPositions(start, end, true);
            });
            adjustParallaxPosition(ScrollTrigger3.sort());
          }
          tracker.reset();
        }, addOnRefresh = function addOnRefresh2() {
          return ScrollTrigger3.addEventListener("refresh", onRefresh);
        }, restoreEffects = function restoreEffects2() {
          return effects && effects.forEach(function(st) {
            return st.vars.onRefresh(st);
          });
        }, revertEffects = function revertEffects2() {
          effects && effects.forEach(function(st) {
            return st.vars.onRefreshInit(st);
          });
          return restoreEffects;
        }, effectValueGetter = function effectValueGetter2(name, value, index, el) {
          return function() {
            var v = typeof value === "function" ? value(index, el) : value;
            v || v === 0 || (v = el.getAttribute("data-" + effectsPrefix + name) || (name === "speed" ? 1 : 0));
            el.setAttribute("data-" + effectsPrefix + name, v);
            var clamp = (v + "").substr(0, 6) === "clamp(";
            return {
              clamp,
              value: clamp ? v.substr(6, v.length - 7) : v
            };
          };
        }, createEffect = function createEffect2(el, speed2, lag, index, effectsPadding) {
          effectsPadding = (typeof effectsPadding === "function" ? effectsPadding(index, el) : effectsPadding) || 0;
          var getSpeed = effectValueGetter("speed", speed2, index, el), getLag = effectValueGetter("lag", lag, index, el), startY = gsap6.getProperty(el, "y"), cache = el._gsap, ratio, st, autoSpeed, scrub, progressOffset, yOffset, pins = [], initDynamicValues = function initDynamicValues2() {
            speed2 = getSpeed();
            lag = parseFloat(getLag().value);
            ratio = parseFloat(speed2.value) || 1;
            autoSpeed = speed2.value === "auto";
            progressOffset = autoSpeed || st && st._startClamp && st.start <= 0 || pins.offset ? 0 : st && st._endClamp && st.end === _maxScroll3() ? 1 : 0.5;
            scrub && scrub.kill();
            scrub = lag && gsap6.to(el, {
              ease: _expo,
              overwrite: false,
              y: "+=0",
              duration: lag
            });
            if (st) {
              st.ratio = ratio;
              st.autoSpeed = autoSpeed;
            }
          }, revert = function revert2() {
            cache.y = startY + "px";
            cache.renderTransform(1);
            initDynamicValues();
          }, markers = [], change = 0, updateChange = function updateChange2(self3) {
            if (autoSpeed) {
              revert();
              var auto = _autoDistance(el, _clamp3(0, 1, -self3.start / (self3.end - self3.start)));
              change = auto.change;
              yOffset = auto.offset;
            } else {
              yOffset = pins.offset || 0;
              change = (self3.end - self3.start - yOffset) * (1 - ratio);
            }
            pins.forEach(function(p) {
              return change -= p.distance * (1 - ratio);
            });
            self3.offset = change || 1e-3;
            self3.vars.onUpdate(self3);
            scrub && scrub.progress(1);
          };
          initDynamicValues();
          if (ratio !== 1 || autoSpeed || scrub) {
            st = ScrollTrigger3.create({
              trigger: autoSpeed ? el.parentNode : el,
              start: function start() {
                return speed2.clamp ? "clamp(top bottom+=" + effectsPadding + ")" : "top bottom+=" + effectsPadding;
              },
              end: function end() {
                return speed2.value < 0 ? "max" : speed2.clamp ? "clamp(bottom top-=" + effectsPadding + ")" : "bottom top-=" + effectsPadding;
              },
              scroller: wrapper,
              scrub: true,
              refreshPriority: -999,
              // must update AFTER any other ScrollTrigger pins
              onRefreshInit: revert,
              onRefresh: updateChange,
              onKill: function onKill(self3) {
                var i2 = effects.indexOf(self3);
                i2 >= 0 && effects.splice(i2, 1);
                revert();
              },
              onUpdate: function onUpdate(self3) {
                var y = startY + change * (self3.progress - progressOffset), i2 = pins.length, extraY = 0, pin, scrollY, end;
                if (self3.offset) {
                  if (i2) {
                    scrollY = -currentY;
                    end = self3.end;
                    while (i2--) {
                      pin = pins[i2];
                      if (pin.trig.isActive || scrollY >= pin.start && scrollY <= pin.end) {
                        if (scrub) {
                          pin.trig.progress += pin.trig.direction < 0 ? 1e-3 : -1e-3;
                          pin.trig.update(0, 0, 1);
                          scrub.resetTo("y", parseFloat(cache.y), -delta, true);
                          startupPhase && scrub.progress(1);
                        }
                        return;
                      }
                      scrollY > pin.end && (extraY += pin.distance);
                      end -= pin.distance;
                    }
                    y = startY + extraY + change * ((gsap6.utils.clamp(self3.start, self3.end, scrollY) - self3.start - extraY) / (end - self3.start) - progressOffset);
                  }
                  markers.length && !autoSpeed && markers.forEach(function(setter) {
                    return setter(y - extraY);
                  });
                  y = _round3(y + yOffset);
                  if (scrub) {
                    scrub.resetTo("y", y, -delta, true);
                    startupPhase && scrub.progress(1);
                  } else {
                    cache.y = y + "px";
                    cache.renderTransform(1);
                  }
                }
              }
            });
            updateChange(st);
            gsap6.core.getCache(st.trigger).stRevert = revertEffects;
            st.startY = startY;
            st.pins = pins;
            st.markers = markers;
            st.ratio = ratio;
            st.autoSpeed = autoSpeed;
            el.style.willChange = "transform";
          }
          return st;
        };
        addOnRefresh();
        ScrollTrigger3.addEventListener("killAll", addOnRefresh);
        gsap6.delayedCall(0.5, function() {
          return startupPhase = 0;
        });
        this.scrollTop = scrollTop;
        this.scrollTo = function(target, smooth2, position) {
          var p = gsap6.utils.clamp(0, _maxScroll3(), isNaN(target) ? _this.offset(target, position, !!smooth2 && !paused) : +target);
          !smooth2 ? scrollTop(p) : paused ? gsap6.to(_this, {
            duration: smoothDuration,
            scrollTop: p,
            overwrite: "auto",
            ease: _expo
          }) : scrollFunc(p);
        };
        this.offset = function(target, position, ignoreSpeed) {
          target = _toArray2(target)[0];
          var cssText = target.style.cssText, st = ScrollTrigger3.create({
            trigger: target,
            start: position || "top top"
          }), y;
          if (effects) {
            startupPhase ? ScrollTrigger3.refresh() : adjustParallaxPosition([st], true);
          }
          y = st.start / (ignoreSpeed ? speed : 1);
          st.kill(false);
          target.style.cssText = cssText;
          gsap6.core.getCache(target).uncache = 1;
          return y;
        };
        function refreshHeight() {
          height2 = content.clientHeight;
          content.style.overflow = "visible";
          _body3.style.height = _win3.innerHeight + (height2 - _win3.innerHeight) / speed + "px";
          return height2 - _win3.innerHeight;
        }
        this.content = function(element) {
          if (arguments.length) {
            var newContent = _toArray2(element || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || _body3.children[0];
            if (newContent !== content) {
              content = newContent;
              contentCSS = content.getAttribute("style") || "";
              resizeObserver && resizeObserver.observe(content);
              gsap6.set(content, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              });
              smoothDuration || gsap6.set(content, {
                clearProps: "transform"
              });
            }
            return this;
          }
          return content;
        };
        this.wrapper = function(element) {
          if (arguments.length) {
            wrapper = _toArray2(element || "#smooth-wrapper")[0] || _wrap(content);
            wrapperCSS = wrapper.getAttribute("style") || "";
            refreshHeight();
            gsap6.set(wrapper, smoothDuration ? {
              overflow: "hidden",
              position: "fixed",
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            } : {
              overflow: "visible",
              position: "relative",
              width: "100%",
              height: "auto",
              top: "auto",
              bottom: "auto",
              left: "auto",
              right: "auto"
            });
            return this;
          }
          return wrapper;
        };
        this.effects = function(targets, config2) {
          var _effects;
          effects || (effects = []);
          if (!targets) {
            return effects.slice(0);
          }
          targets = _toArray2(targets);
          targets.forEach(function(target) {
            var i3 = effects.length;
            while (i3--) {
              effects[i3].trigger === target && effects[i3].kill();
            }
          });
          config2 = config2 || {};
          var _config = config2, speed2 = _config.speed, lag = _config.lag, effectsPadding = _config.effectsPadding, effectsToAdd = [], i2, st;
          for (i2 = 0; i2 < targets.length; i2++) {
            st = createEffect(targets[i2], speed2, lag, i2, effectsPadding);
            st && effectsToAdd.push(st);
          }
          (_effects = effects).push.apply(_effects, effectsToAdd);
          config2.refresh !== false && ScrollTrigger3.refresh();
          return effectsToAdd;
        };
        this.sections = function(targets, config2) {
          var _sections;
          sections2 || (sections2 = []);
          if (!targets) {
            return sections2.slice(0);
          }
          var newSections = _toArray2(targets).map(function(el) {
            return ScrollTrigger3.create({
              trigger: el,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: function onToggle(self3) {
                el.style.opacity = self3.isActive ? "1" : "0";
                el.style.pointerEvents = self3.isActive ? "all" : "none";
              }
            });
          });
          config2 && config2.add ? (_sections = sections2).push.apply(_sections, newSections) : sections2 = newSections.slice(0);
          return newSections;
        };
        this.content(vars.content);
        this.wrapper(vars.wrapper);
        this.render = function(y) {
          return render(y || y === 0 ? y : currentY);
        };
        this.getVelocity = function() {
          return tracker.getVelocity(-currentY);
        };
        ScrollTrigger3.scrollerProxy(wrapper, {
          scrollTop,
          scrollHeight: function scrollHeight() {
            return refreshHeight() && _body3.scrollHeight;
          },
          fixedMarkers: vars.fixedMarkers !== false && !!smoothDuration,
          content,
          getBoundingClientRect: function getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: _win3.innerWidth,
              height: _win3.innerHeight
            };
          }
        });
        ScrollTrigger3.defaults({
          scroller: wrapper
        });
        var existingScrollTriggers = ScrollTrigger3.getAll().filter(function(st) {
          return st.scroller === _win3 || st.scroller === wrapper;
        });
        existingScrollTriggers.forEach(function(st) {
          return st.revert(true, true);
        });
        mainST = ScrollTrigger3.create({
          animation: gsap6.fromTo(scroll, {
            y: function y() {
              allowUpdates = 0;
              return 0;
            }
          }, {
            y: function y() {
              allowUpdates = 1;
              return -refreshHeight();
            },
            immediateRender: false,
            ease: "none",
            data: "ScrollSmoother",
            duration: 100,
            // for added precision
            onUpdate: function onUpdate() {
              if (allowUpdates) {
                var force = isProxyScrolling;
                if (force) {
                  killScrub(mainST);
                  scroll.y = currentY;
                }
                render(scroll.y, force);
                updateVelocity();
                _onUpdate && !paused && _onUpdate(self2);
              }
            }
          }),
          onRefreshInit: function onRefreshInit(self3) {
            if (ScrollSmoother2.isRefreshing) {
              return;
            }
            ScrollSmoother2.isRefreshing = true;
            if (effects) {
              var _pins = ScrollTrigger3.getAll().filter(function(st) {
                return !!st.pin;
              });
              effects.forEach(function(st) {
                if (!st.vars.pinnedContainer) {
                  _pins.forEach(function(pinST) {
                    if (pinST.pin.contains(st.trigger)) {
                      var v = st.vars;
                      v.pinnedContainer = pinST.pin;
                      st.vars = null;
                      st.init(v, st.animation);
                    }
                  });
                }
              });
            }
            var scrub = self3.getTween();
            recordedRefreshScrub = scrub && scrub._end > scrub._dp._time;
            recordedRefreshScroll = currentY;
            scroll.y = 0;
            if (smoothDuration) {
              ScrollTrigger3.isTouch === 1 && (wrapper.style.position = "absolute");
              wrapper.scrollTop = 0;
              ScrollTrigger3.isTouch === 1 && (wrapper.style.position = "fixed");
            }
          },
          onRefresh: function onRefresh2(self3) {
            self3.animation.invalidate();
            self3.setPositions(self3.start, refreshHeight() / speed);
            recordedRefreshScrub || killScrub(self3);
            scroll.y = -scrollFunc() * speed;
            render(scroll.y);
            if (!startupPhase) {
              recordedRefreshScrub && (isProxyScrolling = false);
              self3.animation.progress(gsap6.utils.clamp(0, 1, recordedRefreshScroll / speed / -self3.end));
            }
            if (recordedRefreshScrub) {
              self3.progress -= 1e-3;
              self3.update();
            }
            ScrollSmoother2.isRefreshing = false;
          },
          id: "ScrollSmoother",
          scroller: _win3,
          invalidateOnRefresh: true,
          start: 0,
          refreshPriority: -9999,
          // because all other pins, etc. should be calculated first before this figures out the height of the body. BUT this should also update FIRST so that the scroll position on the proxy is up-to-date when all the ScrollTriggers calculate their progress! -9999 is a special number that ScrollTrigger looks for to handle in this way.
          end: function end() {
            return refreshHeight() / speed;
          },
          onScrubComplete: function onScrubComplete() {
            tracker.reset();
            onStop && onStop(_this);
          },
          scrub: smoothDuration || true
        });
        this.smooth = function(value) {
          if (arguments.length) {
            smoothDuration = value || 0;
            speed = smoothDuration && +vars.speed || 1;
            mainST.scrubDuration(value);
          }
          return mainST.getTween() ? mainST.getTween().duration() : 0;
        };
        mainST.getTween() && (mainST.getTween().vars.ease = vars.ease || _expo);
        this.scrollTrigger = mainST;
        vars.effects && this.effects(vars.effects === true ? "[data-" + effectsPrefix + "speed], [data-" + effectsPrefix + "lag]" : vars.effects, {
          effectsPadding: vars.effectsPadding,
          refresh: false
        });
        vars.sections && this.sections(vars.sections === true ? "[data-section]" : vars.sections);
        existingScrollTriggers.forEach(function(st) {
          st.vars.scroller = wrapper;
          st.revert(false, true);
          st.init(st.vars, st.animation);
        });
        this.paused = function(value, allowNestedScroll) {
          if (arguments.length) {
            if (!!paused !== value) {
              if (value) {
                mainST.getTween() && mainST.getTween().pause();
                scrollFunc(-currentY / speed);
                tracker.reset();
                pausedNormalizer = ScrollTrigger3.normalizeScroll();
                pausedNormalizer && pausedNormalizer.disable();
                paused = ScrollTrigger3.observe({
                  preventDefault: true,
                  type: "wheel,touch,scroll",
                  debounce: false,
                  allowClicks: true,
                  onChangeY: function onChangeY() {
                    return scrollTop(-currentY);
                  }
                  // refuse to scroll
                });
                paused.nested = _inputObserver3(_docEl3, "wheel,touch,scroll", true, allowNestedScroll !== false);
              } else {
                paused.nested.kill();
                paused.kill();
                paused = 0;
                pausedNormalizer && pausedNormalizer.enable();
                mainST.progress = (-currentY / speed - mainST.start) / (mainST.end - mainST.start);
                killScrub(mainST);
              }
            }
            return this;
          }
          return !!paused;
        };
        this.kill = this.revert = function() {
          _this.paused(false);
          killScrub(mainST);
          mainST.kill();
          var triggers = (effects || []).concat(sections2 || []), i2 = triggers.length;
          while (i2--) {
            triggers[i2].kill();
          }
          ScrollTrigger3.scrollerProxy(wrapper);
          ScrollTrigger3.removeEventListener("killAll", addOnRefresh);
          ScrollTrigger3.removeEventListener("refresh", onRefresh);
          wrapper.style.cssText = wrapperCSS;
          content.style.cssText = contentCSS;
          var defaults = ScrollTrigger3.defaults({});
          defaults && defaults.scroller === wrapper && ScrollTrigger3.defaults({
            scroller: _win3
          });
          _this.normalizer && ScrollTrigger3.normalizeScroll(false);
          clearInterval(intervalID);
          _mainInstance = null;
          resizeObserver && resizeObserver.disconnect();
          _body3.style.removeProperty("height");
          _win3.removeEventListener("focusin", _onFocusIn);
        };
        this.refresh = function(soft, force) {
          return mainST.refresh(soft, force);
        };
        if (normalizeScroll) {
          this.normalizer = ScrollTrigger3.normalizeScroll(normalizeScroll === true ? {
            debounce: true,
            content: !smoothDuration && content
          } : normalizeScroll);
        }
        ScrollTrigger3.config(vars);
        "overscrollBehavior" in _win3.getComputedStyle(_body3) && gsap6.set([_body3, _docEl3], {
          overscrollBehavior: "none"
        });
        "scrollBehavior" in _win3.getComputedStyle(_body3) && gsap6.set([_body3, _docEl3], {
          scrollBehavior: "auto"
        });
        _win3.addEventListener("focusin", _onFocusIn);
        intervalID = setInterval(updateVelocity, 250);
        _doc3.readyState === "loading" || requestAnimationFrame(function() {
          return ScrollTrigger3.refresh();
        });
      }
      ScrollSmoother2.register = function register(core) {
        if (!_coreInitted3) {
          gsap6 = core || _getGSAP5();
          if (_windowExists3() && window.document) {
            _win3 = window;
            _doc3 = document;
            _docEl3 = _doc3.documentElement;
            _body3 = _doc3.body;
          }
          if (gsap6) {
            _toArray2 = gsap6.utils.toArray;
            _clamp3 = gsap6.utils.clamp;
            _expo = gsap6.parseEase("expo");
            _context3 = gsap6.core.context || function() {
            };
            ScrollTrigger3 = gsap6.core.globals().ScrollTrigger;
            gsap6.core.globals("ScrollSmoother", ScrollSmoother2);
            if (_body3 && ScrollTrigger3) {
              _onResizeDelayedCall = gsap6.delayedCall(0.2, function() {
                return ScrollTrigger3.isRefreshing || _mainInstance && _mainInstance.refresh();
              }).pause();
              _root3 = [_win3, _doc3, _docEl3, _body3];
              _getVelocityProp3 = ScrollTrigger3.core._getVelocityProp;
              _inputObserver3 = ScrollTrigger3.core._inputObserver;
              ScrollSmoother2.refresh = ScrollTrigger3.refresh;
              _coreInitted3 = 1;
            }
          }
        }
        return _coreInitted3;
      };
      _createClass2(ScrollSmoother2, [{
        key: "progress",
        get: function get() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
        }
      }]);
      return ScrollSmoother2;
    }();
    ScrollSmoother.version = "3.12.5";
    ScrollSmoother.create = function(vars) {
      return _mainInstance && vars && _mainInstance.content() === _toArray2(vars.content)[0] ? _mainInstance : new ScrollSmoother(vars);
    };
    ScrollSmoother.get = function() {
      return _mainInstance;
    };
    _getGSAP5() && gsap6.registerPlugin(ScrollSmoother);
  }
});

// smoother.js
function startSmoother() {
  smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    wrapper: ".site-wrapper",
    content: ".page-wrapper"
  });
}
var import_gsap4, smoother;
var init_smoother = __esm({
  "smoother.js"() {
    import_gsap4 = __toESM(require_gsap());
    init_ScrollTrigger();
    init_ScrollSmoother();
    import_gsap4.gsap.registerPlugin(ScrollTrigger2, ScrollSmoother);
    smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      wrapper: ".site-wrapper",
      content: ".page-wrapper"
    });
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", startSmoother);
    } else {
    }
  }
});

// node_modules/gsap/utils/strings.js
function getText(e) {
  var type = e.nodeType, result = "";
  if (type === 1 || type === 9 || type === 11) {
    if (typeof e.textContent === "string") {
      return e.textContent;
    } else {
      for (e = e.firstChild; e; e = e.nextSibling) {
        result += getText(e);
      }
    }
  } else if (type === 3 || type === 4) {
    return e.nodeValue;
  }
  return result;
}
var emojiExp;
var init_strings = __esm({
  "node_modules/gsap/utils/strings.js"() {
    emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  }
});

// node_modules/gsap/SplitText.js
var _doc4, _win4, _coreInitted4, gsap8, _context4, _toArray3, _stripExp, _multipleSpacesExp, _nonBreakingSpace, _initCore3, _bonusValidated, _getComputedStyle3, _isAbsolute, _findSpecialChars, _divStart, _cssClassFunc, _swapText, _pushReversed, _isBeforeWordDelimiter, _deWordify, _getStyleAsNumber, _setPositionsAfterSplit, _splitRawText, _split, SplitText;
var init_SplitText = __esm({
  "node_modules/gsap/SplitText.js"() {
    init_strings();
    _stripExp = /(?:\r|\n|\t\t)/g;
    _multipleSpacesExp = /(?:\s\s+)/g;
    _nonBreakingSpace = String.fromCharCode(160);
    _initCore3 = function _initCore4(core) {
      _doc4 = document;
      _win4 = window;
      gsap8 = gsap8 || core || _win4.gsap || console.warn("Please gsap.registerPlugin(SplitText)");
      if (gsap8) {
        _toArray3 = gsap8.utils.toArray;
        _context4 = gsap8.core.context || function() {
        };
        _coreInitted4 = 1;
      }
    };
    _bonusValidated = 1;
    _getComputedStyle3 = function _getComputedStyle4(element) {
      return _win4.getComputedStyle(element);
    };
    _isAbsolute = function _isAbsolute2(vars) {
      return vars.position === "absolute" || vars.absolute === true;
    };
    _findSpecialChars = function _findSpecialChars2(text, chars) {
      var i2 = chars.length, s;
      while (--i2 > -1) {
        s = chars[i2];
        if (text.substr(0, s.length) === s) {
          return s.length;
        }
      }
    };
    _divStart = " style='position:relative;display:inline-block;'";
    _cssClassFunc = function _cssClassFunc2(cssClass, tag) {
      if (cssClass === void 0) {
        cssClass = "";
      }
      var iterate = ~cssClass.indexOf("++"), num = 1;
      if (iterate) {
        cssClass = cssClass.split("++").join("");
      }
      return function() {
        return "<" + tag + _divStart + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
      };
    };
    _swapText = function _swapText2(element, oldText, newText) {
      var type = element.nodeType;
      if (type === 1 || type === 9 || type === 11) {
        for (element = element.firstChild; element; element = element.nextSibling) {
          _swapText2(element, oldText, newText);
        }
      } else if (type === 3 || type === 4) {
        element.nodeValue = element.nodeValue.split(oldText).join(newText);
      }
    };
    _pushReversed = function _pushReversed2(a, merge) {
      var i2 = merge.length;
      while (--i2 > -1) {
        a.push(merge[i2]);
      }
    };
    _isBeforeWordDelimiter = function _isBeforeWordDelimiter2(e, root, wordDelimiter) {
      var next;
      while (e && e !== root) {
        next = e._next || e.nextSibling;
        if (next) {
          return next.textContent.charAt(0) === wordDelimiter;
        }
        e = e.parentNode || e._parent;
      }
    };
    _deWordify = function _deWordify2(e) {
      var children = _toArray3(e.childNodes), l = children.length, i2, child;
      for (i2 = 0; i2 < l; i2++) {
        child = children[i2];
        if (child._isSplit) {
          _deWordify2(child);
        } else {
          if (i2 && child.previousSibling && child.previousSibling.nodeType === 3) {
            child.previousSibling.nodeValue += child.nodeType === 3 ? child.nodeValue : child.firstChild.nodeValue;
            e.removeChild(child);
          } else if (child.nodeType !== 3) {
            e.insertBefore(child.firstChild, child);
            e.removeChild(child);
          }
        }
      }
    };
    _getStyleAsNumber = function _getStyleAsNumber2(name, computedStyle) {
      return parseFloat(computedStyle[name]) || 0;
    };
    _setPositionsAfterSplit = function _setPositionsAfterSplit2(element, vars, allChars, allWords, allLines, origWidth, origHeight) {
      var cs = _getComputedStyle3(element), paddingLeft = _getStyleAsNumber("paddingLeft", cs), lineOffsetY = -999, borderTopAndBottom = _getStyleAsNumber("borderBottomWidth", cs) + _getStyleAsNumber("borderTopWidth", cs), borderLeftAndRight = _getStyleAsNumber("borderLeftWidth", cs) + _getStyleAsNumber("borderRightWidth", cs), padTopAndBottom = _getStyleAsNumber("paddingTop", cs) + _getStyleAsNumber("paddingBottom", cs), padLeftAndRight = _getStyleAsNumber("paddingLeft", cs) + _getStyleAsNumber("paddingRight", cs), lineThreshold = _getStyleAsNumber("fontSize", cs) * (vars.lineThreshold || 0.2), textAlign = cs.textAlign, charArray = [], wordArray = [], lineArray = [], wordDelimiter = vars.wordDelimiter || " ", tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", lines = allLines && ~types.indexOf("lines") ? [] : null, words = ~types.indexOf("words"), chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), linesClass = vars.linesClass, iterateLine = ~(linesClass || "").indexOf("++"), spaceNodesToRemove = [], isFlex = cs.display === "flex", prevInlineDisplay = element.style.display, i2, j, l, node, nodes, isChild, curLine, addWordSpaces, style, lineNode, lineWidth, offset;
      iterateLine && (linesClass = linesClass.split("++").join(""));
      isFlex && (element.style.display = "block");
      j = element.getElementsByTagName("*");
      l = j.length;
      nodes = [];
      for (i2 = 0; i2 < l; i2++) {
        nodes[i2] = j[i2];
      }
      if (lines || absolute) {
        for (i2 = 0; i2 < l; i2++) {
          node = nodes[i2];
          isChild = node.parentNode === element;
          if (isChild || absolute || chars && !words) {
            offset = node.offsetTop;
            if (lines && isChild && Math.abs(offset - lineOffsetY) > lineThreshold && (node.nodeName !== "BR" || i2 === 0)) {
              curLine = [];
              lines.push(curLine);
              lineOffsetY = offset;
            }
            if (absolute) {
              node._x = node.offsetLeft;
              node._y = offset;
              node._w = node.offsetWidth;
              node._h = node.offsetHeight;
            }
            if (lines) {
              if (node._isSplit && isChild || !chars && isChild || words && isChild || !words && node.parentNode.parentNode === element && !node.parentNode._isSplit) {
                curLine.push(node);
                node._x -= paddingLeft;
                if (_isBeforeWordDelimiter(node, element, wordDelimiter)) {
                  node._wordEnd = true;
                }
              }
              if (node.nodeName === "BR" && (node.nextSibling && node.nextSibling.nodeName === "BR" || i2 === 0)) {
                lines.push([]);
              }
            }
          }
        }
      }
      for (i2 = 0; i2 < l; i2++) {
        node = nodes[i2];
        isChild = node.parentNode === element;
        if (node.nodeName === "BR") {
          if (lines || absolute) {
            node.parentNode && node.parentNode.removeChild(node);
            nodes.splice(i2--, 1);
            l--;
          } else if (!words) {
            element.appendChild(node);
          }
          continue;
        }
        if (absolute) {
          style = node.style;
          if (!words && !isChild) {
            node._x += node.parentNode._x;
            node._y += node.parentNode._y;
          }
          style.left = node._x + "px";
          style.top = node._y + "px";
          style.position = "absolute";
          style.display = "block";
          style.width = node._w + 1 + "px";
          style.height = node._h + "px";
        }
        if (!words && chars) {
          if (node._isSplit) {
            node._next = j = node.nextSibling;
            node.parentNode.appendChild(node);
            while (j && j.nodeType === 3 && j.textContent === " ") {
              node._next = j.nextSibling;
              node.parentNode.appendChild(j);
              j = j.nextSibling;
            }
          } else if (node.parentNode._isSplit) {
            node._parent = node.parentNode;
            if (!node.previousSibling && node.firstChild) {
              node.firstChild._isFirst = true;
            }
            if (node.nextSibling && node.nextSibling.textContent === " " && !node.nextSibling.nextSibling) {
              spaceNodesToRemove.push(node.nextSibling);
            }
            node._next = node.nextSibling && node.nextSibling._isFirst ? null : node.nextSibling;
            node.parentNode.removeChild(node);
            nodes.splice(i2--, 1);
            l--;
          } else if (!isChild) {
            offset = !node.nextSibling && _isBeforeWordDelimiter(node.parentNode, element, wordDelimiter);
            node.parentNode._parent && node.parentNode._parent.appendChild(node);
            offset && node.parentNode.appendChild(_doc4.createTextNode(" "));
            if (tag === "span") {
              node.style.display = "inline";
            }
            charArray.push(node);
          }
        } else if (node.parentNode._isSplit && !node._isSplit && node.innerHTML !== "") {
          wordArray.push(node);
        } else if (chars && !node._isSplit) {
          if (tag === "span") {
            node.style.display = "inline";
          }
          charArray.push(node);
        }
      }
      i2 = spaceNodesToRemove.length;
      while (--i2 > -1) {
        spaceNodesToRemove[i2].parentNode.removeChild(spaceNodesToRemove[i2]);
      }
      if (lines) {
        if (absolute) {
          lineNode = _doc4.createElement(tag);
          element.appendChild(lineNode);
          lineWidth = lineNode.offsetWidth + "px";
          offset = lineNode.offsetParent === element ? 0 : element.offsetLeft;
          element.removeChild(lineNode);
        }
        style = element.style.cssText;
        element.style.cssText = "display:none;";
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        addWordSpaces = wordDelimiter === " " && (!absolute || !words && !chars);
        for (i2 = 0; i2 < lines.length; i2++) {
          curLine = lines[i2];
          lineNode = _doc4.createElement(tag);
          lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");
          if (linesClass) {
            lineNode.className = linesClass + (iterateLine ? i2 + 1 : "");
          }
          lineArray.push(lineNode);
          l = curLine.length;
          for (j = 0; j < l; j++) {
            if (curLine[j].nodeName !== "BR") {
              node = curLine[j];
              lineNode.appendChild(node);
              addWordSpaces && node._wordEnd && lineNode.appendChild(_doc4.createTextNode(" "));
              if (absolute) {
                if (j === 0) {
                  lineNode.style.top = node._y + "px";
                  lineNode.style.left = paddingLeft + offset + "px";
                }
                node.style.top = "0px";
                if (offset) {
                  node.style.left = node._x - offset + "px";
                }
              }
            }
          }
          if (l === 0) {
            lineNode.innerHTML = "&nbsp;";
          } else if (!words && !chars) {
            _deWordify(lineNode);
            _swapText(lineNode, String.fromCharCode(160), " ");
          }
          if (absolute) {
            lineNode.style.width = lineWidth;
            lineNode.style.height = node._h + "px";
          }
          element.appendChild(lineNode);
        }
        element.style.cssText = style;
      }
      if (absolute) {
        if (origHeight > element.clientHeight) {
          element.style.height = origHeight - padTopAndBottom + "px";
          if (element.clientHeight < origHeight) {
            element.style.height = origHeight + borderTopAndBottom + "px";
          }
        }
        if (origWidth > element.clientWidth) {
          element.style.width = origWidth - padLeftAndRight + "px";
          if (element.clientWidth < origWidth) {
            element.style.width = origWidth + borderLeftAndRight + "px";
          }
        }
      }
      isFlex && (prevInlineDisplay ? element.style.display = prevInlineDisplay : element.style.removeProperty("display"));
      _pushReversed(allChars, charArray);
      words && _pushReversed(allWords, wordArray);
      _pushReversed(allLines, lineArray);
    };
    _splitRawText = function _splitRawText2(element, vars, wordStart, charStart) {
      var tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), wordDelimiter = vars.wordDelimiter || " ", isWordDelimiter = function isWordDelimiter2(_char) {
        return _char === wordDelimiter || _char === _nonBreakingSpace && wordDelimiter === " ";
      }, space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ", wordEnd = "</" + tag + ">", wordIsOpen = 1, specialChars = vars.specialChars ? typeof vars.specialChars === "function" ? vars.specialChars : _findSpecialChars : null, text, splitText, i2, j, l, character, hasTagStart, testResult, container = _doc4.createElement("div"), parent = element.parentNode;
      parent.insertBefore(container, element);
      container.textContent = element.nodeValue;
      parent.removeChild(element);
      element = container;
      text = getText(element);
      hasTagStart = text.indexOf("<") !== -1;
      if (vars.reduceWhiteSpace !== false) {
        text = text.replace(_multipleSpacesExp, " ").replace(_stripExp, "");
      }
      if (hasTagStart) {
        text = text.split("<").join("{{LT}}");
      }
      l = text.length;
      splitText = (text.charAt(0) === " " ? space : "") + wordStart();
      for (i2 = 0; i2 < l; i2++) {
        character = text.charAt(i2);
        if (specialChars && (testResult = specialChars(text.substr(i2), vars.specialChars))) {
          character = text.substr(i2, testResult || 1);
          splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
          i2 += testResult - 1;
        } else if (isWordDelimiter(character) && !isWordDelimiter(text.charAt(i2 - 1)) && i2) {
          splitText += wordIsOpen ? wordEnd : "";
          wordIsOpen = 0;
          while (isWordDelimiter(text.charAt(i2 + 1))) {
            splitText += space;
            i2++;
          }
          if (i2 === l - 1) {
            splitText += space;
          } else if (text.charAt(i2 + 1) !== ")") {
            splitText += space + wordStart();
            wordIsOpen = 1;
          }
        } else if (character === "{" && text.substr(i2, 6) === "{{LT}}") {
          splitText += chars ? charStart() + "{{LT}}</" + tag + ">" : "{{LT}}";
          i2 += 5;
        } else if (character.charCodeAt(0) >= 55296 && character.charCodeAt(0) <= 56319 || text.charCodeAt(i2 + 1) >= 65024 && text.charCodeAt(i2 + 1) <= 65039) {
          j = ((text.substr(i2, 12).split(emojiExp) || [])[1] || "").length || 2;
          splitText += chars && character !== " " ? charStart() + text.substr(i2, j) + "</" + tag + ">" : text.substr(i2, j);
          i2 += j - 1;
        } else {
          splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
        }
      }
      element.outerHTML = splitText + (wordIsOpen ? wordEnd : "");
      hasTagStart && _swapText(parent, "{{LT}}", "<");
    };
    _split = function _split2(element, vars, wordStart, charStart) {
      var children = _toArray3(element.childNodes), l = children.length, absolute = _isAbsolute(vars), i2, child;
      if (element.nodeType !== 3 || l > 1) {
        vars.absolute = false;
        for (i2 = 0; i2 < l; i2++) {
          child = children[i2];
          child._next = child._isFirst = child._parent = child._wordEnd = null;
          if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
            if (absolute && child.nodeType !== 3 && _getComputedStyle3(child).display === "inline") {
              child.style.display = "inline-block";
              child.style.position = "relative";
            }
            child._isSplit = true;
            _split2(child, vars, wordStart, charStart);
          }
        }
        vars.absolute = absolute;
        element._isSplit = true;
        return;
      }
      _splitRawText(element, vars, wordStart, charStart);
    };
    SplitText = /* @__PURE__ */ function() {
      function SplitText2(element, vars) {
        _coreInitted4 || _initCore3();
        this.elements = _toArray3(element);
        this.chars = [];
        this.words = [];
        this.lines = [];
        this._originals = [];
        this.vars = vars || {};
        _context4(this);
        _bonusValidated && this.split(vars);
      }
      var _proto = SplitText2.prototype;
      _proto.split = function split(vars) {
        this.isSplit && this.revert();
        this.vars = vars = vars || this.vars;
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        var i2 = this.elements.length, tag = vars.tag ? vars.tag : vars.span ? "span" : "div", wordStart = _cssClassFunc(vars.wordsClass, tag), charStart = _cssClassFunc(vars.charsClass, tag), origHeight, origWidth, e;
        while (--i2 > -1) {
          e = this.elements[i2];
          this._originals[i2] = {
            html: e.innerHTML,
            style: e.getAttribute("style")
          };
          origHeight = e.clientHeight;
          origWidth = e.clientWidth;
          _split(e, vars, wordStart, charStart);
          _setPositionsAfterSplit(e, vars, this.chars, this.words, this.lines, origWidth, origHeight);
        }
        this.chars.reverse();
        this.words.reverse();
        this.lines.reverse();
        this.isSplit = true;
        return this;
      };
      _proto.revert = function revert() {
        var originals = this._originals;
        if (!originals) {
          throw "revert() call wasn't scoped properly.";
        }
        this.elements.forEach(function(e, i2) {
          e.innerHTML = originals[i2].html;
          e.setAttribute("style", originals[i2].style);
        });
        this.chars = [];
        this.words = [];
        this.lines = [];
        this.isSplit = false;
        return this;
      };
      SplitText2.create = function create(element, vars) {
        return new SplitText2(element, vars);
      };
      return SplitText2;
    }();
    SplitText.version = "3.12.5";
    SplitText.register = _initCore3;
  }
});

// gsap-hero.js
var gsap_hero_exports = {};
__export(gsap_hero_exports, {
  preloadVideo: () => preloadVideo
});
function preloadVideo() {
  videos = [...document.querySelectorAll(".slider-video")];
  videos.forEach((el) => {
    el.setAttribute("preload", "auto");
  });
}
function createCircles() {
  const container = document.querySelector(".gsap-hero_circles-wrapper");
  if (container) {
    const targetDiameter = container.offsetHeight;
    let windowWidth = window.innerWidth;
    count = 2 * Math.round(windowWidth / targetDiameter / 2);
    let newDiameter = windowWidth / count;
    try {
      container.style.setProperty("--d", newDiameter + "px");
      container.style.setProperty("--offset", newDiameter / -4 + "px");
    } catch (error) {
      console.error(error);
    }
    for (let i2 = 0; i2 < count * 2; i2++) {
      let el = document.createElement("div");
      el.classList.add("gsap-hero_circle");
      try {
        container.append(el);
      } catch (error) {
        console.error(error);
      }
    }
    circles = [...document.querySelectorAll(".gsap-hero_circle")];
  }
}
var import_gsap5, circles;
var init_gsap_hero = __esm({
  "gsap-hero.js"() {
    import_gsap5 = __toESM(require_gsap());
    init_SplitText();
    import_gsap5.gsap.registerPlugin(SplitText);
    createCircles();
    window.addEventListener("load", () => {
      let root = document.documentElement;
      let hero2 = document.querySelector(".gsap-hero_light-bg");
      let header3 = document.querySelector(".header_container");
      let heading = document.querySelector(".gsap-hero_heading");
      let split, tagline, typed;
      if (heading) {
        heading.style.opacity = "1";
        split = new SplitText(".gsap-hero_heading");
        tagline = split.chars.slice(0, 15);
        typed = split.chars.slice(15, -1);
      }
      let tl = import_gsap5.gsap.timeline();
      tl.to(circles, { duration: 0, opacity: 1, stagger: 0.05, ease: "none" });
      tl.to(hero2, { duration: 0.5, opacity: 0, ease: "power1.inOut" }, "-=0.25");
      tl.to(tagline, { duration: 0.5, color: "var(--light-teal)", ease: "power1.inOut" }, "<");
      tl.to(circles, { duration: 0.5, borderColor: "var(--light-teal)", ease: "power1.inOut" }, "<");
      tl.to(root, { duration: 0.5, ["--nav-color"]: "var(--light-teal)", ease: "power1.inOut" }, "<");
      tl.to(tagline, { duration: 1, opacity: 1, ease: "power1.out" });
      tl.to(typed, { duration: 0, color: "var(--light-teal)" }, "-=0.5");
      tl.from(typed, { duration: 0.5, stagger: 0.03, rotateZ: "1deg", translateY: "0.1em", ease: "power1.out" }, "<");
      tl.to(typed, { duration: 0.5, stagger: 0.03, opacity: 1, ease: "power1.out", onComplete: preloadVideo }, "<");
      tl.to(header3, { duration: 0.5, opacity: 1, ease: "power1.out" });
    });
  }
});

// node_modules/tiny-slider/dist/tiny-slider.css
var init_tiny_slider = __esm({
  "node_modules/tiny-slider/dist/tiny-slider.css"() {
  }
});

// node_modules/tiny-slider/src/helpers/raf.js
var win, raf;
var init_raf = __esm({
  "node_modules/tiny-slider/src/helpers/raf.js"() {
    win = window;
    raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function(cb) {
      return setTimeout(cb, 16);
    };
  }
});

// node_modules/tiny-slider/src/helpers/caf.js
var win2, caf;
var init_caf = __esm({
  "node_modules/tiny-slider/src/helpers/caf.js"() {
    win2 = window;
    caf = win2.cancelAnimationFrame || win2.mozCancelAnimationFrame || function(id) {
      clearTimeout(id);
    };
  }
});

// node_modules/tiny-slider/src/helpers/extend.js
function extend() {
  var obj, name, copy, target = arguments[0] || {}, i2 = 1, length = arguments.length;
  for (; i2 < length; i2++) {
    if ((obj = arguments[i2]) !== null) {
      for (name in obj) {
        copy = obj[name];
        if (target === copy) {
          continue;
        } else if (copy !== void 0) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}
var init_extend = __esm({
  "node_modules/tiny-slider/src/helpers/extend.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/checkStorageValue.js
function checkStorageValue(value) {
  return ["true", "false"].indexOf(value) >= 0 ? JSON.parse(value) : value;
}
var init_checkStorageValue = __esm({
  "node_modules/tiny-slider/src/helpers/checkStorageValue.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/setLocalStorage.js
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try {
      storage.setItem(key, value);
    } catch (e) {
    }
  }
  return value;
}
var init_setLocalStorage = __esm({
  "node_modules/tiny-slider/src/helpers/setLocalStorage.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/getSlideId.js
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  return "tns" + window.tnsId;
}
var init_getSlideId = __esm({
  "node_modules/tiny-slider/src/helpers/getSlideId.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/getBody.js
function getBody() {
  var doc = document, body = doc.body;
  if (!body) {
    body = doc.createElement("body");
    body.fake = true;
  }
  return body;
}
var init_getBody = __esm({
  "node_modules/tiny-slider/src/helpers/getBody.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/docElement.js
var docElement;
var init_docElement = __esm({
  "node_modules/tiny-slider/src/helpers/docElement.js"() {
    docElement = document.documentElement;
  }
});

// node_modules/tiny-slider/src/helpers/setFakeBody.js
function setFakeBody(body) {
  var docOverflow = "";
  if (body.fake) {
    docOverflow = docElement.style.overflow;
    body.style.background = "";
    body.style.overflow = docElement.style.overflow = "hidden";
    docElement.appendChild(body);
  }
  return docOverflow;
}
var init_setFakeBody = __esm({
  "node_modules/tiny-slider/src/helpers/setFakeBody.js"() {
    init_docElement();
  }
});

// node_modules/tiny-slider/src/helpers/resetFakeBody.js
function resetFakeBody(body, docOverflow) {
  if (body.fake) {
    body.remove();
    docElement.style.overflow = docOverflow;
    docElement.offsetHeight;
  }
}
var init_resetFakeBody = __esm({
  "node_modules/tiny-slider/src/helpers/resetFakeBody.js"() {
    init_docElement();
  }
});

// node_modules/tiny-slider/src/helpers/calc.js
function calc() {
  var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), result = false;
  body.appendChild(div);
  try {
    var str = "(10px * 10)", vals = ["calc" + str, "-moz-calc" + str, "-webkit-calc" + str], val;
    for (var i2 = 0; i2 < 3; i2++) {
      val = vals[i2];
      div.style.width = val;
      if (div.offsetWidth === 100) {
        result = val.replace(str, "");
        break;
      }
    }
  } catch (e) {
  }
  body.fake ? resetFakeBody(body, docOverflow) : div.remove();
  return result;
}
var init_calc = __esm({
  "node_modules/tiny-slider/src/helpers/calc.js"() {
    init_getBody();
    init_setFakeBody();
    init_resetFakeBody();
  }
});

// node_modules/tiny-slider/src/helpers/percentageLayout.js
function percentageLayout() {
  var doc = document, body = getBody(), docOverflow = setFakeBody(body), wrapper = doc.createElement("div"), outer = doc.createElement("div"), str = "", count2 = 70, perPage = 3, supported = false;
  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";
  for (var i2 = 0; i2 < count2; i2++) {
    str += "<div></div>";
  }
  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);
  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count2 - perPage].getBoundingClientRect().left) < 2;
  body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();
  return supported;
}
var init_percentageLayout = __esm({
  "node_modules/tiny-slider/src/helpers/percentageLayout.js"() {
    init_getBody();
    init_setFakeBody();
    init_resetFakeBody();
  }
});

// node_modules/tiny-slider/src/helpers/mediaquerySupport.js
function mediaquerySupport() {
  if (window.matchMedia || window.msMatchMedia) {
    return true;
  }
  var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), style = doc.createElement("style"), rule = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", position;
  style.type = "text/css";
  div.className = "tns-mq-test";
  body.appendChild(style);
  body.appendChild(div);
  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }
  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle["position"];
  body.fake ? resetFakeBody(body, docOverflow) : div.remove();
  return position === "absolute";
}
var init_mediaquerySupport = __esm({
  "node_modules/tiny-slider/src/helpers/mediaquerySupport.js"() {
    init_getBody();
    init_setFakeBody();
    init_resetFakeBody();
  }
});

// node_modules/tiny-slider/src/helpers/createStyleSheet.js
function createStyleSheet(media, nonce) {
  var style = document.createElement("style");
  if (media) {
    style.setAttribute("media", media);
  }
  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
  document.querySelector("head").appendChild(style);
  return style.sheet ? style.sheet : style.styleSheet;
}
var init_createStyleSheet = __esm({
  "node_modules/tiny-slider/src/helpers/createStyleSheet.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/addCSSRule.js
function addCSSRule(sheet, selector, rules, index) {
  "insertRule" in sheet ? sheet.insertRule(selector + "{" + rules + "}", index) : sheet.addRule(selector, rules, index);
}
var init_addCSSRule = __esm({
  "node_modules/tiny-slider/src/helpers/addCSSRule.js"() {
    init_raf();
  }
});

// node_modules/tiny-slider/src/helpers/removeCSSRule.js
function removeCSSRule(sheet, index) {
  "deleteRule" in sheet ? sheet.deleteRule(index) : sheet.removeRule(index);
}
var init_removeCSSRule = __esm({
  "node_modules/tiny-slider/src/helpers/removeCSSRule.js"() {
    init_raf();
  }
});

// node_modules/tiny-slider/src/helpers/getCssRulesLength.js
function getCssRulesLength(sheet) {
  var rule = "insertRule" in sheet ? sheet.cssRules : sheet.rules;
  return rule.length;
}
var init_getCssRulesLength = __esm({
  "node_modules/tiny-slider/src/helpers/getCssRulesLength.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/toDegree.js
function toDegree(y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}
var init_toDegree = __esm({
  "node_modules/tiny-slider/src/helpers/toDegree.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/getTouchDirection.js
function getTouchDirection(angle, range) {
  var direction = false, gap = Math.abs(90 - Math.abs(angle));
  if (gap >= 90 - range) {
    direction = "horizontal";
  } else if (gap <= range) {
    direction = "vertical";
  }
  return direction;
}
var init_getTouchDirection = __esm({
  "node_modules/tiny-slider/src/helpers/getTouchDirection.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/forEach.js
function forEach(arr, callback2, scope) {
  for (var i2 = 0, l = arr.length; i2 < l; i2++) {
    callback2.call(scope, arr[i2], i2);
  }
}
var init_forEach = __esm({
  "node_modules/tiny-slider/src/helpers/forEach.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/classListSupport.js
var classListSupport;
var init_classListSupport = __esm({
  "node_modules/tiny-slider/src/helpers/classListSupport.js"() {
    classListSupport = "classList" in document.createElement("_");
  }
});

// node_modules/tiny-slider/src/helpers/hasClass.js
var hasClass;
var init_hasClass = __esm({
  "node_modules/tiny-slider/src/helpers/hasClass.js"() {
    init_classListSupport();
    hasClass = classListSupport ? function(el, str) {
      return el.classList.contains(str);
    } : function(el, str) {
      return el.className.indexOf(str) >= 0;
    };
  }
});

// node_modules/tiny-slider/src/helpers/addClass.js
var addClass;
var init_addClass = __esm({
  "node_modules/tiny-slider/src/helpers/addClass.js"() {
    init_hasClass();
    addClass = classListSupport ? function(el, str) {
      if (!hasClass(el, str)) {
        el.classList.add(str);
      }
    } : function(el, str) {
      if (!hasClass(el, str)) {
        el.className += " " + str;
      }
    };
  }
});

// node_modules/tiny-slider/src/helpers/removeClass.js
var removeClass;
var init_removeClass = __esm({
  "node_modules/tiny-slider/src/helpers/removeClass.js"() {
    init_hasClass();
    removeClass = classListSupport ? function(el, str) {
      if (hasClass(el, str)) {
        el.classList.remove(str);
      }
    } : function(el, str) {
      if (hasClass(el, str)) {
        el.className = el.className.replace(str, "");
      }
    };
  }
});

// node_modules/tiny-slider/src/helpers/hasAttr.js
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}
var init_hasAttr = __esm({
  "node_modules/tiny-slider/src/helpers/hasAttr.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/getAttr.js
function getAttr(el, attr) {
  return el.getAttribute(attr);
}
var init_getAttr = __esm({
  "node_modules/tiny-slider/src/helpers/getAttr.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/isNodeList.js
function isNodeList(el) {
  return typeof el.item !== "undefined";
}
var init_isNodeList = __esm({
  "node_modules/tiny-slider/src/helpers/isNodeList.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/setAttrs.js
function setAttrs(els, attrs) {
  els = isNodeList(els) || els instanceof Array ? els : [els];
  if (Object.prototype.toString.call(attrs) !== "[object Object]") {
    return;
  }
  for (var i2 = els.length; i2--; ) {
    for (var key in attrs) {
      els[i2].setAttribute(key, attrs[key]);
    }
  }
}
var init_setAttrs = __esm({
  "node_modules/tiny-slider/src/helpers/setAttrs.js"() {
    init_isNodeList();
  }
});

// node_modules/tiny-slider/src/helpers/removeAttrs.js
function removeAttrs(els, attrs) {
  els = isNodeList(els) || els instanceof Array ? els : [els];
  attrs = attrs instanceof Array ? attrs : [attrs];
  var attrLength = attrs.length;
  for (var i2 = els.length; i2--; ) {
    for (var j = attrLength; j--; ) {
      els[i2].removeAttribute(attrs[j]);
    }
  }
}
var init_removeAttrs = __esm({
  "node_modules/tiny-slider/src/helpers/removeAttrs.js"() {
    init_isNodeList();
  }
});

// node_modules/tiny-slider/src/helpers/arrayFromNodeList.js
function arrayFromNodeList(nl) {
  var arr = [];
  for (var i2 = 0, l = nl.length; i2 < l; i2++) {
    arr.push(nl[i2]);
  }
  return arr;
}
var init_arrayFromNodeList = __esm({
  "node_modules/tiny-slider/src/helpers/arrayFromNodeList.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/hideElement.js
function hideElement(el, forceHide) {
  if (el.style.display !== "none") {
    el.style.display = "none";
  }
}
var init_hideElement = __esm({
  "node_modules/tiny-slider/src/helpers/hideElement.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/showElement.js
function showElement(el, forceHide) {
  if (el.style.display === "none") {
    el.style.display = "";
  }
}
var init_showElement = __esm({
  "node_modules/tiny-slider/src/helpers/showElement.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/isVisible.js
function isVisible(el) {
  return window.getComputedStyle(el).display !== "none";
}
var init_isVisible = __esm({
  "node_modules/tiny-slider/src/helpers/isVisible.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/whichProperty.js
function whichProperty(props) {
  if (typeof props === "string") {
    var arr = [props], Props = props.charAt(0).toUpperCase() + props.substr(1), prefixes = ["Webkit", "Moz", "ms", "O"];
    prefixes.forEach(function(prefix) {
      if (prefix !== "ms" || props === "transform") {
        arr.push(prefix + Props);
      }
    });
    props = arr;
  }
  var el = document.createElement("fakeelement"), len = props.length;
  for (var i2 = 0; i2 < props.length; i2++) {
    var prop = props[i2];
    if (el.style[prop] !== void 0) {
      return prop;
    }
  }
  return false;
}
var init_whichProperty = __esm({
  "node_modules/tiny-slider/src/helpers/whichProperty.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/has3DTransforms.js
function has3DTransforms(tf) {
  if (!tf) {
    return false;
  }
  if (!window.getComputedStyle) {
    return false;
  }
  var doc = document, body = getBody(), docOverflow = setFakeBody(body), el = doc.createElement("p"), has3d, cssTF = tf.length > 9 ? "-" + tf.slice(0, -9).toLowerCase() + "-" : "";
  cssTF += "transform";
  body.insertBefore(el, null);
  el.style[tf] = "translate3d(1px,1px,1px)";
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);
  body.fake ? resetFakeBody(body, docOverflow) : el.remove();
  return has3d !== void 0 && has3d.length > 0 && has3d !== "none";
}
var init_has3DTransforms = __esm({
  "node_modules/tiny-slider/src/helpers/has3DTransforms.js"() {
    init_getBody();
    init_setFakeBody();
    init_resetFakeBody();
  }
});

// node_modules/tiny-slider/src/helpers/getEndProperty.js
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = "webkit" + propOut + "End";
  } else if (/^O/.test(propIn)) {
    endProp = "o" + propOut + "End";
  } else if (propIn) {
    endProp = propOut.toLowerCase() + "end";
  }
  return endProp;
}
var init_getEndProperty = __esm({
  "node_modules/tiny-slider/src/helpers/getEndProperty.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/passiveOption.js
var supportsPassive, opts, passiveOption;
var init_passiveOption = __esm({
  "node_modules/tiny-slider/src/helpers/passiveOption.js"() {
    supportsPassive = false;
    try {
      opts = Object.defineProperty({}, "passive", {
        get: function() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {
    }
    passiveOption = supportsPassive ? { passive: true } : false;
  }
});

// node_modules/tiny-slider/src/helpers/addEvents.js
function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ["touchstart", "touchmove"].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}
var init_addEvents = __esm({
  "node_modules/tiny-slider/src/helpers/addEvents.js"() {
    init_passiveOption();
  }
});

// node_modules/tiny-slider/src/helpers/removeEvents.js
function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ["touchstart", "touchmove"].indexOf(prop) >= 0 ? passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}
var init_removeEvents = __esm({
  "node_modules/tiny-slider/src/helpers/removeEvents.js"() {
    init_passiveOption();
  }
});

// node_modules/tiny-slider/src/helpers/events.js
function Events() {
  return {
    topics: {},
    on: function(eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i2 = 0; i2 < this.topics[eventName].length; i2++) {
          if (this.topics[eventName][i2] === fn) {
            this.topics[eventName].splice(i2, 1);
            break;
          }
        }
      }
    },
    emit: function(eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
        });
      }
    }
  };
}
var init_events = __esm({
  "node_modules/tiny-slider/src/helpers/events.js"() {
  }
});

// node_modules/tiny-slider/src/helpers/jsTransform.js
function jsTransform(element, attr, prefix, postfix, to, duration, callback2) {
  var tick = Math.min(duration, 10), unit = to.indexOf("%") >= 0 ? "%" : "px", to = to.replace(unit, ""), from = Number(element.style[attr].replace(prefix, "").replace(postfix, "").replace(unit, "")), positionTick = (to - from) / duration * tick, running;
  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) {
      setTimeout(moveElement, tick);
    } else {
      callback2();
    }
  }
}
var init_jsTransform = __esm({
  "node_modules/tiny-slider/src/helpers/jsTransform.js"() {
  }
});

// node_modules/tiny-slider/src/tiny-slider.js
var tns;
var init_tiny_slider2 = __esm({
  "node_modules/tiny-slider/src/tiny-slider.js"() {
    init_raf();
    init_caf();
    init_extend();
    init_checkStorageValue();
    init_setLocalStorage();
    init_getSlideId();
    init_calc();
    init_percentageLayout();
    init_mediaquerySupport();
    init_createStyleSheet();
    init_addCSSRule();
    init_removeCSSRule();
    init_getCssRulesLength();
    init_toDegree();
    init_getTouchDirection();
    init_forEach();
    init_hasClass();
    init_addClass();
    init_removeClass();
    init_hasAttr();
    init_getAttr();
    init_setAttrs();
    init_removeAttrs();
    init_arrayFromNodeList();
    init_hideElement();
    init_showElement();
    init_isVisible();
    init_whichProperty();
    init_has3DTransforms();
    init_getEndProperty();
    init_addEvents();
    init_removeEvents();
    init_events();
    init_jsTransform();
    if (!Object.keys) {
      Object.keys = function(object) {
        var keys = [];
        for (var name in object) {
          if (Object.prototype.hasOwnProperty.call(object, name)) {
            keys.push(name);
          }
        }
        return keys;
      };
    }
    if (!("remove" in Element.prototype)) {
      Element.prototype.remove = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    }
    tns = function(options) {
      options = extend({
        container: ".slider",
        mode: "carousel",
        axis: "horizontal",
        items: 1,
        gutter: 0,
        edgePadding: 0,
        fixedWidth: false,
        autoWidth: false,
        viewportMax: false,
        slideBy: 1,
        center: false,
        controls: true,
        controlsPosition: "top",
        controlsText: ["prev", "next"],
        controlsContainer: false,
        prevButton: false,
        nextButton: false,
        nav: true,
        navPosition: "top",
        navContainer: false,
        navAsThumbnails: false,
        arrowKeys: false,
        speed: 300,
        autoplay: false,
        autoplayPosition: "top",
        autoplayTimeout: 5e3,
        autoplayDirection: "forward",
        autoplayText: ["start", "stop"],
        autoplayHoverPause: false,
        autoplayButton: false,
        autoplayButtonOutput: true,
        autoplayResetOnVisibility: true,
        animateIn: "tns-fadeIn",
        animateOut: "tns-fadeOut",
        animateNormal: "tns-normal",
        animateDelay: false,
        loop: true,
        rewind: false,
        autoHeight: false,
        responsive: false,
        lazyload: false,
        lazyloadSelector: ".tns-lazy-img",
        touch: true,
        mouseDrag: false,
        swipeAngle: 15,
        nested: false,
        preventActionWhenRunning: false,
        preventScrollOnTouch: false,
        freezable: true,
        onInit: false,
        useLocalStorage: true,
        nonce: false
      }, options || {});
      var doc = document, win3 = window, KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      }, tnsStorage = {}, localStorageAccess = options.useLocalStorage;
      if (localStorageAccess) {
        var browserInfo = navigator.userAgent;
        var uid = /* @__PURE__ */ new Date();
        try {
          tnsStorage = win3.localStorage;
          if (tnsStorage) {
            tnsStorage.setItem(uid, uid);
            localStorageAccess = tnsStorage.getItem(uid) == uid;
            tnsStorage.removeItem(uid);
          } else {
            localStorageAccess = false;
          }
          if (!localStorageAccess) {
            tnsStorage = {};
          }
        } catch (e) {
          localStorageAccess = false;
        }
        if (localStorageAccess) {
          if (tnsStorage["tnsApp"] && tnsStorage["tnsApp"] !== browserInfo) {
            ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(item) {
              tnsStorage.removeItem(item);
            });
          }
          localStorage["tnsApp"] = browserInfo;
        }
      }
      var CALC = tnsStorage["tC"] ? checkStorageValue(tnsStorage["tC"]) : setLocalStorage(tnsStorage, "tC", calc(), localStorageAccess), PERCENTAGELAYOUT = tnsStorage["tPL"] ? checkStorageValue(tnsStorage["tPL"]) : setLocalStorage(tnsStorage, "tPL", percentageLayout(), localStorageAccess), CSSMQ = tnsStorage["tMQ"] ? checkStorageValue(tnsStorage["tMQ"]) : setLocalStorage(tnsStorage, "tMQ", mediaquerySupport(), localStorageAccess), TRANSFORM = tnsStorage["tTf"] ? checkStorageValue(tnsStorage["tTf"]) : setLocalStorage(tnsStorage, "tTf", whichProperty("transform"), localStorageAccess), HAS3DTRANSFORMS = tnsStorage["t3D"] ? checkStorageValue(tnsStorage["t3D"]) : setLocalStorage(tnsStorage, "t3D", has3DTransforms(TRANSFORM), localStorageAccess), TRANSITIONDURATION = tnsStorage["tTDu"] ? checkStorageValue(tnsStorage["tTDu"]) : setLocalStorage(tnsStorage, "tTDu", whichProperty("transitionDuration"), localStorageAccess), TRANSITIONDELAY = tnsStorage["tTDe"] ? checkStorageValue(tnsStorage["tTDe"]) : setLocalStorage(tnsStorage, "tTDe", whichProperty("transitionDelay"), localStorageAccess), ANIMATIONDURATION = tnsStorage["tADu"] ? checkStorageValue(tnsStorage["tADu"]) : setLocalStorage(tnsStorage, "tADu", whichProperty("animationDuration"), localStorageAccess), ANIMATIONDELAY = tnsStorage["tADe"] ? checkStorageValue(tnsStorage["tADe"]) : setLocalStorage(tnsStorage, "tADe", whichProperty("animationDelay"), localStorageAccess), TRANSITIONEND = tnsStorage["tTE"] ? checkStorageValue(tnsStorage["tTE"]) : setLocalStorage(tnsStorage, "tTE", getEndProperty(TRANSITIONDURATION, "Transition"), localStorageAccess), ANIMATIONEND = tnsStorage["tAE"] ? checkStorageValue(tnsStorage["tAE"]) : setLocalStorage(tnsStorage, "tAE", getEndProperty(ANIMATIONDURATION, "Animation"), localStorageAccess);
      var supportConsoleWarn = win3.console && typeof win3.console.warn === "function", tnsList = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], optionsElements = {};
      tnsList.forEach(function(item) {
        if (typeof options[item] === "string") {
          var str = options[item], el = doc.querySelector(str);
          optionsElements[item] = str;
          if (el && el.nodeName) {
            options[item] = el;
          } else {
            if (supportConsoleWarn) {
              console.warn("Can't find", options[item]);
            }
            return;
          }
        }
      });
      if (options.container.children.length < 1) {
        if (supportConsoleWarn) {
          console.warn("No slides found in", options.container);
        }
        return;
      }
      var responsive = options.responsive, nested = options.nested, carousel = options.mode === "carousel" ? true : false;
      if (responsive) {
        if (0 in responsive) {
          options = extend(options, responsive[0]);
          delete responsive[0];
        }
        var responsiveTem = {};
        for (var key in responsive) {
          var val = responsive[key];
          val = typeof val === "number" ? { items: val } : val;
          responsiveTem[key] = val;
        }
        responsive = responsiveTem;
        responsiveTem = null;
      }
      function updateOptions(obj) {
        for (var key2 in obj) {
          if (!carousel) {
            if (key2 === "slideBy") {
              obj[key2] = "page";
            }
            if (key2 === "edgePadding") {
              obj[key2] = false;
            }
            if (key2 === "autoHeight") {
              obj[key2] = false;
            }
          }
          if (key2 === "responsive") {
            updateOptions(obj[key2]);
          }
        }
      }
      if (!carousel) {
        updateOptions(options);
      }
      if (!carousel) {
        options.axis = "horizontal";
        options.slideBy = "page";
        options.edgePadding = false;
        var animateIn = options.animateIn, animateOut = options.animateOut, animateDelay = options.animateDelay, animateNormal = options.animateNormal;
      }
      var horizontal = options.axis === "horizontal" ? true : false, outerWrapper = doc.createElement("div"), innerWrapper = doc.createElement("div"), middleWrapper, container = options.container, containerParent = container.parentNode, containerHTML = container.outerHTML, slideItems = container.children, slideCount = slideItems.length, breakpointZone, windowWidth = getWindowWidth(), isOn = false;
      if (responsive) {
        setBreakpointZone();
      }
      if (carousel) {
        container.className += " tns-vpfix";
      }
      var autoWidth = options.autoWidth, fixedWidth = getOption("fixedWidth"), edgePadding = getOption("edgePadding"), gutter = getOption("gutter"), viewport = getViewportWidth(), center = getOption("center"), items2 = !autoWidth ? Math.floor(getOption("items")) : 1, slideBy = getOption("slideBy"), viewportMax = options.viewportMax || options.fixedWidthViewportWidth, arrowKeys = getOption("arrowKeys"), speed = getOption("speed"), rewind = options.rewind, loop = rewind ? false : options.loop, autoHeight = getOption("autoHeight"), controls = getOption("controls"), controlsText = getOption("controlsText"), nav = getOption("nav"), touch = getOption("touch"), mouseDrag = getOption("mouseDrag"), autoplay = getOption("autoplay"), autoplayTimeout = getOption("autoplayTimeout"), autoplayText = getOption("autoplayText"), autoplayHoverPause = getOption("autoplayHoverPause"), autoplayResetOnVisibility = getOption("autoplayResetOnVisibility"), sheet = createStyleSheet(null, getOption("nonce")), lazyload = options.lazyload, lazyloadSelector = options.lazyloadSelector, slidePositions, slideItemsOut = [], cloneCount = loop ? getCloneCountForLoop() : 0, slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2, hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false, rightBoundary = fixedWidth ? getRightBoundary() : null, updateIndexBeforeTransform = !carousel || !loop ? true : false, transformAttr = horizontal ? "left" : "top", transformPrefix = "", transformPostfix = "", getIndexMax = function() {
        if (fixedWidth) {
          return function() {
            return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
          };
        } else if (autoWidth) {
          return function() {
            for (var i2 = 0; i2 < slideCountNew; i2++) {
              if (slidePositions[i2] >= -rightBoundary) {
                return i2;
              }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items2)) : slideCountNew - 1;
            }
          };
        }
      }(), index = getStartIndex(getOption("startIndex")), indexCached = index, displayIndex = getCurrentSlide(), indexMin = 0, indexMax = !autoWidth ? getIndexMax() : null, resizeTimer, preventActionWhenRunning = options.preventActionWhenRunning, swipeAngle = options.swipeAngle, moveDirectionExpected = swipeAngle ? "?" : true, running = false, onInit = options.onInit, events = new Events(), newContainerClasses = " tns-slider tns-" + options.mode, slideId = container.id || getSlideId(), disable = getOption("disable"), disabled = false, freezable = options.freezable, freeze = freezable && !autoWidth ? getFreeze() : false, frozen = false, controlsEvents = {
        "click": onControlsClick,
        "keydown": onControlsKeydown
      }, navEvents = {
        "click": onNavClick,
        "keydown": onNavKeydown
      }, hoverEvents = {
        "mouseover": mouseoverPause,
        "mouseout": mouseoutRestart
      }, visibilityEvent = { "visibilitychange": onVisibilityChange }, docmentKeydownEvent = { "keydown": onDocumentKeydown }, touchEvents = {
        "touchstart": onPanStart,
        "touchmove": onPanMove,
        "touchend": onPanEnd,
        "touchcancel": onPanEnd
      }, dragEvents = {
        "mousedown": onPanStart,
        "mousemove": onPanMove,
        "mouseup": onPanEnd,
        "mouseleave": onPanEnd
      }, hasControls = hasOption("controls"), hasNav = hasOption("nav"), navAsThumbnails = autoWidth ? true : options.navAsThumbnails, hasAutoplay = hasOption("autoplay"), hasTouch = hasOption("touch"), hasMouseDrag = hasOption("mouseDrag"), slideActiveClass = "tns-slide-active", slideClonedClass = "tns-slide-cloned", imgCompleteClass = "tns-complete", imgEvents = {
        "load": onImgLoaded,
        "error": onImgFailed
      }, imgsComplete, liveregionCurrent, preventScroll = options.preventScrollOnTouch === "force" ? true : false;
      if (hasControls) {
        var controlsContainer = options.controlsContainer, controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : "", prevButton = options.prevButton, nextButton = options.nextButton, prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : "", nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : "", prevIsButton, nextIsButton;
      }
      if (hasNav) {
        var navContainer = options.navContainer, navContainerHTML = options.navContainer ? options.navContainer.outerHTML : "", navItems, pages = autoWidth ? slideCount : getPages(), pagesCached = 0, navClicked = -1, navCurrentIndex = getCurrentNavIndex(), navCurrentIndexCached = navCurrentIndex, navActiveClass = "tns-nav-active", navStr = "Carousel Page ", navStrCurrent = " (Current Slide)";
      }
      if (hasAutoplay) {
        var autoplayDirection = options.autoplayDirection === "forward" ? 1 : -1, autoplayButton = options.autoplayButton, autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : "", autoplayHtmlStrings = ["<span class='tns-visually-hidden'>", " animation</span>"], autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused;
      }
      if (hasTouch || hasMouseDrag) {
        var initPosition = {}, lastPosition = {}, translateInit, disX, disY, panStart = false, rafIndex, getDist = horizontal ? function(a, b) {
          return a.x - b.x;
        } : function(a, b) {
          return a.y - b.y;
        };
      }
      if (!autoWidth) {
        resetVariblesWhenDisable(disable || freeze);
      }
      if (TRANSFORM) {
        transformAttr = TRANSFORM;
        transformPrefix = "translate";
        if (HAS3DTRANSFORMS) {
          transformPrefix += horizontal ? "3d(" : "3d(0px, ";
          transformPostfix = horizontal ? ", 0px, 0px)" : ", 0px)";
        } else {
          transformPrefix += horizontal ? "X(" : "Y(";
          transformPostfix = ")";
        }
      }
      if (carousel) {
        container.className = container.className.replace("tns-vpfix", "");
      }
      initStructure();
      initSheet();
      initSliderTransform();
      function resetVariblesWhenDisable(condition) {
        if (condition) {
          controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
        }
      }
      function getCurrentSlide() {
        var tem = carousel ? index - cloneCount : index;
        while (tem < 0) {
          tem += slideCount;
        }
        return tem % slideCount + 1;
      }
      function getStartIndex(ind) {
        ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items2, ind)) : 0;
        return carousel ? ind + cloneCount : ind;
      }
      function getAbsIndex(i2) {
        if (i2 == null) {
          i2 = index;
        }
        if (carousel) {
          i2 -= cloneCount;
        }
        while (i2 < 0) {
          i2 += slideCount;
        }
        return Math.floor(i2 % slideCount);
      }
      function getCurrentNavIndex() {
        var absIndex = getAbsIndex(), result;
        result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items2);
        if (!loop && carousel && index === indexMax) {
          result = pages - 1;
        }
        return result;
      }
      function getItemsMax() {
        if (autoWidth || fixedWidth && !viewportMax) {
          return slideCount - 1;
        } else {
          var str = fixedWidth ? "fixedWidth" : "items", arr = [];
          if (fixedWidth || options[str] < slideCount) {
            arr.push(options[str]);
          }
          if (responsive) {
            for (var bp in responsive) {
              var tem = responsive[bp][str];
              if (tem && (fixedWidth || tem < slideCount)) {
                arr.push(tem);
              }
            }
          }
          if (!arr.length) {
            arr.push(0);
          }
          return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
        }
      }
      function getCloneCountForLoop() {
        var itemsMax = getItemsMax(), result = carousel ? Math.ceil((itemsMax * 5 - slideCount) / 2) : itemsMax * 4 - slideCount;
        result = Math.max(itemsMax, result);
        return hasOption("edgePadding") ? result + 1 : result;
      }
      function getWindowWidth() {
        return win3.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
      }
      function getInsertPosition(pos) {
        return pos === "top" ? "afterbegin" : "beforeend";
      }
      function getClientWidth(el) {
        if (el == null) {
          return;
        }
        var div = doc.createElement("div"), rect, width;
        el.appendChild(div);
        rect = div.getBoundingClientRect();
        width = rect.right - rect.left;
        div.remove();
        return width || getClientWidth(el.parentNode);
      }
      function getViewportWidth() {
        var gap = edgePadding ? edgePadding * 2 - gutter : 0;
        return getClientWidth(containerParent) - gap;
      }
      function hasOption(item) {
        if (options[item]) {
          return true;
        } else {
          if (responsive) {
            for (var bp in responsive) {
              if (responsive[bp][item]) {
                return true;
              }
            }
          }
          return false;
        }
      }
      function getOption(item, ww) {
        if (ww == null) {
          ww = windowWidth;
        }
        if (item === "items" && fixedWidth) {
          return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;
        } else {
          var result = options[item];
          if (responsive) {
            for (var bp in responsive) {
              if (ww >= parseInt(bp)) {
                if (item in responsive[bp]) {
                  result = responsive[bp][item];
                }
              }
            }
          }
          if (item === "slideBy" && result === "page") {
            result = getOption("items");
          }
          if (!carousel && (item === "slideBy" || item === "items")) {
            result = Math.floor(result);
          }
          return result;
        }
      }
      function getSlideMarginLeft(i2) {
        return CALC ? CALC + "(" + i2 * 100 + "% / " + slideCountNew + ")" : i2 * 100 / slideCountNew + "%";
      }
      function getInnerWrapperStyles(edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
        var str = "";
        if (edgePaddingTem !== void 0) {
          var gap = edgePaddingTem;
          if (gutterTem) {
            gap -= gutterTem;
          }
          str = horizontal ? "margin: 0 " + gap + "px 0 " + edgePaddingTem + "px;" : "margin: " + edgePaddingTem + "px 0 " + gap + "px 0;";
        } else if (gutterTem && !fixedWidthTem) {
          var gutterTemUnit = "-" + gutterTem + "px", dir = horizontal ? gutterTemUnit + " 0 0" : "0 " + gutterTemUnit + " 0";
          str = "margin: 0 " + dir + ";";
        }
        if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) {
          str += getTransitionDurationStyle(speedTem);
        }
        return str;
      }
      function getContainerWidth(fixedWidthTem, gutterTem, itemsTem) {
        if (fixedWidthTem) {
          return (fixedWidthTem + gutterTem) * slideCountNew + "px";
        } else {
          return CALC ? CALC + "(" + slideCountNew * 100 + "% / " + itemsTem + ")" : slideCountNew * 100 / itemsTem + "%";
        }
      }
      function getSlideWidthStyle(fixedWidthTem, gutterTem, itemsTem) {
        var width;
        if (fixedWidthTem) {
          width = fixedWidthTem + gutterTem + "px";
        } else {
          if (!carousel) {
            itemsTem = Math.floor(itemsTem);
          }
          var dividend = carousel ? slideCountNew : itemsTem;
          width = CALC ? CALC + "(100% / " + dividend + ")" : 100 / dividend + "%";
        }
        width = "width:" + width;
        return nested !== "inner" ? width + ";" : width + " !important;";
      }
      function getSlideGutterStyle(gutterTem) {
        var str = "";
        if (gutterTem !== false) {
          var prop = horizontal ? "padding-" : "margin-", dir = horizontal ? "right" : "bottom";
          str = prop + dir + ": " + gutterTem + "px;";
        }
        return str;
      }
      function getCSSPrefix(name, num) {
        var prefix = name.substring(0, name.length - num).toLowerCase();
        if (prefix) {
          prefix = "-" + prefix + "-";
        }
        return prefix;
      }
      function getTransitionDurationStyle(speed2) {
        return getCSSPrefix(TRANSITIONDURATION, 18) + "transition-duration:" + speed2 / 1e3 + "s;";
      }
      function getAnimationDurationStyle(speed2) {
        return getCSSPrefix(ANIMATIONDURATION, 17) + "animation-duration:" + speed2 / 1e3 + "s;";
      }
      function initStructure() {
        var classOuter = "tns-outer", classInner = "tns-inner", hasGutter = hasOption("gutter");
        outerWrapper.className = classOuter;
        innerWrapper.className = classInner;
        outerWrapper.id = slideId + "-ow";
        innerWrapper.id = slideId + "-iw";
        if (container.id === "") {
          container.id = slideId;
        }
        newContainerClasses += PERCENTAGELAYOUT || autoWidth ? " tns-subpixel" : " tns-no-subpixel";
        newContainerClasses += CALC ? " tns-calc" : " tns-no-calc";
        if (autoWidth) {
          newContainerClasses += " tns-autowidth";
        }
        newContainerClasses += " tns-" + options.axis;
        container.className += newContainerClasses;
        if (carousel) {
          middleWrapper = doc.createElement("div");
          middleWrapper.id = slideId + "-mw";
          middleWrapper.className = "tns-ovh";
          outerWrapper.appendChild(middleWrapper);
          middleWrapper.appendChild(innerWrapper);
        } else {
          outerWrapper.appendChild(innerWrapper);
        }
        if (autoHeight) {
          var wp = middleWrapper ? middleWrapper : innerWrapper;
          wp.className += " tns-ah";
        }
        containerParent.insertBefore(outerWrapper, container);
        innerWrapper.appendChild(container);
        forEach(slideItems, function(item, i2) {
          addClass(item, "tns-item");
          if (!item.id) {
            item.id = slideId + "-item" + i2;
          }
          if (!carousel && animateNormal) {
            addClass(item, animateNormal);
          }
          setAttrs(item, {
            "aria-hidden": "true",
            "tabindex": "-1"
          });
        });
        if (cloneCount) {
          var fragmentBefore = doc.createDocumentFragment(), fragmentAfter = doc.createDocumentFragment();
          for (var j = cloneCount; j--; ) {
            var num = j % slideCount, cloneFirst = slideItems[num].cloneNode(true);
            addClass(cloneFirst, slideClonedClass);
            removeAttrs(cloneFirst, "id");
            fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);
            if (carousel) {
              var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
              addClass(cloneLast, slideClonedClass);
              removeAttrs(cloneLast, "id");
              fragmentBefore.appendChild(cloneLast);
            }
          }
          container.insertBefore(fragmentBefore, container.firstChild);
          container.appendChild(fragmentAfter);
          slideItems = container.children;
        }
      }
      function initSliderTransform() {
        if (hasOption("autoHeight") || autoWidth || !horizontal) {
          var imgs = container.querySelectorAll("img");
          forEach(imgs, function(img) {
            var src = img.src;
            if (!lazyload) {
              if (src && src.indexOf("data:image") < 0) {
                img.src = "";
                addEvents(img, imgEvents);
                addClass(img, "loading");
                img.src = src;
              } else {
                imgLoaded(img);
              }
            }
          });
          raf(function() {
            imgsLoadedCheck(arrayFromNodeList(imgs), function() {
              imgsComplete = true;
            });
          });
          if (hasOption("autoHeight")) {
            imgs = getImageArray(index, Math.min(index + items2 - 1, slideCountNew - 1));
          }
          lazyload ? initSliderTransformStyleCheck() : raf(function() {
            imgsLoadedCheck(arrayFromNodeList(imgs), initSliderTransformStyleCheck);
          });
        } else {
          if (carousel) {
            doContainerTransformSilent();
          }
          initTools();
          initEvents();
        }
      }
      function initSliderTransformStyleCheck() {
        if (autoWidth && slideCount > 1) {
          var num = loop ? index : slideCount - 1;
          (function stylesApplicationCheck() {
            var left = slideItems[num].getBoundingClientRect().left;
            var right = slideItems[num - 1].getBoundingClientRect().right;
            Math.abs(left - right) <= 1 ? initSliderTransformCore() : setTimeout(function() {
              stylesApplicationCheck();
            }, 16);
          })();
        } else {
          initSliderTransformCore();
        }
      }
      function initSliderTransformCore() {
        if (!horizontal || autoWidth) {
          setSlidePositions();
          if (autoWidth) {
            rightBoundary = getRightBoundary();
            if (freezable) {
              freeze = getFreeze();
            }
            indexMax = getIndexMax();
            resetVariblesWhenDisable(disable || freeze);
          } else {
            updateContentWrapperHeight();
          }
        }
        if (carousel) {
          doContainerTransformSilent();
        }
        initTools();
        initEvents();
      }
      function initSheet() {
        if (!carousel) {
          for (var i2 = index, l = index + Math.min(slideCount, items2); i2 < l; i2++) {
            var item = slideItems[i2];
            item.style.left = (i2 - index) * 100 / items2 + "%";
            addClass(item, animateIn);
            removeClass(item, animateNormal);
          }
        }
        if (horizontal) {
          if (PERCENTAGELAYOUT || autoWidth) {
            addCSSRule(sheet, "#" + slideId + " > .tns-item", "font-size:" + win3.getComputedStyle(slideItems[0]).fontSize + ";", getCssRulesLength(sheet));
            addCSSRule(sheet, "#" + slideId, "font-size:0;", getCssRulesLength(sheet));
          } else if (carousel) {
            forEach(slideItems, function(slide, i3) {
              slide.style.marginLeft = getSlideMarginLeft(i3);
            });
          }
        }
        if (CSSMQ) {
          if (TRANSITIONDURATION) {
            var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : "";
            addCSSRule(sheet, "#" + slideId + "-mw", str, getCssRulesLength(sheet));
          }
          str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
          addCSSRule(sheet, "#" + slideId + "-iw", str, getCssRulesLength(sheet));
          if (carousel) {
            str = horizontal && !autoWidth ? "width:" + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ";" : "";
            if (TRANSITIONDURATION) {
              str += getTransitionDurationStyle(speed);
            }
            addCSSRule(sheet, "#" + slideId, str, getCssRulesLength(sheet));
          }
          str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : "";
          if (options.gutter) {
            str += getSlideGutterStyle(options.gutter);
          }
          if (!carousel) {
            if (TRANSITIONDURATION) {
              str += getTransitionDurationStyle(speed);
            }
            if (ANIMATIONDURATION) {
              str += getAnimationDurationStyle(speed);
            }
          }
          if (str) {
            addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
          }
        } else {
          update_carousel_transition_duration();
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);
          if (carousel && horizontal && !autoWidth) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items2);
          }
          var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items2) : "";
          if (gutter) {
            str += getSlideGutterStyle(gutter);
          }
          if (str) {
            addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
          }
        }
        if (responsive && CSSMQ) {
          for (var bp in responsive) {
            bp = parseInt(bp);
            var opts = responsive[bp], str = "", middleWrapperStr = "", innerWrapperStr = "", containerStr = "", slideStr = "", itemsBP = !autoWidth ? getOption("items", bp) : null, fixedWidthBP = getOption("fixedWidth", bp), speedBP = getOption("speed", bp), edgePaddingBP = getOption("edgePadding", bp), autoHeightBP = getOption("autoHeight", bp), gutterBP = getOption("gutter", bp);
            if (TRANSITIONDURATION && middleWrapper && getOption("autoHeight", bp) && "speed" in opts) {
              middleWrapperStr = "#" + slideId + "-mw{" + getTransitionDurationStyle(speedBP) + "}";
            }
            if ("edgePadding" in opts || "gutter" in opts) {
              innerWrapperStr = "#" + slideId + "-iw{" + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + "}";
            }
            if (carousel && horizontal && !autoWidth && ("fixedWidth" in opts || "items" in opts || fixedWidth && "gutter" in opts)) {
              containerStr = "width:" + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ";";
            }
            if (TRANSITIONDURATION && "speed" in opts) {
              containerStr += getTransitionDurationStyle(speedBP);
            }
            if (containerStr) {
              containerStr = "#" + slideId + "{" + containerStr + "}";
            }
            if ("fixedWidth" in opts || fixedWidth && "gutter" in opts || !carousel && "items" in opts) {
              slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
            }
            if ("gutter" in opts) {
              slideStr += getSlideGutterStyle(gutterBP);
            }
            if (!carousel && "speed" in opts) {
              if (TRANSITIONDURATION) {
                slideStr += getTransitionDurationStyle(speedBP);
              }
              if (ANIMATIONDURATION) {
                slideStr += getAnimationDurationStyle(speedBP);
              }
            }
            if (slideStr) {
              slideStr = "#" + slideId + " > .tns-item{" + slideStr + "}";
            }
            str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;
            if (str) {
              sheet.insertRule("@media (min-width: " + bp / 16 + "em) {" + str + "}", sheet.cssRules.length);
            }
          }
        }
      }
      function initTools() {
        updateSlideStatus();
        outerWrapper.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + "</span>  of " + slideCount + "</div>");
        liveregionCurrent = outerWrapper.querySelector(".tns-liveregion .current");
        if (hasAutoplay) {
          var txt = autoplay ? "stop" : "start";
          if (autoplayButton) {
            setAttrs(autoplayButton, { "data-action": txt });
          } else if (options.autoplayButtonOutput) {
            outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + "</button>");
            autoplayButton = outerWrapper.querySelector("[data-action]");
          }
          if (autoplayButton) {
            addEvents(autoplayButton, { "click": toggleAutoplay });
          }
          if (autoplay) {
            startAutoplay();
            if (autoplayHoverPause) {
              addEvents(container, hoverEvents);
            }
            if (autoplayResetOnVisibility) {
              addEvents(container, visibilityEvent);
            }
          }
        }
        if (hasNav) {
          var initIndex = !carousel ? 0 : cloneCount;
          if (navContainer) {
            setAttrs(navContainer, { "aria-label": "Carousel Pagination" });
            navItems = navContainer.children;
            forEach(navItems, function(item, i3) {
              setAttrs(item, {
                "data-nav": i3,
                "tabindex": "-1",
                "aria-label": navStr + (i3 + 1),
                "aria-controls": slideId
              });
            });
          } else {
            var navHtml = "", hiddenStr = navAsThumbnails ? "" : 'style="display:none"';
            for (var i2 = 0; i2 < slideCount; i2++) {
              navHtml += '<button type="button" data-nav="' + i2 + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i2 + 1) + '"></button>';
            }
            navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + "</div>";
            outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);
            navContainer = outerWrapper.querySelector(".tns-nav");
            navItems = navContainer.children;
          }
          updateNavVisibility();
          if (TRANSITIONDURATION) {
            var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(), str = "transition: all " + speed / 1e3 + "s";
            if (prefix) {
              str = "-" + prefix + "-" + str;
            }
            addCSSRule(sheet, "[aria-controls^=" + slideId + "-item]", str, getCssRulesLength(sheet));
          }
          setAttrs(navItems[navCurrentIndex], { "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent });
          removeAttrs(navItems[navCurrentIndex], "tabindex");
          addClass(navItems[navCurrentIndex], navActiveClass);
          addEvents(navContainer, navEvents);
        }
        if (hasControls) {
          if (!controlsContainer && (!prevButton || !nextButton)) {
            outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + "</button></div>");
            controlsContainer = outerWrapper.querySelector(".tns-controls");
          }
          if (!prevButton || !nextButton) {
            prevButton = controlsContainer.children[0];
            nextButton = controlsContainer.children[1];
          }
          if (options.controlsContainer) {
            setAttrs(controlsContainer, {
              "aria-label": "Carousel Navigation",
              "tabindex": "0"
            });
          }
          if (options.controlsContainer || options.prevButton && options.nextButton) {
            setAttrs([prevButton, nextButton], {
              "aria-controls": slideId,
              "tabindex": "-1"
            });
          }
          if (options.controlsContainer || options.prevButton && options.nextButton) {
            setAttrs(prevButton, { "data-controls": "prev" });
            setAttrs(nextButton, { "data-controls": "next" });
          }
          prevIsButton = isButton(prevButton);
          nextIsButton = isButton(nextButton);
          updateControlsStatus();
          if (controlsContainer) {
            addEvents(controlsContainer, controlsEvents);
          } else {
            addEvents(prevButton, controlsEvents);
            addEvents(nextButton, controlsEvents);
          }
        }
        disableUI();
      }
      function initEvents() {
        if (carousel && TRANSITIONEND) {
          var eve = {};
          eve[TRANSITIONEND] = onTransitionEnd;
          addEvents(container, eve);
        }
        if (touch) {
          addEvents(container, touchEvents, options.preventScrollOnTouch);
        }
        if (mouseDrag) {
          addEvents(container, dragEvents);
        }
        if (arrowKeys) {
          addEvents(doc, docmentKeydownEvent);
        }
        if (nested === "inner") {
          events.on("outerResized", function() {
            resizeTasks();
            events.emit("innerLoaded", info());
          });
        } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
          addEvents(win3, { "resize": onResize });
        }
        if (autoHeight) {
          if (nested === "outer") {
            events.on("innerLoaded", doAutoHeight);
          } else if (!disable) {
            doAutoHeight();
          }
        }
        doLazyLoad();
        if (disable) {
          disableSlider();
        } else if (freeze) {
          freezeSlider();
        }
        events.on("indexChanged", additionalUpdates);
        if (nested === "inner") {
          events.emit("innerLoaded", info());
        }
        if (typeof onInit === "function") {
          onInit(info());
        }
        isOn = true;
      }
      function destroy() {
        sheet.disabled = true;
        if (sheet.ownerNode) {
          sheet.ownerNode.remove();
        }
        removeEvents(win3, { "resize": onResize });
        if (arrowKeys) {
          removeEvents(doc, docmentKeydownEvent);
        }
        if (controlsContainer) {
          removeEvents(controlsContainer, controlsEvents);
        }
        if (navContainer) {
          removeEvents(navContainer, navEvents);
        }
        removeEvents(container, hoverEvents);
        removeEvents(container, visibilityEvent);
        if (autoplayButton) {
          removeEvents(autoplayButton, { "click": toggleAutoplay });
        }
        if (autoplay) {
          clearInterval(autoplayTimer);
        }
        if (carousel && TRANSITIONEND) {
          var eve = {};
          eve[TRANSITIONEND] = onTransitionEnd;
          removeEvents(container, eve);
        }
        if (touch) {
          removeEvents(container, touchEvents);
        }
        if (mouseDrag) {
          removeEvents(container, dragEvents);
        }
        var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];
        tnsList.forEach(function(item, i2) {
          var el = item === "container" ? outerWrapper : options[item];
          if (typeof el === "object" && el) {
            var prevEl = el.previousElementSibling ? el.previousElementSibling : false, parentEl = el.parentNode;
            el.outerHTML = htmlList[i2];
            options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
          }
        });
        tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items2 = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
        for (var a in this) {
          if (a !== "rebuild") {
            this[a] = null;
          }
        }
        isOn = false;
      }
      function onResize(e) {
        raf(function() {
          resizeTasks(getEvent(e));
        });
      }
      function resizeTasks(e) {
        if (!isOn) {
          return;
        }
        if (nested === "outer") {
          events.emit("outerResized", info(e));
        }
        windowWidth = getWindowWidth();
        var bpChanged, breakpointZoneTem = breakpointZone, needContainerTransform = false;
        if (responsive) {
          setBreakpointZone();
          bpChanged = breakpointZoneTem !== breakpointZone;
          if (bpChanged) {
            events.emit("newBreakpointStart", info(e));
          }
        }
        var indChanged, itemsChanged, itemsTem = items2, disableTem = disable, freezeTem = freeze, arrowKeysTem = arrowKeys, controlsTem = controls, navTem = nav, touchTem = touch, mouseDragTem = mouseDrag, autoplayTem = autoplay, autoplayHoverPauseTem = autoplayHoverPause, autoplayResetOnVisibilityTem = autoplayResetOnVisibility, indexTem = index;
        if (bpChanged) {
          var fixedWidthTem = fixedWidth, autoHeightTem = autoHeight, controlsTextTem = controlsText, centerTem = center, autoplayTextTem = autoplayText;
          if (!CSSMQ) {
            var gutterTem = gutter, edgePaddingTem = edgePadding;
          }
        }
        arrowKeys = getOption("arrowKeys");
        controls = getOption("controls");
        nav = getOption("nav");
        touch = getOption("touch");
        center = getOption("center");
        mouseDrag = getOption("mouseDrag");
        autoplay = getOption("autoplay");
        autoplayHoverPause = getOption("autoplayHoverPause");
        autoplayResetOnVisibility = getOption("autoplayResetOnVisibility");
        if (bpChanged) {
          disable = getOption("disable");
          fixedWidth = getOption("fixedWidth");
          speed = getOption("speed");
          autoHeight = getOption("autoHeight");
          controlsText = getOption("controlsText");
          autoplayText = getOption("autoplayText");
          autoplayTimeout = getOption("autoplayTimeout");
          if (!CSSMQ) {
            edgePadding = getOption("edgePadding");
            gutter = getOption("gutter");
          }
        }
        resetVariblesWhenDisable(disable);
        viewport = getViewportWidth();
        if ((!horizontal || autoWidth) && !disable) {
          setSlidePositions();
          if (!horizontal) {
            updateContentWrapperHeight();
            needContainerTransform = true;
          }
        }
        if (fixedWidth || autoWidth) {
          rightBoundary = getRightBoundary();
          indexMax = getIndexMax();
        }
        if (bpChanged || fixedWidth) {
          items2 = getOption("items");
          slideBy = getOption("slideBy");
          itemsChanged = items2 !== itemsTem;
          if (itemsChanged) {
            if (!fixedWidth && !autoWidth) {
              indexMax = getIndexMax();
            }
            updateIndex();
          }
        }
        if (bpChanged) {
          if (disable !== disableTem) {
            if (disable) {
              disableSlider();
            } else {
              enableSlider();
            }
          }
        }
        if (freezable && (bpChanged || fixedWidth || autoWidth)) {
          freeze = getFreeze();
          if (freeze !== freezeTem) {
            if (freeze) {
              doContainerTransform(getContainerTransformValue(getStartIndex(0)));
              freezeSlider();
            } else {
              unfreezeSlider();
              needContainerTransform = true;
            }
          }
        }
        resetVariblesWhenDisable(disable || freeze);
        if (!autoplay) {
          autoplayHoverPause = autoplayResetOnVisibility = false;
        }
        if (arrowKeys !== arrowKeysTem) {
          arrowKeys ? addEvents(doc, docmentKeydownEvent) : removeEvents(doc, docmentKeydownEvent);
        }
        if (controls !== controlsTem) {
          if (controls) {
            if (controlsContainer) {
              showElement(controlsContainer);
            } else {
              if (prevButton) {
                showElement(prevButton);
              }
              if (nextButton) {
                showElement(nextButton);
              }
            }
          } else {
            if (controlsContainer) {
              hideElement(controlsContainer);
            } else {
              if (prevButton) {
                hideElement(prevButton);
              }
              if (nextButton) {
                hideElement(nextButton);
              }
            }
          }
        }
        if (nav !== navTem) {
          if (nav) {
            showElement(navContainer);
            updateNavVisibility();
          } else {
            hideElement(navContainer);
          }
        }
        if (touch !== touchTem) {
          touch ? addEvents(container, touchEvents, options.preventScrollOnTouch) : removeEvents(container, touchEvents);
        }
        if (mouseDrag !== mouseDragTem) {
          mouseDrag ? addEvents(container, dragEvents) : removeEvents(container, dragEvents);
        }
        if (autoplay !== autoplayTem) {
          if (autoplay) {
            if (autoplayButton) {
              showElement(autoplayButton);
            }
            if (!animating && !autoplayUserPaused) {
              startAutoplay();
            }
          } else {
            if (autoplayButton) {
              hideElement(autoplayButton);
            }
            if (animating) {
              stopAutoplay();
            }
          }
        }
        if (autoplayHoverPause !== autoplayHoverPauseTem) {
          autoplayHoverPause ? addEvents(container, hoverEvents) : removeEvents(container, hoverEvents);
        }
        if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
          autoplayResetOnVisibility ? addEvents(doc, visibilityEvent) : removeEvents(doc, visibilityEvent);
        }
        if (bpChanged) {
          if (fixedWidth !== fixedWidthTem || center !== centerTem) {
            needContainerTransform = true;
          }
          if (autoHeight !== autoHeightTem) {
            if (!autoHeight) {
              innerWrapper.style.height = "";
            }
          }
          if (controls && controlsText !== controlsTextTem) {
            prevButton.innerHTML = controlsText[0];
            nextButton.innerHTML = controlsText[1];
          }
          if (autoplayButton && autoplayText !== autoplayTextTem) {
            var i2 = autoplay ? 1 : 0, html = autoplayButton.innerHTML, len = html.length - autoplayTextTem[i2].length;
            if (html.substring(len) === autoplayTextTem[i2]) {
              autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i2];
            }
          }
        } else {
          if (center && (fixedWidth || autoWidth)) {
            needContainerTransform = true;
          }
        }
        if (itemsChanged || fixedWidth && !autoWidth) {
          pages = getPages();
          updateNavVisibility();
        }
        indChanged = index !== indexTem;
        if (indChanged) {
          events.emit("indexChanged", info());
          needContainerTransform = true;
        } else if (itemsChanged) {
          if (!indChanged) {
            additionalUpdates();
          }
        } else if (fixedWidth || autoWidth) {
          doLazyLoad();
          updateSlideStatus();
          updateLiveRegion();
        }
        if (itemsChanged && !carousel) {
          updateGallerySlidePositions();
        }
        if (!disable && !freeze) {
          if (bpChanged && !CSSMQ) {
            if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
              innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
            }
            if (horizontal) {
              if (carousel) {
                container.style.width = getContainerWidth(fixedWidth, gutter, items2);
              }
              var str = getSlideWidthStyle(fixedWidth, gutter, items2) + getSlideGutterStyle(gutter);
              removeCSSRule(sheet, getCssRulesLength(sheet) - 1);
              addCSSRule(sheet, "#" + slideId + " > .tns-item", str, getCssRulesLength(sheet));
            }
          }
          if (autoHeight) {
            doAutoHeight();
          }
          if (needContainerTransform) {
            doContainerTransformSilent();
            indexCached = index;
          }
        }
        if (bpChanged) {
          events.emit("newBreakpointEnd", info(e));
        }
      }
      function getFreeze() {
        if (!fixedWidth && !autoWidth) {
          var a = center ? items2 - (items2 - 1) / 2 : items2;
          return slideCount <= a;
        }
        var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount], vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;
        if (center) {
          vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
        }
        return width <= vp;
      }
      function setBreakpointZone() {
        breakpointZone = 0;
        for (var bp in responsive) {
          bp = parseInt(bp);
          if (windowWidth >= bp) {
            breakpointZone = bp;
          }
        }
      }
      var updateIndex = function() {
        return loop ? carousel ? (
          // loop + carousel
          function() {
            var leftEdge = indexMin, rightEdge = indexMax;
            leftEdge += slideBy;
            rightEdge -= slideBy;
            if (edgePadding) {
              leftEdge += 1;
              rightEdge -= 1;
            } else if (fixedWidth) {
              if ((viewport + gutter) % (fixedWidth + gutter)) {
                rightEdge -= 1;
              }
            }
            if (cloneCount) {
              if (index > rightEdge) {
                index -= slideCount;
              } else if (index < leftEdge) {
                index += slideCount;
              }
            }
          }
        ) : (
          // loop + gallery
          function() {
            if (index > indexMax) {
              while (index >= indexMin + slideCount) {
                index -= slideCount;
              }
            } else if (index < indexMin) {
              while (index <= indexMax - slideCount) {
                index += slideCount;
              }
            }
          }
        ) : (
          // non-loop
          function() {
            index = Math.max(indexMin, Math.min(indexMax, index));
          }
        );
      }();
      function disableUI() {
        if (!autoplay && autoplayButton) {
          hideElement(autoplayButton);
        }
        if (!nav && navContainer) {
          hideElement(navContainer);
        }
        if (!controls) {
          if (controlsContainer) {
            hideElement(controlsContainer);
          } else {
            if (prevButton) {
              hideElement(prevButton);
            }
            if (nextButton) {
              hideElement(nextButton);
            }
          }
        }
      }
      function enableUI() {
        if (autoplay && autoplayButton) {
          showElement(autoplayButton);
        }
        if (nav && navContainer) {
          showElement(navContainer);
        }
        if (controls) {
          if (controlsContainer) {
            showElement(controlsContainer);
          } else {
            if (prevButton) {
              showElement(prevButton);
            }
            if (nextButton) {
              showElement(nextButton);
            }
          }
        }
      }
      function freezeSlider() {
        if (frozen) {
          return;
        }
        if (edgePadding) {
          innerWrapper.style.margin = "0px";
        }
        if (cloneCount) {
          var str = "tns-transparent";
          for (var i2 = cloneCount; i2--; ) {
            if (carousel) {
              addClass(slideItems[i2], str);
            }
            addClass(slideItems[slideCountNew - i2 - 1], str);
          }
        }
        disableUI();
        frozen = true;
      }
      function unfreezeSlider() {
        if (!frozen) {
          return;
        }
        if (edgePadding && CSSMQ) {
          innerWrapper.style.margin = "";
        }
        if (cloneCount) {
          var str = "tns-transparent";
          for (var i2 = cloneCount; i2--; ) {
            if (carousel) {
              removeClass(slideItems[i2], str);
            }
            removeClass(slideItems[slideCountNew - i2 - 1], str);
          }
        }
        enableUI();
        frozen = false;
      }
      function disableSlider() {
        if (disabled) {
          return;
        }
        sheet.disabled = true;
        container.className = container.className.replace(newContainerClasses.substring(1), "");
        removeAttrs(container, ["style"]);
        if (loop) {
          for (var j = cloneCount; j--; ) {
            if (carousel) {
              hideElement(slideItems[j]);
            }
            hideElement(slideItems[slideCountNew - j - 1]);
          }
        }
        if (!horizontal || !carousel) {
          removeAttrs(innerWrapper, ["style"]);
        }
        if (!carousel) {
          for (var i2 = index, l = index + slideCount; i2 < l; i2++) {
            var item = slideItems[i2];
            removeAttrs(item, ["style"]);
            removeClass(item, animateIn);
            removeClass(item, animateNormal);
          }
        }
        disableUI();
        disabled = true;
      }
      function enableSlider() {
        if (!disabled) {
          return;
        }
        sheet.disabled = false;
        container.className += newContainerClasses;
        doContainerTransformSilent();
        if (loop) {
          for (var j = cloneCount; j--; ) {
            if (carousel) {
              showElement(slideItems[j]);
            }
            showElement(slideItems[slideCountNew - j - 1]);
          }
        }
        if (!carousel) {
          for (var i2 = index, l = index + slideCount; i2 < l; i2++) {
            var item = slideItems[i2], classN = i2 < index + items2 ? animateIn : animateNormal;
            item.style.left = (i2 - index) * 100 / items2 + "%";
            addClass(item, classN);
          }
        }
        enableUI();
        disabled = false;
      }
      function updateLiveRegion() {
        var str = getLiveRegionStr();
        if (liveregionCurrent.innerHTML !== str) {
          liveregionCurrent.innerHTML = str;
        }
      }
      function getLiveRegionStr() {
        var arr = getVisibleSlideRange(), start = arr[0] + 1, end = arr[1] + 1;
        return start === end ? start + "" : start + " to " + end;
      }
      function getVisibleSlideRange(val2) {
        if (val2 == null) {
          val2 = getContainerTransformValue();
        }
        var start = index, end, rangestart, rangeend;
        if (center || edgePadding) {
          if (autoWidth || fixedWidth) {
            rangestart = -(parseFloat(val2) + edgePadding);
            rangeend = rangestart + viewport + edgePadding * 2;
          }
        } else {
          if (autoWidth) {
            rangestart = slidePositions[index];
            rangeend = rangestart + viewport;
          }
        }
        if (autoWidth) {
          slidePositions.forEach(function(point, i2) {
            if (i2 < slideCountNew) {
              if ((center || edgePadding) && point <= rangestart + 0.5) {
                start = i2;
              }
              if (rangeend - point >= 0.5) {
                end = i2;
              }
            }
          });
        } else {
          if (fixedWidth) {
            var cell = fixedWidth + gutter;
            if (center || edgePadding) {
              start = Math.floor(rangestart / cell);
              end = Math.ceil(rangeend / cell - 1);
            } else {
              end = start + Math.ceil(viewport / cell) - 1;
            }
          } else {
            if (center || edgePadding) {
              var a = items2 - 1;
              if (center) {
                start -= a / 2;
                end = index + a / 2;
              } else {
                end = index + a;
              }
              if (edgePadding) {
                var b = edgePadding * items2 / viewport;
                start -= b;
                end += b;
              }
              start = Math.floor(start);
              end = Math.ceil(end);
            } else {
              end = start + items2 - 1;
            }
          }
          start = Math.max(start, 0);
          end = Math.min(end, slideCountNew - 1);
        }
        return [start, end];
      }
      function doLazyLoad() {
        if (lazyload && !disable) {
          var arg = getVisibleSlideRange();
          arg.push(lazyloadSelector);
          getImageArray.apply(null, arg).forEach(function(img) {
            if (!hasClass(img, imgCompleteClass)) {
              var eve = {};
              eve[TRANSITIONEND] = function(e) {
                e.stopPropagation();
              };
              addEvents(img, eve);
              addEvents(img, imgEvents);
              img.src = getAttr(img, "data-src");
              var srcset = getAttr(img, "data-srcset");
              if (srcset) {
                img.srcset = srcset;
              }
              addClass(img, "loading");
            }
          });
        }
      }
      function onImgLoaded(e) {
        imgLoaded(getTarget(e));
      }
      function onImgFailed(e) {
        imgFailed(getTarget(e));
      }
      function imgLoaded(img) {
        addClass(img, "loaded");
        imgCompleted(img);
      }
      function imgFailed(img) {
        addClass(img, "failed");
        imgCompleted(img);
      }
      function imgCompleted(img) {
        addClass(img, imgCompleteClass);
        removeClass(img, "loading");
        removeEvents(img, imgEvents);
      }
      function getImageArray(start, end, imgSelector) {
        var imgs = [];
        if (!imgSelector) {
          imgSelector = "img";
        }
        while (start <= end) {
          forEach(slideItems[start].querySelectorAll(imgSelector), function(img) {
            imgs.push(img);
          });
          start++;
        }
        return imgs;
      }
      function doAutoHeight() {
        var imgs = getImageArray.apply(null, getVisibleSlideRange());
        raf(function() {
          imgsLoadedCheck(imgs, updateInnerWrapperHeight);
        });
      }
      function imgsLoadedCheck(imgs, cb) {
        if (imgsComplete) {
          return cb();
        }
        imgs.forEach(function(img, index2) {
          if (!lazyload && img.complete) {
            imgCompleted(img);
          }
          if (hasClass(img, imgCompleteClass)) {
            imgs.splice(index2, 1);
          }
        });
        if (!imgs.length) {
          return cb();
        }
        raf(function() {
          imgsLoadedCheck(imgs, cb);
        });
      }
      function additionalUpdates() {
        doLazyLoad();
        updateSlideStatus();
        updateLiveRegion();
        updateControlsStatus();
        updateNavStatus();
      }
      function update_carousel_transition_duration() {
        if (carousel && autoHeight) {
          middleWrapper.style[TRANSITIONDURATION] = speed / 1e3 + "s";
        }
      }
      function getMaxSlideHeight(slideStart, slideRange) {
        var heights = [];
        for (var i2 = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i2 < l; i2++) {
          heights.push(slideItems[i2].offsetHeight);
        }
        return Math.max.apply(null, heights);
      }
      function updateInnerWrapperHeight() {
        var maxHeight = autoHeight ? getMaxSlideHeight(index, items2) : getMaxSlideHeight(cloneCount, slideCount), wp = middleWrapper ? middleWrapper : innerWrapper;
        if (wp.style.height !== maxHeight) {
          wp.style.height = maxHeight + "px";
        }
      }
      function setSlidePositions() {
        slidePositions = [0];
        var attr = horizontal ? "left" : "top", attr2 = horizontal ? "right" : "bottom", base = slideItems[0].getBoundingClientRect()[attr];
        forEach(slideItems, function(item, i2) {
          if (i2) {
            slidePositions.push(item.getBoundingClientRect()[attr] - base);
          }
          if (i2 === slideCountNew - 1) {
            slidePositions.push(item.getBoundingClientRect()[attr2] - base);
          }
        });
      }
      function updateSlideStatus() {
        var range = getVisibleSlideRange(), start = range[0], end = range[1];
        forEach(slideItems, function(item, i2) {
          if (i2 >= start && i2 <= end) {
            if (hasAttr(item, "aria-hidden")) {
              removeAttrs(item, ["aria-hidden", "tabindex"]);
              addClass(item, slideActiveClass);
            }
          } else {
            if (!hasAttr(item, "aria-hidden")) {
              setAttrs(item, {
                "aria-hidden": "true",
                "tabindex": "-1"
              });
              removeClass(item, slideActiveClass);
            }
          }
        });
      }
      function updateGallerySlidePositions() {
        var l = index + Math.min(slideCount, items2);
        for (var i2 = slideCountNew; i2--; ) {
          var item = slideItems[i2];
          if (i2 >= index && i2 < l) {
            addClass(item, "tns-moving");
            item.style.left = (i2 - index) * 100 / items2 + "%";
            addClass(item, animateIn);
            removeClass(item, animateNormal);
          } else if (item.style.left) {
            item.style.left = "";
            addClass(item, animateNormal);
            removeClass(item, animateIn);
          }
          removeClass(item, animateOut);
        }
        setTimeout(function() {
          forEach(slideItems, function(el) {
            removeClass(el, "tns-moving");
          });
        }, 300);
      }
      function updateNavStatus() {
        if (nav) {
          navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
          navClicked = -1;
          if (navCurrentIndex !== navCurrentIndexCached) {
            var navPrev = navItems[navCurrentIndexCached], navCurrent = navItems[navCurrentIndex];
            setAttrs(navPrev, {
              "tabindex": "-1",
              "aria-label": navStr + (navCurrentIndexCached + 1)
            });
            removeClass(navPrev, navActiveClass);
            setAttrs(navCurrent, { "aria-label": navStr + (navCurrentIndex + 1) + navStrCurrent });
            removeAttrs(navCurrent, "tabindex");
            addClass(navCurrent, navActiveClass);
            navCurrentIndexCached = navCurrentIndex;
          }
        }
      }
      function getLowerCaseNodeName(el) {
        return el.nodeName.toLowerCase();
      }
      function isButton(el) {
        return getLowerCaseNodeName(el) === "button";
      }
      function isAriaDisabled(el) {
        return el.getAttribute("aria-disabled") === "true";
      }
      function disEnableElement(isButton2, el, val2) {
        if (isButton2) {
          el.disabled = val2;
        } else {
          el.setAttribute("aria-disabled", val2.toString());
        }
      }
      function updateControlsStatus() {
        if (!controls || rewind || loop) {
          return;
        }
        var prevDisabled = prevIsButton ? prevButton.disabled : isAriaDisabled(prevButton), nextDisabled = nextIsButton ? nextButton.disabled : isAriaDisabled(nextButton), disablePrev = index <= indexMin ? true : false, disableNext = !rewind && index >= indexMax ? true : false;
        if (disablePrev && !prevDisabled) {
          disEnableElement(prevIsButton, prevButton, true);
        }
        if (!disablePrev && prevDisabled) {
          disEnableElement(prevIsButton, prevButton, false);
        }
        if (disableNext && !nextDisabled) {
          disEnableElement(nextIsButton, nextButton, true);
        }
        if (!disableNext && nextDisabled) {
          disEnableElement(nextIsButton, nextButton, false);
        }
      }
      function resetDuration(el, str) {
        if (TRANSITIONDURATION) {
          el.style[TRANSITIONDURATION] = str;
        }
      }
      function getSliderWidth() {
        return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
      }
      function getCenterGap(num) {
        if (num == null) {
          num = index;
        }
        var gap = edgePadding ? gutter : 0;
        return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items2 - 1) / 2;
      }
      function getRightBoundary() {
        var gap = edgePadding ? gutter : 0, result = viewport + gap - getSliderWidth();
        if (center && !loop) {
          result = fixedWidth ? -(fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() : getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
        }
        if (result > 0) {
          result = 0;
        }
        return result;
      }
      function getContainerTransformValue(num) {
        if (num == null) {
          num = index;
        }
        var val2;
        if (horizontal && !autoWidth) {
          if (fixedWidth) {
            val2 = -(fixedWidth + gutter) * num;
            if (center) {
              val2 += getCenterGap();
            }
          } else {
            var denominator = TRANSFORM ? slideCountNew : items2;
            if (center) {
              num -= getCenterGap();
            }
            val2 = -num * 100 / denominator;
          }
        } else {
          val2 = -slidePositions[num];
          if (center && autoWidth) {
            val2 += getCenterGap();
          }
        }
        if (hasRightDeadZone) {
          val2 = Math.max(val2, rightBoundary);
        }
        val2 += horizontal && !autoWidth && !fixedWidth ? "%" : "px";
        return val2;
      }
      function doContainerTransformSilent(val2) {
        resetDuration(container, "0s");
        doContainerTransform(val2);
      }
      function doContainerTransform(val2) {
        if (val2 == null) {
          val2 = getContainerTransformValue();
        }
        container.style[transformAttr] = transformPrefix + val2 + transformPostfix;
      }
      function animateSlide(number, classOut, classIn, isOut) {
        var l = number + items2;
        if (!loop) {
          l = Math.min(l, slideCountNew);
        }
        for (var i2 = number; i2 < l; i2++) {
          var item = slideItems[i2];
          if (!isOut) {
            item.style.left = (i2 - index) * 100 / items2 + "%";
          }
          if (animateDelay && TRANSITIONDELAY) {
            item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i2 - number) / 1e3 + "s";
          }
          removeClass(item, classOut);
          addClass(item, classIn);
          if (isOut) {
            slideItemsOut.push(item);
          }
        }
      }
      var transformCore = function() {
        return carousel ? function() {
          resetDuration(container, "");
          if (TRANSITIONDURATION || !speed) {
            doContainerTransform();
            if (!speed || !isVisible(container)) {
              onTransitionEnd();
            }
          } else {
            jsTransform(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
          }
          if (!horizontal) {
            updateContentWrapperHeight();
          }
        } : function() {
          slideItemsOut = [];
          var eve = {};
          eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
          removeEvents(slideItems[indexCached], eve);
          addEvents(slideItems[index], eve);
          animateSlide(indexCached, animateIn, animateOut, true);
          animateSlide(index, animateNormal, animateIn);
          if (!TRANSITIONEND || !ANIMATIONEND || !speed || !isVisible(container)) {
            onTransitionEnd();
          }
        };
      }();
      function render(e, sliderMoved) {
        if (updateIndexBeforeTransform) {
          updateIndex();
        }
        if (index !== indexCached || sliderMoved) {
          events.emit("indexChanged", info());
          events.emit("transitionStart", info());
          if (autoHeight) {
            doAutoHeight();
          }
          if (animating && e && ["click", "keydown"].indexOf(e.type) >= 0) {
            stopAutoplay();
          }
          running = true;
          transformCore();
        }
      }
      function strTrans(str) {
        return str.toLowerCase().replace(/-/g, "");
      }
      function onTransitionEnd(event) {
        if (carousel || running) {
          events.emit("transitionEnd", info(event));
          if (!carousel && slideItemsOut.length > 0) {
            for (var i2 = 0; i2 < slideItemsOut.length; i2++) {
              var item = slideItemsOut[i2];
              item.style.left = "";
              if (ANIMATIONDELAY && TRANSITIONDELAY) {
                item.style[ANIMATIONDELAY] = "";
                item.style[TRANSITIONDELAY] = "";
              }
              removeClass(item, animateOut);
              addClass(item, animateNormal);
            }
          }
          if (!event || !carousel && event.target.parentNode === container || event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {
            if (!updateIndexBeforeTransform) {
              var indexTem = index;
              updateIndex();
              if (index !== indexTem) {
                events.emit("indexChanged", info());
                doContainerTransformSilent();
              }
            }
            if (nested === "inner") {
              events.emit("innerLoaded", info());
            }
            running = false;
            indexCached = index;
          }
        }
      }
      function goTo(targetIndex, e) {
        if (freeze) {
          return;
        }
        if (targetIndex === "prev") {
          onControlsClick(e, -1);
        } else if (targetIndex === "next") {
          onControlsClick(e, 1);
        } else {
          if (running) {
            if (preventActionWhenRunning) {
              return;
            } else {
              onTransitionEnd();
            }
          }
          var absIndex = getAbsIndex(), indexGap = 0;
          if (targetIndex === "first") {
            indexGap = -absIndex;
          } else if (targetIndex === "last") {
            indexGap = carousel ? slideCount - items2 - absIndex : slideCount - 1 - absIndex;
          } else {
            if (typeof targetIndex !== "number") {
              targetIndex = parseInt(targetIndex);
            }
            if (!isNaN(targetIndex)) {
              if (!e) {
                targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex));
              }
              indexGap = targetIndex - absIndex;
            }
          }
          if (!carousel && indexGap && Math.abs(indexGap) < items2) {
            var factor = indexGap > 0 ? 1 : -1;
            indexGap += index + indexGap - slideCount >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
          }
          index += indexGap;
          if (carousel && loop) {
            if (index < indexMin) {
              index += slideCount;
            }
            if (index > indexMax) {
              index -= slideCount;
            }
          }
          if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
            render(e);
          }
        }
      }
      function onControlsClick(e, dir) {
        if (running) {
          if (preventActionWhenRunning) {
            return;
          } else {
            onTransitionEnd();
          }
        }
        var passEventObject;
        if (!dir) {
          e = getEvent(e);
          var target = getTarget(e);
          while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) {
            target = target.parentNode;
          }
          var targetIn = [prevButton, nextButton].indexOf(target);
          if (targetIn >= 0) {
            passEventObject = true;
            dir = targetIn === 0 ? -1 : 1;
          }
        }
        if (rewind) {
          if (index === indexMin && dir === -1) {
            goTo("last", e);
            return;
          } else if (index === indexMax && dir === 1) {
            goTo("first", e);
            return;
          }
        }
        if (dir) {
          index += slideBy * dir;
          if (autoWidth) {
            index = Math.floor(index);
          }
          render(passEventObject || e && e.type === "keydown" ? e : null);
        }
      }
      function onNavClick(e) {
        if (running) {
          if (preventActionWhenRunning) {
            return;
          } else {
            onTransitionEnd();
          }
        }
        e = getEvent(e);
        var target = getTarget(e), navIndex;
        while (target !== navContainer && !hasAttr(target, "data-nav")) {
          target = target.parentNode;
        }
        if (hasAttr(target, "data-nav")) {
          var navIndex = navClicked = Number(getAttr(target, "data-nav")), targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items2, targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
          goTo(targetIndex, e);
          if (navCurrentIndex === navIndex) {
            if (animating) {
              stopAutoplay();
            }
            navClicked = -1;
          }
        }
      }
      function setAutoplayTimer() {
        autoplayTimer = setInterval(function() {
          onControlsClick(null, autoplayDirection);
        }, autoplayTimeout);
        animating = true;
      }
      function stopAutoplayTimer() {
        clearInterval(autoplayTimer);
        animating = false;
      }
      function updateAutoplayButton(action, txt) {
        setAttrs(autoplayButton, { "data-action": action });
        autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
      }
      function startAutoplay() {
        setAutoplayTimer();
        if (autoplayButton) {
          updateAutoplayButton("stop", autoplayText[1]);
        }
      }
      function stopAutoplay() {
        stopAutoplayTimer();
        if (autoplayButton) {
          updateAutoplayButton("start", autoplayText[0]);
        }
      }
      function play() {
        if (autoplay && !animating) {
          startAutoplay();
          autoplayUserPaused = false;
        }
      }
      function pause() {
        if (animating) {
          stopAutoplay();
          autoplayUserPaused = true;
        }
      }
      function toggleAutoplay() {
        if (animating) {
          stopAutoplay();
          autoplayUserPaused = true;
        } else {
          startAutoplay();
          autoplayUserPaused = false;
        }
      }
      function onVisibilityChange() {
        if (doc.hidden) {
          if (animating) {
            stopAutoplayTimer();
            autoplayVisibilityPaused = true;
          }
        } else if (autoplayVisibilityPaused) {
          setAutoplayTimer();
          autoplayVisibilityPaused = false;
        }
      }
      function mouseoverPause() {
        if (animating) {
          stopAutoplayTimer();
          autoplayHoverPaused = true;
        }
      }
      function mouseoutRestart() {
        if (autoplayHoverPaused) {
          setAutoplayTimer();
          autoplayHoverPaused = false;
        }
      }
      function onDocumentKeydown(e) {
        e = getEvent(e);
        var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
        if (keyIndex >= 0) {
          onControlsClick(e, keyIndex === 0 ? -1 : 1);
        }
      }
      function onControlsKeydown(e) {
        e = getEvent(e);
        var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);
        if (keyIndex >= 0) {
          if (keyIndex === 0) {
            if (!prevButton.disabled) {
              onControlsClick(e, -1);
            }
          } else if (!nextButton.disabled) {
            onControlsClick(e, 1);
          }
        }
      }
      function setFocus(el) {
        el.focus();
      }
      function onNavKeydown(e) {
        e = getEvent(e);
        var curElement = doc.activeElement;
        if (!hasAttr(curElement, "data-nav")) {
          return;
        }
        var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode), navIndex = Number(getAttr(curElement, "data-nav"));
        if (keyIndex >= 0) {
          if (keyIndex === 0) {
            if (navIndex > 0) {
              setFocus(navItems[navIndex - 1]);
            }
          } else if (keyIndex === 1) {
            if (navIndex < pages - 1) {
              setFocus(navItems[navIndex + 1]);
            }
          } else {
            navClicked = navIndex;
            goTo(navIndex, e);
          }
        }
      }
      function getEvent(e) {
        e = e || win3.event;
        return isTouchEvent(e) ? e.changedTouches[0] : e;
      }
      function getTarget(e) {
        return e.target || win3.event.srcElement;
      }
      function isTouchEvent(e) {
        return e.type.indexOf("touch") >= 0;
      }
      function preventDefaultBehavior(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
      }
      function getMoveDirectionExpected() {
        return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
      }
      function onPanStart(e) {
        if (running) {
          if (preventActionWhenRunning) {
            return;
          } else {
            onTransitionEnd();
          }
        }
        if (autoplay && animating) {
          stopAutoplayTimer();
        }
        panStart = true;
        if (rafIndex) {
          caf(rafIndex);
          rafIndex = null;
        }
        var $ = getEvent(e);
        events.emit(isTouchEvent(e) ? "touchStart" : "dragStart", info(e));
        if (!isTouchEvent(e) && ["img", "a"].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
          preventDefaultBehavior(e);
        }
        lastPosition.x = initPosition.x = $.clientX;
        lastPosition.y = initPosition.y = $.clientY;
        if (carousel) {
          translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ""));
          resetDuration(container, "0s");
        }
      }
      function onPanMove(e) {
        if (panStart) {
          var $ = getEvent(e);
          lastPosition.x = $.clientX;
          lastPosition.y = $.clientY;
          if (carousel) {
            if (!rafIndex) {
              rafIndex = raf(function() {
                panUpdate(e);
              });
            }
          } else {
            if (moveDirectionExpected === "?") {
              moveDirectionExpected = getMoveDirectionExpected();
            }
            if (moveDirectionExpected) {
              preventScroll = true;
            }
          }
          if ((typeof e.cancelable !== "boolean" || e.cancelable) && preventScroll) {
            e.preventDefault();
          }
        }
      }
      function panUpdate(e) {
        if (!moveDirectionExpected) {
          panStart = false;
          return;
        }
        caf(rafIndex);
        if (panStart) {
          rafIndex = raf(function() {
            panUpdate(e);
          });
        }
        if (moveDirectionExpected === "?") {
          moveDirectionExpected = getMoveDirectionExpected();
        }
        if (moveDirectionExpected) {
          if (!preventScroll && isTouchEvent(e)) {
            preventScroll = true;
          }
          try {
            if (e.type) {
              events.emit(isTouchEvent(e) ? "touchMove" : "dragMove", info(e));
            }
          } catch (err) {
          }
          var x = translateInit, dist = getDist(lastPosition, initPosition);
          if (!horizontal || fixedWidth || autoWidth) {
            x += dist;
            x += "px";
          } else {
            var percentageX = TRANSFORM ? dist * items2 * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
            x += percentageX;
            x += "%";
          }
          container.style[transformAttr] = transformPrefix + x + transformPostfix;
        }
      }
      function onPanEnd(e) {
        if (panStart) {
          if (rafIndex) {
            caf(rafIndex);
            rafIndex = null;
          }
          if (carousel) {
            resetDuration(container, "");
          }
          panStart = false;
          var $ = getEvent(e);
          lastPosition.x = $.clientX;
          lastPosition.y = $.clientY;
          var dist = getDist(lastPosition, initPosition);
          if (Math.abs(dist)) {
            if (!isTouchEvent(e)) {
              var target = getTarget(e);
              addEvents(target, { "click": function preventClick(e2) {
                preventDefaultBehavior(e2);
                removeEvents(target, { "click": preventClick });
              } });
            }
            if (carousel) {
              rafIndex = raf(function() {
                if (horizontal && !autoWidth) {
                  var indexMoved = -dist * items2 / (viewport + gutter);
                  indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
                  index += indexMoved;
                } else {
                  var moved = -(translateInit + dist);
                  if (moved <= 0) {
                    index = indexMin;
                  } else if (moved >= slidePositions[slideCountNew - 1]) {
                    index = indexMax;
                  } else {
                    var i2 = 0;
                    while (i2 < slideCountNew && moved >= slidePositions[i2]) {
                      index = i2;
                      if (moved > slidePositions[i2] && dist < 0) {
                        index += 1;
                      }
                      i2++;
                    }
                  }
                }
                render(e, dist);
                events.emit(isTouchEvent(e) ? "touchEnd" : "dragEnd", info(e));
              });
            } else {
              if (moveDirectionExpected) {
                onControlsClick(e, dist > 0 ? -1 : 1);
              }
            }
          }
        }
        if (options.preventScrollOnTouch === "auto") {
          preventScroll = false;
        }
        if (swipeAngle) {
          moveDirectionExpected = "?";
        }
        if (autoplay && !animating) {
          setAutoplayTimer();
        }
      }
      function updateContentWrapperHeight() {
        var wp = middleWrapper ? middleWrapper : innerWrapper;
        wp.style.height = slidePositions[index + items2] - slidePositions[index] + "px";
      }
      function getPages() {
        var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items2;
        return Math.min(Math.ceil(rough), slideCount);
      }
      function updateNavVisibility() {
        if (!nav || navAsThumbnails) {
          return;
        }
        if (pages !== pagesCached) {
          var min = pagesCached, max = pages, fn = showElement;
          if (pagesCached > pages) {
            min = pages;
            max = pagesCached;
            fn = hideElement;
          }
          while (min < max) {
            fn(navItems[min]);
            min++;
          }
          pagesCached = pages;
        }
      }
      function info(e) {
        return {
          container,
          slideItems,
          navContainer,
          navItems,
          controlsContainer,
          hasControls,
          prevButton,
          nextButton,
          items: items2,
          slideBy,
          cloneCount,
          slideCount,
          slideCountNew,
          index,
          indexCached,
          displayIndex: getCurrentSlide(),
          navCurrentIndex,
          navCurrentIndexCached,
          pages,
          pagesCached,
          sheet,
          isOn,
          event: e || {}
        };
      }
      return {
        version: "2.9.4",
        getInfo: info,
        events,
        goTo,
        play,
        pause,
        isOn,
        updateSliderHeight: updateInnerWrapperHeight,
        refresh: initSliderTransform,
        destroy,
        rebuild: function() {
          return tns(extend(options, optionsElements));
        }
      };
    };
  }
});

// slider.js
var slider_exports = {};
function nextSlide() {
  slider.goTo("next");
  slider.events.on("transitionEnd", playMainSlide);
}
function prevSlide() {
  slider.goTo("prev");
  slider.events.on("transitionEnd", playMainSlide);
}
function playMainSlide() {
  document.querySelector(".active-slide1 video").play();
}
function pauseMainSlide() {
  document.querySelector(".active-slide1 video").pause();
}
function updateSlides() {
  if (activeSlides.length) {
    activeSlides.forEach((slide) => {
      slide.removeEventListener("click", prevSlide);
      slide.removeEventListener("click", nextSlide);
      slide.classList.remove("active-slide0");
      slide.classList.remove("active-slide1");
      slide.classList.remove("active-slide2");
      slide.querySelector("video").pause();
    });
  }
  activeSlides = [...document.querySelectorAll("#tiny-slider .tns-slide-active")];
  activeSlides[0].classList.add("active-slide0");
  activeSlides[1].classList.add("active-slide1");
  activeSlides[2].classList.add("active-slide2");
  activeSlides[0].addEventListener("click", prevSlide);
  activeSlides[2].addEventListener("click", nextSlide);
}
function sliderInit() {
  updateSlides();
}
var import_gsap6, activeSlides, slider;
var init_slider = __esm({
  "slider.js"() {
    init_tiny_slider();
    init_tiny_slider2();
    import_gsap6 = __toESM(require_gsap());
    init_ScrollTrigger();
    init_gsap_hero();
    init_smoother();
    import_gsap6.gsap.registerPlugin(ScrollTrigger2);
    activeSlides = [];
    if (document.querySelector("#tiny-slider")) {
      try {
        slider = tns({
          container: "#tiny-slider",
          items: 3,
          slideBy: 1,
          speed: 500,
          swipeAngle: 30,
          preventActionWhenRunning: true,
          preventScrollOnTouch: "auto",
          onInit: sliderInit,
          controls: false,
          nav: false,
          responsive: {
            1280: {}
          }
        });
      } catch (error) {
        console.error(error);
      }
      try {
        slider.events.on("indexChanged", updateSlides);
      } catch (error) {
        console.error(error);
      }
    }
    ScrollTrigger2.create({
      trigger: "#magnify-stories",
      start: "top 150%",
      once: true,
      onEnter: () => {
        console.log("loading");
        preloadVideo();
      }
    });
    mm = import_gsap6.gsap.matchMedia();
    mm.add(
      "(pointer:fine)",
      () => {
        let prevProgress = 0;
        let length = slider.getInfo().slideCount;
        let start, smoothStart, prevDirection;
        ScrollTrigger2.create({
          trigger: "#magnify-stories",
          start: "top top",
          pin: true,
          end: (self2) => "+=" + self2.trigger.offsetHeight * length * 0.5,
          onEnter: (self2) => {
            start = smoother.scrollTop();
            smoothStart = smoother.smooth();
            console.debug("Start:" + start);
          },
          onToggle: (self2) => {
            if (self2.isActive) {
              playMainSlide();
            } else {
              pauseMainSlide();
            }
          },
          onUpdate: (self2) => {
            let delta = Math.abs(self2.progress - prevProgress);
            if (delta > 1 / (length / 0.5)) {
              console.debug("Scroll:" + self2.scroll());
              if (self2.direction === 1 && prevDirection === 1) {
                nextSlide();
              }
              prevProgress = self2.progress;
              prevDirection = self2.direction;
            }
          },
          onEnterBack: (self2) => {
            console.debug("Scrolling to:" + start);
            smoother.scrollTop(start);
            setTimeout(() => {
              self2.kill();
            }, 1e3);
          }
        });
      }
    );
    mm.add(
      "(pointer:coarse)",
      () => {
        let prevProgress = 0;
        let length = slider.getInfo().slideCount;
        let start;
        ScrollTrigger2.create({
          trigger: "#magnify-stories",
          start: "top top",
          pin: true,
          normalizeScroll: true,
          end: (self2) => "+=" + self2.trigger.offsetHeight,
          onEnter: (self2) => {
            start = smoother.scrollTop();
            console.debug("Start:" + start);
          },
          onToggle: (self2) => {
            if (self2.isActive) {
              playMainSlide();
            } else {
              pauseMainSlide();
            }
          },
          onEnterBack: (self2) => {
            console.debug("Scrolling to:" + start);
            smoother.scrollTop(start);
            self2.kill();
          }
        });
      }
    );
  }
});

// animations.js
var import_gsap = __toESM(require_gsap());
init_ScrollTrigger();
import_gsap.gsap.registerPlugin(ScrollTrigger2);
var elements = import_gsap.gsap.utils.toArray("[gsap]");
import_gsap.gsap.set("[gsap]", { opacity: 0 });
ScrollTrigger2.batch("[gsap]", {
  // interval: 0.1, // time window (in seconds) for batching to occur. 
  // batchMax: 3,   // maximum batch size (targets)
  start: "top 66%",
  onEnter: (batch) => {
    import_gsap.gsap.to(batch, { duration: 0.3, opacity: 1, stagger: 0.2, ease: "power1.out" });
  }
  // also onLeave, onEnterBack, and onLeaveBack
  // also most normal ScrollTrigger values like start, end, etc.
});

// gsap-header.js
var import_gsap2 = __toESM(require_gsap());
init_ScrollTrigger();
import_gsap2.gsap.registerPlugin(ScrollTrigger2);
var sections = import_gsap2.gsap.utils.toArray("section");
var header = document.querySelector("[data-header]");
console.log(sections[0].dataset.section);
header.setAttribute("data-theme", sections[0].dataset.section);
var height = header.offsetHeight;
sections.forEach((section3) => {
  ScrollTrigger2.create({
    trigger: section3,
    start: () => "top +=" + height / 2 + "px",
    onUpdate: () => {
      let theme = section3.dataset.section;
      header.setAttribute("data-theme", theme);
    }
  });
});
var targetNode = document.getElementById("main-nav");
var config = { attributes: true };
var navOpen = false;
var callback = (mutationList, mutationObserver2) => {
  for (const mutation of mutationList) {
    if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
      if (mutation.attributeName === "data-nav-menu-open" && !navOpen) {
        console.log("open");
        navOpen = true;
        header.classList.add("nav-open");
      } else if (mutation.attributeName === "data-nav-menu-open" && navOpen) {
        console.log("closed");
        navOpen = false;
        header.classList.remove("nav-open");
      }
    }
  }
};
var mutationObserver = new MutationObserver(callback);
mutationObserver.observe(targetNode, config);

// index.js
init_our_process();
init_smoother();
var import_gsap7 = __toESM(require_gsap());
var hero;
var header2;
try {
  hero = document.getElementById("gsap-hero");
  header2 = document.querySelector(".header_container");
} catch (error) {
  console.error(error);
} finally {
  if (hero) {
    console.debug("loading gsap-hero.js...");
    Promise.resolve().then(() => (init_gsap_hero(), gsap_hero_exports)).then(() => {
      console.debug("gsap-hero.js loaded");
    });
  } else {
    import_gsap7.gsap.to(header2, { duration: 0, opacity: 1, ease: "none" });
  }
}
var slider2;
try {
  slider2 = document.getElementById("tiny-slider");
} catch (error) {
  console.error(error);
} finally {
  if (slider2) {
    console.debug("loading slider.js...");
    Promise.resolve().then(() => (init_slider(), slider_exports)).then(() => {
      console.debug("slider.js loaded");
    });
  }
}
var section2;
try {
  section2 = document.getElementById("process-section");
} catch (error) {
  console.error(error);
} finally {
  if (slider2) {
    console.debug("loading our-process.js...");
    Promise.resolve().then(() => (init_our_process(), our_process_exports)).then(() => {
      console.debug("our-process.js loaded");
    });
  }
}
/*! Bundled license information:

gsap/dist/gsap.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollSmoother.js:
  (*!
   * ScrollSmoother 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/strings.js:
  (*!
   * strings: 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText: 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
