'use client';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

const Modal = (props: Props) => {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full justify-center items-center p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition w-full max-w-md">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal