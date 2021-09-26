import { FeedbackOptions } from 'Components/Feedback/Feedback';
import { Notification } from 'Components/Notification/Notification';
import { Section } from 'Components/Section/Section';
import { Statistic } from 'Components/Statistics/Statistics';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please, leave feedback.">
          <FeedbackOptions options={Object.keys(this.state)} leaveFeedback={this.onLeaveFeedback} />
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistic:">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given..." />
        )}
      </>
    );
  }
}
