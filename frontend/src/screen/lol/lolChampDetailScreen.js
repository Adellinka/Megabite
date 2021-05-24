import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsChamp, listChamps } from "../../actions/lolActions";
import Slider from "infinite-react-carousel";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";

export default function LolChampDetail(props) {
  const lolChampId = props.match.params.id;

  const lolChampDetails = useSelector((state) => state.lolChampDetails);
  const { loading, error, lolChamp } = lolChampDetails;

  const champsList = useSelector((state) => state.champsList);
  const {
    loading: loadingLolChamps,
    error: errorLolChamps,
    lolChamps,
  } = champsList;

  const dispatch = useDispatch();

  let structuredData = []; // let = proměnná
  let images = null;
  let sliderIndex = null;
  let showSlides = 11;
  const windowWidth = window.screen.availWidth;

  if (lolChamps) {
    sliderIndex = lolChamps.findIndex((x) => x._id === lolChampId);
  }

  if (windowWidth <= 600) {
    showSlides = 1;
  }
  if (windowWidth > 600 && windowWidth <= 1000) {
    showSlides = 5;
  }

  if (lolChamp) {
    //lolChamp musí něco obsahovat, jinak se neprovede
    //"/uploads/nazev,/uploads/nazev2,"
    structuredData = String(lolChamp.skin).split(","); //abych mohla přidat víc skinů,musím ten string rozdělit pomocí splitu
    images = structuredData.map((image) => {
      return (
        <img
          key={image}
          src={String(image).includes("images") ? `../.${image}` : image}
          alt={lolChamp.name}
        />
      );
    });
  }

  useEffect(() => {
    dispatch(detailsChamp(lolChampId));
    dispatch(listChamps());
  }, [dispatch, lolChampId]);

  return (
    <div className="grid-container-content">
      <div></div>
      <div>
        <div className="row w-100">
          {loadingLolChamps ? (
            <LoadingBox></LoadingBox>
          ) : errorLolChamps ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Slider
              className="slider"
              slidesToShow={showSlides}
              initialSlide={sliderIndex}
              centerMode={true}
            >
              {lolChamps.map((lolChamp) => (
                <div key={lolChamp._id} className="menu-cart">
                  <button
                    type="button"
                    onClick={() =>
                      props.history.push(`/lolChamps/${lolChamp._id}`)
                    }
                  >
                    <div className="menu-item">
                      <img
                        className="menuImg"
                        src={
                          String(lolChamp.nahled).includes("images")
                            ? `../.${lolChamp.nahled}`
                            : lolChamp.nahled
                        }
                        alt={lolChamp.name}
                      />
                      <h3>{lolChamp.name}</h3>
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
                  <h2 className="mapName">{lolChamp.name}</h2>
                </div>
                <Slider
                  className="sliderDetail"
                  autoplay={true}
                  arrows={false}
                  autoplaySpeed={5000}
                >
                  <img
                    className="lolDetail"
                    src={
                      String(lolChamp.zakladni).includes("images")
                        ? `../.${lolChamp.zakladni}`
                        : lolChamp.zakladni
                    }
                    alt={lolChamp.name}
                  />
                  {images}
                </Slider>
              </div>
              <div className="mapDetailDesc">
                <h3>{lolChamp.nadpis}</h3>
                <div>
                  <p className="formattedText">{lolChamp.description}</p>
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
