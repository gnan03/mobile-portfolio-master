

Additional optimizations I made:
1)I hosted the site on IIS and used ngrok to get a URL to use with pagespeed insights.

To obtain a pagespeed score of above 90, I did the following steps:
1)I optimized images and replaced remote images with local ones.
2)I used grunt critical plugin to inline and optimize CSS.
3)I used html minifier to minify html.

Optimizations to get 60 FPS:
1) Modified code in main.js, used requestAnimationFrame with scrollhandler to call updatePositions() function, moved variables out of loop that were causing forced reflows. Made similar changes to bring down time to resize pizzas to less than 5 ms.

Steps to run the application:
1) Use Internet Information Services to host the website on your computer's server.
2) Since the website is not publicly available on the web to test with pagespeed insights, use ngrok to get a discardable URL. 
3) Use the URL as input on chrome pagespeed insights.  

To measure FPS:
1) Open pizza.html in views folder.
2)Go to dev tools and under rendering, check FPS meter.
3) Scroll up and down and see what FPS shows up on the meter.
To check amount of time needed to resize pizzas:
1)Use slider to change size of pizzas.(Open pizza.html in any browser).
2)The console displays a message on the amount of time needed to resize pizzas. 

