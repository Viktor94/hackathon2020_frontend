import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './Daypicker.css';

export default function Daypicker() {

    const [selectedDate, setSelectedDate] = useState('')
    
    const handleSelectedDay = (day) => {
        setSelectedDate({ selectedDay: day })
    }

    return (
        <div className='daypicker-main'>
            {selectedDate.selectedDay ? (
                <h4>You selected {selectedDate.selectedDay.toLocaleDateString()}</h4>
            ) : (
                    <h4>Please select a day.</h4>
                )}
            <DayPicker onDayClick={handleSelectedDay} />       
        </div>
    )
}