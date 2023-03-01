function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true };
        case 'DISPLAY_FOODS':
            return { ...state, loading: false, meals: action.payload };
        case 'ADD_CART':
            if (action.payload.count < 1) return state;
            return { ...state, carts: [...state.carts, action.payload], amount: state.amount + action.payload.count };
        case 'GET_TOTALS':
            const { total, amount } = state.carts.reduce((cartTotal, cartItem) => {
                const { price, count } = cartItem;
                const total = price * count;
                cartTotal.total += total;
                cartTotal.amount += count;
                return cartTotal;
            }, { total: 0, amount: 0 });
            return { ...state, total, count: amount };
        case 'INCREASE':
            const inCart = state.carts.map(cartItem => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, count: cartItem.count + 1 };
                }
                return cartItem;
            });
            return { ...state, carts: inCart };
        case 'DECREASE':
            const deCart = state.carts.map(cartItem => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, count: cartItem.count - 1 };
                }
                return cartItem;
            }).filter(cartItem => cartItem.count !== 0);
            return { ...state, carts: deCart };
        default: throw Error('Unknown action.');
    }

}

export default reducer;