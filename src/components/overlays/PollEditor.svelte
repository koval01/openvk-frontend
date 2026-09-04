<script lang="ts">
  import { locale } from '../../stores/locale.svelte';
  import { overlay } from '../../stores/overlay.svelte';

  let draft = $state('');
  let options = $state<string[]>([]);
  let anon = $state(false);
  let multi = $state(false);
  let locked = $state(false);
  let expires = $state(false);
  let expiresIn = $state(0);

  function addOption() {
    const value = draft.trim();
    if (!value) {
      return;
    }
    options = [...options, value];
    draft = '';
  }
</script>

<div>
  <input type="text" name="title" placeholder={locale.t('poll_title')} bind:value={overlay.pollTitle} />
  <div class="poll-options" style="margin-top: 10px;">
    {#each options as option, index (index)}
      <input class="poll-option" value={option} readonly />
    {/each}
  </div>
  <input
    type="text"
    name="newOption"
    placeholder={locale.t('poll_add_option')}
    style="margin: 5px 0;"
    bind:value={draft}
    onkeydown={(event) => {
      if (event.key === 'Enter' || event.key === 'Tab') {
        event.preventDefault();
        addOption();
      }
    }}
  />
  <hr />
  <label><input type="checkbox" name="anon" bind:checked={anon} /> {locale.t('poll_anonymous')}</label
  ><br />
  <label><input type="checkbox" name="multi" bind:checked={multi} /> {locale.t('poll_multiple')}</label
  ><br />
  <label><input type="checkbox" name="locked" bind:checked={locked} /> {locale.t('poll_locked')}</label
  ><br />
  <label>
    <input type="checkbox" name="expires" bind:checked={expires} />
    {locale.t('poll_edit_expires')}
    <select name="expires_in" style="width: unset;" bind:value={expiresIn}>
      {#each Array.from({ length: 32 }, (_, day) => day) as day (day)}
        <option value={day}>{day} {locale.t('poll_edit_expires_days')}</option>
      {/each}
    </select>
  </label>
  <div class="nobold" style="margin: 10px 5px 0">{locale.t('poll_editor_tips')}</div>
</div>
