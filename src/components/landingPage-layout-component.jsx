import React from "react";
import clsx from "clsx";
import logo from "../static/walmartIcon.svg";
import { fade, withStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PaginationComponent from "./pagination-component";
import FilterOptionsForm from "./filter-options-component";
import { connect } from "react-redux";
import { getProducts } from "../redux/products/products.action";
import { compose } from "redux";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#041e42",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    color: "#041e42",
    borderRadius: "6px 0px 0px 6px",
    width: "16px",
    backgroundColor: "#ffc220",
    padding: "0px 14px",
    height: "100%",
    position: "absolute",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    zIndex: 9,
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
});

class LandingPageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      pageSize: 8,
      page: 1,
      searchQuery: null,
      filterQuery: null,
      searchIconDisplay: true,
      minRating: "",
      minPrice: "",
      maxPrice: "",
      minReviewCount: "",
      stockAvailability: false,
    };
  }
  handleDrawer = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  pageChange = (event, page = 1, pageSize = 8) => {
    this.setState(
      {
        pageSize,
        page,
      },
      () =>
        this.props.getProducts(
          page,
          pageSize,
          this.state.filterQuery
            ? this.state.filterQuery
            : this.state.searchQuery
        )
    );
  };

  onSearch = () => {
    this.setState(
      (prevState) => ({
        searchIconDisplay: !prevState.searchIconDisplay,
        filterQuery: null,
      }),
      () => this.props.getProducts(1, 8, this.state.searchQuery)
    );
  };

  handleSubmit = () => {
    const {
      searchQuery,
      minRating,
      minPrice,
      maxPrice,
      minReviewCount,
      stockAvailability,
    } = this.state;

    const query =
      (stockAvailability ? `inStock=${stockAvailability}` : "") +
      (minRating ? `&minReviewRating=${minRating}` : "") +
      (minReviewCount ? `&minReviewCount=${minReviewCount}` : "") +
      (minPrice ? `&minPrice=${minPrice}` : "") +
      (maxPrice ? `&maxPrice=${maxPrice}` : "");

    const filterQuery = searchQuery
      ? `${searchQuery}&${query ? query : ""}`
      : `?${query}`;
    this.setState(
      {
        filterQuery,
      },
      () => this.props.getProducts(1, 8, filterQuery)
    );
  };

  handleRadioChange = (event) =>
    this.setState({ minRating: parseInt(event.target.value) });
  minPriceUpdate = (event) =>
    this.setState({ minPrice: parseInt(event.target.value) });
  maxPriceUpdate = (event) =>
    this.setState({ maxPrice: parseInt(event.target.value) });
  reviewCountUpate = (event) =>
    this.setState({ minReviewCount: parseInt(event.target.value) });
  switchUpdate = (event) =>
    this.setState({ stockAvailability: event.target.checked });
  clearAll = () =>
    this.setState(
      {
        filterQuery: null,
        minPrice: "",
        maxPrice: "",
        minReviewCount: "",
        stockAvailability: false,
        minRating: "",
      },
      () => this.props.getProducts(1, 8, this.state.searchQuery)
    );

  render() {
    const {
      open,
      searchIconDisplay,
      searchQuery,
      minRating,
      minPrice,
      maxPrice,
      minReviewCount,
      stockAvailability,
    } = this.state;
    const { data, classes, getProducts } = this.props;
    return (
      <>
        <div className={classes.root}>
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
                onClick={this.handleDrawer}
                edge="start"
                className={classes.menuButton}
              >
                {open ? <ArrowBackIosIcon /> : <MenuIcon />}
              </IconButton>
              <span style={{ cursor: "pointer" }} onClick={() => getProducts()}>
                <Typography variant="h6" noWrap>
                  Walmart
                  <img src={logo} alt="" style={{ height: "20px" }} />
                </Typography>
              </span>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "70%",
                }}
              >
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    {!searchIconDisplay && searchQuery ? (
                      <CloseIcon
                        onClick={() =>
                          this.setState(
                            {
                              searchQuery: null,
                            },
                            () => this.onSearch()
                          )
                        }
                      />
                    ) : (
                      <SearchIcon onClick={() => this.onSearch()} />
                    )}
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                    onChange={(event) =>
                      this.setState({
                        searchQuery: `?search=${event.target.value}`,
                      })
                    }
                    onKeyDown={(event) =>
                      event.key === "Enter" && this.onSearch()
                    }
                  />
                </div>
              </span>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader} />
            <Divider />
            <Typography
              style={{
                color: "#041e42",
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
                width: "85%",
                height: "30px",
                fontWeight: 700,
                fontSize: "20px",
              }}
            >
              <FilterListIcon style={{ height: "27px" }} /> Filters
            </Typography>
            <Divider />
            <div style={{ width: "100%", height: "100%", paddingTop: "20px" }}>
              <FilterOptionsForm
                minPrice={minPrice}
                maxPrice={maxPrice}
                minRating={minRating}
                minReviewCount={minReviewCount}
                stockAvailability={stockAvailability}
                handleSubmit={this.handleSubmit}
                handleRadioChange={this.handleRadioChange}
                minPriceUpdate={this.minPriceUpdate}
                maxPriceUpdate={this.maxPriceUpdate}
                reviewCountUpate={this.reviewCountUpate}
                switchUpdate={this.switchUpdate}
                clearAll={this.clearAll}
              />
            </div>
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            {this.props.children}
            {data && data.products.products && data.products.products.length ? (
              <PaginationComponent
                pageAttributes={data.products}
                pageChange={this.pageChange}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: " center",
                  alignContent: "center",
                }}
              >
                No Data Found
              </div>
            )}
          </main>
        </div>
      </>
    );
  }
}

const mapStateToProps = (storeState) => ({
  data: storeState.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (pageNo, pageSize, query) =>
    dispatch(getProducts(pageNo, pageSize, query)),
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(LandingPageLayout);
