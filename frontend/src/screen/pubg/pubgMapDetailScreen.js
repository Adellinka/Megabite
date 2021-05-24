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

  let sliderIndex = null;
  let showSlides = 5;
  const windowWidth = window.screen.availWidth;

  if (pubgMaps) {
    sliderIndex = pubgMaps.findIndex((x) => x._id === pubgMapId); // valorantChamps[_id = 60a52a4fe51c4124443cf33d, ...] hledání pozice
  }

  if (windowWidth <= 600) {
    showSlides = 1;
  }

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
              slidesToShow={showSlides}
              initialSlide={sliderIndex}
              centerMode={true}
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
