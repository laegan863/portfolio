import Navbar from "./../components/navbar";
import Banner from "../components/home/banner";
import Language from "../components/home/language";
import About from "../components/home/about";
import Project from "../components/home/project";
const Home = () =>{
    return ( 
        <>
            <Navbar/>
            <Banner/>
            <About />
            <Language/>
            <Project/>
        </>
    );

}

export default Home;