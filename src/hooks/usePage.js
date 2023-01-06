import { useState } from "react"

/**
 * Custom Hook para manejo de páginas a consultar en la API.
 * 
 * @return {page}  El número de página actual.
 * @return {increasePage}  Función para incrementar una página.
 * @return {decrementPage} Función para reducir una página. 
 * @return {resetPage} Función para resetear la página a 1. 
 */
export const usePage = () => {

    const [page, setPage] = useState(1);

    // Sumar en una a la págin actual con restricción a 100 páginas
    const increasePage = () => {
        if (page < 100) setPage(page+1);
    }

    // Restar en una a la págin actual con restricción no ser menor a 1
    const decrementPage = () => {
        if(page > 1) setPage(page-1);
    };

    // Resetear a la págin de inicio
    const resetPage = () => setPage(1);
    
    return {page, increasePage, decrementPage, resetPage}
}