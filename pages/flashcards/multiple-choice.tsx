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


const MultipleChoice: React.FC = () => {
  const [question, setQuestion] = React.useState("My first question")
  const [answer, setAnswer] = React.useState("Answer to my first question")
  const [answer2, setAnswer2] = React.useState("Answer to my second question")
  const [answer3, setAnswer3] = React.useState("Answer to my third question")
  const [playerAnswer, setPlayerAnswer] = React.useState("")
  const [answerFlag, setAnswerFlag] = React.useState(false)
  const [displayQuestion, setDisplayQuestion] = React.useState(true)
  const [dataQuestion, setDataQuestions] = React.useState(questions)
  const [flag, setFlag] = React.useState(true)


  function organiseData(){
    return setDataQuestions(questions.filter((item: Questions ) => item.type === "Multiple-choice"))
  }
  console.log(dataQuestion);

  function loadQuestion (): void {
    setDisplayQuestion(true)
    const generateRandom: number = Math.round(Math.random()*(dataQuestion.length-1));
    setQuestion(dataQuestion[generateRandom].question)
    setAnswer(dataQuestion[generateRandom].answer)
    setAnswer2(dataQuestion[generateRandom].answer2)
    setAnswer3(dataQuestion[generateRandom].answer3)
    setFlag(!flag)
    setAnswerFlag(false)
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log("test", e);
    console.log("You clicked submit.");
  }

  function loadResponse(){
    setDisplayQuestion(!displayQuestion)
    if(playerAnswer === answer){
      setAnswerFlag(true)
    }
  }

  return (
    <Layout>
    {displayQuestion ?
    <>
      <p> {question} </p>
      <form onSubmit={handleSubmit}>
      <ul>
          <input type="checkbox" onClick={()=>setPlayerAnswer(answer)}/>{answer}<br></br>
          <input type="checkbox" onClick={()=>setPlayerAnswer(answer2)}/>{answer2}<br></br>
          <input type="checkbox" onClick={()=>setPlayerAnswer(answer3)}/>{answer3}<br></br>
      </ul>
      <button type="submit" className="btn btn-primary" onClick={loadResponse}>
        Submit
      </button>
    </form>
    </>
    : <div onClick={() => {loadQuestion(); organiseData()}}>{answerFlag ? <p>✅ Good answer</p> : <p>❌ Wrong answer</p> }</div>}

    </Layout>

  )
}

export default MultipleChoice;
