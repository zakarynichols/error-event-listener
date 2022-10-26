# Error Event Listener

Type-safe way to listen for all exceptions/rejections in the browser and render an optional fallback ui when a fatal error occurs.

[![codecov](https://codecov.io/gh/zakarynichols/error-event-listener/branch/master/graph/badge.svg)](https://codecov.io/gh/zaknicholsdev/error-event-listener)

![Workflow](https://github.com/zakarynichols/error-event-listener/actions/workflows/ci-cd.yml/badge.svg?branch=master)

The main motivation for this project was to listen to exceptions/rejections outside React and optionally provide a fallback ui to prevent a user from proceeding further with the app in a fatal state.

_Note_ - This can be used in any application, but React is a prime example to showcase the listeners usage when a fatal error occurs outside its render tree.
