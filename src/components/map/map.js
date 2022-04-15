import React from 'react';
import { connect } from 'react-redux';
import RoutingMachine from '../routing-machine/routing-machine';
import {
  MapContainer, TileLayer, Marker, Popup, Polyline,
} from 'react-leaflet';

function MapRender({ activeOrder }) {
  if (activeOrder) {
    const startMarker = [activeOrder.startPoint.gpsN, activeOrder.startPoint.gpsW];
    const finishMarker = [activeOrder.finishPoint.gpsN, activeOrder.finishPoint.gpsW];
    const startMarkerPopup = activeOrder.startPoint.name;
    const finishMarkerPopup = activeOrder.finishPoint.name;

    const polyline = [
      startMarker,
      finishMarker,
    ];
      
    return (
      <span>
        <Marker position={startMarker}>
          <Popup>
            {startMarkerPopup}
          </Popup>
        </Marker>

        <Marker position={finishMarker}>
          <Popup>
            {finishMarkerPopup}
          </Popup>
        </Marker>

        <Polyline
          pathOptions={{ color: 'red', weight: 4 }}
          positions={polyline}
        />


      </span>
    );
  }
  return null;
}

function Map({ activeOrder }) {

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} className="map-container">

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* маршрут выстраивается двумя способами
      1. функция MapRender выстаивает прямую линию и работает без ошибок */}
      <MapRender activeOrder={activeOrder} />
      {/* 2. подключенный RoutingMachine не рендерится при смене активного ордера и изменении точек погрузки\выгрузки. Причину за отведенное время на выполнение тестового задания ен нашел. */}
      {(activeOrder) ? <RoutingMachine activeOrder={activeOrder}/> : <span></span> }

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
