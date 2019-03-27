import React from 'react';
import styles from './page.css';
import BaseInfo from './components/baseinfo';
import Project from './components/project';
import Experience from './components/experience';
import Skill from './components/skills'

function Resume() {
  return (
    <div className={styles.normal}>
      <BaseInfo />
      <Experience />
      <Project />
      <Skill />
    </div>
  );
}

export default Resume;
