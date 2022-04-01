import ComboChart from '../../charts/ComboChart';
import Card from './Card';

const Realtime = ({ realtime, data }) => {
  return (
    <div>
      <div className='flex gap-3 py-3 flex-wrap'>
        <Card
          value={realtime.temperature}
          text='Temperature Sensor'
          symbol={'°c'}
        />

        <div className='flex-1 bg-gray-100 shadow-md p-2'>
          <ComboChart data={data} />
        </div>
      </div>

      <div className='flex gap-3'>
        <Card value={realtime.humidity} text='Humidity Sensor' symbol='%' />
        <Card value={realtime.WL} text='Water Level Sensor' symbol='%' />
      </div>
    </div>
  );
};

export default Realtime;
