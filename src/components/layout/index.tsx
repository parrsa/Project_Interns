import React from "react";
import { LayoutInterface } from "../../@types/components/App/compoents";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TButton from "../TButton";
import TAlert from "../TAlert";

const MainLayout: React.FC<LayoutInterface> = ({
  children,
}: LayoutInterface) => {
  return (
    <React.Fragment>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      {/* <button>asd</button> */}
      <TButton variant="contained" submit={"true"}>
        Submit
      </TButton>
      <TButton variant="text" submit={"true"}>
        Submit
      </TButton>
      <TButton variant="contained" add={"true"}>
        parsa
      </TButton>
      <TButton variant="contained" remove={"true"}>
        Remove
      </TButton>
      <Button
        variant="contained"
        color="success"
        sx={{
          borderRadius: "2rem",
          border: "1px solid #DFDFDF",
          backgroundColor: "red",
          "&:hover": { backgroundColor: "blue" },
        }}
      >
        contained
      </Button>
      <Button variant="outlined" color="success">
        outlined
      </Button>
      <Button variant="text" color="primary">
        text
      </Button>

      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="outlined" endIcon={<DeleteIcon />}>
        Delete
      </Button>

      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <br/> <br />

      <TAlert severity="warning" variant="outlined" submit={'true'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
        delectus.
      </TAlert>
      <br /> <br />
      <TAlert severity="error" variant="outlined" submit={'true'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
        delectus.
      </TAlert>
      <br /> <br />
      <TAlert severity="error" variant="filled" add={'true'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
        delectus.
      </TAlert>

      {children}
    </React.Fragment>
  );
};
export default MainLayout;
