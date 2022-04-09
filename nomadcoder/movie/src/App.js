import React, {useState} from 'react';

function App() {
  const [loading,setLoading] = useState(true);
    return (
        <div>
          <h1>The Coins!</h1>
          {loading ? <strong>Loading...</strong> : null}
        </div>
    );
}

export default App;
