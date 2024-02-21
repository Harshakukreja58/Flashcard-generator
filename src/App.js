import "./App.css";
import { Provider } from "react-redux";

import Logobar from "./components/Logobar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FlashcardDetails from "./Pages/FlashcardDetails";
import MyFlashcards from "./Pages/MyFlashcards";
import PageNotFound from "./components/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import CreateFlashcard from "./Pages/CreateFlashcard";

function App() {
  return (
    <>
      <div className="App">
        <Logobar />
        <div>
          {/*wrap the entire app in redux provider */}
          <Provider store={store}>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/createflashcard" element={<CreateFlashcard />}>
                  Create Flashcard
                </Route>
                <Route path="/myflashcard" element={<MyFlashcards />}>
                  myflashcard
                </Route>
                <Route path="/flashcardDetails" element={<FlashcardDetails />}>
                  FlashcardDetails
                </Route>
                <Route path="/" element={<CreateFlashcard />}>
                  Default Page
                </Route>
                <Route path="*" element={<PageNotFound />}>
                  Page Not Found
                </Route>
              </Routes>
            </Router>
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App;
