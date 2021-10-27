import React from "react";
import {setCoockingScills} from "../../../redux/coocking-reduser";
import {connect} from "react-redux";

import {Run} from "./Ran";


class TodayRandom extends React.Component {


    render() {
        return (
            <div>
                <Run specialities={this.props.specialities}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        specialities: state.coockingPage.specialities
    }
};
let mapDispatchToProps = {
    setCoockingScills
};

export default connect(mapStateToProps, mapDispatchToProps)(TodayRandom)