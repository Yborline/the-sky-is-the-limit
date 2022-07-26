import React from "react";
import { Formik } from "formik";
import validationSchema from "../../validarion/contact";
import s from "./ContactForm.module.css";
import sprite from "../../images/icons/sprites.svg";

function ContactForm() {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "" }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={(values, formikProps) => {
          const { name, email } = values;

          console.log(name, email);
          formikProps.resetForm("");
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            name={values.email}
            data-netlify="true"
          >
            <ul className={s.list}>
              <li className={s.item}>
                {values.name.length > 0 && (
                  <label htmlFor="name" className={s.label}>
                    Enter your name
                    {!values.name.length || errors.name ? (
                      <span> </span>
                    ) : (
                      <></>
                    )}
                  </label>
                )}

                <br />
                <input
                  className={s.input}
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  maxLength="100"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <br />

                <span className={s.error}>
                  {touched.name && errors.name ? errors.name : ""}
                </span>
              </li>
              <li className={s.item}>
                {values.email.length > 0 && (
                  <label htmlFor="email" className={s.label}>
                    Enter email*
                    {!values.email.length || errors.email ? (
                      <span> </span>
                    ) : (
                      <></>
                    )}
                  </label>
                )}
                <br />
                <input
                  className={s.input}
                  type="email"
                  name="email"
                  placeholder="Enter email*"
                  maxLength="63"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <br />

                <span className={s.error}>
                  {touched.email && errors.email ? (
                    <span className={s.errorEmail}>
                      <svg className={s.svg} width="16" height="16">
                        <use href={`${sprite}#worning`}></use>
                      </svg>{" "}
                      {errors.email}
                    </span>
                  ) : (
                    ""
                  )}
                </span>
              </li>
            </ul>
            <div className={s.divButton}>
              <button
                className={s.button}
                type="submit"
                disabled={
                  (!isValid && dirty) ||
                  (!isValid && !dirty) ||
                  (Object.keys(touched).length === 0 &&
                    touched.constructor === Object)
                }
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default ContactForm;
