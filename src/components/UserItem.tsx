import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

export const UserItem: FC<UserItemProps> = (props) => {

    const {
        user,
        onClick
    } = props;

    return (

        <div onClick={() => onClick(user)} style={{ padding: '15px', border: '1px solid gray' }}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>

    )

}
