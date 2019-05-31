import * as Bunyan from "bunyan";
import BunyanBlackhole from "bunyan-blackhole";

import { bunyanize, BunyanWrapper } from "./index";

describe('bunyanize', () => {
  it('should wrap the console', () => {
    expect(bunyanize(console)).toBeInstanceOf(BunyanWrapper);
  });

  it('should not wrap Bunyan loggers', () => {
    const a = Bunyan.createLogger({ name: "foo" });
    expect(bunyanize(a)).toBe(a);
  });

  it('should add a component field to real Bunyan loggers when told to', () => {
    const a = Bunyan.createLogger({ name: "foo" });
    const b = bunyanize(a, { component: "beepboop", other: "field" });
    expect(bunyanize(b).constructor).toBe(a.constructor);
    expect((b as Bunyan).fields.component).toBe("beepboop");
    expect((b as Bunyan).fields.other).toBe("field");
  });

  it('should not wrap Bunyan blackholes', () => {
    const a = BunyanBlackhole('foo');
    expect(bunyanize(a)).toBe(a);
  });
});
