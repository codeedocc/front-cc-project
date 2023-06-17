import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/actions'
import './modal.scss'

const Modal: React.FC<IModal> = ({ children }) => {
  const { isSendingData } = useAppSelector((state) => state.modal)

  const { closeModal } = useActions()

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
