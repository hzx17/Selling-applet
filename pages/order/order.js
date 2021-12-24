// pages/order/order.js

Page({  
  /**
   * 页面的初始数据
   */
  data: {
    background: ['https://img.tuguaishou.com/ips_templ_preview/1f/77/2c/lg_4469126_1627882309_6107834537ab8.jpg!w1024_w?auth_key=2269095301-0-0-06e4a64bc37b3accd7e755efeb7727df', 'http://img.tuguaishou.com/ips_templ_preview/f1/dc/0e/lg_3725812_1614915037_6041a5dd0415b.jpg!l800?auth_key=2257516800-0-0-32f314123b371fdde3d8aee489ef03f1', 'http://img.tuguaishou.com/ips_templ_preview/bc/7a/20/lg_3769008_1614920432_6041baf0d4765.jpg!l800?auth_key=2257516800-0-0-1a57cd08c374b915a321a196054a7987'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular:true,
    active: 0,
    selectcolor:0,
    listview:'list0',
    listheight:[],
    show_shop:false,
    total_num:0,
    total_price:0,
    shop_list:[],
    min:'100元起送',
    talk_scroll:0,
    send_time:[],
    // 客服
    kefu:[],
    flag:0,

    input_value:'',
    shopimglist:['https://pic8.58cdn.com.cn/mobile/big/n_v22b9c094e680142de8cb1475b1488110d.jpg?srotate=1&etspars=T1rZKLjUVT2M8jlCq6Je3IBuveCqI%2B4dO1dSxWmOyw%2BzI2EnBroA%2FyWVIYrvMqQV','https://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20200203/bdc57831d3254cc99ff9dbee5a270465.jpeg'],
    eva:['好评（1008）','味道好（75）','配送快','价格实惠（45）','差评（31）'],
    goods: [
      {
          "name": "双拼套餐",
          "type": -1,
          "foods": [
          
            

{
"name": "秘制烤鸡腿堡",
"price": 35,
"brand": "乡村基",
"Count": 0,
"type": "全餐",
"icon": "http://www.cnhls.com/Upload/img/taocan/主食/秘制烤鸡腿堡-17115577548.jpg"
},
          ]
      },
      {
          "name": "撒粉炸鸡",
          "type": 2,
          "foods": [
              {
                  "name": "鳕鱼堡",
                  "price": 25,
                  "brand": "乡村基",
                  "Count": 0,
                  "type": "全餐",
                  "icon": "http://www.cnhls.com/Upload/img/taocan/主食/鳕鱼堡-17115545074.jpg",
              },  {
              "name": "黄金脆皮鸡",
              "price": 23,
              "brand": "乡村基",
              "Count": 0,
              "type": "全餐",
              "icon": "http://www.cnhls.com/Upload/img/taocan/主食/密汁手扒鸡-17115461573.jpg"
          },
          {
    "name": "辣味鸡肉卷",
    "price": 13,
    "brand": "乡村基",
    "Count": 0,
    "type": "全餐",
    "icon": "http://www.cnhls.com/Upload/img/taocan/主食/辣味鸡肉卷-17115657029.jpg",
},  
        
              
          ]
      },
      {
        "name": "自制套餐",
        "type": 2,
        "foods": [
            {
                "name": "牛气冲天堡套餐",
                "price": 44,
                "brand": "乡村基",
                "Count": 0,
                "type": "全餐",
                "icon": "http://www.cnhls.com/Upload/img/taocan/套餐/牛气冲天堡套餐-17094453265.jpg",
            },  {
              "name": "香辣鸡腿堡套餐",
              "price": 44,
              "brand": "乡村基",
              "Count": 0,
              "type": "全餐",
              "icon": "http://www.cnhls.com/Upload/img/taocan/套餐/香辣鸡腿堡套餐-17094435293.jpg",
          },  {
            "name": "劲脆鲜虾堡套餐",
            "price": 44,
            "brand": "乡村基",
            "Count": 0,
            "type": "全餐",
            "icon": "http://www.cnhls.com/Upload/img/taocan/套餐/劲脆鲜虾堡套餐-17094366268.jpg",
        },
        {
          "name": "全鸡分享套餐",
          "price": 44,
          "brand": "乡村基",
          "Count": 0,
          "type": "全餐",
          "icon": "http://www.cnhls.com/Upload/img/taocan/套餐/全鸡分享套餐-17094447784.jpg",
      },  {
        "name": "泡椒牛肉饭套餐",
        "price": 24,
        "brand": "乡村基",
        "Count": 0,
        "type": "全餐",
        "icon": "http://www.csc100.com/Up/day_210928/202109281826278325.jpg",
    },  {
      "name": "川式小炒肉套餐",
      "price": 25,
      "brand": "乡村基",
      "Count": 0,
      "type": "全餐",
      "icon": "http://www.csc100.com/Up/day_210928/202109281826393102.jpg",
  },{
    "name": "番茄土豆牛肉盖饭",
    "price": 44,
    "brand": "乡村基",
    "Count": 0,
    "type": "全餐",
    "icon": "http://www.csc100.com/Up/day_210928/202109281826505448.jpg",
}, {
  "name": "经典牛排套餐",
  "price": 68,
  "brand": "乡村基",
  "Count": 0,
  "type": "全餐",
  "icon": "http://www.csc100.com/Up/day_210928/20210928182709509.jpg",
}, {
"name": "功夫鸡腿套餐",
"price": 34,
"brand": "乡村基",
"Count": 0,
"type": "全餐",
"icon": "http://www.csc100.com/Up/day_210928/202109281827342248.jpg",
}, {
"name": "川味卤肉套餐",
"price": 54,
"brand": "乡村基",
"Count": 0,
"type": "全餐",
"icon": "http://www.csc100.com/Up/day_210928/202109281830067661.jpg",
}
      
            
        ]
    },
    {
      "name": "曹氏系列",
      "type": 2,
      "foods": [
          {
              "name": "曹氏鸡腿",
              "price": 15,
              "brand": "曹氏鸭脖",
              "Count": 0,
              "type": "小食",
              "icon": "http://www.caoshiyabo.com/Uploads/202012/5fd6ccca597e6.jpg",
          }, {
            "name": "曹氏鸭腿",
            "price": 10.5,
            "brand": "曹氏鸭脖",
            "Count": 0,
            "type": "小食",
            "icon": "http://www.caoshiyabo.com/Uploads/202012/5fd6cbc44f247.jpg",
        }, {
          "name": "曹氏鸭头",
          "price": 10.5,
          "brand": "曹氏鸭脖",
          "Count": 0,
          "type": "小食",
          "icon": "http://www.caoshiyabo.com/Uploads/202012/5fd6ca30eb157.jpg",
      },
      {
        "name": "曹氏牛肉丸",
        "price": 5.5,
        "brand": "曹氏鸭脖",
        "Count": 0,
        "type": "小食",
        "icon": "http://www.caoshiyabo.com/Uploads/202012/5fd6cb395389b.jpg",
    }, {
      "name": "曹氏鱼排",
      "price": 2.5,
      "brand": "曹氏鸭脖",
      "Count": 0,
      "type": "小食",
      "icon": "http://www.caoshiyabo.com/Uploads/202012/5fd6cdb3a88be.jpg",
  }, {
    "name": "曹氏海带结",
    "price": 1.5,
    "brand": "曹氏鸭脖",
    "Count": 0,
    "type": "小食",
    "icon": "http://www.caoshiyabo.com/Uploads/202012/5fd6c70adb7dc.jpg",
}, {
  "name": "曹氏土豆片",
  "price": 2.5,
  "brand": "曹氏鸭脖",
  "Count": 0,
  "type": "小食",
  "icon": "http://www.caoshiyabo.com/Uploads/202012/5fd6c67b48a35.jpg",
}, {
"name": "曹氏木耳",
"price": 1.5,
"brand": "曹氏鸭脖",
"Count": 0,
"type": "小食",
"icon": "http://www.caoshiyabo.com/Uploads/202012/5fd6c61fd4083.jpg",
}, {
"name": "曹氏南瓜片",
"price": 1.5,
"brand": "曹氏鸭脖",
"Count": 0,
"type": "小食",
"icon": "http://www.caoshiyabo.com/Uploads/202012/5fd6c74688310.jpg",
}, {
"name": "曹氏冬瓜片",
"price": 0.5,
"brand": "曹氏鸭脖",
"Count": 0,
"type": "小食",
"icon": "http://www.caoshiyabo.com/Uploads/202012/5fd6c5857a327.jpg",
}
    
          
      ]
  },
  {
    "name": "脆皮炸鸡",
    "type": 2,
    "foods": [
        {
            "name": "麦麦脆汁鸡",
            "price": 14.5,
            "brand": "麦当劳",
            "Count": 0,
            "type": "小食",
            "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191438226276.png",
        }, {
          "name": "麦麦脆汁鸡胸",
          "price": 8.5,
          "brand": "麦当劳",
          "Count": 0,
          "type": "小食",
          "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191438226276.png",
      }, {
        "name": "麦辣鸡翅",
        "price": 17.5,
        "brand": "麦当劳",
        "Count": 0,
        "type": "小食",
        "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191433289748.png",
    },
    {
      "name": "那么大鸡排",
      "price": 7.5,
      "brand": "麦当劳",
      "Count": 0,
      "type": "小食",
      "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2016/10/201610141806169974.png",
  }, {
    "name": "麦乐鸡（5块）",
    "price": 25,
    "brand": "麦当劳",
    "Count": 0,
    "type": "小食",
    "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191433146156.png",
}, {
  "name": "麦麦脆汁鸡胸",
  "price": 18.5,
  "brand": "麦当劳",
  "Count": 0,
  "type": "小食",
  "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191555596695.png",
}, {
"name": "玉米杯",
"price": 8.5,
"brand": "麦当劳",
"Count": 0,
"type": "小食",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/10/201510282055166446.png",
}, {
"name": "薯角",
"price": 5.5,
"brand": "麦当劳",
"Count": 0,
"type": "小食",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191433067178.png",
}, {
"name": "小食分享盒",
"price": 30.5,
"brand": "麦当劳",
"Count": 0,
"type": "小食",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104191456165259.png",
}, {
"name": "苹果片",
"price": 4.5,
"brand": "麦当劳",
"Count": 0,
"type": "小食",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2019/08/201908131737148079.png",
}
  
        
    ]
},
{
  "name": "实惠小吃",
  "type": 2,
  "foods": [
      {
          "name": "美味鲜蔬杯",
          "price": 40.5,
          "brand": "麦当劳",
          "Count": 0,
          "type": "水果",
          "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2017/09/201709121712579051.png",
      }, {
        "name": "香芋派",
        "price": 9.5,
        "brand": "麦当劳",
        "Count": 0,
        "type": "小吃",
        "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2015/11/201511061801006455.png",
    }, {
      "name": "豆浆",
      "price": 2.5,
      "brand": "华莱士",
      "Count": 0,
      "type": "小吃",
      "icon": "http://www.cnhls.com/Upload/img/taocan/早餐/豆浆-17092369841.jpg",
  },
  {
    "name": "菠萝派",
    "price": 11.5,
    "brand": "麦当劳",
    "Count": 0,
    "type": "小吃",
    "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191434387453.png",
}, {
  "name": "麦旋风奥利奥原味",
  "price": 38.5,
  "brand": "麦当劳",
  "Count": 0,
  "type": "小吃",
  "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191447419769.png",
}, {
"name": "圆筒冰淇淋",
"price": 7.5,
"brand": "麦当劳",
"Count": 0,
"type": "小吃",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/05/202005270949182813.png",
}, {
"name": "鸡米花",
"price": 6.5,
"brand": "华莱士",
"Count": 0,
"type": "小吃",
"icon": "http://www.cnhls.com/Upload/img/taocan/jimihua-15100362191.jpg",
}, {
"name": "黑椒鸡块",
"price": 13.5,
"brand": "华莱士",
"Count": 0,
"type": "小吃",
"icon": "http://www.cnhls.com/Upload/img/taocan/小食/黑椒鸡块-17112917524.jpg",
}, {
"name": "油条",
"price": 2.5,
"brand": "华莱士",
"Count": 0,
"type": "小吃",
"icon": "http://www.cnhls.com/Upload/img/taocan/早餐/油条-17092326899.jpg",
}, {
"name": "香菇鸡肉粥",
"price": 8.5,
"brand": "华莱士",
"Count": 0,
"type": "小吃",
"icon": "http://www.cnhls.com/Upload/img/taocan/早餐/香菇鸡肉粥-17092467363.jpg",
}

      
  ]
},
{
"name": "加量专区",
"type": 2,
"foods": [
    {
        "name": "鸡胸肉配牛油果",
        "price": 35,
        "brand": "麦当劳",
        "Count": 0,
        "type": "汉堡",
        "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104261601503435.png",
    }, {
      "name": "原切牛排夏巴特",
      "price": 45,
      "brand": "麦当劳",
      "Count": 0,
      "type": "汉堡",
      "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/04/202104261601293757.png",
  }, {
    "name": "培根蔬萃双层牛堡",
    "price": 75,
    "brand": "麦当劳",
    "Count": 0,
    "type": "汉堡",
    "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/10/202110121628055289.png",
},
{
  "name": "双层安格柿MAX厚牛堡芝士",
  "price": 150,
  "brand": "麦当劳",
  "Count": 0,
  "type": "汉堡",
  "icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/11/202111031421407016.png",
}, {
"name": "不素之霸双层汉堡",
"price": 60,
"brand": "麦当劳",
"Count": 0,
"type": "汉堡",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/10/202010161656302443.png",
}, {
"name": "双层深海鳕鱼堡",
"price": 74,
"brand": "麦当劳",
"Count": 0,
"type": "汉堡",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191442536617.png",
}, {
"name": "双层脆鸡堡",
"price": 60.5,
"brand": "麦当劳",
"Count": 0,
"type": "汉堡",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/10/202010121523342804.png",
}, {
"name": "麦香鱼",
"price": 45,
"brand": "麦当劳",
"Count": 0,
"type": "汉堡",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191446371767.png",
}, {
"name": "双层吉士汉堡",
"price": 40,
"brand": "麦当劳",
"Count": 0,
"type": "汉堡",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191445351148.png",
}, {
"name": "原味板烧鸡腿堡",
"price": 78,
"brand": "麦当劳",
"Count": 0,
"type": "汉堡",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/03/202003191441213571.png",
}

    
]
},
{
"name": "汉堡薯条",
"type": 2,
"foods": [
  {
"name": "薯条",
"price": 10.5,
"brand": "麦当劳",
"Count": 0,
"type": "薯条",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2020/05/202005270940173811.png",
}, {
"name": "55金拱门桶-A",
"price": 58.5,
"brand": "麦当劳",
"Count": 0,
"type": "套餐",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/08/202108171124498759.png",
}, {
"name": "55金拱门桶-B",
"price": 58.5,
"brand": "麦当劳",
"Count": 0,
"type": "套餐",
"icon": "https://officialwebsitestorage.blob.core.chinacloudapi.cn/public/upload/attachment/2021/08/202108171125302094.png",
}

  
]
},
{
"name": "解渴饮料",
"type": 2,
"foods": [
  {
      "name": "双拼奶茶",
      "price": 18.5,
      "brand": "蜜雪冰城",
      "Count": 0,
      "type": "奶茶",
      "icon": "https://www.mxbc.com/media/upload/product/84/file_8.jpg",
  }, {
    "name": "红豆奶茶",
    "price": 12.5,
    "brand": "蜜雪冰城",
    "Count": 0,
    "type": "奶茶",
    "icon": "https://www.mxbc.com/media/upload/product/84/file.jpg",
}, {
  "name": "黑糖珍珠奶茶",
  "price": 20,
  "brand": "蜜雪冰城",
  "Count": 0,
  "type": "奶茶",
  "icon": "https://www.mxbc.com/media/upload/product/84/file_18.jpg",
},
{
"name": "棒打鲜橙",
"price": 8.5,
"brand": "蜜雪冰城",
"Count": 0,
"type": "果茶",
"icon": "https://www.mxbc.com/media/upload/product/84/file_15.jpg",
}, {
"name": "蓝莓果粒茶",
"price": 12,
"brand": "蜜雪冰城",
"Count": 0,
"type": "果茶",
"icon": "https://www.mxbc.com/media/upload/product/file_28.jpg",
}, {
"name": "杨枝甘露",
"price": 18,
"brand": "蜜雪冰城",
"Count": 0,
"type": "果茶",
"icon": "https://www.mxbc.com/media/upload/product/file_12.jpg",
}, {
"name": "冰糖柠檬",
"price": 11,
"brand": "蜜雪冰城",
"Count": 0,
"type": "果茶",
"icon": "https://www.mxbc.com/media/upload/product/84/file_7.jpg",
}, {
"name": "芝士奶盖红茶",
"price": 12.5,
"brand": "蜜雪冰城",
"Count": 0,
"type": "奶盖",
"icon": "https://www.mxbc.com/media/upload/product/84/file_19.jpg",
}, {
"name": "芝士奶盖绿茶",
"price": 18,
"brand": "蜜雪冰城",
"Count": 0,
"type": "奶盖",
"icon": "https://www.mxbc.com/media/upload/product/84/file_13.jpg",
}, {
"name": "芝士奶盖四季春",
"price": 11.5,
"brand": "蜜雪冰城",
"Count": 0,
"type": "奶盖",
"icon": "https://www.mxbc.com/media/upload/product/84/file_14.jpg",
}

  
]
},
{
"name": "韩式酱料",
"type": 2,
"foods": [
  {
      "name": "特辣酱炸鸡",
      "price": 25,
      "brand": "蜜哆哆",
      "Count": 0,
      "type": "炸鸡",
      "icon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.100ye.com%2Fimg1%2F5%2F147%2F590%2F11471090%2Fnewsimage%2F3d1c1c3a55ed61114fba2fb6b264d633.jpeg&refer=http%3A%2F%2Fimg1.100ye.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639559210&t=2b6b141036cffbe6cce7bd0907ea3c02.jpg",
  }, {
    "name": "探鸡韩式意大利炸鸡",
    "price": 25.5,
    "brand": "bigtoor",
    "Count": 0,
    "type": "炸鸡",
    "icon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp0.meituan.net%2Fdeal%2Ff8a539cda4a3e40baece3e71c1f87ab8604701.jpg&refer=http%3A%2F%2Fp0.meituan.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639558726&t=b1adf790123088e2c5445170193224e5.jpg",
}, {
  "name": "韩式炸鸡腿",
  "price": 30.5,
  "brand": "bigtoor",
  "Count": 0,
  "type": "炸鸡",
  "icon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20171_18_18%2Fa347ho9161683682525.jpg&refer=http%3A%2F%2Fs9.rr.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639558726&t=864188950f0f5c57a92b1f1c72ba277c.jpg",
},
{
"name": "韩式炸鸡中翅",
"price": 42.5,
"brand": "bigtoor",
"Count": 0,
"type": "炸鸡",
"icon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.meituan.net%2Fdeal%2F2871c1411e9268f0356785ac0d738a10105903.jpg&refer=http%3A%2F%2Fp1.meituan.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639558726&t=8e14f65b63405fd26e1418214c963356.jpg",
}, {
"name": "",
"price": 60.5,
"brand": "炸鸡粗薯套餐",
"Count": 0,
"type": "套餐",
"icon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsem.g3img.com%2Fsite%2F50016327%2Fimage%2Fc2_20180904140158_76697.jpg&refer=http%3A%2F%2Fsem.g3img.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639558726&t=9f2914d07bf4ff2de4110a518aad0da0.jpg",
}, {
"name": "韩式啤酒炸鸡",
"price": 15.5,
"brand": "bigtoor",
"Count": 0,
"type": "炸鸡",
"icon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FOCPF-6-MEoK_9gPzdXogbRhnAgZEEKHzAcCinSRq1HEwAkxsMf8NJ5E_YgAIRCZ7TYGVDmosZWTLal1WbWRW3A.jpg&refer=http%3A%2F%2Fqcloud.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639558726&t=ee60e87162d6a8e5679c395f5031a086.jpg",
}, {
"name": "孜然炸鸡",
"price": 25,
"brand": "bigtoor",
"Count": 0,
"type": "炸鸡",
"icon": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.cinic.org.cn%2Fuploadfile%2F2018%2F1022%2F20181022040239382.png&refer=http%3A%2F%2Fm.cinic.org.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639558726&t=2e51ac9d5ceca0a87d400e0222228f03.jpg",
}

]
},
      
     
      
  ]
  },
 //点餐滚动 
 scroll(e){
    var height=Math.ceil(e.detail.scrollTop)
    var list=this.data.listheight
    var index=0
    for(var i=0;i<list.length;i++){
      if(height>=list[i]&&height<list[i+1]){
        index=i
        break
      }
    }
    this.setData({
      selectcolor:index,
      listview:'list'+index
   })
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

  //绑定减事件
  cut(e){
    var index = e.currentTarget.dataset.index
    var parent=e.currentTarget.dataset.parent
    this.data.goods[parent].foods[index].Count--

    //拼接一个对象
    var price=this.data.goods[parent].foods[index].price
    var num=this.data.goods[parent].foods[index].Count
    var name=this.data.goods[parent].foods[index].name
    var mark='a'+parent+'b'+index
    var obj={price:price,num:num,name:name,mark:mark,index:index,parent:parent}
    var arr=this.data.shop_list.filter(item=>item.mark!=mark)
    arr.push(obj)
      
    for(var i=0 ;i<arr.length;i++){
      if(arr[i].num==0){
           arr.splice(i,1)
      }
    }

    this.setData({
      goods:this.data.goods,
      shop_list:arr,
      total_num:this.data.total_num-1,
      total_price:this.data.total_price-price,
      min:this.data.total_price-price>100? '下单':'还差'+(100-(this.data.total_price-price))+'元'
    })
   //  用100-计算出来的总价 
   var total_num = this.data.total_num
   var total_price = this.data.total_price
   var min=this.data.min
  wx.setStorage({
    key:"shop",
    data:{shop:arr,total_num:total_num,total_price:total_price ,min:min}
  })

  },
  //绑定加事件
  add(e){
    if(this.data.flag==0){
      wx.showToast({
        title: '账号未登录',
        duration:2000,
        image:'/img/x.png'})
    }
    if(this.data.flag==1){
    var index = e.currentTarget.dataset.index
    var parent=e.currentTarget.dataset.parent
    this.data.goods[parent].foods[index].Count++
    //拼接一个对象
    var price=this.data.goods[parent].foods[index].price
    var num=this.data.goods[parent].foods[index].Count
    var name=this.data.goods[parent].foods[index].name
    var mark='a'+parent+'b'+index

    var obj={price:price,num:num,name:name,mark:mark,index:index,parent:parent}
    var arr=this.data.shop_list.filter(item=>item.mark!=mark)
    arr.push(obj)
    this.setData({
      goods:this.data.goods,
      shop_list:arr,
      total_num:this.data.total_num+1,
      total_price:this.data.total_price+price,
      min:this.data.total_price+price>100? '下单':'还差'+(100-(this.data.total_price+price))+'元'
    })
     //  用100-计算出来的总价 
     var total_num = this.data.total_num
     var total_price = this.data.total_price
     var min=this.data.min
    wx.setStorage({
      key:"shop",
      data:{shop:arr,total_num:total_num,total_price:total_price ,min:min}
    })
  }
  },
  change(e){
    var id = e.currentTarget.dataset.id
    this.setData({
      selectcolor:id,
      topview:'index'+id
    })
  },
  shop(){
    this.setData({
        show_shop:!this.data.show_shop
    })
  },
   //打开地图页面
   location: function(){ 
    wx.navigateTo({
       url: '/pages/loc/loc',
       })
   },
//点击商家图片事件  
clickImg: function(e){
  var imgUrl = this.data.shopimglist;
  wx.previewImage({
    urls: imgUrl, //需要预览的图片http链接列表，注意是数组
    current: 'index', // 当前显示图片的http链接，默认是第一个
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
},
//点击轮播图图片事件  
clickImg2: function(e){
  var imgUrl = this.data.background;
  wx.previewImage({
    urls: imgUrl, //需要预览的图片http链接列表，注意是数组
    current: 'index', // 当前显示图片的http链接，默认是第一个
    success: function (res) { },
    fail: function (res) { },
    complete: function (res) { },
  })
},
//预览点餐图片事件  
clickImg1: function(e){
  var index = e.currentTarget.dataset.index
  var parent=e.currentTarget.dataset.parent
  var imgUrl = this.data.goods[parent].foods[index].icon;
  var sources = [{
    url: imgUrl,
    type: 'image'
  }]
  var index = 0
  var url = sources.url
  wx.previewMedia({
    sources: sources, // 需要预览的资源列表
    url: url // 当前预览资源的url链接
  })
  


},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function () {
   


// 获取到缓存
var then = this
wx.getStorage({
  key: 'shop',
  success (res) {
    // console.log(res)
     for(var i = 0;i<res.data.shop.length;i++){
      then.data.goods[res.data.shop[i].parent].foods[res.data.shop[i].index].Count = res.data.shop[i].num

     }
    then.setData({
      goods:then.data.goods,
      shop_list:res.data.shop,
      total_num:res.data.total_num,
      total_price:res.data.total_price,
      min:res.data.min
    })
  }
})
//获取是否登录
wx.getStorage({
  key:'flag',
  success(res){
   then.setData({
     flag:res.data.flag
   })
   console.log(res)
   console.log(then.data.flag)
  }
})
  
  },
 //点击拨打电话
   tels:function(){
     wx.makePhoneCall({
       phoneNumber: '17828912712',
     })
   },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //得到每个套餐高度
    var  query=wx.createSelectorQuery()
    var _this=this
     query.selectAll('.xx').boundingClientRect(function(react){
              var height = 0
              var list=[]
              list.push(height)
              for(var i=0;i<react.length;i++){
                height+=react[i].height
                list.push(height)
              }
              _this.setData({
                listheight:list
           })
         }).exec()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad()
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
           //实现地图
          //保证wx.getSystemInfo的回调函数中能够使用this
        var that = this
        //调用wx.getSystemInfo接口，然后动态绑定组件高度
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                   height: res.windowHeight
                })
            }
        })
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

  },

})






