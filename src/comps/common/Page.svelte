<script>
    import PageHeader from "./header/PageHeader.svelte";
    import Footer from "./footer/Footer.svelte";

    export let main;
</script>

<PageHeader />
<main class="container">
    <svelte:component this="{main}" />
</main>
<Footer />

<style>
    main {
        box-shadow: 5px 5px 15px rgba(0, 1, 1, 0.2);
        margin: 0 auto;
        width: 1200px;
    }
</style>