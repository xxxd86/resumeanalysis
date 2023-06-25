// pages/fuwu/fuwu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey:0,
    wh:0,
    scrollTops: 0,  // 要滚动的高度
    tabCur: 0,  // 当前项
    rightCur: 0,  // 用于实现左边联动右边
    currentEquipment:[
      {
       "name":"智能简历",
       "introduce":[
        {
       "index":1,
       },
       {
  "index":1
       },
      {
  "index":1
      },
{
  "index":1
},
       ]
      },{
        "name":"推荐简历",
        "introduce":[
          {
            "index":1
          },
          {
            "index":1
          },
          {
            "index":1
          },
          {
            "index":1
          },
        ]
      },
      ,{
        "name":"智能分析",
        "introduce":[
          {
            "index":1
          },
          {
            "index":1
          },
          {
            "index":1
          },
          {
            "index":1
          },
        ]
      }
    ]
  },
// 切换左边菜单并联动右边
tabNav(e) {
  let index = e.currentTarget.dataset.index;
  this.setData({
    tabCur: index,
    rightCur: index,
    // 实现左边自动滑动到某个位置 4表示自动滑动到 第五项 （4为索引值）
    scrollTops: (index - 3) * 50
  })
},
/**
 * 滑动右边对应左边菜单切换
 * 1、拿到该元素的高度，设定它的top和bottom
 * 2、判断滑动的距离是否大于 设定的top并小于设定的bottom，然后对应左边菜单的滑动
 */
scrollLink(e) {
  let list = this.data.currentEquipment
  let itemHeight = 0;
  for (let i = 0; i < list.length; i++) {
    //拿到每个元素
    let els = wx.createSelectorQuery().select("#scroll-" + i);
    els.fields({
      size: true
    }, function (res) {
      list[i].top= itemHeight;
      itemHeight += res.height;
      list[i].bottom = itemHeight
    }).exec()
  }

  this.setData({
    list
  })

  // 拿到滚动的高度
  let scrollTop = e.detail.scrollTop;
  for (let i = 0; i < list.length; i++) {
    if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
      this.setData({
        tabCur: i,
        scrollTops: (i - 4) * 50
      })
      return false
    }
  }
},

onChangeList(event) {
  console.log(event.detail)
  //更改list
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})