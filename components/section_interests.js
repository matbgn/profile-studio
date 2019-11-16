var sectionInterestsComponent = {
	template: '#section-interests-template',

	

	mounted: function()
	{
		
	},



	destroyed: function()
	{
		
	},


	
	data: function()
	{
		return {
			item: {}
		};
	},

	

	methods: {
		addInterest: function()
		{
			var item = sections.getDefaultInterest();
			this.$root.sections.interests.push(item);
		},

		addKeyword: function(index)
		{
			var item = sections.getDefaultInterestKeywoard();
			//console.log("addHighlight(" + index + ")", this.$root.sections.interests[index]);
			this.$root.sections.interests[index].keywords.push(item);
		}
	}
};