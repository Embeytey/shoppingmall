import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';

function SubTotatal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>suptotal (0 items):<strong>0</strong></p> 
                    <small className="subtotal__gift">
                     <input type="checkbox" /> This order contains a gift
                    </small>
                  </>
                )}
                decimalScale={2}
                value={0} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                          
            
            />
        </div>
    )
}

export default SubTotatal
