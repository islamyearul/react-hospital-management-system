
import Nav from './includes/Nav'
import Footer from './includes/Footer'
import Myroutes from './includes/Myroutes'



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


</>
  );
}

export default App;
