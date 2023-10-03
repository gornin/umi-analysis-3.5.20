import { IServiceOpts, Service as CoreService } from '@umijs/core';
import { dirname } from 'path';

// 内置服务
class Service extends CoreService {
  constructor(opts: IServiceOpts) {
    process.env.UMI_VERSION = require('../package').version;
    process.env.UMI_DIR = dirname(require.resolve('../package'));

    // Service继承了CoreService，
    // 在实例化的同时加载了 @umijs/preset-built-in presets，
    // 和 ./plugins/umiAlias plugins。
    super({
      ...opts,
      // presets: 同 plugins 配置，用于配置额外的 umi 插件集。
      presets: [
        require.resolve('@umijs/preset-built-in'),
        ...(opts.presets || []),
      ],
      // plugins：配置额外的 umi 插件。
      plugins: [require.resolve('./plugins/umiAlias'), ...(opts.plugins || [])],
    });
  }
}

export { Service };
