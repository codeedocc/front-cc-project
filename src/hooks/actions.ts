import { bindActionCreators } from '@reduxjs/toolkit'
import { modalActions } from '../store/modal/modal.slice'
import { useDispatch } from 'react-redux'

const actions = {
  ...modalActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
