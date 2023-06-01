import { Header } from "./Header";
import { Content } from "./Content";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
