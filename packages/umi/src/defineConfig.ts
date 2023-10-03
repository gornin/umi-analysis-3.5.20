// @ts-ignore
import { IConfigFromPlugins } from '@@/core/pluginConfig';
import { IConfig } from '@umijs/types';

// 该文件定了defineConfig函数，用于去定义一些自定义配置，
// 它直接返回了config对象，并提供了配置参数的类型提示。
// IConfig types is prior to IConfigFromPlugins in the same key.
export function defineConfig(
  config: IConfigFromPlugins | IConfig,
): IConfigFromPlugins | IConfig {
  return config;
}
