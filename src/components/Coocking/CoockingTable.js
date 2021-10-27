import React from "react";
import s from "./CoockingTable.module.css";
import {NavLink, Route} from "react-router-dom";

import MyCalendar from "./Calendar/MyCalendar";
import CoockingContainer from "./CookingSkills/CoockingContainer";
import TodayRandom from "./TotayRandom/TodayRandom";



let CoockingTable = () => {

    return (
        <div className={s.bg}>
            <div className="container">
                <div className="row">
                    <div className={s.buttons}>
                        <NavLink to="/coocking/todayRandom/" activeClassName={s.activeLink}>
                            <button>
                                <div className={s.what}>
                                    <div className={s.textWhat}>
                                        Что приготовить?
                                    </div>
                                    <div className={s.cub}>
                                        <img src="https://cgl.ethz.ch/Downloads/Publications/Papers/2016/Ozt16b/Ozt16b_1.png" alt=""/>
                                    </div>
                                </div>
                            </button>
                        </NavLink>
                        <NavLink to="/coocking/calendar/" activeClassName={s.activeLink}>
                            <button className={s.textWhat}>
                                Рассмешить бога и построить план
                            </button>
                        </NavLink>
                        <NavLink to="/coocking/ourSkills/" activeClassName={s.activeLink}>
                            <button >
                                Что мы умеем?
                            </button>
                        </NavLink>

                    </div>
                    <Route path='/coocking/ourSkills/'
                           render={ () => <CoockingContainer/> }/>
                    <Route path='/coocking/calendar/'
                           render={ () => <MyCalendar /> }/>
                    <Route path='/coocking/todayRandom/'
                           render={ () => <TodayRandom /> }/>

                </div>
            </div>
        </div>
    )
};

export default CoockingTable