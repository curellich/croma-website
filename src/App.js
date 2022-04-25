import React, {useRef} from 'react';
import Navbar from "./components/Navbar";
import TopWrap from "./layouts/top-wrap";
import About from "./layouts/about";
import Home from "./layouts/home";
import Services from "./layouts/services";
import Contact from "./layouts/contact";
import Footer from "./layouts/footer";
import Whatsapp from "./components/Whatsapp";
import Box from "@mui/material/Box";


function App() {

    return (
            <Box>
                <TopWrap/>
                <Navbar/>
                <Home/>
                <About/>
                <Services/>
                <Contact/>
                <Footer/>
                <Whatsapp/>
            </Box>

    );
}

export default App;
