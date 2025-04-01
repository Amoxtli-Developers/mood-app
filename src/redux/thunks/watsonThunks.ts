import { SendMessagePayload } from "@/interfaces/watsonInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const createWatsonSession = createAsyncThunk(
    "watson/createSession",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/watson/session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }

            const data = await response.json();
            return data;
        } catch (err: any) {
            return rejectWithValue(err.message || "Error creating session");
        }
    }
);

export const sendMessageToWatson = createAsyncThunk(
    "watson/sendMessage",
    async ({ message, sessionId }: SendMessagePayload, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/watson", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message, sessionId }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }

            const data = await response.json();
            return data;
        } catch (err: any) {
            return rejectWithValue(err.message || "Error");
        }
    }
);
