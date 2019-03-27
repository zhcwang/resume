import React from 'react';
import styles from './index.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Welcome!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          该工程创建于19年3月，主要用来综合近期所学WEB前端React和ES6相关知识，同时作为简历面板。
        </li>
        <li>
          主要应用技术如下：React、Dva（数据流管理）、Ant Design、BizCharts、Roadhogrc（假数据Mock）、SpringBoot(Config, Actuator)、Mybatis、Mysql
        </li>
        <li>
          该工程主要加深了对前端生态、React虚拟DOM以及单项数据流管理的理解，后台简单设计Mysql表结构存储。
        </li>
      </ul>
    </div>
  );
}

export default IndexPage;
