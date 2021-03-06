import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ModalLogin from "../components/modalLogin";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalRegister from "./ModalRegister";
import { signout } from "../actions/userActions";

export default function Header(props) {
  const [show, setShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const pubgMapDetails = useSelector((state) => state.pubgMapDetails);
  const { pubgMap } = pubgMapDetails;
  const lolChampDetails = useSelector((state) => state.lolChampDetails);
  const { lolChamp } = lolChampDetails;
  const valorantChampDetails = useSelector(
    (state) => state.valorantChampDetails
  );
  const { valorantChamp } = valorantChampDetails;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  let headerColor = "black";

  let location = useLocation();

  switch (location.pathname) {
    case "/":
      headerColor = "black";
      break;
    case "/lol":
    case "/lolAbout":
    case "/lolChamps":
    case `/lolChamps/${lolChamp ? lolChamp._id : ""}/`:
    case `/lolChamps/${lolChamp ? lolChamp._id : ""}`:
      headerColor = "#00eeff";
      break;
    case "/pubg":
    case "/pubgAbout":
    case "/pubgMaps":
    case `/pubgMaps/${pubgMap ? pubgMap._id : ""}/`:
    case `/pubgMaps/${pubgMap ? pubgMap._id : ""}`:
      headerColor = "#e0ca5e";
      break;
    case "/valorant":
    case "/valorantAbout":
    case "/valorantChamps":
    case `/valorantChamps/${valorantChamp ? valorantChamp._id : ""}/`:
    case `/valorantChamps/${valorantChamp ? valorantChamp._id : ""}`:
      headerColor = "#ff4761";
      break;
    default:
      headerColor = "black";
  }

  const showMenuHandler = () => {
    console.log(showMenu);
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
    console.log("test" + showMenu);
  };
  return (
    <div
      className="row row-header header"
      style={{ backgroundColor: headerColor }}
    >
      <div>
        <img className="small" src="./images/blackwhite1.png" alt="logo"></img>
      </div>
      <div className="nazev-menu">MEGABITE</div>

      {/* Menu */}
      <div className="visible-menu">
        <Link to="/">DOM??</Link>
        <Link to="/lol">LOL</Link>
        <Link to="/pubg">PUBG</Link>
        <Link to="/valorant">VALORANT</Link>
      </div>
      {userInfo && !userInfo.isAdmin ? (
        <div className="visible-menu">
          <div className="dropdown">
            <Link to="#">
              {userInfo.name} <FontAwesomeIcon icon={faCaretDown} />
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="#signout" onClick={signoutHandler}>
                  Odhl??sit se
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : userInfo && userInfo.isAdmin ? (
        <div className="visible-menu">
          <div className="dropdown">
            <Link to="#admin">
              {userInfo.name} <FontAwesomeIcon icon={faCaretDown} />
            </Link>
            <ul className="dropdown-content">
              <li className="dropdown-cart">
                <Link to="/createData">Tvorba</Link>
              </li>
              <li>
                <Link to="#signout" onClick={signoutHandler}>
                  Odhl??sit se
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="header-login visible-menu">
          <div>
            <ModalRegister
              registerShow={registerShow}
              handleClose={() => {
                setRegisterShow(false);
              }}
            ></ModalRegister>
            <button type="button" onClick={() => setRegisterShow(true)}>
              Registrace
            </button>
          </div>
          <div>
            <ModalLogin
              show={show}
              handleClose={() => {
                setShow(false);
              }}
            ></ModalLogin>
            <button type="button" onClick={() => setShow(true)}>
              P??ihl??sit se
            </button>
          </div>
        </div>
      )}
      <div className="burger-menu">
        <button
          className="burger-button"
          type="button"
          onClick={showMenuHandler}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {userInfo && userInfo.isAdmin ? (
          <ul className={showMenu ? "menu-links display-links" : "menu-links"}>
            <li>
              <Link to="/">DOM??</Link>
            </li>
            <li>
              {" "}
              <Link to="/lol">LOL</Link>
            </li>
            <li>
              {" "}
              <Link to="/pubg">PUBG</Link>
            </li>
            <li>
              {" "}
              <Link to="/valorant">VALORANT</Link>
            </li>
            <li>
              <Link to="/createData">Tvorba</Link>
            </li>
            <li className="line"></li>
            <li>
              <Link to="#signout" onClick={signoutHandler}>
                Odhl??sit se
              </Link>
            </li>
          </ul>
        ) : userInfo && !userInfo.isAdmin ? (
          <ul className={showMenu ? "menu-links display-links" : "menu-links"}>
            <li>
              <Link to="/">DOM??</Link>
            </li>
            <li>
              {" "}
              <Link to="/lol">LOL</Link>
            </li>
            <li>
              {" "}
              <Link to="/pubg">PUBG</Link>
            </li>
            <li>
              {" "}
              <Link to="/valorant">VALORANT</Link>
            </li>
            <li className="line"></li>
            <li>
              <Link to="#signout" onClick={signoutHandler}>
                Odhl??sit se
              </Link>
            </li>
          </ul>
        ) : (
          <ul className={showMenu ? "menu-links display-links" : "menu-links"}>
            <li>
              <Link to="/">DOM??</Link>
            </li>
            <li>
              {" "}
              <Link to="/lol">LOL</Link>
            </li>
            <li>
              {" "}
              <Link to="/pubg">PUBG</Link>
            </li>
            <li>
              {" "}
              <Link to="/valorant">VALORANT</Link>
            </li>
            <li className="line"></li>
            <li>
              <ModalRegister
                registerShow={registerShow}
                handleClose={() => {
                  setRegisterShow(false);
                }}
              ></ModalRegister>
              <button
                className="menu-button"
                type="button"
                onClick={() => setRegisterShow(true)}
              >
                Registrace
              </button>
            </li>
            <li>
              <ModalLogin
                show={show}
                handleClose={() => {
                  setShow(false);
                }}
              ></ModalLogin>
              <button
                className="menu-button"
                type="button"
                onClick={() => setShow(true)}
              >
                P??ihl??sit se
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
