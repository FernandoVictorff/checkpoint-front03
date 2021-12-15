export const prodReducer = (state, action) => {
    switch (action.type) {
      case 'ADICIONAR':
        const checkIfProdutAlreadyExists = state.filter(produto => (
          produto.id === action.payload.id
        ));
        if (!checkIfProdutAlreadyExists.length) {
          return [...state, action.payload];
        }
        return state;
      case 'REMOVER':
        return state.filter(produto => (
            produto.id !== action.payload.id));     
      default:
        return state;
    }
  }