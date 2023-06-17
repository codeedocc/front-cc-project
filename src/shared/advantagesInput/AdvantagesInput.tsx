import { trash_icon } from '../../assets/images'

const AdvantagesInput: React.FC<IAdvantagesInput> = ({
  id,
  value,
  onChange,
  onRemove,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, event.target.value)
  }

  const handleRemove = () => {
    onRemove(id)
  }

  return (
    <>
      <span>
        <input
          type="text"
          placeholder="Начните печатать..."
          value={value}
          onChange={handleChange}
        />

        <button id="trash" onClick={handleRemove} />

        <label htmlFor="trash">
          <img src={trash_icon} alt="" />
        </label>
      </span>
    </>
  )
}

export default AdvantagesInput
