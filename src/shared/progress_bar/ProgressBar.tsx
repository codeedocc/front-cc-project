import { dotConfigurations } from '../../assets/const/progressBar_dots'
import { getMatchingPage } from '../../assets/const/page_paths'
import './progressBar.scss'

const ProgressBar: React.FC = () => {
  const matchingPage = getMatchingPage()

  return (
    <>
      {matchingPage && (
        <div className="line">
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

              <div className="numbers">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProgressBar
