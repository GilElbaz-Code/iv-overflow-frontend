import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = ({ data }) => {
  const history = useHistory();

  const handleCardClick = () => {
    // Redirect to the question details page
    history.push(`/question/${data.id}`);
  };

  return (
    <div onClick={handleCardClick}>
      {/* Render your question details in the card */}
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default Card;
