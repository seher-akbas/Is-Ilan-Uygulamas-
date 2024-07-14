import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div>
            <p style={{ color: 'red' }}>Arama kriterlerinize uygun ilan bulunamadı.</p>
            <button className='geri_butonu' onClick={() => navigate(-1)}>Geri</button>
        </div>
    );
}

export default ErrorPage;
