import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WestIcon from "@mui/icons-material/West";
const drawerWidth = 240;
const App = () => {
  const [open, setOpen] = React.useState(false);
  const [openColor, setOpenColor] = React.useState("");
  return (
    <div>
      <CssBaseline />
      <Box>
        <AppBar
          position="static"
          sx={{
            width: open ? `calc(100% - ${drawerWidth}px)` : null,
            ml: open ? `${drawerWidth}px` : null,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setOpen(true)}
            >
              {open ? null : <MenuIcon />}
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Welcome Admin
            </Typography>
            <Avatar
              src="data:image/jpeg;base64,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"
              sx={{ width: 50, height: 50 }}
            />
            <IconButton color="inherit" edge="end">
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={open} variant="static" onClose={() => setOpen(false)}>
          <IconButton
            color="primary"
            edge="end"
            sx={{ ml: 20 }}
            onClick={() => setOpen(false)}
          >
            <WestIcon />
          </IconButton>
          <List
            style={{ dispaly: "flex", width: open ? drawerWidth : null }}
            sx={{ mt: 2 }}
          >
            <ListItem
              button
              sx={{ "&.hover": openColor === "one" ? "green" : null }}
              onClick={() => setOpenColor("one")}
            >
              <ListItemText primary="Enregistement utilisateur "></ListItemText>
              <ChevronRightIcon />
            </ListItem>
            <Divider />
            <ListItem
              button
              sx={{ "&.hover": openColor === "two" ? "green" : null }}
              onClick={() => setOpenColor("two")}
            >
              <ListItemText primary="Enregistement des data  "></ListItemText>
              <ChevronRightIcon />
            </ListItem>
            <Divider />
            <ListItem
              button
              sx={{ "&.hover": openColor === "three" ? "green" : null }}
              onClick={() => setOpenColor("three")}
            >
              <ListItemText primary="List three "></ListItemText>
              <ChevronRightIcon />
            </ListItem>
            <Divider />
          </List>
          <List
            style={{ dispaly: "flex", width: open ? drawerWidth : null }}
            sx={{ mt: 2 }}
          >
            <ListItem
              button
              sx={{ "&.hover": openColor === "one" ? "green" : null }}
              onClick={() => setOpenColor("one")}
            >
              <ListItemText primary="Enregistement utilisateur "></ListItemText>
              <ChevronRightIcon />
            </ListItem>
            <Divider />
            <ListItem
              button
              sx={{ "&.hover": openColor === "two" ? "green" : null }}
              onClick={() => setOpenColor("two")}
            >
              <ListItemText primary="Enregistement des data  "></ListItemText>
              <ChevronRightIcon />
            </ListItem>
            <Divider />
            <ListItem
              button
              sx={{ "&.hover": openColor === "three" ? "green" : null }}
              onClick={() => setOpenColor("three")}
            >
              <ListItemText primary="List three "></ListItemText>
              <ChevronRightIcon />
            </ListItem>
            <Divider />
          </List>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          width: open ? `calc(100% - ${drawerWidth}px)` : null,
          ml: open ? `${drawerWidth}px` : null,
        }}
      >
        <Toolbar />
        <Typography sx={{ ml: 5 }}>Title</Typography>
        <Typography paragraph sx={{ ml: 5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
        </Typography>
        <Typography sx={{ ml: 5 }}>Title 2</Typography>
        <Typography paragraph sx={{ ml: 5 }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
        </Typography>
      </Box>
    </div>
  );
};

export default App;
