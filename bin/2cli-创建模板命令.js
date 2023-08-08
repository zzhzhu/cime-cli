#!/usr/bin/env node

// 1  完成 my-cli create
// 2  第二步是选择模版
const program = require('commander');
// 接收命令行输入内容
const inquirer = require('inquirer');
const package = require('../package.json');

// 定义当前版本
program.version(`v${package.version}`)

program
    .command('create')
    .description('创建模版')
    .action(async () => {
        /**
         * type: 问题类型，可以是 input（输入框）、list（列表选择框）、confirm（二选一选择框）等
         * name: 问题名称，用于标识答案对象中对应的属性名
         * message: 问题描述，将会作为问题提示信息展示给用户
         * choices: 选项列表，只有当问题类型为 list 时才需要提供
         */
        const {
            name
        } = await inquirer.prompt({
            type: 'input', // input list confirm 
            name: 'name', // 问题名称
            message: '请输入项目名称：' // 问题描述
        })
        console.log("项目名称：", name)
    });

program.parse(process.argv);