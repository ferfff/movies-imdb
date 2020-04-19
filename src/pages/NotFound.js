import React from 'react';
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export const NotFound = () => (
    <div>
        <h1 style={{ color: '#73D', fontSize: 50 }}>404!</h1>
        <h2 className="subtitle">Page not found</h2>
        <ButtonBackToHome />
    </div>
)
