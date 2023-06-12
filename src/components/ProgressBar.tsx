import '../styles/progressBar.scss'
import { dotConfigurations, matchingPage } from '../assets/const'

const ProgressBar: React.FC = () => {
  return (
    <>
      {matchingPage && (
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${matchingPage.percentage}%` }}
          />
          <div className="levels">
            <div className="dots">
              {dotConfigurations[matchingPage.label].map((dot, index) => (
                <img key={index} src={dot} alt={`dot_${index}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProgressBar
