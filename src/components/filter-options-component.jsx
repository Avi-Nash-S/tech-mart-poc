import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: "5px 10px",
    width: "90%",
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
    color: "#041e42",
  },
}));

const FilterOptionsForm = ({
  minRating,
  minPrice,
  maxPrice,
  minReviewCount,
  stockAvailability,
  handleSubmit,
  handleRadioChange,
  minPriceUpdate,
  maxPriceUpdate,
  reviewCountUpate,
  switchUpdate,
  clearAll,
}) => {
  const classes = useStyles();
  return (
    <form>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Minimum Average Rating</FormLabel>
        <RadioGroup
          aria-label="rating"
          name="rating"
          value={minRating.toString()}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="5"
            control={<Radio color="primary" />}
            label={
              <Rating
                style={{ marginTop: "4px" }}
                name="read-only"
                value={5}
                readOnly
              />
            }
          />
          <FormControlLabel
            value="4"
            control={<Radio color="primary" />}
            label={
              <Rating
                style={{ marginTop: "4px" }}
                name="read-only"
                value={4}
                readOnly
              />
            }
          />
          <FormControlLabel
            value="3"
            control={<Radio color="primary" />}
            label={
              <Rating
                style={{ marginTop: "4px" }}
                name="read-only"
                value={3}
                readOnly
              />
            }
          />
          <FormControlLabel
            value="2"
            control={<Radio color="primary" />}
            label={
              <Rating
                style={{ marginTop: "4px" }}
                name="read-only"
                value={2}
                readOnly
              />
            }
          />
          <FormControlLabel
            value="1"
            control={<Radio color="primary" />}
            label={
              <Rating
                style={{ marginTop: "4px" }}
                name="read-only"
                value={1}
                readOnly
              />
            }
          />
        </RadioGroup>
        <Divider style={{ marginTop: "2px" }} />
        <FormLabel style={{ paddingTop: " 10px" }} component="legend">
          Price
        </FormLabel>
        <TextField
          size="small"
          id="min-price"
          label="Min"
          type="number"
          variant="outlined"
          value={minPrice}
          style={{ marginTop: " 10px" }}
          onChange={(event) => minPriceUpdate(event)}
        />
        <TextField
          size="small"
          id="max-price"
          label="Max"
          type="number"
          variant="outlined"
          value={maxPrice}
          style={{ marginTop: " 10px" }}
          onChange={(event) => maxPriceUpdate(event)}
        />
        <Divider style={{ marginTop: "10px" }} />
        <TextField
          id="review-count"
          label="Review Count"
          value={minReviewCount}
          onChange={(event) => reviewCountUpate(event)}
        />
        <Divider style={{ marginTop: "10px" }} />
        <FormLabel style={{ paddingTop: " 10px" }} component="legend">
          Stock
        </FormLabel>
        <FormControlLabel
          style={{ marginTop: "10px" }}
          control={
            <Switch
              color="primary"
              checked={stockAvailability}
              onChange={(event) => switchUpdate(event)}
            />
          }
          label="Available"
        />
        <Divider style={{ marginTop: "10px" }} />
      </FormControl>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="small"
          onClick={() => handleSubmit()}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          <CheckIcon />
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => clearAll()}
        >
          <CloseIcon />
        </Button>
      </div>
    </form>
  );
};

export default FilterOptionsForm;
