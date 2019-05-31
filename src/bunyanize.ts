
import { isBunyan } from "@eropple/is-logger";

import { LoggerLike } from "./logger-like";
import { BunyanWrapper } from "./bunyan-wrapper";
import { BunyanLike } from "./bunyan-like";
import { StringTo } from "./helper-types";

/**
 * @param logger The logger to wrap
 * @param context If it's a real Bunyan logger, make a child logger with these fields.
 */
export function bunyanize(logger: LoggerLike, context?: StringTo<any>): BunyanLike {
  if (isBunyan(logger)) {
    return (context ? (logger as any).child(context) : logger);
  } else {
    return new BunyanWrapper(logger);
  }
}
