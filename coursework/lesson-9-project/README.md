# Lesson 9 Project
This project will assess your knowledge and skills using the various concepts taught within the lesson and create an accessible tabbed component on a cheatsheet to help remind you about the features of ARIA.

## Project Prep
1. If necessary, clone the repo to your computer within your course folder.
2. Open the repo within VS Code. You can open this `readme.md` file within VS Code to view the project directions there.
   > *TIP: Right click on the file and choose the `Open Preview` option.*
3. If there are files and folders present other than this `readme.md` file, take some time to familiarize yourself with the files within the repo so you know where they are located. This will help you when asked to use them within the project directions. *You can ignore the `.gitignore` file.*

> Read through all the project directions before you start working on the project so you know what you will be doing and can plan accordingly what elements to use, if classes and ids need to be created, etc.

> TIP: The practice activities will help know how to create the skip navigation and tabbed component.

## HTML Directions
You will create 2 HTML pages for this project, a reflection page and a cheatsheet page. If no element is specified, you must decide the most appropriate element to use. If a class/id is needed to help style an element, you may add one.

### Reflections Page
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
4. Using appropriate elements, create elements to achieve the following:
   1. A heading using the text `Lesson 9 Project`
   2. Navigation with 3 links to the home page, cheatsheet page, and the home page of your practice activities for the lesson.
      1. If you published your practice activities to GitHub pages, you can open the website from your practice activity repo and grab the URL from the address bar to use as the `href` for the link.
   3. A footer with your name, GitHub username, and date.
   4. A main element where you will place the majority of the content.
5. Save and apply a commit to the file.
6. In the main element:
   1. Create two sections.
   2. Add a heading to each section with the text `My Reflections` and `My Next Steps`, respectively.
   3. Using appropriate elements, answer the following under the reflections heading:
      1. Reflect upon what you learned in this lesson and identify at least three things that were new to you and how you think you may use them in a project?
   4. Using appropriate elements, answer the following under the next steps heading:
      1. Reflecting on what you learned, what property or concept do you feel you need to learn more about or want to explore in more depth? Why do you feel that way? What steps do you feel could help you learn more about it?
7. Save and apply a commit to the file.
8. Create a skip navigation link.

### Transformation Cheatsheet Page
The cheatsheet page will be a page about the concepts you learned in the lesson. It will provide the important concepts to remember so you can reference it later on to remind yourself of what you learned as you work on projects. Use the online reading and a layout method of your choice. Complete the following steps:

1. Using the `index.html` file, save a new file with the name `aria-cheatsheet.html`.
2. Update the metadata to reflect the content of the page.
3. Remove the content within the main element.
4. Within the main section:
	1. Add a heading with the following text: `ARIA and Accessibility`.
	2. Add a paragraph, or more if needed, and briefly explain what ARIA is and why it is used.
	3. Create a tabbed component with 3 tabs.
      	1. The tabs should read: `Roles`, `Properties`, `States`
   	1. The content of each tab should include the following:
      	1. A paragraph that briefly defines the concept, as labeled by the tab text, in your own words. i.e., what a role, property, or state is.
      	2. A list based upon the concept of the tab.
         	1. The role categories with a description of each category and at least two examples for each category. Add a note with what the ARIA standards tell authors they must do regarding abstract roles.
         	2. The property attribute categories and three examples for each category.
         	3. The state attribute categories and an example for each category. 
      	3. A link to the ARIA standards that points to the specific section related to the concept.
5. Save and apply a commit to the file.
6. Apply ARIA to the tabbed component.
7. Utilize the JavaScript file from the practice activities to get the tabbed component to work properly by copying it over and linking to it within the head of the web page.
8. Save and apply a commit to the file.

## Styling Directions
You will utilize the concepts you learned in the lesson (and previous lessons) to layout and style the content on a page. You will need to determine the best layout method and property values to use to accomplish the task. You may utilize any type of selector needed to target the specific element. Complete the following:

1. Create a subfolder with the name `css`. 
2. Create a new file in the subfolder with the name `lsn9-styles.css` and open the file.
3. Add a comment at the top with your name, course and section, and instructor's name.
4. Create a color scheme of your own design to use for the project to style the different components.
5. Define the fonts to use for the project with fallback fonts beyond the generic font families. You may import or download and put the font files in a folder in the repo to achieve the desired effect.
6. Save and apply a commit to the file.

### Page Layout Styling
Utilize any layout method of your choosing (e.g., Grid, Flexbox, etc.) to achieve the desired effects.

1. For the overall page design:
   1. The whole page should be a minimum of the full height of the viewport.
   2. Define the base font and color information.
   3. Create a 2 column layout with the navigation in the right column and the rest of the content in the left column. The left column content should stack on top of each other.
   4. A subtle gradient should be applied to the background with the darker color towards the bottom of the screen.
2. For the navigation:
   1. The links should be stacked on top of each other in a column.
   2. There should be whitespace between the links.
   3. Apply a gradient to the background color.
   4. The navigation should extend the full height of the viewport.
   5. The links should have hover and focus link states.
3. Apply styles to the header, main, and footer to create a style to the page.
4. Save and apply a commit to the file.
5. Apply any additional styles you feel will help the page layout and design; save and apply a commit to the file.

### Cheatsheet Page Style

1. Style the tabs to achieve the following:
   1. The tabs should have a hover effect.
   2. The tab content panels should appear to be attached to the tabs.
   3. The content and tabs should have a border and background color.
   4. The tabs that are not selected should have a style to visually indicate they are behind the active tab.
   5. The tabbed component should be centered horizontally within the main element.
   6. Style the link within the tab content that points to the ARIA standards to appear like a button with hover and focus states.

## Submit the Project
Before you submit your project:
1. Make sure that you have validated your HTML and CSS code. If any errors were found within the validators, be sure to fix those errors before you submit your assignment.
2. Be sure you have implemented accessibility best practices.
3. Push (i.e., sync) the repo on your computer with GitHub to ensure all files are uploaded for your instructor to see.
4. Verify that all files appear on GitHub.
5. Publish your project using GitHub Pages.
6. Test your website to ensure all links and content is working properly. Fix any issues that you find.
7. Save and apply any final commits to your work.
8. Open the Pull Requests tab within GitHub (or using the GitHub Extension within VS Code).
9. In the comment field,
   1. Type in your instructor's username with an @ before. See the course announcements for their username to use.
   2. Tell your instructor that your Project is ready for grading.
10. Click on the `Comment` button to finalize and submit your assignment.
