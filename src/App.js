import React from "react";
import { BrowserRouter, Route, Switch } from "react-scripts";
import "./HomePage";
import "./EditPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="./edit">
            <HomePage path="/">
              <EditPage></EditPage>
            </HomePage>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

/*
class App extends React.Component {
  state = {
    response: null,
  };

  componentDidMount() {
    axios.get("http://a79799842e12.ngrok.io/edit/info").then((result) => {
      console.log(result);
      this.setState({
        response: result.data.messages,
      });
    });
  }
  render() {
    return <Wrapper>{this.state.response}</Wrapper>;
  }
}
*/

export default App;
