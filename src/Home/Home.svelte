<script lang="ts">
    import { Container, Row, Col } from 'sveltestrap';
    import NavigationBar from '../NavigationBar/NavigationBar.svelte';
    import Footer from '../Footer/Footer.svelte';
</script>

<Container>
    <main>
        <Row>
            <Col>
                <NavigationBar />
                <div id="greetings">
                    <h1>KonAqua!</h1>
                    <hr width="200rem">
                    <p>"KonAqua! Minato Aqua desu!"</p>
                    <p>I'm virtual idol cat ears marine maid-styled gamer Minato Aqua~<br>I'm from the 2nd generation of Hololive Idol Production~</p>
                    <hr width="140rem">
                    <a href="/overview" class="btn learn-more" style="background: #131b2c; color: #ffffff;">Learn More</a>
                </div>
            </Col>
            <Col>
                <img src="img/aqua-potrait.png" loading="lazy" height="720" style="padding-left: 1.5rem;" alt="Minato Aqua">
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
</style>