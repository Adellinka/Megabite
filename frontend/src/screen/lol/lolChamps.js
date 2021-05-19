import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listChamps } from "../../actions/lolActions";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

export default function LolChamps(props) {
  const champsList = useSelector((state) => state.champsList); //state.champsList je název reduceru, useSelector vezme data z reduceru a uloží je do const champsList
  const { loading, error, lolChamps } = champsList; // lolChamps je kolekce champů z DB
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listChamps());
  }, [dispatch]);
  return (
    <div>
      <div className="row"></div>

      <div className="row row-content lol-border mt-50">
        <img className="big" src="./images/logolol.png" alt="LOL logo" />
      </div>
      <div className="grid-container-content">
        <div className="left-menu-wrap">
          <ul className="sidemenu lol-border">
            <li>
              <Link className="link" to="/lol">
                ZPĚT
              </Link>
            </li>
            <li>
              <Link className="link" to="/lolAbout">
                O HŘE
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidemenu-border lol-border">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <ul className="ul-body">
              {lolChamps.map((lolChamp) => (
                <li key={lolChamp._id}>
                  <button
                    type="button"
                    onClick={() =>
                      props.history.push(`/lolChamps/${lolChamp._id}/`)
                    }
                  >
                    <div className="img-cart">
                      <img
                        className="nahled"
                        src={lolChamp.nahled}
                        alt={lolChamp.name}
                      />
                      <div>{lolChamp.name}</div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
