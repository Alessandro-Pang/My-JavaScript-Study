import { connect } from "react-redux";
import BlogFiling from "@/blogFiling";
import { get_filing_list } from "./store/actionCreators"
const mapStateToProps = (state) => {
  return {
    filingList: state.BlogFiling.filingList,
  }
}

const mapDispatchToProps = (dispatch) => ({
  _get_filing_list:dispatch(get_filing_list())
});

export default connect(mapStateToProps,mapDispatchToProps)(BlogFiling);
