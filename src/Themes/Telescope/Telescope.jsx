import React from 'react'
import Search from '../../components/Search/Search'
import styles from './Telescope.module.scss'
import logo from '../../assets/image/logo.svg'


const Telescope = () => {
   const f = 5

   return (
      <div className={styles.Telescope}>
         <div className={styles.Header}>
            <img className={styles.logoTS} src={logo} alt="logo" />
            <h1>Телескоп</h1>
         </div>
         <Search className={styles.Search} />
      </div>
   )
}

export default Telescope