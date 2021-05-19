import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLolChamp } from "../../actions/lolActions";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { LOL_CHAMP_CREATE_RESET } from "../../constants/lolConstants";

export default function CreateLolChampScreen(props) {
  const [name, setName] = useState("");
  const [nahled, setNahled] = useState("");
  const [zakladni, setZakladni] = useState("");
  const [skin, setSkin] = useState([]);
  const [nadpis, setNadpis] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createLolChamp(name, nahled, zakladni, skin, nadpis, description));
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const lolChampCreate = useSelector((state) => state.lolChampCreate);
  const { success: successCreate } = lolChampCreate;

  const uploadFileHandler = async (e) => {
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
  const uploadZakladniFileHandler = async (e) => {
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

  const uploadSkinFileHandler = async (e) => {
    // e = event
    let files = []; //proměnná files - pole
    let fileKeys = Object.keys(e.target.files); // e.target.files(Objects) → soubor1, soubor2, soubor3 (skiny). Klíč
    fileKeys.forEach(function (key) {
      files.push(e.target.files[key]); //push posílá soubory do files na základě jejich klíče (klíč = název). files[soubor1, soubor2, soubor3]
    });

    const bodyFormDataSkin = new FormData();
    files.forEach((file) => bodyFormDataSkin.append("skin", file)); //bodyFormDataSkin → [("skin", soubor1), ("skin", soubor2), ("skin", soubor3)]
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post("/api/uploads", bodyFormDataSkin, {
        headers: {
          "Content-type": "multipart/form-data", //povinný řádek idk why
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      let structuredData = String(data).split(",");
      structuredData.pop();
      for (let i = 0; i < structuredData.length; i++) {
        setSkin((prevState) => [...prevState, structuredData[i]]);
      }

      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: LOL_CHAMP_CREATE_RESET });
      props.history.push("/lolChamps");
    }
  }, [dispatch, props.history, successCreate]);
  return (
    <div>
      <div className="row mt-50">
        <img className="big" src="../../images/logolol.png" alt="logolol" />
      </div>
      <div className="grid-form-container">
        <div className="form-nadpis">
          <h3 className="center-align">Create New Champion</h3>
        </div>
        <form className="form" onSubmit={submitHandler}>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label htmlFor="nadpis">Nadpis</label>
            <input
              type="text"
              id="nadpis"
              placeholder="Enter nadpis"
              onChange={(e) => setNadpis(e.target.value)}
            ></input>
            <label htmlFor="nahledFile">Nahled File</label>
            <input
              name="nahled"
              type="file"
              id="nahledFile"
              label="Choose image"
              onChange={uploadFileHandler}
            />
            {loadingUpload && <LoadingBox></LoadingBox>}
            {errorUpload && (
              <MessageBox variant="danger">{errorUpload}</MessageBox>
            )}
            <label htmlFor="zakladniFile">Zakladni File</label>
            <input
              name="zakladni"
              type="file"
              id="zakladniFile"
              label="Choose image"
              onChange={uploadZakladniFileHandler}
            />
            {loadingUpload && <LoadingBox></LoadingBox>}
            {errorUpload && (
              <MessageBox variant="danger">{errorUpload}</MessageBox>
            )}
            <label htmlFor="skinFile">Skin File</label>
            <input
              multiple
              name="skin"
              type="file"
              id="skinFile"
              label="Choose skin image"
              onChange={uploadSkinFileHandler}
            />
            {loadingUpload && <LoadingBox></LoadingBox>}
            {errorUpload && (
              <MessageBox variant="danger">{errorUpload}</MessageBox>
            )}
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Enter description"
              required
              rows="6"
              columns="60"
              className="formattedTextArea"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
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
