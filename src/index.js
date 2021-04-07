import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';

ReactDOM.render(
  <>
    <h1 className="heading_style">
      List of top 5 Web Series 
    </h1>
    { Sdata.map((val) => {
      return (<Card imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />)
    })}

  </>
  , document.getElementById("root")
);