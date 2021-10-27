import React from "react";
import s from './MyNewCalendar.module.css';
import * as MyCalendarDataBase from "./MyCalendarDataBase";
import * as classnames from "classnames";
// import MyCalendarDataBase

class MyNewCalendar extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype
    };
    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };
    get year() {
        return this.state.date.getFullYear();
    }
    get month() {
        return this.state.date.getMonth();
    }
    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month -1);
        this.setState({date});
    };
    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month +1);
        this.setState({date});
    };
    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);
        this.setState(date)
    };
    handleDayClick = date => {
        this.setState({selectedDate: date});
        this.props.onChange(date);
    };


    render() {
        const {years, monthNames, weekDayNames} = this.props;
        const {currentDate, selectedDate} = this.state;

        const monthData = MyCalendarDataBase.getMonthData(this.year, this.month);


        return (
            <div className={s.calendar}>
                <header>
                    <button onClick={this.handlePrevMonthButtonClick} className={s.button}>{'<'}</button>
                    <select
                        ref={element => this.monthSelect = element}
                        value={this.month}
                        onChange={this.handleSelectChange}
                        className={s.select}>
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>
                    <select
                        ref={element => this.yearSelect = element}
                        value={this.year}
                        onChange={this.handleSelectChange}
                        className={s.select}>
                        {years.map((years) =>
                            <option key={years} value={years}>{years}</option>
                        )}
                    </select>
                    <button onClick={this.handleNextMonthButtonClick} className={s.button}>{'>'}</button>
                </header>
                <table className={s.table}>
                    <thead>
                    <tr>
                        {weekDayNames.map(name =>
                            <th key={name}>{name}</th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {monthData.map((week, index) =>
                        <tr key={index} className={s.week}>
                            {week.map((date, index) => date ?
                                <td
                                    key={index}
                                    className={classnames('day', {
                                        'today': MyCalendarDataBase.areEqual(date, currentDate),
                                        'selected' : MyCalendarDataBase.areEqual(date, selectedDate)
                                })}
                                    onClick={() => this.handleDayClick(date)}
                                >{date.getDate()}</td>
                                :
                                <td key={index}/>
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MyNewCalendar;