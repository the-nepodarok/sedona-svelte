<script>
    import NavList from "./NavList.svelte";
</script>

<nav>
    <a href="/">
        <img src="/src/assets/sedona-logo.svg" width="138" height="70" alt="City of Sedona">
    </a>
    <NavList/>
</nav>

<style>
    nav {
        font-weight: 700;
        line-height: 26px;
        padding-bottom: 15px;
        padding-top: 14px;
        position: relative;
        padding-left: 45px;
    }

    a {
        position: absolute;
        left: 44.5%;
        top: 0%;
    }
</style>