import { useNavigate } from 'react-router-dom'

const BackNextButtons: React.FC<IBackNextButtons> = ({
  pathToBack,
  pathToNext,
  isDone,
}) => {
  const navigate = useNavigate()

  return (
    <div className="back-next-buttons">
      <button onClick={() => navigate(pathToBack)}>Назад</button>

      {pathToNext && (
        <button onClick={() => navigate(pathToNext)}>Далее</button>
      )}

      {isDone && <button onClick={() => console.log('')}>Отправить</button>}
    </div>
  )
}

export default BackNextButtons
