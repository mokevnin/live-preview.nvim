function livepreview_renderMermaid() {
	mermaid.run({
		querySelector: '.language-mermaid',
	});
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

mermaid.initialize({
	startOnLoad: false,
	securityLevel: 'loose',
	theme: prefersDark ? 'redux-dark-color' : 'redux-color',
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
	mermaid.initialize({
		startOnLoad: false,
		securityLevel: 'loose',
		theme: e.matches ? 'redux-dark-color' : 'redux-color',
	});
	livepreview_renderMermaid();
});

livepreview_renderMermaid();
