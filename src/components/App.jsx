// import React, {useState, useEffect, CSSProperties}  from "react";
// import Header from "./Header";
// import ClipLoader from "react-spinners/ClipLoader";

// const override = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "black",
//   };


// function App(){
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         setLoading(true)
//         setTimeout(() => {
//             setLoading(false)

//         },8000)

//     }, [])
//     const [data,setData] = useState(null)
//     const [print,setPrint] = useState(false)

//     function getData(val){
        
//         setData(val.target.value)
//         console.warn(val.target,val)
//     }

//   let [color, setColor] = useState("#ffffff");
//     return (
//         <div>
//         <div className="sweet-loading">
//       {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
//       <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

//       <ClipLoader
//         color={color}
//         loading={loading}
//         cssOverride={override}
     
//         size={150}
//         aria-label="Loading Spinner"
//         data-testid="loader"
//       />
//     </div>
//         {/* {
//             loading ?

//         <ClipLoader
//         color={}
//         loading={loading}
    
//         size={50}
//         aria-label="Loading Spinner"
//         data-testid="loader"

//       />
//       : */}
        
//         <div>
//         <Header />

//         </div>
//         {/* } */}

        

//         <div >

        
//         <h1 className="fieldText"> Enter the link!</h1>
//         <input className = "text" onChange={getData}/>
        
//         <button className="btn"onClick={() => setLoading(!loading)}> Submit </button>
        
//         </div>

            
            
            
//         </div>

        
        
//     );
// }

// export default App;

/*
import React, { useState, useEffect } from "react";
import Header from "./Header";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  function getData(val) {
    setData(val.target.value);
    console.warn(val.target, val);
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <h1 className="fieldText">Enter the link!</h1>
        <input className="text" onChange={getData} />

        <button className="btn" onClick={() => setLoading(!loading)}>
          Submit
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <ClipLoader
          color={"#ffffff"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default App;
*/



/*
import React, { useState, useEffect } from "react";
import Header from "./Header";
import ClockLoader from "react-spinners/ClockLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  function getData(val) {
    setData(val.target.value);
    console.warn(val.target, val);
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <h1 className="fieldText">Enter the link!</h1>
        <input className="text" onChange={getData} />

        <button className="btn" onClick={() => setLoading(!loading)}>
          Submit
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <ClockLoader
          color={"#ffffff"}
          loading={loading}
          size={100}
          css={{
            width: "80px",
            height: "80px",
            // Width: "100px",
            transform: "scale(10)",
          }}
        />
      </div>
    </div>
  );
}

export default App;*/




/*
import React, { useState, useEffect } from "react";
import Header from "./Header";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  function getData(val) {
    setData(val.target.value);
    console.warn(val.target, val);
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <h1 className="fieldText">Enter the link!</h1>
        <input className="text" onChange={getData} />

        <button className="btn" onClick={() => setLoading(!loading)}>
          Submit
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
        }}
      >
        <PacmanLoader
          color={"#ffffff"}
          loading={loading}
          size={50}
          css={{
            width: "100px",
            height: "100px",
            transform: "scale(1.5)",
            border: "4px solid black",
          }}
        />
      </div>
    </div>
  );
}

export default App;
*/

/*

import React, { useState, useEffect } from "react";
import Header from "./Header";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowLoader(false);
    }, 30000); // Display the loader for 30 seconds
  }, []);

  function getData(val) {
    setData(val.target.value);
    console.warn(val.target, val);
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <h1 className="fieldText">Enter the link!</h1>
        <input className="text" onChange={getData} />

        <button className="btn" onClick={() => setLoading(!loading)}>
          Submit
        </button>
      </div>

      {showLoader && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <PacmanLoader
            color={"#ffffff"}
            loading={loading}
            size={50}
            css={{
              width: "100px",
              height: "100px",
              transform: "scale(1.5)",
              border: "4px solid black",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;


*/


import React, { useState } from "react";
import Header from "./Header";
import PacmanLoader from "react-spinners/PacmanLoader";
import VideoAnalyzer from './VideoAnalyzer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResultPage from './ResultPage';

function App() {

 <VideoAnalyzer />

//  return (
//   <Router>
//     <Switch>
//       <Route exact path="/" component={VideoAnalyzer} />
//       <Route path="/result" component={ResultPage} />
//     </Switch>
//   </Router>
// );

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  function getData(val) {
    setData(val.target.value);
    console.warn(val.target, val);
  }

  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 30000);
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <h1 className="fieldText">Enter the link!</h1>
        <input className="text" onChange={getData} />

        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <PacmanLoader
            color={"#ffffff"}
            size={50}
            css={{
              width: "100px",
              height: "100px",
              transform: "scale(1.5)",
              border: "4px solid black",
            }}
          />
        </div>
      )}
    </div>
  );
}



export default App;
