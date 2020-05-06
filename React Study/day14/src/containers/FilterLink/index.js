/*
 * @Author: your name
 * @Date: 2020-05-05 22:13:05
 * @LastEditTime: 2020-05-05 23:26:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day14\src\containers\FilterLink\index.js
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '@src/actions'
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