// pages/huawei/huawei.js
var app = getApp();
let util = require("../../utils/util.js");
let typeID = "";
Page({
  data: {
    shopList: [],
  },

itemClick: function(e){
    wx.navigateTo({
      url: '../../pages/shopinfo/shopinfo?id=' +e.currentTarget.dataset.id,
    })
},
//获取商品列表
getShopList:function(){
  let that = this;
  let url = app.globalData.serverAddress + 'getShopList';
  let data = {
    UserNo: app.globalData.userInfo.UserNo,
    TypeID: typeID,
    PageSize: 100,
    PageIndex: 0,

  };
  util.HttpGet(url, data, "正在加载",
    function (successRes) {
      if (successRes.Code == 1) {
        that.setData({
          shopList: successRes.ShopList
        });
      }

    },
    function (failRes) {

    });
},


  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    typeID = options.typeID;
    let title = options.typeName;
    wx.setNavigationBarTitle({ title: title });


  },
  onReady: function () {
    // 页面渲染完成
    
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})