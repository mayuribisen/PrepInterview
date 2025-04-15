import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const topics = [
    { title: "HTML", desc: "Basic to Advanced", path: "/htmlpage" },
    { title: "CSS", desc: "Layout, Flexbox, Grid", path: "/csspage" },
    { title: "Bootstrap", desc: "Grid, Components", path: "/bootpage" },
    { title: "JavaScript", desc: "Concepts, ES6+", path: "/jspage" },
    { title: "React", desc: "Hooks, State", path: "/reactpage" },
    
  ];

  return (
    <div className='parent-div'>
    <div className="container mt-5 text-center">
      <h1 className="display-3 text-primary">🚀Interview Buddy</h1>
      <p className="lead">Master Frontend Interviews with confidence!</p>

      <p className="mt-3">Select a topic from the top navigation to begin your preparation.</p>

      {/* All cards in a single row without scrolling */}
      <div className="row justify-content-center mt-4">
        {topics.map((item, index) => (
          <div
            key={index}
            className="col-6 col-sm-4 col-md-2 mb-3"
            onClick={() => navigate(item.path)}
            style={{ cursor: "pointer" }}
          >
            <div className="card h-100 shadow-sm">
              <div className="card-body p-2">
                <h6 className="mb-1 fw-bold">{item.title}</h6>
                <small>{item.desc}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-primary mt-4" onClick={() => navigate("/htmlpage")}>
        Start with HTML
      </button>
    </div>
    </div>
  );
}

export default Home;
