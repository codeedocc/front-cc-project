import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useActions } from '../hooks/actions'

const BackNextButtons: React.FC<IBackNextButtons> = ({
  pathToBack,
  pathToNext,
  isDone,
}) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [isSending, setIsSending] = useState<boolean>(true)

  const { setisSendingData } = useActions()

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

      {pathToNext && (
        <button onClick={() => navigate(pathToNext)}>Далее</button>
      )}

      {isDone && (
        <button onClick={() => setisSendingData(true)}>Отправить</button>
      )}
    </div>
  )
}

export default BackNextButtons
