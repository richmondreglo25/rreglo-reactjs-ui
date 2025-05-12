'use client';
import React from 'react'
import Modal from './modal';

interface Props {
    title: string,
    message: string,
    yesLabel: string,
    noLabel: string,
    handleYes: () => void,
    handleNo: () => void
}

const defaultProps = {
    title: 'Confirm',
    message: 'Are you sure?',
    yesLabel: 'Yes',
    noLabel: 'No'
}

const ConfirmationModal = (props: Props) => {
    props = {
        ...defaultProps,
        ...props
    }

    return (
        <Modal>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-base font-semibold text-gray-900" id="modal-title">{props.title}</h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">{props.message}</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button onClick={props.handleYes} className="btn btn-primary ml-2">{props.yesLabel}</button>
                <button onClick={props.handleNo} className="btn btn-default">{props.noLabel}</button>
            </div>
        </Modal>
    )
}

export default ConfirmationModal