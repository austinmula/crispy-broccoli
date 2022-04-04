import DetailedTable from '../components/dashboard-components/admin/DetailedTable';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import LocationSummary from '../components/dashboard-components/admin/LocationSummary';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationChart from '../charts/LocationChart';
import RegSummary from '../components/dashboard-components/admin/RegSummary';
import UserRegChart from '../charts/UserRegChart';
import WeeklyData from '../components/WeeklyData';

// import Heading from '../components/dashboard-components/Heading';

const generateReport = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  let text1 = dd + '/' + mm + '/' + yyyy;

  const doc = new jsPDF();
  let text = 'Admin System Report';

  let textX = (doc.internal.pageSize.getWidth() - doc.getTextWidth(text)) / 2;
  let textX1 = (doc.internal.pageSize.getWidth() - doc.getTextWidth(text1)) / 2;
  doc.text(text, textX, 10);
  doc.text(text1, textX1, 20);

  doc.text('New Users this Week', 15, 30);
  autoTable(doc, { html: '#detailed-table', margin: { top: 35 } });

  doc.text(
    'User Distribution By County',
    15,
    doc.autoTable.previous.finalY + 10
  );
  autoTable(doc, {
    html: '#location-table',
    startY: doc.autoTable.previous.finalY + 15,
  });
  doc.text('Registration Rate', 15, doc.autoTable.previous.finalY + 10);
  autoTable(doc, {
    html: '#reg-rate-table',
    startY: doc.autoTable.previous.finalY + 15,
  });
  doc.text('Weekly Temperature', 15, doc.autoTable.previous.finalY + 10);
  autoTable(doc, {
    html: '#weekly-temp-table',
    startY: doc.autoTable.previous.finalY + 15,
  });
  doc.text('Weekly Humidity', 15, doc.autoTable.previous.finalY + 10);
  autoTable(doc, {
    html: '#weekly-humid-table',
    startY: doc.autoTable.previous.finalY + 15,
  });
  doc.text('Weekly Water Level', 15, doc.autoTable.previous.finalY + 10);
  autoTable(doc, {
    html: '#weekly-wl-table',
    startY: doc.autoTable.previous.finalY + 15,
  });

  doc.save('Syst-report.pdf');
};

const Report = () => {
  const [locationsummary, setLocationSummary] = useState([]);
  const [userDatasummary, setUserdataSummary] = useState([]);
  useEffect(() => {
    const fetchSummary = async () => {
      const response = await axios.get(
        'http://localhost:4001/api/users/distribution'
      );
      console.log(response.data);
      setLocationSummary(response.data);
    };
    fetchSummary();
  }, []);
  useEffect(() => {
    const fetchSummary = async () => {
      const response = await axios.get(
        'http://localhost:4001/api/users/summary'
      );
      console.log(response.data);
      setUserdataSummary(response.data);
    };
    fetchSummary();
  }, []);
  return (
    <div>
      <div className='flex items-center justify-end border-2 border-dashed border-gray-600 h-full mt-3 p-2'>
        <div>
          <button
            onClick={generateReport}
            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
          >
            Generate Report pdf
          </button>
        </div>
      </div>
      <h1 className='my-5 font-serif text-2xl'>New Users this Week</h1>
      <DetailedTable />
      <h1 className='my-5 font-serif text-2xl'>User Distribution By County</h1>
      <LocationSummary summary={locationsummary} />
      <h1 className='my-5 font-serif text-2xl'>New Users Per Week</h1>
      <RegSummary summary={userDatasummary} />
      <WeeklyData />
    </div>
  );
};

export default Report;
