export interface TGameProfile {
    id?: string
    name: string
    description: string
    category: string
}

export interface CreateGameProps {
  isOpen: boolean
  closeModal: () => void
}

export interface  DeleteGameProps  {
  isOpen: boolean
  closeModal: () => void
  gameDetails: Record<string, any> | null
}

export interface EditGameProps  {
  isOpen: boolean
  closeModal: () => void
  gameDetails: Record<string, any> | null
}

export interface GameFormProps {
    handleSubmitForm: (val: TGameProfile) => void
    isLoading: boolean

    gameProfileFromServer?: TGameProfile
    title: string
}
