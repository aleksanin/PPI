import { FC } from "react"
import { Link } from "react-router-dom";
import { Select } from "antd"
import { useGetPostsByUserIdQuery } from "../../../services/api/placeholdersApi";
import { IUser } from "../../../interfaces";

const PostsUser: FC<Omit<IUser, 'userId'>> = ({name, id}) => {
    const {data: posts} = useGetPostsByUserIdQuery(id)

    return (
        <>
            <Select 
            size="large" 
            defaultValue={name}
            >

            { posts && posts.map((post) => (
                <Select.Option key={post.id} value={post.title}>
                    <Link to={`/messages/${post.id}`} state={post}>{post.title}</Link>
                </Select.Option>
            ))}
            </Select>
        </>
    )
}

export default PostsUser