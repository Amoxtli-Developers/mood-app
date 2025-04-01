"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatGPTDesign, { Message } from "@/components/ChatGPTDesign";
import { AppDispatch, RootState } from "@/redux/store";
import { sendMessageToWatson, createWatsonSession } from "@/redux/thunks/watsonThunks";

export default function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const { sessionId, data: watsonData } = useSelector(
        (state: RootState) => state.watson
    );

    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState("");

    // Al montar el componente, se crea la sesión si aún no existe.
    useEffect(() => {
        if (!sessionId) {
            dispatch(createWatsonSession());
        }
    }, [sessionId, dispatch]);

    // Cuando en el estado de Watson llega una nueva respuesta, se actualiza la lista de mensajes.
    useEffect(() => {
        if (watsonData) {
            // Se extrae el texto de respuesta según la estructura de la respuesta de Watson.
            const assistantText =
                watsonData?.output?.generic?.[0]?.text ||
                "No se recibió respuesta.";
            const newAssistantMessage: Message = {
                role: "assistant",
                content: assistantText,
            };
            setMessages((prev) => [...prev, newAssistantMessage]);
        }
    }, [watsonData]);

    // Al enviar un mensaje, se agrega el mensaje del usuario y se dispara el thunk.
    const handleSendMessage = (message: string) => {
        const newUserMessage: Message = { role: "user", content: message };
        setMessages((prev) => [...prev, newUserMessage]);

        if (sessionId) {
            dispatch(sendMessageToWatson({ message, sessionId }));
        }
        setUserInput("");
    };

    return (
        <>
            <ChatGPTDesign
                userInput={userInput}
                setUserInput={setUserInput}
                messages={messages}
                setMessages={setMessages}
                onSendMessage={handleSendMessage}
            />
        </>
    );
}
