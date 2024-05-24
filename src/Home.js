import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"

const Home = () => {
    const navigate = useNavigate();

    const handleConfigure = () => {
        navigate('/Dummy')
    }
    return (
        <>
           <h1>This is Home</h1>
           <Navbar /> <br />
           <Header /> <br /> 
           <button onClick={handleConfigure}>CONFIGURE</button>
        </>
    )
}

export default Home