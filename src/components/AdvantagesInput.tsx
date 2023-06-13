import { trash_icon } from '../assets/images'

const AdvantagesInput: React.FC = () => {
  return (
    <>
      <span>
        <input type="text" placeholder="Placeholder" />
        <button id="trash" />
        <label htmlFor="trash">
          <img src={trash_icon} alt="" />
        </label>
      </span>
    </>
  )
}

export default AdvantagesInput
