import React from 'react';
import './SideBar.css';
import { Home, Timeline, TrendingUp, PersonOutline, Storefront, AttachMoney, BarChart, MailOutline,  DynamicFeed, ChatBubbleOutline, WorkOutline, Report, AccountTree } from '@material-ui/icons';

const SideBar = () => {
     return (
          <div className='sidebar'>
             <div className="sidebarWrapper">
                  <div className="sidearMenu">
                       <h3 className="sidebarTitle">Dashboard</h3>
                       <ul className="sidebarList">
                            <li className="sidebarListItem active">
                             <Home className="linkIcon"/>  
                             Home 
                            </li>
                            <li className="sidebarListItem">
                             <Timeline className="linkIcon" />  
                             Analytics 
                            </li>
                            <li className="sidebarListItem">
                             <TrendingUp className="linkIcon"/>  
                             Sales 
                            </li>
                       </ul>
                  </div>    
                  <div className="sidearMenu">
                       <h3 className="sidebarTitle">Quick Meun</h3>
                       <ul className="sidebarList">
                            <li className="sidebarListItem ">
                             <PersonOutline className="linkIcon"/>  
                             Users 
                            </li>
                            <li className="sidebarListItem">
                             <Storefront className="linkIcon" />  
                             Products 
                            </li>
                            <li className="sidebarListItem">
                             <AttachMoney className="linkIcon"/>  
                             Transaction
                            </li>
                            <li className="sidebarListItem">
                             <BarChart className="linkIcon"/>  
                             Reports
                            </li>
                       </ul>
                  </div>
                  <div className="sidearMenu">
                       <h3 className="sidebarTitle">Notification</h3>
                       <ul className="sidebarList">
                            <li className="sidebarListItem ">
                             <MailOutline className="linkIcon"/>  
                             Mail 
                            </li>
                            <li className="sidebarListItem">
                             <DynamicFeed  className="linkIcon" />  
                             Feedback 
                            </li>
                            <li className="sidebarListItem">
                             <ChatBubbleOutline className="linkIcon"/>  
                             Message
                            </li>
                       </ul>
                  </div>
                  <div className="sidearMenu">
                       <h3 className="sidebarTitle">Staff</h3>
                       <ul className="sidebarList">
                            <li className="sidebarListItem ">
                             <WorkOutline className="linkIcon"/>  
                             Manage
                            </li>
                            <li className="sidebarListItem">
                             <AccountTree className="linkIcon" />  
                             Branch 
                            </li>
                            <li className="sidebarListItem">
                             <Report className="linkIcon"/>  
                             Reports
                            </li>
                       </ul>
                  </div>                                
                                                  
             </div>
          </div>
     );
};

export default SideBar;