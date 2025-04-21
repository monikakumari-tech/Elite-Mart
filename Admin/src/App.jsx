import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
       <>
   <Navbar/>
   <div>
    <Sidebar/>
   </div>
   </>
    </div>
  
  )
}
export default App