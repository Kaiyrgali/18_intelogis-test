import React from 'react';
import Map from '../map';
import VectorLayersExample from '../map/map2'
import MenuContainer from '../menu-container';
// import MenuContainer from '../menu-container';
import { Layout, Menu } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
import { Row, Col, Divider } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

function MainContainer() {
  return (
    <Row>
          <Col flex="70px" >
            <MenuContainer style={{ overflowX: 'scroll' }}/>
            {/* <MenuContainer  style={{ overflowX: 'scroll' }}/> */}
          </Col>
          <Col flex="auto">
            <Content style={{ margin: '0px 0px 0', overflow: 'none' }}>
              <div className="site-layout-background" style={{ padding: 0, textAlign: 'center' }}>
                {/* возможно этот див мешает карте */}
                <Map />
                {/* <VectorLayersExample /> */}

              </div>
            </Content>
          </Col>
        </Row>
  );
}

export default MainContainer;
