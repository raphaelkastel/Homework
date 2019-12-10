import React from 'react';
//import './StockInfo.css';

export default props => {
    return (
        <div>
            <div className="Comp">
                <h1 className="title">{props.comp.ticker} - {props.comp.legal_name}</h1>
                <div className="dec">{props.comp.short_description}</div>
            </div>
        </div>
    );
}