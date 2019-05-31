import { StringTo } from "./helper-types";

export interface BunyanLike {
  trace: (d: StringTo<any> | string, msg?: string) => any;
  debug: (d: StringTo<any> | string, msg?: string) => any;
  info: (d: StringTo<any> | string, msg?: string) => any;
  fatal: (d: StringTo<any> | string, msg?: string) => any;
  error: (d: StringTo<any> | string, msg?: string) => any;

  child(context: StringTo<any>): BunyanLike;
}
