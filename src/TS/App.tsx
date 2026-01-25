//App page

//library imports
import { BrowserRouter } from "react-router-dom";
import { NavBar, ScrollToTop } from "./components/component";

//routing import
import Routing from "./routes";

function App() {


    return (
        <BrowserRouter>
            <ScrollToTop />
            <NavBar />
            <div className = "routing">
                <Routing />
            </div>
            
        </BrowserRouter>
    );
}




export default App;
