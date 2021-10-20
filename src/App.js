import './global.css';
import { AppHeaderContainer } from "./Container/AppHeaderContainer"
import { AppBodyContainer } from './Container/AppBodyContainer';
import { LoginContainer } from './Container/LoginContainer';

function App() {
  return (
    <div className="App">
      <LoginContainer />
      {/* <AppHeaderContainer /> */}
      {/* <AppBodyContainer /> */}
    </div>
  );
}

export default App;
