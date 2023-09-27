import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL =
  "https://ecommercewebsite2-d7455-default-rtdb.firebaseio.com/cart/userCart.json";

const initialState = {
  items: {},
  itemOrder: [],
  totalQuantity: 0,
  status: "idle", //to handle loading state
};

export const updateCart = createAsyncThunk(
  "theCart/updateCart",
  async (_, { getState }) => {
    const cart = getState().cart; // Get the updated cart state here
    await axios.put(URL, cart);
    return cart;
  }
);

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const response = await axios.get(URL);
    return response.data ? response.data : initialState;
  } catch (error) {
    console.error("Fetch cart failed", error);
    return initialState; // return initialState if there is an error fetching the cart
  }
});

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
    clearCart(state) {
      state.items = {};
      state.itemOrder = [];
      state.totalQuantity = 0;
    },
  },

  extraReducers: (builder) => {
    // For updateCart
    builder.addCase(updateCart.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.status = "idle";
    });

    builder.addCase(updateCart.rejected, (state, action) => {
      state.status = "failed";
    });

    // For fetchCart
    builder.addCase(fetchCart.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload.items || {};
      state.itemOrder = action.payload.itemOrder || [];
      state.totalQuantity = action.payload.totalQuantity || 0;
      state.status = "idle";
    });

    builder.addCase(fetchCart.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
