/*
 * jQuery fieldMatrix
 * Little plugin to simply generate a matrix of fields, allowing the user to add and delete rows.
 *
 * Copyright 2013 Quentin Delcourt <kant312@gmail.com>
 * MIT Licensed.
 *
 * https://github.com/kant312/jquery-fieldmatrix
 */

(function($)
{
	jQuery.fn.fieldMatrix = function(options)
	{
		//Default config
		var settings = $.extend({
			"templateClass"		: "template",
			"addRowClass"		: "add",
			"removeRowClass"	: "remove"
		}, options);

		//Update the index of each row so that they follow each other
		var updateRowIndexes = function(table) {
			table.find('tbody tr').not('.template').each(function(i,elt){
				var row = $(elt);
				row.find('input, select, textarea').each(function(j,input){
					var newName = input.name.replace(/\[[^]*\]\[/, '[' + i + '][');
					$(input).attr('name', newName).attr('id', newName);
				});
			});
		};

		//Function to remove row
		var removeRow = function(e) {
			var btn = $(e.target);
			btn.closest('tr').remove();
		};

		//Function to add row
		var addRow = function(e) {
			var table = $(e.target).closest('table'),
				tbody = table.find('tbody'),
				template = table.find('.' + settings.templateClass),
				newRow = template.clone(),
				inputs = newRow.find('input, select, textarea');

			//Enable inputs
			inputs.removeAttr('disabled');
			//Add the row to the end of the matrix
			newRow.hide().removeClass('hidden').removeClass('template');
			newRow.appendTo(tbody);
			newRow.find('.' + settings.removeRowClass).click(removeRow);
			newRow.show(200);
			//Update row indexes
			updateRowIndexes(table);
		};

		//Apply the plugin on all elements
		return this.each(function()
		{
			//This should be a matrix table
			var table = $(this);

			//Template inputs should be disabled
			table.find('.' + settings.templateClass).find('input, select, textarea').each(function(i,input){
				$(input).attr('disabled', 'disabled');
			});

			//Allow user to remove row
			var removeBtn = table.find('.' + settings.removeRowClass);
			removeBtn.click(removeRow);

			//Allow user to add a row
			var addBtn = table.find('.' + settings.addRowClass);
			addBtn.click(addRow);
		});
	};
})(jQuery);