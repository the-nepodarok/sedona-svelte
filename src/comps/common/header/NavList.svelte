<script>
    import {links} from 'svelte-routing';
</script>

    <ul use:links>
        <li><a href="#">Информация</a></li>
        <li><a href="#">Фото и видео</a></li>
        <li></li>
        <li><a href="#">Карта штата</a></li>
        <li><a href="/catalog">Гостиницы</a></li>
    </ul>

<style>
    ul {
        display: flex;
        justify-content: space-around;
        margin-left: -4em;
        list-style: none;
    }

    li:hover a {
        color: var(--basic-blue);
    }

    li:active a {
        color: var(--basic-black);
        opacity: 0.3;
    }

    a:focus {
        color: var(--basic-brown);
    }
</style>