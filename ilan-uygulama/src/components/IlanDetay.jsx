import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";


function IlanDetay() {
    const navigate = useNavigate();
    const location = useLocation();
    const { ilan } = location.state || {};
    return (
        <div>
            <div>
                <h2>İlan Detayları</h2>
                {ilan ? (
                    <div>
                        <div className='ilan-baslik'>{ilan.job_title}</div>
                        <img src={ilan.job_image_url} alt={ilan.job_title}></img>
                        <div className='ilan-aciklama'>{ilan.job_description}</div>
                        <div className='ilan-lokasyon'>Konum: {ilan.location}</div>
                        <div className='ilan-kategori'>Kategori: {ilan.category}</div>
                    </div>
                ) : (
                    <p>İlan bilgisi bulunamadı.</p>
                )}
            </div>
            <button className='geri_butonu' onClick={() => navigate(-1)}>
                Geri
            </button>
        </div>
    )
}

export default IlanDetay