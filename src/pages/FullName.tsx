import { BackNextButtons, InfoInputs, ProgressBar } from '../components'
import Select, { SingleValue } from 'react-select'
import { schemaFullName } from '../assets/const/'
import { selectOptions } from '../assets/const/'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/fullName.scss'

const FullName: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<{
    value: string
    label: string
  } | null>(null)
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaFullName),
    defaultValues: {
      nickname: '',
      name: '',
      surname: '',
    },
  })

  const handleSelectChange = (
    e: SingleValue<{
      value: string
      label: string
    } | null>
  ) => {
    setSelectedOption(e)
  }

  const onSubmit = (data: any) => {
    setIsFormCompleted(true)
    console.log(data)
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
                placeholder="Enter nickname"
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
                placeholder="Enter name"
              />

              {errors.name && <p className="error">{errors.name.message}</p>}
            </span>

            <span>
              <p>Surname</p>
              <input
                type="text"
                {...register('surname')}
                placeholder="Enter surname"
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
              />
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
