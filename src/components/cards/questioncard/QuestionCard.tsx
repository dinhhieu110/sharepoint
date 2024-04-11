import React from 'react';
import './questionCard.scss';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
interface Props {
  id: number;
  question: string;
  answer: string;
  selected: number | null;
  handleSelect: (id: number) => void;
}

function QuestionCard(props: Props) {
  return (
    <div className="q-a">
      <div
        className={props.selected === props.id ? 'question bgc' : 'question'}
        onClick={() => props.handleSelect(props.id)}
      >
        {props.selected === props.id ? (
          <ArrowDropDownCircleIcon className="icon" />
        ) : (
          <PlayCircleFilledOutlinedIcon className="icon" />
        )}

        <p className="question-content">{props.question}</p>
      </div>
      <div className={props.selected === props.id ? 'answer show' : 'answer'}>
        <p className="answer-content">
          <span className="speaker">A:</span>
          {props.answer}
        </p>
      </div>
    </div>
  );
}

export default QuestionCard;
