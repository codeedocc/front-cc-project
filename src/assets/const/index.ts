import { current_dot, finished_dot, not_active_dot } from '../images'
import { useLocation } from 'react-router-dom'
import * as yup from 'yup'

export const dotConfigurations: IDotConfigurations = {
  fullName: [current_dot, not_active_dot, not_active_dot],
  advantages: [finished_dot, current_dot, not_active_dot],
  about: [finished_dot, finished_dot, current_dot],
}

export const pageRoutes: IPages[] = [
  { path: '/front-cc-project/fullName', label: 'fullName', percentage: 0 },
  {
    path: '/front-cc-project/advantages',
    label: 'advantages',
    percentage: 50,
  },
  { path: '/front-cc-project/about', label: 'about', percentage: 100 },
]

export function getMatchingPage() {
  const location = useLocation()
  return pageRoutes.find((page) => page.path === location.pathname)
}

export const selectOptions = [
  { value: 'man', label: 'Man' },
  { value: 'woman', label: 'Woman' },
]

export const SCHEMA_HOME_PAGE = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Введите корректный номер телефона'
    )
    .required('Поле номера телефона обязательно'),
  email: yup
    .string()
    .email('Введите корректный email')
    .required('Поле email обязательно'),
})

export const SCHEMA_FULLNAME_PAGE = yup.object().shape({
  nickname: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я0-9]*$/,
      'Можно использовать буквы и цифры (спец символы запрещены)'
    )
    .max(30, 'Максимальная длина 30 символов')
    .required('Это поле нужно заполнить'),
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]*$/, 'Только буквы разрешены')
    .max(50, 'Максимальная длина 50 символов')
    .required('Это поле нужно заполнить'),
  surname: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]*$/, 'Только буквы разрешены')
    .max(50, 'Максимальная длина 50 символов')
    .required('Это поле нужно заполнить'),
  sex: yup.string().required('Выберите пол'),
})

export const phone = localStorage.getItem('phone')
export const email = localStorage.getItem('email')
export const nickname = localStorage.getItem('nickname')
export const name = localStorage.getItem('name')
export const surname = localStorage.getItem('surname')
export const sex = localStorage.getItem('sex')
export const advantages = localStorage.getItem('advantages')
export const checkboxGroup = localStorage.getItem('checkboxGroup')
export const radioGroup = localStorage.getItem('radioGroup')
export const aboutData = localStorage.getItem('about')
