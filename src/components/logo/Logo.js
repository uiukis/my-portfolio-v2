import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-45 -25 220 220"
      width={50}
      className={classes.svgHover}
    >
      <rect className="a" x={146.6} y={59} width={9.9} height={133.9} rx={-4} />
      <rect className="a" x={13.5} y={59} width={9.9} height={108.1} rx={-4} />
      <path
        className="a"
        d="M156.3 185.9c1.2 1.7.8 4.1-.9 5.3l-1.9 1.4c-1.7 1.2-4 .8-5.2-.9L87 106.4c-1.2-1.7-.8-4.1.9-5.3l1.9-1.4c1.7-1.2 4.1-.8 5.3.9z"
      />
      <path
        className="a"
        d="M9.5 222.6c-1.2 1.6-3.5 2.1-5.2.9l-2-1.4c-1.6-1.2-2-3.6-.9-5.3L113.3 58.4c1.2-1.6 3.6-2 5.3-.9l1.9 1.4c1.7 1.2 2.1 3.6.9 5.3zM21.9 165.8c-1.2 1.7-3.5 2.1-5.2.9l-2-1.4c-1.6-1.2-2-3.5-.9-5.2l112-158.5c1.2-1.7 3.6-2.1 5.2-.9l2 1.4c1.7 1.2 2.1 3.5.9 5.2z"
      />
    </svg>
  );
};
