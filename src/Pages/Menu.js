import React, { useEffect } from 'react';
import usePageTitle from '../Hooks/usePageTitle';

const Menu = () => {
    usePageTitle('Menu - Cannapa');

    useEffect(() => {
        const loadScript = () => {
            const script = document.createElement('script');
            script.src = "https://web-embedded-menu.leafly.com/loader.js";
            script.id = "leafly-embed-script";
            script.setAttribute('data-origin', 'https://web-embedded-menu.leafly.com');
            script.setAttribute('data-slug', 'cannapa');
            script.setAttribute('data-primary', '#FFCD00');
            script.setAttribute('data-secondary', '#2890DC');
            script.setAttribute('data-deals', '#CE300A');

            const wrapper = document.getElementById('leafly-embed-wrapper');
            if (wrapper) {
                wrapper.appendChild(script);
            }

            script.onerror = () => {
                console.error("Failed to load Leafly script. Please check the URL and CORS settings.");
            };
        };

        loadScript();

        return () => {
            const script = document.getElementById('leafly-embed-script');
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <div>
            <div id="leafly-embed-wrapper" style={{ height: "2000px" }}></div>
            <div className='border-t-2 pb-16 pt-8'>
                Copyright © 2024 Cannapa THCA Dispensary - All Rights Reserved.
            </div>
        </div>
    );
};

export default Menu;
