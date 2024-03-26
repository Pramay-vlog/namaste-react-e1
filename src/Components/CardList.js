import React from "react";
import { CLOUDINERY_CDN } from "../config/constants";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slice/cartSlice";

function CardList({ info }) {
  let { name, locality, cuisines, avgRating, costForTwo } = info;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(info));
  };

  return (
    <Card
      sx={{
        maxWidth: 350,
        width: "100%",
        height: 550,
        overflow: "auto",
        marginTop: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width={300}
          image={`${CLOUDINERY_CDN}${info.cloudinaryImageId}`}
          alt="restaurent"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <br />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {locality}
          </Typography>
          <br />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {cuisines.join(", ")}
          </Typography>
          <br />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {avgRating}
          </Typography>
          <br />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {costForTwo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Stack
        spacing={2}
        direction="row"
        style={{
          margin: "10px 0px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddItem}
          style={{ width: '300px' }}
        >
          + Add
        </Button>
      </Stack>
    </Card>
  );
}

export default CardList;
