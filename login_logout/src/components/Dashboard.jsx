import { Container, Box, Typography, Button } from "@mui/material";

const Dashboard = ({ currentUser, logout }) => {
  return (
    <Container>
      <Box sx={{ mx: 4, my: 5, textAlign: "center" }}>
        <Typography sx={{ fontWeight: "bold", color: "#eaf0b8ff" }} variant='h2'>DASHBOARD</Typography>
        <br /> <br />
        <Typography sx={{ fontFamily: "fantasy", color: "#616060ff" }} variant='h4'>Welcome, {currentUser}</Typography>
        <br />
        <Button sx={{ color: "#1b29a3ff", boxShadow: "2px", backgroundColor: "white", fontWeight: "bold" }} variant='contained' onClick={logout}>Logout</Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
