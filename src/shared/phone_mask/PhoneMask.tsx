import { InputBaseComponentProps } from '@mui/material'
import { PHONE_RU_MASK } from '../../assets/const/phone_mask'
import MaskedInput from 'react-text-mask'

const MaskComponent: React.FC<InputBaseComponentProps> = (props) => {
  return <MaskedInput mask={PHONE_RU_MASK} {...props} />
}

export default MaskComponent
