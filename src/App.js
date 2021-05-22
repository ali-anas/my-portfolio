import "./App.css";
import NavBar from "./components/NavBar";
import IntroBanner from "./components/home/IntroBanner";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import TabbedLayout from "./components/home/TabbedLayout";
import Footer from "./components/Footer";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    margin: "20px 10%",
    color: "red",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="lg">
        <div>
          <IntroBanner />
        </div>

        <Divider variant="middle" className={classes.divider} />
        <TabbedLayout />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
