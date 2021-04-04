/* SECTION 01 Introduction:
1. 001 Welcome!:
2. 002 Why Material-UI_:
3. 003 Course Overview:
google cloud functions allow you to store that functionality(setup an entire backend and server setup for react apps) or that code
or that function, in the cloud at a url, then calls the function, every time that url is accessed as long as it's accessed in the correct
way or with the correct parameters. So we're gonna set that up with firebase.

While react does out of the box come with good optimizations that do help it MOSTLY look correct on other browsers, but there are some
considerations to have in mind.

4. 004 Course Requirements.en_US:
5. 005 Environment Setup:
react-router gives us the ability to simulate navigating to different pages within a SPA.
Now install react-router-dom as dependency. After installation, as along asa you see: + react-dom-router , then everything was successful and
don't worry about the warning you get after or while the installation.

For installing material-ui , first run: npm i --save @material-ui/core, then we have to setup the font(Roboto font) by including this <link> in our html file:
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
So go to public/index.html and right under <link rel="manifest" ...> add the Roboto font(the stylesheet link that connects
the google font roboto to the app which is the default font for material UI).
6. nothing!*/
/* SECTION 02 Take It From The Top - Headers and Navigation
7. 007 Section 2 Intro:
1- See the design and understand the functionality
2- image optimization. So you take the icons and other things that you've designed and export them properly and bring them into
your react apps in a performant optimized manner.
3- create comps and ...

8. 008 Project Overview:
Adobe XD allows you to build vector mockups of your designs and then wire it together for prototyping as well.
The home page is what most people are gonna see when they first find the website and so we know that not only needed to really capture their
attention and show them that this is the right place that they're looking for, but it also needed to convey the feel that you were gonna find
throughout the rest of the app. With that in mind, we must try to make it as clean and minimal and efficient with how it displays the information,
so that, users can then quickly find and go to what they're looking for specifically.
Below the header, is our slogan. We also want to create an icon(an image, a big one that we have to the right of slogan) that tie into that slogan
and in our site, it's gonna be an animation, where that cpu is being passed back and forth between between the two hands. But adobe XD doesn't
support animations or videos at the moment.
For the rest of the home page, we wanted it to be sort of a brief overview for the rest of the site, so that people could quickly find where they
needed to go from here. That 3 icons section is our services.
We need to line up those 3 icons with their text and making sure that they all flow properly not only in desktop mode, but also all of the icons TOGETHER,
as the page resizes.
Below contact us and about us, we have call to action. The footer obviously acts as backup and secondary, more specific navigation, as opposed to
the navigation in the header(because in that footer, we have links to all of the pages on the site). So that was landing page.

9. 3. Project Overview Continued
call to action is on every page.

Now we need to take the images and assets and icons from design files out of those files and properly export them and optimize them(from our
website design) for use in our project.

10. 4. Image Optimization:
Although all of the images in project files folder that you downloaded are already optimized. But let's walk through the workflow.
One of the first rules of image optimization is: always use svg(always use svg when you can). There's a number of reasons as to why
this is so beneficial and why a number of large companies have recently gone through the effort of switching ALL of their icons and ALL
of the pictures that they can, into svg format.
1) The first reason for doing that, is SVGs are NATURALLY responsive. I guess not naturally responsive, depending on how you code them, obviously
the can have fixed sizes(so not responsive), but they DO allow you to scale them as much as you need, as big or small without losing the quality.
Whereas if you try to blow up a regular picture and make it really large, it's gonna start getting blurry very quickly and the same thing when you
start zooming in BUT with SVGs, you don't have to worry about that because it just automatically resizes, that's what it is.
SVG stands for scalable vector graphic, so scalable meaning it can be any size.

2) Another reason to use SVGs is they're inherently very small(file size). Some of the icons that are used in this website are only a couple hundred bytes.
So very tiny files which obviously makes it a key candidate for what we want when we're trying to think about optimizing our images.

3) One of the coolest reasons to use SVGs is that they're customizable. So you can manipulate different properties of the SVG such as
it's fill color or it's height and width by providing your own properties, and in react especially, this allows us to do interesting things where
we can potentially change the values of those properties in our SVGs depending on the state of our UI. This gives us a lot more control over the
images as if they were actual icons and even enables us to do cool things like use one image and then change which color we needed as, for say a
different colored arrow or other similar icons.
Recap the benefits of using SVGs:
responsive - small - customizable

JPG/PNG:
If you can't use SVG for whatever reason, then you should almost certainly be using a JPEG or a PNG, because each of these also has little tricks that
I'll show you that allow them to be optimized and really adjust the standard image formats above any other extraneous options.

Google page speed insights is an app that lets you test the performance of your site(it gives you result on each PAGE not all of the site I guess).
tinyjpg is a very good site. So that's all you need to do for JPGs and PNGs, although later we'll look at another way that you can implement image
optimization with nextjs.

How to optimize SVGs?
Google for svgomg site which belongs to jake archibald. For doing this, go to desing files and select the svg that you want to optimize it, then click
on file>export>selected and choose the svg for format and the export it and go to that website ... . After putting that svg in that site,
in bottom right corner of that site, it tells you what percent the new file size is OF the old file size. For example, the new file size still
retains 82 percent of the original file size which is approximately an 18% reduction after optimization.

A couple of tricks:
In photoshop, you can go to the top menu and then click on: File>Export> Export As and in the opened dialog, if you select JPG as format in order to
export, you can control the quality right there as well. With this approach though you're gonna NEED to go in and make sure that the exported file still
retains the same quality as the previous one(the previous JPG that we reduce it's quality for optimization) and then it doesn't have any distortion or
too much blurriness that would make it unusable. For example you can use 10% quality in that dialog, but still go and check the final result in order to
not be blurry or ... .
For example, original image was 2.9 MB and the reduced version in tinyJPG is 688 KB and the optimized version in photoshop is 325 KB. With doing these,
we get a peace of mind that the images aren't gonna be a problem.

11- 5. Boilerplate Cleanup:
Let's remove the boilerplate from when we started our project up and then we make sure that the downloaded files are in the correct place for
us. Drop the assets and animations folder which are in the resources of this course, in the src folder of our project. So we have the
assets and animations folder inside of the src folder of our arcdevelopment project directory.

Remove the serviceworker.js , logo.svg, index.css , App.css and App.test.js . In App.js get rid of all of the elements inside
<div className="App">, but let that <div> remains.
Also delete the import statements of the files that we deleted in App.js and index.js .

Also delete the code for service-worker in index.js (the comments at the bottom and also the line that says:
serviceworker.unregister())

Also delete the logo192 and logo512 then run npm start.

It looks like the create-react-app has been updated to use JS 'strict-mode' by default. Material-UI currently doesn't perfectly support
strict mode. So for now just remove the <React.StrictMode> tags and leave index the way you see in the video. */
/* 12- 6. The AppBar Component:
The first part of our app that we're gonna building is the header. The tutor felt like this is a good place to start since it's the
one central location that's present on EVERY page and then it's the content under the header which changes(so it's not a good starting
point!). So it sort of acts as that backbone to the site and just felt like the obvious starting point.
To build that header though, we're gonna get familiar with the material-ui app-bar comp. This comp provides the basic functionality that you
would expect out of a header such as spanning the entire length of the screen and always staying at the top.

First create a folder named ui in the src directory and inside that ui folder, create another folder named components. Then move the
ui folder and App.js inside components folder. So ACTUALLY first create a components folder and then create ui folder in it and also
move App.js into components folder. Inside ui folder create Header.js .

When you want to return multi line of stuff in a function, you need to wrap those lines inside () .
After the writing the code in Header file, import and USE that Header comp in App.js without a closing tag so just like:
...
<Header /> (so without closing tag).
hello
...
Now you see we have a FULL WIDTH spanning header. You notice that our words hello are actually gone! and it's not ACTUALLY gone but it's
being covered up by the header, we'll fix that in styling lecture.

Currently, we only have 2 comps in Header.js (AppBar and nested Toolbar), but the first question is, why do we NEED that <Toolbar> comp?
Because that actually helps lay out everything in a horizontal manner for the <AppBar> whereas if we didn't include that <Toolbar> the
<AppBar> would start to stack content up, VERTICALLY(so we would have a sidebar instead of a header in that case), when we start to add
content to it and obviously for an <Appbar> along the top, you want it to be horizontal. So that is why the <Toolbar> is there inside the
<AppBar>(and that's because to make AppBar horizontal) and with the <AppBar> comp we actually have a default position of fixed(so by default
by just writing: <AppBar> we ACTUALLY have: <AppBar position="fixed">) which may help to have it included in the code, just so you don't have
to REMEMBER that that's the default. So when you created an <AppBar> if you were using it's default position, it's good to write that default
position again, although it doesn't affect anything. If you change that position prop to static, you see that now it's shrunk down(that
actually doesn't have anything to do with that static value and that's because currently our <body> tag has a default margin of 8px which
makes the <Appbar> to get some distance from edges of screen) and it doesn't COMPLETELY span that full size and you also see
our little hello world that we currently have which in the past was covered up but now is underneath the <AppBar> because in source code
of html it's actually under the <AppBar>. So back it to fixed. Because with fixed value, it would be completely removed out of flow od
document, the margin of body doesn't affect it and so it seems it's currently spanning all the width of screen.

13-7. AppBar Transitions:
*/
