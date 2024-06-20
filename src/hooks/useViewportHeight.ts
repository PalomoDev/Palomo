
import { useState, useEffect } from 'react';

const useViewportHeight = (): number => {
    const [vh, setVh] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            setVh(window.innerHeight * 0.01);
        };

        handleResize(); // Устанавливаем высоту при первой загрузке
        window.addEventListener('resize', handleResize); // Обновляем высоту при изменении размера окна

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return vh;
};

export default useViewportHeight;
