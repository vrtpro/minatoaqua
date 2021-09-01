<script lang="ts">
    import { Container, Row, Col } from 'sveltestrap';
    import NavigationBar from '../NavigationBar/NavigationBar.svelte';
    import Footer from '../Footer/Footer.svelte';
</script>

<h1 class="title text-center">Overview</h1>
<Container>
    <Row>
        <hr />
        <Col>
            <NavigationBar />
            <div class="intro">
                <h2>湊あくあ | Minato Aqua</h2>
                <hr>
                <p>"A-quality day to one and all! I'm Minato Aqua!"</p>
                <p>A marine maid-styled virtual maid. She is trying her very best, yet is still sometimes awkward and clumsy.</p>
                <p>~<a href="https://hololive.hololivepro.com/en/talents/minato-aqua">Hololive official website</a></p>
                <p>Started First Debut at August 8, 2018. Now, she reached over 1,34 Million Subscribers at YouTube as Hololive's 2nd Gen VTuber.</p>
                <p>She has an neko ears, and have an imaginary cat named NEKO! She have a real cat named Komugi! (Usually called むーちゃん (Mu-chan))</p>
                <p>Likes anime, manga, and omurice. Often to playing games when Streaming at YouTube. Playing Minecraft, Resident Evil Village, and others more!</p>
            </div>
        </Col>
        <Col>
            <img src="img/aqua-outfit-1-potrait.png" loading="lazy" height="720" style="padding-left: 1.5rem;" alt="Minato Aqua">
        </Col>
    </Row>
</Container>
<Footer />

<style>
    div.intro {
        padding-top: 2rem;
    }
    h1, h2 {
        font-family: 'Lexend', sans-serif;
    }
    p {
        font-family: 'Lexend', sans-serif;
    }
</style>