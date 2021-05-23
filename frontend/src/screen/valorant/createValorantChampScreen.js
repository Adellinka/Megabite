import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createValorantChamp } from "../../actions/valorantActions";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { VALORANT_CHAMP_CREATE_RESET } from "../../constants/valorantConstants";

export default function CreateValorantChampScreen(props) {
  const [name, setName] = useState("");
  const [nahled, setNahled] = useState("");
  const [zakladni, setZakladni] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createValorantChamp(name, nahled, zakladni, description));
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const valorantChampCreate = useSelector((state) => state.valorantChampCreate);
  const { success: successCreate } = valorantChampCreate;

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("zakladni", file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setZakladni(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const uploadNahledFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("nahled", file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setNahled(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: VALORANT_CHAMP_CREATE_RESET });
      props.history.push("/valorantChamps");
    }
  }, [dispatch, props.history, successCreate]);
  return (
    <div>
      <div className="row mt-50">
        <img className="big" src="../../images/valor.png" alt="Valorant Logo" />
      </div>
      <div className="grid-form-container">
        <div className="form-nadpis">
          <h3>Vytvoř nového šampiona</h3>
        </div>
        <form className="form" onSubmit={submitHandler}>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
            <label htmlFor="name">Jméno šampiona</label>
            <input
              type="text"
              id="name"
              placeholder="Zadejte jméno"
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label htmlFor="imageFile">Náhled File</label>
            <input
              name="nahled"
              type="file"
              id="nahledFile"
              label="Choose image"
              onChange={uploadNahledFileHandler}
            />
            {loadingUpload && <LoadingBox></LoadingBox>}
            {errorUpload && (
              <MessageBox variant="danger">{errorUpload}</MessageBox>
            )}
            <label htmlFor="imageFile">Základní File</label>
            <input
              name="zakladni"
              type="file"
              id="imageFile"
              label="Choose image"
              onChange={uploadFileHandler}
            />
            {loadingUpload && <LoadingBox></LoadingBox>}
            {errorUpload && (
              <MessageBox variant="danger">{errorUpload}</MessageBox>
            )}

            <label htmlFor="description">Popis šampiona</label>
            <input
              type="text"
              id="description"
              placeholder="Vložte popis"
              required
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            <div className="button-wrapper">
              <button type="submit" className="button">
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
