import { createContext, useState, useEffect } from "react";

// Cria o contexto.
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuarioId, setUsuarioId] = useState("");
    
    useEffect(() => {
        const id = localStorage.getItem("id") || "Visitante";

        setUsuarioId(id);
    }, [])
    
    // Se fizer cadastro salva as informações.
    const login = (dados) => {
        localStorage.setItem("id", dados.id);
        setUsuarioId(dados.id);
    };

    return (
        <AuthContext.Provider value={{ usuarioId, login }}>
            {children}
        </AuthContext.Provider>
    );
};