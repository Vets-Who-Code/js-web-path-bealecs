import FeedbackStyles from './CSS_Modules/Feedback.module.css';

export const Feedback = () => {

    return (
        <>
            <form className={FeedbackStyles.feedbackForm}>
                    <h3>Leave some feedback about the site</h3>
                    <label htmlFor="feedback-name">Name</label>
                    <input type="text" id="feedback-name" placeholder="Name..." />
                    <label htmlFor="feedback-msg">Feedback</label>
                    <textarea id="feedback-msg" placeholder="Feedback..."></textarea>
                    <button type="submit" className={FeedbackStyles.submitFeedback}>Submit Feedback</button>
                </form>
        </>
    )
}