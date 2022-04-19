/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Search from '../../components/Search/Search'
import Data from '../../store/data'
import './Sdamgia.scss'

const Sdamgia = () => {
   const logo = Data.bookmarks[5].icon

   return (
      <div className="Sdamgia">
         <div className="Sdamgia-Header">
            <div className="vnimanie">
               <a href="https://math-ege.sdamgia.ru/">
                  Перейти на оригинальный сайт СДАМ.ГИА (ЕГЭ/мат.)
               </a>
            </div>
            <div className="Sdamgia-Logo">
               <img src={logo} alt="Логотип сдамгиа" />
               <div className="Sdamgia-Logo__text">
                  <h2>
                     Сдам ГИА
                     <span>: Решу ЕГЭ</span>
                  </h2>
                  <small>
                     Образовательный портал для подготовки к экзаменам
                  </small>
                  <h3>Математика профильного уровня</h3>
               </div>
            </div>
            <div className="Sdamgia-Nav">
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
               <div className="Sdamgia-Nav-Item" />
            </div>
         </div>
         <div className="Sdamgia-Search">
            <h4>Поиск по сайту</h4>
            <div className="Sdamgia-Search__block">
               <Search
                  className="Search"
                  placeholder="Найти вариант/номер или текст задание"
               />
            </div>
         </div>
         <div className="content">
            <div className="sidebar">
               <h4>Сайдбар</h4>
            </div>
            <div className="main">
               <div className="block">
                  <h4>Тренировочные варианты</h4>
               </div>
               <div className="block">
                  <h4>Все варианты Александра Ларина</h4>
               </div>
               <div className="block">
                  <h4>Конструктор варианта по типам и по темам</h4>
               </div>
            </div>
         </div>
         <div className="footer">
            <div className="footer-Nav">
               <div className="footer-Nav-Item">О проекте</div>
               <div className="footer-Nav-Item">Редакция</div>
               <div className="footer-Nav-Item">Правовая информация</div>
               <div className="footer-Nav-Item">О рекламе</div>
            </div>
            <span>© Гущин Д. Д., 2011—2022</span>
         </div>
      </div>
   )
}

export default Sdamgia
