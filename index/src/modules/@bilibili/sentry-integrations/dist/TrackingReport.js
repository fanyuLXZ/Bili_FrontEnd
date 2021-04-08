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
var md5 = require("md5");
var debug = Debug('@bilibili/sentry-integrations:TrackingReport');
var TrackingReport = (function () {
    function TrackingReport(options) {
        this.name = 'TrackingReport';
        this._options = {
            dryRun: false,
            env: 'local'
        };
        this._options = __assign({}, options);
    }
    /* eslint-disable */
    TrackingReport.prototype.setupOnce = function (_, getCurrenthub) {
        _(function (event) {
            var self = getCurrenthub().getIntegration(TrackingReport);
            self && debug('[DEBUG][TrackingReport]Fire A Event', event);
            if (self && globalThis.spmReportData && event.exception) {
                var dryRun = self._options.dryRun;
                var _a = event.exception.values[0], type = _a.type, value = _a.value, stacktrace = _a.stacktrace;
                var frames_1 = (stacktrace || {}).frames;
                var filename = frames_1[0].filename;
                if (dryRun !== true) {
                    self._report(self._createEventLog({
                        message: value, typeName: type, filename: filename
                    }));
                }
            }
            return event;
        });
    };
    TrackingReport.prototype._report = function (log) {
        globalThis.spmReportData['SentryTracking'] = log;
    };
    TrackingReport.prototype._createEventLog = function (obj) {
        var env = this._options.env;
        var message = obj.message, typeName = obj.typeName, filename = obj.filename;
        var hash = md5(typeName + "-" + message + "-" + filename);
        return {
            hash: hash,
            env: env,
            message: message,
            typeName: typeName,
            filename: filename
        };
    };
    TrackingReport.id = 'TrackingReport';
    return TrackingReport;
}());
exports.TrackingReport = TrackingReport;
