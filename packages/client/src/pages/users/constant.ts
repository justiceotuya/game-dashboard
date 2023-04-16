import * as Yup from 'yup'



export const userProfile = {
    email: '',
    first_name: '',
    last_name: '',
    address: '',
}

export const userProfileInputs = [
    {
        name: 'first_name',
        label: 'First name',
        type: 'text',
        placeholder: 'Lobotka',
        required: true,
    },
    {
        name: 'last_name',
        label: 'Last name',
        type: 'text',
        placeholder: 'e.g Anguissa',
        required: true,
    },
    {
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'e.g email@provider.com',
        required: true,
    },

    {
        name: 'address',
        type: 'text',
        label: 'Address',
        placeholder: 'e.g 3 naples way',
        required: true,
    },
]

export const userValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    first_name: Yup.string().required('Required'),
    last_name: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
})
