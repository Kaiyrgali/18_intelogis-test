import React from 'react';
import { useState } from 'react';
import Map from '../map';
import VectorLayersExample from '../map/map2'
import MenuContainer from '../menu-container';
// import MenuContainer from '../menu-container';
import { Layout, Menu } from 'antd';

// import { Divider } from 'antd';

   


const { Header, Content, Footer, Sider } = Layout;
import { Row, Col, Divider } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';

// const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;


function MainContainer() {
  let isChanging = false;
  const [colWidth, setColWidth] = useState('300px');
  const handleMouseDown = () => {
    isChanging = true;
    document.addEventListener("mousemove", (e)=>{
    if (isChanging) {setColWidth(`${(e.clientX-200)}px`)
    }});

    document.addEventListener("mouseup", ()=>{isChanging = false})

  }
  
    // const newWidth = '10px'
    // setColWidth(newWidth);
  

  return (
    <Row>
          <Col flex={colWidth} style={{ display: 'flex'}}>
            {/* <div style={{ display: 'flex'}}> */}
              <MenuContainer style={{ overflowX: 'scroll' }}/>
              <Divider type="vertical" style={{ backgroundColor: 'red', height: '100%', width: '2px', cursor: 'col-resize' } } onMouseDown={(e) => handleMouseDown()}/>
            {/* </div> */}
          </Col>
            {/* <Divider type="vertical" dashed='true' style={{ backgroundColor: 'red', height: '100%', cursor: 'col-resize' } }/> */}
          
          <Col flex="auto" style={{ display: 'flex'}}>
            {/* <Divider type="vertical" dashed='true' style={{ backgroundColor: 'red', height: '100%', cursor: 'col-resize' } }/> */}
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
