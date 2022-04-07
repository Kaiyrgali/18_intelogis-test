import React from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import createOrders from  '../../services/points-store-service';
// import MenuItem from '../menu-item';


import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

function MenuItem() {
  // console.log(order);
  return (

    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Navigation One">
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
      <Menu.Item key="4">Option 4</Menu.Item>
    </SubMenu>

  );
};

export default MenuItem;