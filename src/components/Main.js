import React from 'react';

function Main() {
    return (
        <main className="content">
            <article className="text">
                <h2 className="text__title">О ПРОЕКТЕ.</h2>
                <p className="text__paragraph">Мы знаем, что наши дети постоянно существуют в режиме непрекращающегося
                    творческого процесса. Мы видим это, когда ребёнок что-то напевает, когда он бесконечно рисует, когда
                    придумывает истории, когда разговаривает с едой и игрушками — дети постоянно включены и что-то
                    изобретают. Родители часто недооценивают это спонтанное творчество ребёнка. Это не плохо, просто мы
                    привыкаем к этому. Давайте попробуем внимательнее присмотреться к нашим детям.</p>
                <p className="text__paragraph">Мы запускаем проект «ТУРБИНА», который открывает работу настоящего
                    музыкального лейбла на базе «Маршака». В рамках «ТУРБИНЫ» лучшие современные инди-музыканты пишут
                    свои песни на стихи, написанные детьми. Здесь важно — мы не заставляем наших детей садиться и писать
                    поэзию, мы говорим о том, что родителям стоит быть более внимательными и чуткими к своим детям.
                    Именно так мы сможем получить тексты, которые перестанут быть детскими, не будут осмыслены как
                    взрослые — поэзия, которая сокращает дистанцию между взрослостью и детством, где спонтанное детское
                    творчество и бессознательное, замеченное родителем, становится общественным культурным достоянием.
                </p>
            </article>
            <article className="text">
                <h2 className="text__title">КАК ЭТО РАБОТАЕТ?</h2>
                <p className="text__paragraph">Вы можете прислать нам тексты, родившиеся у ваших детей, которые вы записали
                    и считаете, что это сильное высказывание. Мы собираем пул таких текстов и передаём их музыкантам.
                    Артисты создают музыку на эти стихи. Мы продюсируем выпуск трека, возможно съёмки клипа и так далее.
                    Мы всегда указываем автора стихотворений внутри релиза: Хадн Дадн feat. Варя Карпова и Федя Быстров
                    — Контур.</p>
            </article>
            <article className="text">
                <h2 className="text__title">ТЕЗИСЫ.</h2>
                <p className="text__paragraph">• Дети никогда не прекращают творить и круто стараться быть на них похожими
                    в этом.</p>
                <p className="text__paragraph">• Детское бессознательное помогает родителям понять, что происходит внутри
                    семьи.</p>
                <p className="text__paragraph">• Не существует детской и взрослой поэзии. Существует мысль и чувство,
                    зафиксированное в ней.</p>
                <p className="text__paragraph">• Дети получают невероятное удовольствие и мотивацию от того, что их
                    творчество востребовано сверстниками и взрослыми.</p>
            </article>
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
        </main>
    );
}

export default Main;