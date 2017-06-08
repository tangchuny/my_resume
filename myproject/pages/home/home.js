Page({
  data: {
      nearId: 0,
      isHidden: true
  },
  onLoad: function () {
      let that = this;

  },
  openInfo: function() {
      wx.navigateTo({
          url: '../baseInfo/baseInfo'
      });     
  },
  openWorks: function() {
      wx.navigateTo({
          url: '../work/work'
      });
  },
  openItem: function() {
      wx.navigateTo({
          url: '../item/item'
      });
  },
  onShareAppMessage: function () {
    return {
      title: 'tcy的个人简历！',
      path: '/pages/home/home'
    }
  }
})