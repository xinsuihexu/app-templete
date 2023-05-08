# Git 使用规范

## 分支命名

### 分支主要分为三种，版本分支、特性分支、BUG分支：

- 版本分支 一般无需管理，主要有：master, release, dev；
- 特性分支 新需求时启用此分支，命名为： f_{username}\_{desc}\_${date:yyyyMMdd}
- BUG分支 当有 BUG 时启用此分支，命名为： b_{username}\_{desc}\_${date:yyyyMMdd}

### 命名最好简洁易懂

建议使用下划线

```
b_xuanmo_fixTmPropsTooltipBug_20171211   # bad
b_xuanmo_tianmao_props_tooltip_20171211  # good
```

## 开发流程

从 `master` 新切一个分支出来， 比如 `f_xuanmo_login_20210510`

- 开发完毕后，将代码合并至 dev 分支, 
- 测试没问题后，将开发分支合并到 release 分支，进行最后的测试

最后测试没问题后方可提交，将开发分支合并到 `master` 的 Merge Request。 给有合并 master 权限的同学 Code Review 通过后合并到 master 完成上线。

## commit信息

- feat：新功能
- fix：修补某功能的bug
- art：重构某个功能
- opt: 优化构建工具或运行时性能
- style：仅样式改动
- doc：仅文档新增/改动

例如：

```
git commit -m "fix: 修复******"
```

## demo示范
```
git checkout master
git pull --rebase
git checkout -b f_xuanmo_home_20220222
git add .
git commmit -m "feat: 首页开发"
git push -u origin f_xuanmo_home_20220222
```

## git可视化学习
[在线地址](https://learngitbranching.js.org/?locale=zh_CN)

