var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
      }, _defaults = {
        duration: 0.5,
        overwrite: false,
        delay: 0
      }, _suppressOverwrites, _reverting, _context2, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString2(value) {
        return typeof value === "string";
      }, _isFunction = function _isFunction2(value) {
        return typeof value === "function";
      }, _isNumber = function _isNumber2(value) {
        return typeof value === "number";
      }, _isUndefined = function _isUndefined2(value) {
        return typeof value === "undefined";
      }, _isObject = function _isObject2(value) {
        return typeof value === "object";
      }, _isNotFalse = function _isNotFalse2(value) {
        return value !== false;
      }, _windowExists = function _windowExists2() {
        return typeof window !== "undefined";
      }, _isFuncOrString = function _isFuncOrString2(value) {
        return _isFunction(value) || _isString(value);
      }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
      }, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win2, _coreInitted2, _doc2, _globals = {}, _installScope = {}, _coreReady, _install = function _install2(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap3;
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
        var target = targets[0], harnessPlugin, i;
        _isObject(target) || _isFunction(target) || (targets = [targets]);
        if (!(harnessPlugin = (target._gsap || {}).harness)) {
          i = _harnessPlugins.length;
          while (i-- && !_harnessPlugins[i].targetTest(target)) {
          }
          harnessPlugin = _harnessPlugins[i];
        }
        i = targets.length;
        while (i--) {
          targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
        }
        return targets;
      }, _getCache = function _getCache2(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
      }, _getProperty = function _getProperty2(target, property, v) {
        return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
      }, _forEachName = function _forEachName2(names, func) {
        return (names = names.split(",")).forEach(func) || names;
      }, _round = function _round2(value) {
        return Math.round(value * 1e5) / 1e5 || 0;
      }, _roundPrecise = function _roundPrecise2(value) {
        return Math.round(value * 1e7) / 1e7 || 0;
      }, _parseRelative = function _parseRelative2(start, value) {
        var operator = value.charAt(0), end = parseFloat(value.substr(2));
        start = parseFloat(start);
        return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
      }, _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
        var l = toFind.length, i = 0;
        for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
        }
        return i < l;
      }, _lazyRender = function _lazyRender2() {
        var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
        _lazyLookup = {};
        _lazyTweens.length = 0;
        for (i = 0; i < l; i++) {
          tween = a[i];
          tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
      }, _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
        _lazyTweens.length && !_reverting && _lazyRender();
        animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
        _lazyTweens.length && !_reverting && _lazyRender();
      }, _numericIfPossible = function _numericIfPossible2(value) {
        var n = parseFloat(value);
        return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
      }, _passThrough = function _passThrough2(p) {
        return p;
      }, _setDefaults = function _setDefaults2(obj, defaults) {
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
          p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
        }
        return base;
      }, _copyExcluding = function _copyExcluding2(obj, excluding) {
        var copy = {}, p;
        for (p in obj) {
          p in excluding || (copy[p] = obj[p]);
        }
        return copy;
      }, _inheritDefaults = function _inheritDefaults2(vars) {
        var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
        if (_isNotFalse(vars.inherit)) {
          while (parent) {
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
          }
        }
        return vars;
      }, _arraysMatch = function _arraysMatch2(a1, a2) {
        var i = a1.length, match = i === a2.length;
        while (match && i-- && a1[i] === a2[i]) {
        }
        return i < 0;
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
          if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
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
        child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
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
          tTime = _clamp(0, tween._tDur, totalTime);
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
          tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
          tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
          if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents && !_reverting) {
              _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
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
      }, _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
        var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
        if (_isString(position) && (isNaN(position) || position in labels)) {
          offset = position.charAt(0);
          isPercent = position.substr(-1) === "%";
          i = position.indexOf("=");
          if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
          }
          if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
          }
          offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
          if (isPercent && percentAnimation) {
            offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
          }
          return i > 1 ? _parsePosition2(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
        }
        return position == null ? clippedDuration : +position;
      }, _createTweenType = function _createTweenType2(type, params, timeline) {
        var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
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
      }, _clamp = function _clamp2(min, max, value) {
        return value < min ? min : value > max ? max : value;
      }, getUnit = function getUnit2(value, v) {
        return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
      }, clamp = function clamp2(min, max, value) {
        return _conditionalReturn(value, function(v) {
          return _clamp(min, max, v);
        });
      }, _slice = [].slice, _isArrayLike = function _isArrayLike2(value, nonEmpty) {
        return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win2;
      }, _flatten = function _flatten2(ar, leaveStrings, accumulator) {
        if (accumulator === void 0) {
          accumulator = [];
        }
        return ar.forEach(function(value) {
          var _accumulator;
          return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
        }) || accumulator;
      }, toArray = function toArray2(value, scope, leaveStrings) {
        return _context2 && !scope && _context2.selector ? _context2.selector(value) : _isString(value) && !leaveStrings && (_coreInitted2 || !_wake()) ? _slice.call((scope || _doc2).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
      }, selector = function selector2(value) {
        value = toArray(value)[0] || _warn("Invalid scope") || {};
        return function(v) {
          var el = value.current || value.nativeElement || value;
          return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc2.createElement("div") : value);
        };
      }, shuffle = function shuffle2(a) {
        return a.sort(function() {
          return 0.5 - Math.random();
        });
      }, distribute = function distribute2(v) {
        if (_isFunction(v)) {
          return v;
        }
        var vars = _isObject(v) ? v : {
          each: v
        }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
        if (_isString(from)) {
          ratioX = ratioY = {
            center: 0.5,
            edges: 0.5,
            end: 1
          }[from] || 0;
        } else if (!isDecimal && ratios) {
          ratioX = from[0];
          ratioY = from[1];
        }
        return function(i, target, a) {
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
          l = (distances[i] - distances.min) / distances.max || 0;
          return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
        };
      }, _roundModifier = function _roundModifier2(v) {
        var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
        return function(raw) {
          var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
          return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
        };
      }, snap = function snap2(snapTo, value) {
        var isArray = _isArray(snapTo), radius, is2D;
        if (!isArray && _isObject(snapTo)) {
          radius = isArray = snapTo.radius || _bigNum;
          if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) {
              radius *= radius;
            }
          } else {
            snapTo = _roundModifier(snapTo.increment);
          }
        }
        return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
          is2D = snapTo(raw);
          return Math.abs(is2D - raw) <= radius ? is2D : raw;
        } : function(raw) {
          var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
          while (i--) {
            if (is2D) {
              dx = snapTo[i].x - x;
              dy = snapTo[i].y - y;
              dx = dx * dx + dy * dy;
            } else {
              dx = Math.abs(snapTo[i] - x);
            }
            if (dx < min) {
              min = dx;
              closest = i;
            }
          }
          closest = !radius || min <= radius ? snapTo[closest] : raw;
          return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
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
        var prev = 0, s = "", i, nums, end, isArray;
        while (~(i = value.indexOf("random(", prev))) {
          end = value.indexOf(")", i);
          isArray = value.charAt(i + 7) === "[";
          nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
          s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
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
          var isString = _isString(start), master = {}, p, i, interpolators, l, il;
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
            for (i = 1; i < l; i++) {
              interpolators.push(interpolate2(start[i - 1], start[i]));
            }
            l--;
            func = function func2(p2) {
              p2 *= l;
              var i2 = Math.min(il, ~~p2);
              return interpolators[i2](p2 - i2);
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
      }, _callback = function _callback2(animation, type, executeLazyFirst) {
        var v = animation.vars, callback2 = v[type], prevContext = _context2, context = animation._ctx, params, scope, result;
        if (!callback2) {
          return;
        }
        params = v[type + "Params"];
        scope = v.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender();
        context && (_context2 = context);
        result = params ? callback2.apply(scope, params) : callback2.call(scope);
        _context2 = prevContext;
        return result;
      }, _interrupt = function _interrupt2(animation) {
        _removeFromParent(animation);
        animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
        animation.progress() < 1 && _callback(animation, "onInterrupt");
        return animation;
      }, _quickTween, _registerPluginQueue = [], _createPlugin = function _createPlugin2(config2) {
        if (!config2)
          return;
        config2 = !config2.name && config2["default"] || config2;
        if (_windowExists() || config2.headless) {
          var name = config2.name, isFunc = _isFunction(config2), Plugin = name && !isFunc && config2.init ? function() {
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
            _setDefaults(Plugin, _setDefaults(_copyExcluding(config2, instanceDefaults), statics));
            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config2, statics)));
            _plugins[Plugin.prop = name] = Plugin;
            if (config2.targetTest) {
              _harnessPlugins.push(Plugin);
              _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
          }
          _addGlobal(name, Plugin);
          config2.register && config2.register(gsap3, Plugin, PropTween);
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
        var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
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
        var values = [], c = [], i = -1;
        v.split(_colorExp).forEach(function(v2) {
          var a = v2.match(_numWithUnitExp) || [];
          values.push.apply(values, a);
          c.push(i += a.length + 1);
        });
        values.c = c;
        return values;
      }, _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
        var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
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
            for (; i < l; i++) {
              result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
          }
        }
        if (!shell) {
          shell = s.split(_colorExp);
          l = shell.length - 1;
          for (; i < l; i++) {
            result += shell[i] + colors[i];
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
        var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners2 = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick2(v) {
          var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
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
            for (_i = 0; _i < _listeners2.length; _i++) {
              _listeners2[_i](time, _delta, frame, v);
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
              if (!_coreInitted2 && _windowExists()) {
                _win2 = _coreInitted2 = window;
                _doc2 = _win2.document || {};
                _globals.gsap = gsap3;
                (_win2.gsapVersions || (_win2.gsapVersions = [])).push(gsap3.version);
                _install(_installScope || _win2.GreenSockGlobals || !_win2.gsap && _win2 || {});
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
            _listeners2[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
          },
          remove: function remove(callback2, i) {
            ~(i = _listeners2.indexOf(callback2)) && _listeners2.splice(i, 1) && _i >= i && _i--;
          },
          _listeners: _listeners2
        };
        return _self;
      }(), _wake = function _wake2() {
        return !_tickerActive && _ticker.wake();
      }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString2(value) {
        var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
        for (; i < l; i++) {
          val = split[i];
          index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
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
        return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
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
      _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
        var power = i < 5 ? i + 1 : i;
        _insertEase(name + ",Power" + (power - 1), i ? function(p) {
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
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
          };
        }
      };
      _defaults.ease = _easeMap["quad.out"];
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
          if (_context2) {
            this._ctx = _context2;
            _context2.data.push(this);
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
          this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
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
          return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
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
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
              var _then = self2.then;
              self2.then = null;
              _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
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
      _setDefaults(Animation.prototype, {
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
          new Tween(targets, vars, _parsePosition(this, position), 1);
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
          new Tween(targets, vars, _parsePosition(this, position));
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
                !suppressEvents && this.parent && _callback(this, "onRepeat");
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
              _callback(this, "onStart");
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
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
              if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                if (!this._lock) {
                  (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                  if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                    _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
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
          _isNumber(position) || (position = _parsePosition(this, position, child));
          if (!(child instanceof Animation)) {
            if (_isArray(child)) {
              child.forEach(function(obj) {
                return _this2.add(obj, position);
              });
              return this;
            }
            if (_isString(child)) {
              return this.addLabel(child, position);
            }
            if (_isFunction(child)) {
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
          var animations = this.getChildren(1, 1, 1), i = animations.length;
          while (i--) {
            if (animations[i].vars.id === id) {
              return animations[i];
            }
          }
        };
        _proto2.remove = function remove(child) {
          if (_isString(child)) {
            return this.removeLabel(child);
          }
          if (_isFunction(child)) {
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
          this.labels[label] = _parsePosition(this, position);
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
          return _addToTimeline(this, t, _parsePosition(this, position));
        };
        _proto2.removePause = function removePause(position) {
          var child = this._first;
          position = _parsePosition(this, position);
          while (child) {
            if (child._start === position && child.data === "isPause") {
              _removeFromParent(child);
            }
            child = child._next;
          }
        };
        _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
          var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
          while (i--) {
            _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
          }
          return this;
        };
        _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
          var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
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
          var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
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
          return this.tweenTo(toPosition, _setDefaults({
            startAt: {
              time: _parsePosition(this, fromPosition)
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
          return _getLabelInDirection(this, _parsePosition(this, afterTime));
        };
        _proto2.previousLabel = function previousLabel(beforeTime) {
          if (beforeTime === void 0) {
            beforeTime = this._time;
          }
          return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
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
      _setDefaults(Timeline.prototype, {
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
        _isFunction(end) && (end = end(index || 0, target, targets));
        var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
        if (_isString(end)) {
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
        _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
        if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
          return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
        }
        var copy = {}, p;
        for (p in vars) {
          copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
        }
        return copy;
      }, _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
        var plugin, pt, ptLookup, i;
        if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
          if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
            i = plugin._props.length;
            while (i--) {
              ptLookup[plugin._props[i]] = pt;
            }
          }
        }
        return plugin;
      }, _overwritingTween, _forceAllPropTweens, _initTween = function _initTween2(tween, time, tTime) {
        var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
        tl && (!keyframes || !ease) && (ease = "none");
        tween._ease = _parseEase(ease, _defaults.ease);
        tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
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
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
              data: "isStart",
              overwrite: false,
              parent,
              immediateRender: true,
              lazy: !prevStartAt && _isNotFalse(lazy),
              startAt: null,
              delay: 0,
              onUpdate: onUpdate && function() {
                return _callback(tween, "onUpdate");
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
              p = _setDefaults({
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
          for (i = 0; i < targets.length; i++) {
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
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
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
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
        var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
        if (!ptCache) {
          ptCache = tween._ptCache[property] = [];
          lookup = tween._ptLookup;
          i = tween._targets.length;
          while (i--) {
            pt = lookup[i][property];
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
        i = ptCache.length;
        while (i--) {
          rootPT = ptCache[i];
          pt = rootPT._pt || rootPT;
          pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
          pt.c = value - pt.s;
          rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
          rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
        }
      }, _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
        var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
        if (!propertyAliases) {
          return vars;
        }
        copy = _merge({}, vars);
        for (p in propertyAliases) {
          if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i = aliases.length;
            while (i--) {
              copy[aliases[i]] = copy[p];
            }
          }
        }
        return copy;
      }, _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
        var ease = obj.ease || easeEach || "power1.inOut", p, a;
        if (_isArray(obj)) {
          a = allProps[prop] || (allProps[prop] = []);
          obj.forEach(function(value, i) {
            return a.push({
              t: i / (obj.length - 1) * 100,
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
      }, _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target, targets) {
        return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
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
          var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
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
              if (_isObject(stagger)) {
                for (p in stagger) {
                  if (~_staggerTweenProps.indexOf(p)) {
                    staggerVarsToMerge || (staggerVarsToMerge = {});
                    staggerVarsToMerge[p] = stagger[p];
                  }
                }
              }
              for (i = 0; i < l; i++) {
                copy = _copyExcluding(vars, _staggerPropsToSkip);
                copy.stagger = 0;
                yoyoEase && (copy.yoyoEase = yoyoEase);
                staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                curTarget = parsedTargets[i];
                copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                if (!stagger && l === 1 && copy.delay) {
                  _this3._delay = delay = copy.delay;
                  _this3._start += delay;
                  copy.delay = 0;
                }
                tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                tl._ease = _easeMap.none;
              }
              tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
            } else if (keyframes) {
              _inheritDefaults(_setDefaults(tl.vars.defaults, {
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
                  for (i = 0; i < a.length; i++) {
                    kf = a[i];
                    v = {
                      ease: kf.e,
                      duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
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
          if (overwrite === true && !_suppressOverwrites) {
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
              _callback(this, "onStart");
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
              _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
              isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
              (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
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
          var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
          if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
          }
          overwrittenProps = this._op = this._op || [];
          if (vars !== "all") {
            if (_isString(vars)) {
              p = {};
              _forEachName(vars, function(name) {
                return p[name] = 1;
              });
              vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
          }
          i = parsedTargets.length;
          while (i--) {
            if (~killingTargets.indexOf(parsedTargets[i])) {
              curLookup = propTweenLookup[i];
              if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
              } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
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
      _setDefaults(Tween.prototype, {
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
        return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
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
        defaults: _defaults,
        autoRemoveChildren: true,
        id: "root",
        smoothChildTiming: true
      });
      _config.stringFilter = _colorStringFilter;
      var _media = [], _listeners = {}, _emptyArray = [], _lastMediaTime = 0, _contextID = 0, _dispatch = function _dispatch2(type) {
        return (_listeners[type] || _emptyArray).map(function(f) {
          return f();
        });
      }, _onMediaChange = function _onMediaChange2() {
        var time = Date.now(), matches = [];
        if (time - _lastMediaTime > 2) {
          _dispatch("matchMediaInit");
          _media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for (p in queries) {
              match = _win2.matchMedia(queries[p]).matches;
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
          _dispatch("matchMediaRevert");
          matches.forEach(function(c) {
            return c.onMatch(c, function(func) {
              return c.add(null, func);
            });
          });
          _lastMediaTime = time;
          _dispatch("matchMedia");
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
          if (_isFunction(name)) {
            scope = func;
            func = name;
            name = _isFunction;
          }
          var self2 = this, f = function f2() {
            var prev = _context2, prevSelector = self2.selector, result;
            prev && prev !== self2 && prev.data.push(self2);
            scope && (self2.selector = selector(scope));
            _context2 = self2;
            result = func.apply(self2, arguments);
            _isFunction(result) && self2._r.push(result);
            _context2 = prev;
            self2.selector = prevSelector;
            self2.isReverted = false;
            return result;
          };
          self2.last = f;
          return name === _isFunction ? f(self2, function(func2) {
            return self2.add(null, func2);
          }) : name ? self2[name] = f : f;
        };
        _proto5.ignore = function ignore(func) {
          var prev = _context2;
          _context2 = null;
          func(this);
          _context2 = prev;
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
              var tweens = _this4.getTweens(), i2 = _this4.data.length, t;
              while (i2--) {
                t = _this4.data[i2];
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
              i2 = _this4.data.length;
              while (i2--) {
                t = _this4.data[i2];
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
            var i = _media.length;
            while (i--) {
              _media[i].id === this.id && _media.splice(i, 1);
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
          _context2 && _context2.data.push(this);
        }
        var _proto6 = MatchMedia2.prototype;
        _proto6.add = function add(conditions, func, scope) {
          _isObject(conditions) || (conditions = {
            matches: conditions
          });
          var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
          _context2 && !context.selector && (context.selector = _context2.selector);
          this.contexts.push(context);
          func = context.add("onMatch", func);
          context.queries = conditions;
          for (p in conditions) {
            if (p === "all") {
              active = 1;
            } else {
              mq = _win2.matchMedia(conditions[p]);
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
          _isString(target) && (target = toArray(target)[0]);
          var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
          unit === "native" && (unit = "");
          return !target ? target : !property ? function(property2, unit2, uncache2) {
            return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
          } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        },
        quickSetter: function quickSetter(target, property, unit) {
          target = toArray(target);
          if (target.length > 1) {
            var setters = target.map(function(t) {
              return gsap3.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
              var i = l;
              while (i--) {
                setters[i](value);
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
          var tween = gsap3.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func2(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
          };
          func.tween = tween;
          return func;
        },
        isTweening: function isTweening(targets) {
          return _globalTimeline.getTweensOf(targets, true).length > 0;
        },
        defaults: function defaults(value) {
          value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
          return _mergeDeep(_defaults, value || {});
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
            return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
          };
          if (extendTimeline) {
            Timeline.prototype[name] = function(targets, vars, position) {
              return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
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
          return func ? new Context(func, scope) : _context2;
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
          var a = _listeners[type] || (_listeners[type] = []);
          ~a.indexOf(callback2) || a.push(callback2);
        },
        removeEventListener: function removeEventListener(type, callback2) {
          var a = _listeners[type], i = a && a.indexOf(callback2);
          i >= 0 && a.splice(i, 1);
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
            if (toAdd && _context2) {
              _context2.data.push(toAdd);
              toAdd._ctx = _context2;
            }
            return _context2;
          },
          suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
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
        var targets = tween._targets, p, i, pt;
        for (p in modifiers) {
          i = targets.length;
          while (i--) {
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
              if (pt._pt) {
                pt = _getPluginPropTween(pt, p);
              }
              pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
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
              if (_isString(vars)) {
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
      var gsap3 = _gsap.registerPlugin({
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
          var i = value.length;
          while (i--) {
            this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
          }
        }
      }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
      Tween.version = Timeline.version = gsap3.version = "3.12.5";
      _coreReady = 1;
      _windowExists() && _wake();
      var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
      var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting$1, _windowExists$1 = function _windowExists2() {
        return typeof window !== "undefined";
      }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
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
      }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function _saveStyle2(property, isNotCSS) {
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
          if (this.props.indexOf(_transformProp) >= 0) {
            return;
          }
          if (cache.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push(_transformOriginProp, isNotCSS, "");
          }
          property = _transformProp;
        }
        (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
      }, _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
        if (style.translate) {
          style.removeProperty("translate");
          style.removeProperty("scale");
          style.removeProperty("rotate");
        }
      }, _revertStyle = function _revertStyle2() {
        var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
        for (i = 0; i < props.length; i += 3) {
          props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
        }
        if (this.tfm) {
          for (p in this.tfm) {
            cache[p] = this.tfm[p];
          }
          if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
          }
          i = _reverting$1();
          if ((!i || !i.isStart) && !style[_transformProp]) {
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
        target._gsap || gsap3.core.getCache(target);
        properties && properties.split(",").forEach(function(p) {
          return saver.save(p);
        });
        return saver;
      }, _supports3D, _createElement = function _createElement2(type, ns) {
        var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
        return e && e.style ? e : _doc$1.createElement(type);
      }, _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
        var cs = getComputedStyle(target);
        return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
      }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
        var e = element || _tempDiv, s = e.style, i = 5;
        if (property in s && !preferPrefix) {
          return property;
        }
        property = property.charAt(0).toUpperCase() + property.substr(1);
        while (i-- && !(_prefixes[i] + property in s)) {
        }
        return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
      }, _initCore3 = function _initCore4() {
        if (_windowExists$1() && window.document) {
          _win$1 = window;
          _doc$1 = _win$1.document;
          _docElement = _doc$1.documentElement;
          _tempDiv = _createElement("div") || {
            style: {}
          };
          _tempDivStyler = _createElement("div");
          _transformProp = _checkPropPrefix(_transformProp);
          _transformOriginProp = _transformProp + "Origin";
          _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
          _supports3D = !!_checkPropPrefix("perspective");
          _reverting$1 = gsap3.core.reverting;
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
        var i = attributesArray.length;
        while (i--) {
          if (target.hasAttribute(attributesArray[i])) {
            return target.getAttribute(attributesArray[i]);
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
            property = _transformProp;
          }
          if (style.removeProperty) {
            first2Chars = property.substr(0, 2);
            if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
              property = "-" + property;
            }
            style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
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
          return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
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
          return _round(curValue / cache.width * amount);
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
        return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
      }, _get = function _get2(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore3();
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
          var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
          if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
          } else {
            props = props.split(",");
            i = props.length;
            while (--i > -1) {
              prop = props[i];
              if (_transformProps[prop]) {
                clearTransforms = 1;
                prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
              }
              _removeProperty(target, prop);
            }
          }
          if (clearTransforms) {
            _removeProperty(target, _transformProp);
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
        var matrixString = _getComputedProperty(target, _transformProp);
        return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
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
            style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
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
            scaleX = _round(Math.sqrt(a * a + b * b + c * c));
            scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          }
          if (cache.svg) {
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
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
        cache.scaleX = _round(scaleX);
        cache.scaleY = _round(scaleY);
        cache.rotation = _round(rotation) + deg;
        cache.rotationX = _round(rotationX) + deg;
        cache.rotationY = _round(rotationY) + deg;
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
        return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
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
        target.style[_transformProp] = transforms || "translate(0, 0)";
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
          a11 = _round(a11);
          a21 = _round(a21);
          a12 = _round(a12);
          a22 = _round(a22);
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
          tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
          ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
        }
        if (xPercent || yPercent) {
          temp = target.getBBox();
          tx = _round(tx + xPercent / 100 * temp.width);
          ty = _round(ty + yPercent / 100 * temp.height);
        }
        temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
        target.setAttribute("transform", temp);
        forceCSS && (target.style[_transformProp] = temp);
      }, _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
        var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction2, pt;
        if (isString) {
          direction2 = endValue.split("_")[1];
          if (direction2 === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) {
              change += change < 0 ? cap : -cap;
            }
          }
          if (direction2 === "cw" && change < 0) {
            change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
          } else if (direction2 === "ccw" && change > 0) {
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
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
          _removeProperty(target, _transformProp);
          target.setAttribute("transform", startValue);
        } else {
          startValue = getComputedStyle(target)[_transformProp];
          style[_transformProp] = transforms;
          endCache = _parseTransform(target, 1);
          style[_transformProp] = startValue;
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
          props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
          });
          plugin.init(target, vars, tween);
        };
      });
      var CSSPlugin = {
        name: "css",
        register: _initCore3,
        targetTest: function targetTest(target) {
          return target.style && target.nodeType;
        },
        init: function init(target, vars, tween, index, targets) {
          var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
          _pluginInitted || _initCore3();
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
                _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
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
                  transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
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
      gsap3.utils.checkPrefix = _checkPropPrefix;
      gsap3.core.getStyleSaver = _getStyleSaver;
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
      gsap3.registerPlugin(CSSPlugin);
      var gsapWithCSS = gsap3.registerPlugin(CSSPlugin) || gsap3, TweenMaxWithCSS = gsapWithCSS.core.Tween;
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

// header.js
var header = document.querySelector("[data-header]");
var sections = [...document.querySelectorAll("[data-section]")];
var scrollRoot = document.querySelector("[data-scroller]");
var prevYPosition = 0;
var direction = "up";
var options = {
  root: scrollRoot,
  rootMargin: `${header.offsetHeight * -0.5}px 0px ${(window.innerHeight - header.offsetHeight) * -1}px 0px`,
  threshold: 0
};
var getTargetSection = (entry) => {
  const index = sections.findIndex((section) => section == entry.target);
  if (index >= sections.length - 1) {
    return entry.target;
  } else {
    return sections[index + 1];
  }
};
var updateColors = (target) => {
  const theme = target.dataset.section;
  header.setAttribute("data-theme", theme);
};
var shouldUpdate = (entry) => {
  if (direction === "down" && !entry.isIntersecting) {
    return true;
  }
  if (direction === "up" && entry.isIntersecting) {
    return true;
  }
  return false;
};
var onIntersect = (entries, observer2) => {
  entries.forEach((entry) => {
    if (scrollRoot.scrollTop > prevYPosition) {
      direction = "down";
    } else {
      direction = "up";
    }
    prevYPosition = scrollRoot.scrollTop;
    const target = direction === "down" ? getTargetSection(entry) : entry.target;
    if (shouldUpdate(entry)) {
      updateColors(target);
    }
  });
};
var observer = new IntersectionObserver(onIntersect, options);
sections.forEach((section) => {
  observer.observe(section);
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

// node_modules/tiny-slider/src/helpers/raf.js
var win = window;
var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function(cb) {
  return setTimeout(cb, 16);
};

// node_modules/tiny-slider/src/helpers/caf.js
var win2 = window;
var caf = win2.cancelAnimationFrame || win2.mozCancelAnimationFrame || function(id) {
  clearTimeout(id);
};

// node_modules/tiny-slider/src/helpers/extend.js
function extend() {
  var obj, name, copy, target = arguments[0] || {}, i = 1, length = arguments.length;
  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
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

// node_modules/tiny-slider/src/helpers/checkStorageValue.js
function checkStorageValue(value) {
  return ["true", "false"].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

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

// node_modules/tiny-slider/src/helpers/getSlideId.js
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  return "tns" + window.tnsId;
}

// node_modules/tiny-slider/src/helpers/getBody.js
function getBody() {
  var doc = document, body = doc.body;
  if (!body) {
    body = doc.createElement("body");
    body.fake = true;
  }
  return body;
}

// node_modules/tiny-slider/src/helpers/docElement.js
var docElement = document.documentElement;

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

// node_modules/tiny-slider/src/helpers/resetFakeBody.js
function resetFakeBody(body, docOverflow) {
  if (body.fake) {
    body.remove();
    docElement.style.overflow = docOverflow;
    docElement.offsetHeight;
  }
}

// node_modules/tiny-slider/src/helpers/calc.js
function calc() {
  var doc = document, body = getBody(), docOverflow = setFakeBody(body), div = doc.createElement("div"), result = false;
  body.appendChild(div);
  try {
    var str = "(10px * 10)", vals = ["calc" + str, "-moz-calc" + str, "-webkit-calc" + str], val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
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

// node_modules/tiny-slider/src/helpers/percentageLayout.js
function percentageLayout() {
  var doc = document, body = getBody(), docOverflow = setFakeBody(body), wrapper = doc.createElement("div"), outer = doc.createElement("div"), str = "", count2 = 70, perPage = 3, supported = false;
  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";
  for (var i = 0; i < count2; i++) {
    str += "<div></div>";
  }
  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);
  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count2 - perPage].getBoundingClientRect().left) < 2;
  body.fake ? resetFakeBody(body, docOverflow) : wrapper.remove();
  return supported;
}

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

// node_modules/tiny-slider/src/helpers/addCSSRule.js
function addCSSRule(sheet, selector, rules, index) {
  "insertRule" in sheet ? sheet.insertRule(selector + "{" + rules + "}", index) : sheet.addRule(selector, rules, index);
}

// node_modules/tiny-slider/src/helpers/removeCSSRule.js
function removeCSSRule(sheet, index) {
  "deleteRule" in sheet ? sheet.deleteRule(index) : sheet.removeRule(index);
}

// node_modules/tiny-slider/src/helpers/getCssRulesLength.js
function getCssRulesLength(sheet) {
  var rule = "insertRule" in sheet ? sheet.cssRules : sheet.rules;
  return rule.length;
}

// node_modules/tiny-slider/src/helpers/toDegree.js
function toDegree(y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

// node_modules/tiny-slider/src/helpers/getTouchDirection.js
function getTouchDirection(angle, range) {
  var direction2 = false, gap = Math.abs(90 - Math.abs(angle));
  if (gap >= 90 - range) {
    direction2 = "horizontal";
  } else if (gap <= range) {
    direction2 = "vertical";
  }
  return direction2;
}

// node_modules/tiny-slider/src/helpers/forEach.js
function forEach(arr, callback2, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback2.call(scope, arr[i], i);
  }
}

// node_modules/tiny-slider/src/helpers/classListSupport.js
var classListSupport = "classList" in document.createElement("_");

// node_modules/tiny-slider/src/helpers/hasClass.js
var hasClass = classListSupport ? function(el, str) {
  return el.classList.contains(str);
} : function(el, str) {
  return el.className.indexOf(str) >= 0;
};

// node_modules/tiny-slider/src/helpers/addClass.js
var addClass = classListSupport ? function(el, str) {
  if (!hasClass(el, str)) {
    el.classList.add(str);
  }
} : function(el, str) {
  if (!hasClass(el, str)) {
    el.className += " " + str;
  }
};

// node_modules/tiny-slider/src/helpers/removeClass.js
var removeClass = classListSupport ? function(el, str) {
  if (hasClass(el, str)) {
    el.classList.remove(str);
  }
} : function(el, str) {
  if (hasClass(el, str)) {
    el.className = el.className.replace(str, "");
  }
};

// node_modules/tiny-slider/src/helpers/hasAttr.js
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

// node_modules/tiny-slider/src/helpers/getAttr.js
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

// node_modules/tiny-slider/src/helpers/isNodeList.js
function isNodeList(el) {
  return typeof el.item !== "undefined";
}

// node_modules/tiny-slider/src/helpers/setAttrs.js
function setAttrs(els, attrs) {
  els = isNodeList(els) || els instanceof Array ? els : [els];
  if (Object.prototype.toString.call(attrs) !== "[object Object]") {
    return;
  }
  for (var i = els.length; i--; ) {
    for (var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

// node_modules/tiny-slider/src/helpers/removeAttrs.js
function removeAttrs(els, attrs) {
  els = isNodeList(els) || els instanceof Array ? els : [els];
  attrs = attrs instanceof Array ? attrs : [attrs];
  var attrLength = attrs.length;
  for (var i = els.length; i--; ) {
    for (var j = attrLength; j--; ) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

// node_modules/tiny-slider/src/helpers/arrayFromNodeList.js
function arrayFromNodeList(nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}

// node_modules/tiny-slider/src/helpers/hideElement.js
function hideElement(el, forceHide) {
  if (el.style.display !== "none") {
    el.style.display = "none";
  }
}

// node_modules/tiny-slider/src/helpers/showElement.js
function showElement(el, forceHide) {
  if (el.style.display === "none") {
    el.style.display = "";
  }
}

// node_modules/tiny-slider/src/helpers/isVisible.js
function isVisible(el) {
  return window.getComputedStyle(el).display !== "none";
}

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
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    if (el.style[prop] !== void 0) {
      return prop;
    }
  }
  return false;
}

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

// node_modules/tiny-slider/src/helpers/passiveOption.js
var supportsPassive = false;
try {
  opts = Object.defineProperty({}, "passive", {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {
}
var opts;
var passiveOption = supportsPassive ? { passive: true } : false;

// node_modules/tiny-slider/src/helpers/addEvents.js
function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ["touchstart", "touchmove"].indexOf(prop) >= 0 && !preventScrolling ? passiveOption : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

// node_modules/tiny-slider/src/helpers/removeEvents.js
function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ["touchstart", "touchmove"].indexOf(prop) >= 0 ? passiveOption : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

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
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
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

// node_modules/tiny-slider/src/tiny-slider.js
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
var tns = function(options2) {
  options2 = extend({
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
  }, options2 || {});
  var doc = document, win3 = window, KEYS = {
    ENTER: 13,
    SPACE: 32,
    LEFT: 37,
    RIGHT: 39
  }, tnsStorage = {}, localStorageAccess = options2.useLocalStorage;
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
    if (typeof options2[item] === "string") {
      var str = options2[item], el = doc.querySelector(str);
      optionsElements[item] = str;
      if (el && el.nodeName) {
        options2[item] = el;
      } else {
        if (supportConsoleWarn) {
          console.warn("Can't find", options2[item]);
        }
        return;
      }
    }
  });
  if (options2.container.children.length < 1) {
    if (supportConsoleWarn) {
      console.warn("No slides found in", options2.container);
    }
    return;
  }
  var responsive = options2.responsive, nested = options2.nested, carousel = options2.mode === "carousel" ? true : false;
  if (responsive) {
    if (0 in responsive) {
      options2 = extend(options2, responsive[0]);
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
    updateOptions(options2);
  }
  if (!carousel) {
    options2.axis = "horizontal";
    options2.slideBy = "page";
    options2.edgePadding = false;
    var animateIn = options2.animateIn, animateOut = options2.animateOut, animateDelay = options2.animateDelay, animateNormal = options2.animateNormal;
  }
  var horizontal = options2.axis === "horizontal" ? true : false, outerWrapper = doc.createElement("div"), innerWrapper = doc.createElement("div"), middleWrapper, container = options2.container, containerParent = container.parentNode, containerHTML = container.outerHTML, slideItems = container.children, slideCount = slideItems.length, breakpointZone, windowWidth = getWindowWidth(), isOn = false;
  if (responsive) {
    setBreakpointZone();
  }
  if (carousel) {
    container.className += " tns-vpfix";
  }
  var autoWidth = options2.autoWidth, fixedWidth = getOption("fixedWidth"), edgePadding = getOption("edgePadding"), gutter = getOption("gutter"), viewport = getViewportWidth(), center = getOption("center"), items = !autoWidth ? Math.floor(getOption("items")) : 1, slideBy = getOption("slideBy"), viewportMax = options2.viewportMax || options2.fixedWidthViewportWidth, arrowKeys = getOption("arrowKeys"), speed = getOption("speed"), rewind = options2.rewind, loop = rewind ? false : options2.loop, autoHeight = getOption("autoHeight"), controls = getOption("controls"), controlsText = getOption("controlsText"), nav = getOption("nav"), touch = getOption("touch"), mouseDrag = getOption("mouseDrag"), autoplay = getOption("autoplay"), autoplayTimeout = getOption("autoplayTimeout"), autoplayText = getOption("autoplayText"), autoplayHoverPause = getOption("autoplayHoverPause"), autoplayResetOnVisibility = getOption("autoplayResetOnVisibility"), sheet = createStyleSheet(null, getOption("nonce")), lazyload = options2.lazyload, lazyloadSelector = options2.lazyloadSelector, slidePositions, slideItemsOut = [], cloneCount = loop ? getCloneCountForLoop() : 0, slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2, hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false, rightBoundary = fixedWidth ? getRightBoundary() : null, updateIndexBeforeTransform = !carousel || !loop ? true : false, transformAttr = horizontal ? "left" : "top", transformPrefix = "", transformPostfix = "", getIndexMax = function() {
    if (fixedWidth) {
      return function() {
        return center && !loop ? slideCount - 1 : Math.ceil(-rightBoundary / (fixedWidth + gutter));
      };
    } else if (autoWidth) {
      return function() {
        for (var i = 0; i < slideCountNew; i++) {
          if (slidePositions[i] >= -rightBoundary) {
            return i;
          }
        }
      };
    } else {
      return function() {
        if (center && carousel && !loop) {
          return slideCount - 1;
        } else {
          return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
        }
      };
    }
  }(), index = getStartIndex(getOption("startIndex")), indexCached = index, displayIndex = getCurrentSlide(), indexMin = 0, indexMax = !autoWidth ? getIndexMax() : null, resizeTimer, preventActionWhenRunning = options2.preventActionWhenRunning, swipeAngle = options2.swipeAngle, moveDirectionExpected = swipeAngle ? "?" : true, running = false, onInit = options2.onInit, events = new Events(), newContainerClasses = " tns-slider tns-" + options2.mode, slideId = container.id || getSlideId(), disable = getOption("disable"), disabled = false, freezable = options2.freezable, freeze = freezable && !autoWidth ? getFreeze() : false, frozen = false, controlsEvents = {
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
  }, hasControls = hasOption("controls"), hasNav = hasOption("nav"), navAsThumbnails = autoWidth ? true : options2.navAsThumbnails, hasAutoplay = hasOption("autoplay"), hasTouch = hasOption("touch"), hasMouseDrag = hasOption("mouseDrag"), slideActiveClass = "tns-slide-active", slideClonedClass = "tns-slide-cloned", imgCompleteClass = "tns-complete", imgEvents = {
    "load": onImgLoaded,
    "error": onImgFailed
  }, imgsComplete, liveregionCurrent, preventScroll = options2.preventScrollOnTouch === "force" ? true : false;
  if (hasControls) {
    var controlsContainer = options2.controlsContainer, controlsContainerHTML = options2.controlsContainer ? options2.controlsContainer.outerHTML : "", prevButton = options2.prevButton, nextButton = options2.nextButton, prevButtonHTML = options2.prevButton ? options2.prevButton.outerHTML : "", nextButtonHTML = options2.nextButton ? options2.nextButton.outerHTML : "", prevIsButton, nextIsButton;
  }
  if (hasNav) {
    var navContainer = options2.navContainer, navContainerHTML = options2.navContainer ? options2.navContainer.outerHTML : "", navItems, pages = autoWidth ? slideCount : getPages(), pagesCached = 0, navClicked = -1, navCurrentIndex = getCurrentNavIndex(), navCurrentIndexCached = navCurrentIndex, navActiveClass = "tns-nav-active", navStr = "Carousel Page ", navStrCurrent = " (Current Slide)";
  }
  if (hasAutoplay) {
    var autoplayDirection = options2.autoplayDirection === "forward" ? 1 : -1, autoplayButton = options2.autoplayButton, autoplayButtonHTML = options2.autoplayButton ? options2.autoplayButton.outerHTML : "", autoplayHtmlStrings = ["<span class='tns-visually-hidden'>", " animation</span>"], autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused;
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
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }
  function getAbsIndex(i) {
    if (i == null) {
      i = index;
    }
    if (carousel) {
      i -= cloneCount;
    }
    while (i < 0) {
      i += slideCount;
    }
    return Math.floor(i % slideCount);
  }
  function getCurrentNavIndex() {
    var absIndex = getAbsIndex(), result;
    result = navAsThumbnails ? absIndex : fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : Math.floor(absIndex / items);
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
      if (fixedWidth || options2[str] < slideCount) {
        arr.push(options2[str]);
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
    if (options2[item]) {
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
      var result = options2[item];
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
  function getSlideMarginLeft(i) {
    return CALC ? CALC + "(" + i * 100 + "% / " + slideCountNew + ")" : i * 100 / slideCountNew + "%";
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
    newContainerClasses += " tns-" + options2.axis;
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
    forEach(slideItems, function(item, i) {
      addClass(item, "tns-item");
      if (!item.id) {
        item.id = slideId + "-item" + i;
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
        imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1));
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
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + "%";
        addClass(item, animateIn);
        removeClass(item, animateNormal);
      }
    }
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        addCSSRule(sheet, "#" + slideId + " > .tns-item", "font-size:" + win3.getComputedStyle(slideItems[0]).fontSize + ";", getCssRulesLength(sheet));
        addCSSRule(sheet, "#" + slideId, "font-size:0;", getCssRulesLength(sheet));
      } else if (carousel) {
        forEach(slideItems, function(slide, i2) {
          slide.style.marginLeft = getSlideMarginLeft(i2);
        });
      }
    }
    if (CSSMQ) {
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options2.autoHeight ? getTransitionDurationStyle(options2.speed) : "";
        addCSSRule(sheet, "#" + slideId + "-mw", str, getCssRulesLength(sheet));
      }
      str = getInnerWrapperStyles(options2.edgePadding, options2.gutter, options2.fixedWidth, options2.speed, options2.autoHeight);
      addCSSRule(sheet, "#" + slideId + "-iw", str, getCssRulesLength(sheet));
      if (carousel) {
        str = horizontal && !autoWidth ? "width:" + getContainerWidth(options2.fixedWidth, options2.gutter, options2.items) + ";" : "";
        if (TRANSITIONDURATION) {
          str += getTransitionDurationStyle(speed);
        }
        addCSSRule(sheet, "#" + slideId, str, getCssRulesLength(sheet));
      }
      str = horizontal && !autoWidth ? getSlideWidthStyle(options2.fixedWidth, options2.gutter, options2.items) : "";
      if (options2.gutter) {
        str += getSlideGutterStyle(options2.gutter);
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
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : "";
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
      } else if (options2.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options2.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + "</button>");
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
        forEach(navItems, function(item, i2) {
          setAttrs(item, {
            "data-nav": i2,
            "tabindex": "-1",
            "aria-label": navStr + (i2 + 1),
            "aria-controls": slideId
          });
        });
      } else {
        var navHtml = "", hiddenStr = navAsThumbnails ? "" : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          navHtml += '<button type="button" data-nav="' + i + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) + '"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + "</div>";
        outerWrapper.insertAdjacentHTML(getInsertPosition(options2.navPosition), navHtml);
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
        outerWrapper.insertAdjacentHTML(getInsertPosition(options2.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId + '">' + controlsText[1] + "</button></div>");
        controlsContainer = outerWrapper.querySelector(".tns-controls");
      }
      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }
      if (options2.controlsContainer) {
        setAttrs(controlsContainer, {
          "aria-label": "Carousel Navigation",
          "tabindex": "0"
        });
      }
      if (options2.controlsContainer || options2.prevButton && options2.nextButton) {
        setAttrs([prevButton, nextButton], {
          "aria-controls": slideId,
          "tabindex": "-1"
        });
      }
      if (options2.controlsContainer || options2.prevButton && options2.nextButton) {
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
      addEvents(container, touchEvents, options2.preventScrollOnTouch);
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
    tnsList.forEach(function(item, i) {
      var el = item === "container" ? outerWrapper : options2[item];
      if (typeof el === "object" && el) {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false, parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options2[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
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
    var indChanged, itemsChanged, itemsTem = items, disableTem = disable, freezeTem = freeze, arrowKeysTem = arrowKeys, controlsTem = controls, navTem = nav, touchTem = touch, mouseDragTem = mouseDrag, autoplayTem = autoplay, autoplayHoverPauseTem = autoplayHoverPause, autoplayResetOnVisibilityTem = autoplayResetOnVisibility, indexTem = index;
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
      items = getOption("items");
      slideBy = getOption("slideBy");
      itemsChanged = items !== itemsTem;
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
      touch ? addEvents(container, touchEvents, options2.preventScrollOnTouch) : removeEvents(container, touchEvents);
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
        var i = autoplay ? 1 : 0, html = autoplayButton.innerHTML, len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
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
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }
          var str = getSlideWidthStyle(fixedWidth, gutter, items) + getSlideGutterStyle(gutter);
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
      var a = center ? items - (items - 1) / 2 : items;
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
      for (var i = cloneCount; i--; ) {
        if (carousel) {
          addClass(slideItems[i], str);
        }
        addClass(slideItems[slideCountNew - i - 1], str);
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
      for (var i = cloneCount; i--; ) {
        if (carousel) {
          removeClass(slideItems[i], str);
        }
        removeClass(slideItems[slideCountNew - i - 1], str);
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
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
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
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i], classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + "%";
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
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) {
            start = i;
          }
          if (rangeend - point >= 0.5) {
            end = i;
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
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }
          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }
          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
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
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }
    return Math.max.apply(null, heights);
  }
  function updateInnerWrapperHeight() {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount), wp = middleWrapper ? middleWrapper : innerWrapper;
    if (wp.style.height !== maxHeight) {
      wp.style.height = maxHeight + "px";
    }
  }
  function setSlidePositions() {
    slidePositions = [0];
    var attr = horizontal ? "left" : "top", attr2 = horizontal ? "right" : "bottom", base = slideItems[0].getBoundingClientRect()[attr];
    forEach(slideItems, function(item, i) {
      if (i) {
        slidePositions.push(item.getBoundingClientRect()[attr] - base);
      }
      if (i === slideCountNew - 1) {
        slidePositions.push(item.getBoundingClientRect()[attr2] - base);
      }
    });
  }
  function updateSlideStatus() {
    var range = getVisibleSlideRange(), start = range[0], end = range[1];
    forEach(slideItems, function(item, i) {
      if (i >= start && i <= end) {
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
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--; ) {
      var item = slideItems[i];
      if (i >= index && i < l) {
        addClass(item, "tns-moving");
        item.style.left = (i - index) * 100 / items + "%";
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
    return autoWidth ? (viewport - gap - (slidePositions[num + 1] - slidePositions[num] - gutter)) / 2 : fixedWidth ? (viewport - fixedWidth) / 2 : (items - 1) / 2;
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
        var denominator = TRANSFORM ? slideCountNew : items;
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
    var l = number + items;
    if (!loop) {
      l = Math.min(l, slideCountNew);
    }
    for (var i = number; i < l; i++) {
      var item = slideItems[i];
      if (!isOut) {
        item.style.left = (i - index) * 100 / items + "%";
      }
      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1e3 + "s";
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
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
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
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
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
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
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
      var navIndex = navClicked = Number(getAttr(target, "data-nav")), targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items, targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
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
    return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options2.axis;
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
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew) : dist * 100 / (viewport + gutter);
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
              var indexMoved = -dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = -(translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) {
                    index += 1;
                  }
                  i++;
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
    if (options2.preventScrollOnTouch === "auto") {
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
    wp.style.height = slidePositions[index + items] - slidePositions[index] + "px";
  }
  function getPages() {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
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
      items,
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
      return tns(extend(options2, optionsElements));
    }
  };
};

// slider.js
var activeSlides = [];
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
  console.log("Update called");
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
  console.log("Updating slides");
  activeSlides[0].classList.add("active-slide0");
  activeSlides[1].classList.add("active-slide1");
  activeSlides[2].classList.add("active-slide2");
  activeSlides[0].addEventListener("click", prevSlide);
  activeSlides[2].addEventListener("click", nextSlide);
}
function sliderInit() {
  console.log("Init called");
  updateSlides();
}
var slider;
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
var scrollRoot2 = document.querySelector("[data-scroller]");
var videoSection = document.querySelector("[data-video-section]");
if (videoSection) {
  const options2 = {
    root: scrollRoot2,
    threshold: 0
  };
  const onVideoIntersect = (entries, observer2) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        playMainSlide();
      } else {
        pauseMainSlide();
      }
    });
  };
  try {
    const videoObserver = new IntersectionObserver(onVideoIntersect, options2);
    videoObserver.observe(videoSection);
  } catch (error) {
    console.error(error);
  }
}

// gsap-hero.js
var import_gsap = __toESM(require_gsap());

// node_modules/gsap/utils/strings.js
var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
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

// node_modules/gsap/SplitText.js
var _doc;
var _win;
var _coreInitted;
var gsap;
var _context;
var _toArray;
var _stripExp = /(?:\r|\n|\t\t)/g;
var _multipleSpacesExp = /(?:\s\s+)/g;
var _nonBreakingSpace = String.fromCharCode(160);
var _initCore = function _initCore2(core) {
  _doc = document;
  _win = window;
  gsap = gsap || core || _win.gsap || console.warn("Please gsap.registerPlugin(SplitText)");
  if (gsap) {
    _toArray = gsap.utils.toArray;
    _context = gsap.core.context || function() {
    };
    _coreInitted = 1;
  }
};
var _bonusValidated = 1;
var _getComputedStyle = function _getComputedStyle2(element) {
  return _win.getComputedStyle(element);
};
var _isAbsolute = function _isAbsolute2(vars) {
  return vars.position === "absolute" || vars.absolute === true;
};
var _findSpecialChars = function _findSpecialChars2(text, chars) {
  var i = chars.length, s;
  while (--i > -1) {
    s = chars[i];
    if (text.substr(0, s.length) === s) {
      return s.length;
    }
  }
};
var _divStart = " style='position:relative;display:inline-block;'";
var _cssClassFunc = function _cssClassFunc2(cssClass, tag) {
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
var _swapText = function _swapText2(element, oldText, newText) {
  var type = element.nodeType;
  if (type === 1 || type === 9 || type === 11) {
    for (element = element.firstChild; element; element = element.nextSibling) {
      _swapText2(element, oldText, newText);
    }
  } else if (type === 3 || type === 4) {
    element.nodeValue = element.nodeValue.split(oldText).join(newText);
  }
};
var _pushReversed = function _pushReversed2(a, merge) {
  var i = merge.length;
  while (--i > -1) {
    a.push(merge[i]);
  }
};
var _isBeforeWordDelimiter = function _isBeforeWordDelimiter2(e, root, wordDelimiter) {
  var next;
  while (e && e !== root) {
    next = e._next || e.nextSibling;
    if (next) {
      return next.textContent.charAt(0) === wordDelimiter;
    }
    e = e.parentNode || e._parent;
  }
};
var _deWordify = function _deWordify2(e) {
  var children = _toArray(e.childNodes), l = children.length, i, child;
  for (i = 0; i < l; i++) {
    child = children[i];
    if (child._isSplit) {
      _deWordify2(child);
    } else {
      if (i && child.previousSibling && child.previousSibling.nodeType === 3) {
        child.previousSibling.nodeValue += child.nodeType === 3 ? child.nodeValue : child.firstChild.nodeValue;
        e.removeChild(child);
      } else if (child.nodeType !== 3) {
        e.insertBefore(child.firstChild, child);
        e.removeChild(child);
      }
    }
  }
};
var _getStyleAsNumber = function _getStyleAsNumber2(name, computedStyle) {
  return parseFloat(computedStyle[name]) || 0;
};
var _setPositionsAfterSplit = function _setPositionsAfterSplit2(element, vars, allChars, allWords, allLines, origWidth, origHeight) {
  var cs = _getComputedStyle(element), paddingLeft = _getStyleAsNumber("paddingLeft", cs), lineOffsetY = -999, borderTopAndBottom = _getStyleAsNumber("borderBottomWidth", cs) + _getStyleAsNumber("borderTopWidth", cs), borderLeftAndRight = _getStyleAsNumber("borderLeftWidth", cs) + _getStyleAsNumber("borderRightWidth", cs), padTopAndBottom = _getStyleAsNumber("paddingTop", cs) + _getStyleAsNumber("paddingBottom", cs), padLeftAndRight = _getStyleAsNumber("paddingLeft", cs) + _getStyleAsNumber("paddingRight", cs), lineThreshold = _getStyleAsNumber("fontSize", cs) * (vars.lineThreshold || 0.2), textAlign = cs.textAlign, charArray = [], wordArray = [], lineArray = [], wordDelimiter = vars.wordDelimiter || " ", tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", lines = allLines && ~types.indexOf("lines") ? [] : null, words = ~types.indexOf("words"), chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), linesClass = vars.linesClass, iterateLine = ~(linesClass || "").indexOf("++"), spaceNodesToRemove = [], isFlex = cs.display === "flex", prevInlineDisplay = element.style.display, i, j, l, node, nodes, isChild, curLine, addWordSpaces, style, lineNode, lineWidth, offset;
  iterateLine && (linesClass = linesClass.split("++").join(""));
  isFlex && (element.style.display = "block");
  j = element.getElementsByTagName("*");
  l = j.length;
  nodes = [];
  for (i = 0; i < l; i++) {
    nodes[i] = j[i];
  }
  if (lines || absolute) {
    for (i = 0; i < l; i++) {
      node = nodes[i];
      isChild = node.parentNode === element;
      if (isChild || absolute || chars && !words) {
        offset = node.offsetTop;
        if (lines && isChild && Math.abs(offset - lineOffsetY) > lineThreshold && (node.nodeName !== "BR" || i === 0)) {
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
          if (node.nodeName === "BR" && (node.nextSibling && node.nextSibling.nodeName === "BR" || i === 0)) {
            lines.push([]);
          }
        }
      }
    }
  }
  for (i = 0; i < l; i++) {
    node = nodes[i];
    isChild = node.parentNode === element;
    if (node.nodeName === "BR") {
      if (lines || absolute) {
        node.parentNode && node.parentNode.removeChild(node);
        nodes.splice(i--, 1);
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
        nodes.splice(i--, 1);
        l--;
      } else if (!isChild) {
        offset = !node.nextSibling && _isBeforeWordDelimiter(node.parentNode, element, wordDelimiter);
        node.parentNode._parent && node.parentNode._parent.appendChild(node);
        offset && node.parentNode.appendChild(_doc.createTextNode(" "));
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
  i = spaceNodesToRemove.length;
  while (--i > -1) {
    spaceNodesToRemove[i].parentNode.removeChild(spaceNodesToRemove[i]);
  }
  if (lines) {
    if (absolute) {
      lineNode = _doc.createElement(tag);
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
    for (i = 0; i < lines.length; i++) {
      curLine = lines[i];
      lineNode = _doc.createElement(tag);
      lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");
      if (linesClass) {
        lineNode.className = linesClass + (iterateLine ? i + 1 : "");
      }
      lineArray.push(lineNode);
      l = curLine.length;
      for (j = 0; j < l; j++) {
        if (curLine[j].nodeName !== "BR") {
          node = curLine[j];
          lineNode.appendChild(node);
          addWordSpaces && node._wordEnd && lineNode.appendChild(_doc.createTextNode(" "));
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
var _splitRawText = function _splitRawText2(element, vars, wordStart, charStart) {
  var tag = vars.tag ? vars.tag : vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", chars = ~types.indexOf("chars"), absolute = _isAbsolute(vars), wordDelimiter = vars.wordDelimiter || " ", isWordDelimiter = function isWordDelimiter2(_char) {
    return _char === wordDelimiter || _char === _nonBreakingSpace && wordDelimiter === " ";
  }, space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ", wordEnd = "</" + tag + ">", wordIsOpen = 1, specialChars = vars.specialChars ? typeof vars.specialChars === "function" ? vars.specialChars : _findSpecialChars : null, text, splitText, i, j, l, character, hasTagStart, testResult, container = _doc.createElement("div"), parent = element.parentNode;
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
  for (i = 0; i < l; i++) {
    character = text.charAt(i);
    if (specialChars && (testResult = specialChars(text.substr(i), vars.specialChars))) {
      character = text.substr(i, testResult || 1);
      splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
      i += testResult - 1;
    } else if (isWordDelimiter(character) && !isWordDelimiter(text.charAt(i - 1)) && i) {
      splitText += wordIsOpen ? wordEnd : "";
      wordIsOpen = 0;
      while (isWordDelimiter(text.charAt(i + 1))) {
        splitText += space;
        i++;
      }
      if (i === l - 1) {
        splitText += space;
      } else if (text.charAt(i + 1) !== ")") {
        splitText += space + wordStart();
        wordIsOpen = 1;
      }
    } else if (character === "{" && text.substr(i, 6) === "{{LT}}") {
      splitText += chars ? charStart() + "{{LT}}</" + tag + ">" : "{{LT}}";
      i += 5;
    } else if (character.charCodeAt(0) >= 55296 && character.charCodeAt(0) <= 56319 || text.charCodeAt(i + 1) >= 65024 && text.charCodeAt(i + 1) <= 65039) {
      j = ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length || 2;
      splitText += chars && character !== " " ? charStart() + text.substr(i, j) + "</" + tag + ">" : text.substr(i, j);
      i += j - 1;
    } else {
      splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
    }
  }
  element.outerHTML = splitText + (wordIsOpen ? wordEnd : "");
  hasTagStart && _swapText(parent, "{{LT}}", "<");
};
var _split = function _split2(element, vars, wordStart, charStart) {
  var children = _toArray(element.childNodes), l = children.length, absolute = _isAbsolute(vars), i, child;
  if (element.nodeType !== 3 || l > 1) {
    vars.absolute = false;
    for (i = 0; i < l; i++) {
      child = children[i];
      child._next = child._isFirst = child._parent = child._wordEnd = null;
      if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
        if (absolute && child.nodeType !== 3 && _getComputedStyle(child).display === "inline") {
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
var SplitText = /* @__PURE__ */ function() {
  function SplitText2(element, vars) {
    _coreInitted || _initCore();
    this.elements = _toArray(element);
    this.chars = [];
    this.words = [];
    this.lines = [];
    this._originals = [];
    this.vars = vars || {};
    _context(this);
    _bonusValidated && this.split(vars);
  }
  var _proto = SplitText2.prototype;
  _proto.split = function split(vars) {
    this.isSplit && this.revert();
    this.vars = vars = vars || this.vars;
    this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
    var i = this.elements.length, tag = vars.tag ? vars.tag : vars.span ? "span" : "div", wordStart = _cssClassFunc(vars.wordsClass, tag), charStart = _cssClassFunc(vars.charsClass, tag), origHeight, origWidth, e;
    while (--i > -1) {
      e = this.elements[i];
      this._originals[i] = {
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
    this.elements.forEach(function(e, i) {
      e.innerHTML = originals[i].html;
      e.setAttribute("style", originals[i].style);
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
SplitText.register = _initCore;

// gsap-hero.js
import_gsap.gsap.registerPlugin(SplitText);
var circles;
createCircles();
window.addEventListener("load", () => {
  let root = document.documentElement;
  let hero = document.querySelector(".gsap-hero_light-bg");
  let header2 = document.querySelector(".header_container");
  let heading = document.querySelector(".gsap-hero_heading");
  let split, tagline, typed;
  if (heading) {
    heading.style.opacity = "1";
    split = new SplitText(".gsap-hero_heading");
    tagline = split.chars.slice(0, 15);
    typed = split.chars.slice(15, -1);
  }
  let tl = import_gsap.gsap.timeline();
  tl.to(circles, { duration: 0, opacity: 1, stagger: 0.05, ease: "none" });
  tl.to(hero, { duration: 0.5, opacity: 0, ease: "power1.inOut" }, "-=0.25");
  tl.to(tagline, { duration: 0.5, color: "var(--light-teal)", ease: "power1.inOut" }, "<");
  tl.to(circles, { duration: 0.5, borderColor: "var(--light-teal)", ease: "power1.inOut" }, "<");
  tl.to(root, { duration: 0.5, ["--nav-color"]: "var(--light-teal)", ease: "power1.inOut" }, "<");
  tl.to(tagline, { duration: 1, opacity: 1, ease: "power1.out" });
  tl.to(typed, { duration: 0, color: "var(--light-teal)" }, "-=0.5");
  tl.from(typed, { duration: 0.5, stagger: 0.03, rotateZ: "1deg", translateY: "0.1em", ease: "power1.out", onComplete: preloadVideo }, "<");
  tl.to(typed, { duration: 0.5, stagger: 0.03, opacity: 1, ease: "power1.out", onComplete: preloadVideo }, "<");
  tl.to(header2, { duration: 0.5, opacity: 1, ease: "power1.out" }, "+=0.25");
});
function preloadVideo() {
  console.log("Preloading Metadata");
  videos = [...document.querySelectorAll(".slider-video")];
  videos.forEach((el) => {
    el.setAttribute("preload", "metadata");
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
    for (let i = 0; i < count * 2; i++) {
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
