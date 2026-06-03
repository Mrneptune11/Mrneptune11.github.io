//App page

//react imports
import { HashRouter } from "react-router-dom";
import { useEffect } from "react";

//component imports
import { NavBar, ScrollToTop, SocialBar} from "./components/component";

//routing import
import Routing from "./routes";

//util imports 
import { chooseFavIcon } from "./utility/project_filter";

function App() {

    useEffect(() => {
        chooseFavIcon();
    }, []);

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
