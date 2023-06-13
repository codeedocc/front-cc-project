import { InfoInputs, ProgressBar } from '../components'
import { useState } from 'react'
import { selectOptions } from '../assets/const/'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import '../styles/fullName.scss'

const FullName: React.FC = () => {
  const navigate = useNavigate()

  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelectChange = (e: any) => {
    setSelectedOption(e)
  }

  return (
    <div className="fullName-wrapper">
      <ProgressBar />

      <div className="name-surname-sex-inputs">
        <InfoInputs>
          <span>
            <p>Nickname</p>
            <input type="text" placeholder="Enter nickname" />
          </span>

          <span>
            <p>Name</p>
            <input type="text" placeholder="Enter name" />
          </span>

          <span>
            <p>Surname</p>
            <input type="text" placeholder="Enter surname" />
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
        </InfoInputs>
      </div>

      <div className="back-next-buttons">
        <button onClick={() => navigate('/front-cc-project/')}>Назад</button>

        <button onClick={() => navigate('/front-cc-project/advantages')}>
          Далее
        </button>
      </div>
    </div>
  )
}

export default FullName
