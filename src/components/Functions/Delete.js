import React from 'react'
import { Button } from 'react-bootstrap';

const Delete = ({ selectedIndex, setList, list }) => {

  const removing = () => {
    setList(list.filter((value, index)=>{
        return selectedIndex !== index
    }))
  };

  return (
    <div>
      <Button onClick={removing}>Delete</Button>
    </div>
  );
};

export default Delete;
