import { BackNextButtons, InfoInputs, ProgressBar } from '../../shared'
import { SCHEMA_FULLNAME_PAGE } from '../../assets/const'
import Select, { SingleValue } from 'react-select'
import { useAppSelector } from '../../hooks/redux'
import { selectOptions } from '../../assets/const'
import { yupResolver } from '@hookform/resolvers/yup'
import { useActions } from '../../hooks/actions'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './fullName.scss'

const FullName: React.FC = () => {
  const { nickname, name, surname, sex } = useAppSelector((state) => state.user)

  const { setNickname, setName, setSurname, setSex } = useActions()

  const [selectedOption, setSelectedOption] = useState<{
    value: string
    label: string
  } | null>(() => {
    if (sex) {
      return {
        value: sex,
        label: sex.charAt(0).toUpperCase() + sex.slice(1),
      }
    }
    return null
  })
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false)

  const {
    setError,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMA_FULLNAME_PAGE),
    defaultValues: {
      nickname: nickname,
      name: name,
      surname: surname,
      sex: sex,
    },
  })

  const handleSelectChange = (
    e: SingleValue<{
      value: string
      label: string
    } | null>
  ) => {
    setSelectedOption(e)
    setError('sex', { message: '' })
    setValue('sex', e!.value)
  }

  const onSubmit = (data: any) => {
    setIsFormCompleted(true)
    setNickname(data.nickname)
    setName(data.name)
    setSurname(data.surname)
    setSex(data.sex)
  }

  return (
    <div className="fullName-wrapper">
      <ProgressBar />

      <div className="name-surname-sex-inputs">
        <InfoInputs>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span>
              <p>Nickname</p>
              <input
                type="text"
                {...register('nickname')}
                placeholder="Введите nickname"
              />

              {errors.nickname && (
                <p className="error">{errors.nickname.message}</p>
              )}
            </span>

            <span>
              <p>Name</p>
              <input
                type="text"
                {...register('name')}
                placeholder="Введите name"
              />

              {errors.name && <p className="error">{errors.name.message}</p>}
            </span>

            <span>
              <p>Surname</p>
              <input
                type="text"
                {...register('surname')}
                placeholder="Введите surname"
              />

              {errors.surname && (
                <p className="error">{errors.surname.message}</p>
              )}
            </span>

            <span>
              <p>Sex</p>

              <Select
                value={selectedOption}
                options={selectOptions}
                className="select"
                onChange={(e) => handleSelectChange(e)}
                placeholder="Выберите пол"
              />

              {errors.sex && <p className="error">{errors.sex.message}</p>}
            </span>

            <div className="save-form-button">
              <button type="submit">Сохранить</button>
            </div>
          </form>
        </InfoInputs>
      </div>

      <BackNextButtons
        pathToBack={'/front-cc-project/'}
        pathToNext={'/front-cc-project/advantages'}
        isFormCompleted={isFormCompleted}
      />
    </div>
  )
}

export default FullName
