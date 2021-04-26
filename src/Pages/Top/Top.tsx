import React from 'react'
import styles from './Top.module.css';

import Typed from 'react-typed';

const Top = () => {
 
    return (
        <>
            <div className={styles.App}>
          <p>
          <Typed className={styles.title}
                    strings={['Thank you for watching this Profile website',"I'm studying React and TypeScript",]}
                    typeSpeed={100}
                    stopped={false}
                />
           
          </p>
          
        </div>
      </>
   
    )
}

export default Top
