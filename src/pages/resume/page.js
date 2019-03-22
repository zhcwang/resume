import React from 'react';
import styles from './page.css';
import BaseInfo from './components/baseinfo';
import Experience from './components/experience';
import Project from './components/project';
import { Row, Col, Tag , PageHeader, Timeline, Icon, Card   } from 'antd';

function Resume() {
  return (
    <div className={styles.normal}>
      <BaseInfo />
      <div style={{padding: '30px' }}>
        <Row gutter={16} type="flex" justify="start">
          <Col span={10}>
            <Experience />
          </Col>
          <Col span={14}>
            <Project />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Resume;
