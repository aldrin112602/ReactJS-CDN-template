const { useState } = React;

const App = () => {
    
    // set initial value to count 
    const [ count, setCount ] = useState(0);

    const Increment = () => {
        setCount(current => current + 1);
    }
    return (
      <>
        <div className="jumbotron text-center p-5">
          <h1>My First Bootstrap Page using ReactJS</h1>
          <p>Resize this responsive page to see the effect!</p>
           <button className="btn btn-lg btn-primary px-5" onClick={ Increment }>Click me to count: { count }</button>
        </div>

        <div className="container text-white">
          <div className="row gap-4 justify-content-center">
            <div className="col-sm-3 bg-dark p-3">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-3 bg-dark p-3">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-3 bg-dark p-3">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-3 bg-dark p-3">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-3 bg-dark p-3">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
            <div className="col-sm-3 bg-dark p-3">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
          </div>
        </div>
      </>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
