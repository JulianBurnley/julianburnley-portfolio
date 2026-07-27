# Flexbox Activity
In this activity, you will use flexbox to create a product card that will display an image of the product, a title, the price, a short description, and a view more button.

## Activity Objectives
1. Create a product card component using flexbox.
2. Display multiple product cards on a web page using flexbox.
3. Style the elements with CSS.

## HTML Directions
1. Open the `index.html` file within the root of the repo.
2. Update the page title and metadata at the top of the document and the information in the footer.
3. Save and apply a commit to the file.
4. Use the `Save As` command to save a new file.
   1. Save the file to the `flexbox` folder with the name: `product-cards.html`.
5. Within the header:
   1. Change the heading text to the following: `Product Card Component`
6. Within the main section:
   1. Remove the `dl` element.
   2. Create a product card as follows:
      1. Create a `section` element with a `product-card` class.
      2. Add an image element with an `alt` attribute. Use the `product-placeholder.jpg` image within the `images` subfolder.
      3. Add a `div` element with a `product-info` class.
      4. Within the `div`:
         1. Add a level 2 heading with the text `Product Title`.
         2. Add a paragraph with a class of `product-id` and the text of `Product id: 324569`. Place the numbers within a `span` element.
         3. Add a paragraph with a class of `price` and the text of `2.50`.
         4. Add a paragraph with a class of `description` and add a sentence of placeholder text.
         5. Add a button with a class of `btn add-cart` and the text of `Add to Cart`.
7. Save and apply a commit to the file.

## Styling Directions
Use any appropriate selectors and property-value pairs to style the web pages and elements. Keep in mind the cascade, specificity, and inheritance as you apply properties to the various elements.

1. Open the `main.css` file from the `css` folder.
2. Create a color scheme of your choosing defining colors for the following: a dark color, a light color, an accent color, a button color, and a shadow color.
3. Style the header element as follows:
   1. Make the element a flex container by changing the `display`.
   2. Change the flex direction to be `column`.
   3. Justify the content so there is space between the items.
4. Style the footer element as follows:
   1. Make the element a flex container by changing the `display`.
   2. Define the flex direction to be `row`.
   3. Make sure there is no flex wrap.
   4. Justify the content to the center of the container.
   5. Add the dark color to the background.
   6. Add the light color to the text.
   7. Reduce the font size to be `.85em`.
   8. Add a top and bottom padding of `1rem`. *TIP: REM is used here because the font size of the element was reduced and EM would make it equal to the reduced font size.*
   9. Make the paragraphs into flex containers with a column direction.
   10. Give a width of `15em` to the paragraphs.
   11. Add a left and right margin of `1rem` to the paragraphs.
   12. Self align the `span` elements within the paragraph to the flex end.
5. Save and apply a commit to the file.
6. Style the product card element as follows:
   1. Add the light color to the background.
   2. Add the dark color to the text.
   3. Add a box shadow that move `3px` to the left and down, a `6px` blur radius, and the shadow color.
   4. Add a maximum width of `18em` and a minimum width of `12em`.
   5. Convert the element into a flex container with a column direction and no flex wrap.
   6. Add a margin of `1em` to all sides.
   7. Add a border radius of `.5em`.
7. Style the product card image element as follows:
   1. Change the display to be `block`.
   2. Set the width to be `100%` of the container.
   3. Add a top left and top right border radius to match the container's radius.
   4. Add a solid `2px` bottom border using the dark color.
8. Save and apply a commit to the file.
9. Style the product info as follows:
   1. Add a top and bottom margin of `.5rem`.
   2. Add a top and bottom padding of `.25rem` and a left and right padding of `.75rem`.
   3. Convert the element to a flex container with a column flex direction.
   4. Align the heading to the center of the container.
   5. Change the font size of the heading to `1.3rem` and add a line height of `1.5`.
10. Style the product id element as follows:
   1. Change the font size to `.75rem`.
   2. Apply a bottom padding of `.5rem`.
   3. Set the width to be equal to the `max-content`.
   4. Self align to the flex end.
    1. Change the font size to `1.1rem`.
    2. Apply the accent color to the text.
    3. Apply a bold font weight.
    4. Self align the element to the flex end.
    5. Add a bottom padding of `.75rem`.
    6. Create a selector to target the `::before` pseudo-element and add the `content` property with a value of `"$ "`. *TIP: This will make the dollar symbol appear before the price, which can help to be able to programmatically change the price of a product and not worry about the currency symbol. And you can change this `content` value if the site loads in other localities and countries.*
12. Save and apply a commit to the file.
13. Style the button element as follows:
    1. Give the button a border radius of `1em`.
    2. Add a padding of `.75em`. 
    3. Define the width as `10em`.
    4. Add a thin solid border with the dark color.
    5. Add a box shadow with a `4px` blur and the shadow color.
    6. Add a top margin of `1em`.
    7. Self align the element to the center.
14. Style the add cart element as follows:
    1. Add the dark color to the background.
    2. Add the light color to the text.
    3. Add a hover state swapping the the background and text colors and using the accent color for the box shadow.
15. Save and apply a commit to the file.

## Conclusion
When you are done with the activity:
1. Be sure you check for any validation errors and correct them.
2. Sync the files (i.e., push your changes) with the remote repo on GitHub.