import { Group } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/componet/MenuItemLink";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69% #20a7ac 89%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <MenuItem
                component={NavLink}
                to="/"
                sx={{ display: "flex", gap: 2 }}
              >
                <Group fontSize="large" />
                <Typography variant="h6" fontWeight="bold">
                  Reactivity
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <MenuItemLink to="/activities">Actitvities</MenuItemLink>
              <MenuItemLink to="/createActivity">Create Activity</MenuItemLink>
            </Box>
            <MenuItemLink to="/login">User menu</MenuItemLink>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
