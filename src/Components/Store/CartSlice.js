import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: {},
  itemOrder: [],
  totalQuantity: 0,
  status: "idle", //to handle loading state
};

const sanitizeEmail = (email) => email.replace(/[^a-zA-Z0-9]/g, "");

export const updateCart = createAsyncThunk(
  "theCart/updateCart",
  async (_, { getState }) => {
    const rawEmail = localStorage.getItem("email"); // Get user email from localStorage
    const userEmail = sanitizeEmail(rawEmail || ""); // sanitize email
    if (!userEmail) return; //---

    const cart = getState().cart; // Getting updated cart state
    const userCartURL = `https://ecommercewebsite2-d7455-default-rtdb.firebaseio.com/cart/${userEmail}.json`;

    console.log("Update Cart URL: ", userCartURL); // Debugging line
    await axios.put(userCartURL, cart);
    return cart;
  }
);

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const rawEmail = localStorage.getItem("email"); // Get user email from localStorage
  const userEmail = sanitizeEmail(rawEmail || ""); // sanitize email
  if (!userEmail) return initialState; // Return initialState if there's no userEmail

  try {
    const userCartURL = `https://ecommercewebsite2-d7455-default-rtdb.firebaseio.com/cart/${userEmail}.json`;

    console.log("Fetch Cart URL: ", userCartURL); // Debugging line
    const response = await axios.get(userCartURL);
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
