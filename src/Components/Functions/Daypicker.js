import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './Daypicker.css';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
// import 'moment/locale/it';


export default class BasicConcepts extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDay: undefined,
        };
    }

    handleDayClick(day) {
        this.setState({ selectedDay: day });
        console.log(this.state.selectedDay)
    }

    render() {
        return (
            <div className='daypicker-main'>
                {this.state.selectedDay ? (
                    <h4>You selected {this.state.selectedDay.toLocaleDateString()}</h4>
                    ) : (
                        <h4>Please select a day.</h4>
                        )}
                <DayPicker onDayClick={this.handleDayClick} />
            </div>
        );
    }
}



// export default function Daypicker() {
//     const [selectedDate, setSelectedDate] = useState('')
//     const handleDayClick = (day) => {
//         setSelectedDate({ selectedDay: day })
//         console.log(selectedDate.selectedDay)
//     }
//     const handleSelectedDay = (day) => {
//         console.log(day)
//     }

//     return (
//         <div className='daypicker-main'>
//            <p>Please type a day:</p>
//             <DayPickerInput
//             formatDate={formatDate}
//             parseDate={parseDate}
//             placeholder={`${formatDate(new Date())}`}
//             onDayChange={handleSelectedDay} />
//         </div>
//     )
// }