/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import { BsBrightnessHigh, BsGithub, BsMoonStars } from 'react-icons/bs'
import Search from '../../components/Search/Search'
import logo from '../../assets/image/logo.svg'
import './Telescope.scss'
import Calculator from '../../components/Calculator/Calculator'
// import Data from './Data'

const Telescope = () => {
   const [theme, setTheme] = useState()
   const setThemeNew = () => {
      theme ? setTheme(false) : setTheme(true)
   }

   return (
      <div className={`Telescope ${theme ? 'Telescope-Dark' : ''}`}>
         {/* <button type="button" onClick={() => setThemeNew()}>
            {theme ? <BsBrightnessHigh /> : <BsMoonStars/>}
         </button> */}
         <div className="Telescope-Main">
            <div className="Header">
               <img className="logoTS" src={logo} alt="logo" />
               <h1>Телескоп</h1>
            </div>
            <Search
               className="Search"
               placeholder="Найди свою звезду!"
               firstR="Я слушаю вас..."
               // data={Data}
               // searchEngines
               // searchActive
               counterResults
               // work
               valueDefault="а"
            />
         </div>
         <div className="Telescope-Footer">
            <BsGithub />
         </div>
      </div>
   )
}

export default Telescope
