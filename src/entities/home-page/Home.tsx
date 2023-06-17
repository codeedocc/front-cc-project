import { folder_icon, user_avatar } from '../../assets/images'
import { InfoInputs, MaskedInput } from '../../shared'
import { SCHEMA_HOME_PAGE } from '../../assets/const'
import { useAppSelector } from '../../hooks/redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/actions'
import { useForm } from 'react-hook-form'
import './home.scss'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const { phone, email } = useAppSelector((state) => state.user)
  const { setPhone, setEmail } = useActions()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMA_HOME_PAGE),
    defaultValues: {
      email: email,
      phone: phone,
    },
  })

  const onSubmit = (data: any) => {
    setEmail(data.email)
    setPhone(data.phone)

    navigate('/front-cc-project/fullName')
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
            <MaskedInput register={register} />

            {errors.phone && <p className="error">{errors.phone.message}</p>}
          </span>

          <span>
            <p>Email</p>
            <input
              type="email"
              {...register('email')}
              placeholder="Введите email"
            />
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
