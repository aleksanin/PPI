import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICardPost, IComment, IUser } from '../../interfaces'

const URL = 'https://jsonplaceholder.typicode.com/'

export const jsonplaceholderApi = createApi({
  reducerPath: 'jsonplaceholder',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => URL + 'users',
    }),
    getPostsByUserId: builder.query<ICardPost[], number>({
        query: (userId) => `posts?userId=${userId}`,
    }),
    getMessagesByPostId: builder.query<IComment[], number>({
      query: (postId) => `comments?postId=${postId}`,
  }),
  }),
})

export const { 
  useGetUsersQuery, 
  useGetPostsByUserIdQuery, 
  useGetMessagesByPostIdQuery 
} = jsonplaceholderApi
