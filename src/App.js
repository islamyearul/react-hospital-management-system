// import logo from './logo.svg';

import Nav from './includes/Nav'
import Footer from './includes/Footer'
import Myroutes from './includes/Myroutes'
import UserProvider from './component/baseUral/Baseurl'
import { FaHome } from "react-icons/fa";

import { createContext, useContext } from "react";
const Context = createContext("Default Value");


function App() {
  const value = "My gggg Value";
  return (
  <>
   <Context.Provider value={value}>
  {/* <!-- Header navbar start --> */}
    <Nav></Nav>
  {/* <!-- Header navbar end --> */}

    <Myroutes></Myroutes>

   {/* <!-- Footer Style start --> */}
    <Footer></Footer>
    {/* <!-- Footer Style End --> */}

    <a href="#" className="scrollup">{<FaHome></FaHome>}</a>
    </Context.Provider>
    </>
  );
}

export default App;
