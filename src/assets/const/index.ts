import { current_dot, finished_dot, not_active_dot } from '../images'
import { useLocation } from 'react-router-dom'

export const pages: Pages[] = [
  { path: '/front-cc-project/fullName', label: 'fullName', percentage: 0 },
  {
    path: '/front-cc-project/advantages',
    label: 'advantages',
    percentage: 49,
  },
  { path: '/front-cc-project/about', label: 'about', percentage: 99 },
]

export const dotConfigurations: DotConfigurations = {
  fullName: [current_dot, not_active_dot, not_active_dot],
  advantages: [finished_dot, current_dot, not_active_dot],
  about: [finished_dot, finished_dot, current_dot],
}

export function getMatchingPage() {
  const location = useLocation()
  return pages.find((page) => page.path === location.pathname)
}

export const selectOptions = [
  { value: 'man', label: 'Man' },
  { value: 'woman', label: 'Woman' },
]
