/* eslint-disable react/no-danger */
/* eslint-disable react/no-unknown-property */
import React from 'react'
import './Bookmarks.scss'

const Bookmarks = ({
   value = 'value',
   title = 'Title',
   link = 'link',
   icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Icons8_flat_bookmark.svg/1200px-Icons8_flat_bookmark.svg.png',
}) => {
   const codeStyles = {
      Icon: {
         background: icon,
      },
   }

   const classComponent = 'Bookmarks'

   return (
      <div>
         <a href={`https://${link}`} className={classComponent}>
            <div className={`${classComponent}__icon`}>
               <div
                  className={`${classComponent}__icon-container`}
                  styles={codeStyles.Icon}
               >
                  <img
                     className={`${classComponent}__icon-img`}
                     src={icon}
                     alt={`icon ${value}`}
                  />
               </div>
            </div>
            <div className={`${classComponent}__text`}>
               <span dangerouslySetInnerHTML={{ __html: title }} />
               <span className={`${classComponent}__text-link`}>
                  {link}
               </span>
            </div>
         </a>
      </div>
   )
}

export default Bookmarks
