// app.js
const AV = require('./utils/av-weapp-min');
AV.init({
  appId: 'pacfoEwkPKA3qzdCamywmtZr-gzGzoHsz',
  appKey: '4IgctLXUfPpkFwIFfPiyugVv',
  // 请将 xxx.example.com 替换为你的应用绑定的自定义 API 域名
  serverURLs: "https://pacfoewk.lc-cn-n1-shared.com",
});
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
