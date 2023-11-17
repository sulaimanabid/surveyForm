import { BrowserRouter, Route, Routes } from "react-router-dom";
import Survey from "./pages/surveyForm/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Survey/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
