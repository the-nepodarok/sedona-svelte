<script>
    import Button from "../common/micros/Button.svelte";
    import Checkbox from "../common/micros/Checkbox.svelte";
</script>

<section class="filter">
    <form name="hotel-filter-form" action="https://echo.htmlacademy.ru/" method="post">
        <fieldset>
            <legend>Инфраструктура:</legend>
            <Checkbox inputName="has-pool" text="Бассейн" checked />
            <Checkbox inputName="has-parking" text="Парковка" checked />
            <Checkbox inputName="has-wi-fi" text="Wi-Fi" />
        </fieldset>

        <fieldset>
            <legend>Тип жилья:</legend>
            <Checkbox inputName="type-hotel" text="Гостиница" checked />
            <Checkbox inputName="type-motel" text="Мотель" checked />
            <Checkbox inputName="type-apartment" text="Апартаменты" checked />
        </fieldset>

        <fieldset class="price-range">
            <legend>Стоимость в сутки, ₽:</legend>
            <input type="text" name="hotel-min-price" placeholder="От">
            <input type="text" name="hotel-max-price" placeholder="До">

            <div class="price-slider">
                <div class="price-slider">
                    <div class="price-slider-bar">
                        <div class="price-slider-scale"></div>
                    </div>
                    <div class="range-toggle toggle-min" tabindex="0"></div>
                    <div class="range-toggle toggle-max" tabindex="0"></div>
                </div>
            </div>

            <Button buttonType="submit" buttonText="Показать" className="filter-show-button" />
        </fieldset>
    </form>
</section>

<style>
    section {
        width: 1080px;
        height: 192px;
        padding: 25px 36px 0 84px;
        color: var(--basic-white);
        background-image: url('/src/assets/filter-background.png');
        background-position: center;
        background-repeat: no-repeat;
        background-color: var(--basic-brown);
        background-size: cover;
    }

    .filter form {
        display: grid;
        grid-template-columns: 1fr 1fr 3fr;
        column-gap: 70px;
    }

    .filter fieldset input {
        cursor: pointer;
    }

    .filter legend {
        font-weight: 700;
        margin-left: -2em;
        font-size: 16px;
    }

    .filter fieldset {
        border: none;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }

    .filter label {
        margin-top: 25px;
        position: relative;
    }

    .filter input[type="checkbox"] {
        opacity: 0;
        z-index: -1;
    }

    .filter span::before {
        content: '';
        position: absolute;
        left: -25px;
        width: 27px;
        height: 23px;
        background: url('../img/checkbox-off.svg') no-repeat;
        cursor: pointer;
    }

    .filter input[type="checkbox"]:hover + span::before,
    input[type="checkbox"]:focus + span::before {
        transform: scale(1.2);
    }

    .filter fieldset:last-of-type {
        margin-left: 176px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        min-width: 330px;
    }

    .filter fieldset:last-of-type legend {
        margin-bottom: -3px;
        margin-left: 25px;
    }

    .filter input[type="text"] {
        width: 152px;
        height: 32px;
        border: none;
        border-top: 2px solid var(--basic-white);
        border-bottom: 2px solid var(--basic-white);
        color: var(--basic-white);
        text-transform: uppercase;
        background-color: transparent;
        margin-top: 10px;
        text-align: center;
    }

    .filter input[type="text"]:first-of-type {
        border-left: 2px solid var(--basic-white);
    }

    .filter input[type="text"]:nth-of-type(2) {
        border-right: 2px solid var(--basic-white);
    }

    .filter input[type="text"]::placeholder {
        color: var(--basic-white);
    }

    /* Price Range */

    .price-range {position: relative;}

    .price-range::before {
        content: "";
        width: 2px;
        height: 22px;
        background-color: var(--basic-white);
        position: absolute;
        top: 23px;
    }

    .price-slider {
        width: 316px;
        margin-bottom: 8px;
        position: relative;
    }

    .price-slider-bar {
        height: 2px;
        width: 100%;
        background: rgba(255, 255, 255, 0.3);
    }

    .price-slider-scale {
        width: 75%;
        height: 2px;
        background-color: var(--basic-white);
    }

    .range-toggle {
        width: 4px;
        height: 4px;
        padding: 0;
        position: absolute;
        top: -9px;
        border: 8px solid var(--basic-white);
        background-color: #ababab;
        border-radius: 50%;
        box-shadow: 0 2px 0 0 rgba(171, 171, 171, 0.3);
        cursor: pointer;
    }
    .price-slider .toggle-min {left: 0px;}
    .price-slider .toggle-max {left: 237px;}

    .range-toggle:hover {
        transform: scale(1.2);
    }
</style>