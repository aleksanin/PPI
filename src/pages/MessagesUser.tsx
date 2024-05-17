import { FC } from "react"
import { useLocation } from "react-router-dom";
import { useGetMessagesByPostIdQuery } from "../services/api/placeholdersApi"
import CardPost from "../components/cardPost/CardPost";
import CardComment from "../components/cardComment/CardComment";

const MessagesUser: FC = () => {
    const { state } = useLocation()
    const {data: comments, isLoading} = useGetMessagesByPostIdQuery(state.id)

    return (
        <>
            {isLoading && <div>Loading...</div>}
            { comments && 
                <>
                    <CardPost title={state.title} body={state.body}/>
                    <CardComment comments={comments}/>
                </>
            }
        </>
    )

}

export default MessagesUser