[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7798908&assignment_repo_type=AssignmentRepo)
# Lesson 8 Project
This project will assess your knowledge and skills to create a website that provides a reference sheet for the advanced graphical elements you learned in the lesson.

## Project Prep
1. If necessary, clone the repo to your computer within your course folder.
2. Open the repo within VS Code. You can open this `readme.md` file within VS Code to view the project directions there.
   > *TIP: Right click on the file and choose the `Open Preview` option.*
3. If there are files and folders present other than this `readme.md` file, take some time to familiarize yourself with the files within the repo so you know where they are located. This will help you when asked to use them within the project directions. *You can ignore the `.gitignore` file.*

> Read through all the project directions before you start working on the project so you know what you will be doing and can plan accordingly what elements to use, if classes and ids need to be created, etc.

## HTML Directions
You will create 2 HTML pages for this project, a reflection page and a cheatsheet page. If no element is specified, you must decide the most appropriate element to use. If a class/id is needed to help style an element, you may add one.

### Reflection Page
The reflection page will be the home page for the assignment where you will reflect on what you learned within the lesson, how you can use the concepts in future projects, and what you would like to learn more about. Complete the following steps:

1. Create an HTML document and call it `index.html`.
2. Add all the necessary base elements to structure the document.
3. Add the following metadata:
   1. Page title
   2. Author
   3. Description
   4. Keywords
   5. Character Set
   6. Document language
4. Link to any appropriate stylesheets.
5. Using appropriate elements, create the following:
   1. A section element for the site navigation.
      1. The navigation menu should consist of 3 links to: the home page, cheatsheet page, and the home page of your practice activities for this lesson.
         1. TIP: You can publish your practice activities using GitHub pages and get the absolute link to the home page that way.
      2. Add icons to the beginning of each of the links using the home icon, assignment icon, and code icon, respectively.
         1. TIP: You can utilize [Google Icons](https://fonts.google.com/icons) to add the icons, like in the gradient practice activity.
   2. A `header` with:
		1. A heading using the text `Lesson 8 Project`
		2. A grouping element with your name, GitHub username, and date within it. 
   3. A `main` element.
6. Save and apply a commit to the file.
7. In the `main` element:
   1. Create two sections.
   2. Add a heading to each section with the text `My Reflections` and `My Next Steps`, respectively.
   3. Using appropriate elements, answer the following under the reflections heading:
      1. Reflect upon what you learned in this lesson and identify at least three things that were new to you and how you think you may use them in a project?
   4. Using appropriate elements, answer the following under the next steps heading:
      1. Reflecting on what you learned, what property or concept do you feel you need to learn more about or want to explore in more depth? Why do you feel that way? What steps do you feel could help you learn more about it?
8. Save and apply a commit to the file.

### Cheatsheet Page
The cheatsheet page will be a page about the concepts you learned in the lesson. It will provide the important concepts to remember so you can reference it later on to remind yourself of what you learned as you work on projects. Complete the following steps:

1. Create a copy of the `index.html` file and save it as `graphical-cheatsheet.html`.
2. Remove the content from the `main` element.
3. In the `main` element:
   1. Create a section element with a heading contain the following text: `Graphic Effects`
   2. Create a table under the heading with a table header row and 2 columns.
   3. The first column will be the property.
      1. In each row, list out the 18 properties that are used to apply a filter, blending, clipping, or masking an element as per the reading.
   4. The second column will be the list of all the potential values for the property added in the previous step.
      1. TIP: The potential values can also be found in the reading when each property is introduced.
4. Save and apply a commit to the file.
5. Create another section with a heading containing the following text: `Media Elements`
   1. Create a table under the heading with a table header row and 3 columns
   2. The first column will be the following media categories.
      1. Figures
      2. Pictures
      3. Audio
      4. Video
      5. Canvas
      6. Other Digital Media
   3. The second column will be the HTML elements that are associated with the categories.
      1. Place any associated HTML elements that you learned about in the lesson that are used within the category. Hint: Think about what element and child elements would you need to use to create the element.
      2. Some categories may have the common elements (e.g., figures and pictures can contain images).
   4. The third column will be the attributes that should be applied to the HTML elements. (e.g., for image elements you need to define the URL and alternative text for the image)
6. Save and apply a commit to the file.

## Styling Directions
You will utilize the concepts you learned in the lesson (and previous lessons) to layout and style the content on a page. You will need to determine the best layout method and property values to use to accomplish the task. You may utilize any type of selector needed to target the specific element. Complete the following:

1. Create a folder called `css`.
2. Create a new file within that subfolder called `styles.css`.
3. Open the file.
4. Add a comment at the top with your name, lesson, and course.
5. Import web fonts to use for the headings, body text, and code elements.
6. Create a color scheme for the site using CSS variables. 

### Page layout Styles
1. Style the body as follows:
   1. Apply a background color.
   2. Apply a text color.
   3. Apply the selected font to the body text.
   4. Set the height to be the full height of the viewport.
   5. Utilize the grid layout method to achieve the following:
      1. The section with the navigation links along the left hand side of the page running the full height of the page.
      2. The header to the right of the section and along the top of the page.
      3. The main element to the right of the section and below the header taking up the remaining space.
2. Style the section element used for navigation as follows:
   1. Place the section within the designated grid area.
   2. The section should be wide enough for the text of the links to appear on a single line.
   3. Apply a gradient background color to the section.
   4. Adjust the text color as needed to ensure the text is legible.
   5. Position the navigation links at the vertical center of the section.
   6. Make the links appear within a column on top of each other.
   7. Create white space between the links.
   8. The links should be the full width of the section.
   9. Create a top and bottom border to the links to differentiate them.
   10. Remove the text decoration from the links.
   11. Create a hover state for the links that will apply a new gradient and colors for the background.
3. Save and apply a commit to the file.
4. Style the header element as follows:
   1. Apply a gradient to the background.
   2. Adjust the text color as needed to ensure the text is legible.
   3. Apply the selected font to the heading.
   4. Flex the header so that:
      1. The heading is to the left within the header and the grouping element to the right side.
      2. The heading and grouping element are in the same row.
5. Style the main element as follows:
   1. Apply the selected font to the headings.
   2. Apply whitespace to ensure the content within the element are not near the edges.
6. Save and apply a commit to the file.

### Cheatsheet Styles

1. For the tables:
   1. Apply a border to the outside edges.
   2. Collapse the borders.
   3. Apply padding to the cells to generate whitespace.
   4. Style every other row with an alternative background color.
2. Style the table header row as follows:
   1. Apply a dark background color.
   2. Apply a text transform to make the text appear in uppercase.
   3. Apply a thicker solid bottom border.
3. Apply a font to the properties and value code elements to make them appear different.

## Submit the Project
Before you submit your project:
1. Make sure that you have validated your HTML and CSS code. If any errors were found within the validators, be sure to fix those errors before you submit your assignment.
2. Be sure you have implement accessibility best practices.
3. Apply any final commits to your work.
4. Push (i.e., sync) the repo on your computer with GitHub to ensure all files are uploaded for your instructor to see.
5. Verify that all files appear on GitHub.
6. Publish your project using GitHub Pages.
7. Open the Pull Requests tab within GitHub (or using the GitHub Extension within VS Code).
8. In the comment field,
   1. Type in your instructor's username with an @ before. See the course announcements for their username to use.
   2. Tell your instructor that your Project is ready for grading.
9. Click on the `Comment` button to finalize and submit your assignment.
