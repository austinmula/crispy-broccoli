import ComboChart from '../charts/ComboChart';
import Card from '../components/dashboard-components/Card';
import io from 'socket.io-client';
import { useEffect, useState, useRef } from 'react';

import moment from 'moment';

const Realtime = () => {
  const [realtime, setRealtime] = useState({});
  const [fullSet, setFullSet] = useState([]);
  const socket = useRef();
  useEffect(() => {
    socket.current = io('ws://localhost:3002');
  }, []);

  useEffect(() => {
    socket?.current.on('arduino-data', (data) => {
      // console.log(data);
      setRealtime(data);
      data = { ...data, date: moment(data.date).format('LT') };

      setFullSet((currentdata) => [...currentdata, data]);
      // console.log(fullSet.length);
    });
  }, []);
  return (
    <div className='my-4'>
      <div className='flex gap-3'>
        <Card value={realtime.humidity} text='Humidity Sensor' symbol='%' />
        <Card value={realtime.WL} text='Water Level Sensor' symbol='' />
        <Card
          value={realtime.temperature}
          text='Temperature Sensor'
          symbol={'°c'}
        />
      </div>

      <div className='my-4 h-72 bg-gray-100 shadow-md p-2'>
        <ComboChart data={fullSet} />
      </div>
      <div className='flex gap-3 py-3'>
        <Card value={realtime.FS} text='Float Switch' symbol='' />
        <Card value={realtime.motion} text='Motion Sensor' symbol={''} />
      </div>
    </div>
  );
};

export default Realtime;
