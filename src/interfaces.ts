export interface IUser {
    name: string;
    id: number;
    userId: number
}

export interface IUserList {
    users: IUser[];
}

export interface ICardComment {
    comments: IComment[]
}

export interface IComment {
    email: string;
    body: string
}

export interface ICardPost {
    id: number;
    title: string;
    body: string
}