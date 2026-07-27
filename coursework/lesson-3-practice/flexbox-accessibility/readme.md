# Reflow a Page Activity
In this activity, you will use flexbox to create a page that will reflow and position the content appropriately for different screen sizes and zoom levels.

## Activity Objectives
1. Create form components.
2. Check the form works at different screen sizes and zoom levels.
3. Style the elements with CSS.

## HTML Directions
1. Open the `index.html` file within the root of the repo.
2. Use the `Save As` command to save a new file.
   1. Save the file to the `flexbox-accessibility` folder with the name: `reflow.html`.
3. Change the page title to the following: `Flexbox Reflow`
4. Remove the `dl` element from the main section.
5. Create an `aside` element after the main element and before the footer element.
   1. Add a level 2 heading with the text: `Complementary Info`
   2. Add 2 paragraphs filled with placeholder lorem ipsum text.
6. Save and apply a commit to the file.
7. In the main element section:
   1. Add a level 2 heading with the text: `Reflowing a Page with Flexbox and CSS`
   2. Add a paragraph with the following text: `To be able to meet WCAG guidelines, it is important that a user can reflow a page to meet different device size and zoom levels. This activity is designed to help explore ways that this can be achieved.`
   3. Add a second paragraph with lorem ipsum text.
   4. Create a `div` element with the class of `row` and add the following as nested elements.
      1. Create 2 `div` elements with each having the two classes of `column` and `column-panel`. *You can assign multiple classes to a single element by putting spaces in between the classes, like `"column column-panel"`.*
      2. Add a level 2 heading as children to each `div` with the text: `Panel Title`
      3. Add a paragraph of lorem ipsum text as children to each `div`.
      4. For the second panel `div`, add a second paragraph with the following word: `Pneumonoultramicroscopicsilicovolcanoconiosis`. *This is the longest word in the dictionary and will be used to practice breaking a long word or URL and wrapping it to help with reflowing.*
8. Add a `row` class to the body element.
9. Add a `column` class to the header, main, aside, and footer elements.
10. Save and apply a commit to the file.

## Styling Directions
Use any appropriate selectors and property-value pairs to style the web pages and elements. Keep in mind the cascade, specificity, and inheritance as you apply properties to the various elements.

> Since the site for the practice activity repo is also using a horizontal menu, you can utilize multiple selectors to target both the menu in the component wrapper and the menu within the page header element to style them in the same manner. 

1. Open the `main.css` file from the `css` folder.
2. Add a new color variable to the color scheme that is slightly darker than the current light color.
3. Style the `row` class as follows:
   1. Use the `display` property to convert it to a flex container.
   2. Set the `flex-flow` property to `row wrap`.
4. Style the `column` class as follows:
   1. Use the flex shorthand to define the flex grow to `0`, the flex shrink to `1`, and the flex basis to `100%`.
5. Style the main element as follows:
   1. Add a padding of `1rem`.
6. Style the paragraph elements as follows:
   1. Add a top padding of `.5rem`, a bottom padding of `.75rem`, and no padding on the left and right.
7. Style the aside element as follows:
   1. Add the new color variable as the background color.
   2. Add a padding of `1rem`.
   3. Add a left border with a width of `2px`, a solid style, and using the accent color.
8. Style the `column-panel` class as follows:
   1. Use the flex shorthand to define the flex grow to `0`, the flex shrink to `1`, and the flex basis to `45%`.
   2. Add a padding of `0.5rem`.
   3. Add a thin, solid border using the accent color.
   4. Add a left and right margin of `.5rem` and a bottom margin of `1rem`.
   5. Add a border radius of `.5rem`.
   6. Add the `overflow-wrap` property with a value of `anywhere`. *This property is used to help break up long URLs and words.*
9. Save and apply a commit to the file.
10. Create a media query that defines new styles when the page is at a minimum width of `60rem`. Add the following styles to the media query:
    1.  Target the `column` class on the main element. Set the flex grow to `0`, the flex shrink to `1`, and the flex basis to `66%`.
    2.  Target the `column` class on the aside element. Set the flex grow to `0`, the flex shrink to `1`, and the flex basis to `34%`.
11. Create another media query that defines new styles when the page is at a maximum width of `32rem`. Add the following styles to the media query:
    1.  Target the `column-panel` class element. Set the flex grow to `0`, the flex shrink to `1`, and the flex basis to `100%`.
12. Save and apply a commit to the file.

## Test your work
1. Load the page in a browser to preview it.
2. On a wide screen, your page should look similar to the image embedded below.
3. Comment out the `overflow-wrap` property in the `column-panel` block to see how the long word in the 2nd panel affects the layout.
5. Use the Zoom tools within your browser to start increasing the zoom level.
6. With the `overflow-wrap` property commented out, depending on the width of your screen, you should eventually see the 2nd panel move below the 1st panel because there is not enough space to fit the word in the parent. Undo the comment on the `overflow-wrap` so the word is wrapped again and the element should pop back into place.
7. Continue increasing the zoom level and you should see the aside element slide below the main element due to the second media query you created.
8. Continue increasing the zoom level and you should see the panels slide and stack on top of each other instead of being next to each other due to the original flexbox styling you applied to the elements.
9. Continue increasing the zoom level until the maximum (probably 400% or 500%).
10. You should see some reflow issues that remain with the navigation menu and the footer content.
   1. We will look at ways on how to deal with menus in this type of situation in later lessons.
   2. Make adjustments as needed to help reflow the footer content to fit better at higher zoom levels. *TIP: Try to do a similar thing that is occurring with the panels in the main element where they are next to each other and then slide below each other at a given point.*
11. Save and apply a commit to the file.

The following is an example of what your site would look like on a wider screen. Your page may vary based upon your chosen color scheme.
![flexbox reflow example](../images/Reflow-Example.png)

## Conclusion
When you are done with the activity:
1. Be sure you check for any validation errors and correct them.
2. Check for any spelling errors.
3. Sync the files (i.e., push your changes) with the remote repo on GitHub.