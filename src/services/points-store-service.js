export const points = [
  {
    id: 1,
    name: 'Westminster',
    gpsN: 51.500740,
    gpsW: -0.124742,
  },
  {
    id: 2,
    name: 'Museum of London',
    gpsN: 51.517949,
    gpsW: -0.096165,
  },
  {
    id: 3,
    name: 'The Mall',
    gpsN: 51.506878,
    gpsW: 0.128763,
  },
  {
    id: 4,
    name: 'Albert Bridge',
    gpsN: 51.506294,
    gpsW: 0.127416,
  },
  {
    id: 5,
    name: 'Millennium Mile',
    gpsN: 51.506275,
    gpsW: 0.127217,
  },
  {
    id: 6,
    name: 'Viewfinder Photography Gallery',
    gpsN: 51.48153,
    gpsW: 0.009849,
  },
  {
    id: 7,
    name: 'Jewel House',
    gpsN: 51.506138,
    gpsW: 0.127276,
  },
  {
    id: 8,
    name: 'Greenwich',
    gpsN: 51.478786,
    gpsW: 0.010675,
  },
  {
    id: 9,
    name: 'Downing Street',
    gpsN: 51.503254,
    gpsW: 0.12785,
  },
  {
    id: 10,
    name: 'Abbey Road',
    gpsN: 51.53696,
    gpsW: 0.183584,
  },
];

export const getPointsList = () => {
  const pointList = points.map((point) => point.name).sort();
  return pointList.map((pointName)=>(
    <Option value={pointName} style={{ textAlign: 'left' }}>{pointName}</Option>
  ));
}

const randomPoint = () => points[Math.floor(Math.random() * points.length)]

const orders = new Array();
console.log('new', orders);

function createOrders() {
  if (orders.length<=0) {
    for (let i = 0; i < 15; i++) {
      const startPoint = randomPoint();
      const finishPoint = randomPoint();
      if (startPoint !== finishPoint) {
        orders.push({ orderNumber: `Order №${orders.length + 1}`, startPoint, finishPoint });
      }
    }
  }
  return orders;
};

export default createOrders;
