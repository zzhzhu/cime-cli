#!/usr/bin/env node

// 1  完成 my-cli create
// 2  第二步是选择模版
const program = require('commander');
// 接收命令行输入内容
const inquirer = require('inquirer');
const package = require('../package.json');

// 定义当前版本
program.version(`v${package.version}`)

let templates = [
    {
        name: 'webpack5-react-ts',
        value: 'https://github.com:guojiongwei/webpack5-react-ts'
      },
      {
        name: 'react18-vite2-ts',
        value: 'https://github.com:guojiongwei/react18-vite2-ts'
      },
      {
        name: 'dumi2-demo',
        value: 'https://github.com:guojiongwei/dumi2-demo'
      }
]

program
    .command('create')
    .description('创建模版')
    .action(async () => {
        let {name} = await inquirer.prompt({
            type:"input",
            name:'name',
            message:'请输入项目名称：'
        })
        let { template } = await inquirer.prompt({
            type: 'list',
            name: 'template',
            message: '请选择模版：',
            choices: templates // 模版列表
        })
        console.log('项目名称：',name);
        console.log('模版：', template)
    });

program.parse(process.argv);