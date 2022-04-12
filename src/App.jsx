/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-this-in-sfc */
import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './App.scss'
import { BsSearch } from 'react-icons/bs'
import Search from './components/Search/Search'
import Data from './store/data'
import Sdamgia from './Themes/Sdamgia/Sdamgia'
import Telescope from './Themes/Telescope/Telescope'
import logoTS from './assets/image/logo.svg'
import Yandex from './Themes/Yandex/Yandex'

// import dataTS from './store/data'
// import data from './store/data'

const App = () => {
   const baseURL = 'https://jsonblob.com/api/jsonBlob/962331985410539520' // 30 days (9.04-...)
   // const [urlData, setUrlData] = useState(baseURL)
   const { bookmarks } = Data

   // let baseData = 0

   // setTimeout(() => {
   //    baseData = dataTS(urlData)
   //    console.log(777, baseData)
   // }, 3000)

   return (
      <div className="App">
         <Tabs forceRenderTabPanel defaultIndex={0}>
            <TabList>
               <Tab>
                  <img src={logoTS} alt="Лого" />
                  <span>Телескоп</span>
               </Tab>
               <Tab>
                  <img src={bookmarks[5].icon} alt="Лого" />
                  <span>СДАМ.ГИА</span>
               </Tab>
               {/* <Tab>
                  <img src={bookmarks[4].icon} alt="Лого" />
                  <span>Яндекс</span>
               </Tab> */}
               <Tab>
                  <div className="icon-tab">
                     <BsSearch />
                  </div>
                  <span>Дефолтный</span>
               </Tab>
            </TabList>

            <TabPanel>
               <Telescope />
            </TabPanel>
            <TabPanel>
               <Sdamgia />
            </TabPanel>
            {/* <TabPanel>
               <Yandex />
            </TabPanel> */}
            <TabPanel>
               <Search />
               {/* <div className="data">
                  <h2>Ссылка на базу данных:</h2>
                  <input
                   ""width" 100%"
                     placeholder="Ссылка на базу данных"
                     onChange={(el) => setUrlData(el.target.value)}
                     value={urlData}
                  />
                  <div>
                     {setTimeout(() => `${baseData}` || 'Данные...', 3000)}
                  </div>
               </div> */}
            </TabPanel>
         </Tabs>
      </div>
   )
}

export default App
