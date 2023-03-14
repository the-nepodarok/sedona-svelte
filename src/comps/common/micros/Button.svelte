<script>
    export let className = '';
    export let buttonType = "button";
    export let buttonText = "Кнопка";
    export let handler;
</script>

<button type="{buttonType}" class="{className}" on:click={handler}>{buttonText}</button>

<style>
    button {
        font-family: "PT Sans", Arial, sans-serif;
        font-size: 21px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--basic-white);
        border: none;
        cursor: pointer;
    }

    /* Open Modal Form Button*/
    .open {
        padding: 32px 138px;
        line-height: 21px;
        background-color: var(--basic-brown);
    }

    open:hover {
        background-color: #604E43;
    }

    open:active {
        background-color: #503E33;
        color: rgba(255, 255, 255, 0.3);
    }

    /* Modal Form Submit Button*/
    .find-hotel-button {
        width: 450px;
        height: 50px;
        background-color: var(--basic-blue);
        margin-top: 50px;
        padding: 16px;
        padding-bottom: 42px;
        line-height: 26px;
    }

    .find-hotel-button:hover {
        background-color: #669EC0;
    }

    .find-hotel-button:active {
        background-color: #5496BD;
        color: rgba(255, 255, 255, 0.3);
    }

    /* Catalog Filter Button */

    .filter-show-button {
        font-weight: 400;
        font-size: 14px;
        padding: 0 33px;
        line-height: 14px;
        background: transparent;
        border: solid var(--basic-white) 2px;
        color: var(--basic-white);
        margin-bottom: 50px;
        margin-right: 10px;
        cursor: pointer;
    }

    .filter-show-button:hover,
    .filter-show-button:focus {
        background-color: var(--basic-white);
        color: var(--basic-black);
    }
</style>
