"use client";
import React, { useState } from 'react';
import { User } from '@types';
import EditUserModal from '@app/(app)/(users)/_feature/edit-user/edit-user-modal';

interface Props {
    users: User[]
}

const UsersTable = (props: Props) => {

    // States

    const [id, setId] = useState('');
    const [openEditUserModal, setOpenEditUserModal] = useState(false);

    const handleOpenEditUserModal = (id: string) => {
        setId(id);
        setOpenEditUserModal(true)
    };

    const handleCloseEditUserModal = () => setOpenEditUserModal(false);

    // Table settings

    const headers = [{
        name: 'firstName',
        label: 'First Name'
    }, {
        name: 'lastName',
        label: 'Last Name'
    }, {
        name: 'status',
        label: 'Status'
    }, {
        name: 'createdAt',
        label: 'Created At'
    }, {
        name: 'updatedAt',
        label: 'Updated At'
    }];

    const statusRenderer = (status: boolean) => {
        if (status) {
            return (
                <td>
                    <div aria-label='success' className='status status-success mr-1.5'></div> Active
                </td>
            );
        }

        return (
            <td>
                <div aria-label='success' className='status status-danger mr-1.5'></div> Inactive
            </td>
        );
    }

    return (
        <>
            {openEditUserModal && <EditUserModal id={id} handleCancel={handleCloseEditUserModal} />}
            <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
                <table className='table table-zebra'>
                    <thead>
                        <tr>
                            {
                                headers.map(
                                    header => <th key={header.name}>{header.label}</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.users.map(
                                user => <tr key={user.id}>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    {statusRenderer(user.status)}
                                    <td>{user.createdAt}</td>
                                    <td>{user.updatedAt}</td>
                                    <td>
                                        <button className="btn btn-xs btn-primary" onClick={() => handleOpenEditUserModal(user.id)}>Edit</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UsersTable