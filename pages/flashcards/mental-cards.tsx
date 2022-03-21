import React from "react"
import { Layout } from "../../components/layout";
import questions from "../../data/data-questions"

type Questions = {
  type: string;
  question: string;
  answer: string;
  answer2: string;
  answer3: string;
}

const MentalCard: React.FC = () => {
  const [question, setQuestion] = React.useState("My first question")
  const [answer, setAnswer] = React.useState("Answer to my first question")
  const [flag, setFlag] = React.useState(true)
  const [dataQuestion, setDataQuestions] = React.useState(questions)

  function organiseData(){
    return setDataQuestions(questions.filter((item: Questions ) => item.type === "Mental"))
  }
  console.log(dataQuestion)

  function loadQuestion (): void {
    const generateRandom: number = Math.round(Math.random()*(dataQuestion.length-1));
    if(flag === false){
    setQuestion(dataQuestion[generateRandom].question)
    setAnswer(dataQuestion[generateRandom].answer)
    console.log("test2", flag)
  }
    setFlag(!flag)
  }

  function loadAnswer (): void {
    setFlag(!flag)
  }

  return (
    <Layout>
    <div onClick={() => {organiseData(); loadQuestion() }}>{flag ? question : answer}</div>
    </Layout>
  )
}

export default MentalCard;
