// Cria a lista de rotas com o Router Dom.
import { createBrowserRouter } from "react-router-dom"

// Importação das telas.
import App from "./App.jsx"
import PaginaErro from "./pages/PaginaErro.jsx"
import CadastroUsuario from "./pages/cadastro-usuario/CadastroUsuario.jsx"
import CadastroLivro from "./pages/cadastro-livros/CadastroLivro.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PaginaErro />,
        children: [
            {
                path:"/",
                element: <CadastroUsuario />
            },
            {
                path:"/Cadastro-usuario",
                element: <CadastroUsuario />
            },
            {
                path: "/Cadastro-livro",
                element: <CadastroLivro />
            }
        ]
    }
])

export default router;