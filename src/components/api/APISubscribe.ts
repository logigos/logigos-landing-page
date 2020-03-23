import axios, { AxiosResponse } from 'axios'

const apiClient = axios.create({
    baseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
})

export interface EmailSubscribeType {
    email: string
    status_email: string
    timestamp: number
    origin: string
}

interface APIsType {
    [key: string]: Function
}

export const APIs: APIsType = {
    subscribeEmail: async (data: EmailSubscribeType) => {
        try {
            const res = await apiClient.post<AxiosResponse>(
                '/emails.json',
                data
            )
            // console.log(res)
            // return res
        } catch (error) {
            console.log(error)
        }
    },
}
