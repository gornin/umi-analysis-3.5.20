import { chalk, yParser } from '@umijs/utils';
import initWebpack from './initWebpack';
import { Service } from './ServiceWithBuiltIn';
import getCwd from './utils/getCwd';
import getPkg from './utils/getPkg';

const args = yParser(process.argv.slice(2));

(async () => {
  try {
    process.env.NODE_ENV = 'development';
    // 初始化了webpack
    // Init webpack version determination and require hook
    initWebpack();

    // 新建了一个Service实例并执行service.run()
    const service = new Service({
      cwd: getCwd(),
      pkg: getPkg(process.cwd()),
    });
    // packages/core/src/Service/Service.ts
    await service.run({
      name: 'dev',
      args,
    });

    // 同时监听了结束线程的操作并使用service实例来结束线程
    let closed = false;
    // kill(2) Ctrl-C
    process.once('SIGINT', () => onSignal('SIGINT'));
    // kill(3) Ctrl-\
    process.once('SIGQUIT', () => onSignal('SIGQUIT'));
    // kill(15) default
    process.once('SIGTERM', () => onSignal('SIGTERM'));

    function onSignal(signal: string) {
      if (closed) return;
      closed = true;

      // 退出时触发插件中的onExit事件
      service.applyPlugins({
        key: 'onExit',
        type: service.ApplyPluginsType.event,
        args: {
          signal,
        },
      });
      process.exit(0);
    }
  } catch (e) {
    console.error(chalk.red(e.message));
    console.error(e.stack);
    process.exit(1);
  }
})();
