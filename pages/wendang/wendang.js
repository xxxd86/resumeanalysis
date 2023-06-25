
const category = [{
  name: '文字识别(高精度版)',
  list: [
    '在通用文字识别的基础上，提供更高精度的识别服务，支持更多语种识别（丹麦语、荷兰语、马来语、瑞典语、印尼语、波兰语、罗马尼亚语、土耳其语、希腊语、匈牙利语、泰语、越语、阿拉伯语、印地语及部分中国少数民族语言），并将字库从1w+扩展到2w+，能识别所有常用字和大部分生僻字。',
    '在线调试',
    '可进行签名验证、查看在线调用的请求内容和返回结果、示例代码的自动生成。',
  ]
},
{
  name: '文字识别(标准版)',
  list: [
     "接口描述",
     "基于业界领先的深度学习技术，提供多场景、多语种、高精度的整图文字检测和识别服务，多项ICDAR指标居世界第一。",
     "在线调试",
     "您可以在 示例代码中心 中调试该接口，可进行签名验证、查看在线调用的请求内容和返回结果、示例代码的自动生成。",
  ]
},
{
  name: '文字识别(高精度含位置版)',
  list: [
     "接口描述",
     "提供多场景、多语种、高精度的整图文字检测和识别服务，支持生僻字识别，并支持 25 种语言识别，相对于通用文字识别（含位置信息版）该产品精度更高，但是识别耗时会稍长。",
     "在线调试",
     "您可以在 示例代码中心 中调试该接口，可进行签名验证、查看在线调用的请求内容和返回结果、示例代码的自动生成。",
     "请求说明",
     "请求示例",
     "HTTP 方法：POST",
     "请求URL： https://aip.baidubce.com/rest/2.0/ocr/v1/accurate"
  ]
}
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: category,
    scrollTops: 0,  // 要滚动的高度
    tabCur: 0,  // 当前项
    rightCur: 0,  // 用于实现左边联动右边
  },
  // 切换左边菜单并联动右边
  tabNav(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      tabCur: index,
      rightCur: index,
      // 实现左边自动滑动到某个位置 4表示自动滑动到 第五项 （4为索引值）
      scrollTops: (index - 4) * 50
    })
  },
  /**
   * 滑动右边对应左边菜单切换
   * 1、拿到该元素的高度，设定它的top和bottom
   * 2、判断滑动的距离是否大于 设定的top并小于设定的bottom，然后对应左边菜单的滑动
   */
  scrollLink(e) {
    let list = this.data.list
    let itemHeight = 0;
    for (let i = 0; i < list.length; i++) {
      //拿到每个元素
      let els = wx.createSelectorQuery().select("#scroll-" + i);
      els.fields({
        size: true
      }, function (res) {
        list[i].top = itemHeight;
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
  }
})
