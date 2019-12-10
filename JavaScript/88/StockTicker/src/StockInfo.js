import React from 'react';
//import './StockInfo.css';

export default props => {
    let timestamp = new Date(props.stock.last_time);
    return (
        <div>
            <div className="Stock">
                <h1>Price: {props.stock.last_price} Last Updated: {timestamp.toLocaleString()}</h1>
            </div>
        </div>
    );
}