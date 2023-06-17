import { AdvantagesInput, BackNextButtons, ProgressBar } from '../components'
import { v4 as uuidv4 } from 'uuid'
import { plus_icon } from '../assets/images'
import { useState } from 'react'
import '../styles/advantages.scss'

const Advantages: React.FC = () => {
  const [advantages, setAdvantages] = useState<{ id: string; value: string }[]>(
    [{ id: uuidv4(), value: '' }]
  )
  const [checkboxInputs, setCheckboxInputs] = useState<string[]>(['', '', ''])
  const [radioInputs, setRadioInputs] = useState<string[]>(['', '', ''])
  const [isFormCompleted, setisFormCompleted] = useState<boolean>(true)
  const [nextId, setNextId] = useState<number>(1)

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

        {checkboxInputs.map((input, index) => (
          <div key={index}>
            <input type="checkbox" id={`checkbox${index + 1}`} />
            <br />
          </div>
        ))}
      </div>

      <div className="radio-group">
        <p>Radio group</p>

        {radioInputs.map((input, index) => (
          <div key={index}>
            <input type="radio" id={`radio${index + 1}`} name="radioGroup" />
            <br />
          </div>
        ))}
      </div>

      <BackNextButtons
        pathToBack={'/front-cc-project/fullName'}
        pathToNext={'/front-cc-project/about'}
        isFormCompleted={isFormCompleted}
      />
    </div>
  )
}

export default Advantages
