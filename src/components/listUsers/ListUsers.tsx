import { List } from "antd"
import { FC } from "react"
import PostsUser from "./postUsers/PostUsers";
import { IUserList } from "../../interfaces";

const UserList: FC<IUserList> = ({users}) => {

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={users}
                renderItem={(user) => (
                <PostsUser id={user.id} name={user.name}/>
            )}
            />
        </>
    )
}

export default UserList