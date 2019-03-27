import React, { Component } from 'react';
import { Row, Col, Tag , Tabs, Card } from 'antd';
import { connect } from 'dva';
import styles from './index.css';

const TabPane = Tabs.TabPane;

class Project extends Component {

  componentDidMount() {
    let {dispatch} = this.props;
    dispatch({type: 'resume/project'});
  }

  render() {
    const { project } = this.props;
    if(!project){
      return  <div className={styles.project}></div>
    }
    return (
      <div className={styles.project}>
        <Card title="项目">
          <Tabs defaultActiveKey="1">
            {
              project.map((proj , index) => {
                const {name, description, resbonsiblility, content} = proj;
                return <TabPane tab={ name } key={index + ''}>
                  <div className={styles['item']}>
                    <Row>
                      <Col span={2}><span className={styles['label']}>产品简介：</span></Col>
                      <Col span={22}>
                        { description }
                      </Col>
                    </Row>
                  </div>
                  <div className={styles['item']}>
                    <Row>
                      <Col span={2}><span className={styles['label']}>职责：</span></Col>
                      <Col span={22}>
                        {
                          resbonsiblility.map((resp, index) => {
                            return <Tag color="darkseagreen" key={index}>{resp}</Tag>
                          })
                        }

                      </Col>
                    </Row>
                  </div>
                  <div className={styles['item']}>
                    <Row>
                      <Col span={2}><span className={styles['label']}>工作内容：</span></Col>
                      <Col span={22}>
                        <div dangerouslySetInnerHTML={{__html: content}}></div>
                      </Col>
                    </Row>
                  </div>
                </TabPane>
              })
            }
          </Tabs>
        </Card>
       </div>
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
