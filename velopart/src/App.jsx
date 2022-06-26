import './App.css';
import Counter from './Counter';
import Hello from './Hello';
import InputSample from './InputSample';

function App() {
  return (
    <>
    <Hello name="ririri" isSpecial={true}/>
    <Hello />
    <Counter />
    <InputSample/>
    </>
  );
}

export default App;
