/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useRef, useState } from 'react'
import Input from '../../components/input'
import { Formik, Field, Form } from 'formik';
import Button from '../../components/button';
import { userProfile, userProfileInputs, userValidationSchema } from './constant';
import { TUserProfile } from './types';

interface TUserForm {
    handleSubmitForm: (val: TUserProfile) => void
    isLoading: boolean

    userProfileFromServer?: TUserProfile
    title: string
}

const UserForm = (props: TUserForm) => {
    const { handleSubmitForm, isLoading, userProfileFromServer, title } = props

    return (
        <div className=" mb-5  mx-auto bg-color-white fixed right-0 top-0 bottom-0 h-screen max-w-[480px] w-full py-6 px-10">
            <h1 className='text-lg  text-color-accent-1 font-semibold mb-6'>{title}</h1>
            <Formik
                initialValues={userProfileFromServer ?? userProfile}
                onSubmit={handleSubmitForm}
                validationSchema={userValidationSchema}
                enableReinitialize
            >
                {formik => {
                    return (
                        <>
                            <div className='flex flex-col gap-3 mb-6'>
                                {userProfileInputs.map((value) => {
                                    const { name, type, label, placeholder } = value
                                    return (
                                        <Input
                                            key={name}
                                            name={name}
                                            type={type}
                                            label={label}
                                            placeholder={placeholder}
                                            required
                                            error={formik.touched[name as keyof typeof userProfile] && formik.errors[name as keyof typeof userProfile]}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            disabled={isLoading}
                                            value={formik.values[name as keyof typeof userProfile]}
                                        />
                                    )
                                }
                                )
                                }

                            </div>
                            <div className="text-right ">
                                <Button
                                    text={userProfileFromServer ? "Update user" : "Create user"}
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

export default UserForm
