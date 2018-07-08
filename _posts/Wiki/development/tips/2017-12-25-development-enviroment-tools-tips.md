---
layout: post
title: "开发环境小Tips"
tags: 开发环境
type: Tech
category: Wiki
author: "Zerol"
created: 2017-12-25 12:50:40 +0800
isHide: false
isUseGitComment: true
isUseDisqusComment: false
---

### Mac开发环境配置笔记
* 安装homebrew
```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
* 安装nodejs
``` bash
brew update
brew install node
```
* 安装git
```bash
brew install git
```
* 配置git
```bash
git config --global user.name "Your Name Here"
git config --global user.email "your_email@youremail.com"
```
* 查看homebrew的安装列表
```bash  
brew list
```
* git自动补全

``` bash
先安装bash-completion brew install bash-completion
将下面的配置添加到~/.bash_profile若没有该文件则创建一个
if [ -f `brew --prefix`/etc/bash_completion ]; then
. `brew --prefix`/etc/bash_completion
fi
```

* git 自动添加不同文件夹的不同配置

借助 [Conditional includes](https://git-scm.com/docs/git-config#_conditional_includes)
```base
Global config ~/.gitconfig

[user]
    name = name
    email = email

[includeIf "gitdir:~/work/"]
    path = ~/work/.gitconfig

Work specific config ~/work/.gitconfig
[user]
    email = work email
```

### 工具版本管理
* [node版本管理](https://github.com/creationix/nvm)
* [npm包源管理](https://github.com/Pana/nrm)
* [命令行工具](https://github.com/square/maximum-awesome)
* [java版本管理](https://github.com/gcuisinier/jenv)
* [python版本管理](https://github.com/pyenv/pyenv)

