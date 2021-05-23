import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { useState } from "react";
import validator from "validator";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";

function ModalRegister(props) {
  const { handleClose, registerShow } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and confirm password are not match");
    } else if (!email.includes("@")) {
      alert("Invalid email");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div
      className={registerShow ? "modal display-block" : "modal display-none"}
    >
      {" "}
      <section className="modal-main">
        <div className="close-button">
          <button className="button-cross" type="button" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} size="1x" />
          </button>
        </div>
        <div className="grid-form-container">
          <h2 className="h2-modal">Registrace</h2>
          <form className="form" onSubmit={submitHandler}>
            {loading && <LoadingBox></LoadingBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <div>
              <label htmlFor="name">Jméno</label>
              <input
                type="text"
                id="name"
                placeholder="Zadejte jméno"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Zadejte email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Heslo</label>
              <input
                type="password"
                id="password"
                placeholder="Zadejte heslo"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="confirmPassword">Heslo znovu</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Zadejte heslo znovu"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="button-wrapper">
              <button className="button" type="submit">
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ModalRegister;
