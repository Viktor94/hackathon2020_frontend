import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './Daypicker.css';

export default function Daypicker() {
    
    const [selectedDate, setSelectedDate] = useState('')
    
    const handleSelectedDay = (day) => {
        let date = new Date(day);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        let correctDateFormat = dt + '/' + month + '/' + year
        console.log(correctDateFormat)
        setSelectedDate({ selectedDay: day })
        // console.log(selectedDate)
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