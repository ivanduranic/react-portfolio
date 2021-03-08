import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="row my-auto justify-content-md-center">
        <div className="col-md-9" id="container2">
          <div className="App">
            <h6 id="contacts">
              Toronto, ON | Phone: +1 (437) 774-6800 | Email:
              ivan.duranic@gmail.com
            </h6>
            <h1 className="title">Contact Me</h1>
            <form
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}
}

export default App;
