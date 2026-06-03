//App page

//react imports
import { BrowserRouter } from "react-router-dom";
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
