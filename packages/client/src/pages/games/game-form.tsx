/* eslint-disable @typescript-eslint/naming-convention */
import Input from '../../components/input'
import { Formik } from 'formik';
import Button from '../../components/button';
import { gameProfile, gameProfileInputs, gameValidationSchema } from './constant';
import { TGameProfile } from './types';

interface TGameForm {
    handleSubmitForm: (val: TGameProfile) => void
    isLoading: boolean

    gameProfileFromServer?: TGameProfile
    title: string
}

const GameForm = (props: TGameForm) => {
    const { handleSubmitForm, isLoading, gameProfileFromServer, title } = props

    return (
        <div className=" mb-5  mx-auto bg-color-white fixed right-0 top-0 bottom-0 h-screen max-w-[480px] w-full py-6 px-10">
            <h1 className='text-lg  text-color-accent-1 font-semibold mb-6'>{title}</h1>
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
                                {gameProfileInputs.map((value) => {
                                    const { name, type, label, placeholder } = value
                                    return (
                                        <Input
                                            key={name}
                                            name={name}
                                            type={type}
                                            label={label}
                                            placeholder={placeholder}
                                            required
                                            error={formik.touched[name as keyof typeof gameProfile] && formik.errors[name as keyof typeof gameProfile]}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            disabled={isLoading}
                                            value={formik.values[name as keyof typeof gameProfile]}
                                        />
                                    )
                                }
                                )
                                }
                            </div>
                            <div className="text-right ">
                                <Button
                                    text={gameProfileFromServer ? "Update game" : "Create game"}
                                    type="submit"
                                    isFullWidth
                                    onClick={() => formik.handleSubmit()}
                                    // disabled={Object.keys(errors).some((item) => item)}
                                    isLoading={isLoading}
                                />
                            </div>
                        </>
                    );
                }}
            </Formik>
        </div>
    )
}

export default GameForm
