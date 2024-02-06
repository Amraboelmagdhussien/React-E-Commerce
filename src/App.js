import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import HeaderPreview from "./Components/Header";
import NavBar from "./Components/NavBar";
import SignUp from "./Pages/Signup";
import HomePage from "./Pages/homePage";
import LoginPre from "./Pages/login";
import ProductPage from "./Pages/productPage";
import SpecficProd from "./Pages/speProd";
import Favourite from "./Pages/wishListPage";
import CatePage from "./Pages/categories";
import NotFound from "./Pages/notFound";
import CartPage from "./Pages/cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPreview />
        <NavBar />
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/signup"} component={SignUp} />
          <Route exact path={"/signin"} component={LoginPre} />
          <Route exact path={"/prods"} component={ProductPage} />
          <Route exact path={"/prods/:prodId"} component={SpecficProd} />
          <Route exact path={"/wishes"} component={Favourite} />
          <Route exact path={"/nameC/:cateName"} component={CatePage} />
          <Route exact path={"/searchP/:seaSt"} component={CatePage} />
          <Route exact path={"/cartStuff"} component={CartPage} />
          <Route exact path={"/*"} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
