import axios from "axios"
import { useState } from "react"
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

    const [name, setName] = useState<string>("")
    const [emailAddress, setEmailAddress] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hasData, setHasData] = useState<object>({})
    const [hasError, setHasError] = useState<object>({})

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (formData, event) => {
        event.preventDefault()

        try {
            setIsLoading(true)

            const { data = {}, status, statusText } = await axios.post(`/api/contact`, formData)

            setIsLoading(false)
            setHasData(data)

            setName("")
            setEmailAddress("")
            setMessage("")
        } catch (error) {
            // handle error 400
            const {
                response: {
                    data: { message },
                },
            } = error

            setIsLoading(false)
            setHasError({ message })

            setTimeout(() => {
                setHasError({})
            }, 2000)
        }

        return false
    }

    if (isLoading) {
        return <div>sending message... please wait</div>
    }

    if (Object.keys(hasError).length) {
        return <div>{hasError["message"]}</div>
    }

    if (Object.keys(hasData).length) {
        setTimeout(() => {
            setHasData({})
        }, 5000)

        return <div>{hasData["message"]}</div>
    }

    return (
        <div className={styles.ContactForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        placeholder="name"
                        {...register(FORM_NAMES.NAME, {
                            value: name,
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
                        onChange={(event) => setName(event.currentTarget.value)}
                    />
                    <ErrorMessage name={FORM_NAMES.NAME} as={`span`} errors={errors} />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="email address"
                        {...register(FORM_NAMES.EMAIL_ADDRESS, {
                            value: emailAddress,
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
                        onChange={(event) => setEmailAddress(event.currentTarget.value)}
                    />
                    <ErrorMessage name={FORM_NAMES.EMAIL_ADDRESS} as={`span`} errors={errors} />
                </div>
                <div>
                    <textarea
                        placeholder="message"
                        cols={30}
                        rows={5}
                        {...register(FORM_NAMES.MESSAGE, {
                            value: message,
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
                        onChange={(event) => setMessage(event.currentTarget.value)}
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
