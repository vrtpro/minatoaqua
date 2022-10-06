<script lang="ts">
  import { Container, Row, Col } from 'sveltestrap';
  import NavigationBar from '../Components/NavigationBar.svelte';
  import Footer from '../Components/Footer.svelte';
  export let firstDebut, likeThings;
  const likeThings1 = likeThings[0];
  const likeThings2 = likeThings[1];
  const likeThings3 = likeThings[2];
</script>

<svelte:head>
  <title>Overview - 湊あくあ | Minato Aqua Fanpage</title>
</svelte:head>

<h1 class="text-center">Overview</h1>
<Container>
  <Row>
    <hr />
    <Col>
      <NavigationBar />
      <div class="intro">
        <h2 class="h2-title">湊あくあ | Minato Aqua</h2>
        <hr />
        <p>"A-quality day to one and all! I'm Minato Aqua!"</p>
        <p>
          A marine maid-styled virtual maid. She is trying her very best, yet is
          still sometimes awkward and clumsy.
        </p>
        <p>
          Source: <a
            href="https://hololive.hololivepro.com/en/talents/minato-aqua"
            class="link-general">Hololive official website</a
          >
        </p>
        <p>
          Started First Debut at {firstDebut}. Now, she reached over 1,39
          Million Subscribers at YouTube as Hololive's 2nd Gen VTuber.
        </p>
        <p>
          She has an neko ears, and have an imaginary cat named NEKO! She have a
          real cat named Komugi! (Usually called むーちゃん (Mu-chan))
        </p>
        <p>
          Likes {likeThings1}, {likeThings2}, and {likeThings3}. Often to
          playing games when Streaming at YouTube. Playing Minecraft, Resident
          Evil Village, and others more!
        </p>
      </div>
    </Col>
    <Col>
      <img
        src="img/aqua-outfit-1-portrait.webp"
        loading="lazy"
        height="720"
        style="padding-left: 1.5rem;"
        alt="Minato Aqua"
      />
    </Col>
  </Row>
</Container>
<Footer />

<style>
  div.intro {
    padding-top: 2rem;
  }
  h1,
  h2 {
    font-family: 'Lexend', sans-serif;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    text-decoration-style: dotted;
  }
  .h2-title {
    margin-bottom: 2rem;
  }
  p {
    font-family: 'Lexend', sans-serif;
  }
</style>
