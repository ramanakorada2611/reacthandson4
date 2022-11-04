
import React from 'react'
import { Link } from 'react-router-dom'

export default function Student() {
  return (
    <>
    <h1 className='container'>Students Details:</h1>
    <button className='move'>Add Details</button>
    <center>
    <table  >
      <tr>
        <th>NAME</th>
        <th>AGE</th>
        <th>COURSE</th>
        <th>BATCH</th>
        <th>CHANGE</th>
      </tr>
      <tr>
       <td>Ramana</td>
       <td>21</td>
       <td>MERN</td>
       <td>july</td>
       <td><Link to=''>Edit</Link></td>
      </tr>
      <tr>
       <td>Surajit</td>
       <td>21</td>
       <td>MERN</td>
       <td>july</td>
       <td><Link to=''>Edit</Link></td>
      </tr>
      <tr>
       <td>Mahesh</td>
       <td>21</td>
       <td>MERN</td>
       <td>july</td>
       <td><Link to=''>Edit</Link></td>
      </tr>
      <tr>
       <td>Venkates</td>
       <td>21</td>
       <td>MERN</td>
       <td>july</td>
       <td><Link to=''>Edit</Link></td>
      </tr>
      <tr>
       <td>Pramod</td>
       <td>21</td>
       <td>MERN</td>
       <td>july</td>
       <td><Link to=''>Edit</Link></td>
      </tr>
      <tr>
       <td>Harish</td>
       <td>21</td>
       <td>MERN</td>
       <td>july</td>
       <td><Link to=''>Edit</Link></td>
      </tr>
    </table>
    </center>
    </>
  )
}

