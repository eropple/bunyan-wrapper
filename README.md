# `@eropple/bunyan-wrapper` #
You should use [Bunyan](https://npmjs.com/package/bunyan) for logging in your
NodeJS apps. But, for some mystifying reason, there are a lot of people out
there who don't. To this end, I needed a class that could let me wrap an
arbitrary "logger-like" object in the Bunyan API so that I can pass logs to
Bunyan all willy-nilly (which, for those interested, is the correct way to pass
logs) while not blowing things up spectacularly for those using other methods
of logging.

Just pass some kind of logger (it's tested with Bunyan and `console`) to the
`bunyanize` method. If it's a real Bunyan logger it'll just pass it back to you,
or optionally you can pass an object with fields to add to a child logger. There
are tests to demonstrate how it works.

Have fun. Use Bunyan.
