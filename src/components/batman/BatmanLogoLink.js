import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BatmanLogo } from "./BatmanLogo";

const useStyles = makeStyles((theme) => ({
  svg: {
    position: "absolute",
    alignItems: "center",
    bottom: theme.spacing(6),
    left: theme.spacing(6),
  },
}));

export const BatmanLogoLink = () => {
  const classes = useStyles();

  return (
    <div className={classes.svg}>
      <BatmanLogo />
    </div>
  );
};
