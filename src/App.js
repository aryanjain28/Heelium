import './global.css';
import { AppHeaderContainer } from "./Container/AppHeaderContainer"
import { AppBodyContainer } from './Container/AppBodyContainer';

function App() {
  return (
    <div className="App">
      <AppHeaderContainer />
      <AppBodyContainer />
    </div>
  );
}

export default App;
