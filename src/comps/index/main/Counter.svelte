<script>
  import Index from "./Index.svelte";'./Index.svelte';

  let count = 0
  const increment = (evt) => {
    count += 1;
  }

</script>

<button on:click={increment | changeStuff}>
  count is {count}
</button>
