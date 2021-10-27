import {connect} from "react-redux";

import {setMusicAC} from "../../../redux/music-reduser";
import Music from "./Music";

let mapStateToProps = (state) => {
    return {
        music: state.musicPage.music
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setMusic: (music) => {
            dispatch(setMusicAC(music));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Music);