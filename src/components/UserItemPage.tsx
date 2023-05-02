import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

type UserItemPageParams = {
    id: string
}

export const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null);

    const params = useParams<UserItemPageParams>();

    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            setUser(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Page {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city}
            </div>
        </div>
    )
}