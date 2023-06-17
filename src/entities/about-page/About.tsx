import { cross_icon, error_icon, success_icon } from '../../assets/images'
import { BackNextButtons, Modal, ProgressBar } from '../../shared'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/actions'
import './about.scss'
import { useAppSelector } from '../../hooks/redux'

const About: React.FC = () => {
  const navigate = useNavigate()

  const { about } = useAppSelector((state) => state.user)
  const { setAbout } = useActions()

  const [isFormCompleted, setIsFormCompleted] = useState(true)
  const [isError, setIsError] = useState(false)

  const aboutRef = useRef<HTMLTextAreaElement | null>(null)

  const { setisSendingData } = useActions()

  const handleDone = () => {
    navigate('/front-cc-project/')
    setisSendingData(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value
    const characterCount = inputValue.replace(/\s/g, '').length

    if (characterCount > 200) {
      e.preventDefault()
      return
    }

    setAbout(inputValue)
  }

  const characterCount = about.replace(/\s/g, '').length

  useEffect(() => {
    if (aboutRef.current !== null && about === '') {
      aboutRef.current.focus()
    }
  }, [])

  return (
    <div className="about-wrapper">
      <ProgressBar />

      <div className="about-section">
        <p>About</p>

        <textarea
          placeholder="Начните печатать..."
          value={about}
          onChange={handleInputChange}
          ref={aboutRef}
        />

        <span className="character-counter">{characterCount}/200</span>
      </div>

      <BackNextButtons
        pathToBack={'/front-cc-project/advantages'}
        isDone={true}
        isFormCompleted={isFormCompleted}
      />

      {isError && (
        <Modal>
          <div className="modal-content">
            <div className="title error">
              <p>Ошибка</p>

              <button id="cross" onClick={() => setisSendingData(false)} />

              <label htmlFor="cross">
                <img src={cross_icon} alt="" />
              </label>
            </div>

            <div className="result-pic error">
              <img src={error_icon} alt="" />
            </div>

            <div className="back-button error">
              <button onClick={() => setisSendingData(false)}>Закрыть</button>
            </div>
          </div>
        </Modal>
      )}

      {!isError && (
        <Modal>
          <div className="modal-content">
            <div className="title">
              <p>Форма успешно отправлена</p>
            </div>

            <div className="result-pic">
              <img src={success_icon} alt="" />
            </div>
            <div className="back-button">
              <button onClick={() => handleDone()}>На главную</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default About
