# Log Slinger
Simple JavaScript logger.

[![Build Status][travis-badge]][travis-badge-url]

[travis-badge]: https://travis-ci.com/bakesaled/log-slinger.svg?branch=master
[travis-badge-url]: https://travis-ci.com/bakesaled/log-slinger

[![Coverage Status](https://coveralls.io/repos/github/bakesaled/log-slinger/badge.svg?branch=master&kill_cache=1)](https://coveralls.io/github/bakesaled/log-slinger?branch=master)

## Installation

Run `npm install @bakesaled/log-slinger`

## Usage

```javascript
const logger = new LogSlinger(LogLevel.Debug);

logger.debug('Pecan Pie');
```