//App page

//library imports
import { HashRouter } from "react-router-dom";
import { NavBar, ScrollToTop, SocialBar} from "./components/component";

//routing import
import Routing from "./routes";

function App() {


    return (
        <HashRouter>
            <ScrollToTop />
            <NavBar />
            <div className = "routing">
                <Routing />
            </div>
            <SocialBar/>
            
        </HashRouter>
    );
}




export default App;
