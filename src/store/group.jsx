import React from 'react'
import Latex from 'react-latex-next'

const group = () => {
   
   const math = () => (
         <Latex>
            ц434243
            
            {/* <div className="Article-Content__Text">
               <div className="Article-Content__Text-Content">
                  <div className="Article-Content__Text-Content__Item">
                     <h2 id="stepeni">Степени</h2>
                     <ol>
                        <li>$^{n} \\times a^{m}=a^{n + m}$</li>
                        <li>$a^{n} \\div a^{m}=a^{n - m}$</li>
                        <li>$(a^{n})^{m}=a^{n \\times m} $</li>
                        <li>$\\frac{a ^ { n }}{b ^ { n }}=(\\frac{a}{b})^{n}$</li>
                        <li>$a^{0}=1$</li>
                        <li>$a^{-n}=\\frac{1}{a ^ { n }}$</li>
                        <li>$(\\frac{a}{b})^{-n}=(\\frac{b}{a})^{n}$</li>
                     </ol>
                  </div>
               </div>
            </div> */}
         </Latex>
      )

   return [math]
}

export default group