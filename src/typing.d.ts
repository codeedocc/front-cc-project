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
  startSendProcess?: () => Promise<void>
}

interface IInitialState {
  isSendingData: boolean
}

interface IUser {
  phone: string
  email: string
  nickname: string
  name: string
  surname: string
  sex: string
  advantages: {
    id: string
    value: string
  }[]
  checkboxGroup: boolean[]
  radioGroup: boolean[]
  about: string
}

interface IAdvantagesInput {
  id: string
  value: string
  onChange: (id: string, value: string) => void
  onRemove: (id: string) => void
}

interface ResponseData {
  status: string
  message: string
}

interface IModal {
  children: ReactNode
  isOpenFav?: boolean
}

interface IRegister {
  register: any
}
