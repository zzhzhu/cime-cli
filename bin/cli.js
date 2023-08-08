#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const package = require('../package.json');
// 从github上下载目录
const downloadGitRepo = require('download-git-repo');
const path = require('path');
const ora = require('ora')
const loading = ora('正在下载模版...')

program.version(`v${package.version}`);

let templates = [{
        name: 'cime-admin-react',
        value: 'https://github.com:guojiongwei/webpack5-react-ts'
    },
    {
        name: 'cime-admin-react-electron',
        value: 'https://github.com:guojiongwei/react18-vite2-ts'
    },
    {
        name: 'cime-admin-vue',
        value: 'https://github.com:guojiongwei/dumi2-demo'
    }
];

program
    .command('create')
    .description('创建模版')
    .action(async () => {
        let {
            name
        } = await inquirer.prompt({
            type: "input",
            name: 'name',
            message: '请输入项目名称：'
        })
        let {
            template
        } = await inquirer.prompt({
            type: 'list',
            name: 'template',
            message: '请选择模版：',
            choices: templates // 模版列表
        })
        console.log('项目名称：', name);
        console.log('模版：', template);
        loading.start();

        /**
         * downloadGitRepo('项目git地址','目标文件夹',callback)
         * 默认master分支，如果需要其他分支；在git地址上添加 `#branch选择分支`
         */
        const dest = path.join(process.cwd(), name);
        downloadGitRepo(template, dest, function (err) {
            if (err) {
                loading.fail('创建模版失败：' + err.message) // 失败loading
            } else {
                loading.succeed('创建模版成功!') // 成功loading
            }
        })

    });

program.parse(process.argv);

/**
 * 优化下载模板：ora
 * 下载 npm i ora@^5.4.1 -S
 */