<script lang="ts">
    import { Container, Row, Col } from 'sveltestrap';
    import NavigationBar from '../Components/NavigationBar.svelte';
    import Footer from '../Components/Footer.svelte';
    import SvelteSeo from 'svelte-seo';
    // Biar hemat, deklarasikan semua link disini.
    const link = {
        youtube: "https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg",
        twitter: "https://twitter.com/minatoaqua",
        marshmallow: "https://marshmallow-qa.com/minatoaqua",
        fanserver: "https://discord.gg/akukinhq",
        hololive: "https://hololive.hololivepro.com/en/talents/minato-aqua/",
        githubdev: "https://github.com/gifaldyazkaa",
        repository: "https://github.com/gifaldyazkaa/aqua-fanpage",
        sveltejs: "https://svelte.dev",
        sveltestrap: "https://sveltestrap.js.org",
        pagejs: "https://npmjs.com/package/page",
        spageprogress: "https://npmjs.com/package/svelte-page-progress"
    }
</script>

<SvelteSeo 
	title="Links - 湊あくあ | Minato Aqua Fanpage"
	description="Links about 湊あくあ"
	openGraph={{
		title: "Links - 湊あくあ | Minato Aqua Fanpage",
		description: "Any Links Related to 湊あくあ",
		url: "https://aqua-fanpage.vercel.app/links",
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
		title: "Links - 湊あくあ | Minato Aqua Fanpage",
		description: "Any Links Related to 湊あくあ",
		image: "/favicon.png",
		imageAlt: "Website Icon",
	  }}
/>

<h1 class="text-center">Links</h1>

<Container>
    <Row>
        <Col>
            <NavigationBar />
            <hr />
            <div id="aqua-link">
                <h3 class="h3-title">⚓ 湊あくあ | Minato Aqua</h3>
                <p>Searching for YouTube Channel? Here you go! Her YouTube Channel Name is <a href={link.youtube} target="_blank">Aqua Ch. 湊あくあ</a>.</p>
                <p>Searching for Twitter Account? Her Twitter Account Username is <a href={link.twitter} target="_blank">@minatoaqua</a>.</p>
                <p>Marshmallow username is <a href={link.marshmallow} target="_blank">@minatoaqua</a>. Here you can ask any question about him.</p>
                <p>Want to Chill or Hang out with the fans? You can join <a href={link.fanserver} target="_blank">Akukin HQ Discord Server</a>.</p>
                <p>You can see others information about him at <a href={link.hololive} target="_blank">Hololive Official Website</a>.</p>
            </div>
            <div id="website-related">
                <h3 class="h3-title"><i class="fas fa-globe"></i> Website Related</h3>
                <p>The developer and creator is <a href={link.githubdev} target="_blank">Gifaldy Azka</a>. You can follow me or something. Thanks!</p>
                <p>This Website is Open-source and available at GitHub. If you searching for GitHub Repositories, You can go to <a href={link.repository} target="_blank">gifaldyazkaa/aqua-fanpage</a>. Don't Forget to Star the Repository! And any contribution very welcomed.</p>
                <p>This website built with</p>
                <ul>
                    <li><a href={link.sveltejs} target="_blank">Svelte</a> - Cybernetically enhanced web apps.</li>
                    <li><a href={link.sveltestrap} target="_blank">Sveltestrap</a> - Known as Bootstrap for Svelte 3.</li>
                    <li><a href={link.pagejs} target="_blank">Page.js</a> - Tiny Express-inspired client-side router.</li>
                    <li><a href={link.spageprogress} target="_blank">svelte-page-progress</a> - Svelte Component that Tracks a Users Progress through a Page as they Scroll.</li>
                </ul>
            </div>
        </Col>
    </Row>
</Container>
<Footer />

<style>
    div#aqua-link, #website-related {
        padding-top: 2rem;
    }
    div .h3-title {
        margin-bottom: 2rem;
    }
    h1, h3, p, ul, li {
        font-family: 'Lexend', sans-serif;
    }
</style>