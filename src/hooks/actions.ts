import { bindActionCreators } from '@reduxjs/toolkit'
import { modalActions } from '../store/modal/modal.slice'
import { useDispatch } from 'react-redux'
import { userActions } from '../store/user/user.slice'

const actions = {
  ...modalActions,
  ...userActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
