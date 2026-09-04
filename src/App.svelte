<script lang="ts">
  import AudioPlayer from './components/AudioPlayer.svelte';
  import Footer from './components/Footer.svelte';
  import GuestLogin from './components/GuestLogin.svelte';
  import Header from './components/Header.svelte';
  import LeftNav from './components/LeftNav.svelte';
  import OverlayHost from './components/overlays/OverlayHost.svelte';
  import CookiesPopup from './components/CookiesPopup.svelte';
  import { router } from './lib/router.svelte';
  import About from './pages/About.svelte';
  import Admin from './pages/Admin.svelte';
  import Albums from './pages/Albums.svelte';
  import Article from './pages/Article.svelte';
  import Audio from './pages/Audio.svelte';
  import Auth from './pages/Auth.svelte';
  import Authorize from './pages/Authorize.svelte';
  import Away from './pages/Away.svelte';
  import Blog from './pages/Blog.svelte';
  import Club from './pages/Club.svelte';
  import CoinsTransfer from './pages/CoinsTransfer.svelte';
  import Feed from './pages/Feed.svelte';
  import Friends from './pages/Friends.svelte';
  import Gifts from './pages/Gifts.svelte';
  import Groups from './pages/Groups.svelte';
  import Invite from './pages/Invite.svelte';
  import Language from './pages/Language.svelte';
  import LikeAction from './pages/LikeAction.svelte';
  import Likers from './pages/Likers.svelte';
  import Logout from './pages/Logout.svelte';
  import Messenger from './pages/Messenger.svelte';
  import NoSpam from './pages/NoSpam.svelte';
  import Notifications from './pages/Notifications.svelte';
  import PhotoPage from './pages/PhotoPage.svelte';
  import Profile from './pages/Profile.svelte';
  import Report from './pages/Report.svelte';
  import Search from './pages/Search.svelte';
  import Settings from './pages/Settings.svelte';
  import Stub from './pages/Stub.svelte';
  import Support from './pages/Support.svelte';
  import Tour from './pages/Tour.svelte';
  import Unban from './pages/Unban.svelte';
  import VideoPage from './pages/VideoPage.svelte';
  import Videos from './pages/Videos.svelte';
  import WallPermalink from './pages/WallPermalink.svelte';
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
    'away',
    'unban',
  ]);
  const publicGuest = $derived(PUBLIC_GUEST.has(router.route.name));
  const showAuth = $derived(
    router.route.name === 'auth' || (!auth.isAuthenticated && !publicGuest),
  );
  const showGuestSidebar = $derived(!auth.isAuthenticated && publicGuest && router.route.name !== 'language');
  const adminShell = $derived(router.route.name === 'admin');

  const stubTitle = $derived(
    (
      {
        notes: locale.t('my_notes'),
        events: locale.t('my_events'),
        apps: locale.t('apps'),
        docs: locale.t('my_documents'),
        fave: locale.t('faves'),
        'not-found': locale.t('not_found'),
      } as Record<string, string>
    )[router.route.name] ?? locale.t('site_name'),
  );
</script>

{#if !locale.ready}
  <div class="layout"></div>
{:else if showAuth}
  <Auth />
  <CookiesPopup />
{:else if adminShell}
  <Admin />
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
    {:else if router.route.name === 'club'}
      <Club />
    {:else if router.route.name === 'wall'}
      <WallPermalink />
    {:else if router.route.name === 'like'}
      <LikeAction />
    {:else if router.route.name === 'likers'}
      <Likers />
    {:else if router.route.name === 'photo'}
      <PhotoPage />
    {:else if router.route.name === 'video'}
      <VideoPage />
    {:else if router.route.name === 'notifications'}
      <Notifications />
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
    {:else if router.route.name === 'away'}
      <Away />
    {:else if router.route.name === 'gifts'}
      <Gifts />
    {:else if router.route.name === 'report'}
      <Report />
    {:else if router.route.name === 'nospam'}
      <NoSpam />
    {:else if router.route.name === 'unban'}
      <Unban />
    {:else if router.route.name === 'coins'}
      <CoinsTransfer />
    {:else if router.route.name === 'authorize'}
      <Authorize />
    {:else if router.route.name === 'logout'}
      <Logout />
    {:else}
      <Stub title={stubTitle} empty={locale.t('nothing_here')} />
    {/if}
    <Footer inset={auth.isAuthenticated} />
  </div>
  <OverlayHost />
  <CookiesPopup />
  {#if auth.isAuthenticated}
    <AudioPlayer />
  {/if}
{/if}
