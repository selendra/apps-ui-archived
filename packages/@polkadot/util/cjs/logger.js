"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = logger;
exports.loggerFormat = loggerFormat;

var _formatDate = require("./format/formatDate");

var _bn = require("./is/bn");

var _buffer = require("./is/buffer");

var _function = require("./is/function");

var _object = require("./is/object");

var _u8a = require("./is/u8a");

var _toHex = require("./u8a/toHex");

var _toU8a = require("./u8a/toU8a");

var _has = require("./has");

// Copyright 2017-2022 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0
const logTo = {
  debug: 'log',
  error: 'error',
  log: 'log',
  warn: 'warn'
};

function formatOther(value) {
  if (value && (0, _object.isObject)(value) && value.constructor === Object) {
    const result = {};

    for (const k of Object.keys(value)) {
      result[k] = loggerFormat(value[k]);
    }

    return result;
  }

  return value;
}

function loggerFormat(value) {
  if (Array.isArray(value)) {
    return value.map(loggerFormat);
  } else if ((0, _bn.isBn)(value)) {
    return value.toString();
  } else if ((0, _u8a.isU8a)(value) || (0, _buffer.isBuffer)(value)) {
    return (0, _toHex.u8aToHex)((0, _toU8a.u8aToU8a)(value));
  }

  return formatOther(value);
}

function formatWithLength(maxLength) {
  return v => {
    if (maxLength <= 0) {
      return v;
    }

    const r = `${v}`;
    return r.length < maxLength ? v : `${r.substr(0, maxLength)} ...`;
  };
}

function apply(log, type, values) {
  let maxSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;

  if (values.length === 1 && (0, _function.isFunction)(values[0])) {
    const fnResult = values[0]();
    return apply(log, type, Array.isArray(fnResult) ? fnResult : [fnResult], maxSize);
  }

  console[logTo[log]]((0, _formatDate.formatDate)(new Date()), type, ...values.map(loggerFormat).map(formatWithLength(maxSize)));
}

function noop() {// noop
}

function isDebugOn(e, type) {
  return !!e && (e === '*' || type === e || e.endsWith('*') && type.startsWith(e.slice(0, -1)));
}

function isDebugOff(e, type) {
  return !!e && e.startsWith('-') && (type === e.slice(1) || e.endsWith('*') && type.startsWith(e.slice(1, -1)));
}

function getDebugFlag(env, type) {
  let flag = false;

  for (const e of env) {
    if (isDebugOn(e, type)) {
      flag = true;
    } else if (isDebugOff(e, type)) {
      flag = false;
    }
  }

  return flag;
}

function parseEnv(type) {
  const env = (_has.hasProcess ? process : {}).env || {};
  const maxSize = parseInt(env.DEBUG_MAX || '-1', 10);
  return [getDebugFlag((env.DEBUG || '').toLowerCase().split(','), type), isNaN(maxSize) ? -1 : maxSize];
}
/**
 * @name Logger
 * @summary Creates a consistent log interface for messages
 * @description
 * Returns a `Logger` that has `.log`, `.error`, `.warn` and `.debug` (controlled with environment `DEBUG=typeA,typeB`) methods. Logging is done with a consistent prefix (type of logger, date) followed by the actual message using the underlying console.
 * @example
 * <BR>
 *
 * ```javascript
 * import { logger } from '@polkadot';
 *
 * const l = logger('test');
 * ```
 */


function logger(_type) {
  const type = `${_type.toUpperCase()}:`.padStart(16);
  const [isDebug, maxSize] = parseEnv(_type.toLowerCase());
  return {
    debug: isDebug ? function () {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      return apply('debug', type, values, maxSize);
    } : noop,
    error: function () {
      for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
      }

      return apply('error', type, values);
    },
    log: function () {
      for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        values[_key3] = arguments[_key3];
      }

      return apply('log', type, values);
    },
    noop,
    warn: function () {
      for (var _len4 = arguments.length, values = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        values[_key4] = arguments[_key4];
      }

      return apply('warn', type, values);
    }
  };
}