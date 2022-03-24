
import React from 'react'
import styles from './App.module.scss'
import Search from './components/Search/Search'

const App = () => (
   <div className="App">
      <div className={styles.Windows}>
         {/* <div className={styles.Header_active}>
            <img className={styles.logoTS} src={logo} alt="logo" />
            <h1>Телескоп</h1>
         </div> */}
         <Search className={styles.Search} />
      </div>
   </div>
)

export default App
