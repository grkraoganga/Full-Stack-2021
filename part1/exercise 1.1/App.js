import React from 'react'
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
      )
}

const Total = (props) => {
  return (
      <div>
         <h1><p> Number of exercises {props.exercises}</p></h1>
      </div>
    )
}
 const Part = (props) =>{
  return (
    <div>
        <h1> 
        <p>
        {props.part} {props.exercise}
      </p>

        </h1>
      </div>
  )
 }
const Content = (props) => {
  return (
      <div>
          <Part part = {props.part} exercise = {props.exercise}></Part>
      </div>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
 
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part = {part1} exercise = {exercises1}></Content>
      <Content part = {part2} exercise = {exercises2}></Content>
      <Content part = {part3} exercise = {exercises3}></Content>
      <Total  exercises = {exercises1 + exercises2 + exercises3}></Total>
    </div>
  )
}

export default App
