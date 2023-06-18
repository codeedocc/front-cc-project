import { useLocation } from 'react-router-dom'

export const pagePaths: IPages[] = [
  {
    path: '/front-cc-project/first-level',
    label: 'first_level',
    percentage: 0,
  },
  {
    path: '/front-cc-project/second-level',
    label: 'second_level',
    percentage: 50,
  },
  {
    path: '/front-cc-project/third-level',
    label: 'third_level',
    percentage: 100,
  },
]

export function getMatchingPage() {
  const location = useLocation()
  return pagePaths.find((page) => page.path === location.pathname)
}
