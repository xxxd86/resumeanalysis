const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
const dataI=
{"cv_name":"66d346157e1cc76b5370fb0d760ff7f2.docx","ocr_count":0,"src_id":"","version":"4.9.0","cv_language":"zh","src_site":"other","file_name":"1.docx","errormessage":"succeed","cv_id":"","english_parsing_result":{},"updated_time":"","applied_job":"","resume_integrity":0.7141448182525824,"parsing_result":{"project_experience":[],"contact_info":{"phone_number":"13899999999","QQ":"","wechat":"","email":"zhangjiwei@163.com","home_phone_number":""},"social_experience":[],"education_experience":[{"ranking":"","major":"国际经济与贸易","degree":"本科","end_time_year":"2019","still_active":0,"school_rank":"20","school_level":"985 211","end_time_month":"01","school_name":"北京师范大学","abroad_country":"","GPA":"","courses":"国际贸易理论与实务，国际经济与贸易，世界经济概论，政治经济学，西方经济学，计量经济学，国际经济学，国际结算，国际金融","start_time_year":"2015","location":"北京","department":"","study_model":"","abroad":0,"start_time_month":"01"}],"basic_info":{"major":"国际经济与贸易","expect_location":"","current_salary":"","current_location_norm":"","current_location":"","expect_location_norm":"","desired_salary":"","birthplace":"北京海淀区","degree":"本科","desired_industry":"","desired_position":"行政管理","zipcode":"","professional_level":"中级","national_identity_number":"","date_of_birth":"1998-11","birthplace_norm":"中国-北京-北京-海淀区","num_work_experience":4,"current_position":"部长助理","work_start_year":"2020","political_status":"党员","current_company":"北京猫眼机械有限公司","school_name":"北京师范大学","ethnic":"","recent_graduate_year":"2019","name":"张吉惟","lastupdate_time":"2023-06-01-09-02-54","gender":"女","age":25,"marital_status":"","current_status":"","school_type":"985 211","detailed_location":"","industry":""},"training_experience":[],"work_experience":[{"salary":"","description":"质管部部长助理.负责票证车间生产质量检查,控制,兼任企业内审员,推行ISO9001: 2008及ISO14000体系并年审。","end_time_year":"2023","still_active":1,"skills":[],"end_time_month":"06","industry":"","start_time_month":"03","company_type":"","department":"","company_name":"北京猫眼机械有限公司","start_time_year":"2022","location":"","report_to":"","job_function":"人力资源","underling_num":"","job_title":"部长助理","company_size":""},{"salary":"","description":"根据公司的经营理念和发展战略制定公司各工作岗位的工作目标;负责制定及推进公司员工的培训、绩效、薪酬的管理。","end_time_year":"2022","still_active":0,"skills":[],"end_time_month":"03","industry":"","start_time_month":"02","company_type":"","department":"","company_name":"北京猫眼国际货运代理有限公司","start_time_year":"2021","location":"","report_to":"","job_function":"高级管理","underling_num":"","job_title":"总经理助理","company_size":""},{"salary":"","description":"根据目标管理综合考评内容，深入、细致地到所跟踪的各场所了解、掌握情况，帮助和促进各场所提高行政、后勤管理水平。","end_time_year":"2021","still_active":0,"skills":["运营"],"end_time_month":"02","industry":"","start_time_month":"02","company_type":"","department":"","company_name":"北京猫眼文化传媒有限公司","start_time_year":"2020","location":"","report_to":"","job_function":"互联网产品/运营管理","underling_num":"","job_title":"运营助理","company_size":""}],"others":{"language":["英语"],"certificate":["cet-6","大学英语6级证书"],"skills":["Ps","Ai","PPT","Word","运营","经济学","国际贸易","行政管理","国际金融","政治经济学"],"self_evaluation":"个人爱好\n本人性格开朗、稳重、有活力，待人热情、真诚。有较强的组织能力、团体协作精神，较好的社交能力，善于处理各种人际关系。能迅速的适应各种环境，并融合其中。能把企业当作家庭，企业的财富就是我的财富，在努力为企业服务的过程中实现自身价值。\nzhangjiwei@163.com\n138 9999 9999","awards":["国家级一等奖学金","全国大学生英语竞赛一等奖"],"it_skills":["PPT"],"business_skills":["Word","行政管理"]},"resume_rawtext":"张吉惟\nPPT\nWORD\nAI\nPS\n个人技能\n出生年月：1998.11\n性    别：女\n籍    贯：北京海淀区\n学    历：本科\n政治面貌：党员\n身    高：178cm\n体    重：50kg\n工作经历\n自我评价\n个人爱好\n本人性格开朗、稳重、有活力，待人热情、真诚。有较强的组织能力、团体协作精神，较好的社交能力，善于处理各种人际关系。能迅速的适应各种环境，并融合其中。能把企业当作家庭，企业的财富就是我的财富，在努力为企业服务的过程中实现自身价值。\nzhangjiwei@163.com\n138 9999 9999\n求职意向：行政管理类\n基本信息\n2016\t全国大学生英语竞赛一等奖\n2017\t国家级一等奖学金\n2018\t大学英语6级证书（CET-6）\n奖励证书\n教育背景\n2015-2019\t国际经济与贸易\n北京师范大学\n政治经济学、西方经济学、国际经济学、计量经济学、世界经济概论、国际贸易理论与实务、国际金融、国际结算。\n2022.3至今\t部长助理\n北京猫眼机械有限公司\n质管部部长助理.负责票证车间生产质量检查,控制,兼任企业内审员,推行ISO9001:2008及ISO14000体系并年审。\n2021.2-2022.3\t总经理助理\n北京猫眼国际货运代理有限公司\n根据公司的经营理念和发展战略制定公司各工作岗位的工作目标;负责制定及推进公司员工的培训、绩效、薪酬的管理。\n2020.2-2021.2\t运营助理\n北京猫眼文化传媒有限公司\n根据目标管理综合考评内容，深入、细致地到所跟踪的各场所了解、掌握情况，帮助和促进各场所提高行政、后勤管理水平。\n"},"avatar_url":"","client_id":"d35ace40-feb6-11ed-9c0e-135d7eef003d","file_ext":"docx","errorcode":0,"avatar_data":"","hash_id":"66d346157e1cc76b5370fb0d760ff7f2"}
const fenxi={
  "desired_salary": null,
  "tags": {
      "skills": [
          {
              "tag": "品牌形象",
              "type": "professional_skill",
              "subclass": "公共关系"
          },
          {
              "tag": "市场调查",
              "type": "professional_skill",
              "subclass": "其它"
          },
          {
              "tag": "数据分析",
              "type": "professional_skill",
              "subclass": "数据分析"
          },
          {
              "tag": "公关",
              "type": "professional_skill",
              "subclass": "公共关系"
          },
          {
              "tag": "运营",
              "type": "professional_skill",
              "subclass": "运营"
          },
          {
              "tag": "OFFICE",
              "type": "professional_skill",
              "subclass": "其它"
          },
          {
              "tag": "SEO优化",
              "type": "professional_skill",
              "subclass": "运营"
          },
          {
              "tag": "品牌策略",
              "type": "professional_skill",
              "subclass": "运营"
          },
          {
              "tag": "营销策略",
              "type": "professional_skill",
              "subclass": "销售"
          },
          {
              "tag": "渠道管理",
              "type": "professional_skill",
              "subclass": "销售"
          },
          {
              "tag": "前端销售",
              "type": "professional_skill",
              "subclass": "销售"
          },
          {
              "tag": "前端销售",
              "type": "professional_skill",
              "subclass": "前端开发"
          },
          {
              "tag": "销售渠道",
              "type": "professional_skill",
              "subclass": "销售"
          },
          {
              "tag": "推广策划",
              "type": "professional_skill",
              "subclass": "运营"
          },
          {
              "tag": "媒体合作",
              "type": "professional_skill",
              "subclass": "公共关系"
          },
          {
              "tag": "媒体合作",
              "type": "professional_skill",
              "subclass": "广告"
          },
          {
              "tag": "品牌策划",
              "type": "professional_skill",
              "subclass": "其它"
          },
          {
              "tag": "线上推广",
              "type": "professional_skill",
              "subclass": "运营"
          },
          {
              "tag": "媒体报道",
              "type": "professional_skill",
              "subclass": "其它"
          },
          {
              "tag": "百度竞价",
              "type": "professional_skill",
              "subclass": "其它"
          },
          {
              "tag": "活动方案",
              "type": "professional_skill",
              "subclass": "运营"
          },
          {
              "tag": "广告投放",
              "type": "professional_skill",
              "subclass": "广告"
          },
          {
              "tag": "广告投放",
              "type": "professional_skill",
              "subclass": "运营"
          },
          {
              "tag": "营销计划",
              "type": "professional_skill",
              "subclass": "其它"
          },
          {
              "tag": "金融产品",
              "type": "professional_skill",
              "subclass": "其它"
          },
          {
              "tag": "团队管理",
              "type": "professional_skill",
              "subclass": "管理"
          },
          {
              "tag": "烘焙食品",
              "type": "professional_skill",
              "subclass": "餐饮"
          },
          {
              "tag": "商务谈判",
              "type": "professional_skill",
              "subclass": "销售"
          },
          {
              "tag": "团队建设",
              "type": "professional_skill",
              "subclass": "管理"
          },
          {
              "tag": "宏观经济",
              "type": "professional_skill",
              "subclass": "其它"
          },
          {
              "tag": "TVC",
              "type": "professional_skill",
              "subclass": "影视"
          },
          {
              "tag": "公众号",
              "type": "professional_skill",
              "subclass": "运营"
          },
          {
              "tag": "营运",
              "type": "professional_skill",
              "subclass": "运营"
          },
          {
              "tag": "宣传",
              "type": "professional_skill",
              "subclass": "运营"
          },
          {
              "tag": "VI",
              "type": "professional_skill",
              "subclass": "UI设计"
          },
          {
              "tag": "重构",
              "type": "professional_skill",
              "subclass": "后端开发"
          },
          {
              "tag": "PR",
              "type": "professional_skill",
              "subclass": "公共关系"
          },
          {
              "tag": "PR",
              "type": "professional_skill",
              "subclass": "UI设计"
          },
          {
              "tag": "营销支持",
              "type": "professional_skill",
              "subclass": "销售"
          }
      ],
      "professional": [
          {
              "tag": "其他",
              "type": "industry"
          },
          {
              "tag": "互联网/软件",
              "type": "industry"
          },
          {
              "tag": "市场副总监",
              "type": "job_title"
          },
          {
              "tag": "市场部-市场经理",
              "type": "job_title"
          },
          {
              "tag": "市场及运营总监",
              "type": "job_title"
          },
          {
              "tag": "管理经验",
              "type": "management"
          },
          {
              "tag": "优秀互联网企业",
              "type": "company_class"
          }
      ],
      "education": [
          {
              "tag": "本科学历",
              "type": "degree"
          },
          {
              "tag": "广告策略",
              "type": "major"
          },
          {
              "tag": "市场营销",
              "type": "major"
          },
          {
              "tag": "211工程院校",
              "type": "school_level"
          }
      ],
      "basic": [
          {
              "tag": "26到30岁",
              "type": "age"
          },
          {
              "tag": "中共党员",
              "type": "political_status"
          },
          {
              "tag": "广州市",
              "type": "current_location"
          },
          {
              "tag": "中级",
              "type": "level"
          },
          {
              "tag": "5-10年经验",
              "type": "experience"
          }
      ],
      "others": [
          {
              "tag": "英语",
              "type": "language",
              "level": "基本掌握"
          },
          {
              "tag": "全国计算机二级",
              "type": "certificate"
          },
          {
              "tag": "普通话一级甲等",
              "type": "certificate"
          },
          {
              "tag": "cet-4",
              "type": "certificate"
          },
          {
              "tag": "华南师范大学盼盼杯烘焙食品创意大赛优秀奖",
              "type": "award"
          },
          {
              "tag": "华南高校大学生主题征文一等奖",
              "type": "award"
          },
          {
              "tag": "人立定跳远团体赛第三名",
              "type": "award"
          },
          {
              "tag": "微博文征集大赛二等奖",
              "type": "award"
          }
      ]
  },
  "highlights": {
      "project": [],
      "occupation": [
          "优秀互联网企业从业经历",
          "拥有良好的团队建设能力与协调能力,具有优秀的团队管理能力,积累了一定团队管理经验与能力"
      ],
      "education": [
          "院校背景不错，本科学历，毕业于211院校"
      ],
      "others": [
          "熟练掌握英语，能进行基本的沟通",
          "有丰富的销售经验，对品牌营销、渠道管理、营销策划、市场开拓、销售渠道、商务谈判、市场营销、营销策略等技能或工具有深入的理解",
          "有丰富的运营经验，对竞价、线上推广、运营、品牌策略、广告投放、策划、roi、宣传、seo、市场推广、公众号、活动方案、seo优化等技能或工具有深入的理解"
      ],
      "tags": [
          "名企经历",
          "管理经验",
          "国内211",
          "英语能力良好",
          "技术达标",
          "证书达人"
      ]
  },
  "predicted_industry": {
      "建筑/房地产": 5,
      "咨询/法律/公务员": 5,
      "生物/制药/医疗/护理": 5,
      "教育/翻译/服务业": 5,
      "其他": 5,
      "工程师": 5,
      "运营/客服/销售/市场": 9,
      "人事/行政/高级管理": 6,
      "生产/采购/物流": 5,
      "互联网": 5,
      "产品": 5,
      "金融": 5.5
  },
  "predicted_titles": [
      {
          "score": 0.34659331605144594,
          "title": {
              "l2": "市场",
              "l3": "广告客户",
              "l1": "销售/客服/市场"
          }
      },
      {
          "score": 0.3241115475650067,
          "title": {
              "l2": "金融/银行/保险",
              "l3": "银行行长",
              "l1": "金融"
          }
      },
      {
          "score": 0.2447557296844201,
          "title": {
              "l2": "教育",
              "l3": "学校行政/咨询/法律/教育/科研/教师/校长",
              "l1": "咨询/法律/教育/翻译"
          }
      },
      {
          "score": 0.22174809888238847,
          "title": {
              "l2": "市场",
              "l3": "市场营销",
              "l1": "销售/客服/市场"
          }
      },
      {
          "score": 0.21584392346665546,
          "title": {
              "l2": "行政/高级管理",
              "l3": "高级管理人员",
              "l1": "财务/人力资源/行政"
          }
      },
      {
          "score": 0.20240797765095617,
          "title": {
              "l2": "市场",
              "l3": "网络推广",
              "l1": "销售/客服/市场"
          }
      }
  ],
  "stability": {
      "average_job_function_time": 18.5,
      "average_industry_time": 52,
      "average_work_time": 14.8,
      "work_stability": "稳定"
  },
  "predicted_capability": {
      "language": 6,
      "socialexp": 8.5,
      "leadership": 10,
      "workexp": 6.8,
      "education": 7,
      "honor": 10
  },
  "predicted_skills": [
      {
          "skill": "品牌形象",
          "score": 0.9
      },
      {
          "skill": "市场调查",
          "score": 0.9
      },
      {
          "skill": "数据分析",
          "score": 0.9
      },
      {
          "skill": "公关",
          "score": 0.8
      },
      {
          "skill": "监督",
          "score": 0.8
      },
      {
          "skill": "运营",
          "score": 0.8
      },
      {
          "skill": "office",
          "score": 0.7
      },
      {
          "skill": "seo优化",
          "score": 0.7
      },
      {
          "skill": "品牌策略",
          "score": 0.7
      },
      {
          "skill": "营销策略",
          "score": 0.7
      },
      {
          "skill": "渠道管理",
          "score": 0.7
      },
      {
          "skill": "前端销售",
          "score": 0.7
      },
      {
          "skill": "销售渠道",
          "score": 0.7
      },
      {
          "skill": "推广策划",
          "score": 0.7
      },
      {
          "skill": "媒体合作",
          "score": 0.7
      },
      {
          "skill": "品牌策划",
          "score": 0.7
      },
      {
          "skill": "线上推广",
          "score": 0.7
      },
      {
          "skill": "媒体报道",
          "score": 0.7
      },
      {
          "skill": "百度竞价",
          "score": 0.7
      },
      {
          "skill": "活动方案",
          "score": 0.7
      },
      {
          "skill": "广告投放",
          "score": 0.7
      },
      {
          "skill": "营销计划",
          "score": 0.7
      },
      {
          "skill": "金融产品",
          "score": 0.7
      },
      {
          "skill": "团队管理",
          "score": 0.7
      },
      {
          "skill": "烘焙食品",
          "score": 0.7
      },
      {
          "skill": "商务谈判",
          "score": 0.7
      },
      {
          "skill": "团队建设",
          "score": 0.7
      },
      {
          "skill": "宏观经济",
          "score": 0.7
      },
      {
          "skill": "tvc",
          "score": 0.7
      },
      {
          "skill": "公众号",
          "score": 0.7
      },
      {
          "skill": "普通话",
          "score": 0.7
      },
      {
          "skill": "营运",
          "score": 0.7
      },
      {
          "skill": "宣传",
          "score": 0.7
      },
      {
          "skill": "vi",
          "score": 0.7
      },
      {
          "skill": "重构",
          "score": 0.7
      },
      {
          "skill": "投资",
          "score": 0.7
      },
      {
          "skill": "演讲",
          "score": 0.7
      },
      {
          "skill": "pr",
          "score": 0.7
      },
      {
          "skill": "营销支持",
          "score": 0.5
      }
  ],
  "predicted_salary": "15000_to_20000",
  "predicted_turnover": 0.28692781925201416,
  "risks": {
      "occupation": [],
      "education": [
          "教育经历时间有1年以上的间隔"
      ],
      "tags": [
          "教育经历间断"
      ]
  }
}
var a=1
module.exports = {
  formatTime,dataI,fenxi,a
}

