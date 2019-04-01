import React, { Component } from 'react';
import { Timeline , Card   } from 'antd';
import { connect } from 'dva';
import styles from './index.css';

class Experience extends Component {

  componentDidMount(){
      const { dispatch } = this.props;
      dispatch({
        type : 'resume/fetch',
        payload : [],
      });
  }

  render() {
    const { experience, isLoading } = this.props;
    console.log('教育工作经历组件loading:' + isLoading);
    if(experience.length === 0){
      return (<div className={styles.experience}><Card title="教育/工作经历"></Card></div>);
    }
    return (
      <div className={styles.experience}>
        <Card title="教育/工作经历" loading={isLoading}>
          <Timeline>
            {
              experience.map((exp , index) => {
                  return <Timeline.Item key={index} color={'green'}>{exp.from} --
                    {exp.to} {exp.workspace} {exp.position}</Timeline.Item>;
                }
              )
            }
          </Timeline>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { resume : { experience },loading } = state;
  const isLoading = loading.effects['resume/fetch'];
  return {
    experience,
    isLoading
  };
}

export default connect(mapStateToProps)(Experience);
