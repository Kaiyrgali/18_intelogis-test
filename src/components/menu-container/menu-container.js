import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createOrders from  '../../services/points-store-service';
import MenuItem from '../menu-item';
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

const pointList = points.map((point) => point.name).sort();
function handleChange(value) {
  console.log(`selected ${value}`);
}


console.log(pointList);
// submenu keys of first level
// const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

// const orders = createOrders();
// console.log(orders);
// import createOrders from '../../services/points-store-service';

function MenuContainer ({ orders }) {
  // sub=orders[0].orderNumber:
  // if (orders) {console.log("details", orders[0].orderNumber);};

  // const openSub = (!orders) ? '' : orders[0].orderNumber;
 

  // console.log( 'orderStoreService', orderStoreService);
  // console.log(orders))
  // console.log('MenuContainer', orders);
  // if (orders) {console.log('MenuContainer', orders)}
  const [openKeys, setOpenKeys] = useState(['sub']);

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
    

    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ overflowX: 'scroll', height: '100vh', }}>

      {orders.map((order)=>(
            <SubMenu key={order.orderNumber}
                     icon={<MailOutlined />}
                     title={order.orderNumber}
                     onClick = {()=>console.log('click')} >
              <Menu.Item key={order.orderNumber+'fp'}>{order.startPoint.name}</Menu.Item>
              <Menu.Item key={order.orderNumber+'sp'}>{order.finishPoint.name}</Menu.Item>
              <Menu.Item key={order.orderNumber+'select'}>{pointList[0]}</Menu.Item>

            </SubMenu>

          ))}

      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
     <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
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
        
        <MenuContainer orders = {orders}
          // ratesValute={Object.values(rates.Valute)}
          // today={today}
        />
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