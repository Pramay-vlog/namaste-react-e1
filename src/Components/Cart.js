import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CartItems from "./CartItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/slice/cartSlice";

export default function CartDrawer({ isOpen, setIsOpen, cartData }) {
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setIsOpen(open);
  };

  const isCartData = cartData?.length > 0;
  const dispatch = useDispatch();

  const list = () => (
    <Box sx={{ padding: "30px 20px", width: 500 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Cart Items
        </Typography>
        {isCartData && (
          <Tooltip title="Clear Cart" placement="top">
            <IconButton onClick={() => dispatch(clearCart())}>
              <DeleteForeverOutlinedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        )}
      </div>

      {!isCartData && <Typography variant="h6">🛒 Cart Is Empty 🛒</Typography>}

      {isCartData &&
        cartData.map((item) => <CartItems key={item.id} item={item} />)}
    </Box>
  );

  return (
    <div>
      <>
        <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </>
    </div>
  );
}
