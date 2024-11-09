import React, { useState } from 'react';
import WinnerBefore from './components/Winnerbefore';
import WinnerAfter from './components/Winnerafter';
import First from './components/First';
import Second from './components/Second';

function App() {
  const [currentView, setCurrentView] = useState('');

  const handleBackToMain = () => setCurrentView('');

  return (
    <div>
      <h1>IPL Prediction</h1>

      {currentView === '' && (
        <div>
          <button onClick={() => setCurrentView('winnerPredictions')}>
            Winner Predictions
          </button>
          <button onClick={() => setCurrentView('scorePredictions')}>
            Score Predictions
          </button>
        </div>
      )}

      {currentView === 'winnerPredictions' && (
        <div>
          <button onClick={() => setCurrentView('winnerBefore')}>Winner Before Match</button>
          <button onClick={() => setCurrentView('winnerAfter')}>Winner After Inning</button>
          <button onClick={handleBackToMain}>Back</button>
        </div>
      )}

      {currentView === 'scorePredictions' && (
        <div>
          <button onClick={() => setCurrentView('firstInnings')}>First Innings Score Prediction</button>
          <button onClick={() => setCurrentView('secondInnings')}>Second Innings Score Prediction</button>
          <button onClick={handleBackToMain}>Back</button>
        </div>
      )}

      {currentView === 'winnerBefore' && (
        <WinnerBefore 
          onSubmit={(data) => console.log(data)}
          onBack={() => setCurrentView('winnerPredictions')}
        />
      )}
      
      {currentView === 'winnerAfter' && (
        <WinnerAfter 
          onSubmit={(data) => console.log(data)} 
          onBack={() => setCurrentView('winnerPredictions')} 
        />
      )}

      {currentView === 'firstInnings' && (
        <First 
          onSubmit={(data) => console.log(data)} 
          onBack={() => setCurrentView('scorePredictions')}
        />
      )}
      
      {currentView === 'secondInnings' && (
        <Second 
          onSubmit={(data) => console.log(data)} 
          onBack={() => setCurrentView('scorePredictions')} 
        />
      )}
    </div>
  );
}

export default App;
