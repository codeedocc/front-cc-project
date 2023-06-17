interface IPages {
  path: string
  label: string
  percentage: number
}

interface IDotConfigurations {
  [key: string]: string[]
}

interface IBackNextButtons {
  pathToBack: string
  pathToNext?: string
  isDone?: boolean
  isFormCompleted: boolean
}

interface IModal {
  children: ReactNode
  isOpenFav?: boolean
}

interface IAdvantagesInput {
  id: string
  value: string
  onChange: (id: string, value: string) => void
  onRemove: (id: string) => void
}
