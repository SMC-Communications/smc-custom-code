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
  const index = sections.findIndex((section2) => section2 == entry.target);
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
sections.forEach((section2) => {
  observer.observe(section2);
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
  var obj, name, copy, target = arguments[0] || {}, i3 = 1, length = arguments.length;
  for (; i3 < length; i3++) {
    if ((obj = arguments[i3]) !== null) {
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
    } catch (e2) {
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
    for (var i3 = 0; i3 < 3; i3++) {
      val = vals[i3];
      div.style.width = val;
      if (div.offsetWidth === 100) {
        result = val.replace(str, "");
        break;
      }
    }
  } catch (e2) {
  }
  body.fake ? resetFakeBody(body, docOverflow) : div.remove();
  return result;
}

// node_modules/tiny-slider/src/helpers/percentageLayout.js
function percentageLayout() {
  var doc = document, body = getBody(), docOverflow = setFakeBody(body), wrapper = doc.createElement("div"), outer = doc.createElement("div"), str = "", count2 = 70, perPage = 3, supported = false;
  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";
  for (var i3 = 0; i3 < count2; i3++) {
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
  for (var i3 = 0, l = arr.length; i3 < l; i3++) {
    callback2.call(scope, arr[i3], i3);
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
  for (var i3 = els.length; i3--; ) {
    for (var key in attrs) {
      els[i3].setAttribute(key, attrs[key]);
    }
  }
}

// node_modules/tiny-slider/src/helpers/removeAttrs.js
function removeAttrs(els, attrs) {
  els = isNodeList(els) || els instanceof Array ? els : [els];
  attrs = attrs instanceof Array ? attrs : [attrs];
  var attrLength = attrs.length;
  for (var i3 = els.length; i3--; ) {
    for (var j = attrLength; j--; ) {
      els[i3].removeAttribute(attrs[j]);
    }
  }
}

// node_modules/tiny-slider/src/helpers/arrayFromNodeList.js
function arrayFromNodeList(nl) {
  var arr = [];
  for (var i3 = 0, l = nl.length; i3 < l; i3++) {
    arr.push(nl[i3]);
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
  for (var i3 = 0; i3 < props.length; i3++) {
    var prop = props[i3];
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
} catch (e2) {
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
        for (var i3 = 0; i3 < this.topics[eventName].length; i3++) {
          if (this.topics[eventName][i3] === fn) {
            this.topics[eventName].splice(i3, 1);
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
    } catch (e2) {
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
        for (var i3 = 0; i3 < slideCountNew; i3++) {
          if (slidePositions[i3] >= -rightBoundary) {
            return i3;
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
  function getAbsIndex(i3) {
    if (i3 == null) {
      i3 = index;
    }
    if (carousel) {
      i3 -= cloneCount;
    }
    while (i3 < 0) {
      i3 += slideCount;
    }
    return Math.floor(i3 % slideCount);
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
  function getSlideMarginLeft(i3) {
    return CALC ? CALC + "(" + i3 * 100 + "% / " + slideCountNew + ")" : i3 * 100 / slideCountNew + "%";
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
    forEach(slideItems, function(item, i3) {
      addClass(item, "tns-item");
      if (!item.id) {
        item.id = slideId + "-item" + i3;
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
      for (var i3 = index, l = index + Math.min(slideCount, items); i3 < l; i3++) {
        var item = slideItems[i3];
        item.style.left = (i3 - index) * 100 / items + "%";
        addClass(item, animateIn);
        removeClass(item, animateNormal);
      }
    }
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        addCSSRule(sheet, "#" + slideId + " > .tns-item", "font-size:" + win3.getComputedStyle(slideItems[0]).fontSize + ";", getCssRulesLength(sheet));
        addCSSRule(sheet, "#" + slideId, "font-size:0;", getCssRulesLength(sheet));
      } else if (carousel) {
        forEach(slideItems, function(slide, i4) {
          slide.style.marginLeft = getSlideMarginLeft(i4);
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
        forEach(navItems, function(item, i4) {
          setAttrs(item, {
            "data-nav": i4,
            "tabindex": "-1",
            "aria-label": navStr + (i4 + 1),
            "aria-controls": slideId
          });
        });
      } else {
        var navHtml = "", hiddenStr = navAsThumbnails ? "" : 'style="display:none"';
        for (var i3 = 0; i3 < slideCount; i3++) {
          navHtml += '<button type="button" data-nav="' + i3 + '" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i3 + 1) + '"></button>';
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
    tnsList.forEach(function(item, i3) {
      var el = item === "container" ? outerWrapper : options2[item];
      if (typeof el === "object" && el) {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false, parentEl = el.parentNode;
        el.outerHTML = htmlList[i3];
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
  function onResize(e2) {
    raf(function() {
      resizeTasks(getEvent(e2));
    });
  }
  function resizeTasks(e2) {
    if (!isOn) {
      return;
    }
    if (nested === "outer") {
      events.emit("outerResized", info(e2));
    }
    windowWidth = getWindowWidth();
    var bpChanged, breakpointZoneTem = breakpointZone, needContainerTransform = false;
    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      if (bpChanged) {
        events.emit("newBreakpointStart", info(e2));
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
        var i3 = autoplay ? 1 : 0, html = autoplayButton.innerHTML, len = html.length - autoplayTextTem[i3].length;
        if (html.substring(len) === autoplayTextTem[i3]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i3];
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
      events.emit("newBreakpointEnd", info(e2));
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
      for (var i3 = cloneCount; i3--; ) {
        if (carousel) {
          addClass(slideItems[i3], str);
        }
        addClass(slideItems[slideCountNew - i3 - 1], str);
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
      for (var i3 = cloneCount; i3--; ) {
        if (carousel) {
          removeClass(slideItems[i3], str);
        }
        removeClass(slideItems[slideCountNew - i3 - 1], str);
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
      for (var i3 = index, l = index + slideCount; i3 < l; i3++) {
        var item = slideItems[i3];
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
      for (var i3 = index, l = index + slideCount; i3 < l; i3++) {
        var item = slideItems[i3], classN = i3 < index + items ? animateIn : animateNormal;
        item.style.left = (i3 - index) * 100 / items + "%";
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
    var arr = getVisibleSlideRange(), start2 = arr[0] + 1, end = arr[1] + 1;
    return start2 === end ? start2 + "" : start2 + " to " + end;
  }
  function getVisibleSlideRange(val2) {
    if (val2 == null) {
      val2 = getContainerTransformValue();
    }
    var start2 = index, end, rangestart, rangeend;
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
      slidePositions.forEach(function(point, i3) {
        if (i3 < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) {
            start2 = i3;
          }
          if (rangeend - point >= 0.5) {
            end = i3;
          }
        }
      });
    } else {
      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start2 = Math.floor(rangestart / cell);
          end = Math.ceil(rangeend / cell - 1);
        } else {
          end = start2 + Math.ceil(viewport / cell) - 1;
        }
      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start2 -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }
          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start2 -= b;
            end += b;
          }
          start2 = Math.floor(start2);
          end = Math.ceil(end);
        } else {
          end = start2 + items - 1;
        }
      }
      start2 = Math.max(start2, 0);
      end = Math.min(end, slideCountNew - 1);
    }
    return [start2, end];
  }
  function doLazyLoad() {
    if (lazyload && !disable) {
      var arg = getVisibleSlideRange();
      arg.push(lazyloadSelector);
      getImageArray.apply(null, arg).forEach(function(img) {
        if (!hasClass(img, imgCompleteClass)) {
          var eve = {};
          eve[TRANSITIONEND] = function(e2) {
            e2.stopPropagation();
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
  function onImgLoaded(e2) {
    imgLoaded(getTarget(e2));
  }
  function onImgFailed(e2) {
    imgFailed(getTarget(e2));
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
  function getImageArray(start2, end, imgSelector) {
    var imgs = [];
    if (!imgSelector) {
      imgSelector = "img";
    }
    while (start2 <= end) {
      forEach(slideItems[start2].querySelectorAll(imgSelector), function(img) {
        imgs.push(img);
      });
      start2++;
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
    for (var i3 = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i3 < l; i3++) {
      heights.push(slideItems[i3].offsetHeight);
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
    forEach(slideItems, function(item, i3) {
      if (i3) {
        slidePositions.push(item.getBoundingClientRect()[attr] - base);
      }
      if (i3 === slideCountNew - 1) {
        slidePositions.push(item.getBoundingClientRect()[attr2] - base);
      }
    });
  }
  function updateSlideStatus() {
    var range = getVisibleSlideRange(), start2 = range[0], end = range[1];
    forEach(slideItems, function(item, i3) {
      if (i3 >= start2 && i3 <= end) {
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
    for (var i3 = slideCountNew; i3--; ) {
      var item = slideItems[i3];
      if (i3 >= index && i3 < l) {
        addClass(item, "tns-moving");
        item.style.left = (i3 - index) * 100 / items + "%";
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
    for (var i3 = number; i3 < l; i3++) {
      var item = slideItems[i3];
      if (!isOut) {
        item.style.left = (i3 - index) * 100 / items + "%";
      }
      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i3 - number) / 1e3 + "s";
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
  function render(e2, sliderMoved) {
    if (updateIndexBeforeTransform) {
      updateIndex();
    }
    if (index !== indexCached || sliderMoved) {
      events.emit("indexChanged", info());
      events.emit("transitionStart", info());
      if (autoHeight) {
        doAutoHeight();
      }
      if (animating && e2 && ["click", "keydown"].indexOf(e2.type) >= 0) {
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
        for (var i3 = 0; i3 < slideItemsOut.length; i3++) {
          var item = slideItemsOut[i3];
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
  function goTo(targetIndex, e2) {
    if (freeze) {
      return;
    }
    if (targetIndex === "prev") {
      onControlsClick(e2, -1);
    } else if (targetIndex === "next") {
      onControlsClick(e2, 1);
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
          if (!e2) {
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
        render(e2);
      }
    }
  }
  function onControlsClick(e2, dir) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }
    var passEventObject;
    if (!dir) {
      e2 = getEvent(e2);
      var target = getTarget(e2);
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
        goTo("last", e2);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo("first", e2);
        return;
      }
    }
    if (dir) {
      index += slideBy * dir;
      if (autoWidth) {
        index = Math.floor(index);
      }
      render(passEventObject || e2 && e2.type === "keydown" ? e2 : null);
    }
  }
  function onNavClick(e2) {
    if (running) {
      if (preventActionWhenRunning) {
        return;
      } else {
        onTransitionEnd();
      }
    }
    e2 = getEvent(e2);
    var target = getTarget(e2), navIndex;
    while (target !== navContainer && !hasAttr(target, "data-nav")) {
      target = target.parentNode;
    }
    if (hasAttr(target, "data-nav")) {
      var navIndex = navClicked = Number(getAttr(target, "data-nav")), targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items, targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e2);
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
  function onDocumentKeydown(e2) {
    e2 = getEvent(e2);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e2.keyCode);
    if (keyIndex >= 0) {
      onControlsClick(e2, keyIndex === 0 ? -1 : 1);
    }
  }
  function onControlsKeydown(e2) {
    e2 = getEvent(e2);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e2.keyCode);
    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) {
          onControlsClick(e2, -1);
        }
      } else if (!nextButton.disabled) {
        onControlsClick(e2, 1);
      }
    }
  }
  function setFocus(el) {
    el.focus();
  }
  function onNavKeydown(e2) {
    e2 = getEvent(e2);
    var curElement = doc.activeElement;
    if (!hasAttr(curElement, "data-nav")) {
      return;
    }
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e2.keyCode), navIndex = Number(getAttr(curElement, "data-nav"));
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
        goTo(navIndex, e2);
      }
    }
  }
  function getEvent(e2) {
    e2 = e2 || win3.event;
    return isTouchEvent(e2) ? e2.changedTouches[0] : e2;
  }
  function getTarget(e2) {
    return e2.target || win3.event.srcElement;
  }
  function isTouchEvent(e2) {
    return e2.type.indexOf("touch") >= 0;
  }
  function preventDefaultBehavior(e2) {
    e2.preventDefault ? e2.preventDefault() : e2.returnValue = false;
  }
  function getMoveDirectionExpected() {
    return getTouchDirection(toDegree(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options2.axis;
  }
  function onPanStart(e2) {
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
    var $ = getEvent(e2);
    events.emit(isTouchEvent(e2) ? "touchStart" : "dragStart", info(e2));
    if (!isTouchEvent(e2) && ["img", "a"].indexOf(getLowerCaseNodeName(getTarget(e2))) >= 0) {
      preventDefaultBehavior(e2);
    }
    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ""));
      resetDuration(container, "0s");
    }
  }
  function onPanMove(e2) {
    if (panStart) {
      var $ = getEvent(e2);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      if (carousel) {
        if (!rafIndex) {
          rafIndex = raf(function() {
            panUpdate(e2);
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
      if ((typeof e2.cancelable !== "boolean" || e2.cancelable) && preventScroll) {
        e2.preventDefault();
      }
    }
  }
  function panUpdate(e2) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    caf(rafIndex);
    if (panStart) {
      rafIndex = raf(function() {
        panUpdate(e2);
      });
    }
    if (moveDirectionExpected === "?") {
      moveDirectionExpected = getMoveDirectionExpected();
    }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e2)) {
        preventScroll = true;
      }
      try {
        if (e2.type) {
          events.emit(isTouchEvent(e2) ? "touchMove" : "dragMove", info(e2));
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
  function onPanEnd(e2) {
    if (panStart) {
      if (rafIndex) {
        caf(rafIndex);
        rafIndex = null;
      }
      if (carousel) {
        resetDuration(container, "");
      }
      panStart = false;
      var $ = getEvent(e2);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);
      if (Math.abs(dist)) {
        if (!isTouchEvent(e2)) {
          var target = getTarget(e2);
          addEvents(target, { "click": function preventClick(e3) {
            preventDefaultBehavior(e3);
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
                var i3 = 0;
                while (i3 < slideCountNew && moved >= slidePositions[i3]) {
                  index = i3;
                  if (moved > slidePositions[i3] && dist < 0) {
                    index += 1;
                  }
                  i3++;
                }
              }
            }
            render(e2, dist);
            events.emit(isTouchEvent(e2) ? "touchEnd" : "dragEnd", info(e2));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e2, dist > 0 ? -1 : 1);
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
  function info(e2) {
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
      event: e2 || {}
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
      preventActionWhenRunning: true,
      onInit: sliderInit,
      controls: false,
      nav: false
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

// ready.js
function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
    return;
  }
  document.addEventListener("DOMContentLoaded", fn);
}

// node_modules/typed.js/dist/typed.module.js
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t2) {
    for (var s2 = 1; s2 < arguments.length; s2++) {
      var e2 = arguments[s2];
      for (var n2 in e2)
        Object.prototype.hasOwnProperty.call(e2, n2) && (t2[n2] = e2[n2]);
    }
    return t2;
  }, t.apply(this, arguments);
}
var s = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, smartBackspace: true, shuffle: false, backDelay: 700, fadeOut: false, fadeOutClass: "typed-fade-out", fadeOutDelay: 500, loop: false, loopCount: Infinity, showCursor: true, cursorChar: "|", autoInsertCss: true, attr: null, bindInputFocusEvents: false, contentType: "html", onBegin: function(t2) {
}, onComplete: function(t2) {
}, preStringTyped: function(t2, s2) {
}, onStringTyped: function(t2, s2) {
}, onLastStringBackspaced: function(t2) {
}, onTypingPaused: function(t2, s2) {
}, onTypingResumed: function(t2, s2) {
}, onReset: function(t2) {
}, onStop: function(t2, s2) {
}, onStart: function(t2, s2) {
}, onDestroy: function(t2) {
} };
var e = new (/* @__PURE__ */ function() {
  function e2() {
  }
  var n2 = e2.prototype;
  return n2.load = function(e3, n3, i3) {
    if (e3.el = "string" == typeof i3 ? document.querySelector(i3) : i3, e3.options = t({}, s, n3), e3.isInput = "input" === e3.el.tagName.toLowerCase(), e3.attr = e3.options.attr, e3.bindInputFocusEvents = e3.options.bindInputFocusEvents, e3.showCursor = !e3.isInput && e3.options.showCursor, e3.cursorChar = e3.options.cursorChar, e3.cursorBlinking = true, e3.elContent = e3.attr ? e3.el.getAttribute(e3.attr) : e3.el.textContent, e3.contentType = e3.options.contentType, e3.typeSpeed = e3.options.typeSpeed, e3.startDelay = e3.options.startDelay, e3.backSpeed = e3.options.backSpeed, e3.smartBackspace = e3.options.smartBackspace, e3.backDelay = e3.options.backDelay, e3.fadeOut = e3.options.fadeOut, e3.fadeOutClass = e3.options.fadeOutClass, e3.fadeOutDelay = e3.options.fadeOutDelay, e3.isPaused = false, e3.strings = e3.options.strings.map(function(t2) {
      return t2.trim();
    }), e3.stringsElement = "string" == typeof e3.options.stringsElement ? document.querySelector(e3.options.stringsElement) : e3.options.stringsElement, e3.stringsElement) {
      e3.strings = [], e3.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
      var r = Array.prototype.slice.apply(e3.stringsElement.children), o = r.length;
      if (o)
        for (var a = 0; a < o; a += 1)
          e3.strings.push(r[a].innerHTML.trim());
    }
    for (var u in e3.strPos = 0, e3.currentElContent = this.getCurrentElContent(e3), e3.currentElContent && e3.currentElContent.length > 0 && (e3.strPos = e3.currentElContent.length - 1, e3.strings.unshift(e3.currentElContent)), e3.sequence = [], e3.strings)
      e3.sequence[u] = u;
    e3.arrayPos = 0, e3.stopNum = 0, e3.loop = e3.options.loop, e3.loopCount = e3.options.loopCount, e3.curLoop = 0, e3.shuffle = e3.options.shuffle, e3.pause = { status: false, typewrite: true, curString: "", curStrPos: 0 }, e3.typingComplete = false, e3.autoInsertCss = e3.options.autoInsertCss, e3.autoInsertCss && (this.appendCursorAnimationCss(e3), this.appendFadeOutAnimationCss(e3));
  }, n2.getCurrentElContent = function(t2) {
    return t2.attr ? t2.el.getAttribute(t2.attr) : t2.isInput ? t2.el.value : "html" === t2.contentType ? t2.el.innerHTML : t2.el.textContent;
  }, n2.appendCursorAnimationCss = function(t2) {
    var s2 = "data-typed-js-cursor-css";
    if (t2.showCursor && !document.querySelector("[" + s2 + "]")) {
      var e3 = document.createElement("style");
      e3.setAttribute(s2, "true"), e3.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(e3);
    }
  }, n2.appendFadeOutAnimationCss = function(t2) {
    var s2 = "data-typed-fadeout-js-css";
    if (t2.fadeOut && !document.querySelector("[" + s2 + "]")) {
      var e3 = document.createElement("style");
      e3.setAttribute(s2, "true"), e3.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(e3);
    }
  }, e2;
}())();
var n = new (/* @__PURE__ */ function() {
  function t2() {
  }
  var s2 = t2.prototype;
  return s2.typeHtmlChars = function(t3, s3, e2) {
    if ("html" !== e2.contentType)
      return s3;
    var n2 = t3.substring(s3).charAt(0);
    if ("<" === n2 || "&" === n2) {
      var i3;
      for (i3 = "<" === n2 ? ">" : ";"; t3.substring(s3 + 1).charAt(0) !== i3 && !(1 + ++s3 > t3.length); )
        ;
      s3++;
    }
    return s3;
  }, s2.backSpaceHtmlChars = function(t3, s3, e2) {
    if ("html" !== e2.contentType)
      return s3;
    var n2 = t3.substring(s3).charAt(0);
    if (">" === n2 || ";" === n2) {
      var i3;
      for (i3 = ">" === n2 ? "<" : "&"; t3.substring(s3 - 1).charAt(0) !== i3 && !(--s3 < 0); )
        ;
      s3--;
    }
    return s3;
  }, t2;
}())();
var i2 = /* @__PURE__ */ function() {
  function t2(t3, s3) {
    e.load(this, s3, t3), this.begin();
  }
  var s2 = t2.prototype;
  return s2.toggle = function() {
    this.pause.status ? this.start() : this.stop();
  }, s2.stop = function() {
    this.typingComplete || this.pause.status || (this.toggleBlinking(true), this.pause.status = true, this.options.onStop(this.arrayPos, this));
  }, s2.start = function() {
    this.typingComplete || this.pause.status && (this.pause.status = false, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
  }, s2.destroy = function() {
    this.reset(false), this.options.onDestroy(this);
  }, s2.reset = function(t3) {
    void 0 === t3 && (t3 = true), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t3 && (this.insertCursor(), this.options.onReset(this), this.begin());
  }, s2.begin = function() {
    var t3 = this;
    this.options.onBegin(this), this.typingComplete = false, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
      0 === t3.strPos ? t3.typewrite(t3.strings[t3.sequence[t3.arrayPos]], t3.strPos) : t3.backspace(t3.strings[t3.sequence[t3.arrayPos]], t3.strPos);
    }, this.startDelay);
  }, s2.typewrite = function(t3, s3) {
    var e2 = this;
    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
    var i3 = this.humanizer(this.typeSpeed), r = 1;
    true !== this.pause.status ? this.timeout = setTimeout(function() {
      s3 = n.typeHtmlChars(t3, s3, e2);
      var i4 = 0, o = t3.substring(s3);
      if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
        var a = 1;
        a += (o = /\d+/.exec(o)[0]).length, i4 = parseInt(o), e2.temporaryPause = true, e2.options.onTypingPaused(e2.arrayPos, e2), t3 = t3.substring(0, s3) + t3.substring(s3 + a), e2.toggleBlinking(true);
      }
      if ("`" === o.charAt(0)) {
        for (; "`" !== t3.substring(s3 + r).charAt(0) && (r++, !(s3 + r > t3.length)); )
          ;
        var u = t3.substring(0, s3), p = t3.substring(u.length + 1, s3 + r), c = t3.substring(s3 + r + 1);
        t3 = u + p + c, r--;
      }
      e2.timeout = setTimeout(function() {
        e2.toggleBlinking(false), s3 >= t3.length ? e2.doneTyping(t3, s3) : e2.keepTyping(t3, s3, r), e2.temporaryPause && (e2.temporaryPause = false, e2.options.onTypingResumed(e2.arrayPos, e2));
      }, i4);
    }, i3) : this.setPauseStatus(t3, s3, true);
  }, s2.keepTyping = function(t3, s3, e2) {
    0 === s3 && (this.toggleBlinking(false), this.options.preStringTyped(this.arrayPos, this));
    var n2 = t3.substring(0, s3 += e2);
    this.replaceText(n2), this.typewrite(t3, s3);
  }, s2.doneTyping = function(t3, s3) {
    var e2 = this;
    this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(true), this.arrayPos === this.strings.length - 1 && (this.complete(), false === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
      e2.backspace(t3, s3);
    }, this.backDelay));
  }, s2.backspace = function(t3, s3) {
    var e2 = this;
    if (true !== this.pause.status) {
      if (this.fadeOut)
        return this.initFadeOut();
      this.toggleBlinking(false);
      var i3 = this.humanizer(this.backSpeed);
      this.timeout = setTimeout(function() {
        s3 = n.backSpaceHtmlChars(t3, s3, e2);
        var i4 = t3.substring(0, s3);
        if (e2.replaceText(i4), e2.smartBackspace) {
          var r = e2.strings[e2.arrayPos + 1];
          e2.stopNum = r && i4 === r.substring(0, s3) ? s3 : 0;
        }
        s3 > e2.stopNum ? (s3--, e2.backspace(t3, s3)) : s3 <= e2.stopNum && (e2.arrayPos++, e2.arrayPos === e2.strings.length ? (e2.arrayPos = 0, e2.options.onLastStringBackspaced(), e2.shuffleStringsIfNeeded(), e2.begin()) : e2.typewrite(e2.strings[e2.sequence[e2.arrayPos]], s3));
      }, i3);
    } else
      this.setPauseStatus(t3, s3, false);
  }, s2.complete = function() {
    this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = true;
  }, s2.setPauseStatus = function(t3, s3, e2) {
    this.pause.typewrite = e2, this.pause.curString = t3, this.pause.curStrPos = s3;
  }, s2.toggleBlinking = function(t3) {
    this.cursor && (this.pause.status || this.cursorBlinking !== t3 && (this.cursorBlinking = t3, t3 ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
  }, s2.humanizer = function(t3) {
    return Math.round(Math.random() * t3 / 2) + t3;
  }, s2.shuffleStringsIfNeeded = function() {
    this.shuffle && (this.sequence = this.sequence.sort(function() {
      return Math.random() - 0.5;
    }));
  }, s2.initFadeOut = function() {
    var t3 = this;
    return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
      t3.arrayPos++, t3.replaceText(""), t3.strings.length > t3.arrayPos ? t3.typewrite(t3.strings[t3.sequence[t3.arrayPos]], 0) : (t3.typewrite(t3.strings[0], 0), t3.arrayPos = 0);
    }, this.fadeOutDelay);
  }, s2.replaceText = function(t3) {
    this.attr ? this.el.setAttribute(this.attr, t3) : this.isInput ? this.el.value = t3 : "html" === this.contentType ? this.el.innerHTML = t3 : this.el.textContent = t3;
  }, s2.bindFocusEvents = function() {
    var t3 = this;
    this.isInput && (this.el.addEventListener("focus", function(s3) {
      t3.stop();
    }), this.el.addEventListener("blur", function(s3) {
      t3.el.value && 0 !== t3.el.value.length || t3.start();
    }));
  }, s2.insertCursor = function() {
    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", true), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
  }, t2;
}();

// hero.js
var headline = document.querySelector("#new-hero_heading-h1");
var hiddenText = document.querySelector(".hidden-text");
var section = document.querySelector(".home_new-hero");
var count;
var hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
if (hasSeenIntro === void 0) {
  sessionStorage.setItem("hasSeenIntro", "false");
}
createCircles();
if (hasSeenIntro === "true") {
  skipIntro();
} else if (headline) {
  try {
    ready(() => {
      window.requestAnimationFrame(step);
    });
  } catch (error) {
    console.error(error);
  }
}
var circles;
function skipIntro() {
  section.classList.add("no-transition");
  headline.classList.add("no-transition");
  invertColors();
  createCircles();
  circles.forEach((circle) => {
    circle.classList.add("reveal");
  });
  headline.classList.add("reveal");
  hiddenText.classList.add("reveal");
}
function createCircles() {
  const container = document.querySelector(".new-hero_circles-container");
  if (container) {
    const targetDiameter = container.offsetHeight;
    let windowWidth = window.innerWidth;
    count = Math.round(windowWidth / targetDiameter);
    let newDiameter = windowWidth / count;
    try {
      container.style.setProperty("--d", newDiameter + "px");
    } catch (error) {
      console.error(error);
    }
    for (let i3 = 0; i3 < count * 2; i3++) {
      let el = document.createElement("div");
      el.classList.add("circle");
      try {
        container.append(el);
      } catch (error) {
        console.error(error);
      }
    }
    circles = [...document.querySelectorAll(".circle")];
  }
}
function invertColors() {
  if (section) {
    try {
      section.classList.add("invert");
    } catch (error) {
      console.error(error);
    }
  }
}
function createTypedElement() {
  let typed = new i2("#type-span", {
    strings: ["by \ninfluencing consumers at \nevery stage of their journey"],
    typeSpeed: 50,
    showCursor: false
  });
}
var start;
var previousTimeStamp;
var circlesDone = false;
var typewriterDone = false;
var headingRevealed = false;
var colorsInverted = false;
i = 0;
function step(timeStamp) {
  if (start === void 0) {
    start = timeStamp;
  }
  const elapsed = timeStamp - start;
  if (!headingRevealed && elapsed > 0) {
    headline.classList.add("reveal");
    headingRevealed = true;
  }
  if (circles && elapsed > 500 + 100 * i && i < circles.length) {
    circles[i].classList.add("reveal");
    if (i == circles.length - 1) {
      circlesDone = true;
    } else {
      i++;
    }
  }
  if (!colorsInverted && elapsed > 2500) {
    invertColors();
    colorsInverted = true;
  }
  if (!typewriterDone && elapsed > 3e3) {
    createTypedElement();
    typewriterDone = true;
    sessionStorage.setItem("hasSeenIntro", "true");
  }
  previousTimeStamp = timeStamp;
  if (!typewriterDone || !circlesDone) {
    window.requestAnimationFrame(step);
  }
}
