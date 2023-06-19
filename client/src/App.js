import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import Configure from "./pages/Configure";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import QuizController from "./pages/QuizController";
import Reports from "./pages/Reports";
import ExamReview from "./pages/ExamReview";
import NotFound from "./pages/NotFound";
import Statistique from "./pages/Statistique";



function App() {
  var currentUserUid;

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
      
        <Route path="/home" element={<Home id={currentUserUid}/>}/>
        <Route path="/examreview/:id" element={<ExamReview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create/" element={<CreateQuiz />} />
        <Route path="/configure" element={<Configure />} />
        <Route path="/reports" element={<Reports id={currentUserUid} />} />
        <Route path="/Statistique/:id" element={<Statistique  />} />
        <Route path="/quiz" element={<QuizController />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
