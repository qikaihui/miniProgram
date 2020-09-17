//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    codeInfo: {},
    x: 0,
    y: 0
  },
  toMovable () {
    wx.navigateTo({
      url: '../movable/index',
    })
  },
moveEnd (e) {
//	想让他定位到，距离左侧20px(750的图片)，通过计算，来适应不同的手机屏幕
  	var xNumLeft = 20 / 750 * wx.getSystemInfoSync().windowWidth;
//	想让他定位到，距离右侧20px(750的图片)，自身宽度为50在加上20，计算出x为680
  	var xNumRight = 680 / 750 * wx.getSystemInfoSync().windowWidth;
  	var x = e.changedTouches[0].pageX;
  	var average = 375 / 750 * wx.getSystemInfoSync().windowWidth;
//	获取移动到的y轴，手指松开后，直接上图标定位到当前y轴
  	var yNum = e.changedTouches[0].pageY;
  	console.log(yNum)
  	if (x < average) {
  		this.setData({
  			x: xNumLeft,
			y: yNum
  		})
  	} else {
  		this.setData({
  			x: xNumRight,
			y: yNum
  		})
  	}
},
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../logs/logs'
    })
  },
  jump () {
    wx.navigateTo({
      url: '../page1/index',
      // url: 'https://www.baidu.com',
    })
  },
  alert () {
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // })
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    // wx.showLoading({
    //   title: '加载中',
    // })
    
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000)
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success (res) {
        console.log(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
  scanCode () {
    wx.scanCode({
      success: (result) => {
        this.codeInfo = result
        this.setData({
          codeInfo: result.result
        })
        wx.navigateTo({
          url: result.result,
        })
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // wx.setNavigationBarTitle({
    //   title: '当前页面'
    // })
    // wx.setNavigationBarColor({
    //   frontColor: '#ffffff',
    //   backgroundColor: '#00ff00',
    //   animation: {
    //     duration: 400,
    //     timingFunc: 'linear'
    //   }
    // })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
