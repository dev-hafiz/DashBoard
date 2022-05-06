import React from 'react';
import './TopBar.css';

import { Language, Notifications, Settings } from '@material-ui/icons';
const TopBar = () => {
     return (
          <div className="topHeader">
               <div className="topHeaderWrapper">
                    <div className="leftHeader">
                    <span className='topLogo'>Admin Panel</span>
                    </div>
                    <div className="rightHeader">
                    <div className="rightIconContainer">
                    <Notifications className="MuIconDevelop" />
                    <span className="notificatioBadge">2</span>
                    </div>
                    <div className="rightIconContainer">
                    <Language className="MuIconDevelop" />
                    <span className="notificatioBadge">2</span>
                    </div>
                    <div className="rightIconContainer">
                    <Settings className="MuIconDevelop" />
                   </div>
                    <div className="rightIconContainer">
                    <img src="https://scontent.fdac68-1.fna.fbcdn.net/v/t39.30808-1/228798089_1002292057190965_1413384752386536836_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEfjh8UnlbrQ4k_kn2V6Jhq_CuLdk8A9Un8K4t2TwD1SQrUvG_li1Lus6ai72KCmoMJKj3hXQ6y1f3QWNRU5a0K&_nc_ohc=XM0txB1nQ6IAX-zW1BC&_nc_ht=scontent.fdac68-1.fna&oh=00_AT_LOrmU1J6xBwLrM14xMl4ER5egZAJdywhqNp0-2sKyZw&oe=621B67E9"  className='avatar' alt="" />
                    </div>
                    </div>
               </div>
          </div>
     );
};

export default TopBar;