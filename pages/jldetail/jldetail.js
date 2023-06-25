// 引入echarts.js
import * as echarts from '../../ec-canvas/echarts';
const a=require('../../utils/util');
let chart = null;
let fenxS=[]
let fenxV=[]
var result=[]
var values=[]
let fenxSB=[]
let fenxSV=[]
var resultB=[]
let arr1=[]
let arr2=[]
// 初始化图表函数
// 初始化图表函数
// 初始化图表函数
function  initChartK(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  })

  canvas.setChart(chart)

  // 显示Echarts图表类型信息，可以去Echarts官网复制粘贴
  let option = {
    xAxis: {
      type: 'category',
      data: Object.keys(a.fenxi.predicted_result.predicted_industry)
    },
    yAxis: {
      type: 'value'
    },
    grid:{
        left:50
    },
    series: [{
      data:Object.values(a.fenxi.predicted_result.predicted_industry),
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }]
  }
  chart.setOption(option);
  return chart;
}
function  initChartF(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  })
  canvas.setChart(chart)
  // 显示Echarts图表类型信息，可以去Echarts官网复制粘贴
  let option = {
    xAxis: {
      type: 'category',
      data: Object.keys(a.fenxi.predicted_result.predicted_capability),
      axisLabel:{
        show:true,
        formatter:function(value){
            var texts=value;
            if(texts.length>=3){ // 具体多少字就看自己了
                texts=texts.substr(0,3)+'...';
            }
            return texts;
        }
    }
    },
    yAxis: {
      type: 'value',
 
    },
    grid:{
      left:50
  },
    series: [{
      data:Object.values(a.fenxi.predicted_result.predicted_capability),
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }]
  }

  chart.setOption(option);
  return chart;
}
function initChartZ(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  })

  canvas.setChart(chart)
  a.fenxi.predicted_result.predicted_skills.forEach((value,i)=>{ //数组循环
    let count=1
    for(var pl in value){
     //数组对象遍历
     if(count==1){
      fenxS=fenxS.concat(value['skill'])
     }
     if(count==2){
      fenxV=fenxV.concat(value['score'])
     }
     
    // console.log(value[pl])
    // console.log(count)
    count++ //获取key的值
    }
    })
    result = a.fenxi.predicted_result.predicted_skills.map(o =>{
           return{
                name:o.skill,
                value:o.score,
                max:1
          }
       });
       arr1 = Object.entries(a.fenxi.predicted_result.predicted_industry).map((o =>{
        return{
             name:o[0],
             value:o[1],
             max:1
       }
    }));
    arr2 = Object.entries(a.fenxi.predicted_result.predicted_capability).map((o =>{
      return{
           name:o[0],
           value:o[1],
           max:1
     }
  }));
  // 显示Echarts图表类型信息，可以去Echarts官网复制粘贴
  let option = {
    xAxis: {
      type: 'category',
      data: fenxS
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: fenxV,
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }]
  }

  chart.setOption(option);
  return chart;
}
function initChartB(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  })
  canvas.setChart(chart)
  // 显示Echarts图表类型信息，可以去Echarts官网复制粘贴
  let option = {
    title: {
      // text: 'Basic Radar Chart'
    },
    legend: {
      data: ['fulldata']
    },
    radar: {
      // shape: 'circle',
      indicator: result
    },
    grid:{
      left:60
    },
    series: [
      {
        // name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: fenxV,
            name: ''
          }
        ]
      }
    ]
  };
  chart.setOption(option);
  return chart;
}
function initChartE(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  })
  canvas.setChart(chart)
  // 显示Echarts图表类型信息，可以去Echarts官网复制粘贴
  let option = {
    title: {
      // text: 'Basic Radar Chart'
    },
    legend: {
      data: ['fulldata']
    },
    radar: {
      // shape: 'circle',
      indicator:arr1
    },
    grid:{
      top:48,
      left:400,// 调整这个属性
      right:50,
      bottom:50,
  },
  
    series: [
      {
        // name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: fenxV,
            name: ''
          }
        ]
      }
    ]
  };
  chart.setOption(option);
  return chart;
}
function initChartQ(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr
  })
  canvas.setChart(chart)
  // 显示Echarts图表类型信息，可以去Echarts官网复制粘贴
  let option = {
    title: {
      // text: 'Basic Radar Chart'
    },
    legend: {
      data: ['fulldata']
    },
    radar: {
      // shape: 'circle',
      indicator:arr2
    },
    grid:{
      left:70,
      bottom:30
    },
    series: [
      {
        // name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: fenxV,
            name: ''
          }
        ]
      }
    ]
  };
  chart.setOption(option);
  return chart;
}
Page({
  data: {
    ecZ: {
      onInit: initChartZ
    },
    ecB:{
      onInit: initChartB
    },
    ecK:{
      onInit: initChartK
    },
    ecF:{
      onInit:  initChartF
    },
    ecE:{
      onInit:  initChartE
    },
    ecQ:{
      onInit:  initChartQ
    },
    fenxi:a.fenxi,
    dataI:a.dataI,
    fenxikey:[],
    activeNames: ['0'],
    activeNamesF:['0'],
    show: false,
    baseUIcon:[
      "/static/jianli/my.png",
      "/static/jianli/shouji.png",
      "/static/jianli/youxiang.png"
    ]
  },
  onClickShow() {
    this.setData({ show: true });
    
  },

  onClickHide() {
    this.setData({ show: false });
  },

  onChangeF(event) {
    this.setData({
      activeNamesF: event.detail,
    });
  },
  onOpenF(event) {
    
  },
  onCloseF(event) {
    
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  onOpen(event) {
    
  },
  onClose(event) {
    
  },
  noop() {},
  onLoad(option){
    this.setData({
      dataI:a.dataI,
      fenxi:a.fenxi
    })

  },
  onUnload(){
   
  }
})
