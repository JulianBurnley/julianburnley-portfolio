# CSS Flexible Units Activity
In this activity, you will apply flexible units to a web page and look at the effect of inheritance on some units.

## Activity Objectives
1. Convert the existing absolute units to flexible units.
2. Create an ordered list with 2 levels of nested lists.
3. Style the elements with CSS.

## HTML Directions
1. Open the `index.html` file within the root of the repo.
2. Use the `Save As` command to save a new file.
   1. Save the file to the `units` folder with the name: `css-units.html`.
3. Within the header:
   1. Change the heading text to the following: `CSS Units`
4. Within the main section:
   1. Remove the `dl` element.
   2. Create an unordered list with 3 list items. Add your own placeholder text for the the list items.
   3. Apply a `class` to the list of `em-units`.
   4. Create a nested list for one of the list items with 2 list items. Add your own placeholder text.
   5. Create another nested list for one of the nested listed items with 2 items. Add your own place holder text.
   6. Copy the list and nested lists and paste it below the existing list to duplicate the list. Change the `class` to `rem-units`.
5. Save and apply a commit to the file.

## Styling Directions
Use any appropriate selectors and property-value pairs to style the web pages and elements. Keep in mind the cascade, specificity, and inheritance as you apply properties to the various elements.

1. Open the `main.css` file from the `css` folder.
2. Review all the properties in the file and convert all the `px` based units to `em` based units.
   1. You will need to perform a simple calculation to determine the number value to use. 
   2. Assume `1em` = `16px` and divide the existing value by `16px` to get the `em` number value to use. e.g., `10px` / `16px` = `.625em`.
3. Style the html element as follows:
   1. Add a font size of `16px`.
4. Create a style to target the list items in the `em-units` list and apply the following:
   1. Apply a font size of `1.3em`.
5. Create a style to target the list items in the `rem-units` list and apply the following:
   1. Apply a font size of `1.3rem`.
> You should see a difference between the two lists as it applies to the size of the text for the nested list items. This is an example of inheritance in action that will be discussed in more detail later in the lesson. If you adjust the font-size on the `html` element, it will affect the whole page.
5. Save and apply a commit to the file.

## Conclusion
When you are done with the activity:
1. Be sure you check for any validation errors and correct them.
2. Sync the files (i.e., push your changes) with the remote repo on GitHub.