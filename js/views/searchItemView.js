/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// Todo Item View
	// --------------

	// The DOM element for a todo item...
	app.SearchItemView = Backbone.View.extend({
		//... is a list tag.
		tagName:  'li',

		// Cache the template function for a single item.
		template: _.template($('#searchitem-template').html()),

		// The DOM events specific to an item.
		events: {
			'click .view': 'addProduct'
		},

		// The TodoView listens for changes to its model, re-rendering. Since
		// there's a one-to-one correspondence between a **Todo** and a
		// **TodoView** in this app, we set a direct reference on the model for
		// convenience.
		initialize: function () {
		},

		// Re-render the titles of the todo item.
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		addProduct: function () {
			app.resultsItemsCollection.create({
				item_id: this.model.get('item_id'),
				item_name: this.model.get('item_name'),
				brand_id: this.model.get('brand_id'),
				brand_name: this.model.get('brand_name'),
				calories: this.model.get('calories')
			});
		}

	});
})(jQuery);
