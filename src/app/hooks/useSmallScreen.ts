import React from 'react';
const SM_BREAK = 640;  // tamaño sm

export function useSmallScreen() {
    const [isSmallScreen, setIsSmallScreen] = React.useState<boolean | undefined>(undefined);

    React.useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${SM_BREAK - 1}px)`);  // Media query para pantallas menores que 640px
        const onChange = () => {
            setIsSmallScreen(window.innerWidth < SM_BREAK);  // Actualiza el estado cuando cambia el tamaño de la pantalla
        };
        mql.addEventListener("change", onChange);
        setIsSmallScreen(window.innerWidth < SM_BREAK);  // Verifica el tamaño de pantalla al inicio

        return () => mql.removeEventListener("change", onChange);  // Limpieza del event listener
    }, []);
    return !!isSmallScreen;  // Devuelve true si es una pantalla pequeña, de lo contrario false
}
