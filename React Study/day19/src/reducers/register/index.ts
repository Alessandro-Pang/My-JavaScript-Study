/*
 * @Author: your name
 * @Date: 2020-06-05 14:22:10
 * @LastEditTime: 2020-06-05 14:30:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day19\src\reducers\register\index.ts
 */ 
import {fromJS} from "immutable";

import {
  REGISTER_USERNAME,
  REGISTER_PHONE,
  REGISTER_PASSWORD
} from "../../actions/constants";

const initState = fromJS({
  username:"",
  password:"",
  phone:"",
  status:""
})

const Register = (state=initState,action:any)=>{
  switch(action.type){
    case REGISTER_USERNAME:
      return state.set("username",action.username);
    case REGISTER_PHONE:
      return state.set("phone",action.phone);
    case REGISTER_PASSWORD:
      return state.set("password",action.password);
    default :
      return state;
  }
}

export default Register;