import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FormControl,
  FormLabel,
  Button,
  Col,
  Row,
  Container,
  Card,
} from "react-bootstrap";

const Edit = ({ selectedIndex, setList, list }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [isShow, setIsShow] = useState(false);

  const changeStuff = () => {
    setIsShow(true);
  };

  const handleEdit = () => {
    setList((prevList) =>
      prevList.map((value, index) => {
        if (index === selectedIndex) {
          return {
            ...value,
            title: newTitle,
            description: newDescription,
          };
        }
        return value;
      })
    );
    setIsShow(false);
  };

  return (
    <div>
      <Button onClick={changeStuff} className="mt-3">
        Edit
      </Button>
      <br />
      <br />
      {isShow === true ? (
        <>
          <FormLabel className="label mt-2">New Title: </FormLabel>
          <FormControl
            type="text"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
          <FormLabel className="label mt-1">New Description: </FormLabel>
          <FormControl
            type="text"
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
          />
          <Button className="mt-1" onClick={handleEdit}>Save</Button>
        </>
      ) : null}
    </div>
  );
};

export default Edit;