import React from 'react';

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="text-center">
            <h1>Welcome to Home page</h1>

          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Block 1</h2>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Block 2</h2>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Block 3</h2>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

