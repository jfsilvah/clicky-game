import React from 'react';

const charCard = (props) => {

  return (
    <div onClick={() => props.counterCheck(props.character)} className="col-3 mt-3">
      <img alt={props.character} src={props.imageURL} />
    </div>
  )

}

export default charCard;