import React from 'react'
import styles from './Top.module.css';

import Typed from 'react-typed';

const Top = () => {
 
    return (
        <>
            <div className={styles.App}>
          <p>
          <Typed className={styles.title}
                    strings={['自己紹介のページです。','現在ReactとTypeScriptを学んでいます!',"ポートフォリオサイト作成中です！"]}
                    typeSpeed={100}
                />
           
          </p>
          
        </div>
      </>
   
    )
}

export default Top
