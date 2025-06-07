
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar/NavBar.jsx'
import { AuthProvider } from "./components/context/UserContext.jsx";

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <AuthProvider>
        <Container style={{ maxWidth: "100%", margin: "0", padding: "0" }}>
          <Outlet />
        </Container>
      </AuthProvider>
    </div>
      
    </>
  )
}

export default App
