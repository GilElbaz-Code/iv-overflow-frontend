import {
  QuestionContainer,
  QuestionTitle,
  QuestionContent,
  UserInfo,
  TimeElapsed,
  TagContainer,
  Tag,
} from "./shared/SharedStyles";

const Question = ({ data }) => {
  const questionDate = new Date(data.date);
  const now = new Date();
  const timeElapsed = calculateTimeElapsed(questionDate, now);

  return (
    <QuestionContainer>
      <QuestionTitle>{data.title}</QuestionTitle>
      <QuestionContent>{data.content}</QuestionContent>
      <UserInfo>
        <UserName>{`Asked by ${data.created_by}`}</UserName>
        <TimeElapsed>{timeElapsed}</TimeElapsed>
      </UserInfo>
      <TagContainer>
        {data.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>
    </QuestionContainer>
  );
};

export default Question;
