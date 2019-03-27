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
    const { experience } = this.props;
    if(experience.length === 0){
      return (<div className={styles.experience}><Card title="教育/工作经历"></Card></div>);
    }
    return (
      <div className={styles.experience}>
        <Card title="教育/工作经历">
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
  const { resume : { experience } } = state;
  return {
    experience
  };
}

export default connect(mapStateToProps)(Experience);
