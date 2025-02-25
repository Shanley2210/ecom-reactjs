import styles from '../styles.module.scss';
import Button from '@components/Button/Button';
import FormItem from '@pages/DetailProduct/Components/FormItem';

function ReViewProduct() {
    const {
        containerReview,
        review,
        noReview,
        replyForm,
        commentReplyTitle,
        commentNote,
        saveName,
        boxBtnSubmit
    } = styles;
    return (
        <div className={containerReview}>
            <div className={review}>REVIEWS</div>

            <p className={noReview}>There are no reviews yet.</p>

            <div className={replyForm}>
                <div className={commentReplyTitle}>
                    Be the first to review “Scelerisque eleifend”
                </div>

                <p className={commentNote}>
                    Your email address will not be published. Required fields
                    are marked
                </p>

                <form>
                    {/* RATING */}
                    <FormItem
                        label={'Your rating'}
                        typeChildren={'rating'}
                        isRequired
                    />

                    {/* YOUR REVIEW */}
                    <FormItem
                        label={'Your review'}
                        typeChildren={'textarea'}
                        isRequired
                    />

                    {/* NAME */}
                    <FormItem
                        label={'Name'}
                        typeChildren={'input'}
                        isRequired
                    />

                    {/* EMAIL */}
                    <FormItem
                        label={'Email'}
                        typeChildren={'input'}
                        isRequired
                    />

                    <div className={saveName}>
                        <input type='checkbox' />{' '}
                        <span>
                            Save my name, email, and website in this browser for
                            the next time I comment.
                        </span>
                    </div>

                    <div className={boxBtnSubmit}>
                        <Button content={'SUBMIT'} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReViewProduct;
