// 引用百度地图微信小程序JSAPI模块 
var bmap = require('../../utils/bmap-wx.min.js'); 

var wxMarkerData = []; 
Page({ 
    data: { 
        markers: [], 
        latitude: '', 
        longitude: '', 
        rgcData: {} 
    }, 
    onLoad: function() { 
        var that = this; 
        // 新建百度地图对象 
        var BMap = new bmap.BMapWX({ 
            ak: '32eqS7Wi7Gl6vdNRE7pixqpEytbNijBm' 
        }); 
        var fail = function(data) { 
            console.log(data) 
        }; 
        var success = function(data) { 
            wxMarkerData = data.wxMarkerData; 
            that.setData({ 
                markers: wxMarkerData 
            }); 
            that.setData({ 
                latitude: wxMarkerData[0].latitude 
            }); 
            that.setData({ 
                longitude: wxMarkerData[0].longitude 
            }); 
        } 
        // 发起geocoding检索请求 
        BMap.geocoding({ 
            address: "成都市成都大学", 
            fail: fail, 
            success: success, 
            iconPath: '/img/marker_red.png', 
            iconTapPath: '/img/marker_red.png' 
        }); 
    }, 
})