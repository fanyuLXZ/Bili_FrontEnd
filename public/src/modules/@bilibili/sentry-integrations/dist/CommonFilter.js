"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Debug = require("debug");
var debug = Debug('@bilibili/sentry-integrations:CommonFilter');
var CommonFilter = (function () {
    function CommonFilter(options) {
        if (options === void 0) { options = {}; }
        this.name = 'CommonFilter';
        this._options = {
            ignoreTypeList: [],
            ignoreMessageList: [],
            ignoreFileNameList: [],
            ignoreFunctionList: []
        };
        this._options = __assign({}, options);
        this._options.ignoreTypeList = CommonFilter.IGNORE_TYPE_LIST.concat(options.ignoreTypeList || []);
        this._options.ignoreMessageList = CommonFilter.IGNORE_MESSAGE_LIST.concat(options.ignoreMessageList || []);
        this._options.ignoreFileNameList = CommonFilter.IGNORE_FILENAME_LIST.concat(options.ignoreFileNameList || []);
        this._options.ignoreFunctionList = CommonFilter.IGNORE_FUNCTION_LIST.concat(options.ignoreFunctionList || []);
    }
    CommonFilter.prototype.setupOnce = function (_, getCurrenthub) {
        _(function (event) {
            var self = getCurrenthub().getIntegration(CommonFilter);
            if (self && event.exception) {
                var _options = self._options;
                var _a = event.exception.values[0], type_1 = _a.type, value_1 = _a.value, stacktrace = _a.stacktrace;
                var frames_1 = stacktrace.frames;
                var filename_1 = frames_1.reduce(function (pre, cur) {
                    return pre + ", " + (typeof cur === 'string' ? cur : cur.abs_path || cur.filename || cur);
                }, '');
                var func_1 = frames_1.reduce(function (pre, cur) {
                    return pre + ", " + (typeof cur === 'string' ? cur : cur["function"] || cur);
                });
                debug('[DEBUG][CommonFilter]Fire A Event', event);
                var isIgnoreType = _options.ignoreTypeList.some(function (x) { return type_1.indexOf(x) !== -1; });
                var isIgnoreMessage = _options.ignoreMessageList.some(function (x) { return value_1.indexOf(x) !== -1; });
                var isIgnoreFileName = _options.ignoreFileNameList.some(function (x) { return filename_1.indexOf(x) !== -1; });
                var isIgnoreFunction = _options.ignoreFunctionList.some(function (x) { return func_1.indexOf(x) !== -1; });
                if (isIgnoreType || isIgnoreMessage || isIgnoreFileName || isIgnoreFunction)
                    return null;
                else
                    return event;
            }
            return event;
        });
    };
    CommonFilter.IGNORE_TYPE_LIST = ['SecurityError', 'NS_ERROR_STORAGE_IOERR', 'NS_ERROR_FILE_NO_DEVICE_SPACE', 'NS_ERROR_FILE_CORRUPTED'];
    CommonFilter.IGNORE_MESSAGE_LIST = ['Network Error', '$ is not defined', 'timeout of', 'apply is not a function'];
    CommonFilter.IGNORE_FILENAME_LIST = ['file://', '-extension://', '/bfs/seed/log/report/log-reporter.js', 'vue-router/dist/vue-router.esm', 'global code', '(<anonymous>)', 'applyUI', '/common/js/xazx.min.js'];
    CommonFilter.IGNORE_FUNCTION_LIST = ['applyUI'];
    CommonFilter.id = 'CommonFilter';
    return CommonFilter;
}());
exports.CommonFilter = CommonFilter;
