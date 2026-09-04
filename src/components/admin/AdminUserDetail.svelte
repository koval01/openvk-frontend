<script lang="ts">
  import { untrack } from 'svelte';
  import * as Card from '$lib/components/ui/card/index.js';
  import * as Field from '$lib/components/ui/field/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Checkbox } from '$lib/components/ui/checkbox/index.js';
  import { router } from '$lib/router.svelte';
  import { displayName, type User, type Warning } from '../../services/types';
  import { locale } from '../../stores/locale.svelte';

  let {
    user,
    warnings,
    onSaveLimits,
  }: {
    user: User;
    warnings: Warning[];
    onSaveLimits: (posting: boolean, messaging: boolean) => Promise<void>;
  } = $props();

  let postingAllowed = $state(untrack(() => user.posting_allowed !== false));
  let messagingAllowed = $state(untrack(() => user.messaging_allowed !== false));

  function go(event: MouseEvent, href: string) {
    router.handleClick(event, href);
  }

  async function save(event: Event) {
    event.preventDefault();
    await onSaveLimits(postingAllowed, messagingAllowed);
  }
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>{displayName(user)}</Card.Title>
    <Card.Description>
      ID {user.id} · {user.role} · {user.coins ?? 0}
      {locale.t('points_count')}
    </Card.Description>
    <Card.Action>
      <div class="flex flex-wrap gap-2">
        <Button href="/id{user.id}" variant="outline" size="sm" onclick={(event) => go(event, `/id${user.id}`)}
          >{locale.t('page')}</Button
        >
        <Button
          href="/admin/ban/{user.id}"
          variant="destructive"
          size="sm"
          onclick={(event) => go(event, `/admin/ban/${user.id}`)}>{locale.t('ban')}</Button
        >
        <Button
          href="/admin/unban/{user.id}"
          variant="outline"
          size="sm"
          onclick={(event) => go(event, `/admin/unban/${user.id}`)}>{locale.t('unban_user_action')}</Button
        >
        <Button
          href="/admin/warn/{user.id}"
          variant="outline"
          size="sm"
          onclick={(event) => go(event, `/admin/warn/${user.id}`)}>{locale.t('warn')}</Button
        >
      </div>
    </Card.Action>
  </Card.Header>
  <Card.Content class="flex flex-col gap-4">
    <div class="flex flex-wrap gap-2 text-sm">
      <Button
        href="/admin/user{user.id}/bans"
        variant="ghost"
        size="sm"
        onclick={(event) => go(event, `/admin/user${user.id}/bans`)}>{locale.t('user_is_blocked')}</Button
      >
      <Button
        href="/admin/support/ban/{user.id}"
        variant="ghost"
        size="sm"
        onclick={(event) => go(event, `/admin/support/ban/${user.id}`)}>{locale.t('menu_help')}</Button
      >
    </div>
    <form class="flex flex-col gap-4" onsubmit={save}>
      <Field.Group>
        <Field.Field orientation="horizontal">
          <Checkbox id="admin-posting" bind:checked={postingAllowed} />
          <Field.Label for="admin-posting">{locale.t('wall')}</Field.Label>
        </Field.Field>
        <Field.Field orientation="horizontal">
          <Checkbox id="admin-messaging" bind:checked={messagingAllowed} />
          <Field.Label for="admin-messaging">{locale.t('my_messages')}</Field.Label>
        </Field.Field>
      </Field.Group>
      <Button type="submit" class="w-fit">{locale.t('save')}</Button>
    </form>
    {#if warnings.length}
      <div class="flex flex-col gap-2">
        {#each warnings as warning (warning.id)}
          <p class="text-sm text-muted-foreground">{warning.created_at}: {warning.reason}</p>
        {/each}
      </div>
    {/if}
  </Card.Content>
</Card.Root>
