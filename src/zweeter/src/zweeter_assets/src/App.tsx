import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MenuBar from "./components/menubar";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Timeline from "./Pages/timeline";
import Profile from "./Pages/profile";
import Tweet from "./Pages/tweet";
import Authenticate from "./Pages/authenticate";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);
const theme = createTheme({
  palette: {
    primary: {
      main: "#ab47bc",
    },
    secondary: {
      main: "#ff9100",
    },
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<MenuBar />}>
              <Route index element={<Authenticate />} />
              <Route path="/home" element={<Timeline />} />
              <Route path="/profile/:profileName" element={<Profile />} />
              <Route path="/tweet/:id" element={<Tweet />} />
            </Route>
          </Routes>{" "}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
