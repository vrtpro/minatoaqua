<script lang="ts">
  import { Container, Row, Col } from 'sveltestrap';
  import NavigationBar from '../Components/NavigationBar.svelte';
  import Footer from '../Components/Footer.svelte';
  // Biar hemat, deklarasikan semua link disini.
  const link = {
    youtube: 'https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg',
    twitter: 'https://twitter.com/minatoaqua',
    marshmallow: 'https://marshmallow-qa.com/minatoaqua',
    fanserver: 'https://discord.gg/akukinhq',
    hololive: 'https://hololive.hololivepro.com/en/talents/minato-aqua/',
    githubdev: 'https://github.com/gifaldyazkaa',
    repository: 'https://github.com/gifaldyazkaa/aqua-fanpage',
    sveltejs: 'https://svelte.dev',
    sveltestrap: 'https://sveltestrap.js.org',
    pagejs: 'https://npmjs.com/package/page',
    svelteseo: 'https://github.com/artiebits/svelte-seo',
    spageprogress: 'https://npmjs.com/package/svelte-page-progress',
  };
</script>

<svelte:head>
  <title>Links - 湊あくあ | Minato Aqua Fanpage</title>
</svelte:head>

<h1 class="text-center">Links</h1>

<Container>
  <Row>
    <Col>
      <NavigationBar />
      <hr />
      <div id="aqua-link">
        <h3 class="h3-title">⚓ 湊あくあ | Minato Aqua</h3>
        <p>
          Searching for YouTube Channel? Here you go! Her YouTube Channel Name
          is <a href={link.youtube} target="_blank" class="link-general"
            >Aqua Ch. 湊あくあ</a
          >.
        </p>
        <p>
          Searching for Twitter Account? Her Twitter Account Username is <a
            href={link.twitter}
            target="_blank"
            class="link-general">@minatoaqua</a
          >.
        </p>
        <p>
          Marshmallow username is <a
            href={link.marshmallow}
            target="_blank"
            class="link-general">@minatoaqua</a
          >. Here you can ask any question about him.
        </p>
        <p>
          Want to Chill or Hang out with the fans? You can join <a
            href={link.fanserver}
            target="_blank"
            class="link-general">Akukin HQ Discord Server</a
          >.
        </p>
        <p>
          You can see others information about him at <a
            href={link.hololive}
            target="_blank"
            class="link-general">Hololive Official Website</a
          >.
        </p>
      </div>
      <div id="website-related">
        <h3 class="h3-title"><i class="fas fa-globe" /> Website Related</h3>
        <p>
          The developer and creator is <a
            href={link.githubdev}
            target="_blank"
            class="link-general">Gifaldy Azka</a
          >. You can follow me or something. Thanks!
        </p>
        <p>
          This Website is Open-source and available at GitHub. If you searching
          for GitHub Repositories, You can go to <a
            href={link.repository}
            target="_blank"
            class="link-general">gifaldyazkaa/aqua-fanpage</a
          >. Don't Forget to Star the Repository! And any contribution very
          welcomed.
        </p>
        <p>This website built with</p>
        <ul>
          <li>
            <a href={link.sveltejs} target="_blank" class="link-general"
              >Svelte</a
            > - Cybernetically enhanced web apps.
          </li>
          <li>
            <a href={link.sveltestrap} target="_blank" class="link-general"
              >Sveltestrap</a
            > - Known as Bootstrap for Svelte 3.
          </li>
          <li>
            <a href={link.pagejs} target="_blank" class="link-general"
              >Page.js</a
            > - Tiny Express-inspired client-side router.
          </li>
          <li>
            <a href={link.svelteseo} target="_blank" class="link-general"
              >Svelte SEO</a
            > - Plugin that makes managing your SEO easier in Svelte projects.
          </li>
          <li>
            <a href={link.spageprogress} target="_blank" class="link-general"
              >svelte-page-progress</a
            > - Svelte Component that Tracks a Users Progress through a Page as they
            Scroll.
          </li>
        </ul>
      </div>
    </Col>
  </Row>
</Container>
<Footer />

<style>
  div#aqua-link,
  #website-related {
    padding-top: 2rem;
  }
  div .h3-title {
    margin-bottom: 2rem;
  }
  h1,
  h3,
  p,
  ul,
  li {
    font-family: 'Lexend', sans-serif;
  }
  #aqua-link,
  #website-related,
  a:hover {
    text-decoration: none;
  }
</style>
