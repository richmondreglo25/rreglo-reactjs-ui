'use client';
import React, { useEffect, useState } from 'react'
import FormModal from '@components/common/form-modal';
import { addUser } from '@app/_actions/users';

interface Props {
    handleCancel: () => void
}

const defaultProps = {
    handleCancel: () => console.log('Cancelled!')
}

const AddUserModal = (props: Props) => {
    props = {
        ...defaultProps,
        ...props
    }

    // States

    const [errorMessage, setErrorMessage] = useState('');

    // Runs only on the first render.
    useEffect(() => {
        // Do nothing.
    }, []);

    // Events

    const handleKeyDown = async (event: { target: any; }) => {
        const target = event.target;
        const fieldName = target?.name;
        const value = target?.value;

        if (validateField(fieldName, value)) {
            setErrorMessage('');
        }
    }

    const handleSubmit = async (formData: any) => {
        const formValues = Object.fromEntries(formData);
        const result = await addUser(formValues);

        if (result.error) {
            setErrorMessage(result.error);
        }
        else {
            props.handleCancel();
        }
    }

    // Validators

    const validateField = (fieldName: string, value: any) => {
        return true;
    }

    return (
        <FormModal title='Add User' errorMessage={errorMessage} submitLabel='Add' cancelLabel='Cancel' handleSubmit={handleSubmit} handleCancel={props.handleCancel}>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">First name</legend>
                <input type="text" id="firstname" name='firstname' className="input w-full" placeholder="Type here" onKeyDown={handleKeyDown} required />
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Last name</legend>
                <input type="text" id="lastname" name="lastname" className="input w-full" placeholder="Type here" onKeyDown={handleKeyDown} required />
            </fieldset>
        </FormModal>
    )
}

export default AddUserModal