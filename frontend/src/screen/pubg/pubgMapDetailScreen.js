import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsMap, listMaps } from "../../actions/pubgActions";
import Slider from "infinite-react-carousel";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

export default function PubgMapDetail(props) {
  const pubgMapId = props.match.params.id;

  const pubgMapDetails = useSelector((state) => state.pubgMapDetails);
  const { loading, error, pubgMap } = pubgMapDetails;

  const mapsList = useSelector((state) => state.mapsList);
  const { loading: loadingPubgMaps, error: errorPubgMaps, pubgMaps } = mapsList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsMap(pubgMapId));
    dispatch(listMaps());
  }, [dispatch, pubgMapId]);

  return (
    <div className="grid-container-content">
      <div></div>
      <div>
        <div className="row w-100">
          {loadingPubgMaps ? (
            <LoadingBox></LoadingBox>
          ) : errorPubgMaps ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Slider
              className="slider"
              slidesToShow={5}
              centerMode={true}
              adaptiveHeight={true}
            >
              {pubgMaps.map((pubgMap) => (
                <div key={pubgMap._id} className="menu-cart">
                  <button
                    type="button"
                    onClick={() =>
                      props.history.push(`/pubgMaps/${pubgMap._id}`)
                    }
                  >
                    <div className="menu-item">
                      <img
                        className="menuImg"
                        src={`../.${pubgMap.nahled}`}
                        alt={pubgMap.name}
                      />
                      <h3>{pubgMap.name}</h3>
                    </div>
                  </button>
                </div>
              ))}
            </Slider>
          )}
        </div>
        <div className="row w-100 mt-50">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div className="w-100">
              <div className="mapDetailContent">
                <div>
                  <h2 className="mapName">{pubgMap.name}</h2>
                </div>
                <div>
                  <img
                    className="mapDetail"
                    src={`../.${pubgMap.mapa}`}
                    alt={pubgMap.name}
                  />
                </div>
              </div>
              <div className="mapDetailDesc">
                <div>
                  <h3>{pubgMap.nadpis}</h3>
                  <p className="formattedText">{pubgMap.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}
