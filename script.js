new Vue({
	el: '#app',
	data: {
		title: 'Start Typing!!',
		link: 'https://www.google.com/',
		friendlyLink: '<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a>',
		name: 'Navin',
		age: '25',
		assignmentLink:
			'https://images.unsplash.com/photo-1576792254006-4f8b51ed204b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		},
		mathRandom: function() {
			return Math.random();
		}
	}
});
