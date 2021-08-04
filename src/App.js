import  AppProvider from './appContexts/Provider';
import {AppContainer} from './pages/AppContainer/AppContainer';
import GlobalStyle from "./styles/global";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <AppContainer />
        <GlobalStyle />
      </div>

    </AppProvider>
  );
}

export default App;
