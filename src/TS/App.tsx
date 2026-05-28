//App page

//library imports
import { BrowserRouter } from "react-router-dom";
import { NavBar, ScrollToTop, SocialBar} from "./components/component";

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
            <SocialBar/>
            
        </BrowserRouter>
    );
}




export default App;
