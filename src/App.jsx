import React from 'react'
import styles from './App.module.scss'
import Search from './components/Search/Search'

const App = () => (
   <div className="App">
      <div className={styles.Windows}>
         <Search className={styles.Search} />
      </div>
   </div>
)

export default App
