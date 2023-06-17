import { ReactNode } from 'react'
import '../styles/infoInputs.scss'

interface IInfoInputs {
  children: ReactNode
}

const InfoInputs: React.FC<IInfoInputs> = ({ children }) => {
  return <div className="info-inputs">{children}</div>
}

export default InfoInputs
