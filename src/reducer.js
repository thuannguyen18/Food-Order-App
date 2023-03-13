const initState = {
    meals: [],
    carts: [],
    loading: false,
    submitting: false,
    modal: false,
    form: false,
    alert: false,
    total: 0,
    amount: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { ...state, modal: true };
        case 'CLOSE_MODAL':
            return { ...state, modal: false, alert: false };
        case 'OPEN_FORM':
            return { ...state, form: true };
        case 'CLOSE_FORM':
            return { ...state, form: false };
        case 'LOADING':
            return { ...state, loading: true };
        case 'DISPLAY_FOODS':
            return { ...state, loading: false, meals: action.payload };
        case 'DISPLAY_ERROR':
            return { ...state, loading: false };
        case 'ADD_CART':
            if (action.payload.count <= 0 || !Number.isInteger(action.payload.count)) return state;
            const newCarts = state.carts.reduce((tempCarts, cartItem) => {
                if (cartItem.name === action.payload.name) {
                    const newCartItem = { ...action.payload, count: action.payload.count + cartItem.count };
                    const newTempCarts = tempCarts.filter((cartItem) => cartItem.name !== action.payload.name);
                    return [...newTempCarts, newCartItem];
                }
                return [...tempCarts, cartItem];
            }, [action.payload]);
            return { ...state, carts: newCarts };
        case 'GET_TOTALS':
            let { total, amount } = state.carts.reduce((cartTotal, cartItem) => {
                const { price, count } = cartItem;
                const total = price * count;
                cartTotal.total += total;
                cartTotal.amount += count;
                return cartTotal;
            }, { total: 0, amount: 0 });
            total = parseFloat(total.toFixed(2));
            return { ...state, total, amount };
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
        case 'SUBMIT':
            return { ...state, submitting: true }
        case 'END_SUBMIT':
            return {
                ...state,
                form: false,
                submitting: false,
                modal: false,
                alert: true,
                carts: [],
                amount: 0
            };
        default: throw Error('Unknown action.');
    };
};


export { initState };
export default reducer;