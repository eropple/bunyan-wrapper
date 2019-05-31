export interface LoggerLike {
  trace: (msg: any) => any;
  debug: (msg: any) => any;
  info: (msg: any) => any;
  error: (msg: any) => any;
}
