import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='nav'>
      <Link to="./" className='link'>Home</Link>
      <Link to="./Student" className='link'>Student</Link>
      <Link to="./Contact" className='link'>Contact</Link>
    </div>
  )
}
