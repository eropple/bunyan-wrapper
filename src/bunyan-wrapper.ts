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
      try {
        this._logger.trace(`${msg} ${JSON.stringify(d)}`);
      } catch (error) {
        this._logger.trace(`Error ${msg} ${error}`);
      }
    }
  }

  debug(d: string | StringTo<any>, msg?: string | undefined) {
    if (typeof(d) === 'object') {
      d = { ...this._context, ...d };
    }

    if (!msg) {
      this._logger.debug(d);
    } else {
      try {
        this._logger.debug(`${msg} ${JSON.stringify(d)}`);
      } catch (error) {
        this._logger.debug(`Error ${msg} ${error}`);
      }
    }
  }

  info(d: string | StringTo<any>, msg?: string | undefined) {
    if (typeof(d) === 'object') {
      d = { ...this._context, ...d };
    }

    if (!msg) {
      this._logger.info(d);
    } else {
      try {
        this._logger.info(`${msg} ${JSON.stringify(d)}`);
      } catch (error) {
        this._logger.info(`Error ${msg} ${error}`);
      }
    }
  }

  warn(d: string | StringTo<any>, msg?: string | undefined) {
    if (typeof(d) === 'object') {
      d = { ...this._context, ...d };
    }

    if (!msg) {
      this._logger.warn(d);
    } else {
      try {
        this._logger.warn(`${msg} ${JSON.stringify(d)}`);
      } catch (error) {
        this._logger.warn(`Error ${msg} ${error}`);
      }
    }
  }

  error(d: string | StringTo<any>, msg?: string | undefined) {
    if (typeof(d) === 'object') {
      d = { ...this._context, ...d };
    }

    if (!msg) {
      this._logger.error(d);
    } else {
      try {
        this._logger.error(`${msg} ${JSON.stringify(d)}`);
      } catch (error) {
        this._logger.error(`Error ${msg} ${error}`);
      }
    }
  }

  fatal(d: string | StringTo<any>, msg?: string | undefined) {
    if (typeof(d) === 'object') {
      d = { ...this._context, ...d };
    }

    if (!msg) {
      this._logger.error(`FATAL: ${d}`);
    } else {
      try {
        this._logger.error(`FATAL: ${msg} ${JSON.stringify(d)}`);
      } catch (error) {
        this._logger.error(`Error: ${msg} ${error}`);
      }
    }
  }
}
