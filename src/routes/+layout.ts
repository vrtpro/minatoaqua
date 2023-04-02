import type { PageLoadEvent } from './$types';

export const load = ({ url }: PageLoadEvent) => {
	const { pathname } = url;

	return { pathname };
};
