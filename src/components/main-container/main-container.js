import React from 'react';
import { useState } from 'react';
import Map from '../map';
import MenuContainer from '../menu-container';

import { Row, Col, Divider } from 'antd';
import { Layout } from 'antd';

const { Content } = Layout;

function MainContainer() {
  let isChanging = false;
  const [colWidth, setColWidth] = useState('100px');
  const handleMouseDown = () => {
    isChanging = true;
    document.addEventListener("mousemove", (e)=>{
      if (isChanging) {setColWidth(`${(e.clientX-200)}px`)
      }});
    document.addEventListener("mouseup", ()=>{isChanging = false})
  }

  return (
    <Row>
      <Col flex={colWidth} style={{ display: 'flex'}}>
        <MenuContainer style={{ overflowX: 'scroll' }}/>
        <Divider type="vertical" style={{ backgroundColor: 'red', height: '100%', width: '2px', cursor: 'col-resize' } } onMouseDown={(e) => handleMouseDown()}/>
      </Col>
      
      <Col flex="auto" style={{ display: 'flex'}}>
        <Content style={{ margin: '0px 0px 0', overflow: 'none' }}>
          <Map />
        </Content>
      </Col>
    </Row>
  );
}

export default MainContainer;
