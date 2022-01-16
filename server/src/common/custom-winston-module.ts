import { format, transports } from 'winston';
import { utilities, WinstonModule } from 'nest-winston';
import 'winston-daily-rotate-file';
import * as dayjs from 'dayjs';
import * as fs from 'fs';
import * as path from 'path';

const { combine, label, ms, printf } = format;

// 로그 출력 포맷 설정
const timeStamp = () => dayjs().format('YYYY-MM-DD HH:mm:ss');

const logFormat = printf(({ level, context, message, stack }) => {
  return `${timeStamp()}  [${level}] : ${stack ? stack : message} (${context})`;
});

// 로그 파일 저장
const logDir = __dirname + '/../../logs';
const logRetentionPeriod = 30;

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const consoleTransport =
  process.env.NODE_ENV !== 'production'
    ? new transports.Console({
        format: combine(utilities.format.nestLike()),
      })
    : null;

const dailyRotateFileOptions = {
  datePattern: 'YYYY-MM-DD',
  maxFiles: logRetentionPeriod,
  json: false,
  zippedArchive: true,
};

const infoTransport = new transports.DailyRotateFile({
  ...dailyRotateFileOptions,
  level: 'info',
  dirname: logDir + '/info',
  filename: 'TinCase-%DATE%.log',
});

const warnTransport = new transports.DailyRotateFile({
  ...dailyRotateFileOptions,
  level: 'warn',
  dirname: logDir + '/warn',
  filename: 'TinCase-%DATE%.warn.log',
});

const errorTransport = new transports.DailyRotateFile({
  ...dailyRotateFileOptions,
  level: 'error',
  dirname: logDir + '/error',
  filename: 'TinCase-%DATE%.error.log',
  handleExceptions: true,
});

export const CustomWinstonModule = WinstonModule.forRoot({
  format: combine(logFormat, ms()),
  transports: [infoTransport, warnTransport, errorTransport, consoleTransport],
});
