import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopHeader from '../shop-header/shop-header';
import { HomePage, ArchivePage, NotFound } from '../pages';
import store from '../../store';
import ErrorBoundry from '../error-boundry';
import { RatesStoreServiceProvider } from '../orderstore-service-context';
// import RatesStoreService from '../../services/points-store';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'antd/dist/antd.css';

// const rateStoreService = new RatesStoreService();

function Map() {
  return (
  
      <MapContainer center={[51.505, -0.09]} zoom={13} className='map-container'>
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        
      </MapContainer>
    
  );
}

export default Map;
