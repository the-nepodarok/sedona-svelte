<script>
    import hello from "./Index.svelte";
    export let name = hello;
</script>

<form action="http://localhost:4220/server.php" method="post">
    <input type="text" value={name.toUpperCase()} name="name">
    <button type="submit">Send data</button>
</form>

<style>
    input[type="text"] {
        color: tomato;
        font-weight: 800;
        border: 2px aquamarine solid;
        outline: 1px black solid;
    }
</style>