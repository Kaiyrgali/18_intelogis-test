import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({ activeOrder }) => {

    const startMarker = [activeOrder.startPoint.gpsN, activeOrder.startPoint.gpsW];
    const finishMarker = [activeOrder.finishPoint.gpsN, activeOrder.finishPoint.gpsW];
    const waypoints = [startMarker, finishMarker];

    const instance = L.Routing.control({
    waypoints: waypoints,
    lineOptions: {
      styles: [{ color: "red", weight: 4 }]
    },
    show: true,
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    showAlternatives: false
  })

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
