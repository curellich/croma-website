import Navbar from "./components/Navbar";
import TopWrap from "./layouts/top-wrap";
import About from "./layouts/about";
import Home from "./layouts/home";
import Appointment from "./layouts/appointment";
import Services from "./layouts/services";
import Blog from "./layouts/blog";
import Contact from "./layouts/contact";
import Box from "@mui/material/Box";
import Footer from "./layouts/footer";


function App() {

    return (
        <Box>
            <TopWrap/>
            <Navbar/>
            <Home/>
            <About/>
            <Appointment/>
            <Services/>
            <Blog/>
            <Contact/>
            <Footer/>
        </Box>


    );
}

export default App;
