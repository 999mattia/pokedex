import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import Router from 'next/router'
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		Router.events.on("routeChangeStart", (url) => {
			setIsLoading(true)
		});

		Router.events.on("routeChangeComplete", (url) => {
			setIsLoading(false)
		});

		Router.events.on("routeChangeError", (url) => {
			setIsLoading(false)
		});

	}, [Router])

	return (<><Header />{isLoading && <Loader />}<Component {...pageProps} /> </>
	)
}

export default MyApp
