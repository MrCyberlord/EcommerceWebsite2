import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  itemOrder: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items[newItem.id];

      if (!existingItem) {
        state.items[newItem.id] = { ...newItem, quantity: 1 };
        state.itemOrder.push(newItem.id); // Add to itemOrder array to maintain order
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity++;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items[id];
      if (existingItem) {
        existingItem.quantity--;
        state.totalQuantity--;
        if (existingItem.quantity === 0) {
          delete state.items[id];
          // Remove id from itemOrder array when the quantity reaches zero
          const index = state.itemOrder.indexOf(id);
          if (index > -1) {
            state.itemOrder.splice(index, 1);
          }
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
