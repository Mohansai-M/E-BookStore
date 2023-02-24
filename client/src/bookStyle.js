
import { makeStyles } from "@mui/styles";

const cardBook = makeStyles(() => ({
  card: {minWidth: 256,
  borderRadius: 16,
  boxShadow: "none",
  "&:hover": {
    boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px;
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
  },}
}));


export { cardBook };
