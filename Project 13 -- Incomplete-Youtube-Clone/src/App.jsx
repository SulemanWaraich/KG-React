import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import { useAuth } from "./contexts/AuthProvider"
function App() {
  const {loading, data} = useAuth();
  console.log(loading);
  console.log(data);
  return (
    <>
     <NavBar></NavBar>
     <SideBar></SideBar>
    </>
  )
}

export default App
