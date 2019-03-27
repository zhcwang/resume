export default {
  'GET /api/resume': {
      info: {
        name: '王政操',
        state: '在职',
        phone: '15842668910',
        wanted: ['大连','Java全栈'],
        education: '研究生',
        birth: '1990-07-21',
        description: '本人性格开朗、稳重、有活力，待人热情、真诚、能维护良好的同事关系；<br/><br/>注重自我修养，关注他人感受，有很强的集体概念和团队协作精神，具有较强的适应能力；<br/><br/>工作认真负责，积极主动，勇于承受压力，勇于创新，有较强的责任感；<br/><br/>自我驱动型人格，注重自我提升、技术栈扩充，以求更好的回馈于工作；<br/><br/>本人热爱计算机技术、能熟练使用相关软件、愿意拥抱变化，增强自我工作能力；<br/><br/>具有两年Java全栈开发、项目管理以及客户支持经验，能较好的完成软件产品开发、部署、实施等工作',
      }
  },
  'GET /api/experience': {
    experience: [
      {
        from:'2009-09',
        to: '2013-07',
        workspace:'大连理工大学',
        position: '全日制本科',
      },
      {
        from:'2013-09',
        to: '2014-09',
        workspace:'大中国人民解放军第五三一一工厂',
        position: '技术员',
      },
      {
        from:'2015-09',
        to: '2017-07',
        workspace:'大连理工大学',
        position: '全日制研究生',
      },
      {
        from:'2017-07',
        to: '至今',
        workspace:'东软集团（大连）有限公司',
        position: '高级JAVA开发工程师',
      }
    ]
  },
  'GET /api/project': {
    project: [
      {
        name:'数据比对平台',
        description:'数据比对平台，是一款应用于识别并找平两端数据库表数据差异的数据一致性保障工具',
        resbonsiblility: [
          '全栈开发',
          '原型设计',
          '实施支持'
        ],
        content:'功能研发：原型设计，前后台功能研发以及提交功能测试。<br/>客户管理：对接项目经理，完成客户需求，包括：bug排查、性能分析、功能定制、环境升级。<br/>版本管理：负责产品版本管理，每月发版。<br/>',
      },
      {
        name:'应用数据连接平台',
        description:'应用数据连接平台，是一款基于拦截网络Http(s)请求，二次封装API的数据抓取工具',
        resbonsiblility: [
          '产品负责人',
          '迭代规划',
          '全栈研发',
          '实施支持',
        ],
        content:'产品管理：产品方向构思、调整，与产品经理沟通产品问题，后续技术调研、技术验证以及原型开发。<br/>迭代管理：安排迭代计划，评估优先级、评估工作量，分配迭代任务。<br/>项目管理：可行性验证、工作量评估、确定实施方案。<br/>客户管理：与项目经理以及现场客户沟通需求，安排实施。客户培训、远程协助、问题排查、以及版本升级。<br/>功能研发：原型设计，前后台功能研发以及提交功能测试。<br/>质量控制：负责产品代码检查<br/>版本管理：版本管理，每月发版<br/>',
      }
    ]
  },
  'GET /api/skill': {
    skill: {
      score : [
        { name: 'Java', qualification: 8},
        { name: 'Spring', qualification: 8},
        { name: 'Spring MVC', qualification: 8},
        { name: 'Hibernate', qualification: 8},
        { name: 'Mybatis', qualification: 6},
        { name: 'Spring Boot', qualification: 6},
        { name: 'Spring Cloud', qualification: 6},
        { name: 'Struts', qualification: 7},
        { name: 'Docker', qualification: 6},
        { name: 'Jenkins', qualification: 7},
        { name: 'Allatori', qualification: 8},
        { name: 'HTML', qualification: 7},
        { name: 'CSS', qualification: 6},
        { name: 'JS', qualification: 7},
        { name: 'ES6', qualification: 7},
        { name: 'JQuery', qualification: 7},
        { name: 'React', qualification: 6},
        { name: 'Git', qualification: 8},
        { name: 'Mysql', qualification: 7},
        { name: 'Oracle', qualification: 6},
        { name: 'Redis', qualification: 6},
        { name: 'Chrome插件', qualification: 9},
      ]
    }
  },
};
