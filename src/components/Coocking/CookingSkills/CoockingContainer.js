import React from "react";
import {connect} from "react-redux";
import {redactorTitleAC, setCoockingScills} from "../../../redux/coocking-reduser";
import Skills from "./skills";
import s from "../CoockingTable.module.css";


class CoockingContainer extends React.Component {

    render(){
        return <div>
            <div className={s.skillsArea}>
                <Skills  specialities={this.props.specialities} />
            </div>
        </div>;
    }
}
let mapStateToProps = (state) => {
    return {
        specialities: state.coockingPage.specialities
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setCoockingScills,
        updateTitle: (text) => {
            dispatch(redactorTitleAC(text))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CoockingContainer)