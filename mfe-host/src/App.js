import React from 'react';

console.log('MFE HOST: ' + React.version);

const MFE1_Button = React.lazy(
  () => import('MFE1/Button')
);

const MFE2_Button = React.lazy(
  () => import('MFE2/Button')
);


function App() {
  return (
    <div>
      <h1>
        Micro-Frontend Host
      </h1>

      <div
        style={{
          margin: '10px',
          padding: '10px',
          width: '60%',
          border:
            '4px solid black',
        }}>
        <h3>
          Buttons from Module Federation
        </h3>
        <div>
          <React.Suspense fallback='Loading Button'>
            <MFE1_Button />
          </React.Suspense>
        </div>
        <div>
          <React.Suspense fallback='Loading Button'>
            <MFE2_Button />
          </React.Suspense>
        </div>

      </div>
    </div>
  );
}

export default App;
