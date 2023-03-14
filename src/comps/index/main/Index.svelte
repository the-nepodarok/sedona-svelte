<script>
    import '../../../utils/math.js';

    export let hello = 'world';
    $: hi = 'Nice to meet ya, ' + hello;

    const names = [
        'Svelte', 'Norsk', 'Nepo', 'Kitty', 'Marsvin', 'Firefox',
    ];

    let colors = [
        'tomato', 'aquamarine', 'orange', 'tortoise', 'cyan', 'pink',
    ];

    let count = 0;

    export const changeStuff = (evt) => {
        const el = evt.target;
        el.style.color = colors.randomElement();
        hello = names.randomElement();
        count += 1;
    }

    export let country;
    export let activity;
    export let drink;
    export let joke;
</script>

<h1 on:click={changeStuff}>Hello, {hello}!</h1>
<p>{hi}</p>
<p>There's plenty to do here in {country}. Like {activity}, drinking {drink} or {joke}.</p>

<button on:click={changeStuff}>
    count is {count}
</button>

<style>
    h1, p {
        cursor: default;
    }
</style>
