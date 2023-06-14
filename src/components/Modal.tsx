import { useAppSelector } from '../hooks/redux'
import { useActions } from '../hooks/actions'
import '../styles/modal.scss'

const Modal: React.FC<IModal> = ({ children }) => {
  const { closeModal } = useActions()

  const { isSendingData } = useAppSelector((state) => state.modal)

  return (
    <div
      className={isSendingData ? 'modal-wrapper open' : 'modal-wrapper'}
      onClick={() => closeModal(false)}
    >
      <div className={'modal'} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
