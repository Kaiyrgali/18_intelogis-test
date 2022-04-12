import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createOrders from  '../../services/points-store-service';
// import MenuItem from '../menu-item';
import getOrders from '../../actions';
import { activeOrder } from '../../actions/actions'
import { compose } from '../../utils';
import { withOrderStoreService } from '../hoc';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import { points } from '../../services/points-store-service'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
import { Select } from 'antd';

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
    console.log('keys' ,keys);
       const currentOrder = orders.find((order)=>order.id==keys[1]);
        console.log('current', currentOrder);
        onActiveOrder(currentOrder);
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    // }
  };

  const startOnChange = (value, lastOrder) => {
    const newStartPoint = points.find((point)=>point.name===value);
    const newOrder = {
      ...lastOrder,
      startPoint: newStartPoint
    } ;
    onActiveOrder(newOrder);
    console.log(newOrder);
    console.log(orders);
    orders.splice((newOrder.id-1), 1, newOrder);
    console.log((newOrder.id-1), orders);
  }

  const finishOnChange = (value, lastOrder) => {
    const newFinishPoint = points.find((point)=>point.name===value);
    const newOrder = {
      ...lastOrder,
      finishPoint: newFinishPoint
    } ;
    onActiveOrder(newOrder);
    orders.splice((newOrder.id-1), 1, newOrder);
    console.log((newOrder.id-1), orders);
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
              onSelect={(value, event) => startOnChange(value, order)}>
                {PointList()};
            </Select>
          </Menu.Item>

          <Menu.Item key={'fp'+order.id}>
            <Select
              defaultValue={order.finishPoint.name}
              style={{ width: 200, color: 'red' }} 
              onSelect={(value, event) => finishOnChange(value, order)}>
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
    orders,
    activeOrder,
  },
}) => ({
  orders,
  activeOrder,
});

const mapDispatchToProps = (dispatch) => ({
  
  onActiveOrder: (newOrder) => {
    console.log(`Increase ${newOrder}`);
    dispatch(activeOrder(newOrder));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);

// export default MenuContainer;