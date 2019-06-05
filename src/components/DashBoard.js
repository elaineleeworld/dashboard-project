import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Totals from "./Totals";
import Graph1 from "../graph1.png";
import Graph2 from "../graph2.png";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built by "}
      <Link color="inherit" href="https://material-ui.com/">
        Elaine Lee
      </Link>
      {" 2019"}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 400
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} />

      <main className={classes.content} style={{ height: "100%" }}>
        <Container maxWidth="lg" className={classes.container} style={{ paddingLeft: "82px" }}>
          <h2 style={{ fontSize: "32px", color: "grey", margin: "0px" }}>Dashboard</h2>
          <span style={{ fontSize: "12px", color: "grey", paddingBottom: "10px" }}>dashboard & statistics</span>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper} style={{ marginTop: "20px" }}>
                <Totals />
              </Paper>
            </Grid>
          </Grid>
          {/* Chart */}
          <Grid item xs={12} md={6} lg={6} style={{ position: "relative", float: "left", width: "50%" }}>
            <Paper className={fixedHeightPaper}>
              <img src={Graph1} />
            </Paper>
          </Grid>
          {/* Chart */}
          <Grid item xs={12} md={6} lg={6} style={{ position: "relative", float: "right", width: "50%" }}>
            <Paper className={fixedHeightPaper}>
              <img src={Graph2} />
            </Paper>
          </Grid>
        </Container>
        <MadeWithLove />
      </main>
    </div>
  );
}
