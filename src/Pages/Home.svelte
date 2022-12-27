<script lang="ts">
  import { Container, Row, Col } from 'sveltestrap';
  import NavigationBar from '../Components/NavigationBar.svelte';
  import Footer from '../Components/Footer.svelte';
  export let greetingsWord, introductionWords, name;
</script>

<svelte:head>
  <title>湊あくあ | Minato Aqua Fanpage</title>
</svelte:head>

<Container>
  <main>
    <Row>
      <Col>
        <NavigationBar />
        <div id="greetings">
          <h1>{greetingsWord.en}</h1>
          <hr class="hr1" />
          <p>"{introductionWords}"</p>
          <p>
            I'm virtual idol cat ears marine maid-styled gamer {name.en}~<br
            />I'm from the 2nd generation of Hololive Idol Production~
          </p>
          <hr class="hr2" />
          <a
            href="/overview"
            class="btn learn-more"
            style="background: #131b2c; color: #ffffff;"
            >Go to Overview &nbsp; <i class="fas fa-chevron-right" /></a
          >
        </div>
      </Col>
      <Col>
        <img
          src="img/aqua-portrait.webp"
          loading="lazy"
          height="720"
          width="335"
          style="padding-left: 1.5rem;"
          alt="Minato Aqua"
        />
      </Col>
    </Row>
  </main>
</Container>
<Footer />

<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
    main .row .col #greetings {
      padding-top: -6rem;
    }
  }
  main {
    font-family: 'Lexend', sans-serif;
  }
  main .row .col #greetings {
    padding-top: 6rem;
  }
  main .row .col #greetings a:hover {
    text-decoration: none;
  }
</style>
