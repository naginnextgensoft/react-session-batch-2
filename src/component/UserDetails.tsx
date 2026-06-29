import React, { useEffect } from 'react';
import type { IUser } from '../interface/user.interface';


interface Props {
    user: IUser,
    message: string;
    handleFollow: (user: IUser) => void;
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const UserDetail = (props: Props) => {

    const { user, message, handleFollow, } = props;

    useEffect(() => {
        console.log('props: ', props)
    }, [])
    return (
        <>
            <div>
                <h1>{user.id}</h1>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{message}</p>
                <button onClick={() => handleFollow(user)}>Follow</button>
            </div>
        </>
    )
}

export default UserDetail;