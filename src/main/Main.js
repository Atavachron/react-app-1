import React from "react";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <main>
          <article>
            <header>
              <h2>Article 1</h2>
            </header>
            <p>
              {this.props.greeting}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit odit nisi aliquam aperiam commodi esse repellat fuga
              perferendis mollitia? Odio id velit repellat laborum quos
              asperiores ut ex animi fuga.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit odit nisi aliquam aperiam commodi esse repellat fuga
              perferendis mollitia? Odio id velit repellat laborum quos
              asperiores ut ex animi fuga.
            </p>
          </article>
        </main>
      </div>
    );
  }
}

export default Main;
