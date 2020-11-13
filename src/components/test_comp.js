import React, { useState, useCallback, useEffect } from 'react';

function validator() {
    // true if error,
    // false if correct
}

const validators = {
    fullName: {
        required: (value) => {
            return value === "";
        },
        minLength: (value) => {
            return value.length < 5;
        }
    },
    phoneNumber: {
        required: (value) => {
            return value === "";
        },
        minLength: (value) => {
            return value.length < 11;
        },
        containNumbers: (value) => {
            return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
        }
    },
    email: {
        required: (value) => {
            return value === "" && /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/.test(value);
        },
        minLength: (value) => {
            return value.length < 6;
        },
    },
    poems: {
        required: (value) => {
            return value === "";
        },
        minLength: (value) => {
            return value.length < 2;
        },
    },
};

function ContactForm() {

    const [formValues, setFormValues] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        poems: ""
    })

    const [errors, setErrors] = useState({
        fullName: {
            required: true,
            minLength: true,
        },
        phoneNumber: {
            required: true,
            minLength: true,
            containNumbers: true
        },
        email: {
            required: true,
            minLength: true,
        },
        poems: {
            required: true,
            minLength: true,
        }
    })

    const handleInputChange = useCallback(
        (evt) => {
            const { name, value } = evt.target;
            setFormValues((prevState) => ({ ...prevState, [name]: value }))
        },
        [setFormValues]
    );

    useEffect(
        function validateInputs() {
            const { fullName, phoneNumber, email, poems } = formValues;

            const fullNameValidationResult = Object.keys(validators.fullName).map((errorKey) => {
                const errorResult = validators.fullName[errorKey](fullName)

                return { [errorKey]: errorResult };
            })
                .reduce((acc, el) => ({ ...acc, ...el }), {});

            const phoneNumberValidationResult = Object.keys(validators.phoneNumber).map((errorKey) => {
                const errorResult = validators.phoneNumber[errorKey](phoneNumber)
                return { [errorKey]: errorResult };
            })
                .reduce((acc, el) => ({ ...acc, ...el }), {});

            const emailValidationResult = Object.keys(validators.email).map((errorKey) => {
                const errorResult = validators.email[errorKey](email)
                return { [errorKey]: errorResult };
            })
                .reduce((acc, el) => ({ ...acc, ...el }), {});

            const poemsValidationResult = Object.keys(validators.poems).map((errorKey) => {
                const errorResult = validators.poems[errorKey](poems)
                return { [errorKey]: errorResult };
            })
                .reduce((acc, el) => ({ ...acc, ...el }), {});

            setErrors({
                fullName: fullNameValidationResult,
                phoneNumber: phoneNumberValidationResult,
                email: emailValidationResult,
                poems: poemsValidationResult
            })
        },
        [formValues, setErrors]
    );

    const { fullName, phoneNumber, email, poems } = formValues;
    const isFullNameInvalid = Object.values(errors.fullName).some(Boolean);
    const isPhoneNumberInvalid = Object.values(errors.phoneNumber).some(Boolean);
    const isEmailInvalid = Object.values(errors.email).some(Boolean);
    const isPoemsInvalid = Object.values(errors.poems).some(Boolean);
    const isSubmitDisabled = isFullNameInvalid || isPhoneNumberInvalid || isEmailInvalid || isPoemsInvalid;

    return (
        <article className="form">
            <h2 className="form__title">ФОРМА.</h2>
            <h3 className="form__subtitle">Заполняя эту форму, вы становитесь частью проекта.</h3>
            <form name="form-turbina" className="form__container" action="#">
                <input className="form__input" value={fullName} onChange={handleInputChange} name="fullName" type="text" placeholder="Имя и фамилия автора" required minLength="5" maxLength="40" />
                {errors.fullName.required && <div>Это поле обязательно для заполнения.</div>}
                {errors.fullName.minLength && <div>Минимальная длина 3 символа</div>}
                <input className="form__input" value={phoneNumber} onChange={handleInputChange} name="phoneNumber" type="tel" pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" placeholder="Телефон в формате +7 (999) 999 99 99" required />
                {errors.phoneNumber.required && <div>Это поле обязательно для заполнения.</div>}
                {errors.phoneNumber.minLength && <div>Минимальная длина 11 символов</div>}
                {errors.phoneNumber.containNumbers && <div>Номер должен состоять из цифр</div>}
                <input className="form__input" value={email} onChange={handleInputChange} name="email" type="email" placeholder="Почта" required />
                {errors.email.required && <div>Это поле обязательно для заполнения.</div>}
                {errors.email.minLength && <div>Минимальная длина 5 символов</div>}
                <textarea className="form__input form__textarea" value={poems} onChange={handleInputChange} name="poems" placeholder="Стихи" required minLength="2"></textarea>
                {errors.email.required && <div>Это поле обязательно для заполнения.</div>}
                {errors.email.minLength && <div>Минимальная длина 2 символов</div>}
                <div className="form__radio-container">
                    <input className="form__radio" type="radio" value="agree" required />
                    <span className="form__radio-offer">Согласен с <a className="form__radio-offer-link" href="#">офертой</a></span>
                </div>
                <button disabled={isSubmitDisabled} className="form__submit-button">Отправить форму</button>
            </form>
        </article>
    )
}
export default ContactForm
