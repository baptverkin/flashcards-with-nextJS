type Questions = {
  type: string;
  question: string;
  answer: string;
  answer2: string;
  answer3: string;
}

const questions: Questions [] = [
  {
    type: "Mental",
    question: "My first question",
    answer: "Answer to my first question",
    answer2: "",
    answer3: "",
  },
  {
    type: "Mental",
    question: "My second question",
    answer: "Answer to my second question",
    answer2: "",
    answer3: "",
  },
  {
    type: "Mental",
    question: "My third question",
    answer: "Answer to my third question",
    answer2: "",
    answer3: "",
  },
  {
    type: "Input",
    question: "My first question",
    answer: "Answer to my first question",
    answer2: "",
    answer3: "",
  },
  {
    type: "Input",
    question: "My second question",
    answer: "Answer to my second question",
    answer2: "",
    answer3: "",
  },
  {
    type: "Input",
    question: "My third question",
    answer: "Answer to my third question",
    answer2: "",
    answer3: "",
  },
  {
    type: "Multiple-choice",
    question: "My first question",
    answer: "Answer to my first question",
    answer2: "Answer to my second question",
    answer3: "Answer to my third question"
  },
  {
    type: "Multiple-choice",
    question: "My second question",
    answer2: "Answer to my first question",
    answer: "Answer to my second question",
    answer3: "Answer to my third question"
  },
  {
    type: "Multiple-choice",
    question: "My third question",
    answer2: "Answer to my first question",
    answer3: "Answer to my second question",
    answer: "Answer to my third question"
  },
]

export default questions;
