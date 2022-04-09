import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopHeader from '../shop-header/shop-header';
import { HomePage, ArchivePage, NotFound } from '../pages';
import store from '../../store';
import ErrorBoundry from '../error-boundry';
import { RatesStoreServiceProvider } from '../orderstore-service-context';
// import RatesStoreService from '../../services/points-store';

import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline  } from 'react-leaflet'

import 'antd/dist/antd.css';

// const rateStoreService = new RatesStoreService();

function Map() {

  const polyline = [
    [51.505, -0.09],
    [51.51, -0.12],
  ]
  
  return (
  
      <MapContainer center={[51.505, -0.09]} zoom={13} className='map-container'>
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>


        <Marker position={[51.555, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Polyline pathOptions={{ color: 'red', weight: 4 }} positions={polyline} />

        <Circle center={[50.5, 30.5]} radius={200} pathOptions={{ color: 'blue' }} />

        
        
      </MapContainer>
    
  );
}

export default Map;
