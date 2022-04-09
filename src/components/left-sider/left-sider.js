import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
import { MailOutlined, SettingOutlined } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

function LeftSider() {
  return (
    <Sider 
    // reverseArrow = {true} wrap={true}
      style={{
        overflow: 'auto',
        // collapsedWidth: 0,
        // collapsible: true,
        overflowX: 'scroll',
        // overflowY: 'visible',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" style={{marginTop: '90px', textAlign: 'center'}}>
        {/* <MenuItem > */}
          Orders
        {/* </MenuItem > */}
      </Menu>
    </Sider>
  );
}

export default LeftSider;
