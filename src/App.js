// import logo from './logo.svg';

import Nav from './includes/Nav'
import Footer from './includes/Footer'
import Myroutes from './includes/Myroutes'
import { FaHome } from "react-icons/fa";



function App() {
  return (
<>
  {/* <!-- Header navbar start --> */}
    <Nav></Nav>
  {/* <!-- Header navbar end --> */}

    <Myroutes></Myroutes>

   {/* <!-- Footer Style start --> */}
    <Footer></Footer>
    {/* <!-- Footer Style End --> */}

    <a href="#" className="scrollup">{<FaHome></FaHome>}</a>
</>
  );
}

export default App;
