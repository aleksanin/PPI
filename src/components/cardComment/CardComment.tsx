import { Card, List } from "antd";
import { FC } from "react";
import { ICardComment } from "../../interfaces";

const CardComment: FC<ICardComment> = ({comments}) => {

    return (
        <>
            <h1>Комментарии</h1>
            <List dataSource={comments} renderItem={(comment) => (
                <Card title={comment.email}>
                    <p>{comment.body}</p>
                </Card>
            )}/>
        </>
    )
}

export default CardComment