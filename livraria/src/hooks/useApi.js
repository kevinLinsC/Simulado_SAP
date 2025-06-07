// Url da api do arquivo .env
const url = import.meta.env.VITE_API_URL;

import { useState, useEffect, useContext } from "react";

export function useInserirUsuario() {
    const inserirUsuario = async (dados) => {
        const req = await fetch(`${url}/usuarios`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados)
        });

        const res = await req.json();
        console.log("Usuario cadastrado: ", res);

        return res;
    };

    return { inserirUsuario };
}

export function useInserirLivro() {
    const inserirLivro = async (dados) => {
        const req = await fetch(`${url}/livros`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados)
        });

        const res = await req.json();
        console.log("Livro cadastrado: ", res);

        return res;
    };

    return { inserirLivro };
}