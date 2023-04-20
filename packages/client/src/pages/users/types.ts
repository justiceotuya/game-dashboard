export type TUserProfile = {
    id?: string
    email: string
    first_name: string
    last_name: string
    address: string
    phone_number:string
}


export interface CreateUserProps {
  isOpen: boolean
  closeModal: () => void
}

export interface  DeleteUserProps  {
  isOpen: boolean
  closeModal: () => void
  userDetails: Record<string, any> | null
}

export interface EditUserProps  {
  isOpen: boolean
  closeModal: () => void
  userDetails: Record<string, any> | null
}

export interface UserFormProps {
    handleSubmitForm: (val: TUserProfile) => void
    isLoading: boolean

    userProfileFromServer?: TUserProfile
    title: string
}
