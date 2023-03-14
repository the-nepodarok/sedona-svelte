<script>
    import Button from "../../../common/micros/Button.svelte";
    import Map from "./Map.svelte";
    import ModalForm from "../modal-form/ModalForm.svelte";

    let show = false;
    const toggleModal = () => show = !show;
</script>

<section class="container">
    <div class="offer-hotel">
        <h2>Заинтересовались?</h2>
        <p>Укажите предполагаемые даты поездки,<br>и мы покажем вам лучшие предложения гостиниц в седоне</p>
        <Button className="open" buttonType="button" buttonText="Поиск гостиницы в Седоне" handler={toggleModal} />
    </div>
    <Map/>
</section>

{#if show}
<svelte:component this={ModalForm} />
{/if}

<style>
    .container {
        margin: 0 auto;
        width: 1200px;
    }

    .offer-hotel {
        display: flex;
        width: 568px;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding-top: 30px;
    }

    h2 {
        font-size: 30px;
        font-weight: 700;
        padding-right: 10px;
    }

    .offer-hotel p {
        padding-bottom: 25px;
        text-align: center;
        line-height: 24px;
        margin-top: 7px;
        margin-bottom: 21px;
    }
</style>
