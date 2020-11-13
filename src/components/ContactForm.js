import React, { useState, useCallback, useEffect } from 'react';


const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [isEmailError, setEmailError] = useState(false)
    const [isContainNumbersError, setNumberError] = useState(false)
    const [isFullNameError, setFullNameError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'isEmail':
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        .test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break
                case 'isContainNumbers':
                    /([0-9])+/g.test(String(value)) ? setNumberError(false) : setNumberError(true)
                    break
                case 'isFullName':
                    /^[A-ЯЁ][а-яё]+\s[A-ЯЁ][а-яё]+$/.test(String(value)) ? setFullNameError(false) : setFullNameError(true)
                    break

            }
        }
    }, [value])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        isEmailError,
        isContainNumbersError
    }
}


const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
        console.log(value)
    }

    const onBlur = (e) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

function ContactForm() {

    const fullName = useInput('', { isEmpty: true, minLength: 5 })
    const email = useInput('', { isEmpty: true, isEmail: true, maxLength: 40 })
    const phoneNumber = useInput('', { isEmpty: true, isContainNumbers: true, maxLength: 12 })
    const poems = useInput('', { isEmpty: true, minLength: 5 })


    return (
        <article className="form">
            <h2 className="form__title">ФОРМА.</h2>
            <h3 className="form__subtitle">Заполняя эту форму, вы становитесь частью проекта.</h3>
            <form name="form-turbina" className="form__container" action="#">
                <input className="form__input" onChange={e => fullName.onChange(e)} onBlur={e => fullName.onBlur(e)} value={fullName.value} name="fullName" type="text" placeholder="Имя и фамилия автора" />
                {(fullName.isDirty && fullName.isEmpty) && <div style={{ color: 'red' }}>Поле обязательно для заполнения</div>}
                {(fullName.isDirty && fullName.minLengthError) && <div style={{ color: 'red' }}>Минимальная длина: 5 символов</div>}
                <input className="form__input" onChange={phoneNumber.onChange} onBlur={phoneNumber.onBlur} value={phoneNumber.value} name="phoneNumber" type="tel" placeholder="Телефон в формате +7 (999) 999 99 99" />
                {(phoneNumber.isDirty && phoneNumber.isEmpty) && <div style={{ color: 'red' }}>Поле обязательно для заполнения</div>}
                {(phoneNumber.isDirty && phoneNumber.isContainNumbersError) && <div style={{ color: 'red' }}>Некорректный формат телефона</div>}
                {(phoneNumber.isDirty && phoneNumber.maxLengthError) && <div style={{ color: 'red' }}>Максимальная длина: 12 символов</div>}
                <input className="form__input" onChange={email.onChange} onBlur={email.onBlur} value={email.value} name="email" type="email" placeholder="Почта" />
                {(email.isDirty && email.isEmpty) && <div style={{ color: 'red' }}>Поле обязательно для заполнения</div>}
                {(email.isDirty && email.isEmailError) && <div style={{ color: 'red' }}>Некорректный e-mail</div>}
                {(email.isDirty && email.maxLengthError) && <div style={{ color: 'red' }}>Максимальная длина: 40 символов</div>}
                <textarea className="form__input form__textarea" onChange={poems.onChange} onBlur={poems.onBlur} value={poems.value} name="poems" placeholder="Стихи"></textarea>
                {(poems.isDirty && poems.isEmpty) && <div style={{ color: 'red' }}>Поле обязательно для заполнения</div>}
                {(poems.isDirty && poems.minLengthError) && <div style={{ color: 'red' }}>Минимальная длина: 2 символов</div>}
                <div className="form__radio-container">
                    <input className="form__radio" type="radio" value="agree" required />
                    <span className="form__radio-offer">Согласен с <a className="form__radio-offer-link" href="#">офертой</a></span>
                </div>
                <button className="form__submit-button">Отправить форму</button>
            </form>
        </article>
    )
}
export default ContactForm
