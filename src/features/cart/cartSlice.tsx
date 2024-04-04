import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    cartNumber: number
}

const getInitialCartNumber = (): number => {
    const storedLength = localStorage.getItem('cartLength');
    if (storedLength) {
        return parseInt(storedLength);
    }
    return 0;
};

const initialState: CartState = {
    cartNumber: getInitialCartNumber()
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state) => {
            state.cartNumber += 1;
            localStorage.setItem('cartLength', state.cartNumber.toString());
        },
    }
});

export const { increment } = cartSlice.actions;

export default cartSlice.reducer;
