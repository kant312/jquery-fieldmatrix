jquery-fieldmatrix
==================

Little plugin to simply generate a matrix of fields, allowing the user to add and delete rows.

## Usage

The plugin should receive a collection of `<table>` HTML elements. A matrix HTML code should look like this:

	<table class="matrix">
		<tbody>
			<!-- This first row is a "template" row that will be appended to the tbody element -->
			<tr class="template">
				<td><input name="example[i][foo]" /></td>
				<td><input name="example[i][bar]" /></td>
				<td><input type="button" class="remove" value="Remove row" /></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td><input type="button" class="add" value="Add row" /></td>
			</tr>
		</tfoot>
	</table>

This is enough to create a simple matrix of fields. In this case, the matrix could be activated using the following code:

	$('.matrix').fieldMatrix();

To sum it up, the plugin needs to be able to find:

+ the template row
+ the "add row" button
+ the "remove row" buttons

## Configuration

You may configure the classes that you will use for each of the matrix elements. Here is an example of a config object:

	var config = {
		"templateClass"	: "template_foo",
		"addRowClass"	: "add_foo",
		"removeRowClass": "remove_foo"
	};

	$('.matrix').fieldMatrix( config );

### templateClass

`templateClass` is used to find the row holding the fields that will be added to the matrix. This row should always be in the `<tbody>` element

### addRowClass

`addRowClass` is the name of the class that you applied on the "Add row" button.

### removeRowClass

`removeRowClass` is the name of the class that you applied on the "Remove row" buttons.
