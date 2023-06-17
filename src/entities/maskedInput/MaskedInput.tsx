import React from 'react'
import InputMask from 'react-input-mask'

const MaskedInput = React.forwardRef(({ register }: IRegister) => (
  <InputMask mask="+7 (999) 999-99-99" maskChar="" {...register('phone')}>
    {(inputProps: any) => (
      <input
        {...(inputProps as JSX.IntrinsicElements['input'])}
        placeholder="Введите номер телефона"
        type="tel"
      />
    )}
  </InputMask>
))

export default MaskedInput
