'use strict';

const Search = (update) => {
	const container = $("<div></div>");
	const input = $("<input type='text' placeholder='Ingresa tu distrito a buscar'/>");
	const listOptions = $("<div></div>");

	container.append(input);
	container.append(listOptions);

	return container;
};