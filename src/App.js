import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import NotFound from "./components/pages/NotFound";
import Reviews from "./components/pages/Reviews";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ScrollIndicator from "./components/ScrollIndicator";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3",
      secondary: {
        main: "#2979ff",
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollIndicator />

      {/* <Container maxWidth="lg"> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/reviews" component={Reviews} />
        <Route component={NotFound} />
      </Switch>
      {/* </Container> */}

      <Footer />
    </div>
  );
}

export default App;
