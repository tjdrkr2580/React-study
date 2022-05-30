import React from 'react'
import { Link } from 'react-router-dom';
import dummy from "../db/data.json"

const Daylist = () => {
    console.log(dummy);
  return (
    <ul className='list_day'>
    {dummy.days.map(day => (
        <li key={day.id}><Link to={`/day/${day.day}`}>Day {day.day}</Link></li>
    ))}    
    </ul>
  )
}

export default Daylist