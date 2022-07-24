// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //键盘输入电话号码显示登陆颜色
       loginBtnstate:true,
    //获取电话号码输入
    usernum:'',
    password:'',
    flag:0
  },

  //电话号码输入事件
  usernuminput:function(e){
    if(e.detail.value!=0){
      var usernum=e.detail.value
      }
      else{
       var usernum=''
      }
       if(usernum!=''){
         this.setData({
          usernum:usernum
         })
         if(this.data.password!=''){
          this.setData({
            loginBtnstate:false
          })
        }
       }
       else{
        this.setData({
          usernum:'',
          loginBtnstate:true
        })
       }
  },
  //密码输入
  passwordinput:function(e){ 
    if(e.detail.value!=0){
    var password=e.detail.value
    }
    else{
     var password=''
    }
    if(password!=''){
      this.setData({
        password:password
      })
      if(this.data.usernum!=''){
        this.setData({
          loginBtnstate:false
        })
      }
    }
    else{
      this.setData({
        password:'',
        loginBtnstate:true
      })
     }
  },
  // {
  //      userlist:[
  //        {
  //      usernum:"123",
  //      password:"123"
  //    }
  //   ]
  // },
  //登录事件
  login:function(e){
    var usernum=this.data.usernum
    var password=this.data.password
    var then=this
      //给后台发送数据，账号，密码，确认密码
  wx.request({
    url: 'http://localhost:9008/login', //仅为示例，并非真实的接口地址
    data:{
      usernum,
      password
   
    },
    method:'POST',
    success (res) {  
      if (res.data.code == 200) {       
      wx.showToast({
        title: '登录成功',
        duration:2000,
        success:function(){
          var flag=1
          then.setData({
            flag:flag
          })
          wx.setStorage({
            key:"flag",
            data:{flag:flag}
          })
          setTimeout(() => {
            wx.switchTab({
                            url: '/pages/order/order',
                          })
          },1200);
        }
           })
      }
      if (res.data.code == 100) {       
        wx.showToast({
          title: '账号未注册',
          duration:2000,
          image:'/img/x.png'
        })
  }  if (res.data.code == 300) {       
    wx.showToast({
      title: '输入错误',
      duration:2000,
      image:'/img/x.png'
    })
}
  }

  })    
  },
  //进入注册页面
  relogin:function(e){
    wx.navigateTo({
      url: '/pages/relogin/relogin',
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