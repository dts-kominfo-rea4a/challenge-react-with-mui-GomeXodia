// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Typography } from "@mui/material";
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "4px 4px 4px 4px",
            alignItems: "right",
          }}
        >
          <div>
            <img
              src={data.photo}
              alt=""
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50px",
              }}
            />
          </div>
          <div style={{ marginTop: "10px", verticalAlign: "middle" }}>
            <Typography variant="body2" display="block">
              <strong>{data.name}</strong>
            </Typography>
            <Typography
              style={{ color: "#395B64"}}
              variant="caption"
              display="block"
              
            >
              {data.phone}
            </Typography>
            <Typography
              style={{ color: "#395B64" }}
              variant="caption"
              display="block"
            >
              {data.email}
            </Typography>
          </div>
        </div>
        <hr style={{ marginTop: "-5px" }}></hr>
      </>
    );
  };

export default Contact;
