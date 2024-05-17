import { Card, Input } from "antd";
import { ChangeEvent, FC, useState } from "react";
import { ICardPost } from "../../interfaces";

const CardPost: FC<ICardPost> = ({title, body}) => {
    const [ newTitle, setTitle ] = useState<string>(title)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <>
            <Input onChange={(e) => handleChange(e)} placeholder="Изменить название заголовка"/>
            <Card title={newTitle}>{body}</Card>
        </>
    )
}

export default CardPost