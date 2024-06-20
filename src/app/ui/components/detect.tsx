'use client'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { BrowserView, MobileView, isMobileOnly, isMobile } from 'react-device-detect';

interface BrowserInfo {
    userAgent: string;
    screenWidth: number;
    screenHeight: number;
}

const DynamicDeviceInfo = () => {
    const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // При монтировании компонента на клиенте получаем информацию о браузере
            setBrowserInfo({
                userAgent: navigator.userAgent,
                screenWidth: window.innerWidth,
                screenHeight: window.innerHeight,
            });
        }
    }, []);
    console.log(`КАКОЕ устройство ${isMobileOnly}`);
    return (
        <div>
            <h1>Информация об устройстве</h1>
            {/* Проверяем тип устройства */}
            <p>Тип устройства: {isMobile ? 'Мобильное устройство' : 'Десктоп'}</p>
            {/* Показываем информацию в зависимости от типа устройства */}
            <BrowserView>
                <p>Это десктопная версия.</p>
            </BrowserView>
            <MobileView>
                <p>Это мобильная версия.</p>
            </MobileView>
            {/* Дополнительная информация о браузере */}
            {browserInfo && (
                <div>
                    <p>Браузер: {browserInfo.userAgent}</p>
                    <p>
                        Разрешение экрана: {browserInfo.screenWidth}x{browserInfo.screenHeight}
                    </p>
                </div>
            )}
        </div>
    );
};

const WithCustomLoading = dynamic(() => Promise.resolve(DynamicDeviceInfo), {
    loading: () => <p>Loading...</p>,
    ssr: false,
});

const Detect: React.FC = () => {
    return (
        <div>
            {/* The loading component will be rendered while <WithCustomLoading /> is loading */}
            <WithCustomLoading />
        </div>
    );
};

export default Detect;
