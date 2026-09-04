<script lang="ts">
  import { onMount } from 'svelte';
  import { router } from '../lib/router.svelte';
  import { auth } from '../stores/auth.svelte';

  onMount(() => {
    auth.logout();
    router.replace('/login');
  });
</script>
