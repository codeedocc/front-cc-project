import { plus_icon } from '../assets/images'
import { AdvantagesInput, BackNextButtons, ProgressBar } from '../components'
import '../styles/advantages.scss'

const Advantages: React.FC = () => {
  return (
    <div className="avantages-wrapper">
      <ProgressBar />

      <div className="advantages-inputs">
        <p>Advantages</p>

        <AdvantagesInput />
        <AdvantagesInput />
        <AdvantagesInput />

        <div className="add-button">
          <button>
            <img src={plus_icon} alt="" />
          </button>
        </div>
      </div>

      <div className="checkbox-group">
        <p>Checkbox group</p>

        <input type="checkbox" id="checkbox1" />
        <br />

        <input type="checkbox" id="checkbox2" />
        <br />

        <input type="checkbox" id="checkbox3" />
      </div>

      <div className="radio-group">
        <p>Radio group</p>

        <input type="radio" id="radio1" name="radioGroup" />
        <br />

        <input type="radio" id="radio2" name="radioGroup" />
        <br />

        <input type="radio" id="radio3" name="radioGroup" />
      </div>

      <BackNextButtons
        pathToBack={'/front-cc-project/fullName'}
        pathToNext={'/front-cc-project/about'}
      />
    </div>
  )
}

export default Advantages
