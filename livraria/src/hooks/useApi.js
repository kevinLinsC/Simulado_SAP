// Url da api do arquivo .env
const url = import.meta.env.VITE_API_URL;

import { useState, useEffect, useContext, useSyncExternalStore } from "react";

export function useListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const req = await fetch(`${url}/usuarios`);
                const res = await req.json();
                setUsuarios(res);
            }
            catch(erro) {
                console.log(erro);
            }
        }
        fetchData();
    },[])

    return usuarios
}

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

export function useDeletaLivro() {
    const deletarLivro = async(idLivro) => {
        const req = await fetch(`${url}/Livros/${idLivro}`, {
            method: "DELETE",
        });

        const res = req.json();
        return res;
    };

    return { deletarLivro };
}

export function useListaLivros() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const req = await fetch(`${url}/livros`);
                const res = await req.json();
                setLivros(res);
            }
            catch (erro) {
                console.log(erro);
            }
        }

        fetchData();
    }, [])

    return livros;
}
