// pages/relogin/relogin.js
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
      repassword:''
  },

  //电话号码输入事件
  usernuminput:function(e){
    if(e.detail.value!=0){
      var usernum=e.detail.value
      this.setData({
        usernum:usernum
       })
       if(this.data.password!=''&&this.data.repassword!=''){
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
      if(this.data.usernum!=''&&this.data.repassword!=''){
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
  //重新输入
  repasswordinput:function(e){ 
    if(e.detail.value!=0){
    var repassword=e.detail.value
    }
    else{
     var repassword=''
    }
    if(repassword!=''){
      this.setData({
        repassword:repassword
      })
      if(this.data.usernum!=''&&this.data.password!=''){
        this.setData({
          loginBtnstate:false
        })
      }
    }
    else{
      this.setData({
        repassword:'',
        loginBtnstate:true
      })
     }
  },

  //注册事件
  relogin:function(e){
     var usernum=this.data.usernum
     var password=this.data.password
     var repassword=this.data.repassword
   if(password !=repassword){
    wx.showToast({
           title: '密码不一致',
           duration:2000,
           image:'/img/x.png'
         })
   }
   else{
     //给后台发送数据，账号，密码，确认密码
  wx.request({
    url: 'http://localhost:9008/register', //仅为示例，并非真实的接口地址
    data:{
      usernum,
      password,
      repassword
    },
    method:'POST',
    success (res) {  
      if (res.data.code == 200) {       
      wx.showToast({
        title: '注册成功',
        duration:2000,
        success:function(){
          setTimeout(() => {
            wx.navigateTo({
              url: '/pages/login/login',
            })
          },1200);

        }
           })
      }
      if (res.data.code == 100) {       
        wx.showToast({
          title: '账号已注册',
          duration:2000,
          image:'/img/x.png'
        })
  }
  }

  })
  }

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