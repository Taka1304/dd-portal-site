export const DUMMYIMAGES = [
	"/images/business-cat-in-office.jpg",
	"/images/business-pug-working-on-laptop.jpg",
	"/images/hard-cover-books-on-blue-background.jpg",
	"/images/hands-typing.jpg",
	"/images/taking-notes-and-working-on-laptop.jpg",
	"/images/writing-sationary.jpg",
];

/**
 *
 * @returns Dummy Image URL
 */
export const RandomDummyImage = (): string => {
	const random = Math.floor(Math.random() * DUMMYIMAGES.length);
	return DUMMYIMAGES[random];
};
