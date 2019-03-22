import React, { Component } from 'react';
import { Row, Col, Tag , Avatar } from 'antd';
import { connect } from 'dva';
import styles from './index.css';
import profile from './images/profile-circle.png'

class BaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info:{}
    };
  }

  render() {
    const { info } = this.props;
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row type="flex" justify="space-between">
          <Col span={18}>
            <h1>{info.name}</h1>
            <div className={styles["info-item"]}><label>电话：</label><span>{info.phone}</span></div>
            <div className={styles["info-item"]}><label>状态：</label><span>{info.state}</span></div>
            <div className={styles["info-item"]}><label>求职意向：</label><span><Tag color="darkseagreen">{info.wanted}</Tag></span></div>
            <div className={styles["info-item"]}><label>简介：</label><span>{info.description}</span></div>
          </Col>
          <Col span={6}>
            <Avatar size={164} src={profile} />
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { resume : { info } } = state;
  return {
    info
  };
}

export default connect(mapStateToProps)(BaseInfo);
