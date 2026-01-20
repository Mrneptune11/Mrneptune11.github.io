import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/component";
import Routing from "./routes";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <div className = "routing">
                <Routing />
            </div>
            
        </BrowserRouter>
    );
}

export default App;
