import { folder_icon, user_avatar } from '../assets/images'
import { useNavigate } from 'react-router-dom'
import '../styles/home.scss'

const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="user-header">
        <div className="user-avatar">
          <img src={user_avatar} alt="user-av" />
        </div>

        <div className="user-info">
          <p>Руслан Шарифуллин</p>

          <div className="user-links">
            <a href="https://t.me/ruslan_hehe" target="_blank">
              <img src={folder_icon} alt="telegram" />
              <p>Telegram</p>
            </a>

            <a href="https://github.com/codeedocc" target="_blank">
              <img src={folder_icon} alt="github" />
              <p>Github</p>
            </a>

            <a
              href="https://kazan.hh.ru/resume/9d5b38ceff0b73f0810039ed1f616c34593872"
              target="_blank"
            >
              <img src={folder_icon} alt="resume" />
              <p>Resume</p>
            </a>
          </div>
        </div>
      </div>

      <div className="info-inputs">
        <span>
          <p>Номер телефона</p>
          <input type="tel" value={'+79991567441'} disabled />
        </span>

        <span>
          <p>Email</p>
          <input type="email" value={'newwavecfy@gmail.com'} disabled />
        </span>
      </div>

      <div className="start-button">
        <button onClick={() => navigate('/front-cc-project/fullName')}>
          Начать
        </button>
      </div>
    </>
  )
}

export default Home
