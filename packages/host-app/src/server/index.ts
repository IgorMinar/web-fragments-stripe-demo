import { webFragmentsMiddleware } from './web-fragments.config';

export default {
	async fetch(request, env): Promise<Response> {
		console.log('playground-gateway request:', request.url);

		return webFragmentsMiddleware(request, async () => {
			// We serve index.html in this obscure way because cloudflare-vite plugin doesn't currently support an easier way to create middleware workers that natively support index.html originating in Vite.
			if (request.headers.get('Sec-Fetch-Dest') === 'document') {
				return env.ASSETS.fetch(
					new URL('_assets/index.html', 'https://worker.assets/'),
				);
			}

			// if no match, return 404
			const assetResponse = await env.ASSETS.fetch(
				new URL('_assets/404.html', 'https://worker.assets/'),
			);
			return new Response(assetResponse.body, {
				...assetResponse,
				status: 404,
			});
		});
	},
} satisfies ExportedHandler<Env>;
