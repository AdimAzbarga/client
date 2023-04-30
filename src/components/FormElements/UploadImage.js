import React, { useRef, useState, useEffect } from "react";

import Button from "./Button";
import Card from "./Card"
import "./UploadImage.css";

const UploadImage = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [showURL, setShowURL] = useState();
  const [file, setFile] = useState();
  const [isTouched, setIsTouched] = useState(false);

  const fileRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setShowURL(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const chooseImageHandler = () => {
    fileRef.current.click();
    if (!file) {
      setIsTouched(true);
    }
  };
  const ClickedHandler = (event) => {
    let selectefile;
    let fileIsValed = isValid;
    if (event.target.files && event.target.files.length === 1) {
      selectefile = event.target.files[0];
      setFile(selectefile);
      setIsValid(true);
      fileIsValed = true;
    } else {
      setIsValid(false);
      fileIsValed = false;
    }
    props.onInput(props.id, selectefile, fileIsValed);
  };

  return (
    <Card >
    <div className="form-control">
      <input
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".png,.jpg,.jpeg"
        ref={fileRef}
        onChange={ClickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {showURL && <img src={showURL} alt="Preview" />}
          {!showURL && <p>Select an Image</p>}
        </div>
        <Button type="button" onClick={chooseImageHandler}>
          Select 
        </Button>
     
      </div>
      <div
        className={`form-control ${
          !isValid && isTouched && "form-control--invalid"
        }`}
      >
        {!isValid && isTouched && <p>{props.errorText}</p>}
      </div>
    </div>
    </Card>
  );
};

export default UploadImage;
