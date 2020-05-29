import { connect } from "react-redux";
import Header from '../../components/Header/index';
import { input_focus,input_blur } from '../../actions/actionCreators';

const mapStateToProps = (state: any) => {
  return {
    focus: state.headerReduces.get("focusd")
  }
}

const mapDispatchToProps = (dispatch: Function): object => ({
  handleInputFocus: (focus: boolean) => dispatch(input_focus(focus)),
  handleInputBlur:(focus:boolean) => dispatch(input_blur(focus))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);