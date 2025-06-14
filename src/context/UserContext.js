// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from "react";
import api from "../api/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await api.get("/users");
                setUser(response.data.users[0]); // ou o usuário logado
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }
        }

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
