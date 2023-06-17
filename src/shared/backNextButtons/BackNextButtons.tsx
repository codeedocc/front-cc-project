import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './backNextButtons.scss'

const BackNextButtons: React.FC<IBackNextButtons> = ({
  pathToBack,
  pathToNext,
  isDone,
  isFormCompleted,
  startSendProcess,
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [isSending, setIsSending] = useState<boolean>(true)

  useEffect(() => {
    if (location.pathname === '/front-cc-project/about') {
      setIsSending(true)
      return
    }

    setIsSending(false)
  }, [location])

  return (
    <div
      className={isSending ? 'back-next-buttons sending' : 'back-next-buttons'}
    >
      <button onClick={() => navigate(pathToBack)}>Назад</button>

      {pathToNext && isFormCompleted && (
        <button onClick={() => navigate(pathToNext)}>Далее</button>
      )}

      {isDone && isFormCompleted && (
        <button onClick={() => startSendProcess!()}>Отправить</button>
      )}
    </div>
  )
}

export default BackNextButtons
