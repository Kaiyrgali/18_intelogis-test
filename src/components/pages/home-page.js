import React from 'react';

import LeftSider from '../left-sider';
import MainContainer from '../main-container';
import 'antd/dist/antd.css';
import {
  FlagOutlined,
  CalculatorOutlined,
  FileExcelOutlined,
} from '@ant-design/icons';

import { Layout } from 'antd';

const { Header, Footer } = Layout;

function HomePage() {

  return (
    <Layout hasSider>

      <LeftSider />
      
      <Layout  style={{ marginLeft: 200 }}>
        <Header  style={{paddingLeft: '30px', backgroundColor: 'grey', color: 'white', fontSize: '30px', textAlign: 'left' }} >
          <FlagOutlined style={{ paddingLeft: '30px' }}/>
          <CalculatorOutlined style={{  paddingLeft: '30px', color: 'blue' }}/>
          <FileExcelOutlined style={{ paddingLeft: '30px' }}/>
        </Header>
        <MainContainer />
        <Footer style={{ textAlign: 'center' }}>Bekkali Kaiyrgali ©2022 for ILS Online
        </Footer>
      </Layout>

    </Layout>

  );
}

export default HomePage;
