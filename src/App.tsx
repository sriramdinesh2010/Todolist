import { Box } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

// import TodoListApp from "./pages/TodoList";

function App() {
  return (
    <>
      <NavBar />
      <Box component="main">
        <Home />
      </Box>
      <Footer />
    </>
  );
}

export default App;
