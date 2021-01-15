import pino from "pino"

const isDev = process.env.NODE_ENV === 'development'

export const logger = pino({
  name: process.env.npm_package_name,
  level: isDev ? "debug" : "info",
  ...(isDev && {
    prettyPrint: {
      colorize: true,
      ignore: "hostname,pid",
      translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
    },
  }),
})
