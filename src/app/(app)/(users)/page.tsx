import React from 'react';
import UsersTable from "@components/user-table";
import HeaderAction from "./_feature/header-action";
import { getUsers } from '@app/_actions/users';
import { User } from '@types';

export default async function UsersPage() {
  const users: User[] = await getUsers();

  return (
    <>
      <HeaderAction />
      <UsersTable users={users} />
    </>
  )
}