// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    leftList:[],
    currentIndex: 0,
    Adertises:[
      {
       "eqIcon":"https://ts1.cn.mm.bing.net/th/id/R-C.eb60ec089d6f0badef3cf8184be575d5?rik=9NjflEujkvgdXA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50032%2f6053.jpg_wh1200.jpg&ehk=hercgXI%2bwS6romtCQBOdEb8Q%2bZuy69NDqKPwSGBlGn4%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        "eqIcon":"https://ts1.cn.mm.bing.net/th/id/R-C.2c2bae953eb5cff54650f73356bf97a2?rik=6wiYp%2b5MoQbyMA&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f40033%2f8068.jpg_wh1200.jpg&ehk=gaf0QQkyBSjASbUlQDKjITyj5rMOpgO%2b5yZWbWi9XBQ%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        "eqIcon":"https://ts1.cn.mm.bing.net/th/id/R-C.78e49a15248c73ce367c56b725c697a5?rik=nj48Zgs3mpQcRw&riu=http%3a%2f%2fpic36.photophoto.cn%2f20150706%2f0008020266340407_b.jpg&ehk=LovfBFWaFVjxOLWN%2bjh7ijLUKdM%2bGsNRKs%2bXS344baU%3d&risl=&pid=ImgRaw&r=0"
      }
    ]
  },
  swiperChange(e) {
    this.setData({
      currentIndex: e.detail.current
    });
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    wx.navigateTo({
      url: '/pages/searchP/searchP',
    })
  },
  onClick() {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // var that=this;
    // that.storeBindings=createStoreBindings(this,{
    //   store,
    //   fields:['widthP'],
    //   actions:['updatewidthP','updateheightP']
    // })
    // wx.getSystemInfo({
    //   success: function(res) {
    //     that.updatewidthP(res.windowWidth),
    //     that.updateheightP(res.windowHeight)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
console.log(this.data.widthP)
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