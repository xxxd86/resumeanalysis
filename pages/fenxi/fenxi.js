// pages/fenxi/fenxi.js
import{createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
const a=require('../../utils/util');
 const app = getApp()
 const AV = require('../../utils/av-weapp-min');
 let Buffer = require("buffer/index")
 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    currentfuwu:'普通模式',
    currentE:'general',
    currentES:[
      'general','fast','accurate'
    ],
    path:'',
    filename:'点击图标即可进行文件上传',
    currentfileList:{}
  },
  onChange(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
    //更改服务方式
    this.setData({
      currentfuwu:event.detail.title,
      currentE:this.data.currentES[event.detail.name]
    })
  },
  onBeforeChange(event) {
    const { callback, title } = event.detail;
    wx.showModal({
      title: '枫心智创',
      content: `确定要切换至 ${title} 吗？`,
      success: (res) => {
        if (res.confirm) {
          callback(true)
        } else if (res.cancel) {
          callback(false)
        }
      },
    })
  },
  scInformation(file){
    var that=this
    var fs = wx.getFileSystemManager();
    var filePath = file.url; //替换为您的简历
    console.log('临时路径转内容base64', this.data.path);
    wx.getFileSystemManager().readFile({
      filePath: this.data.path, //选择图片返回的相对路径
      encoding: 'base64', //编码格式
      success: res => { //成功的回调
        console.log('转换', res.data);
        let fileBase64 = res.data;
        wx.request({
          method: 'POST',
          url: "http://api.xiaoxizn.com/v1/parser/parse_base?avatar=1&handle_image=1&rawtext=1&parse_mode="+this.data.currentE, //支持图片解析，提取简历头像，提取简历原文本，且使用快速解析模式
          header: {
            'id': 'd35ace40-feb6-11ed-9c0e-135d7eef003d', 
            'secret': 'af36e086-7a60-4ec9-8166-e642a7f457e6'
          },
          data: {
            'resume_base': fileBase64,
            'file_name': filePath
          },
          success(res) {
             console.log('请求成功', res.data);
             a.dataI=res.data
          }
        });
        wx.request({
          method: 'POST',
          url: "http://api.xiaoxizn.com/v1/bundle/analyze_base?avatar=1&handle_image=1&rawtext=1&parsing_result=1&parse_mode="+this.data.currentE, //支持图片解析，提取简历头像，提取简历原文本，且使用快速解析模式
          header: {
            'id': 'd35ace40-feb6-11ed-9c0e-135d7eef003d', 
            'secret': 'af36e086-7a60-4ec9-8166-e642a7f457e6'
          },
          data: {
            'resume_base': fileBase64,
            'file_name': filePath
          },
          success(res) {
             console.log('请求成功', res.data);
             a.fenxi=res.data
          }
        });
        wx.showToast({
          title: '上传并分析成功',
          icon: 'success',
        })
        wx.hideLoading()
      },
      fail(res) {
        console.log('操作失败', res);
      }
    })
  },
  //选择文件
  chooseFile(){
    var that=this
    wx.chooseMessageFile({
      count: 1,  //能选择文件的数量
      type: 'file', //能选择文件的类型,我这里只允许上传文件.还有视频,图片,或者都可以
      success(res) { 
      var size = res.tempFiles[0].size;
      var filename = res.tempFiles[0].name;
      var newfilename = filename + ""; 
      console.log(res)
       that.setData({
       path: res.tempFiles[0].path, //将文件的路径保存在页面的变量上,方便 wx.uploadFile调用
       filename: filename    //渲染到wxml方便用户知道自己选择了什么文件
       })
    new AV.File('file', {
      blob: {
        uri: res.tempFiles[0].path,
      },
    })
      // 上传
      .save()
      // 上传成功
     .then((file) => {
        console.log(file);
        that.scInformation(file.attributes)
      }, (error) => {
        // 保存失败，可能是文件无法被读取，或者上传过程中出现问题
        wx.showToast({
          title: '上传失败',
          icon: 'error',
        })
        wx.hideLoading()
      });
      }
      }
     )
  },
  text(){
wx.navigateTo({
  url: '/pages/jldetail/jldetail',
})
  },
  CheckAndUpload(){
    wx.showModal({
      title: '枫心智创',
      content: `确定要上传该文件吗`,
      success: (res) => {
        if (res.confirm) {
          // callback(true)
          wx.showLoading({
            title: '正在上传并分析请等待',
          })
          this.chooseFile()
        } else if (res.cancel) {
          // callback(false)
          wx.showToast({
            title: '上传失败',
            icon: 'error',
          })
        }
      },
    })
  },

  text(){
    a.a++;
    console.log(a)
    wx.navigateTo({
      url: '/pages/jldetail/jldetail',
    })
 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that=this;
    that.storeBindings=createStoreBindings(this,{
      store,
      fields:['fenxi','dataI'],
      actions:['updatefenxi','updatedataI']
    })
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
    this.storeBindings.destroyStoreBindings()
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