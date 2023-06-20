import { bindActionCreators } from '@reduxjs/toolkit'
import { containerActions } from '../store/container/container.slice'
import { modalActions } from '../store/modal/modal.slice'
import { useDispatch } from 'react-redux'
import { userActions } from '../store/user/user.slice'

const actions = {
  ...modalActions,
  ...userActions,
  ...containerActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
