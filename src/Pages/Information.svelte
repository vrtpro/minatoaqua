<script lang="ts">
    import { Container, Row, Col } from 'sveltestrap';
    import NavigationBar from '../Components/NavigationBar.svelte';
    import Footer from '../Components/Footer.svelte';
    import SvelteSeo from 'svelte-seo';
    export let name, firstDebut, fanName, inRealBirthdate, generation, height, weight, oshiMark, hobby, likeThings, goals, uniqueSkill;
</script>

<SvelteSeo 
	title="Information - 湊あくあ | Minato Aqua Fanpage"
	description="Information about 湊あくあ"
	openGraph={{
		title: "Information  - 湊あくあ | Minato Aqua Fanpage",
		description: "Information about 湊あくあ",
		url: "https://aqua-fanpage.vercel.app/info",
		type: "website",
		images: [
			{
				url: "/favicon.png",
				width: 320,
				height: 320,
				alt: "Website Icon"
			}
		]
	}}
	twitter={{
		site: "@gifaldyazkaa",
		title: "Information - 湊あくあ | Minato Aqua Fanpage",
		description: "Information about 湊あくあ",
		image: "/favicon.png",
		imageAlt: "Website Icon",
	  }}
/>

<h1 class="text-center">Information</h1>
<Container>
    <Row>
        <Col>
            <NavigationBar />
            <hr />
            <div id="details">
                <h3 class="h3-title">Details</h3>
                <p><strong>Japanese Name</strong> : {name.jp}</p>
                <p><strong>English Name</strong> : {name.en}</p>
                <p><strong>Debut Date</strong> : {firstDebut} (YouTube)</p>
                <p><strong>Member of</strong> : {generation}</p>
                <p><strong>Fan Name</strong> : {fanName.en} ({fanName.jp})</p>
                <p><strong>Emoji / Oshi Mark</strong> : {oshiMark}</p>
            </div>
            <div id="personal">
                <h3 class="h3-title">Personal</h3>
                <p><strong>Birthday</strong> : {inRealBirthdate}</p>
                <p><strong>Height</strong> : {height}</p>
                <p><strong>Weight</strong> : {weight} (Please don't ask a girl for their weight!)</p>
                <p><strong>Hobbies</strong> : {hobby[0]} and {hobby[1]}</p>
                <p><strong>Likes</strong> : {likeThings[0]}, {likeThings[1]}, and {likeThings[2]}</p>
                <p><strong>Dreams and goals</strong> : {goals}</p>
                <p><strong>Unique skills</strong> : {uniqueSkill}</p>
            </div>
        </Col>
    </Row>
</Container>
<Footer />

<style>
    div#details,  #personal {
        padding-top: 2rem;
    }
    .h3-title {
        margin-bottom: 2rem;
    }
    p, h1, h3 {
        font-family: 'Lexend', sans-serif;
    }
</style>