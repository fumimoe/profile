import React from 'react'
import styles from './Profile.module.css';

import Typed from 'react-typed';

const Profile = () => {
 
    return (
        <>
            <div className={styles.App}>
          <p>
          <Typed className={styles.title}
                    strings={['自己紹介のページです。','現在Reactとtypescriptを学んでいます!',"ポートフォリオサイト作成中です！"]}
                    typeSpeed={100}
                />
           
          </p>
          
        </div>
      </>
   
    )
}

export default Profile
