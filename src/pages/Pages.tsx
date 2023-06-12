import { Advantages, FullName, Home, About } from './'
import { Routes, Route } from 'react-router-dom'

const Pages: React.FC = () => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/front-cc-project/" element={<Home />} />
        <Route path="/front-cc-project/fullName" element={<FullName />} />
        <Route path="/front-cc-project/advantages" element={<Advantages />} />
        <Route path="/front-cc-project/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Pages
