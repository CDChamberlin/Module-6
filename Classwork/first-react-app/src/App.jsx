import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExampleComponent from "./components/exampleComponent";
import PropsDisplayer from "./components/PropsDisplayer";
import City from "./components/City";
import Pet from "./components/Pet";
import ComplexComment from "./components/ComplexComment";
import Comment from "./components/Comment";
import Callout from "./components/Callout";
import MoviesList from "./components/MoviesList";
import MoodChanger from "./components/Moodchanger";
import BirthdayTranslator from "./components/BirthdayTranslator";
import Weather from "./components/Weather";
import Movie from "./components/Movie";
import LoginForm from "./components/LoginForm";
import AddMovieForm from "./components/AddMovieForm";
import ExplodingBomb from "./components/ExplodingBomb";

function App() {
  const [count, setCount] = useState(0);

  const spiderman = {
    name: "Siderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };
  const spidyJSX = (
    <>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </>
  );

  // object storing comment data - passed as props
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* {spidyJSX}
      <ExampleComponent name="Cool Dude" />
      <PropsDisplayer />
      <City>
        <div>
          Newcastle is a harbour cit in the Australian state of New South Wales.
        </div>
      </City>
      <Pet type="cat" name="Shadow" colour="Black" />

      <FullName first="Jamie" last="Lamar" />
      <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout> */}

      <MoviesList />
      <ExplodingBomb></ExplodingBomb>
      {/* <MoodChanger />
      <BirthdayTranslator /> */}
      {/* <Weather />
      <Movie /> */}
      {/* <LoginForm /> */}

    </>
  );
}

export default App;