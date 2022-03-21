import { createSlice } from "@reduxjs/toolkit";
import iconVk from '../../assets/image/bookmarks/icon-vk.svg'
import iconYT from '../../assets/image/bookmarks/icon-youtube.svg'
import iconInstagram from '../../assets/image/bookmarks/icon-instagram.svg'
import iconTinkoff from '../../assets/image/bookmarks/icon-tinkoff.svg'
import iconYandex from '../../assets/image/bookmarks/icon-yandex.svg'
import iconGoogle from '../../assets/image/bookmarks/icon-google.png'


export const counterSlice = createSlice({
    name: 'bookmarks',
    initialState: {
        value: [
            {
                name: 'ВКонтакте',
                link: 'vk.com',
                icon: `${iconVk}`,
            },
            {
                name: 'YouTube',
                link: 'youtube.com',
                icon: `${iconYT}`,
            },
            {
                name: 'Instagram',
                link: 'instagram.com',
                icon: `${iconInstagram}`,
            },
            {
                name: 'Тинькофф',
                link: 'tinkoff.ru',
                icon: `${iconTinkoff}`,
            },
            {
                name: 'Яндекс',
                link: 'yandex.ru',
                icon: `${iconYandex}`,
            },
            {
                name: 'Google',
                link: 'google.ru',
                icon: `${iconGoogle}`,
            },
        ]
    },
    reducers: {
        increment: (el) => {
            const state = el
            state.value = '12'
        },
        descrement: (el) => {
            const state = el
            state.value = '21'
        },
        incrementByAmount: (el, action) => {
            const state = el
            state.value += action.payload
        }
    }
})

export const { increment, descrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer