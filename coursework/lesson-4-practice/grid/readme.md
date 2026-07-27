# Page Layout Activity
In this activity, you will use CSS Grid to layout the content of the page and place them in appropriate areas and cells.

## Activity Objectives
1. Define a grid using CSS.
2. Place elements within the cells and areas of a grid.
3. Style the elements with CSS.

## HTML Directions
1. Open the `index.html` file within the root of the repo.
2. Update the page title and metadata at the top of the document and the information in the footer.
3. Save and apply a commit to the file.
4. Add an `id` to the `main` element of `maincontent`.
5. Within the header element:
   1. Add a `div` element prior to the heading with an `id` of `skip`.
   2. Add a hyperlink to the `div` element where the `href` points to the `id` of the `main` element. *This will create a bookmark link to help improve accessibility for a site that allows users to skip the navigation and other content and go straight to the content of the page.*
6. Within the footer element:
   1. Update the information with your details.
7. Save and apply a commit to the file.

## Styling Directions
Use any appropriate selectors and property-value pairs to style the web pages and elements. Keep in mind the cascade, specificity, and inheritance as you apply properties to the various elements.

1. Open the `main.css` file from the `css` folder.
2. Fill in your details within the comment at the top of the file.
3. Create a color scheme of your choosing defining colors for the following: a dark color, a medium-light color, a light color, a medium accent color, and a shadow color.
4. Use [Google Fonts](https://fonts.google.com/) to select fonts to use for the site.
   1. Have a serif font to use for headings and a sans-serif font for the body text.
   2. Import those fonts accordingly.
5. Create a browser reset style and set the following properties:
   1. Set the margin to `0`.
   2. Set the padding to `0`.
   3. Set the box sizing to `border-box`.
6. Save and apply a commit to the file.

### Create the Grid Layout
1. Style the body element as follows:
   1. Use the `display` property to convert it into a grid container.
   2. Create 3 template columns with widths of `10em`, `auto`, and `15em`.
   3. Create 3 template rows with heights of `4em`, `auto`, and `max-content`.
   4. Define 5 template areas with:
      1. The `header` area taking up the first row spanning all columns.
      2. The `left` area taking up the second row, first column.
      3. The `main` area taking up the second row, second column.
      4. The `right` area taking up the second row, last column.
      5. The `footer` area taking up the last row spanning all columns.
   5. Set the height to `100vh`.
   6. Define the font family using the selected fonts and fallbacks.
   7. Apply the light color to the background.
   8. Apply the dark color to the text.
2. Style the header element as follows:
   1. Assign it to the `header` grid area.
   2. Align the text to the center.
   3. Apply the dark color to the background.
   4. Apply the light color to the text.
   5. Add a shadow that goes down `5px`, blurs `5px`, and uses the shadow color. *Tip: You will need to set the horizontal dimension to `0`.*
   6. Add a top padding of `.75em`.
   7. Set the `z-index` property to `3` to ensure that it is drawn on top of other elements on the page. *This is needed to make the shadow display on top of the elements in the second row.*
3. Save and apply a commit to the file.
4. Style the left column element as follows:
   > *TIP: You will notice that the element has two classes applied to it, `column` and `left`. This will allow you to style both columns the same, but also target just one of them using the second class. You can create a selector that targets elements that have multiple classes by combining them without a space, e.g., `.column.left`.*
   1. Assign it to the `left` grid area.
   2. Add a shadow that goes to the right by `3px`, blurs by `4px`, and uses the shadow color. *Tip: You will need to set the vertical dimension to `0`.*
5. Style the main element as follows:
   1. Assign it to the `main` grid area.
   2. Add a padding of `1em`.
6. Style the right column element as follows:
   1. Assign it to the `right` grid area.
   2. Add a shadow that goes to the left by `-3px`, blurs by `4px`, and uses the shadow color. 
7. Save and apply a commit to the file.
8. Style the footer as follows:
   1. Assign it to the `footer` grid area.
   2. Use the `display` property to convert it into a grid container.
   3. Create 4 template columns with widths of `10em`, `repeat(2, 1fr)`, and `15em`.
   4. Add a grid gap of `.5em`.
   5. Apply the dark color to the background.
   6. Apply the light color to the text.
   7. Add a shadow that goes to the up by `-5px`, blurs by `5px`, and uses the shadow color. 
9. Style the student card element as follows:
   1. For the first of type, start the grid column at `2`.
   2. For the last of type, start the grid column at `3`.
10. Save and apply a commit to the file.

### Additional Page Stylings
1. Style the link within the `skip` element, so it appears off screen visually initially, as follows:
   1. Set the position to be `absolute`.
   2. Set the `left` property to `-10000px`.
   3. Set the `top` property to `0`.
   4. Apply a width and height of `1px`.
   5. Set the `overflow` to `hidden`.
   6. Add a top and bottom padding of `.5em` and a left and right padding of `1em`.
   7. Add a border radius to the bottom right and bottom left corners of `.5em`.
   8. Apply the medium light color to the background.
   9. Apply the dark color to the text.
   10. Remove the text decoration.
   11. Create a focus link state with the `left` property set to `1em` and the width and height set to `auto`. *When you use the `TAB` key and the link receives focus, it will appear within the viewport for users to see.*
2. Style the `column` elements as follows:
   1. Apply the medium light color to the background.
   2. Apply the dark color to the text.
   3. Add a padding to all sides of `.5em`.
   4. For the heading, apply a solid `2px` border using the accent color, a padding of `.25em`, and a font size of `1.1em`.
   5. For the paragraph, apply top margin of `.75em` and a font size of `.85em`.
   6. For the navigation links, change the display to `block`, the dark color for the text, a top and bottom padding of `.5em` and a left and right padding of `1em`, and no text decoration.
   7. Create a `hover` link state where the light color is applied to the background.
   8. Create an `active` link state where the dark colors is applied to the background and the light color is applied to the text.
3. Save and apply a commit to the file.
4. Create a `focus` link state for all links with a `2px` dashed outline that uses the accent color.
5. Style the student card element as follows:
   1. Apply a padding of `.5em` to all sides.
   2. Increase the font weight for the paragraph element.
   3. Remove the list style type from the unordered list and apply a left margin of `.5em`.
6. Style the definition list as follows:
7. Add a left margin of `1em` to the definition list.
8. Increase the font weight of the `dt` element.
9. Add a top and bottom margin of `.5em` and a left and right margin of `1.5em` to the `dd` element.
10. Add a bottom padding of `.75em` to the heading within the main element.
11. Save and apply a commit to the file.

## Conclusion
When you are done with the activity:
1. Be sure you check for any validation errors and correct them.
2. Sync the files (i.e., push your changes) with the remote repo on GitHub.