/* eslint-disable react/no-danger */
import React from 'react'
import { Tab, TabPanel, TabList, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Data from '../../../store/data'

import './Group.scss'

const Gropup = ({ groups = Data.groups }) => {
   const classComponent = 'Group'

   // const [statusBtn, setStatusBtn] = useState(false)

   const handleClick = (id) => {}
   console.log(groups.name, groups.group[0].name)

   return (
      <div className={classComponent}>
         {/* <div className={`${classComponent}-Menu`}> */}
         <Tabs forceRenderTabPanel defaultIndex={0}>
            <TabList>
               <Tab>
                  <span>{groups.name}</span>
               </Tab>
               {groups.group.map((el) => (
                  <Tab key={el.id}>
                     <span>{el.name}</span>
                  </Tab>
               ))}
            </TabList>

            <TabPanel>0{/* <span>{el.name}</span> */}</TabPanel>
            {groups.group.map((el) => (
               <TabPanel key={el.id}>
                  <span>{el.name}</span>
                  <span>{el.content}</span>
               </TabPanel>
            ))}
         </Tabs>
         {/* // </div> */}
      </div>
   )
}

export default Gropup
