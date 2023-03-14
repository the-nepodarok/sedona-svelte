<script>
  import { Router, Route } from 'svelte-routing';
  import Svelte from "./Index.svelte";
  import Catalog from "./comps/catalog/Catalog.svelte";
</script>

<Router url="">
    <Route path="/"><Svelte /></Route>
    <Route path="catalog" component="{Catalog}" />
</Router>
