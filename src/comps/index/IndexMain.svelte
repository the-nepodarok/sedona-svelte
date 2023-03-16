<script>
    import Advantages from "./main/advantages/Advantages.svelte";
    import Offer from "./main/offer-hotel/Offer.svelte";
</script>

<h1>Седона</h1>
<img src="src/assets/sedona-big.png" width="1200" height="510" alt="Добро пожаловать в Седону!">
<Advantages />
<Offer />

<style>
    h1 {
        display: none;
    }

    img {
        width: 1200px;
        height: 510px;
        margin-bottom: 40px;
    }
</style>
