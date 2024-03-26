import React from "react";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { CLOUDINERY_CDN } from "../config/constants";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import QuantityInput from "./IncrementDecrement";

function CartItems({ item }) {
  return (
    <Box
      component="section"
      sx={{
        p: 2,
        border: "1px solid grey",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "70%",
          flexWrap: "wrap",
        }}
      >
        <div
          key={item.id}
          style={{
            display: "inline-grid",
            gap: "10px",
          }}
        >
          <Typography variant="h6">{item.name}</Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {item.cuisines.length > 0 &&
              item.cuisines.map((item) => (
                <Chip key={item} label={item} size="small" />
              ))}
          </div>
          {item?.aggregatedDiscountInfoV3?.header && (
            <Chip
              label={item?.aggregatedDiscountInfoV3?.header}
              icon={<LocalOfferOutlinedIcon />}
              size="small"
            />
          )}
          <b>{item.costForTwo}</b>
          <QuantityInput item={item} />
        </div>
      </div>
      <div style={{ width: "30%", margin: "10px" }}>
        <img
          alt="CartItem"
          src={`${CLOUDINERY_CDN}${item.cloudinaryImageId}`}
          width="100%"
          key={item.id}
        />
      </div>
    </Box>
  );
}

export default CartItems;
