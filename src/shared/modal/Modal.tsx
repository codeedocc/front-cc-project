import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/actions'
import './modal.scss'

const Modal: React.FC<IModal> = ({ children }) => {
  const { isModalOpen } = useAppSelector((state) => state.modal)

  const { setIsModalOpen } = useActions()

  return (
    <div
      className={isModalOpen ? 'modal-wrapper open' : 'modal-wrapper'}
      onClick={() => setIsModalOpen(false)}
    >
      <div className={'modal'} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
