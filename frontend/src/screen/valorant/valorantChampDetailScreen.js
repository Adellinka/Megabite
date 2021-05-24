import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  detailsChamp,
  listValorantChamps,
} from "../../actions/valorantActions";
import Slider from "infinite-react-carousel";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

export default function ValorantChampDetail(props) {
  const valorantChampId = props.match.params.id;

  const valorantChampDetails = useSelector(
    (state) => state.valorantChampDetails
  );
  const { loading, error, valorantChamp } = valorantChampDetails;

  const valorantChampList = useSelector((state) => state.valorantChampList);
  const {
    loading: loadingValorantChamps,
    error: errorValorantChamps,
    valorantChamps,
  } = valorantChampList;

  let sliderIndex = null;
  let showSlides = 11;
  const windowWidth = window.screen.availWidth;

  if (valorantChamps) {
    sliderIndex = valorantChamps.findIndex((x) => x._id === valorantChampId); // valorantChamps[_id = 60a52a4fe51c4124443cf33d, ...] hledání pozice
  }

  if (windowWidth <= 600) {
    showSlides = 1;
  }
  if (windowWidth > 600 && windowWidth <= 1000) {
    showSlides = 5;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsChamp(valorantChampId));
    dispatch(listValorantChamps());
  }, [dispatch, valorantChampId]);

  return (
    <div className="grid-container-content">
      <div></div>
      <div>
        <div className="row w-100">
          {loadingValorantChamps ? (
            <LoadingBox></LoadingBox>
          ) : errorValorantChamps ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Slider
              className="slider"
              slidesToShow={showSlides}
              initialSlide={sliderIndex}
              centerMode={true}
            >
              {valorantChamps.map((valorantChamp) => (
                <div key={valorantChamp._id} className="menu-cart">
                  <button
                    type="button"
                    onClick={() =>
                      props.history.push(`/valorantChamps/${valorantChamp._id}`)
                    }
                  >
                    <div className="menu-item">
                      <img
                        className="menuImg"
                        src={
                          String(valorantChamp.nahled).includes("images")
                            ? `../.${valorantChamp.nahled}`
                            : valorantChamp.nahled
                        }
                        alt={valorantChamp.name}
                      />
                      <h3>{valorantChamp.name}</h3>
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
                  <h2 className="mapName">{valorantChamp.name}</h2>
                </div>
                <div>
                  <img
                    className="valDetail"
                    src={
                      String(valorantChamp.zakladni).includes("images")
                        ? `../.${valorantChamp.zakladni}`
                        : valorantChamp.zakladni
                    }
                    alt={valorantChamp.name}
                  />
                </div>
              </div>
              <div className="mapDetailDesc">
                <div>
                  <p className="formattedText">{valorantChamp.description}</p>
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
