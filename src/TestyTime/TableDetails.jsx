import React from 'react';
import { useParams,Link } from 'react-router-dom';
import serving from './testyimages/serving.jpeg'

const tableData = {
  200: { seatCount: 5, reserved: 'NA' },
  201: { seatCount: 4, reserved: 'NA' },
  202: { seatCount: 6, reserved: 'NA' },
  203: { seatCount: 2, reserved: 'NA' },
  204: { seatCount: 8, reserved: 'NA' },
  205: { seatCount: 3, reserved: 'NA' },
};

function TableDetails() {
  const { id } = useParams();
  const table = tableData[id];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '40px' }}>
      <div style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '10px', width: '300px' }}>
        <h4 className="text-center">Table Overview</h4>
        <hr />
        <p><strong>Table No:</strong> {200}</p>
        <p><strong>Seat Count:</strong> {5}</p>
        <p><strong>Status:</strong> Available</p>
        <p><strong>Reserved:</strong> {'NA'}</p>
        <Link to="/booktable" className='btn btn-primary' id='booktable'>Book table now</Link>

      </div>
      <div className='serving-img'>
        <img
          src={serving}
          alt="Table Illustration"
          style={{ width: '660px' }}
        />
      </div>
    </div>
  );
}

export default TableDetails;
