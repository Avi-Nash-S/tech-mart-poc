import React from "react";
import { TitleContainer, DescriptionContainer } from "./helper";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    margin: 10,
    height: 450,
  },
  media: {
    height: 160,
  },
  avatar: {
    backgroundColor: "#041e42",
  },
}));

const CardComponent = ({ product, isLoading, history, onFormEdit }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        style={{ height: "73px" }}
        avatar={
          isLoading ? (
            <Skeleton
              animation="wave"
              variant="circle"
              width={40}
              height={40}
            />
          ) : (
            <Avatar aria-label="recipe" className={classes.avatar}>
              {product.productName.charAt(0)}
            </Avatar>
          )
        }
        action={
          <IconButton
            aria-label="settings"
            style={{ paddingLeft: "0px" }}
            onClick={(event) => {
              onFormEdit(event, product);
            }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={
          isLoading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Tooltip title={product.productName}>
              <TitleContainer>{product.productName}</TitleContainer>
            </Tooltip>
          )
        }
        subheader={
          isLoading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="40%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            <div>
              <Box
                component="fieldset"
                borderColor="transparent"
                style={{ padding: "0px", width: "135px" }}
              >
                <Rating
                  name="read-only"
                  value={product.reviewRating}
                  readOnly
                />
                <span style={{ fontSize: "8px" }}>{product.reviewCount}</span>
              </Box>
            </div>
          )
        }
      />
      <CardActionArea
        component="span"
        className="card-container"
        key={product.productId}
        onClick={() => history.push(`/${product.productId}`)}
      >
        {isLoading && product.productImage !== undefined ? (
          <Skeleton
            animation="wave"
            variant="rect"
            height={160}
            className={classes.media}
          />
        ) : (
          <div
            key={product.productId}
            style={{
              width: "100%",
              height: "160px",
              boxSizing: "initial",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ height: "160px", width: "160px" }}
              src={`https://mobile-tha-server-8ba57.firebaseapp.com${product.productImage}`}
              alt=""
              onError={(e) =>
                (e.target.src = `https://mobile-tha-server-8ba57.firebaseapp.com${product.productImage}`)
              }
            />
          </div>
        )}
        <CardContent>
          {isLoading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                width={240}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width={210} />
            </React.Fragment>
          ) : (
            <Typography variant="body2" color="textSecondary">
              <DescriptionContainer>
                <span
                  dangerouslySetInnerHTML={{
                    __html: product.shortDescription,
                  }}
                />
              </DescriptionContainer>
            </Typography>
          )}
        </CardContent>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {isLoading ? (
            <Skeleton animation="wave" height={10} width={210} />
          ) : (
            <span
              style={{
                position: "absolute",
                bottom: "45%",
                color: "#041e42",
                fontWeight: 700,
              }}
            >
              {product.price}
            </span>
          )}
        </div>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
