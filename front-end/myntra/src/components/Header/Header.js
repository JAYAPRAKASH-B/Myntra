import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import MoreIcon from "@material-ui/icons/MoreVert";
import "./Header.scss";
import myntra_logo from "../../assets/Myntra_logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "grey",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
      backgroundColor: "#9992",
      color: "black",
      float: "right",
      paddingBottom: "15px",
      paddingTop: "15px",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  const menuId = "primary-search-account-menu";

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div>
      <nav role="navigation">
        <a href="javascript:void(0);" className="ic close"></a>
        <ul className="main-nav">
          <img src={myntra_logo} alt="Myntra" style={{ width: '7%', paddingLeft: '45px' }} />
          <li className="top-level-link">
            <a className="mega-menu"><Typography className="{classNamees.title} navtitle" variant="h6" noWrap>MENS</Typography></a>
            <div className="sub-menu-block">
              <div className="row">
                <div className="col-md-1 col-lg-1 col-sm-1"></div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Clothing</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>New Born</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Handbags</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Wallets</a></li>
                    <li><a>Athletic bag</a></li>
                    <li><a>Backpack</a></li>
                    <li><a>Bucket Bag</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-1 col-lg-1 col-sm-1"></div>
              </div>

              <div className="row banners-area">
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
              </div>

            </div>
          </li>
          <li className="top-level-link">
            <a className="mega-menu"><Typography className="{classNamees.title} navtitle" variant="h6" noWrap>WOMENS</Typography></a>
            <div className="sub-menu-block">
              <div className="row">
                <div className="col-md-1 col-lg-1 col-sm-1"></div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Clothing</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>New Born</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Handbags</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Wallets</a></li>
                    <li><a>Athletic bag</a></li>
                    <li><a>Backpack</a></li>
                    <li><a>Bucket Bag</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-1 col-lg-1 col-sm-1"></div>
              </div>

              <div className="row banners-area">
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
              </div>

            </div>
          </li>
          <li className="top-level-link">
            <a className="mega-menu"><Typography className="{classNamees.title} navtitle" variant="h6" noWrap>KIDS</Typography></a>
            <div className="sub-menu-block">
              <div className="row">
                <div className="col-md-1 col-lg-1 col-sm-1"></div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Clothing</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>New Born</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Handbags</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Wallets</a></li>
                    <li><a>Athletic bag</a></li>
                    <li><a>Backpack</a></li>
                    <li><a>Bucket Bag</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-1 col-lg-1 col-sm-1"></div>
              </div>

              <div className="row banners-area">
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
              </div>

            </div>
          </li>
          <li className="top-level-link">
            <a className="mega-menu"><Typography className="{classNamees.title} navtitle" variant="h6" noWrap>HOME&LIVING</Typography></a>
            <div className="sub-menu-block">
              <div className="row">
                <div className="col-md-1 col-lg-1 col-sm-1"></div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Clothing</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>New Born</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Handbags</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Wallets</a></li>
                    <li><a>Athletic bag</a></li>
                    <li><a>Backpack</a></li>
                    <li><a>Bucket Bag</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-1 col-lg-1 col-sm-1"></div>
              </div>

              <div className="row banners-area">
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
              </div>

            </div>
          </li>
          <li className="top-level-link">
            <a className="mega-menu"><Typography className="{classNamees.title} navtitle" variant="h6" noWrap>BEAUTY</Typography></a>
            <div className="sub-menu-block">
              <div className="row">
                <div className="col-md-1 col-lg-1 col-sm-1"></div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Clothing</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>New Born</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Handbags</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Wallets</a></li>
                    <li><a>Athletic bag</a></li>
                    <li><a>Backpack</a></li>
                    <li><a>Bucket Bag</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-2 col-lg-2 col-sm-2">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-1 col-lg-1 col-sm-1"></div>
              </div>

              <div className="row banners-area">
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
              </div>

            </div>
          </li>
          <li className="top-level-link">
            <a className="mega-menu"><Typography className="{classNamees.title} navtitle" variant="h6" noWrap>STUDIO</Typography></a>
            <div className="sub-menu-block">
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h2 className="sub-menu-head">Clothing</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>New Born</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h2 className="sub-menu-head">Handbags</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Wallets</a></li>
                    <li><a>Athletic bag</a></li>
                    <li><a>Backpack</a></li>
                    <li><a>Bucket Bag</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-4">
                  <h2 className="sub-menu-head">Shoes</h2>
                  <ul className="sub-menu-lists">
                    <li><a>Mens</a></li>
                    <li><a>Womens</a></li>
                    <li><a>Kids</a></li>
                    <li><a>View All</a></li>
                  </ul>
                </div>
              </div>

              <div className="row banners-area">
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                  <img src="http://devitems.com/tf/teemo-preview/teemo/img/banner/banner-menu1.jpg" width="100%;" />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div>
              <InputBase
                style={{ color: "#696e79", width: "100%" }}
                placeholder="Search for products, brands and more"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </li>
          <li>
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="grey">
                <Badge badgeContent={4} color="primary">
                  <LocalMallOutlinedIcon fontSize='large' />

                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="grey">
                <Badge badgeContent={17} color="secondary">
                  <FavoriteBorderOutlinedIcon fontSize="large" />
                </Badge>
              </IconButton>
              <Link to='/signup'>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="grey"
                >
                  <AccountCircle fontSize="large" />
                </IconButton>
              </Link>
            </div>
          </li>
          <li>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
