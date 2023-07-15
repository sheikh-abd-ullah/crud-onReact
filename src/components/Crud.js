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
import Delete from "./Functions/Delete";
import Edit from "./Functions/Edit"

const Crud = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  const addToList = () => {
    setList([...list, { title: title, description: description }]);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Container className="mt-5">
        <div className="text-center">
          <h2 className="text-center">CRUD Operations</h2>
          <FormLabel className="label mt-2">Title: </FormLabel>
          <FormControl
            className="text-center"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <FormLabel className="label mt-3">Description: </FormLabel>
          <FormControl
            className="text-center"
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Button variant="success" className="mt-4" onClick={addToList}>
            Add to List
          </Button>
        </div>
        <br/>
        <br />
        <hr />
        <br />
        <div className="d-flex justify-content-center">
          {list.map((value, index) => {
            return (
              <Card className="m-2" style={{ width: 300 }}>
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.description}</Card.Text>
                  <hr />
                  <Delete selectedIndex={index} list={list} setList={setList} />
                  <Edit selectedIndex={index} list={list} setList={setList} />
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Crud;