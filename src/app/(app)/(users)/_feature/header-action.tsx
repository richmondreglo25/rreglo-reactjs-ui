"use client";
import React, { useState } from 'react';
import AddUserFormModal from './add-user/add-user-form-modal';

export default function HeaderAction() {
    const [openAddUserForm, setOpenAddUserform] = useState(false);

    const handleOpenAddUserForm = () => setOpenAddUserform(true);
    const handleCloseAddUserForm = () => setOpenAddUserform(false);

    return (
        <>
            <div className='flex justify-end w-full mb-5'>
                <button className="btn btn-md btn-primary" onClick={handleOpenAddUserForm}>Add</button>
            </div>

            {openAddUserForm && <AddUserFormModal handleCancel={handleCloseAddUserForm} />}
        </>
    )
}