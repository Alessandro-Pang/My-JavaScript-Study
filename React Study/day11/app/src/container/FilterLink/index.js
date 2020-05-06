/*
 * @Author: your name
 * @Date: 2020-05-05 19:47:02
 * @LastEditTime: 2020-05-05 20:07:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day11\app\src\container\FilterLink\index.js
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '@src/action'
import Link from '@/Todo/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink