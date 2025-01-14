import { CronJob } from 'cron';
import { iSvcBullionsPriceSync } from 'src/services';

const { TZ } = process.env;

export const iHistoricalPriceSyncCronJob = CronJob.from({
  /** 需要手动启动 */
  start: false,
  timeZone: TZ,
  // 每天从午夜（0点）开始，每隔三小时执行一次
  cronTime: '0 0 0/3 * * *',
  onTick: iSvcBullionsPriceSync,
});
