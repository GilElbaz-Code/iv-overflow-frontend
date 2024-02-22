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

const Card = ({ data }) => {
  const questionDate = new Date(data.date);
  const now = new Date();
  const timeElapsed = calculateTimeElapsed(questionDate, now);

  return (
    <CardContainer>
      <QuestionTitle>{data.title}</QuestionTitle>
      <QuestionBody>{data.content}</QuestionBody>
      <UserInfo>
        <UserName>
          asked <TimeElapsed>{timeElapsed}</TimeElapsed> by {data.created_by}
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
