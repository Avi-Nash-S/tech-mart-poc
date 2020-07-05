import React from "react";
import clsx from "clsx";
import logo from "../static/walmartIcon.svg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CloseIcon from "@material-ui/icons/Close";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

export default function HeaderComponent({
  searchIconDisplay,
  searchQuery,
  getProducts,
  history,
  open,
  classes,
  onSearch,
  onSearchClear,
  handleDrawer,
  onSearchUpdate,
}) {
  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={classes.menuButton}
          >
            {open ? <ArrowBackIosIcon /> : <MenuIcon />}
          </IconButton>
          <span style={{ cursor: "pointer" }} onClick={() => getProducts()}>
            <Typography variant="h6" noWrap>
              Techmart
              <img src={logo} alt="" style={{ height: "20px" }} />
            </Typography>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              width: "85%",
            }}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                {!searchIconDisplay && searchQuery ? (
                  <CloseIcon onClick={() => onSearchClear()} />
                ) : (
                  <SearchIcon onClick={() => onSearch()} />
                )}
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={(event) => onSearchUpdate(event)}
                onKeyDown={(event) => event.key === "Enter" && onSearch()}
              />
            </div>
          </span>
          <AccountCircleIcon
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "25px",
            }}
            onClick={() => history.push("/login")}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
