import React, {useState, useCallback, useEffect} from 'react';




function ContactForm() {

    const [formValues, setFormValues] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        poems: ""
    })

    return(
        <article className="form">
        <h2 className="form__title">ФОРМА.</h2>
        <h3 className="form__subtitle">Заполняя эту форму, вы становитесь частью проекта.</h3>
        <form name="form-turbina" className="form__container" action="#">
            <input className="form__input" type="text" placeholder="Имя и фамилия автора" required minLength="5" maxLength="40" />
            <input className="form__input" type="tel" pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" placeholder="Телефон в формате +7 (999) 999 99 99" required />
            <input className="form__input" type="email" placeholder="Почта" required />
            <textarea className="form__input form__textarea" placeholder="Стихи" required minLength="2"></textarea>
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
