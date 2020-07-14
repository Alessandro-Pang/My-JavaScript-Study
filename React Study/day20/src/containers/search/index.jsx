import { connect } from "react-redux";
import Search from "@/search";
import { get_search_list } from "./store/actionCreators";
const mapStateToProps = (state) => {
  return {
    serachList: state.Search.serachList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFinishSearch:(event)=>{
    if(!event.searchText) return;
    dispatch(get_search_list(event.searchText))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
