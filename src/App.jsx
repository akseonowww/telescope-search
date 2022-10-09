/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-this-in-sfc */
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './App.scss'
import { BsSearch } from 'react-icons/bs'
import Search from './components/Search/Search'
import Data from './store/data'
import Sdamgia from './themes/sdamgia/Sdamgia'
import Telescope from './themes/telescope/Telescope'
import logoTS from './assets/image/logo.svg'

const App = () => {
   const { bookmarks } = Data

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
            <TabPanel>
               <Search />
            </TabPanel>
         </Tabs>
      </div>
   )
}

export default App
