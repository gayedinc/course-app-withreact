import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import { courses } from './data'
import Course from './component/Course';
import "./component/css/Course.css";


function App() {
  return (
    <>
      <Header />

      <div className='course-main'>
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>

    </>
  );
}

export default App
