import { createContext, useEffect, useReducer } from 'react';
import { prodReducer } from '../reducers/prodReducer'
export const ProdutoContext = createContext();

export const ProdutoProvider = ({ children }) => {

    const [produtos, dispatch] = useReducer(prodReducer, [], () => {
        const localData = localStorage.getItem('produtos');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('produtos', JSON.stringify(produtos))
    }, [produtos])

    const adicionar = (prod) => dispatch({type: 'ADICIONAR', payload: prod});
    const remover = (prod) => dispatch({type: 'REMOVER', payload: prod});

    return (
        <ProdutoContext.Provider value={{produtos, adicionar, remover}}>
            {children}
        </ProdutoContext.Provider>
    )
}
