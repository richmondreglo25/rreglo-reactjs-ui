import React from 'react'
import { getUsers } from '@api/users';

interface User {
    id: number,
    status: boolean,
    firstname: string,
    lastname: string,
    createdAt: string,
    updatedAt: string
}

const UsersTable = async () => {
    const users: User[] = await getUsers();
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
                            users.map(
                                user => <tr key={user.id}>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    {statusRenderer(user.status)}
                                    <td>{user.createdAt}</td>
                                    <td>{user.updatedAt}</td>
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