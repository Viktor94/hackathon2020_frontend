import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './Daypicker.css';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import 'moment/locale/it';


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
        // console.log(this.state.selectedDay)

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
//         let date = new Date(day);
//         let year = date.getFullYear();
//         let month = date.getMonth() + 1;
//         let dt = date.getDate();

//         if (dt < 10) {
//             dt = '0' + dt;
//         }
//         if (month < 10) {
//             month = '0' + month;
//         }
//         let correctDateFormat = dt + '/' + month + '/' + year
//         console.log(correctDateFormat)
//     }

//     return (
//         <div className='daypicker-main'>
//             <p>Please type a day:</p>
//             <DayPickerInput
//                 formatDate={formatDate}
//                 parseDate={parseDate}
//                 placeholder={`${formatDate(new Date())}`}
//                 onDayChange={handleSelectedDay} />
//         </div>
//     )
// }