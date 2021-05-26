import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import Container from "@material-ui/core/Container";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";

import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#2979ff",
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="lg"></Container>

      {/* TODO: Add router to route */}

      <Footer />
    </div>
  );
}

export default App;
