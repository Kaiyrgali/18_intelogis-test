import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShopHeader from '../shop-header/shop-header';
import { HomePage, ArchivePage, NotFound } from '../pages';
import store from '../../store';
import ErrorBoundry from '../error-boundry';
import { RatesStoreServiceProvider } from '../orderstore-service-context';

import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline  } from 'react-leaflet'

import 'antd/dist/antd.css';
import { getPointsList } from '../../services/points-store-service';

function MapRender ({activeOrder}) {

  if (activeOrder) {
    const startMarker = [activeOrder.startPoint.gpsN, activeOrder.startPoint.gpsW];
    const finishMarker = [activeOrder.finishPoint.gpsN, activeOrder.finishPoint.gpsW];
    const startMarkerPopup = activeOrder.startPoint.name;
    const finishMarkerPopup = activeOrder.finishPoint.name

    const polyline = [
      startMarker,
      finishMarker
    ]
    return(
      <span>
        <Marker position={startMarker} >
          <Popup>
            {startMarkerPopup}
          </Popup>
        </Marker>

        <Marker position={finishMarker}>
          <Popup>
            {finishMarkerPopup}
          </Popup>
        </Marker>

        <Polyline pathOptions={{ color: 'red', weight: 4 }}
                  positions={polyline} />
      </span>
  )}
  return null
}

function Map({activeOrder}) {

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} className='map-container'>
        
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        
      <MapRender activeOrder={activeOrder}/>
        
    </MapContainer>
    
  );
}

const mapStateToProps = ({
  orderList: {
    activeOrder,
  },
}) => ({
  activeOrder,
});

export default connect(mapStateToProps, null)(Map);
