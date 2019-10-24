import React, {Component} from 'react';
import QuestionGenerator from '../util/QuestionGenerator';
import Question from './Question';
import Result from './Result';


class NaijaQuiz extends Component {
  constructor(){
    super();
    this.state = {
      questionList: QuestionGenerator(),
      questionIndex: 0,
      score: 0
    }
    this.scoreQuestion = this.scoreQuestion.bind(this);
    this.showContent = this.showContent.bind(this);
  }

  showContent() {
    if(this.state.questionIndex < this.state.questionList.length){
      return <Question content={this.state.questionList[this.state.questionIndex]} scoreQuestion={this.scoreQuestion} />
    }
    return(
      <Result score={this.state.score} />
    )
  }

  scoreQuestion(value) {
    let question = this.state.questionList[this.state.questionIndex];
    this.setState((state) => {
      return {...state.questionIndex++}
    });
    console.log(value, this.state.questionIndex)
    if(value == question.answer){
      this.setState((state) => {
        return {...state.score++}
      });
    }
  }

  render(){
    return (
      <div>
        <h1>Do You Know Naija?</h1>
        {this.showContent()}
      </div>
    )
  }
}

export default NaijaQuiz;