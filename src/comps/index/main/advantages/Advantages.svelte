<section class="advantages">
    <table>
        <caption>
            <h2>Седона — небольшой городок в Аризоне,<br>заслуживающий большего!</h2>
            <p>Рассмотрим 5 причин, по которым Седона круче, чем Гранд Каньон!</p>
        </caption>
        <tbody>
        <tr>
            <td>
                <h3>Настоящий<br>городок</h3>
                <p class="advantages-number">№1</p>
                <p>Седона — не аттракцион для туристов, там <br>течёт своя жизнь</p>
            </td>

            <td class="advantages-img" colspan="2">
                <img src="src/assets/sedona-city.jpg" width="800" height="256" alt="Город Седона">
            </td>
        </tr>

        <tr>
            <td class="advantages-text">
                <h3>Жильё</h3>
                <p>Рекомендуем пожить в настоящем мотеле, всё как в кино!</p>
            </td>
            <td class="advantages-text">
                <h3>Еда</h3>
                <p>Всегда заказывайте фирменный бургер, <br>вы не разочаруетесь!</p>
            </td>
            <td class="advantages-text">
                <h3>Сувениры</h3>
                <p>Не только китайского, но и местного производства!</p>
            </td>
        </tr>

        <tr>
            <td class="advantages-img"  colspan="2"> <img src="src/assets/devil-bridge.jpg" width="800" height="256" alt="Мост Дьявола"> </td>

            <td class="advantages-text">
                <h3>Там есть <br>мост Дьявола</h3>
                <p class="advantages-number">№2</p>
                <p>Да, по нему можно пройти! Если конечно вы осмелитесь</p>
            </td>
        </tr>

        <tr>
            <td class="advantages-text">
                <h3>Небольшая <br>площадь</h3>
                <p class="advantages-number">№3</p>
                <p>Все достопримечательности <br>находятся очень близко</p>
            </td>
            <td class="advantages-text">
                <h3>Красивая <br>дорога</h3>
                <p class="advantages-number">№4</p>
                <p>Ехать в седону из лас-вегаса совсем <br>не скучно!</p>
            </td>
            <td class="advantages-text">
                <h3>Мало <br>туристов</h3>
                <p class="advantages-number">№5</p>
                <p>Большинство едет в Гранд Каньон <br>и толпится там</p>
            </td>
        </tr>
        </tbody>
    </table>
</section>

<style>
    caption {
        line-height: 26px;
        background-color: var(--basic-white);
        margin-bottom: 35px;
        width: 1200px;
    }

    .advantages h2,
    .advantages h3 {
        font-size: 21px;
        font-weight: 700;
        padding: 0;
        margin: 0;
    }

    .advantages h2 {
        margin-bottom: 40px;
    }

    .advantages h3 {
        padding-top: 20px;
        margin-bottom: 25px;
    }

    .advantages table {
        background-color: var(--basic-white);
        width: 1200px;
    }

    .advantages table img {
        width: 800px;
        height: 256px;
        text-align: right;
    }

    .advantages-img {
        width: auto;
    }

    .advantages tr {
        display: flex;
        height: 256px;
        width: 1200px;
        padding: 0;
        margin: 0 -2px;
        text-align: center;
    }

    .advantages tr:nth-child(odd) {
        background-color: var(--basic-blue);
        color: var(--basic-white);
    }

    .advantages tr:first-child,
    .advantages tr:nth-child(2) {margin-bottom: 38px;}

    .advantages tr:nth-child(2) h3 {
        padding-top: 100px;
    }

    .advantages tr:nth-child(2) td::before {
        content: "";
        width: 75px;
        height: 80px;
        background: url('src/assets/advantages-group.svg') no-repeat;
        background-position-x: 0%;
        align-self: center;
        position: absolute;
        left: 40%;
        top: 18px;
    }

    .advantages tr:nth-child(2) td:nth-child(2)::before {
        background-position-x: 50%;
    }

    .advantages tr:nth-child(2) td:nth-child(3)::before {
        background-position-x: 100%;
    }

    .advantages td {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        padding: 0;
    }

    .advantages td p {
        margin: 0 45px 25px 45px;
    }

    .advantages td p:last-child {
        margin-top: 0;
    }

    td {
        width: 400px;
    }

    .advantages-number::before {
        content: "— ";
    }

    .advantages-number::after {
        content: " —";
    }

    .advantages tr:last-child {
        background-color: var(--background-gray);
        color: var(--basic-black);
    }
</style>