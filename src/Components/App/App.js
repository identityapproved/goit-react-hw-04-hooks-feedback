import { FeedbackOptions } from 'Components/Feedback/Feedback';
import { Notification } from 'Components/Notification/Notification';
import { Section } from 'Components/Section/Section';
import { Statistic } from 'Components/Statistics/Statistics';
import React, { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;

  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const options = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please, leave feedback.">
        <FeedbackOptions options={options} leaveFeedback={onLeaveFeedback} />
      </Section>
      {totalFeedback ? (
        <Section title="Statistic:">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        </Section>
      ) : (
        <Notification message="No feedback given..." />
      )}
    </>
  );
}
