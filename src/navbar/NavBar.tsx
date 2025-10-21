import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <Button color="inherit" component={Link} to="/">
              BogDan
            </Button>
          </Typography>
          <Box> 
            <Button color="inherit" component={Link} to="/godone">
              God One
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
