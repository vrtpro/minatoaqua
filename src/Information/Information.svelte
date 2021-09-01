<script lang="ts">
    import { Container, Row, Col } from 'sveltestrap';
    import NavigationBar from '../NavigationBar/NavigationBar.svelte';
    import Footer from '../Footer/Footer.svelte';
</script>

<h1 class="text-center">Information</h1>
<Container>
    <Row>
        <Col>
            <NavigationBar />
            <div id="details">
                <h3>Details</h3>
                <hr />
                <p><strong>Japanese Name</strong> : 湊あくあ</p>
                <p><strong>English Name</strong> : Minato Aqua</p>
                <p><strong>Debut Date</strong> : August 8, 2018 (YouTube)</p>
                <p><strong>Member of</strong> : hololive 2nd Gen</p>
                <p><strong>Fan Name</strong> : Aqua Crew (あくあクルー)</p>
                <p><strong>Emoji / Oshi Mark</strong> : ⚓</p>
            </div>
            <div id="personal">
                <h3>Personal</h3>
                <hr />
                <p><strong>Birthday</strong> : December 1st</p>
                <p><strong>Height</strong> : 148cm</p>
                <p><strong>Weight</strong> : 4x.x kg (Please don't ask a girl for their weight!)</p>
                <p><strong>Hobbies</strong> : Gaming and singing</p>
                <p><strong>Likes</strong> : Anime, manga, and omurice</p>
                <p><strong>Dreams and goals</strong> : To be the number one idol in the galaxy!</p>
                <p><strong>Unique skills</strong> : Able to identify shampoo brand just by smells</p>
            </div>
        </Col>
    </Row>
</Container>
<Footer />

<style>
    div#details,  #personal {
        padding-top: 2rem;
    }
    p, h1, h3 {
        font-family: 'Lexend', sans-serif;
    }
</style>