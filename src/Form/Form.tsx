import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Form.module.css";
import Alert from "@material-ui/lab/Alert";

type inputForm = {
  username: string;
  email: string;
  text: string;
  isSubmit: boolean;
  open: boolean;
};

export const ContactForm: React.FC = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<inputForm>();

  const handleOnSubmit = () => {
    setIsSubmit(!isSubmit);
    reset();
  };
  return (
    <div>
      <h2 className={styles.title}>お問い合わせ</h2>
      {isSubmit && open && (
        <Alert onClose={() => handleClose()} severity="success">
          This is a success alert — check it out!
        </Alert>
      )}
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          {errors.username && (
            <span className={styles.error_message}>
              {errors.username.message}
            </span>
          )}
          <input
            className={styles.input}
            type="text"
            name="username"
            placeholder="Name"
            ref={register({ required: "※入力必須です" })}
          />
          <br />
          {errors.email && (
            <span className={styles.error_message}>{errors.email.message}</span>
          )}
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            ref={register({
              required: "※入力必須です",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "メールアドレスを入力してください",
              },
            })}
          />
          <br />
          {errors.text && (
            <span className={styles.error_message}>{errors.text.message}</span>
          )}
          <textarea
            className={styles.textarea}
            name="text"
            placeholder="Message"
            cols={40}
            rows={8}
            ref={register({ required: "※入力必須です" })}
          />
          <br />
          <input className={styles.submit} type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
