// 注册小程序示例
App({

  //小程序初始化完成时
  onLaunch: function () {
    // 网络请求
    // 获取用户信息
  },

  //小程序显示出来时
  onShow: function (options) {
    //判断小程序的进入场景
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1011:
        break;
    }

    //2.获取用户信息,并且获取到用户信息后,将用户的信息传递给服务器
    wx.getUserInfo({
      success:function(res){
        console.log(res)
      }
    })
    
  },

  //小程序界面隐藏时
  onHide: function () {
    
  },

  //小程序发生错误时
  onError: function (msg) {
    
  },
  // 定义全局数据,在其它地方都可以使用
  globalData:{
    name:"上帝",
    age:23

  }
})
