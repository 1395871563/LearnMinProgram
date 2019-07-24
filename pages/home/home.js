// pages/home/home.js
// getApp()获取App()产生的示例对象
const app=getApp()
//通过示例对象来获取全局数据
const name=app.globalData.name
const age=app.globalData.age

//注册一个页面
//页面也有自己的生命周期函数
Page({
  data:{
    // 2.初始化一些数据
    message:"哈哈哈",
    list:[]
  },
  handleGetUserInfo: function(event){
    console.log(event)
  },
  // ----1.监听页面的生命周期函数
  // 页面被加载出来
  onLoad(){
    console.log("onLoad")
    const _this=this;
    wx.request({
      // 1.发送网络请求，从服务器获取数据
      url: 'http://123.207.32.32:8000/recommend',
      // 箭头函数中的this一层层向上找,直到找到this
      // success:(res)=>{
      //   console.log(res)
      //   const data=res.data.data.list;
      //   this.setData({
      //     list:data,
          
      //   })
     
      // }
      success(res) {
        const data = res.data.data.list;
        _this.setData({
          list:data 
        })
      },
    })
  },
  // 页面显示出来时
  onShow() {
    console.log("onShow")
  },
  // 页面初次渲染完成时
  onReady(){
    console.log("onReady")
  },
//  当页面隐藏起来时
  onHide(){
    console.log("onHide")
  },
  onUnLoad(){
    console.log("onUnLoad")
  },
  // 3.监听wxml中的一些事件
  handleViewClick(){
    console.log("哈哈哈被点击了")
  },
  // -----4.其它事件-----
  // 监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom(){
    console.log('页面滚动到了底部')
  },
  // 监听下拉刷新的事件
  onPullDownRefresh(){
    console.log('下拉刷新的事件')
  }
})