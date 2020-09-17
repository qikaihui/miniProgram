// pages/page1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  jump () {
    wx.navigateTo({
      url: '../webview/index',
    })
  },
  getInfo() {
    wx.getSystemInfo({
      success (res) {
        console.log('品牌', res.brand)
        console.log('设备型号', res.model)
        console.log('设备像素比', res.pixelRatio)
        console.log('屏幕宽度，单位px', res.screenWidth)
        console.log('屏幕高度，单位px', res.screenHeight)
        console.log('可使用窗口宽度，单位px', res.windowWidth)
        console.log('可使用窗口高度，单位px', res.windowHeight)
        console.log('状态栏的高度，单位px', res.statusBarHeight)
        console.log('微信设置的语言', res.language)
        console.log('微信版本号', res.version)
        console.log('操作系统及版本', res.system)
        console.log('客户端平台', res.platform)
        console.log('用户字体大小（单位px）', res.fontSizeSetting)
        console.log('客户端基础库版本', res.SDKVersion)
        console.log('设备性能等级（仅 Android 有效）', res.benchmarkLevel)
        console.log('允许微信使用相册的开关（仅 iOS 有效）', res.albumAuthorized)
      }
    })
    // wx.updateWeChatApp({
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})