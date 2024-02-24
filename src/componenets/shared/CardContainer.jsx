import React from "react";
import { calculateTimeElapsed } from "../../utils/helpers";
import {
  CardContainer,
  QuestionTitle,
  QuestionBody,
  UserName,
  TimeElapsed,
  UserInfo,
  TagContainer,
  Tag,
} from "../../styles/CardContainerStyles";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const questionDate = new Date(data.date);
  const now = new Date();
  const timeElapsed = calculateTimeElapsed(questionDate, now);
  const questionId = data.question_id;
  const fullName = data.full_name;
  console.log(data);

  return (
    <CardContainer>
      <Link to={`/questions/${questionId}`}>
        <QuestionTitle>{data.title}</QuestionTitle>
      </Link>
      <QuestionBody>{data.content}</QuestionBody>
      <UserInfo>
        <UserName>
          asked <TimeElapsed>{timeElapsed}</TimeElapsed> by {fullName}
        </UserName>
        <TagContainer>
          {data.tags.map((tag) => (
            <Tag key={tag.id}>{tag}</Tag>
          ))}
        </TagContainer>
      </UserInfo>
    </CardContainer>
  );
};

export default Card;
