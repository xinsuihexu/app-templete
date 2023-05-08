# 混合app模板
一套代码,可编译为h5 + android + ios 

## 技术栈
vue3 + ts + ionic + cordova + vant3

## 安装

```bash
npm install
```

## h5运行

```bash
npm serve
```

## h5构建打包

```bash
npm build
```

## android 构建打包 [android环境安装指南](https://ionicframework.com/docs/developing/android)

## ios 构建打包 [ios环境安装指南](https://ionicframework.com/docs/developing/ios)

### 帮助文档
- [《开发规范》](./docs/rule.md)
- [《Git使用规范》](./docs/git.md)

### 生态文档
- [vue3](https://cn.vuejs.org/guide/introduction.html)
- [vue-cli](https://cli.vuejs.org/config/)
- [cordova](https://cordova.apache.org/docs/en/latest/)
- [ionic](https://ionicframework.com/docs/)
- [pinia](https://pinia.esm.dev/)
- [Vue Router](https://github.com/vuejs/vue-router)
- [axios](https://www.axios-http.cn/docs/intro)
- [vant](https://vant-ui.github.io/vant/#/zh-CN/home)
- [less](https://less.bootcss.com/)

### vscode拓展
- eslint
- csscomb
- volar

### 注意

- 启动白屏以及启动屏全屏展示处理

在 android/app/src/main/res/values/styles.xml 文件中 更改以下内容：

```javascript
<style name="AppTheme.NoActionBarLaunch" parent="AppTheme.NoActionBar">
    <item name="android:background">@drawable/splash</item>
</style>
```

至

```javascript
<style name="AppTheme.NoActionBarLaunch" parent="AppTheme.NoActionBar">
    <item name="android:background">@drawable/splash</item>
    <item name="android:windowNoTitle">false</item>
    <item name="android:windowActionBar">false</item>
    <item name="android:windowFullscreen">true</item>
    <item name="android:windowContentOverlay">@null</item>
    <item name="android:windowIsTranslucent">true</item>
    <item name="android:windowTranslucentStatus">false</item>
    <item name="android:windowTranslucentNavigation">true</item>
    <item name="android:windowLayoutInDisplayCutoutMode">shortEdges</item>
    <item name="android:windowDrawsSystemBarBackgrounds">false</item>
    <item name="android:navigationBarColor">@android:color/transparent</item>
    <item name="android:statusBarColor">@android:color/transparent</item>
</style>
```

- 开启定位

在 android/app/src/main/res/AndroidManifest.xml 文件中添加如下权限

```javascript
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-feature android:name="android.hardware.location.gps" />
```

- android-studio 生成签名命令： keytool -list -v -keystore xb-benenet-app.jks (本地目录下生成的jks)

- cordova-plugin-alipay-v2 支付宝app支付

```javascript
// 若android gradle 的版本过高,比如7.3.3,则修改如下
// 将 /node_modules/cordova-plugin-alipay-v2/src/android/lib/alipay.gradle 中的 compile 改为 implementation
```



