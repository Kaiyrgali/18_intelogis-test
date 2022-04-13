import React, { Component } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import createOrders from  '../../services/points-store-service';

import activeOrder from '../../actions/actions'

import { points } from '../../services/points-store-service'
// import 'antd/dist/antd.css';
import { Select } from 'antd';
import { Menu } from 'antd';
import {  MailOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Option } = Select;

const orders = createOrders();

const PointList = () => {
  const pointList = points.map((point) => point.name).sort();
  return pointList.map((pointName)=>(
    <Option
      key={(pointName.toLocaleLowerCase()).replace(/\s/g, '')}
      value={pointName}
      style={{ textAlign: 'left' }}
    >
      {pointName}
    </Option>
  ));
}

function MenuContainer ({ activeOrder, onActiveOrder }) {

  const [openKeys, setOpenKeys] = useState(['']);

  const onOpenChange = (keys) => {
    const currentOrder = orders.find((order)=>order.id===+keys[keys.length - 1]);
    onActiveOrder(currentOrder);
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  const startOnChange = (value, lastOrder) => {
    const newStartPoint = points.find((point)=>point.name===value);
    const newOrder = {
      ...lastOrder,
      startPoint: newStartPoint
    } ;
    onActiveOrder(newOrder);
    orders.splice((newOrder.id-1), 1, newOrder);
  }

  const finishOnChange = (value, lastOrder) => {
    const newFinishPoint = points.find((point)=>point.name===value);
    const newOrder = {
      ...lastOrder,
      finishPoint: newFinishPoint
    } ;
    onActiveOrder(newOrder);
    orders.splice((newOrder.id-1), 1, newOrder);
  }

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ overflowX: 'scroll', height: '100vh', }}
    >

      {orders.map((order)=>(
        <SubMenu  
          key={order.id}
          icon={<MailOutlined />}
          title={order.orderNumber}
        >
          <Menu.Item key={'sp'+order.id}>
            <Select
              defaultValue={order.startPoint.name}
              style={{ width: 200, color: 'green' }}
              onSelect={(value) => startOnChange(value, order)}>
                {PointList()};
            </Select>
          </Menu.Item>

          <Menu.Item key={'fp'+order.id}>
            <Select
              defaultValue={order.finishPoint.name}
              style={{ width: 200, color: 'red' }} 
              onSelect={(value) => finishOnChange(value, order)}>
                {PointList()};
            </Select>
          </Menu.Item>

        </SubMenu>
      ))}

    </Menu> 
  );
};

const mapStateToProps = ({
  orderList: {
    // orders,
    activeOrder,
  },
}) => ({
  // orders,
  activeOrder,
});

const mapDispatchToProps = (dispatch) => ({
  
  onActiveOrder: (newOrder) => {
    dispatch(activeOrder(newOrder));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);