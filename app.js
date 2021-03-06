//app.js
App({ 
  onLaunch: function () {
    
  },
  globalData: {
    // 服务器地址 test
    serverUrl: 'http://localhost:8080/zlx/',
    // pro
    // serverUrl: 'https://zzzlllxxx.com/',

    // 请求成功返回字符串
    requestOk: 'request:ok',
    // 请求失败返回字符串
    requestFail: 'request:fail ',
    // 请求超时返回字符串
    requestTimeout: 'request:fail timeout',

    // 临时地址信息，在结算中心跳转地址管理页面选择地址后无法带参数返回页面，只能临时保存在常量中 
    address: null,
    // 临时订单商品信息，多个商品结算时跳转页面无法传递数组，只能临时保存在常量中 
    orderProducts: null,
    // 是否从购物车中结算的
    isShoppingCart: -1,
  }
})