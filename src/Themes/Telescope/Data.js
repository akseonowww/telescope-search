import React from 'react'

import gorkiiPhoto from '../../assets/image/authors/gorkii.jpg'
import lermontovPhoto from '../../assets/image/authors/lermontov.jpg'
import pushkinPhoto from '../../assets/image/authors/pushkin.jpg'

import biblePhoto from '../../assets/image/books/bible.jpg'
import kapitalPhoto from '../../assets/image/books/kapital.jpg'
import wePhoto from '../../assets/image/books/we.jpg'

import yandexIcon from '../../assets/image/bookmarks/icon-yandex.svg'
import vkIcon from '../../assets/image/bookmarks/icon-vk.svg'
import googleIcon from '../../assets/image/bookmarks/icon-google.png'
import duckduckgoIcon from '../../assets/image/bookmarks/icon-duckduckgo.svg'
import wikiIcon from '../../assets/image/bookmarks/icon-wikipedia.svg'
import tinkoffIcon from '../../assets/image/bookmarks/icon-tinkoff.svg'
import youtubeIcon from '../../assets/image/bookmarks/icon-youtube.svg'
import instagramIcon from '../../assets/image/bookmarks/icon-instagram.svg'
import sdamgiaIcon from '../../assets/image/bookmarks/icon-sdamgia.svg'

const Data = {
   searchEngine: [
      {
         name: "Яндекс",
         link: "yandex.ru/search/?text=",
         icon: yandexIcon
      },
      {
         name: "Google",
         id: 1,
         link: "google.ru/search?q=",
         icon: googleIcon
      },
      {
         name: "Duckduckgo",
         id: 2,
         link: "duckduckgo.com/?q=",
         icon: duckduckgoIcon
      },
      {
         name: "Wikipedia",
         id: 3,
         link: "ru.wikipedia.org/w/index.php?search=",
         icon: wikiIcon
      }
   ],
   bookmarks: [
      {
         name: "ВКонтакте",
         link: "vk.com",
         icon: vkIcon
      },
      {
         name: "YouTube",
         id: 1,
         link: "youtube.com",
         icon: youtubeIcon
      },
      {
         name: "Instagram",
         id: 2,
         link: "instagram.com",
         icon: instagramIcon
      },
      {
         name: "Тинькофф",
         id: 3,
         link: "tinkoff.ru",
         icon: tinkoffIcon
      },
      {
         name: "Яндекс",
         id: 4,
         link: "yandex.ru",
         icon: yandexIcon

      },
      {
         name: "СДАМ.ГИА",
         id: 5,
         link: "sdamgia.ru",
         icon: sdamgiaIcon
      },
   ],
   cards: [
      {
         name: "Авторы",
         card: [
            {
               name: "Александр Сергеевич Пушкин",
               "yaerLife": "1799-1837",
               info: "Русский поэт, драматург и прозаик, заложивший основы русского реалистического направления, литературный критик и теоретик литературы, историк, публицист, журналист; один из самых авторитетных литературных деятелей первой трети XIX века.",
               img: pushkinPhoto
            },
            {
               name: "Максим Горький",
               "yaerLife": "1868-1936",
               info: "Русский и советский писатель, поэт, прозаик, драматург, основоположник литературы социалистического реализма, инициатор создания Союза писателей СССР и первый председатель правления этого союза. ",
               img: gorkiiPhoto
            },
            {
               name: "Михаил Юрьевич Лермонтов",
               "yaerLife": "1814-1841",
               info: "Русский поэт, прозаик, драматург, художник. ",
               img: lermontovPhoto
            }
         ]
      },
      {
         name: "Книги",
         card: [
            {
               name: "Библия",
               info: "Собрание текстов, являющихся священными в иудаизме и христианстве и составляющих Священное Писание в этих религиях. В иудаизме Священным Писанием является Танах, именуемый также еврейской Библией; в христианстве - Ветхий Завет, состоящий из книг Танаха и дополнительных священных книг, и Новый Завет. Книги Танаха составляют иудейский канон. Книги Танаха и Нового Завета являются каноническими во всех христианских конфессиях. Различия в Библиях различных Церквей и конфессий состоят в наличии дополнительных книг и отрывков в Ветхом Завете и в некотором отличии перевода. В православии эти дополнительные книги и отрывки названы неканоническими или «анагиноскомена»; в католицизме - второканоническими; в протестантизме - апокрифическими.",
               yearWrite: "-0",
               img: biblePhoto
            },
            {
               name: "Капитал",
               info: "Главный труд немецкого экономиста Карла Маркса по политической экономии, содержащий критический анализ капитализма. Работа написана с применением диалектико-материалистического подхода, в том числе к историческим процессам.",
               yearWrite: "1867",
               img: kapitalPhoto
            },
            {
               name: "МЫ, Евгений Замятин",
               info: "Роман-антиутопия Евгения Замятина, написанный в 1920 году. В СССР не печатался до 1988 года как «идеологически враждебное» и «клеветническое» произведение. Повлиял на творчество многих известных писателей XX века, в том числе на Олдоса Хаксли, Джорджа Оруэлла, Курта Воннегута и Владимира Набокова.",
               yearWrite: "1957",
               img: wePhoto
            }
         ]
      }
   ],
   resultButtons: [

      {
         name: "Найти вариант",
         link: "/search-variants",
         id: '0-buttons'
      },
      {
         name: "Найти номер или текст задания",
         link: "/search-nomer-or-text",
         id: '1-buttons'
      },
   ],
   groups: [
      {
         name: "Формулы А",
         group: [
            {
               name: "Математика",
               content:
                  `
                  <h4>1. Степени</h4>
                  <ul>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li></li>
                  </ul>
               `,
               id: 'formula-0'
            },
            {
               name: "Физика",
               content:
                  `
                  <h4>1. Степени</h4>
                  <ul>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li></li>
                  </ul>
               `,
               id: 'formula-1'
            },
            {
               name: "Химия",
               content:
                  `
                  <h4>1. Степени</h4>
                  <ul>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li></li>
                  </ul>
               `,
               id: 'formula-3'
            },
            {
               name: "Информатика",
               content:
                  `
                  <h4>1. Степени</h4>
                  <ul>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li></li>
                  </ul>
               `,
               id: 'formula-4'
            }

         ],
         id: 0,
      },
      {
         name: "Экзамен А",
         group: [
            {
               name: "ЕГЭ",
               content:
                  `
                  <h4>1. Степени</h4>
                  <ul>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li></li>
                  </ul>
               `,
               id: 0
            },
            {
               name: "ОГЭ",
               content:
                  `
                  <h4>1. Степени</h4>
                  <ul>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li></li>
                  </ul>
               `,
               id: 1
            },
            {
               name: "ВПР",
               content:
                  `
                  <h4>1. Степени</h4>
                  <ul>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li></li>
                  </ul>
               `,
               id: 2
            },
            {
               name: "ГВЭ",
               content:
                  `
                  <h4>1. Степени</h4>
                  <ul>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li></li>
                  </ul>
               `,
               id: 3
            },
            {
               name: "ЦТ",
               content:
                  `
                  <h4>1. Степени</h4>
                  <ul>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li>$(3\times 4) \\div (5-3)$</li>
                     <li></li>
                  </ul>
               `,
               id: 4
            }

         ],
         id: 1,
      },
      {
         name: "Софт А",
         group: [
            {
               name: "Карточки",
               content:
                  `
                  <a href="https://ya.ru">
                     Перейти играть на сайт СДАМ.ГИА
                  </a>
               `,
               id: 0
            },
            {
               name: "Соревнование",
               content:
                  `
               <a href="https://ya.ru">
                  Перейти играть на сайт СДАМ.ГИА
               </a>
            `,
               id: 1
            },
            // {
            //    name: "Калькулятор",
            //    content:
            //    `
            //    <a href="https://ya.ru">
            //       Перейти играть на сайт СДАМ.ГИА
            //    </a>
            // `, 
            //    id: 2
            // }

         ],
         id: 2,
      }
   ]
}

export default Data