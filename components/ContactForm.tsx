import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import styles from "./ContactForm.module.css"

interface FormNames {
    NAME: string
    MESSAGE: string
    EMAIL_ADDRESS: string
}

export default function ContactForm(): JSX.Element {
    const FORM_NAMES: FormNames = {
        NAME: `name`,
        MESSAGE: `message`,
        EMAIL_ADDRESS: `email_address`,
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data, event) => {
        event.preventDefault()
        console.log({ data })
    }

    const onError = (error, event) => {
        event.preventDefault()
        console.log({ error })
    }

    return (
        <div className={styles.ContactForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        placeholder="name"
                        {...register(FORM_NAMES.NAME, {
                            required: `${FORM_NAMES.NAME} is required`,
                            minLength: {
                                value: 3,
                                message: `${FORM_NAMES.NAME} is too short`,
                            },
                            maxLength: {
                                value: 160,
                                message: `${FORM_NAMES.NAME} is too long`,
                            },
                        })}
                    />
                    <ErrorMessage name={FORM_NAMES.NAME} as={`span`} errors={errors} />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="email address"
                        {...register(FORM_NAMES.EMAIL_ADDRESS, {
                            required: `${FORM_NAMES.EMAIL_ADDRESS.replace("_", " ")} is required`,
                            minLength: {
                                value: 5,
                                message: `${FORM_NAMES.EMAIL_ADDRESS.replace("_", " ")} is too short`,
                            },
                            maxLength: {
                                value: 160,
                                message: `${FORM_NAMES.EMAIL_ADDRESS.replace("_", " ")} is too long`,
                            },
                        })}
                    />
                    <ErrorMessage name={FORM_NAMES.EMAIL_ADDRESS} as={`span`} errors={errors} />
                </div>
                <div>
                    <textarea
                        placeholder="message"
                        cols={30}
                        rows={5}
                        {...register(FORM_NAMES.MESSAGE, {
                            required: `${FORM_NAMES.MESSAGE} is required`,
                            minLength: {
                                value: 5,
                                message: `${FORM_NAMES.MESSAGE} is too short`,
                            },
                            maxLength: {
                                value: 500,
                                message: `${FORM_NAMES.MESSAGE} is too long`,
                            },
                        })}
                    />
                    <ErrorMessage name={FORM_NAMES.MESSAGE} as={`span`} errors={errors} />
                </div>
                <div>
                    <input type="submit" value="send message" />
                </div>
            </form>
        </div>
    )
}
