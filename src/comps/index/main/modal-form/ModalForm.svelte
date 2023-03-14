<script>
    import Button from "../../../common/micros/Button.svelte";

    export function showModal(show) {
        show = !show;
    }
</script>

<section>
    <form action="https://echo.htmlacademy.ru/" method="post">
        <label class="form-item">Дата заезда:<input type="text" name="check-in-date" placeholder="24 ИЮЛЯ 2017" onfocus="(this.type='date')" onblur="(this.type='text')"></label>
        <label class="form-item">Дата выезда:<input type="text" name="check-out-date" placeholder="27 ИЮЛЯ 2017" onfocus="(this.type='date')" onblur="(this.type='text')"/></label>
        <div class="inline-fields">
            <label class="form-item">Взрослые: <input type="number" name="hotel-adults" placeholder="2" min="1"></label>
            <label class="form-item">Дети: <input type="number" name="hotel-kids" placeholder="0" min="0"></label>
        </div>
        <Button className="find-hotel-button" buttonType="submit" buttonText="Найти"/>
    </form>
</section>

<style>
    section {
        margin: 0 auto;
        width: 1200px;
        position: relative;
        z-index: 2;
    }

    form {
        position: absolute;
        left: 316px;
        bottom: 186px;
        padding: 20px 36.5px 55px 40px;
        color: var(--basic-black);
        font-weight: bold;

        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--basic-white);
    }

    .form-item:not(:nth-child(3)) {margin-right: 15px;}

    .form-item input {
        margin-top: 40px;
        justify-self: end;
        width: 326px;
    }

    .form-item:last-child input,
    .form-item:nth-last-child(2) input {width: 94px;}

    .form-item:nth-last-child(2) input {
        margin-left: 40px;
        margin-right: 30px;
    }

    .inline-fields {
        width: inherit;
        display: flex;
        justify-content: space-between;
    }

    .form-item input::-webkit-calendar-picker-indicator {display: none;}

    .form-item input {
        border: 1px solid var(--background-gray);
        background-color: var(--background-gray);
        padding: 10px;
        margin-left: 20px;
        text-align: center;
    }

    .form-item input:focus {background-color: transparent;}
</style>
