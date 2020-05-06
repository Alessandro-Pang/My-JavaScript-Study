import { connect } from "react-redux";
import Count from "@/Count";
import { add, substract } from "src/actions";

/**
 * @param {*} state
 */
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

/**
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (props) => {
      dispatch(add(props));
    },
    onClickSub: (props) => {
      dispatch(substract(props));
    },
  };
};

/**
 * container 通过 connect( )(component) 方法连接组件
 * 连接后，该容器便可直接实例化出该组件
 */
const Adds = connect(mapStateToProps, mapDispatchToProps)(Count);

export default Adds;
