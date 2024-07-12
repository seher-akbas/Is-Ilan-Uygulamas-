import React from 'react'
import { useNavigate } from "react-router-dom";
import { is_ilanlari_veriler } from './IlanKartları';


function IlanDetay() {
    const navigate = useNavigate();
    return (
        <div>
            Seher
            <button className='geri_butonu' onClick={() => navigate(-1)}>
                Geri
            </button>
        </div>
    )
}

export default IlanDetay