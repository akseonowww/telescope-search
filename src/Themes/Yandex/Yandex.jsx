import React from 'react'
import Search from '../../components/Search/Search'
import styles from './Yandex.module.scss'

const Yandex = () => {
   const f = 5

   return (
      <div className={styles.Yandex}>
         <Search className={styles.Search} />
      </div>
   )
}

export default Yandex