// pages/my/my.js
Page({
     
  /**
   * 页面的初始数据
   */
  data: {
    list: ['/img/list1.png','/img/list2.png','/img/list3.png','/img/list4.png','/img/list5.png','/img/list6.png','/img/list7.png'],
    text: ['优惠卷','权益卡','余额','收货地址','生日礼物','收藏','浏览记录'],
    kinds:['/img/kinds1.png','/img/kinds2.png','/img/kinds3.png','/img/kinds4.png'],
    text2:['联系客服','帮助中心','关于花礼','设置']
  },
//绑定点击登陆事件
login: function(){
  wx.navigateTo({
    url: '/pages/login/login',
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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