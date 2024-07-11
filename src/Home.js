import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar";
import BasicTabs from "./CustomTabPanel";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import Navigation from "./Navigation";

const Home = () => {
    const navigate = useNavigate();

    const handleConfigure = () => {
        navigate('/Dummy')
    }
    return (
        <>
           <BasicTabs />
        </>
    )
}

export default Home