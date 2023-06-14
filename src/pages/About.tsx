import { useEffect, useRef, useState } from 'react'
import { BackNextButtons, Modal, ProgressBar } from '../components'
import '../styles/about.scss'
import { cross_icon, error_icon, success_icon } from '../assets/images'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/actions'

const About: React.FC = () => {
  const navigate = useNavigate()
  const { setisSendingData } = useActions()

  const [isError, setIsError] = useState(false)
  const [about, setAbout] = useState('')
  const aboutRef = useRef<HTMLTextAreaElement | null>(null)

  const handleDone = () => {
    navigate('/front-cc-project/')
    setisSendingData(false)
  }

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
          placeholder="Placeholder"
          value={about}
          onChange={(e) => setAbout!(e.target.value)}
          ref={aboutRef}
        />
      </div>

      <BackNextButtons
        pathToBack={'/front-cc-project/advantages'}
        isDone={true}
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
