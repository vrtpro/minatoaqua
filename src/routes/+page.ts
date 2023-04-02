import type { PageLoadEvent } from './$types';

export function load({}: PageLoadEvent) {
	return {
		introduction: 'KonAqua! Minato Aqua desu!',
		greetings: {
			en: 'KonAqua!',
			jp: 'こんあくあ～'
		}
	};
}
