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
            {const itemIndex =state.items.findIndex( item => item.id === action.id)
            if(itemIndex === -1) return state;
            const removedItem = state.items[itemIndex];
            if (!removedItem) return state;
            const filteredItems = [...state.items.slice(0, itemIndex), ...state.items.slice(itemIndex+1)];
            const newTotal = state.total - removedItem.price;
            const newItemCount = state.itemCount -1;
            return {
                ...state,
                items: filteredItems,
                total: newTotal > 0 ? newTotal : 0,
                itemCount: newItemCount >0 ? newItemCount : 0,
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
