import styles from "./ContactForm.module.css"

export default function ContactForm(): JSX.Element {
    return (
        <div className={styles.ContactForm}>
            <form>
                <div>
                    <input type="text" placeholder="name" />
                </div>
                <div>
                    <input type="text" placeholder="email address" />
                </div>
                <div>
                    <textarea placeholder="message" cols="30" rows="5"></textarea>
                </div>
                <div>
                    <input type="button" value="send message" />
                </div>
            </form>
        </div>
    )
}
