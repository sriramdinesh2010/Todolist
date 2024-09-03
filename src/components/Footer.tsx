import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        mt: 10,
        backgroundColor: "primary",
        textAlign: "center",
        boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          © {new Date().getFullYear()} TodoList
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
