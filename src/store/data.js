import React from 'react'

import gorkiiPhoto from '../assets/image/authors/gorkii.jpg'
import lermontovPhoto from '../assets/image/authors/lermontov.jpg'
import pushkinPhoto from '../assets/image/authors/pushkin.jpg'

import biblePhoto from '../assets/image/books/bible.jpg'
import kapitalPhoto from '../assets/image/books/kapital.jpg'
import wePhoto from '../assets/image/books/we.jpg'

import yandexIcon from '../assets/image/bookmarks/icon-yandex.svg'
import vkIcon from '../assets/image/bookmarks/icon-vk.svg'
import googleIcon from '../assets/image/bookmarks/icon-google.png'
import duckduckgoIcon from '../assets/image/bookmarks/icon-duckduckgo.svg'
import wikiIcon from '../assets/image/bookmarks/icon-wikipedia.svg'
import tinkoffIcon from '../assets/image/bookmarks/icon-tinkoff.svg'
import youtubeIcon from '../assets/image/bookmarks/icon-youtube.svg'
import instagramIcon from '../assets/image/bookmarks/icon-instagram.svg'
import sdamgiaIcon from '../assets/image/bookmarks/icon-sdamgia.svg'

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
         name: "AUTHOR",
         card: [
            {
               name: "Александр Пушкин",
               info: "Русский поэт, драматург и прозаик, заложивший основы русского реалистического направления, литературный критик и теоретик литературы, историк, публицист, журналист; один из самых авторитетных литературных деятелей первой трети XIX века.",
               wiki: 'https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B8%D1%87',
               link: 'https://aldebaran.ru/author/pushkin_aleksandr/',
               img: pushkinPhoto
            },
            {
               name: "Максим Горький",
               info: "Русский и советский писатель, поэт, прозаик, драматург, основоположник литературы социалистического реализма, инициатор создания Союза писателей СССР и первый председатель правления этого союза. ",
               wiki: 'https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D1%81%D0%B8%D0%BC_%D0%93%D0%BE%D1%80%D1%8C%D0%BA%D0%B8%D0%B9',
               link: 'https://aldebaran.ru/author/lermontov_mihail/',
               img: gorkiiPhoto
            },
            {
               name: "Михаил Лермонтов",
               info: "Русский поэт, прозаик, драматург, художник. Творчество Лермонтова, в котором сочетаются гражданские, философские и личные мотивы, отвечавшие насущным потребностям духовной жизни русского общества, ознаменовало собой новый расцвет русской литературы и оказало большое влияние на виднейших русских писателей и поэтов XIX и XX веков. Произведения Лермонтова получили большой отклик в живописи, театре, кинематографе. Его стихи стали подлинным кладезем для оперного, симфонического и романсового творчества. Многие из них стали народными песнями.",
               wiki: 'https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D1%80%D0%BC%D0%BE%D0%BD%D1%82%D0%BE%D0%B2,_%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB_%D0%AE%D1%80%D1%8C%D0%B5%D0%B2%D0%B8%D1%87',
               link: '',
               img: lermontovPhoto
            }
         ]
      },
      {
         name: "BOOKS",
         card: [
            {
               name: "Библия",
               info: "Собрание текстов, являющихся священными в иудаизме и христианстве и составляющих Священное Писание в этих религиях. В иудаизме Священным Писанием является Танах, именуемый также еврейской Библией; в христианстве - Ветхий Завет, состоящий из книг Танаха и дополнительных священных книг, и Новый Завет. Книги Танаха составляют иудейский канон. Книги Танаха и Нового Завета являются каноническими во всех христианских конфессиях. Различия в Библиях различных Церквей и конфессий состоят в наличии дополнительных книг и отрывков в Ветхом Завете и в некотором отличии перевода. В православии эти дополнительные книги и отрывки названы неканоническими или «анагиноскомена»; в католицизме - второканоническими; в протестантизме - апокрифическими.",
               wiki: 'https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D1%8F',
               link: 'https://bible-teka.com/https://aldebaran.ru/author/pisanie_svyashennoe/kniga_bibliya_knigi_svyashennogo_pisaniya_veth/',
               img: biblePhoto
            },
            {
               name: "Капитал (Маркс)",
               info: "Главный труд немецкого экономиста Карла Маркса по политической экономии, содержащий критический анализ капитализма. Работа написана с применением диалектико-материалистического подхода, в том числе к историческим процессам.",
               wiki: 'https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BB_(%D0%9C%D0%B0%D1%80%D0%BA%D1%81)',
               link: 'https://aldebaran.ru/author/genrih_marks_karl/kniga_kapital/',
               img: kapitalPhoto
            },
            {
               name: "МЫ (роман)",
               info: "Роман-антиутопия Евгения Замятина, написанный в 1920 году. В СССР не печатался до 1988 года как «идеологически враждебное» и «клеветническое» произведение. Повлиял на творчество многих известных писателей XX века, в том числе на Олдоса Хаксли, Джорджа Оруэлла, Курта Воннегута и Владимира Набокова.",
               wiki: 'https://ru.wikipedia.org/wiki/%D0%9C%D1%8B_(%D1%80%D0%BE%D0%BC%D0%B0%D0%BD)',
               link: 'https://aldebaran.ru/author/zamyatin_evgeniyi/kniga_myi_russkaya_antiutopiya/',
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
         name: "Формулы",
         group: [
            {
               name: "Мате матика",
               content: `<div class="Article-Content__Text">
               <div class="Article-Content__Text-Content">
                  <div class="Article-Content__Text-Content__Item">
                     <h3>Степени</h3>
                     <ol>
                        <li>$a^{n} \\times a^{m}=a^{n+m}$</li>
                        <li>$a^{n} \\div a^{m}=a^{n-m}$</li>
                        <li>$(a^{n})^{m}=a^{n \\times m}$</li>
                        <li>$\\dfrac{a^{n}}{b^{n}}=\\left(\\dfrac{a}{b} \\right)^{n}$</li>
                        <li>$a^{0}=1$</li>
                        <li>$a^{-n}=\\dfrac{1}{a^{n}}$</li>
                        <li>
                           $\\left(\\dfrac{a}{b}
                           \\right)^{-n}=\\left(\\dfrac{b}{a}\\right)^{n}$
                        </li>
                     </ol>
                  </div>
            
                  <div class="Article-Content__Text-Content__Item">
                     <h3>Корни</h3>
                     <ol>
                        <li>$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$</li>
                        <li>$\\dfrac{\\sqrt{a} }{ \\sqrt{b}} = \\sqrt{\\dfrac{a}{b}}$</li>
                        <li>$(\\sqrt{a})^{2} = a$</li>
                        <li>$\\sqrt{a^{2}} = |a|$</li>
                        <li>$\\sqrt[n]{a^{m}} = a^{\\frac{m}{n}}$</li>
                     </ol>
                  </div>
            
                  <div class="Article-Content__Text-Content__Item">
                     <h3>Логарифмы</h3>
                     Если $\\log_{a}{b}=c$, то $a^{c}=b$. Основное лоагрифмическиое
                     тождество: $$a^{\\log_{a}{b}}$$ ОДЗ логарифма $$ a > 10, a \\not= 1, b
                     > 0$$
                     <ol>
                        <li>$\\log_{a}b + \\log_{a}{c} = log_{a}{b} \\times c$</li>
                     </ol>
                  </div>
                  <div class="Article-Content__Text-Content__Item">
                     <h3>Формулы сокращённого умножения</h3>
                     <dl>
                        <dt>Разность квадратов:</dt>
                        <dd>$ a^{2} - b^{2} = (a - b)(a + b) $</dd>
                        <dt>Квадрат разности:</dt>
                        <dd>$ (a - b)^{2} = a^{2} - 2ab + b^{2} $</dd>
                        <dt>Квадрат cevvs:</dt>
                        <dd>$ (a + b)^{2} = a^{2} + 2ab + b^{2}$</dd>
                        <dt>Разность кубов:</dt>
                        <dd>$ a^{3} - b^{3} = (a - b)(a^{2} + ab + b^{2}) $</dd>
                        <dt>Сумма кубов:</dt>
                        <dd>$ a^{3} + b^{3} = (a + b)(a^{2} - ab + b^{2}) $</dd>
                     </dl>
                  </div>
               </div>
            </div>
            
               `,
               id: 'formula-0'
            },
            {
               name: "Физика",
               content:`<div class="Article-Content__Text">
               <div class="Article-Content__Text-Content">
                  <div class="Article-Content__Text-Content__Item">
                     <h3>Механика</h3>
                     <h4>Кинематика прямолинейного движения</h4>
                     <dl>
                        <dt>Проекция перемещения на ось Х</dt>
                        <dd>$s_x = x - x_0$</dd>
                        <dt>Cкорость равномерного прямолинейного движения</dt>
                        <dd>$\\overrightarrow{v} = \\dfrac{\\overrightarrow{s}}{t}$</dd>
                        <dt>Средняя скорость</dt>
                        <dd>$v_ср = \\dfrac{s}{t}$</dd>
                        <dt>Уравнение равномерного прямолинейного движения</dt>
                        <dd>$x = x_0 + v_x t$</dd>
                        <dt>Ускорение при равноускоренном движении</dt>
                        <dd>
                           $ \\overrightarrow{a} = \\dfrac{\\overrightarrow{v} -
                           \\overrightarrow{v_0}}{t} $
                        </dd>
                        <dt>Cкорость при равноускоренном движении</dt>
                        <dd>
                           $ \\overrightarrow{v}=\\overrightarrow{v_0}+\\overrightarrow{a}t
                           $
                        </dd>
                        <dt>Перемещение при равноускоренном движении</dt>
                        <dd>
                           $
                           \\overrightarrow{s}=\\dfrac{\\overrightarrow{v}+\\overrightarrow{v_0}}{2}t
                           $
                        </dd>
                        <dt>
                           Зависимость перемещения при равноускоренном движении от времени
                        </dt>
                        <dd>
                           $
                           \\overrightarrow{s}=\\overrightarrow{v_0}t+\\dfrac{\\overrightarrow{a}t^{2}}{2}
                           $
                        </dd>
                        <dt>
                           Проекция перемещения при равноускоренном движении без времени
                        </dt>
                        <dd>$s_x = \\dfrac{v^{2}_x - v^{2}_0x}{2a_x}$</dd>
                        <dt>Уравнение равноускоренного движения</dt>
                        <dd>$x = x_0 + v_0 t + \\dfrac{at^{2}}{2}$</dd>
                     </dl>
                  </div>
               </div>
            </div>
            
               `,
               id: 'formula-1'
            },
            {
               name: "Информатика",
               content:`<div class="Article-Content__Text">
               <div class="Article-Content__Text-Content">
                  <div class="Article-Content__Text-Content__Item">
                     <h3>Информация</h3>
                     <h4>Формула Хартли</h4>
                     <dl>
                        <dt>$\\boxed{N=p^i}$</dt>
                        <dd>
                           <p>
                              $p~ - $ количество вариантов (используемых символов, сигналов),
                              мощность алфавита
                           </p>
                           <p>$i~ - $ длина кода</p>
                           <p>$N~ - $ количество комбинаций</p>
                        </dd>
                        <dt>$\\boxed{N=2^i}$</dt>
                        <dd>
                           <p>
                              $i~ - $ информационный вес одного символа алфавита (выражается в
                              битах)
                           </p>
                           <p>$N~ - $ мощность исходного алфавита</p>
                        </dd>
                        <dt>$\\boxed{I=k \\times i}$</dt>
                        <dd>
                           <p>$k~ - $ количество символов в сообщении</p>
                           <p>$i~ - $ информационный вес символа</p>
                           <p>$I~ - $ информационный объем сообщения</p>
                        </dd>
                     </dl>
                     </ul>
                  </div>
               </div>
            </div>
            `,
               id: 'formula-4'
            }

         ],
         id: 0,
      },
      {
         name: "Экзамен",
         group: [
            {
               name: "ЕГЭ",
               content: `<div class="Article-Content__List">
               <a href="https://math-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Математика Профильная</a
               >
               <a href="https://mathb-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Математика Базовая</a
               >
               <a href="https://inf-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Информатика</a
               >
               <a href="https://rus-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Русский язык</a
               >
               <a href="https://en-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Английский язык</a
               >
               <a href="https://de-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Немецкий язык</a
               >
               <a href="https://fr-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Французский язык</a
               >
               <a href="https://sp-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Испанский язык</a
               ><a href="https://phys-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Физика</a
               ><a href="https://chem-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Химия</a
               ><a href="https://bio-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Биология</a
               ><a href="https://geo-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >География</a
               ><a href="https://soc-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Обществознание</a
               ><a href="https://lit-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >Литература</a
               >
               <a href="https://hist-ege.sdamgia.ru/" class="Article-Content__List-Item"
                  >История</a
               >
            </div>
            `,
               id: 0
            },
            {
               name: "ОГЭ",
               content: `<div class="Article-Content__List">
               <a href="https://math-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Математика</a
               >
               <a href="https://inf-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Информатика</a
               >
               <a href="https://rus-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Русский язык (Письменный экзамен)</a
               >
               <a href="https://ruso-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Русский язык (Устное собеседование)</a
               >
               <a href="https://en-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Английский язык</a
               >
               <a href="https://de-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Немецкий язык</a
               >
               <a href="https://fr-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Французский язык</a
               >
               <a href="https://sp-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Испанский язык</a
               ><a href="https://phys-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Физика</a
               ><a href="https://chem-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Химия</a
               ><a href="https://bio-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Биология</a
               ><a href="https://geo-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >География</a
               ><a href="https://soc-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Обществознание</a
               ><a href="https://lit-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >Литература</a
               >
               <a href="https://hist-oge.sdamgia.ru/" class="Article-Content__List-Item"
                  >История</a
               >
            </div>`,
               id: 1
            },
            {
               name: "ВПР",
               content: `<small>
               <strong>Русский язык</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="https://rus2-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >2 класс</a
               >
               <a
                  target="_blank"
                  href="https://rus4-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >4 класс</a
               >
               <a
                  target="_blank"
                  href="https://rus5-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >5 класс</a
               >
               <a
                  target="_blank"
                  href="https://rus6-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >6 класс</a
               >
               <a
                  target="_blank"
                  href="https://rus7-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >7 класс</a
               >
               <a
                  target="_blank"
                  href="https://rus8-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >8 класс</a
               >
            </div>
            
            <small>
               <strong>Математика</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="https://math4-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >4 класс</a
               >
               <a
                  target="_blank"
                  href="https://math5-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >5 класс</a
               >
               <a
                  target="_blank"
                  href="https://math6-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >6 класс</a
               >
               <a
                  target="_blank"
                  href="https://math7-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >7 класс</a
               >
               <a
                  target="_blank"
                  href="https://math8-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >8 класс</a
               >
            </div>
            
            <small>
               <strong>Физика</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="https://phys7-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >7 класс</a
               >
               <a
                  target="_blank"
                  href="https://phys8-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >8 класс</a
               >
               <a
                  target="_blank"
                  href="https://phys11-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>Биология</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="https://bio5-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >5 класс</a
               >
               <a
                  target="_blank"
                  href="https://bio6-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >6 класс</a
               >
               <a
                  target="_blank"
                  href="https://bio6c-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >6 класс (конц.)</a
               >
               <a
                  target="_blank"
                  href="https://bio7-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >7 класс</a
               >
               <a
                  target="_blank"
                  href="https://bio8-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >8 класс</a
               >
               <a
                  target="_blank"
                  href="https://bio8c-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >8 класс (конц.)</a
               >
               <a
                  target="_blank"
                  href="https://bio11-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>География</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="https://geo6-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >6 класс</a
               >
               <a
                  target="_blank"
                  href="https://geo7-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >7 класс</a
               >
               <a
                  target="_blank"
                  href="https://geo8-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >8 класс</a
               >
               <a
                  target="_blank"
                  href="https://geo11-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>История</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="https://hist5-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >5 класс</a
               >
               <a
                  target="_blank"
                  href="https://hist6-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >6 класс</a
               >
               <a
                  target="_blank"
                  href="https://hist7-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >7 класс</a
               >
               <a
                  target="_blank"
                  href="https://hist8-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >8 класс</a
               >
               <a
                  target="_blank"
                  href="https://hist11-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            <small>
               <strong>Обществознание</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="https://soc6-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >6 класс</a
               >
               <a
                  target="_blank"
                  href="https://soc7-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >7 класс</a
               >
               <a
                  target="_blank"
                  href="https://soc8-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >8 класс</a
               >
            </div>
            
            <small>
               <strong>Окружающий мир</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="#"
                  class="Article-Content__List-Item"
                  >4 класс</a
               >
            </div>
            
            <small>
               <strong>Химия</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="https://chem8-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >8 класс</a
               >
               <a
                  target="_blank"
                  href="https://chem11-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>Английский язык</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="https://en7-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >7 класс</a
               >
               <a
                  target="_blank"
                  href="https://en11-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>Немецкий язык</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="https://de7-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >7 класс</a
               >
               <a
                  target="_blank"
                  href="https://de11-vpr.sdamgia.ru/"
                  class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>Французсский язык</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  target="_blank"
                  href="#"
                  class="Article-Content__List-Item"
                  >Открыть</a
               >
            </div>`,
               id: 2
            },
            {
               name: "ГВЭ",
               content: `<small>
               <strong>Математика</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  href="https://math9-gve.sdamgia.ru/?redir=1"
                  class="Article-Content__List-Item"
                  >9 класс</a
               >
               <a
                  href="https://math11_100-gve.sdamgia.ru/?redir=1"
                  class="Article-Content__List-Item"
                  >100-е варианты</a
               >
               <a
                  href="https://math11-gve.sdamgia.ru/?redir=1"
                  class="Article-Content__List-Item"
                  >для аттестата</a
               >
               <a
                  href="https://matho-gve.sdamgia.ru/?redir=1"
                  class="Article-Content__List-Item"
                  >устная</a
               >
            </div>
            
            <small>
               <strong>Информатика</strong>
            </small>
            <div class="Article-Content__List">
               <a href="#" class="Article-Content__List-Item">11 класс</a>
            </div>
            
            <small>
               <strong>Русский язык</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  href="https://rus9-gve.sdamgia.ru/?redir=1"
                  class="Article-Content__List-Item"
                  >9 класс</a
               >
               <a
                  href="https://rus11_100-gve.sdamgia.ru/?redir=1"
                  class="Article-Content__List-Item"
                  >100-е варианты</a
               >
               <a
                  href="https://rus11-gve.sdamgia.ru/?redir=1"
                  class="Article-Content__List-Item"
                  >для аттестата</a
               >
            </div>
            
            <small>
               <strong>Английский язык</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  href="https://en11-gve.sdamgia.ru/?redir=1"
                  class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>Немецкий язык</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  href="https://de11-gve.sdamgia.ru/?redir=1"
                  class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>Французсский язык</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  href="https://fr11-gve.sdamgia.ru/?redir=1"
                  class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>Испанский язык</strong>
            </small>
            <div class="Article-Content__List">
               <a
                  href="https://sp11-gve.sdamgia.ru/?redir=1"
                  class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small><strong>Физика</strong> </small>
            <div class="Article-Content__List">
               <a href="https://phys11-gve.sdamgia.ru/?redir=1" class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>Химия</strong>
            </small>
            <div class="Article-Content__List">
               <a href="#" class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>Биология</strong>
            </small>
            <div class="Article-Content__List">
               <a href="https://bio11-gve.sdamgia.ru/?redir=1" class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>География</strong>
            </small>
            <div class="Article-Content__List">
               <a href="https://geo9-gve.sdamgia.ru/?redir=1" class="Article-Content__List-Item"
                  >9 класс</a
               >
               <a href="https://geo11-gve.sdamgia.ru/?redir=1" class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>Обществознание</strong>
            </small>
            <div class="Article-Content__List">
               <a href="https://soc9-gve.sdamgia.ru/?redir=1" class="Article-Content__List-Item"
                  >9 класс</a
               >
               <a href="https://soc11-gve.sdamgia.ru/?redir=1" class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>Литература</strong>
            </small>
            <div class="Article-Content__List">
               <a href="#" class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
            
            <small>
               <strong>История</strong>
            </small>
            <div class="Article-Content__List">
               <a href="https://hist9-gve.sdamgia.ru/?redir=1" class="Article-Content__List-Item"
                  >9 класс</a
               >
               <a href="https://hist11-gve.sdamgia.ru/?redir=1" class="Article-Content__List-Item"
                  >11 класс</a
               >
            </div>
               `,
               id: 3
            },
            {
               name: "ЦТ",
               content: `<div class="Article-Content__List">
               <a href="https://math.reshuct.by/?redir=1" class="Article-Content__List-Item"
                  >Математика
               </a>
               <a href="https://math2.reshuct.by/?redir=1" class="Article-Content__List-Item"
                  >Математика 9 класс
               </a>
               <a
                  href="https://math3b.reshuct.by/?redir=1"
                  class="Article-Content__List-Item"
                  >Математика 11 класс база
               </a>
               <a href="https://math3.reshuct.by/?redir=1" class="Article-Content__List-Item"
                  >Математика 11 класс профиль
               </a>
               <a href="https://rus.reshuct.by/?redir=1" class="Article-Content__List-Item">
                  Русский язык (Письменный экзамен)
               </a>
               <a href="https://en.reshuct.by/?redir=1" class="Article-Content__List-Item">
                  Английский язык
               </a>
               <a href="https://de.reshuct.by/?redir=1" class="Article-Content__List-Item">
                  Немецкий язык
               </a>
               <a href="https://fr.reshuct.by/?redir=1" class="Article-Content__List-Item"
                  >Французский язык
               </a>
               <a href="https://sp.reshuct.by/?redir=1" class="Article-Content__List-Item">
                  Испанский язык 
               </a>
               <a
                  href="https://phys.reshuct.by/?redir=1"
                  class="Article-Content__List-Item"
               >
                  Физика
               </a>
               <a href="https://bio.reshuct.by/?redir=1" class="Article-Content__List-Item">
                  Биология
               </a>
               <a href="https://chem.reshuct.by/?redir=1" class="Article-Content__List-Item">
                  Химия
               </a>
               <a href="https://geo.reshuct.by/?redir=1" class="Article-Content__List-Item">
                  География
               </a>
               <a href="https://soc.reshuct.by/?redir=1" class="Article-Content__List-Item">
                  Обществознание
               </a>
               <a href="https://wh.reshuct.by/?redir=1" class="Article-Content__List-Item">
                  Мировая история
               </a>
               <a href="https://bh.reshuct.by/?redir=1" class="Article-Content__List-Item">
                  История Беларусии
               </a>
            </div>
            `,
               id: 4
            }

         ],
         id: 1,
      },
      {
         name: "Софт",
         group: [
            {
               name: "Карточки",
               content: `
                  <a href="https://vk.com/wall-34649478_169793" class="Article-Button">
                     Открыть карточки
                  </a>
               `,
               id: 0
            },
            {
               name: "Соревнование",
               content: `
               <a href="https://ege.sdamgia.ru/game.htm" class="Article-Button">
                  Играть в ЕГЭ-игрушку
               </a>
            `,
               id: 1
            }

         ],
         id: 2,
      }
   ]
}

export default Data