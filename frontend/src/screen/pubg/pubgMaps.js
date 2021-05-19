import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listMaps } from "../../actions/pubgActions";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

export default function PubgMaps(props) {
  const mapsList = useSelector((state) => state.mapsList);
  const { loading, error, pubgMaps } = mapsList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMaps());
  }, [dispatch]);
  return (
    <div>
      <div className="row"></div>

      <div className="row row-content pubg-border mt-50">
        <img className="big" src="./images/pubg3.png" alt="PUBG logo" />
      </div>
      <div className="grid-container-content">
        <div className="left-menu-wrap">
          <ul className="sidemenu pubg-border">
            <li>
              <Link className="link" to="/pubg">
                ZPĚT
              </Link>
            </li>
            <li>
              <Link className="link" to="/pubgAbout">
                O HŘE
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidemenu-border pubg-border">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <ul className="ul-body">
              {pubgMaps.map((pubgMap) => (
                <li key={pubgMap._id}>
                  <button
                    type="button"
                    onClick={() =>
                      props.history.push(`/pubgMaps/${pubgMap._id}/`)
                    }
                  >
                    <img
                      className="nahled pubg-nahled"
                      src={pubgMap.nahled}
                      alt={pubgMap.name}
                    />
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
