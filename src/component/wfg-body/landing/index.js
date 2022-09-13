import React, {useState} from "react";
import SignIn from "./SignIn";

const Landing = () => {
  const [formStatus, setFormStatus] = useState("")

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setFormStatus("SUCCESS")
      } else {
        setFormStatus("ERROR")
      }
    };
    xhr.send(data);
  }

  return (
    <>
      {/* Hero Area */}
      <section className="hero-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 order-lg-2">
              <div className="hero-image">
                <img src="./images/undraw_in_sync.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="hero-content">
                <h1>Welcome! </h1>
                <p>
                  Please Sign-in to continue
                </p>
                <SignIn/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
