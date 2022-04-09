import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createOrders from  '../../services/points-store-service';
// import MenuItem from '../menu-item';
import getOrders from '../../actions';
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

function handleChange(value) {
  console.log(`selected ${value}`);
}

function MenuContainer ({ orders }) {

  const [openKeys, setOpenKeys] = useState(['']);

  const onOpenChange = (keys) => {
    console.log('keys' ,keys);
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    // if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    //   setOpenKeys(keys);
    // } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    // }
  };



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
              onChange={handleChange}>
                {PointList()};
            </Select>
          </Menu.Item>

          <Menu.Item key={'fp'+order.id}>
            <Select
              defaultValue={order.finishPoint.name}
              style={{ width: 200, color: 'red' }} 
              onChange={handleChange}>
                {PointList()};
            </Select>
          </Menu.Item>

        </SubMenu>
      ))}

    </Menu> 
  );
};

class OrderListContainer extends Component {
  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    const {
      orders
    } = this.props;
    
    if (orders) {
      console.log('OrderListContainer', orders);
      return (
        <MenuContainer orders = {orders} />
      );
    }
    return null;
  }
}


const mapStateToProps = ({
  orderList: {
    orders
  },
}) => ({
  orders
});

const mapDispatchToProps = (dispatch, { orderStoreService }) => bindActionCreators({
  getOrders: getOrders(orderStoreService),
}, dispatch);

export default compose(
  withOrderStoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(OrderListContainer);

// export default MenuContainer;