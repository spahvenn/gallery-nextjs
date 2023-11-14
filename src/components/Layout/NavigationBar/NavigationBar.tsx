import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import { NavigationItem } from "./NavigationItem";
import ColorModeToggle from "./ColorModeToggle";
import ShoppingCartNavItem from "./ShoppingCartNavItem";

export default function NavigationBar() {
  return (
    <AppBar position="sticky" component="nav">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <NavigationItem to="/">Home</NavigationItem>
                <NavigationItem to="/gallery?season=all">
                  Gallery
                </NavigationItem>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <ColorModeToggle />
                <ShoppingCartNavItem />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
