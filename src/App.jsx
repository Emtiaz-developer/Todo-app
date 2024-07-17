import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Navbar from "./components/menubar/Index"
import RootLayout from "./RootLayouts/RootLayout"
import Home from "./pages/Home"
import 'react-toastify/dist/ReactToastify.css';
import TaskView from "./components/TaskView";
import Contact from "./components/Contact";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/taskview" element={<TaskView/>}/>
      <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Route>
    )
  )


  return (
    <RouterProvider router={router}/>
  )
}

export default App
