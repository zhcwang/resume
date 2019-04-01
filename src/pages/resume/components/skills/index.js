import React, { Component } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
import styles from './index.css';

import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

class Skill extends Component {

  componentDidMount() {
    let { dispatch } = this.props;
    dispatch({type:'resume/skill'});
  }


  render() {
    const { skill } = this.props;

    // 定义度量
    const cols = {
      qualification: {
        alias: '熟练程度',
        min:0,
        minLimit:0,
        max:10,
        maxLimit:10,
      },
      name: { alias: '技能' }
    };

    const title = {
      textStyle: {
        fontSize: '14',
        textAlign: 'center',
        fill: '#999',
        fontWeight: 'bold',
      },
    };

    return (
      <div className={styles["skill-card"]}>
        <Card title="工作技能" hoverable={true}>
          <Chart height={300} width={window.innerWidth - 200} data={skill} scale={cols}>
            <Axis name="name" title={title}/>
            <Axis name="qualification" title={title}/>
            <Legend position="top" dy={-20} />
            <Tooltip />
            <Geom type="interval" position="name*qualification" color="name" />
          </Chart>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {

  const { resume : { skill }, loading } = state;
  return {
    skill,
    loading
  };

}

export default connect(mapStateToProps)(Skill);
