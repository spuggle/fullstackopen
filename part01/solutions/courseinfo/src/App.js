import React from "react";

const Header = props => (
  <>
    <h1>{props.course.name}</h1>
  </>
);

const Part = props => (
  <>
    <p>{props.part.name} {props.part.exercises}</p>
  </>
)

const Content = props => (
  <>
    <Part part={props.course.parts[0]} />
    <Part part={props.course.parts[1]} />
    <Part part={props.course.parts[2]} />
  </>
);

const Total = props => (
  <>
    <p>Number of exercises: {props.course.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
  </>
);

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      {
        name: "Fundamentals of react",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )

}

export default App;
