<script>
    import Tel from "../micros/Tel.svelte";
    import Copyright from "../micros/Copyright.svelte";
    import Socials from "./Socials.svelte";
</script>

<footer>
    <Tel tag="#visitsedona" />
    <Socials />
    <Copyright />
</footer>

<style>
    footer {
        margin: 0 auto;
        width: 1200px;
        height: 120px;
        display: flex;
        justify-content: space-around;
        background: rgba(255, 255, 255, 0.9);
        font-size: 21px;
        font-weight: 700;
        line-height: 26px;
        align-items: center;
        text-align: center;
    }
</style>