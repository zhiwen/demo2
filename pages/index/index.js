// index.js
Page({
  data: {
    pcode:'Beijing',
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 500,
    provinceList: [
      [
        {
          code: 'Beijing',
          name: '北京市',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Tianjin',
          name: '天津市',
          imgUrl: '../../images/p/p2.png'
        },
        {
          code: 'Shanghai',
          name: '上海市',
          imgUrl: '../../images/p/p3.png'
        },
        {
          code: 'Chongqing',
          name: '重庆市',
          imgUrl: '../../images/p/p4.png'
        },
        {
          code: 'Hebei',
          name: '河北省',
          imgUrl: '../../images/p/p4.png'
        },
        {
          code: 'Shanxi',
          name: '山西省',
          imgUrl: '../../images/p/p6.png'
        },
        {
          code: 'Liaoning',
          name: '辽宁省',
          imgUrl: '../../images/p/p7.png'
        },
        {
          code: 'Jilin',
          name: '吉林省',
          imgUrl: '../../images/p/p8.png'
        },
        {
          code: 'Heilongjiang',
          name: '黑龙江省',
          imgUrl: '../../images/p/p9.png'
        },
        {
          code: 'Jiangsu',
          name: '江苏省',
          imgUrl: '../../images/p/p10.png'
        }
      ],
      [
        {
          code: 'Zhejiang',
          name: '浙江省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Anhui',
          name: '安徽省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Fujian',
          name: '福建省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Jiangxi',
          name: '江西省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Shandong',
          name: '山东省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Henan',
          name: '河南省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Hubei',
          name: '湖北省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Hunan',
          name: '湖南省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Guangdong',
          name: '广东省',
          imgUrl: '../../images/p/p1.png'
        }
      ],
      [
        {
          code: 'Hainan',
          name: '海南省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Sichuan',
          name: '四川省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Guizhou',
          name: '贵州省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Yunnan',
          name: '云南省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Shaanxi',
          name: '陕西省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Gansu',
          name: '甘肃省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Qinghai',
          name: '青海省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Taiwan',
          name: '台湾省',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'InnerMongolia',
          name: '内蒙古',
          imgUrl: '../../images/p/p1.png'
        }
      ],
      [
        {
          code: 'Guangxi',
          name: '广西',
          imgUrl: '../../images/p/p1.png'
        }, 
        {
          code: 'Xizang',
          name: '西藏',
          imgUrl: '../../images/p/p1.png'
        },
        {
          code: 'Ningxia',
          name: '宁夏',
          imgUrl: '../../images/p/p1.png'
        }, {
          code: 'Xinjiang',
          name: '新疆',
          imgUrl: '../../images/p/p1.png'
        }
      ]
    ],
    groupList : {
      "Liaoning":[
        {
          group:'g2',
          reddot:true,
          imgUrl: '../../images/group/group1.png',
          name: 'group2',
          message: 'This is desc of group2'
        },
        {
          group:'g3',
          reddot:true,
          imgUrl: '../../images/group/group2.png',
          name: 'group3',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: '../../images/group/group3.png',
          name: 'group3',
          message: 'This is desc of group3'
        }
      ],
      "Beijing":[
        {
          group:'g2',
          imgUrl: '../../images/group/group4.png',
          name: 'group2',
          message: 'This is desc of group2'
        },
        {
          group:'g3',
          imgUrl: '../../images/group/group5.png',
          name: 'group3',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: '../../images/group/group10.png',
          name: 'group3',
          message: 'This is desc of group3'
        }
      ],
      "Zhejiang":[
        {
          group:'g2',
          imgUrl: '../../images/group/group4.png',
          name: 'group2',
          message: 'This is desc of group2'
        },
        {
          group:'g3',
          imgUrl: '../../images/group/group5.png',
          name: 'group3',
          message: 'This is desc of group3'
        },
        {
          group:'g3',
          imgUrl: '../../images/group/group9.png',
          name: 'group3',
          message: 'This is desc of group3'
        }
      ]
    },
  },

  itemTaped(e){
    this.setData({
      pcode:e.currentTarget.dataset.pcode
    })
  }

});