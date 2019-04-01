import React, { Component } from 'react';
import { Row, Col, Tag , Avatar, Divider } from 'antd';
import { connect } from 'dva';
import styles from './index.css';
import profile from './images/profile.jpg'
class BaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info:{}
    };
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type : 'resume/experience',
      payload : {},
    });
  }

  render() {
    const { info } = this.props;
    if(!info){
      return <div></div>
    }
    let { wanted , description }  = info;
    console.log("xxxxxxxxxxxxxxxxx" + wanted);
    let wantedArr = wanted.split(',');
    return (
      <div >
        <Row gutter={16}>
          <Col span={12}>
            <div className={styles['baseinfo']}>
              <div className={styles['header']}>基本信息</div>
              <Divider style={{paddingTop:0,marginTop:0}}/>
              <div className={'info'} style={{display:'flex', justifyContent:'space-around',alignItems:'top'}}>
                  <div>
                    <Avatar size={200} src={profile} style={{marginLeft:'50px'}}/>
                  </div>
                  <div style={{flexGrow:1, margin: '0 100px'}}>
                    <h1>王政操</h1>
                    <div className={styles["info-item"]}><label>联系电话：</label><span>{info.phone}</span></div>
                    <div className={styles["info-item"]}><label>最高学历：</label><span>{info.education}</span></div>
                    <div className={styles["info-item"]}><label>出生日期：</label><span>{info.birth}</span></div>
                    <div className={styles["info-item"]}><label>职场状态：</label><span>{info.state}</span></div>
                    <div className={styles["info-item"]}><label>求职意向：</label><span>
                      {
                        wantedArr.map((want, index) => {
                          return <Tag color="blue" key={index}>{want}</Tag>;
                        })
                      }
                    </span></div>
                  </div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className={styles['baseinfo']}>
              <div className={styles['header']}>自我介绍</div>
              <Divider style={{paddingTop:0,marginTop:0}}/>
              <div className={styles['description']} dangerouslySetInnerHTML={{__html: description}} >

              </div>
            </div>
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
