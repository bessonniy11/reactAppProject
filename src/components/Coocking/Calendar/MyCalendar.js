import s from "../CoockingTable.module.css";
// import DatePicker from 'react-date-picker'
import React, {Component} from "react";

// import 'bootstrap-4-react/dist/bootstrap-4-react'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from "react-dates";




// import {Calendar} from "react-calendar";


class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }
    sumDay = () => {
        let x =  this.state.startDate;
        let y =  this.state.endDate;
        let sum = (y - x)/86400000;
        alert(`Вы выбрали план на ближайшие ${sum} суток!!!`)
    };


    render() {
        return (
            <div className={s.calendarBox}>
                <div className={s.calendar}>
                    {!this.state.endDate ? <h3 className={s.title }>Выберите период, чтобы система построила рандомный график готовки на каждый день</h3>
                        : <h3 onClick={this.sumDay} className={s.calendarButton}>Посчитать количество дней?</h3>}
                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    />
                </div>
            </div>
        )
    }


};


export default MyCalendar