import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sendMessageToWatson, createWatsonSession } from "@/redux/thunks/watsonThunks";

export interface WatsonState {
    loading: boolean;
    data: any; // Replace with a more specific type if available
    error: string | null;
    sessionId: string | null;
}

const initialState: WatsonState = {
    loading: false,
    data: null,
    error: null,
    sessionId: null,
};

const watsonSlice = createSlice({
    name: "watson",
    initialState,
    reducers: {
        // Synchronous reducer to reset state if needed
        resetWatsonState: (state) => {
            state.loading = false;
            state.data = null;
            state.error = null;
            state.sessionId = null;
        },
    },
    extraReducers: (builder) => {
        // Handle session creation thunk
        builder
            .addCase(createWatsonSession.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                createWatsonSession.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.sessionId = action.payload.session_id;
                }
            )
            .addCase(createWatsonSession.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    (action.payload as string) || "Error creating session";
            })
            // Handle sendMessageToWatson thunk
            .addCase(sendMessageToWatson.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                sendMessageToWatson.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.data = action.payload;
                }
            )
            .addCase(sendMessageToWatson.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    (action.payload as string) || "Something went wrong";
            });
    },
});

export const { resetWatsonState } = watsonSlice.actions;
export default watsonSlice.reducer;
