import { BackNextButtons, ProgressBar } from '../../shared'
import { plus_icon, trash_icon } from '../../assets/images'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/actions'
import { useState } from 'react'
import Input from '@mui/material/Input'
import './secondLevel.scss'

const SecondLevel: React.FC = () => {
  const [isFormCompleted] = useState<boolean>(true)

  const { advantages, checkboxGroup, radioGroup } = useAppSelector(
    (state) => state.user
  )

  const { setAdvantages, setCheckboxGroup, setRadioGroup } = useActions()

  const handleAddInput = () => {
    setAdvantages([...advantages, ''])
  }

  const handleDeleteInput = (index: any) => {
    setAdvantages(advantages.filter((_, i) => i !== index))
  }

  const handleInputChange = (index: any, value: any) => {
    const newInputs = [...advantages]
    newInputs[index] = value
    setAdvantages(newInputs)
  }

  return (
    <div className="avantages-wrapper">
      <ProgressBar />

      <div className="advantages-inputs">
        <p>Advantages</p>

        {advantages.map((input, index) => (
          <div key={index}>
            <Input
              type="text"
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />

            <button onClick={() => handleDeleteInput(index)}>
              <img src={trash_icon} alt="" />
            </button>
          </div>
        ))}

        <div className="add-button">
          {advantages.length !== 3 && (
            <button onClick={handleAddInput}>
              <img src={plus_icon} alt="" />
            </button>
          )}
        </div>
      </div>

      <div className="checkbox-group">
        <p>Checkbox group</p>

        {Array.isArray(checkboxGroup) &&
          checkboxGroup.map((input, index) => (
            <div key={index} className="checkbox-row">
              <input
                type="checkbox"
                id={`checkbox${index + 1}`}
                checked={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCheckboxGroup([
                    ...checkboxGroup.slice(0, index),
                    e.target.checked,
                    ...checkboxGroup.slice(index + 1),
                  ])
                }
              />
              <p>{index + 1}</p>
              <br />
            </div>
          ))}
      </div>

      <div className="radio-group">
        <p>Radio group</p>

        {Array.isArray(radioGroup) &&
          radioGroup.map((input, index) => (
            <div key={index} className="radiogroup-row">
              <input
                type="radio"
                id={`radio${index + 1}`}
                name="radioGroup"
                checked={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRadioGroup([
                    ...radioGroup.slice(0, index),
                    e.target.checked,
                    ...radioGroup.slice(index + 1),
                  ])
                }
              />
              <p>{index + 1}</p>

              <br />
            </div>
          ))}
      </div>

      <BackNextButtons
        pathToBack={'/front-cc-project/first-level'}
        pathToNext={'/front-cc-project/third-level'}
        isFormCompleted={isFormCompleted}
      />
    </div>
  )
}

export default SecondLevel
