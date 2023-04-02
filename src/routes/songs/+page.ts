import type { PageLoadEvent } from './$types';

export function load({}: PageLoadEvent) {
	return {
		songs: {
			EP: [
				{
					type: 'EP',
					name: 'あくたんのこと好きすぎ☆ソング',
					year: '2022',
					amount: '4 songs',
					cover: 'https://i.scdn.co/image/ab67616d00001e02a3ee92c45af505cc7d93da14',
					spotify: 'https://open.spotify.com/album/1UIKL23C2fWkAIVGzg5iyI'
				},
				{
					type: 'EP',
					name: '♡あくあたいむ・せれくと♡',
					year: '2022',
					amount: '4 songs',
					cover: 'https://i.scdn.co/image/ab67616d00001e0284418d0e98db50181ac41c75',
					spotify: 'https://open.spotify.com/album/2H8XvgMgtMyq2BO1cqEvBK'
				}
			],
			singles: [
				// FL
				{
					type: 'Single',
					name: '君の最推しにしてよ!',
					year: '2022',
					amount: '2 song',
					cover: 'https://i.scdn.co/image/ab67616d00001e02e0ba57de13d50763f81b5656',
					spotify: 'https://open.spotify.com/album/1zQ17VVzLhbk3HneyDpZlR'
				},
				{
					type: 'Single',
					name: '未だ、青い',
					year: '2022',
					amount: '2 song',
					cover: 'https://i.scdn.co/image/ab67616d00001e026f42eb0bff76d51dc8d7313b',
					spotify: 'https://open.spotify.com/album/22fnrIRWsVjWF7a2gh7NQd'
				},
				{
					type: 'Single',
					name: 'あいわな',
					year: '2022',
					amount: '2 song',
					cover: 'https://i.scdn.co/image/ab67616d00001e02ab4ca2dd0d0bc244b610804e',
					spotify: 'https://open.spotify.com/album/4sm4lelQ9mboe3XSf4pfM4'
				},
				{
					type: 'Single',
					name: 'uni-birth',
					year: '2021',
					amount: '2 song',
					cover: 'https://i.scdn.co/image/ab67616d00001e027a865901af9413a233a58194',
					spotify: 'https://open.spotify.com/album/4cgpQeMPBvqBZBgXLrat3A'
				},
				{
					type: 'Single',
					name: 'きらきら',
					year: '2021',
					amount: '2 song',
					cover: 'https://i.scdn.co/image/ab67616d00001e023c267c0bf61abfdd41fcefc9',
					spotify: 'https://open.spotify.com/album/0CfXixPHSrvB8WDhVzDoCW'
				},
				{
					type: 'Single',
					name: 'aqua iro pallete',
					year: '2021',
					amount: '1 song',
					cover: 'https://i.scdn.co/image/ab67616d00001e02ed6119b6b7288331e6bc4ac4',
					spotify: 'https://open.spotify.com/album/2aSTD2eb1g0Jd7l4VRYycF'
				},
				{
					type: 'Single',
					name: '海想列車',
					year: '2021',
					amount: '2 songs',
					cover: 'https://i.scdn.co/image/ab67616d00001e02423d9ed637fb5e0f4fb3867d',
					spotify: 'https://open.spotify.com/album/2zTddvb5begCGvdHaGYoCQ'
				},
				{
					type: 'Single',
					name: '#あくあ色ぱれっと',
					year: '2020',
					amount: '2 songs',
					cover: 'https://i.scdn.co/image/ab67616d00001e02b4d82f9dc3eef83b857aad0c',
					spotify: 'https://open.spotify.com/album/0yBm2Tr36F20tCpUHDLhA7'
				},
				{
					type: 'Single',
					name: 'Meaqua',
					year: '2019',
					amount: '1 song',
					cover: 'https://i.scdn.co/image/ab67616d00001e023d1b0aa1db332ec8c7e37645',
					spotify: 'https://open.spotify.com/album/2oY9HT7UwY7oXacX6kHI7t'
				}
			]
		}
	};
}
