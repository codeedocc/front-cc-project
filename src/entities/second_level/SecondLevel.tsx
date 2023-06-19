import { AdvantagesInput, BackNextButtons, ProgressBar } from '../../shared'
import { useAppSelector } from '../../hooks/redux'
import { useActions } from '../../hooks/actions'
import { plus_icon } from '../../assets/images'
import { useState } from 'react'
import './secondLevel.scss'

const SecondLevel: React.FC = () => {
  const [isFormCompleted] = useState<boolean>(true)
  const [nextId, setNextId] = useState<number>(1)

  const { advantages, checkboxGroup, radioGroup } = useAppSelector(
    (state) => state.user
  )

  const { setAdvantages, setCheckboxGroup, setRadioGroup } = useActions()

  const handleAddAdvantage = () => {
    if (advantages.length < 3) {
      setAdvantages([...advantages, { id: `advantage-${nextId}`, value: '' }])
      setNextId(nextId + 1)
    } else {
      return
    }
  }

  const handleRemoveAdvantage = (id: string) => {
    const updatedAdvantages = advantages.filter(
      (advantage) => advantage.id !== id.toString()
    )
    setAdvantages(updatedAdvantages)
  }

  const handleChangeAdvantage = (id: string, value: string) => {
    const updatedAdvantages = advantages.map((advantage) =>
      advantage.id === id ? { ...advantage, value } : advantage
    )
    setAdvantages(updatedAdvantages)
  }

  return (
    <div className="avantages-wrapper">
      <ProgressBar />

      <div className="advantages-inputs">
        <p>Advantages</p>

        {advantages.map((advantage, index) => (
          <AdvantagesInput
            key={index}
            id={advantage.id}
            value={advantage.value}
            onChange={handleChangeAdvantage}
            onRemove={handleRemoveAdvantage}
          />
        ))}

        <div className="add-button">
          {advantages.length !== 3 && (
            <button onClick={handleAddAdvantage}>
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
