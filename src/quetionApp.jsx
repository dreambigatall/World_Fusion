/* eslint-disable react/no-unknown-property */
/* eslint-disable no-case-declarations */
import { useReducer, useState } from 'react';
import Form from './components/form';
import Questions from './components/Quetions';
import Error from './components/Error';
import capitaleasy from  "./data/capital/capitaleasy.json"
import capitalhard from "./data/capital/capitalhard.json"
import capitalmidium from "./data/capital/capitalmidium.json"
import countryeasy from "./data/country/countryeasy.json"
import countryhard from "./data/country/countryhard.json"
import countrymidium from "./data/country/countrymidium.json"
import flageasy from "./data/flag/flageasy.json"
import flaghard from "./data/flag/flaghard.json"
import flagmidium from "./data/flag/flagmidium.json"
import FinishScreen from './components/finishScreen';
import AlertScreen from './components/AlertScreen';
import { createPortal } from 'react-dom';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const initialState = {
  questions: [],
  status: 'form',
  error: '',
  index: 0,
  points: 0,
  timeRemaining: undefined,
  highScore: 0,
  answer: null,
  length: undefined,
  prevGameHS: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      console.log(action.payload.highScore);
      if (
        action.payload.inputs.topic === '' &&
        action.payload.inputs.mode === ''
      ) {
        return { ...state, error: 'Select Topic and Mode' };
      } else if (action.payload.inputs.topic === '') {
        return { ...state, error: 'Select Topic' };
      } else if (action.payload.inputs.mode === '') {
        return { ...state, error: 'Select Mode' };
      } else {
        if (
          action.payload.inputs.topic === 'City' &&
          action.payload.inputs.mode === 'EASY'
        )
          return {
            ...state,
            status: 'active',
            error: '',
            questions: capitaleasy,
            length: capitaleasy.length,
            timeRemaining: capitaleasy.length * 15,
            prevGameHS:
              state.prevGameHS > action.payload.highScore
                ? state.prevGameHS
                : action.payload.highScore,
          };
        if (
          action.payload.inputs.topic === 'City' &&
          action.payload.inputs.mode === 'MEDIUM'
        )
          return {
            ...state,
            status: 'active',
            error: '',
            questions: capitalmidium,
            length: capitalmidium.length,
            timeRemaining: capitalmidium.length * 15,
            prevGameHS:
              state.prevGameHS > action.payload.highScore
                ? state.prevGameHS
                : action.payload.highScore,
          };
        if (
          action.payload.inputs.topic === 'City' &&
          action.payload.inputs.mode === 'HARD'
        )
          return {
            ...state,
            status: 'active',
            error: '',
            questions: capitalhard,
            length: capitalhard.length,
            timeRemaining: capitalhard.length * 15,
            prevGameHS:
              state.prevGameHS > action.payload.highScore
                ? state.prevGameHS
                : action.payload.highScore,
          };
        if (
          action.payload.inputs.topic === 'Flag' &&
          action.payload.inputs.mode === 'EASY'
        )
          return {
            ...state,
            status: 'active',
            error: '',
            questions: flageasy,
            length: flageasy.length,
            timeRemaining: flageasy.length * 15,
            prevGameHS:
              state.prevGameHS > action.payload.highScore
                ? state.prevGameHS
                : action.payload.highScore,
          };
        if (
          action.payload.inputs.topic === 'Flag' &&
          action.payload.inputs.mode === 'MEDIUM'
        )
          return {
            ...state,
            status: 'active',
            error: '',
            questions: flagmidium,
            length: flagmidium.length,
            timeRemaining: flagmidium.length * 15,
            prevGameHS:
              state.prevGameHS > action.payload.highScore
                ? state.prevGameHS
                : action.payload.highScore,
          };
        if (
          action.payload.inputs.topic === 'Flag' &&
          action.payload.inputs.mode === 'HARD'
        )
          return {
            ...state,
            status: 'active',
            error: '',
            questions: flaghard,
            length: flaghard.length,
            timeRemaining: flaghard.length * 15,
            prevGameHS:
              state.prevGameHS > action.payload.highScore
                ? state.prevGameHS
                : action.payload.highScore,
          };
        if (
          action.payload.inputs.topic === 'Country' &&
          action.payload.inputs.mode === 'EASY'
        )
          return {
            ...state,
            status: 'active',
            error: '',
            questions: countryeasy,
            length: countryeasy.length,
            timeRemaining: countryeasy.length * 15,
            prevGameHS:
              state.prevGameHS > action.payload.highScore
                ? state.prevGameHS
                : action.payload.highScore,
          };
        if (
          action.payload.inputs.topic === 'Country' &&
          action.payload.inputs.mode === 'MEDIUM'
        )
          return {
            ...state,
            status: 'active',
            error: '',
            questions: countrymidium,
            length: countrymidium.length,
            timeRemaining: countrymidium.length * 15,
            prevGameHS:
              state.prevGameHS > action.payload.highScore
                ? state.prevGameHS
                : action.payload.highScore,
          };
        if (
          action.payload.inputs.topic === 'Country' &&
          action.payload.inputs.mode === 'HARD'
        )
          return {
            ...state,
            status: 'active',
            error: '',
            questions: countryhard,
            length: countryhard.length,
            timeRemaining: countryhard.length * 15,
            prevGameHS:
              state.prevGameHS > action.payload.highScore
                ? state.prevGameHS
                : action.payload.highScore,
          };
        
      }
      break;

    case 'new':
      const question = state.questions.at(state.index);
      return {
        ...state,
        points:
          question.correctAnswer === action.payload
            ? state.points + 1
            : state.points,
        answer: action.payload,
      };
    case 'runnng':
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
        status: state.timeRemaining === 1 ? 'finish' : state.status,
        points: state.points,
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case 'next':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case 'finish':
      return {
        ...state,
        status: 'finish',
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case 'restart':
      return { ...state, ...initialState, highScore: state.highScore };
  }
}

function AppQuetion() {
  // APP COMPONENT
  const [dialog, setDialog] = useState(false);
  const [theme, setTheme] = useState('light');
  const [
    {
      questions,
      error,
      index,
      status,
      answer,
      length,
      points,
      highScore,
      timeRemaining,
      prevGameHS,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <div  theme={theme}>
      <div id='dialog'></div>
      {(status === 'form' || status === 'finish') && (
        <Header setTheme={setTheme} theme={theme} />
      )}
      <Main>
        {status === 'form' && (
          <>
            <h2 class="text-xl font-bold text-left m-3 text-blue-500">
  Navigate the Globe, Conquer Geography!
</h2>
            <Form
              dispatch={dispatch}
              highScore={highScore}
              prevGameHS={prevGameHS}
            />
          </>
        )}
        {error && <Error error={error} />}
        {status === 'active' && (
          <Questions
            questions={questions[index]}
            dispatch={dispatch}
            answer={answer}
            length={length}
            index={index}
            timeRemaining={timeRemaining}
            setDialog={setDialog}
          />
        )}
        {status === 'finish' && (
          <>
            <FinishScreen
              dispatch={dispatch}
              points={points}
              highScore={highScore}
              length={length}
              timeRemaining={timeRemaining}
              prevGameHS={prevGameHS}
            />
            <Footer />
          </>
        )}
        {dialog &&
          createPortal(
            <AlertScreen dispatch={dispatch} setDialog={setDialog} />,
            document.querySelector('#dialog')
          )}
      </Main>
    </div>
  );
}

export default AppQuetion;