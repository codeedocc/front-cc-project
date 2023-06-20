import { ThirdLevel, SecondLevel, FirstLevel, Home } from '../entities'
import { useAppSelector } from '../hooks/redux'
import { Routes, Route } from 'react-router-dom'

const Pages: React.FC = () => {
  const { currentPage } = useAppSelector((state) => state.container)

  return (
    <div
      className={
        currentPage === '/front-cc-project/' ||
        currentPage === '/front-cc-project/third-level'
          ? 'main-container'
          : 'main-container high'
      }
    >
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
