/* eslint-disable */
/*
    @blink-common/component.bfs-utils.
    Built on 2020-07-02, 14:43:58.
    With titan-core v0.6.0.
   */
/**
 * 是否为字符串
 * @param s
 */
function isString(s) {
    return typeof s === 'string' || s instanceof String;
}
/**
 * 是否为数字
 * @param n
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * 是否为客户端环境
 */
function isClient() {
    return (typeof window) !== 'undefined';
}
/**
 * 数组去重
 * @param arr
 */
function uniqueArr(arr) {
    return Array.from(new Set(arr.map(function (ele) { return JSON.stringify(ele); })))
        .map(function (str) { return JSON.parse(str); });
}

/**
 * bfs 默认可选参数
 */
var opts = {
    // 默认在支持的浏览器上开启 webp
    // 服务器端默认关闭
    webp: isClient(),
    // 默认向上匹配白名单
    fuzzyMatch: true,
    // 默认白名单
    whiteList: [],
    // webp格式在不支持的浏览器上降级格式
    webpFallback: isClient() ? 'png' : '',
    // 默认像素比 1
    dpr: 1,
    // 缩放比例默认 1
    ratio: 1
};

var webp = {
    isSupported: false
};
/**
 * 是否支持 WebP.
 *
 * @returns {boolean}
 */
function canUseWebP() {
    if (!isClient()) {
        // 服务器端不检查兼容性, options.webp 为 true 时一律走 webp
        setWebpSupport(true);
    }
    try {
        var canvas = document.createElement('canvas');
        if (canvas.getContext && canvas.getContext('2d')) {
            try {
                // 某些 Android 浏览器不兹词 toDataURL.
                if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
                    setWebpSupport(true);
                }
                else {
                    /** 此workaround是为了兼容 ff 和 edge，但是是异步设置 */
                    canLoadWebpDataURL();
                }
            }
            catch (error) {
                setWebpSupport(false);
            }
        }
        else {
            setWebpSupport(false);
        }
    }
    catch (e) {
        setWebpSupport(false);
    }
}
/**
 * 尝试通过加载 webp 资源来测试浏览器对 webp 的兼容性.
 *
 * P.S. 此方法为异步设置，可能会存在对初始资源不生效的问题.
 */
function canLoadWebpDataURL() {
    var img = new Image();
    img.onload = function () {
        setWebpSupport(img.height === 2);
    };
    img.onerror = function () {
        setWebpSupport(img.height === 2);
    };
    // tslint:disable-next-line: max-line-length
    img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
/**
 * 设置是否支持 webp
 * @param support
 */
function setWebpSupport(support) {
    if (process.env.NODE_ENV === 'development') {
        console.log('[@blink-common/component.bfs-utils]: ', "\u5F53\u524D\u6D4F\u89C8\u5668" + (support ? '支持' : '不支持') + "webp");
    }
    webp.isSupported = support;
}
canUseWebP();

/**
 * 防抖动
 * 避免短时间内频繁进行某一操作
 */
var Debouncer = /** @class */ (function () {
    function Debouncer(debounceTime) {
        this.debounceTime = 1000;
        this.timer = null;
        this.debounceTime = debounceTime;
    }
    /**
     * 设置要执行的方法，若一段时间内没有再次设置，此方法将被执行
     * @param callback {Function}
     */
    Debouncer.prototype.set = function (callback) {
        this.clear();
        this.timer = setTimeout(callback, this.debounceTime);
    };
    /**
     * 清空计时器
     */
    Debouncer.prototype.clear = function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    return Debouncer;
}());

/**
 * 用于管理报错信息的缓冲带
 * 避免控制台出现大量报错
 */
var ErrorManager = /** @class */ (function () {
    /**
     * @param debounceTime {number} 消息防抖时间(ms). 这段时间内没有再次推入新消息，则所有消息将被打印.
     */
    function ErrorManager(debounceTime) {
        if (debounceTime === void 0) { debounceTime = 1000; }
        /**
         * 最小触发集中打印的信息条数.
         * 当短时间内同一类型 (error 或 warn) 的信息数大于这个数时，会被集中打印处理到一条可展开的信息下.
         */
        this.MIN_TO_COLLAPSE = 2;
        this.warnings = [];
        this.errors = [];
        this.warningDebouncer = new Debouncer(debounceTime);
        this.errorDebouncer = new Debouncer(debounceTime);
    }
    ErrorManager.prototype.pushWarning = function (warning) {
        var _this = this;
        if (console.groupCollapsed) {
            this.warnings.push(warning);
            this.warningDebouncer.set(function () { return _this.printWarnings(); });
        }
        else {
            console.warn('[BFS Warning]:', warning);
        }
    };
    ErrorManager.prototype.printWarnings = function () {
        var shouldCollapse = this.warnings.length >= this.MIN_TO_COLLAPSE;
        if (shouldCollapse) {
            console.groupCollapsed("[BFS Warning]: \u6709 " + this.warnings.length + " \u4E2A\u8B66\u544A\uFF0C\u70B9\u51FB\u67E5\u770B.");
        }
        while (this.warnings.length > 0) {
            var warning = this.warnings.shift();
            console.warn('[BFS Warning]:', warning);
        }
        if (shouldCollapse) {
            console.groupEnd();
        }
    };
    ErrorManager.prototype.pushError = function (error) {
        var _this = this;
        if (console.groupCollapsed) {
            this.errors.push(error);
            this.errorDebouncer.set(function () { return _this.printError(); });
        }
        else {
            console.error('[BFS Error]:', error);
        }
    };
    ErrorManager.prototype.printError = function () {
        var shouldCollapse = this.errors.length >= this.MIN_TO_COLLAPSE;
        if (shouldCollapse) {
            console.groupCollapsed("[BFS Error]: \u6709 " + this.errors.length + " \u4E2A\u9519\u8BEF\uFF0C\u70B9\u51FB\u67E5\u770B.");
        }
        while (this.errors.length > 0) {
            var error = this.errors.shift();
            console.error('[BFS Error]:', error);
        }
        if (shouldCollapse) {
            console.groupEnd();
        }
    };
    return ErrorManager;
}());

var errorManager = new ErrorManager(1000);
/**
 * 在控制台打印警告信息
 * @param content
 * @param env
 */
function bfsWarn(content, production) {
    if (production === void 0) { production = false; }
    /* istanbul ignore if */
    if (production || process.env.NODE_ENV !== 'production') {
        errorManager.pushWarning(content);
    }
}
/**
 * 在控制台打印报错信息
 * @param content
 * @param env
 */
function bfsError(content, production) {
    if (production === void 0) { production = false; }
    /* istanbul ignore if */
    if (production || process.env.NODE_ENV !== 'production') {
        errorManager.pushError(content);
    }
}

/**
 * 图片尺寸白名单
 */
var WhiteList = /** @class */ (function () {
    function WhiteList(whiteList) {
        if (whiteList === void 0) { whiteList = []; }
        /**
         * 白名单数组
         */
        this.whiteList = [];
        /**
         * 白名单快速索引
         */
        this.whiteListQuickMap = {
            byWidth: [],
            byHeight: [],
        };
        if (whiteList.length) {
            this.set(whiteList);
        }
    }
    WhiteList.prototype.set = function (wl) {
        this.clear();
        if (wl.length > 0) {
            this.whiteList = wl;
            this.setQuickMap();
        }
    };
    WhiteList.prototype.get = function () {
        return this.whiteList;
    };
    WhiteList.prototype.clear = function () {
        this.whiteList = [];
        this.initQuickMap();
    };
    /**
     * 重置白名单快速索引
     */
    WhiteList.prototype.initQuickMap = function () {
        this.whiteListQuickMap = {
            byWidth: [],
            byHeight: [],
        };
    };
    /**
     * 设置白名单的快速索引
     */
    WhiteList.prototype.setQuickMap = function () {
        var _this = this;
        this.convertWhiteList().forEach(function (size) {
            if (isNumeric(size.width) && size.width > 0 && isNumeric(size.height) && size.height > 0) {
                // 限制了宽高时，按比例放入对应数组
                var proportion = size.width / size.height;
                if (!_this.whiteListQuickMap[proportion]) {
                    _this.whiteListQuickMap[proportion] = [];
                }
                _this.whiteListQuickMap[proportion].push(size);
            }
            else if (isNumeric(size.width) && size.width > 0) {
                // 只限制了宽度
                /* istanbul ignore if */
                if (!_this.whiteListQuickMap.byWidth) {
                    _this.whiteListQuickMap.byWidth = [];
                }
                _this.whiteListQuickMap.byWidth.push({
                    width: size.width,
                    height: 'auto'
                });
            }
            else if (isNumeric(size.height) && size.height > 0) {
                // 只限制了高度
                /* istanbul ignore if */
                if (!_this.whiteListQuickMap.byHeight) {
                    _this.whiteListQuickMap.byHeight = [];
                }
                _this.whiteListQuickMap.byHeight.push({
                    width: 'auto',
                    height: size.height
                });
            }
        });
        // 设置快速索引之后对其进行排序，以便快速查找
        this.sortQuickMap();
    };
    /**
     * 转换白名单格式
     */
    WhiteList.prototype.convertWhiteList = function () {
        var convertedWhiteList = this.whiteList.map(function (s) {
            var size = s && s.split ? s.split('|') : [];
            var width = size[0] && isNumeric(size[0].trim()) && parseInt(size[0].trim()) > 0
                ? parseInt(size[0].trim())
                : 'auto';
            var height = size[1] && isNumeric(size[1].trim()) && parseInt(size[1].trim()) > 0
                ? parseInt(size[1].trim())
                : 'auto';
            return { width: width, height: height };
        });
        // 去重
        return uniqueArr(convertedWhiteList);
    };
    /**
     * 对快速索引数组进行排序
     */
    WhiteList.prototype.sortQuickMap = function () {
        var _this = this;
        Object.keys(this.whiteListQuickMap).forEach(function (key) {
            var list = _this.whiteListQuickMap[key];
            var sortList = list.sort(function (a, b) {
                /* istanbul ignore else */
                if (isNumeric(a.width) && isNumeric(b.width)) {
                    return a.width - b.width;
                }
                else if (isNumeric(a.height) && isNumeric(b.height)) {
                    return a.height - b.height;
                }
            });
            _this.whiteListQuickMap[key] = sortList;
        });
    };
    /**
     * 获取匹配的图片尺寸
     * @param size 希望匹配的图片尺寸
     * @param fuzzyMatch 是否自动向上匹配
     */
    WhiteList.prototype.getMatchedSize = function (size, fuzzyMatch) {
        var proportion = null;
        if (this.whiteList.length === 0) {
            // 未设置白名单，直接返回传入尺寸
            return size;
        }
        var matchedSize = { width: 'auto', height: 'auto' };
        /* istanbul ignore else */
        if (isNumeric(size.width) && size.width > 0 && isNumeric(size.height) && size.height > 0) {
            // 根据宽高比匹配查找
            proportion = size.width / size.height;
        }
        else if (isNumeric(size.width) && size.width > 0) {
            // 根据宽度查找
            proportion = 'byWidth';
        }
        else if (isNumeric(size.height) && size.height > 0) {
            // 根据高度查找
            proportion = 'byHeight';
        }
        /* istanbul ignore next */
        var list = proportion ? this.whiteListQuickMap[proportion] : [];
        if (list && list.length > 0) {
            var matchedSizeArr = fuzzyMatch ? this.fuzzyMatch(list, size) : this.exactMatch(list, size);
            if (matchedSizeArr.length > 0) {
                matchedSize = matchedSizeArr[0];
                if (size.width !== matchedSize.width || size.height !== matchedSize.height) {
                    bfsWarn(size.width + " x " + size.height + " \u5728\u767D\u540D\u5355\u4E2D\u4E0D\u5B58\u5728\uFF0C\u5411\u4E0A\u5339\u914D\u5F97\u5230 " + matchedSize.width + " x " + matchedSize.height);
                }
            }
            else {
                bfsWarn("\u627E\u4E0D\u5230\u4E0E " + size.width + " x " + size.height + " \u5339\u914D\u7684\u767D\u540D\u5355\u5C3A\u5BF8. \u5C06\u4F7F\u7528\u539F\u59CB\u5C3A\u5BF8.");
            }
        }
        else {
            bfsWarn("\u627E\u4E0D\u5230\u4E0E " + size.width + " x " + size.height + " \u5339\u914D\u7684\u767D\u540D\u5355\u5C3A\u5BF8. \u5C06\u4F7F\u7528\u539F\u59CB\u5C3A\u5BF8.");
        }
        return matchedSize;
    };
    /**
     * 模糊匹配策略，同尺寸自动向上匹配
     */
    WhiteList.prototype.fuzzyMatch = function (list, size) {
        return list.filter(function (s) { return isNumeric(s.width) ? s.width >= size.width : s.height >= size.height; });
    };
    /**
     * 精确匹配策略
     */
    WhiteList.prototype.exactMatch = function (list, size) {
        return list.filter(function (s) { return isNumeric(s.width) ? s.width === size.width : s.height === size.height; });
    };
    return WhiteList;
}());

/**
 * 获取当前设置的 dpr 系数
 * @param dprOpt
 */
function getDpr(dprOpt) {
    if (dprOpt === 'auto' && typeof window !== 'undefined' && window.devicePixelRatio) {
        return Number(window.devicePixelRatio) || 1;
    }
    if (Number(dprOpt) > 0) {
        return Number(dprOpt);
    }
    return 1;
}

// import { Base64 } from 'js-base64'
/**
 * 获取文件格式后缀
 * @param url
 */
function getUrlExt(url) {
    if (url && url.split) {
        return url.split('.').pop().toLowerCase();
    }
}
/**
 * 验证 url 是否符合 bfs 规范
 * @param url
 */
function validateBfsUrl(url) {
    // url 是否为 string
    if (!url || !isString(url)) {
        bfsError('URL 应该为 string 类型.');
        return false;
    }
    // 文件格式是否支持
    var supportedExts = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
    if (supportedExts.indexOf(getUrlExt(url)) === -1) {
        bfsError(url + " \u4E0D\u662F\u652F\u6301\u7684\u6587\u4EF6\u683C\u5F0F.");
        return false;
    }
    if (getUrlExt(url) === 'webp') {
        bfsWarn(url + " \u662Fwebp\u683C\u5F0F\u7684\u6587\u4EF6\u3002\u5EFA\u8BAE\u901A\u8FC7\u914D\u7F6E\u53C2\u6570 webp: true \u4F7F\u7528webp\u683C\u5F0F\uFF0C\u4EE5\u4FBF\u5728\u4E0D\u652F\u6301\u7684\u6D4F\u89C8\u5668\u4E0A\u964D\u7EA7.");
    }
    // 路径是否包含 /bfs/
    if (url.indexOf('/bfs/') === -1) {
        bfsWarn(url + " \u4E0D\u662F bfs \u8DEF\u5F84.");
        return false;
    }
    return true;
}
/**
 * 获取 url 中的查询参数
 * @param url
 */
function getQueryString(url) {
    var queryString = '';
    if (url && url.split) {
        queryString = url.split('?')[1];
    }
    return queryString;
}
/**
 * 删除 url 中的查询参数
 * @param url
 */
function removeQueryString(url) {
    var trimmedUrl = url;
    if (url && url.slice && url.indexOf) {
        var pos = url.indexOf('?');
        if (pos > -1) {
            trimmedUrl = url.slice(0, pos);
        }
    }
    return trimmedUrl;
}
/**
 * 拼接查询参数
 * @param url
 * @param queryString
 */
function appendQueryString(url, queryString) {
    return queryString && queryString !== '' ? url + "?" + queryString : url;
}
/**
 * 删除 url 中的bfs参数
 * @param url
 */
function removeBfsParams(url) {
    var trimmedUrl = url;
    if (url && url.slice && url.indexOf) {
        var pos = url.indexOf('@');
        if (pos > -1) {
            trimmedUrl = url.slice(0, pos);
        }
    }
    return trimmedUrl;
}
/**
 * 拼接url参数
 */
function appendUrlParam(url, param, value) {
    url += url.indexOf('@') === -1 ? '@' : '_';
    url += value + param;
    return url;
}
/**
 * url 中是否有 bfs 参数
 * @param url
 */
function hasUrlParams(url) {
    return url.indexOf('@') > -1;
}
/**
 * 设置宽高尺寸
 */
function setSize(url, width, height, whiteList, opts) {
    // 按尺寸白名单匹配宽高
    var matchedSize = whiteList.getMatchedSize({ width: width, height: height }, opts.fuzzyMatch);
    var w = matchedSize.width;
    var h = matchedSize.height;
    var dpr = getDpr(opts.dpr);
    var ratio = opts.ratio || 1;
    // 设置宽高
    if (isNumeric(w) && w > 0) {
        url = appendUrlParam(url, 'w', Math.floor(w * dpr * ratio));
    }
    if (isNumeric(h) && h > 0) {
        url = appendUrlParam(url, 'h', Math.floor(h * dpr * ratio));
    }
    return url;
}
/**
 * 设置可选参数
 */
function setOptionalParams(url, opts) {
    var optionalParams = ['e', 'p', 'c', 'rc', 'a', 'bl', 'q', 'o', 's'];
    optionalParams.forEach(function (param) {
        if (opts[param] !== undefined) {
            url = appendUrlParam(url, param, opts[param]);
        }
    });
    return url;
}
/**
 * 设置水印
 * @todo 待线上文档更新
 */
function setWatermark(url, watermark) {
    // 设置水印...
    return url;
}
/**
 * 设置文件后缀
 */
function setUrlExt(url, opts) {
    var ext = getUrlExt(removeBfsParams(url));
    var newExt = ext;
    if (opts.webp && (ext !== 'gif' || opts.s) && webp.isSupported) {
        newExt = 'webp';
    }
    if (!webp.isSupported && newExt === 'webp' && opts.webpFallback) {
        newExt = opts.webpFallback;
    }
    if (!hasUrlParams(url) && ext !== newExt) {
        url += "@." + newExt;
    }
    else if (hasUrlParams(url)) {
        url += "." + newExt;
    }
    // url = url.replace(RegExp('\.' + ext + '$'), `.${ext}`)
    return url;
}

/**
 * 根据 dpr 重新调整传入的 opts
 * @param opts
 */
function setDPRCompatibleOpts(opts) {
    var dpr = getDpr(opts.dpr);
    var ratio = Number(opts.ratio) || 1;
    var zoom = dpr * ratio;
    if (zoom === 1) {
        return opts;
    }
    if (opts.a) { /** 高级裁剪 */
        if (!/^\d+-\d+-\d+-\d+$/.test(opts.a)) {
            bfsError(opts.a + "\u4E0D\u662F\u6709\u6548\u7684\u9AD8\u7EA7\u88C1\u526A\u53C2\u6570. \u8BF7\u53C2\u8003 https://info.bilibili.co/pages/viewpage.action?pageId=4545261 \u6B63\u786E\u8BBE\u7F6E");
        }
        else {
            var prefix = opts.a.split('-');
            opts.a = prefix.map(function (p) { return Math.floor(Number(p) * zoom); }).join('-');
        }
    }
    if (opts.rc) { /** 区域裁剪 */
        if (!/^\d+x\d+-[1-9]$/.test(opts.rc)) {
            bfsError(opts.rc + "\u4E0D\u662F\u6709\u6548\u7684\u533A\u57DF\u88C1\u526A\u53C2\u6570. \u8BF7\u53C2\u8003 https://info.bilibili.co/pages/viewpage.action?pageId=4545261 \u6B63\u786E\u8BBE\u7F6E");
        }
        else {
            var prefix = opts.rc.split('-');
            var coord = prefix[0].split('x');
            opts.rc = coord.map(function (p) { return Math.floor(Number(p) * zoom); }).join('x') + ("-" + prefix[1]);
        }
    }
    return opts;
}

/// <reference path="../index.d.ts" />
/**
 * BFS Class.
 *
 * @class Bfs
 */
var Bfs = /** @class */ (function () {
    function Bfs(opts$$1) {
        if (opts$$1 === void 0) { opts$$1 = {}; }
        this.defaultOpts = opts;
        this.whiteList = new WhiteList();
        Object.assign(this.defaultOpts, opts$$1);
        this.setWhiteList(this.defaultOpts.whiteList);
    }
    Bfs.prototype.getImageLink = function (url, w, h, customOpts) {
        if (w === void 0) { w = 'auto'; }
        if (h === void 0) { h = 'auto'; }
        if (customOpts === void 0) { customOpts = {}; }
        var opts$$1 = Object.assign({}, this.defaultOpts, customOpts);
        // 是否覆盖默认白名单
        var whiteList = customOpts.whiteList ? new WhiteList(customOpts.whiteList) : this.whiteList;
        // 暂存 url 中查询参数，拼到 url 最后
        var _queryString = getQueryString(url);
        url = removeQueryString(url);
        // 检查 url 是否符合 bfs 规范，若不合法，直接返回url
        if (!validateBfsUrl(removeBfsParams(url))) {
            return appendQueryString(url, _queryString);
        }
        // 根据当前 dpr 对裁剪参数进行缩放调整
        setDPRCompatibleOpts(opts$$1);
        // 移除 url 中 @ 后的 bfs 参数
        url = removeBfsParams(url);
        // 设置宽高
        url = setSize(url, w, h, whiteList, opts$$1);
        // 设置水印
        url = setWatermark(url, opts$$1.watermark);
        // 设置其他可选参数
        url = setOptionalParams(url, opts$$1);
        // 设置 url 后缀名
        url = setUrlExt(url, opts$$1);
        return appendQueryString(url, _queryString);
    };
    Bfs.prototype.getWhiteList = function () {
        return this.whiteList.get();
    };
    Bfs.prototype.setWhiteList = function (whiteList) {
        if (whiteList === void 0) { whiteList = []; }
        this.whiteList.set(whiteList);
    };
    Bfs.prototype.clearWhiteList = function () {
        this.whiteList.clear();
    };
    return Bfs;
}());

export default Bfs;
