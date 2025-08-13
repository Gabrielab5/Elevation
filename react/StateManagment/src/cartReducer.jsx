export default function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            { const newItems = [...state.items, {...action.product, id: Date.now()}]
            return {
                ...state,
                items: newItems,
                total: state.total + action.product.price,
                itemCount: state.itemCount + 1,
            }; }
        case 'REMOVE_ITEM':
            { const removedItem = state.items.find(item => item.id === action.id);
            if (!removedItem) return state;
            const filteredItems = state.items.filter(item => item.id !== action.id);
            return {
                ...state,
                items: filteredItems,
                total: state.total - removedItem.price >=0 ? state.total - removedItem.price : 0,
                itemCount: state.itemCount - 1 >= 0 ? state.itemCount - 1 : 0,
            }; }
        case 'CLEAR_CART': {
            return {
                items: [],
                total: 0,
                itemCount: 0,
            };
        }
        default:
            return state;
    }
    
}
