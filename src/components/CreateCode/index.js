import { useState } from "react";
import "./styles.css";

const CreateCode = () => {
  const [urlInput, setUrlInput] = useState("");

  const handleChangeUrlInput = (e) => {
    const value = e?.target?.value;
    setUrlInput(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (urlInput !== "") {
      window.open(
        `http://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${urlInput}`,
        "_blank"
      );
      clearForm();
    }
  };

  const clearForm = () => {
    const form = document.getElementsByClassName("create__form")[0];
    form.reset();
    setUrlInput("");
  };

  return (
    <section className="create__container">
      <form className="create__form" onSubmit={handleSubmit}>
        <h5 className="create__title">Create your own QR code</h5>
        <input
          onChange={handleChangeUrlInput}
          className="create__url-input"
          type="url"
          placeholder="https://www.mysite.com"
        />
        <button className="create__submit-button" type="submit">
          QREATE!
        </button>
      </form>
    </section>
  );
};

export default CreateCode;
