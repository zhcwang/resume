import React from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';

function Header({ location }) {
  return (
    <Menu selectedKeys={[location.pathname]} mode="horizontal" theme="dark">
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="home" />Home
        </Link>
      </Menu.Item>
      <Menu.Item key="/resume">
        <Link to="/resume">
          <Icon type="idcard" />Resume
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(Header);
