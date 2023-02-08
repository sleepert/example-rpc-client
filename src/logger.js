const { configure, getLogger, addLayout } = require("log4js");

const logger = getLogger("rpc-client");
logger.level = process.env.LOG_LEVEL || "info";

addLayout('json', function(config) {
  return function(logEvent) { return JSON.stringify(logEvent) + config.separator; }
});

configure({
  appenders: { extensions: { type: "console"} },
  categories: { default: { appenders: ["extensions"], level: logger.level } },
});

module.exports = logger;