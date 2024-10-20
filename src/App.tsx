// import Application from "./components/application/Application";
// import Counter from "./components/Counter";

import MuiMode from "./components/mui/MuiMode";
import AppProvider from "./providers/AppProvider";

const App = () => {
  return (
    <div>
      <AppProvider>
        {/* <Application /> */}
        {/* <Counter /> */}
        <MuiMode />
      </AppProvider>
    </div>
  );
};

export default App;
