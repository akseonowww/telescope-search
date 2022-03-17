import iconVk from '../../assets/image/bookmarks/icon-vk.svg'
import iconYT from '../../assets/image/bookmarks/icon-youtube.svg'
import iconInstagram from '../../assets/image/bookmarks/icon-instagram.svg'
import iconTinkoff from '../../assets/image/bookmarks/icon-tinkoff.svg'
import iconYandex from '../../assets/image/bookmarks/icon-yandex.svg'
import iconGoogle from '../../assets/image/bookmarks/icon-google.png'
import iconWiki from '../../assets/image/bookmarks/icon-wikipedia.svg'

import imgGorkii from '../../assets/image/authors/gorkii.jpg'
import imgLermantov from '../../assets/image/authors/lermontov.jpg'
import imgPuskin from '../../assets/image/authors/pushkin.jpg'

const Data = () =>
    // Ссылки, авторы, книги
    ({
        searchEngine: [
            {
                name: 'Яндекс',
                link: 'yandex.ru/search/?text=',
                icon: `${iconYandex}`,
            },
            {
                name: 'Google',
                link: 'google.ru/search?q=',
                icon: `${iconGoogle}`,
            },
            {
                name: 'Duckduckgo',
                link: 'duckduckgo.com/?q=',
                icon: ``,
            },
            {
                name: 'Wikipedia',
                link: 'ru.wikipedia.org/w/index.php?search=',
                icon: `${iconWiki}`,
            },
        ],

        bookmarks: [
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
        ],

        authors: [
            {
                name: 'Александр Сергеевич Пушкин',
                yaerLife: '1799-1837',
                info: 'Русский поэт, драматург и прозаик, заложивший основы русского реалистического направления, литературный критик и теоретик литературы, историк, публицист, журналист; один из самых авторитетных литературных деятелей первой трети XIX века.',
                img: `${imgPuskin}`,
            },
            {
                name: 'Максим Горький',
                yaerLife: '1868-1936',
                info: 'Русский и советский писатель, поэт, прозаик, драматург, основоположник литературы социалистического реализма, инициатор создания Союза писателей СССР и первый председатель правления этого союза. ',
                img: `${imgGorkii}`,
            },
            {
                name: 'Михаил Юрьевич Лермонтов',
                yaerLife: '1814-1841',
                info: 'Русский поэт, прозаик, драматург, художник. ',
                img: `${imgLermantov}`,
            },
        ],

        books: [
            {
                name: 'Библия',
                author: 'Люди',
                yearWrite: '-0',
            },
            {
                name: 'Капитал',
                author: 'Маркс',
                yearWrite: '1867',
            },
            {
                name: 'Незнайка',
                author: 'Маркс',
                yearWrite: '1957',
            },
        ],

        resultButtons: [
            {
                name: 'Найти вариант',
            },
            {
                name: 'Найти номер или текст задания',
            },
        ],

        groups: [
            {
                name: 'Экзамен',
                group: [
                    {
                        name: 'ЕГЭ',
                        url: '/',
                    },
                    {
                        name: 'ОГЭ',
                        url: '/',
                    },
                    {
                        name: 'ВПР',
                        url: '/',
                    },
                    {
                        name: 'ГВЭ',
                        url: '/',
                    },
                    {
                        name: 'ЦТ',
                        url: '/',
                    },
                ],
            },
            {
                name: 'Софт',
                group: [
                    {
                        name: 'Карточки',
                        url: '/',
                    },
                    {
                        name: 'Соревнование',
                        url: '/',
                    },
                    {
                        name: 'Калькулятор',
                        url: '/',
                    },
                ],
            },
            {
                name: 'Формулы',
                group: [
                    {
                        name: 'Математика',
                        url: '/',
                    },
                    {
                        name: 'Физика',
                        url: '/',
                    },
                    {
                        name: 'Химия',
                        url: '/',
                    },
                    {
                        name: 'Информатика',
                        url: '/',
                    },
                ],
            },
        ],
    })

export default Data()
