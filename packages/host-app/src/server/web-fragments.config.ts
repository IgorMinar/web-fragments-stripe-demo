import { FragmentGateway, getWebMiddleware } from 'web-fragments/gateway';

const wfGateway = new FragmentGateway({});

wfGateway.registerFragment({
	fragmentId: 'stripe-fragment-app',
	endpoint: 'http://localhost:3000',
	routePatterns: [
		`/checkout/:_*`,
	],
});

export const webFragmentsMiddleware = getWebMiddleware(wfGateway, {
	mode: import.meta.env.MODE,
});
