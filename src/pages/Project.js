import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './projects.js';
import './pages.css';

function Project() {
  const [imgs, setImgs] = useState([]);
  const [text, setText] = useState("");
  const [id, setId] = useState(useParams().id);
  
  useEffect(() => {
    for(var i = 0; i < projects.length; i++) {
      var obj = projects[i];
      if(obj.url == id){
        setImgs(obj.imgs);
        setText(obj.text);
      } 
    }
  });

  return (
    <div className="content">
    <div className="page-title">{id}</div>
    {text}
    {imgs.map((value, index) => {
      return <img key={index} className="project-img" src={value} />
    })}
    </div>
  )
}

export default Project;