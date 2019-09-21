import { BunyanLike } from "./bunyan-like";
import { LoggerLike } from "./logger-like";
import { StringTo } from "./helper-types";
import { isObject } from "util";

export class BunyanWrapper implements BunyanLike {
  constructor(
    private readonly _logger: LoggerLike,
    private readonly _context: StringTo<any> = {}
  ) {}

  child(context: StringTo<any>): BunyanLike {
    return new BunyanWrapper(this._logger, { ...this._context, ...context });
  }

  trace(d: string | StringTo<any>, msg?: string | undefined) {
    if (typeof(d) === 'object') {
      d = { ...this._context, ...d };
    }

    if (!msg) {
      this._logger.trace(d);
    } else {
      this._logger.trace(`${msg} ${JSON.stringify(d)}`);
    }
  }

  debug(d: string | StringTo<any>, msg?: string | undefined) {
    if (typeof(d) === 'object') {
      d = { ...this._context, ...d };
    }

    if (!msg) {
      this._logger.debug(d);
    } else {
      this._logger.debug(`${msg} ${JSON.stringify(d)}`);
    }
  }

  info(d: string | StringTo<any>, msg?: string | undefined) {
    if (typeof(d) === 'object') {
      d = { ...this._context, ...d };
    }

    if (!msg) {
      this._logger.info(d);
    } else {
      this._logger.info(`${msg} ${JSON.stringify(d)}`);
    }
  }

  warn(d: string | StringTo<any>, msg?: string | undefined) {
    if (typeof(d) === 'object') {
      d = { ...this._context, ...d };
    }

    if (!msg) {
      this._logger.warn(d);
    } else {
      this._logger.warn(`${msg} ${JSON.stringify(d)}`);
    }
  }

  error(d: string | StringTo<any>, msg?: string | undefined) {
    if (typeof(d) === 'object') {
      d = { ...this._context, ...d };
    }

    if (!msg) {
      this._logger.error(d);
    } else {
      this._logger.error(`${msg} ${JSON.stringify(d)}`);
    }
  }

  fatal(d: string | StringTo<any>, msg?: string | undefined) {
    if (typeof(d) === 'object') {
      d = { ...this._context, ...d };
    }

    if (!msg) {
      this._logger.error(`FATAL: ${d}`);
    } else {
      this._logger.error(`FATAL: ${msg} ${JSON.stringify(d)}`);
    }
  }
}
