import { ArrowDownwardRounded, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './FeauturedInfo.css';

const FeauturedInfo = () => {
     return (
          <div className="futuredInfo">
          <div className="futuredInfoItem">
               <span className="futuredInfoTitle">Revanue</span>
               <div className="futureInfoMoneyConyainer">
               <span className="headMoney">$ 2,450</span>
               <span className="lessMoney"> -11.14 <ArrowDownwardRounded className='infoArrow negative' /> </span>
               </div>
               <span className="futureMonthTitle"> Compared to last month</span>
          </div>   
          <div className="futuredInfoItem">
               <span className="futuredInfoTitle">Sales</span>
               <div className="futureInfoMoneyConyainer">
               <span className="headMoney">$ 3,550</span>
               <span className="lessMoney"> 10.20 <ArrowUpward  className='infoArrow positive' /> </span>
               </div>
               <span className="futureMonthTitle"> Compared to last month</span>
          </div>   
          <div className="futuredInfoItem">
               <span className="futuredInfoTitle">Cost</span>
               <div className="futureInfoMoneyConyainer">
               <span className="headMoney">$ 1,250</span>
               <span className="lessMoney"> -06.13 <ArrowDownwardRounded className='infoArrow negative' /> </span>
               </div>
               <span className="futureMonthTitle"> Compared to last month</span>
          </div>   
          </div>
     );
};

export default FeauturedInfo;