<script lang="ts">
    import { Container, Row, Col } from 'sveltestrap';
    import NavigationBar from '../Components/NavigationBar.svelte';
    import Footer from '../Components/Footer.svelte';
</script>

<h1 class="text-center">Links</h1>

<Container>
    <Row>
        <Col>
            <NavigationBar />
            <hr />
            <div id="stage-1">
                <h3 class="horizon">⚓ 湊あくあ | Minato Aqua's Links</h3>
                <p>YouTube : <a href="https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg">Aqua Ch. 湊あくあ</a></p>
                <p>Website :
                    <ul>
                        <li><a href="https://hololive.hololivepro.com/en/talents/minato-aqua/">hololive Official Website (EN)</a></li>
                        <li><a href="https://hololive.hololivepro.com/talents/minato-aqua/">hololive Official Website (JP)</a></li>
                        <li><a href="https://en.hololive.tv/portfolio/items/433565">hololive.tv (EN)</a></li>
                        <li><a href="https://www.hololive.tv/portfolio/items/336383">hololive.tv (JP)</a></li>
                    </ul>
                <p>Twitter : <a href="https://twitter.com/minatoaqua">@minatoaqua</a></p>
                <p>Marshmallow : <a href="https://marshmallow-qa.com/minatoaqua">@minatoaqua</a></p>
                <p>Spotify : <a href="https://open.spotify.com/artist/6GHr4rGFHGRUuzuCuxJA0f">湊あくあ</a></p>
                <p>TwitCasting : <a href="https://twitcasting.tv/minatoaqua">@minatoaqua</a></p>
                <p>bilibili : <a href="https://space.bilibili.com/375504219/">湊-阿库娅Official</a></p>
                <p>OPENREC.tv : <a href="https://www.openrec.tv/user/minatoaqua">@minatoaqua</a></p>
                <p>Discord Fan Server : <a href="https://discord.gg/akukinhq">discord.gg/akukinhq</a></p>
            </div>
            <div id="website-related">
                <h3 class="horizon"><i class="fas fa-globe"></i> Website Related Links</h3>
                <p><i class="fab fa-github"></i> GitHub Repository : <a href="https://github.com/gifaldyazkaa/aqua-fanpage">@gifaldyazkaa/aqua-fanpage</a></p>
                <p>This website is Built with <a href="https://svelte.dev">Svelte</a>, <a href="https://sveltestrap.js.org">sveltestrap</a>, and <a href="https://www.npmjs.com/package/page">Page.js</a></p>
            </div>
        </Col>
    </Row>
</Container>
<Footer />

<style>
    div#stage-1, #website-related {
        padding-top: 2rem;
    }
    div .horizon {
        margin-bottom: 2rem;
    }
    h1, h3, p {
        font-family: 'Lexend', sans-serif;
    }
</style>