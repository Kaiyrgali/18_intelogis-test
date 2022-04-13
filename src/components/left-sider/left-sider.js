import React from 'react';
import { OrderedListOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Sider } = Layout;

function LeftSider() {
  return (
    <Sider
      style={{
        backgroundColor: '#24499a',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div style={{
        color: 'white', backgroundColor: '#66b32f', marginTop: '90px', paddingTop: '10px', paddingBottom: '10px',
      }}
      >
        <OrderedListOutlined style={{ fontSize: '20px' }} />
        <p>Orders</p>
      </div>
    </Sider>
  );
}

export default LeftSider;
