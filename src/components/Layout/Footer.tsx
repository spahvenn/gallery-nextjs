import { AppBar, Container, Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer style={{ marginTop: "auto" }}>
      <AppBar position="sticky">
        <Container
          maxWidth="lg"
          sx={{
            height: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography>Made by: Sami Ahvenniemi</Typography>
          </Box>
        </Container>
      </AppBar>
    </footer>
  );
}
