import { app as appClasName } from './App.module.css';
import Exercise from '@/lecture/36-1 lifting-state-up';

console.log(appClasName);

function App() {
  return (
    <div className={appClasName}>
      <Exercise />
    </div>
  );
}

export default App;
