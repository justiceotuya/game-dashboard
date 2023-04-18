import * as Yup from 'yup'



export const gameProfile = {
    name: '',
    description: '',
    category: '',
}

export const gameProfileInputs = [
    {
        name: 'name',
        label: "Name",
        type: 'text',
        placeholder: 'Enter a name for this game',
    },
    {
        name: 'description',
        label: "Description",
        type: 'textarea',
        placeholder: 'Type description here',
    },
    {
        name: 'category',
        type: 'select',
        label: "Category",
        placeholder: 'Select game category',
    },

]

export const gameValidationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
})
