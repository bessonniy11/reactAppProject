import {connect} from "react-redux";
import React from "react";
import Experimental from "./Experimental";
import {downAC, leftAC, rightAC, upAC} from "../../redux/experimental-reducer";


class ExperimentalContainer extends React.Component {
    componentDidMount() {

    }
    render() {

        return (
            <div>
                <Experimental right={this.props.right}
                              down={this.props.down}
                              // upKey={this.upKey}
                />
            </div>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        right: state.experimental.right,
        down: state.experimental.down
    }
};
let mapDispatchToProps = {
    leftAC,
    rightAC,
    upAC,
    downAC
};

export default connect(mapStateToProps, mapDispatchToProps)(ExperimentalContainer);