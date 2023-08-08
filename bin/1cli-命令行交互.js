#!/usr/bin/env node

// console.log('yq-cli----');
// 在使用cli脚手架的时候，经常会通过脚手架执行一些命令，比如--version, --help来查看版本和帮助信息, 以及常见的create或init命令来触发创建项目模版交互，如果自己写的话会比较耗费时间，这个时候可以直接用社区已经封装好的commander来完成这件事，先进行安装：

const program = require('commander')
const package = require('../package.json')

// 定义当前版本
program.version(`v${package.version}`)

// 解析用户执行命令传入参数
program.parse(process.argv)

/**
 * 测试：
 * 终端输入：my-cli --version
 * v1.0.0
 */