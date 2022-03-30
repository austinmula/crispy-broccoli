import React, { useState } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2022, 3, 0),
    // end: new Date(2022, 3, 0),
  },
  {
    title: 'Vacation',
    start: new Date(2022, 3, 7),
    // end: new Date(2022, 3, 10),
  },
  {
    title: 'Conference',
    start: new Date(2022, 3, 20),
    // end: new Date(2021, 6, 23),
  },
];

function Calender() {
  // const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState(events);

  // function handleAddEvent() {
  //   setAllEvents([...allEvents, newEvent]);
  // }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor='start'
        // endAccessor='end'
        style={{ height: 500 }}
      />
    </div>
  );
}

export default Calender;
