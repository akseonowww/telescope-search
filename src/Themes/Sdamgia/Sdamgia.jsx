import React from 'react'
import Search from '../../components/Search/Search'
import styles from './Sdamgia.module.scss'

const Sdamgia = () => {
   const f = 5

   return (
      <div className={styles.Sdamgia}>
         <Search className={styles.Search} />
      </div>
   )
}

export default Sdamgia