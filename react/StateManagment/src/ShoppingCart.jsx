import { useReducer } from "react";
import cartReducer from './cartReducer'
import { ITEM_DATA } from './items';
import Item from './Item';

export default function ShoppingCart() {
    const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  });

  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const clearCart = () => {
    dispatch( { type: 'CLEAR_CART'});
  }

  return (
   <div>
      <h2>Shopping Cart ({cartState.itemCount} items) - Total: ${cartState.total}</h2>
      <div>
        <h1 className="header">My Magic Shop</h1>
        <div className="item-list">
          {ITEM_DATA.map((item) => (
            <div key={item.id}>
              <Item 
                name={item.name} 
                price={item.price} 
                image={item.image} 
              />
              <button onClick={() => addItem(item)}>Add</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <button onClick ={ () => clearCart()}> Clear Cart </button>
      </div>
    </div>
  );
}