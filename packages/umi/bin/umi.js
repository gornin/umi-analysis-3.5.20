#!/usr/bin/env node

require('v8-compile-cache');

const resolveCwd = require('@umijs/deps/compiled/resolve-cwd');

/**
 * umi源码是多包管理，核心入口库是umi。
 * umi提供了umi dev来启动项目，而命令的注册来自bin，找到packages/umi/bin文件夹
 */
// name: umi
// bin: {"umi": "bin/umi.js"}
const { name, bin } = require('../package.json');
const localCLI = resolveCwd.silent(`${name}/${bin['umi']}`);
// TODO: what?
if (!process.env.USE_GLOBAL_UMI && localCLI && localCLI !== __filename) {
  const debug = require('@umijs/utils').createDebug('umi:cli');
  debug('Using local install of umi');
  require(localCLI);
} else {
  // 该文件又加载了../lib/cli，该路径是编译后的压缩路径，所以应该找到packages/umi/src/cli.ts
  require('../lib/cli');
}
