import { cross_icon, error_icon, success_icon } from '../../assets/images'
import { BackNextButtons, Modal, ProgressBar } from '../../shared'
import { useEffect, useRef, useState } from 'react'
import { useSendDataMutation } from '../../store/user/user.api'
import { useAppSelector } from '../../hooks/redux'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../../hooks/actions'
import './thirdLevel.scss'

const ThirdLevel: React.FC = () => {
  const navigate = useNavigate()

  const [isFormCompleted] = useState<boolean>(true)

  const aboutRef = useRef<HTMLTextAreaElement | null>(null)

  const {
    phone,
    email,
    nickname,
    name,
    surname,
    sex,
    advantages,
    checkboxGroup,
    radioGroup,
    about,
  } = useAppSelector((state) => state.user)

  const { setIsModalOpen, setAbout, setCurrentPage } = useActions()

  const [sendData, { data, isSuccess, isError }] = useSendDataMutation()

  const handleDone = () => {
    setIsModalOpen(false)
    navigate('/front-cc-project/')
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

  const startSendProcess = async () => {
    try {
      await sendData({
        phone,
        email,
        nickname,
        name,
        surname,
        sex,
        advantages,
        checkboxGroup,
        radioGroup,
        about,
      })
      setIsModalOpen(true)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (aboutRef.current !== null && about === '') {
      aboutRef.current.focus()
    }
  }, [])

  useEffect(() => {
    setCurrentPage(location.pathname)
  }, [location])

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

        <span className="character-counter">{characterCount} / 200</span>
      </div>

      <BackNextButtons
        pathToBack={'/front-cc-project/second-level'}
        isDone={true}
        isFormCompleted={isFormCompleted}
        startSendProcess={startSendProcess}
      />

      {isError && (
        <Modal>
          <div className="modal-content">
            <div className="title error">
              <p>{data?.message}</p>

              <button id="cross" onClick={() => setIsModalOpen(false)} />

              <label htmlFor="cross">
                <img src={cross_icon} alt="" />
              </label>
            </div>

            <div className="result-pic error">
              <img src={error_icon} alt="" />
            </div>

            <div className="back-button error">
              <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
            </div>
          </div>
        </Modal>
      )}

      {isSuccess && (
        <Modal>
          <div className="modal-content">
            <div className="title">
              <p>{data?.message}</p>
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

export default ThirdLevel
