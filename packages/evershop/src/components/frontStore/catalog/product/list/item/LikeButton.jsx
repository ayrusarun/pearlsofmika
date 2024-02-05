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
        zIndex: 1, // To make sure it appears above other elements
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorderIcon style={{ color: "rgb(139 108 126)", fontSize: "20px" }} />}
            checkedIcon={<FavoriteIcon style={{ color: "#7d0049", fontSize: "20px" }} />}
          />
        }  
      />
    </div>
  );
}

export default LikeButton;
