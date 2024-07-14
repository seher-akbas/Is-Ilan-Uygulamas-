import React from 'react';
import IlanKartlari from './IlanKartları';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { resetFilter } from '../features/filterSlice';

function IlanList() {
    const filteredItems = useSelector(state => state.filter.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleReset = () => {
        dispatch(resetFilter());
        navigate('/');
    };

    return (
        <div className='ilan-listesi'>
            {filteredItems.length > 0 ? (
                filteredItems.map((ilan, index) => (
                    <IlanKartlari key={index} ilan={ilan} />
                ))
            ) : (
                <div>
                    <p style={{ color: 'red' }}>Arama kriterlerinize uygun ilan bulunamadı.</p>
                    <button className='geri_butonu' onClick={handleReset}>Geri</button>
                </div>
            )}
        </div>
    );
};

export default IlanList;
