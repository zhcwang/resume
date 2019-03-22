import React, { Component } from 'react';
import { Row, Col, Tag , PageHeader, Timeline, Icon, Card   } from 'antd';
import { connect } from 'dva';
import styles from './index.css';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expirence:[]
    };
  }

  render() {
    const { expirence } = this.props;
    return (
      <Card title="教育/工作经历" hoverable={true} size={'small'}>
        <Timeline pending={"至今"} pendingDot={<Icon type="loading" />}>
          <Timeline.Item color={'green'}>2009-09 --> 2013-07  大连理工大学(全日制本科)</Timeline.Item>
          <Timeline.Item color={'green'}>2013-09 --> 2014-09  中国人民解放军第五三一一工厂 技术员</Timeline.Item>
          <Timeline.Item color={'green'}>2015-09 --> 2017-07  大连理工大学(全日制研究生)</Timeline.Item>
          <Timeline.Item color={'green'}>2017-07<br/>东软集团（大连）有限公司 高级JAVA开发工程师</Timeline.Item>
        </Timeline>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  const { resume : { expirence } } = state;
  return {
    expirence
  };
}

export default connect(mapStateToProps)(Experience);
