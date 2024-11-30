import React from "react";

const Opening = () => {
  return (
    <div id="opening">
      <div id="opening-outer">
        <div id="opening-inner">
          <h4>Hi there&#128075;, I am</h4>
          <h1>
            Dominicus <span>Dylan</span> Haryoto
          </h1>
          <h6>Welcome to my personal collections. Let's connect!</h6>
          <hr />
          <div>
            <input
              type="text"
              placeholder="Email Address"
              name="email"
              required
            />
            <a>
              <button>Send</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
