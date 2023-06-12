import { Routes, Route } from 'react-router-dom'
import { FullName, Home } from '../components'

const Pages: React.FC = () => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/front-cc-project/" element={<Home />} />
        <Route path="/front-cc-project/fullName" element={<FullName />} />
      </Routes>
    </div>
  )
}

export default Pages
