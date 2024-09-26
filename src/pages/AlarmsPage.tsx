import React, { useEffect, useState } from 'react';

const WebSocketExample = () => {
    const [messages, setMessages] = useState<String[]>([]);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:7090/alarms');

        socket.onopen = () => {
            console.log('WebSocket connected');
        };

        socket.onmessage = (event) => {
            const message = event.data;
            console.log('WebSocket message:', message);
            setMessages(prevMessages => [...prevMessages, message]);
        };

        socket.onclose = () => {
            console.log('WebSocket disconnected');
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <h2>WebSocket Messages:</h2>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketExample;