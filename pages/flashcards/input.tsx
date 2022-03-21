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

// type MyTypedReactComponentProps = {
//   questions: Questions [];
// };

const InputCard: React.FC = () => {
  const [question, setQuestion] = React.useState("My first question")
  const [answer, setAnswer] = React.useState("Answer to my first question")
  const [playerAnswer, setPlayerAnswer] = React.useState("")
  const [answerFlag, setAnswerFlag] = React.useState(false)
  const [displayQuestion, setDisplayQuestion] = React.useState(true)
  const [dataQuestion, setDataQuestions] = React.useState(questions)


  function organiseData(){
    return setDataQuestions(questions.filter((item: Questions ) => item.type === "Input"))
  }

  function loadQuestion (): void {
    setDisplayQuestion(true)
    const generateRandom: number = Math.round(Math.random()*(dataQuestion.length-1));
    setQuestion(dataQuestion[generateRandom].question)
    setAnswer(dataQuestion[generateRandom].answer)
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
      <div className="form-group">
        <label htmlFor="questionAnswer">Answer</label>
        <input
          onChange={(e) => setPlayerAnswer(e.target.value)}
          type="text"
          className="form-control"
          id="answer"
          />
      </div>

      <button type="submit" className="btn btn-primary" onClick={loadResponse} >
        Submit
      </button>
    </form>
    </>
      : <div onClick={()=> {loadQuestion(); organiseData()}}>{answerFlag ? <p>✅ Good answer</p> : <p>❌ Wrong answer</p> }</div>}
  </Layout>
  )
}

export default InputCard;
