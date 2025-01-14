/* eslint-disable @typescript-eslint/naming-convention */
import Input from '../../components/input'
import { Formik } from 'formik'
import Button from '../../components/button'
import {
    gameProfile,
    gameProfileInputs,
    gameValidationSchema
} from './constant'
import { GameFormProps, TGameProfile } from './types'
import Select from '../../components/select'
import { useMemo } from 'react'
import { useGetCategories } from '../../hooks/useGetCategories'
import TextArea from '../../components/textArea'


const GameForm = (props: GameFormProps) => {
    const { handleSubmitForm, isLoading, gameProfileFromServer, title } = props

    const { data: categoryData } = useGetCategories()

    const categories = useMemo(() => {
        return categoryData?.map((item: { name: string }) => item.name)
    }, [categoryData])

    return (
        <div className=' mb-5  mx-auto bg-color-white fixed right-0 top-0 bottom-0 h-screen max-w-[480px] w-full py-6 px-4 md:px-10'>
            <h1 className='text-lg  text-color-accent-1 font-semibold mb-6'>
                {title}
            </h1>
            <Formik
                initialValues={gameProfileFromServer ?? gameProfile}
                onSubmit={handleSubmitForm}
                validationSchema={gameValidationSchema}
                enableReinitialize
            >
                {formik => {
                    return (
                        <>
                            <div className='flex flex-col gap-3 mb-6'>
                                {gameProfileInputs.map(value => {
                                    const { name, type } = value

                                    const propsValue = {
                                        key: name,
                                        required: true,
                                        error:
                                            formik.touched[name as keyof typeof gameProfile] &&
                                            formik.errors[name as keyof typeof gameProfile],
                                        onChange: formik.handleChange,
                                        onBlur: formik.handleBlur,
                                        disabled: isLoading,
                                        value: formik.values[name as keyof typeof gameProfile],
                                        ...value
                                    }

                                    if (type === 'select') {
                                        return <Select options={categories || []} {...propsValue} />
                                    }
                                    if (type === 'textarea') {
                                        return <TextArea {...propsValue} />
                                    }
                                    return <Input {...propsValue} />
                                })}
                            </div>
                            <div className='text-right '>
                                <Button
                                    text={gameProfileFromServer ? 'Update game' : 'Create game'}
                                    type='submit'
                                    isFullWidth
                                    onClick={() => formik.handleSubmit()}
                                    isLoading={isLoading}
                                />
                            </div>
                        </>
                    )
                }}
            </Formik>
        </div>
    )
}

export default GameForm
