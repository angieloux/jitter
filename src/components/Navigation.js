import { AppBar, Tabs, Toolbar, Typography, Tab } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const Navigation = () => {
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    dispatch({
      type: "setLoggedInUser",
      data: "",
    });
    navigate("/messages");
  };
  return (
    <AppBar position="sticky">
      <Typography variant="h3">jitter</Typography>
      <Toolbar>
        <Tabs value={false}>
          <Tab label="home" value="/messages" component={Link} to="/messages" />
          <Tab label="about" component={Link} to="/about" />
          {loggedInUser && <Tab label="new message" component={Link} to="/messages/new"/>}
          {loggedInUser && <Tab label="logout" onClick={logout} component={Link} to="/messages"/>}
          {!loggedInUser && <Tab label="signin" component={Link} to="/signin"/>}
          {!loggedInUser && <Tab label="signup" component={Link} to="/signup"/>}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
