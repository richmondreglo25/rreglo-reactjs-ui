'use client';
import React, { useEffect, useState } from 'react'
import FormModal from '@components/common/form-modal';
import { getUser, editUser } from '@app/_actions/users';

interface Props {
    id: string,
    handleCancel: () => void
}

const defaultProps = {
    handleCancel: () => console.log('Cancelled!')
}

const EditUserModal = (props: Props) => {
    props = {
        ...defaultProps,
        ...props
    }

    // States

    const [userData, setUserData] = useState<any | null>({});
    const [errorMessage, setErrorMessage] = useState('');

    // Runs only on the first render.
    useEffect(() => {
        if (props.id) {
            (async () => {
                const userData_ = await getUser(props.id);
                setUserData(userData_);
            })();
        }

        () => {
            setUserData({});
        }
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
        const result = await editUser(props.id, formValues);

        if (result.error) {
            setUserData({
                ...userData,
                ...formValues
            });

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
        <FormModal title='Edit User' errorMessage={errorMessage} submitLabel='Edit' cancelLabel='Cancel' handleSubmit={handleSubmit} handleCancel={props.handleCancel}>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">First name</legend>
                <input type="text" id="firstname" name='firstname' className="input w-full" placeholder="Type here" defaultValue={userData?.firstname} onKeyDown={handleKeyDown} required />
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Last name</legend>
                <input type="text" id="lastname" name="lastname" className="input w-full" placeholder="Type here" defaultValue={userData?.lastname} onKeyDown={handleKeyDown} required />
            </fieldset>
        </FormModal>
    )
}

export default EditUserModal