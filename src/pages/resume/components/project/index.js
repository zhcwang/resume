import React, { Component } from 'react';
import { Row, Col, Tag , Icon, Typography, Divider , Tabs, Card } from 'antd';
import { connect } from 'dva';
import styles from './index.css';

const TabPane = Tabs.TabPane;

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project:[]
    };
  }

  render() {
    const { project } = this.props;
    return (
      <Card title="项目" hoverable={true} size={'small'}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="数据比对平台" key="1">
            <div>
              <span className={styles["responsibility"]}>职责：</span><span>主力研发</span>
            </div>
            <div>
              <span>工作内容：</span><span>compare工作内容</span>
            </div>
          </TabPane>
          <TabPane tab="应用数据连接平台" key="2">
            <div>
              <span className={styles["responsibility"]}>职责：</span><span>产品负责人</span>
            </div>
            <div>
              <span className={styles["responsibility"]}>工作内容：</span><span>adc工作内容</span>
            </div>
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const { resume : { project } } = state;
  return {
    project
  };
}

export default connect(mapStateToProps)(Project);
