"use client";
import React, { useState } from 'react';
import AddUserModal from './add-user/add-user-modal';

export default function HeaderAction() {
    const [openAddUserModal, setOpenAddUserModal] = useState(false);

    const handleOpenAddUserModal = () => setOpenAddUserModal(true);
    const handleCloseAddUserModal = () => setOpenAddUserModal(false);

    return (
        <>
            <div className='flex justify-end w-full mb-5'>
                <button className="btn btn-md btn-primary" onClick={handleOpenAddUserModal}>Add</button>
            </div>

            {openAddUserModal && <AddUserModal handleCancel={handleCloseAddUserModal} />}
        </>
    )
}