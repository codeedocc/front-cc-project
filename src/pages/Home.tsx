import { folder_icon, user_avatar } from '../assets/images'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { InfoInputs } from '../components'
import { schemaHome } from '../assets/const'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import '../styles/home.scss'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaHome),
    defaultValues: {
      email: '',
      phone: '',
    },
  })

  const onSubmit = (data: any) => {
    navigate('/front-cc-project/fullName')
    console.log(data)
  }

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

      <InfoInputs>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>
            <p>Номер телефона</p>

            <InputMask
              mask="+7 (999) 999-99-99"
              maskChar=""
              {...register('phone')}
            >
              {(inputProps) => <input {...inputProps} type="tel" />}
            </InputMask>

            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </span>

          <span>
            <p>Email</p>
            <input type="email" {...register('email')} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </span>

          <div className="start-button">
            <button type="submit">Начать</button>
          </div>
        </form>
      </InfoInputs>
    </>
  )
}

export default Home
