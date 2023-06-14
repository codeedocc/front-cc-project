import { useEffect, useRef, useState } from 'react'
import { BackNextButtons, ProgressBar } from '../components'
import '../styles/about.scss'

const About: React.FC = () => {
  const [about, setAbout] = useState('')
  const aboutRef = useRef<HTMLTextAreaElement | null>(null)

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
    </div>
  )
}

export default About
