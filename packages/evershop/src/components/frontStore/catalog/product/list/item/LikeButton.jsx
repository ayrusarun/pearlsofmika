import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Checkbox from "@mui/material/Checkbox";

function LikeButton() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "10px", // Adjust the bottom position as needed
        right: "-5px", // Adjust the right position as needed
        zIndex: 1 // To make sure it appears above other elements
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorderIcon 
               style={{
                  color: "#000000",
                  fontSize: "30px",
                  backgroundColor: "white",
                  borderRadius: "50%", // Set to 50% for a circular background
                  padding: "6px", // Adjust padding to increase background size
                }} />}
            checkedIcon={<FavoriteIcon 
               style={{
               color: "#7d0049",
               fontSize: "30px",
               backgroundColor: "white",
               borderRadius: "50%", // Set to 50% for a circular background
               padding: "6px", // Adjust padding to increase background size
             }} />}
            sx={{
               "&.Mui-checked": {
                 color: "#7d0049", // Customize the background color when checked
               },
             }}
          />
        }  
      />
    </div>
  );
}

export default LikeButton;
