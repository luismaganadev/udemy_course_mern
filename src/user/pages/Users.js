import React from "react";

import UsersList from '../components/UsersList';

const Users = () =>{
    const USERS = [
        {
            id: 'u1',
            name: 'Marse Felino',
            image: 'https://i.pinimg.com/736x/16/ab/50/16ab501640405bb0503463b634a72cae.jpg',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;