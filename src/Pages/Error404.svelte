<script lang="ts">
    import { Container, Row, Col } from "sveltestrap";
    import NavigationBar from "../Components/NavigationBar.svelte";
    import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo 
	title="404 Not Found - 湊あくあ | Minato Aqua Fanpage"
	description="Requested URL is Not Found."
	openGraph={{
		title: "404 Not Found - 湊あくあ | Minato Aqua Fanpage",
		description: "Requested URL is Not Found.",
		url: "https://aqua-fanpage.vercel.app",
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
		title: "404 Not Found - 湊あくあ | Minato Aqua Fanpage",
		description: "Requested URL is Not Found.",
		image: "/favicon.png",
		imageAlt: "Website Icon",
	  }}
/>

<Container>
    <Row>
        <Col>
            <NavigationBar />
            <div id="notfound" class="text-center justify-content-center m-auto">
                <h1>:(</h1>
                <h2>404 - Not Found</h2>
                <p>Uhh, sadly we can't find your request at this web page. Check back the URL, Or maybe you want back to <a href="/">Home page</a>?</p>
            </div>
        </Col>
    </Row>
</Container>

<style>
    h1, h2, p {
        font-family: 'Lexend', sans-serif;
    }
    div#notfound {
        padding-top: 3rem;
    }
    div#notfound h1 {
        font-size: 5rem;
    }
</style>