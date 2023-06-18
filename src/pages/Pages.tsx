import { ThirdLevel, SecondLevel, FirstLevel, Home } from '../entities'
import { Routes, Route } from 'react-router-dom'

const Pages: React.FC = () => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/front-cc-project/" element={<Home />} />
        <Route path="/front-cc-project/first-level" element={<FirstLevel />} />
        <Route
          path="/front-cc-project/second-level"
          element={<SecondLevel />}
        />
        <Route path="/front-cc-project/third-level" element={<ThirdLevel />} />
      </Routes>
    </div>
  )
}

export default Pages
