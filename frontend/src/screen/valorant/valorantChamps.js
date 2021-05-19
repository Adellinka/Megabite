import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listValorantChamps } from "../../actions/valorantActions";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

export default function ValorantChamps(props) {
  const valorantChampList = useSelector((state) => state.valorantChampList);
  const { loading, error, valorantChamps } = valorantChampList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listValorantChamps());
  }, [dispatch]);
  return (
    <div>
      <div className="row"></div>

      <div className="row row-content val-border mt-50">
        <img className="big" src="./images/valor.png" alt="Valorant logo" />
      </div>
      <div className="grid-container-content">
        <div className="left-menu-wrap">
          <ul className="sidemenu val-border">
            <li>
              <Link className="link" to="/valorant">
                ZPĚT
              </Link>
            </li>
            <li>
              <Link className="link" to="/valorantAbout">
                O HŘE
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidemenu-border val-border">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <ul className="ul-body">
              {valorantChamps.map((valorantChamp) => (
                <li key={valorantChamp._id}>
                  <button
                    type="button"
                    onClick={() =>
                      props.history.push(
                        `/valorantChamps/${valorantChamp._id}/`
                      )
                    }
                  >
                    <div className="img-cart">
                      <img
                        className="nahled"
                        src={valorantChamp.nahled}
                        alt={valorantChamp.name}
                      />
                      <div>{valorantChamp.name}</div>
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
