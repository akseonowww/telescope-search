import React from 'react'
import Search from '../../components/Search/Search'
import logo from '../../assets/image/logo.svg'
import './Telescope.scss'
import Data from './Data'

const Telescope = () => {
   const f = 5

   return (
      <div className="Telescope">
         <div className="Header">
            <img className="logoTS" src={logo} alt="logo" />
            <h1>Телескоп</h1>
         </div>
         <Search
            className="Search"
            placeholder="Найди свою звезду!"
            searchEngines
            searchActive
            counterResults
            data={Data}
         />
      </div>
   )
}

export default Telescope
