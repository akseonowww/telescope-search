/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-this-in-sfc */
import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import styles from './App.module.scss'
import Search from './components/Search/Search'
import Sdamgia from './Themes/Sdamgia/Sdamgia'
import Telescope from './Themes/Telescope/Telescope'
import Yandex from './Themes/Yandex/Yandex'
// import dataTS from './store/data'
// import data from './store/data'

const App = () => {
   const baseURL = 'https://jsonblob.com/api/jsonBlob/962331985410539520' // 30 days (9.04-...)
   // const [urlData, setUrlData] = useState(baseURL)

   // let baseData = 0

   // setTimeout(() => {
   //    baseData = dataTS(urlData)
   //    console.log(777, baseData)
   // }, 3000)

   return (
      <div className="App">
         <Tabs forceRenderTabPanel defaultIndex={0}>
            <TabList>
               <Tab className={styles.Tab}>
                  <img
                     src="https://telescope-search.vercel.app/static/media/logo.36c9d5d4d5e780cf00a7c3ef979205f8.svg"
                     alt="Лого"
                  />
                  <span>Телескоп</span>
               </Tab>
               <Tab>
                  <img
                     src="https://ege.sdamgia.ru/img/headers/logo.svg"
                     alt="Лого"
                  />
                  <span>СДАМ.ГИА</span>
               </Tab>
               <Tab className={styles.Tab}>
                  <img
                     src="https://uc6f299b1f06d6a82aa9563cfd60.previews.dropboxusercontent.com/p/thumb/ABfcONBgIKWwWsq9x4kF5MyVLrPIi2hn6y8m9vGyYrNX0EFw6x-U-PEg3S0RkJapyGo0eR9sibclQR5fKeeQxPwgVvoTJVGirG6fOfPN744o9IoE4-sP-QmirJ_IjlM1DD_4Ii2Kvva--UBK0nSph_fDmf49LW8_4QBrsg5bblYQBHUO8klalikMX8raKjPdaqdexnvXNnnkU8_R4BzvNkbw_1iQNgV3uH-jcAD9tOCIuC52Hy6HkCpepnrJSCEYRLCbOGIe107cjxLp8sRMsY17kqFcSULTkjzO7N0cljll0czcy-xdgHUyx15G7jSKLY073fZ9KrJ4jFmfQ0hS74_oGOMwRZEsdWhntORWHFRBkwfOjXoPFreOz2QR244-DFdrU_Hd7kl4WyuVBQMAFT61hnzMUJsp89XeHF4oWQcH2A/p.png"
                     alt="Лого"
                  />
                  <span>Яндекс</span>
               </Tab>
               <Tab className={styles.Tab}>
                  <img
                     src="https://mikroklimat.su/catalog/view/theme/mikroklimat/mobile/search.png"
                     alt="Лого"
                  />
                  <span>Дефолтный</span>
               </Tab>
            </TabList>

            <TabPanel>
               <Telescope />
            </TabPanel>
            <TabPanel>
               <Sdamgia />
            </TabPanel>
            <TabPanel>
               <Yandex />
            </TabPanel>
            <TabPanel>
               <Search />
               {/* <div className={styles.data}>
                  <h2>Ссылка на базу данных:</h2>
                  <input
                     styles="width: 100%"
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
