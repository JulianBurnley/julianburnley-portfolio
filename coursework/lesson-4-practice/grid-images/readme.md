# Mondrian Painting Activity
In this activity, you will use CSS Grid to layout a collection of images on the page to recreate a Mondrian painting.

## Activity Objectives
1. Define a grid using CSS.
2. Place elements within the cells and areas of a grid.
3. Style the elements with CSS.

## HTML Directions
1. Open the `index.html` file within the root of the repo.
2. Use the Save As command and save the file to the *grid-images* folder with a file name of `mondrian-painting.html`.
3. Update the page title and metadata at the top of the document to fit the new page.
4. Remove the heading and `dl` element from the `main` element.
5. Within the right column aside, replace the text within the paragraph with the following text: `This activity will place a list of images that are of varying height and width into a grid to recreate a Piet Mondrian like painting.`
6. Save and apply a commit to the file.
7. Within `main` element:
   1. Create an unordered list with a class of `image-grid`.
   2. Create 20 list items with each list item containing one of the images within the `images` folder.
   3. Be sure to add `alt` text for each image.
8. Save and apply a commit to the file.

## Styling Directions
Use any appropriate selectors and property-value pairs to style the web pages and elements. Keep in mind the cascade, specificity, and inheritance as you apply properties to the various elements.

1. Open the `main.css` file from the `css` folder.
2. Style the unordered list as follows:
   1. Set the list style type to `none`.
   2. Convert the element to a grid container.
   3. Create column templates where there are: 5 repeating columns with a width of `1fr`, 2 columns with a width of `1.2fr`, and the final column with a width of `0.5fr`. There should be a total of 8 column templates.
   4. Create row templates where there are: a column with a height of `11vw`, 5 repeating rows with a height of `13vw`, another row with a height of `11vw`, and 2 more rows with a height of `6.5vw`. There should be a total of 9 row templates.
3. Save and apply a commit to the file.
4. Style the images within the ordered list as follows:
   1. Set the height and width to be `100%`.
   2. Add a border to all sides that is `6px` wide, solid, and black in color.
   3. Set the `object-fit` property to `cover`. 
5. Place the list items within the specified grid areas below: *TIP: Use the `:nth-child()` pseudo-class selector to target each list item specifically.*
   1. `Span 2` columns for image 1.
   2. `Span 3` columns for image 2.
   3. `Span 2` columns for image 3.
   4. `Span 6` rows for image 4.
   5. `Span 2` rows for image 5.
   6. `Span 4` columns and `span 4` rows for image 6.
   7. `Span 2` columns and `span 2` rows for image 7.
   8. `Span 3` rows for image 8.
   9. `Span 2` rows for image 9.
   10. `Span 2` rows for image 10.
   11. `Span 2` columns and `span 2` rows for image 11.
   12. `Span 2` columns for image 12.
   13. `Span 2` columns for image 13.
   14. `Span 3` rows for image 14.
   15. `Span 2` columns for image 15.
   16. `Span 2` columns and `span 2` rows for image 16.
   17. `Span 3` rows for image 17.
   18. `Span 2` columns and `span 2` rows for image 18.
   19. `Span 2` columns for image 19.
   20. `Span 4` columns for image 20.
6. Save and apply a commit to the file.

Example of what the end result should look like:

![image gallery example](../images/grid-gallery-example%20(Small).jpg)

## Conclusion
When you are done with the activity:
1. Be sure you check for any validation errors and spelling errors and correct them.
2. Sync the files (i.e., push your changes) with the remote repo on GitHub.

> This activity is based upon [Jen Simmon's Tutorial](https://labs.jensimmons.com/2017/01-011.html) on CSS Grid. You can watch the [Responsive Mondrian – a demo of CSS Grid](https://youtu.be/qNtJ5p3h2A4) video to see her go through this example and her other examples on how to make the images responsive.