import React from "react";
import InputCard from "./input";
import MentalCard from "./mental-cards";
import MultipleChoice from "./multiple-choice";
import { Layout } from "../../components/layout";
import questions from "../../data/data-questions"

const gameTypes: string[] = ["Mental","Input","Multiple-choice"];

type Questions = {
  type: string;
  question: string;
  answer: string;
  answer2: string;
  answer3: string;
}



export const Salade: React.FC = ({questions, questionType}) => {
  const [questionTypes, setQuestionTypes] = React.useState("")
  const [question, setQuestion] = React.useState("My first question")
  const [answer, setAnswer] = React.useState("Answer to my first question")
  const [dataQuestion, setDataQuestions] = React.useState(questions)
  const [displayQuestion, setDisplayQuestion] = React.useState(true)
  const [questionType, setQuestionType] = React.useState("Mental")


  function loadQuestion (): void {
    const generateRandom: number = Math.round(Math.random()*(questions.length-1));
    setQuestionTypes(questions[generateRandom].type)
  }

  function setFlashcard(e: any): void{
    console.log("test2", e)
    const generateRandom: number = Math.round(Math.random()*(questions.length-1));
    setQuestionType(questions[generateRandom].type)
    console.log("test3", questionType);

    console.log("test===", questionType)

  return (
    <>
    <div onClick={loadQuestion}>
      {questionTypes === "" ?
      (() => {
        if(questionType === gameTypes[0] ){
        return (
          <MentalCard questions={questions}/>
        )
      } else if (questionType === gameTypes[1]){
        return (
          <InputCard questions={questions}/>
          )
      }else {
        return (
          <MultipleChoice questions={questions}/>
          )
      }
      })
      :
      (() => {
        if(questionTypes === gameTypes[0] ){
        return (
        <MentalCard questions={questions}/>
        )
      } else if (questionTypes === gameTypes[1]){
        return (
          <InputCard questions={questions}/>
          )
      }else {
        return (
          <MultipleChoice questions={questions}/>
          )
      }
      })
       }
    </div>
    </>
  )
}
