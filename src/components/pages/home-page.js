import React from 'react';
import { useState } from 'react';

import Map from '../map';
import MenuContainer from '../menu-container';
import LeftSider from '../left-sider';
import MainContainer from '../main-container';


import { Layout, Menu } from 'antd';
import { Row, Col, Divider } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

// import createOrders from '../../services/points-store-service';


// import { Menu } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;
// submenu keys of first level

function HomePage() {
  

  // const orders = createOrders();
  // console.log(orders);

  return (
    <Layout hasSider>

      <LeftSider />
      
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <MainContainer />
        <Footer style={{ textAlign: 'center' }}>Bekkali Kaiyrgali ©2022 for ILS Online
        </Footer>
      </Layout>

    </Layout>

  );
}


export default HomePage;
