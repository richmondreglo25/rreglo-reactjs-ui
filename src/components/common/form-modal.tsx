'use client';
import React, { ReactNode, useState } from 'react'
import Modal from './modal';

interface Props {
    children: ReactNode,
    title: string,
    errorMessage: string,
    submitLabel: string,
    cancelLabel: string,
    handleSubmit: (formData: any) => void,
    handleCancel: () => void
}

const defaultProps = {
    title: 'Form Modal',
    errorMessage: '',
    submitLabel: 'Yes',
    cancelLabel: 'No'
}

const FormModal = (props: Props) => {
    props = {
        ...defaultProps,
        ...props
    }

    // States.

    const [formSubmitting, setFormSubmitting] = useState(false);

    // Events.

    const _handleSubmit = async (formData: any) => {
        if (formSubmitting) {
            return;
        }

        setFormSubmitting(true);

        if (props.handleSubmit !== void 0) {
            props.handleSubmit(formData);
        }

        setFormSubmitting(false);
    }

    return (
        <Modal>
            <form id='modal-body' autoComplete='false' action={_handleSubmit} className='flex flex-col'>
                <div id='modal-header' className='px-5 py-3.5 border-b border-gray-200'>
                    <h3 id='modal-title' className='text-base font-semibold text-gray-900'>{props.title}</h3>
                    <button onClick={props.handleCancel} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </div>
                <div className='flex-1 bg-white px-5 pt-2 pb-5'>
                    {props.children}
                    {props.errorMessage &&
                        <div className="alert alert-error alert-soft mt-4">
                            {props.errorMessage}
                        </div>
                    }
                </div>
                <div id='modal-footer' className='flex flex-row-reverse px-5 py-3.5 border-t border-gray-200'>
                    {props.errorMessage &&
                        <button type='submit' className='btn btn-primary ml-2' disabled>{props.submitLabel}</button>
                    }
                    {!props.errorMessage &&
                        <button type='submit' className='btn btn-primary ml-2'>{props.submitLabel} {formSubmitting && <span> ...</span>}</button>
                    }
                    <button onClick={props.handleCancel} className='btn btn-default'>{props.cancelLabel}</button>
                </div>
            </form>
        </Modal>
    )
}

export default FormModal