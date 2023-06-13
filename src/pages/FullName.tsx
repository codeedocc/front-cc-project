import { BackNextButtons, InfoInputs, ProgressBar } from '../components'
import { useState } from 'react'
import { selectOptions } from '../assets/const/'
import Select from 'react-select'
import '../styles/fullName.scss'

const FullName: React.FC = () => {
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

      <BackNextButtons
        pathToBack={'/front-cc-project/'}
        pathToNext={'/front-cc-project/advantages'}
      />
    </div>
  )
}

export default FullName
