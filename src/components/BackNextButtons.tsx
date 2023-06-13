import { useNavigate } from 'react-router-dom'

const BackNextButtons: React.FC<IBackNextButtons> = ({
  pathToBack,
  pathToNext,
}) => {
  const navigate = useNavigate()

  return (
    <div className="back-next-buttons">
      <button onClick={() => navigate(pathToBack)}>Назад</button>

      <button onClick={() => navigate(pathToNext)}>Далее</button>
    </div>
  )
}

export default BackNextButtons
