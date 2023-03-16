<section class="hotels">
    <header class="hotel-sortlist-header">
        <h2 class="how-many-found">Найдено: 3</h2>
        <span class="sort-by">Сортировка:</span>
        <ul class="hotel-sortlist">
            <li>По цене</li>
            <li>По типу</li>
            <li>По рейтингу</li>
        </ul>
    </header>

    <ul class="found-hotel-list">
        <li>
            <img class="hotel-img" src="src/assets/Amara-resort.jpg" width="135" height="90" alt="Гостиница Amara Resort & Spa">
            <h3><a href="#">AMARA RESORT & SPA</a></h3>
            <p class="type">Гостиница</p>  <p class="pricing">От 4000 Р</p>
            <a class="more-info-button hotel-button" href="#">Подробнее</a>
            <button class="book-hotel-button hotel-button" type="button">Забронировать</button>
            <p class="hotel-rating">Рейтинг: 8,5</p>
        </li>
        <li>
            <img class="hotel-img" src="src/assets/Desert-Quail.jpg" width="135" height="90" alt="мотель Desert Quail">
            <h3><a href="#">DESERT QUAIL INN</a></h3>
            <p class="type">Мотель</p>   <p class="pricing">От 3000 Р</p>
            <a class="more-info-button hotel-button" href="#">Подробнее</a>
            <button class="book-hotel-button hotel-button" type="button">Забронировать</button>
            <p class="hotel-rating">Рейтинг: 8,9</p>
        </li>
        <li>
            <img class="hotel-img" src="src/assets/Villas-pocodiablo.jpg" width="135" height="90" alt="апартаменты Villas at Poco Diablo">
            <h3><a href="#">VILLAS AT POCO DIABLO</a></h3>
            <p class="type">Апартаменты</p>    <p class="pricing">От 2000 Р</p>
            <a class="more-info-button hotel-button" href="#">Подробнее</a>
            <button class="book-hotel-button hotel-button" type="button">Забронировать</button>
            <p class="hotel-rating">Рейтинг: 9,2</p>
        </li>
    </ul>
</section>

<style>
    header {
        font-size: 12px;
        line-height: 21px;
        padding: 2px 73px;
    }

    h2 {
        display: inline-block;
        margin: 30px 45px 30px 0;
        font-size: 21px;
    }

    .hotel-sortlist {
        margin: 0;
        display: inline-flex;
        position: relative;
    }

    .sort-by {
        padding-right: 4px;
    }

    .hotel-sortlist li {
        text-decoration: underline dotted var(--basic-blue);
        opacity: 0.3;
        display: inline;
        margin-left: 32px;
        cursor: pointer;
    }

    .hotel-sortlist li:hover {
        color: var(--basic-blue);
        text-decoration-color: var(--basic-blue);
    }

    .hotel-sortlist li:active {
        color: var(--basic-black);
        text-decoration: none;
        opacity: 1.0;
    }

    .hotel-sortlist li:focus {
        color: var(--basic-blue);
        text-decoration: none;
        opacity: 1.0;
    }

    .hotel-sortlist::before,
    .hotel-sortlist::after {
        content: "";
        position: absolute;
        left: 786px;
        margin-left: -12px;
        top: 6px;
        width: 0;
        height: 0;
        border: 5.5px solid #CACACA;
        border-left-color: transparent;
        border-right-color: transparent;
        cursor: pointer;
    }

    .hotel-sortlist::after {
        border-bottom-width: 10px;
        border-top-width: 0;
    }

    .hotel-sortlist::before {
        border-top-width: 10px;
        border-bottom-width: 0;
        border-top-color: var(--basic-blue);
        margin-left: 11px;
    }

    .hotel-sortlist:active::after {
        border-bottom-color: var(--basic-gray);
    }

    .hotel-sortlist:active::before {
        border-top-color: var(--basic-blue);
    }

    /* Found Hotel Results */

    .found-hotel-list li {
        padding: 30px 70px;
        display: grid;
        grid-template-columns: 165px max-content 142px 1fr;
        grid-template-rows: 1fr 35px 27px;
        grid-template-areas: "hotel-img hotel-name hotel-name rating-star"
                             "hotel-img type pricing ."
                             "hotel-img button-1 button rating";
        border-top: 1px solid #E5E5E5;
        border-bottom: 1px solid #E5E5E5;
    }

    .found-hotel-list li:not(:first-child) {
        margin-top: -1px;
    }

    /* Hotel-list Grid Areas */
    .hotel-img {
        grid-area: hotel-img;
    }

    .found-hotel-list h3 {
        grid-area: hotel-name;
        margin: 0;
        padding: 0;
        align-self: start;
        line-height: 16px;
        font-size: 21px;
    }

    .found-hotel-list .type {grid-area: type; margin: 0;}
    .found-hotel-list .pricing {grid-area: pricing; margin: 0;}
    /* Hotel-list Grid Areas */

    .hotel-button {
        grid-area: button;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;
        padding: 3px 12px;
        border: none;
        cursor: pointer;
    }

    .more-info-button {
        color: var(--basic-white);
        background-color: var(--basic-blue);
        grid-area: button-1;
        margin-right: 6px;
    }

    .book-hotel-button {
        color: var(--basic-white);
        background-color: var(--basic-brown);
    }

    .book-hotel-button:hover {
        background-color: #604E43;
    }

    .book-hotel-button:active {
        background-color: #503E33;
        color: rgba(255, 255, 255, 0.3);
    }

    .hotel-rating {
        grid-area: rating;
        position: relative;
        padding: 3px 12px;
        justify-self: end;
        background-color: var(--background-gray);
        border: none;
        color: var(--basic-gray);
        height: max-content;
        align-self: center;
    }

    .found-hotel-list li::after {
        content: "";
        grid-area: rating-star;
        background-image: url('src/assets/four-stars.svg');
        background-repeat: no-repeat;
        width: 91px;
        height: 17px;
        justify-self: end;
    }

    .found-hotel-list li:nth-child(2)::after {
        width: 66px;
    }

    .found-hotel-list li:last-child::after {
        width: 42px;
    }
</style>