/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useRef, useState } from 'react'
import Input from '../../components/input'
import { Formik, Field, Form } from 'formik';
import Button from '../../components/button';
import { userProfile, userProfileInputs, userValidationSchema } from './constant';
import { TUserProfile } from './types';



const UserForm: React.FC = (
    // handleSubmitForm: any
) => {

    const handleSubmitForm = (values:TUserProfile) => {
console.log({values})
    }

    return (
        <div className="flex flex-col gap-3 pb-3 mb-5 max-w-xl mx-auto">
            <Formik
                initialValues={userProfile}
                onSubmit={handleSubmitForm}
                validationSchema={userValidationSchema}
                enableReinitialize
            >
                {formik => {
                    return (
                        <>
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
                                        // value={formik.values[name]}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                )
                            }
                            )
                            }
                            <div className=" py-3 text-right ">
                                <Button
                                    text="Submit Form"
                                    type="submit"
                                    onClick={() => formik.handleSubmit()}
                                // disabled={Object.keys(errors).some((item) => item)}
                                isLoading={true}
                                />
                                {/* <p>Values:  {
                                    JSON.stringify(formik.values)
                                }</p>
                                <p>Error:  {
                                    JSON.stringify(formik.errors)
                                }</p>
                                <p>Touched:  {
                                    JSON.stringify(formik.touched)
                                }</p> */}
                            </div>
                        </>
                    );
                }}
            </Formik>
        </div>
    )
}

export default UserForm
