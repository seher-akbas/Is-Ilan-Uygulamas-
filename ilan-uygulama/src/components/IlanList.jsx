import React from 'react'
import IlanKartlari from './IlanKartları'
import { useSelector } from 'react-redux';

function IlanList() {
    const filteredItems = useSelector(state => state.filter.items);
    return (
        <div className='ilan-listesi'>
            {filteredItems.map((ilan, index) => (
                <IlanKartlari key={index} ilan={ilan} />
            ))}
        </div>
    );
};

export default IlanList;