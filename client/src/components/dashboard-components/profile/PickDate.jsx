import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PickDate = () => {
  return (
    <div>
      <h2 className='text-2xl'>Add An Event</h2>
      <div>
        <input
          type='text'
          placeholder='Add Title'
          style={{ width: '20%', marginRight: '10px' }}
        />
        <DatePicker
          placeholderText='Start Date'
          style={{ marginRight: '10px', width: '100vw' }}
        />
        {/* <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} /> */}
        <button className='button'>Add Event</button>
      </div>
    </div>
  );
};

export default PickDate;
