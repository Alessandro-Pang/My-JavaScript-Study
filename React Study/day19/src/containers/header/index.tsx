import { connect } from "react-redux";
import Header from '../../components/Header/index';
import { input_focus,input_blur,hotbox_mouseIn,hotbox_mouseOut } from '../../actions/actionCreators';

const mapStateToProps = (state: any) => {
  return {
    focus: state.headerReduces.get("focusd"),
    mouseIn:state.headerReduces.get("mouseIn")
  }
}

const mapDispatchToProps = (dispatch: Function): object => ({
  handleInputFocus: (focus: boolean) => dispatch(input_focus(focus)),
  handleInputBlur:(focus:boolean) => dispatch(input_blur(focus)),
  handleMuseIn:(mouseIn:boolean)=> dispatch(hotbox_mouseIn(mouseIn)),
  handleMuseOut:(mouseIn:boolean)=> dispatch(hotbox_mouseOut(mouseIn))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);