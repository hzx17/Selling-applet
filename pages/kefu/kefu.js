// pages/contact/contact.js
const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';

  msgList = [{
      speaker: 'server',
      contentType: 'text',
      content: '我是客服'
    },
    {
      speaker: 'customer',
      contentType: 'text',
      content: '我是顾客...'
    }
  ]
  that.setData({
    msgList,
    inputVal
  })
}

/**
 * 计算msg总高度
 */
function calScrollHeight(that, keyHeight) {
  var query = wx.createSelectorQuery();
  query.select('.scrollMsg').boundingClientRect(function(rect) {
  }).exec();
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    talk_scroll:0,
    send_time:[],
    // 客服
    kefu:[],

    input_value:''
  },
//发送事件
send(){
  var input  = this.data.input_value
  var obj = {weizhi:'right',value:input}
  var talk_scroll=this.data.talk_scroll
  var send_time=this.data.send_time
  //获取发送时间
  var myDate=new Date();
  var mytime =myDate.toLocaleTimeString();
  var mytimes=this.data.send_time
  mytimes.push(mytime)

  var arr = this.data.kefu
    arr.push(obj)
    var then = this
    then.setData({
      send_time:mytimes
    })
    wx.request({
     url: 'http://openapi.turingapi.com/openapi/api/v2', //仅为示例，并非真实的接口地址
     data:{
       "reqType":0,
         "perception": {
             "inputText": {
                 "text": input
             }
         },
         "userInfo": {
             "apiKey": "ef5f4b9ee21c5d284a4467c73da3fb3a",
             "userId": "13425590660"
         }
     },
     method:'POST',
     success (res) {          
    var obj1= {weizhi:'left',value:res.data.results[0].values.text}
      arr.push(obj1)
      var myDate=new Date();
  var mytime =myDate.toLocaleTimeString();
  var mytimes=then.data.send_time
  mytimes.push(mytime)
       then.setData({
         input_value:'',
         kefu:arr,
         talk_scroll:then.data.talk_scroll+100,
  })
     }
   })
   console.log(send_time)
  },
input(e){
    this.setData({
      input_value:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 获取聚焦
   */
  focus: function(e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function(e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function(e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });


  },

  /**
   * 退回上一页
   */
  toBackClick: function() {
    wx.navigateBack({})
  }

})

