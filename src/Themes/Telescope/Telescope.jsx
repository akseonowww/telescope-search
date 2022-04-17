/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import { BsGithub, BsTelegram } from 'react-icons/bs'
import Search from '../../components/Search/Search'
import logo from '../../assets/image/logo.svg'
import './Telescope.scss'
// import Data from './Data'

const Telescope = () => {
   // const [theme, setTheme] = useState(0)
   const [statusDisplay, setStatusDisplay] = useState()
   // const setThemeNew = () => {
   //    theme ? setTheme(false) : setTheme(true)
   // }

   return (
      <div
         className={`Telescope 
         ${statusDisplay ? 'Telescope-Focus' : ''}`}
         >
         {/* ${theme ? 'Telescope-Dark' : ''}  */}
         <div className="Telescope-Header">
            {/* <button
               className="Telescope-Theme"
               type="button"
               onClick={() => setTheme(!theme)}
            >
               {theme ? <BsBrightnessHigh /> : <BsMoonStars />}
               <span>Сменить тему</span>
            </button> */}
         </div>
         <div className="Telescope-Main">
            <div className="Header">
               <img className="logoTS" src={logo} alt="logo" />
               <h1>Телескоп</h1>
            </div>
            <Search
               onFocus={() => setStatusDisplay(!statusDisplay)}
               className="Search"
               placeholder="Найди свою звезду!"
               firstR="Я слушаю вас..."
               counterResults
               // data={Data}
               // searchEngines
               // searchActive
               // work
               // valueDefault="фо"
            />
         </div>
         <div className="Telescope-Footer">
            <a href="https://github.com/akseonowww/telescope-search">
               <BsGithub />
               <span>Посмотреть код</span>
            </a>
            <a href="https://t.me/telescope_search">
               <BsTelegram />
               <span>Канал проекта</span>
            </a>
         </div>
      </div>
   )
}

export default Telescope
