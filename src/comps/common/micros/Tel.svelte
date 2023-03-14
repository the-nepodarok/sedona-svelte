<script>
    export let tag;
</script>

<section class="footer-tel">
  {#if tag}
    <slot>{tag}</slot>
  {/if}
    <a href="tel:+78005558628">+7 800 555-86-28</a>
</section>

<style>
  section {
    margin: 0 100px 10px 120px;
  }
   p {
     margin: 0;
     margin-bottom: 9px;
   }
</style>