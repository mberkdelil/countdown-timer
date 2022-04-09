import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Sayac from "./Sayac";
import saat from "./saat.jpg";

function App(props) {

  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      height: "100vh",
      backgroundImage: `url(${saat})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: false,
      maxWidth:"auto"
    }
  }));

  const classes = useStyles();
  return (

    <div className={classes.container} >
      <Container maxWidth="sm">
       <Sayac/>
      </Container>
    </div>
  );
}

export default (App);
