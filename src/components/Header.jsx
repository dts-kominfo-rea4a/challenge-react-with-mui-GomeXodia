// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Typography } from "@mui/material";
// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
    <div style={{ textAlign: "center" }}>
        <Typography style={{ color: "#395B64" }} variant="h3" gutterBottom>
          Call a Friend
        </Typography>
        
        <h2
          style={{
            width: "100%",
            textAlign: "center",
            borderBottom: "1px solid #A0BCC2",
            lineHeight: "0.1em",
            margin: "10px 0 20px",
            color: 'aliceblue',
          }}
        >
          <span
            style={{
              backgroundColor: "#fff",
              padding: "0 10px",
              fontSize: "0.7em",
              color: "#395B64",
            }}
          >
            Your friendly contact app
          </span>
        </h2>
      </div>
    </>
  );
};

export default Header;
