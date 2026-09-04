<script lang="ts">
  import AudioPlayer from './components/AudioPlayer.svelte';
  import Footer from './components/Footer.svelte';
  import GuestLogin from './components/GuestLogin.svelte';
  import Header from './components/Header.svelte';
  import LeftNav from './components/LeftNav.svelte';
  import { router } from './lib/router.svelte';
  import About from './pages/About.svelte';
  import Albums from './pages/Albums.svelte';
  import Article from './pages/Article.svelte';
  import Audio from './pages/Audio.svelte';
  import Auth from './pages/Auth.svelte';
  import Blog from './pages/Blog.svelte';
  import Feed from './pages/Feed.svelte';
  import Friends from './pages/Friends.svelte';
  import Groups from './pages/Groups.svelte';
  import Invite from './pages/Invite.svelte';
  import Language from './pages/Language.svelte';
  import Messenger from './pages/Messenger.svelte';
  import Profile from './pages/Profile.svelte';
  import Search from './pages/Search.svelte';
  import Settings from './pages/Settings.svelte';
  import Stub from './pages/Stub.svelte';
  import Support from './pages/Support.svelte';
  import Tour from './pages/Tour.svelte';
  import Videos from './pages/Videos.svelte';
  import { auth } from './stores/auth.svelte';
  import { locale } from './stores/locale.svelte';

  const PUBLIC_GUEST = new Set([
    'language',
    'about',
    'terms',
    'privacy',
    'donate',
    'blog',
    'tour',
    'support',
  ]);
  const publicGuest = $derived(PUBLIC_GUEST.has(router.route.name));
  const showAuth = $derived(
    router.route.name === 'auth' || (!auth.isAuthenticated && !publicGuest),
  );
  const showGuestSidebar = $derived(!auth.isAuthenticated && publicGuest && router.route.name !== 'language');

  const stubTitle = $derived(
    (
      {
        notes: locale.t('my_notes'),
        events: locale.t('my_events'),
        notifications: locale.t('my_feedback'),
        apps: locale.t('apps'),
        docs: locale.t('my_documents'),
        'not-found': locale.t('not_found'),
      } as Record<string, string>
    )[router.route.name] ?? locale.t('site_name'),
  );
</script>

{#if !locale.ready}
  <div class="layout"></div>
{:else if showAuth}
  <Auth />
{:else}
  <div class="layout">
    <div id="xhead" class="dm"></div>
    <Header />
    {#if auth.isAuthenticated}
      <LeftNav />
    {:else if showGuestSidebar}
      <div class="sidebar">
        <GuestLogin />
      </div>
    {/if}
    {#if router.route.name === 'language'}
      <Language />
    {:else if router.route.name === 'profile'}
      <Profile />
    {:else if router.route.name === 'friends'}
      <Friends />
    {:else if router.route.name === 'messages'}
      <Messenger />
    {:else if router.route.name === 'settings'}
      <Settings />
    {:else if router.route.name === 'audio'}
      <Audio />
    {:else if router.route.name === 'albums'}
      <Albums />
    {:else if router.route.name === 'videos'}
      <Videos />
    {:else if router.route.name === 'groups'}
      <Groups />
    {:else if router.route.name === 'search'}
      <Search />
    {:else if router.route.name === 'feed'}
      <Feed />
    {:else if router.route.name === 'about'}
      <About />
    {:else if router.route.name === 'terms'}
      <Article name="rules" />
    {:else if router.route.name === 'privacy'}
      <Article name="privacy" />
    {:else if router.route.name === 'donate'}
      <Article name="donate" />
    {:else if router.route.name === 'blog'}
      <Blog />
    {:else if router.route.name === 'tour'}
      <Tour />
    {:else if router.route.name === 'support'}
      <Support />
    {:else if router.route.name === 'invite'}
      <Invite />
    {:else}
      <Stub title={stubTitle} empty={locale.t('nothing_here')} />
    {/if}
    <Footer inset={auth.isAuthenticated} />
  </div>
  {#if auth.isAuthenticated}
    <AudioPlayer />
  {/if}
{/if}
