import React from 'react'
import { Link } from 'react-router-dom'

const tables = [
  { id: 200, status: 'Available' },
  { id: 201, status: 'Available' },
  { id: 202, status: 'Available' },
  { id: 203, status: 'Available' },
  { id: 204, status: 'Available' },
  { id: 205, status: 'Available' },
];

function Table() {
  return (
    <div>
        <div className="tabletext">
            <h1 className='text-primary'style={{fontFamily:'cursive'}}>Table Overview</h1>
        <h2>Let’s Get You Back to the Table</h2>
        </div>

        <table className='table table-hover'>
            <tr><th>Table No</th><th>Status</th><th>view</th></tr> <hr />

            <tr><td>200</td><td className='text-success'>Available</td><td className='view'><Link className='btn btn-primary ' style={{width:"80px", borderRadius:"20px"}} to={`/table/${tables.id}`}>view</Link></td></tr>
            <hr />
            <tr><td>201</td><td className='text-success'>Available</td><td><Link className='btn btn-primary ' style={{width:"80px",borderRadius:"20px"}} to={`/table/${tables.id}`}>view</Link></td></tr>
            <hr />
            <tr><td>202</td><td className='text-success'>Available</td><td><Link className='btn btn-primary ' style={{width:"80px",borderRadius:"20px"}}to={`/table/${tables.id}`}>view</Link></td></tr>
            <hr />
            <tr><td>203</td><td className='text-success'>Available</td><td><Link className='btn btn-primary ' style={{width:"80px",borderRadius:"20px"}}to={`/table/${tables.id}`}>view</Link></td></tr>
            <hr />
            <tr><td>204</td><td className='text-success'>Available</td><td><Link className='btn btn-primary ' style={{width:"80px",borderRadius:"20px"}}to={`/table/${tables.id}`}>view</Link></td></tr>
            <hr />
        </table>
    </div>
  )
}
export default Table;