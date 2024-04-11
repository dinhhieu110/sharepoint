import React, { useState } from 'react';
import './howDoI.scss';
import SearchIcon from '@mui/icons-material/Search';
import QuestionCard from '../cards/questioncard/QuestionCard';
import { questions } from '../../data/questions.js';
function HowDoI() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    if (selected === id) {
      return setSelected(null);
    } else {
      setSelected(id);
    }
  };

  return (
    <div className="how-container">
      <h2
        className="how-title"
        style={{ color: '#444444', marginBottom: '10px' }}
      >
        How Do I
      </h2>
      <div className="search-question" style={{ marginBottom: '5px' }}>
        <button className="searchQuestionBtn">
          <SearchIcon />
        </button>
        <input type="text" placeholder="Find Questions" />
      </div>
      <div className="questions">
        {questions.map((q, index) => (
          <QuestionCard
            key={q.id}
            id={q.id}
            question={q.question}
            answer={q.answer}
            selected={selected}
            handleSelect={handleSelect}
          />
        ))}
      </div>
      <a
        href="##"
        style={{ textDecoration: 'none', fontSize: '14px', color: '#0074BD' }}
      >
        <p>
          View more{' '}
          <span style={{ fontWeight: '700', fontSize: '10px' }}> &gt;&gt;</span>
        </p>
      </a>
    </div>
  );
}

export default HowDoI;
