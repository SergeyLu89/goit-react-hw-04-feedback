import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ names, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={css.feedbackBtnList}>
        {names.map(name => {
          return (
            <li key={name}>
              <button
                type="button"
                name={name}
                className={css.feedbackBtn}
                onClick={() => {
                  onLeaveFeedback(name);
                }}
              >
                {name.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
