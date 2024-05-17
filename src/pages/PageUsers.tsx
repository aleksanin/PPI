import { FC } from "react"
import { useGetUsersQuery } from "../services/api/placeholdersApi"
import UserList from "../components/listUsers/ListUsers"

const PageUsers: FC = () => {
    const {data: users, isLoading} = useGetUsersQuery()

    return (
        <>
            {isLoading && <div>Loading...</div>}
            { users && <UserList users={users}/> }
        </>
    )
}

export default PageUsers
