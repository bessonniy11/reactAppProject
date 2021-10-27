import {connect} from "react-redux";
import News from "./News";
import {setNewsAC} from "../../redux/news-reduser";

let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setNews: (news) => {
            dispatch(setNewsAC(news));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(News);