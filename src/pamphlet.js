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

13.7. AppBar Transitions:
useScrollTrigger is essentially an event listener for when the user is scrolling and one of the options of it which is disableHysteresis, means
is whether or not there's a little delay when the user is scrolling. So sometimes when you want the AppBar to go away(the hide on scroll),
you actually sometimes will have a little delay there, but for this we don't want that, so we disable that.

threshold options controls how far the user has to start scrolling BEFORE it TRIGGERS that even and so with a 0 for value, as soon as the
user starts scrolling, it will trigger it, whereas if you put for example the default which is on 100, it would take the user scrolling
farther down before the event listener triggers. Also you can get rid of target option which is in docs example because the docs example
is on iframe, so it needed that target and remove the window from that destructuring line of the docs example.

In returning expression, it returns a new version of whatever component you are wrapping with ElevationScroll component, it clones the children
and returns a new copy of that element with a new elevation, depending on whether or not the trigger has been set(the ternary operator that we
have there). If our event listener has set that trigger, then it will have an elevation of 4, so that's our floating state,
otherwise it will remain flat and that's with an elevation of 0.

14.8. Styling - Themes (Setup):
Now that you know how to import materialUI comps and use them, it's time to customize those comps with their styling system.
The first part of the styling system that we want to talk about is specifically the theming system that they have set up for us and how
you can use the theming system to centralize your styles and create a consistent look throughout your app. There are a lot of benefits to
the styling system that the materialUI uses.

The first part of the theming system is the palette. The palette is a way to manage the colors used in your app but materialUI actually takes
a step farther than that and provides interesting functionality around it for us. Let's look at how we can setup the theming system and what
they already provide for us. So go to material ui styling sections(styles section).

The materialUI styling solution is not actually adding anything to your bundle size, if it's used WITH materialUI, because you can actually use
the styling solution separately.

JSS is js to css compiler. JSS allows you to write all of your styles as a JS object in your comps and that enables interesting behavior like
theme nesting and dynamic styles and self support. In dynamic styles you're able to use JS and state of your comps to change the styling.

To start taking look at how we can use JSS for our styling in materialUI, we have to install a separate package which is @material-ui/styles in our
project directory.

Now go to customization>overview>overview tab of materialUI docs and there, in theming section.
Themes let your apply a consistent tone to your app. So it allows you to centralize and customize all aspects of your design while still extending
the default functionality provided by materialUI.
The first step to get started is if we want to customize our theme, we need to use a theme provider comp. That theme provider comes from the package
that we just installed(@material-ui/styles). So you need to wrap the comp that you want to have the theme provided to, with the <ThemeProvider> comp
and then passing the theme to the theme prop(theme={theme}) on the <ThemeProvider> comp. So we're still going to have to create that theme file,
but first let's make that <ThemeProvider> comp, setup.
So in App.js get rid of that wrapping <div className="App"> and replace that with <ThemeProvider> comp. Now as we saw in the docs example, we still
need that Theme file. So in the ui folder, create Theme.js . Now in theming docs, we want to generate a theme base on the options that we provided.
So we use createMuiTheme() and the crucial thing is to import it from '@material-ui/core/styles' which is different than '@material-ui/styles'.
So be aware that there is @material-ui/core/styles AND there is ALSO @material-ui/styles .
When we create our MuiTheme, that creates an instance of the default MuiTheme and then essentially tells it that we want to overwrite any of the
default values with that object we pass to createMuiTheme(). Then we're gonna store that newly modified theme with all of the overwritten values
and all of the default values that we didn't overwrite, so store all of that as an object inside of our const named theme. Then we're gonna be
passing that theme const into our <ThemeProvider> which then passes those styles onto our app.

In Theme.js , we'll just have that being the default export of that file so that we can easily import it to just pass directly in, to the
ThemeProvider.

For now, I didn't pass any styles to overwrite the default styles of theme of material-ui. Because I want to know what the
DEFAULT theme that they're providing for us has, so that we know WHAT VALUES we're overwriting(in the object we pass to createMuiTheme()) and how
it is set up.
For importing that default export of Theme file(like importing it in App file), we can name the importing thing, theme with lowercase t.
Because it's not a component to name it with capital. Also as I mentioned, we import it with a name, so it can be easily accessed with
that name which is theme to pass it to theme prop on <ThemeProvider> and now once we go ahead and start adding content into our theme file,
it wil already be wired up and ready to go in our app.*/
/* 15-9. Styling - Themes (Default Theme):
In docs and in customization/default theme, it brings up the object that is the default theme provided to us.
The common object is the common colors that you might use throughout your app. For type property which is default to light, you can
set a light or a dark property for your palette which makes it easy to change a bunch of options just from one single value.
The default theme comes with variance for the light and dark types. So you can imagine being able to programmatically implement a way to
change between that light and dark setting.

primary property is primary colors of your app and you actually JUST provide that main property for primary or secondary objects, materialUI then
goes and generates a light and a dark version(light and dark properties alongside that main color you provided for primary and secondary objects) that
you can call on, without having to EXPLICITLY set them. This is helpful if you only have a main color that you know you want to be using and then
you just use that to AUTOMATICALLY create accents that you know are going to match. That's an interesting design feature that they included with
this.

Many materialUI comps get their default colors from that primary and secondary settings and so just by changing this, you'll automatically
start seeing those colors show up when you use your comps. The error object of the object we pass to create a theme, it's just the same type of
palette system and main, light and dark colors which that object(error object) has, although it's gonna be for when you're displaying error.

The contrastThreshold, getContrastText, augumentColor and tonalOffset, are all options used for materialUI for figuring out how to balance the
color of the text with the colors of the background for comps and making sure that it maintains the correct level of readability no matter what
options you have set in your theme, You probably won't have to mess with those much, unless you start getting into specific color cases.

In text object, it provides different opacities for your text, depending on it's importance on the screen.

In background object, it has the default background-color for the entire page(the default property) as well as the paper comp(the paper property
is responsible for that) which is used commonly throughout materialUI.

In action object, again we have a number of different opacities depending on the action that you're trying to display.

That was the entire palette object inside of theme object and all of the functionality that it provides to us with generating those other
presets.

16-10. Styling - Themes (Palette):
In common object, for now we're not overwriting but actually adding some colors to that common collection of colors.
Now we need to add those colors to our palette as well and get materialUI to generate the light and dark versions. So underneath the common object,
add the primary property which is an object and there, the main property is the SAME blue color that we have in common object. So we COULD just
copy that blue color again, but since we want to make sure that it's a CENTRALIZED and there's ONLY 1 spot where we use that color(where we write
the ACTUAL value of that color), let's create 2 constants like arcBlue and ... (because we CAN'T write a property of object based on another
property inside of that object).
Now change the name of property in common object, from arcBlue to blue and from arcOrange to orange and we also need to use a template string for
being able to USE those constants.
So for primary and secondary objects, we specify their main property as our arcBlue variable(for primary) and arcOrange for secondary.

So as you can see we have to specify our colors as STRINGS, for the values inside palette object.
Now that we have those in place, not only will materialUI will generate a light and dark variants of our main color that we have given to the
primary and secondary objects within our palette, but it will actually then change all of the comps that get their colors from the theme to use our
main color that we've provided instead of the default materialUI colors.
So now we have our own blue color instead of the default colors.

So we have now officially styled our first materialUI comp and customized that AppBar to the theme that we have provided with our own custom colors.

For AppBar we have another default prop of color which is set default to primary(so: color="primary") and with this, that tells materialUI to
look up the primary object from our theme which it's main color is set to arcBlue currently. You can change color prop to secondary.

Let's look at typography using materialUI's theming system.

17-11. Styling - Themes (Typography):
The other part of the theme is built for styling and that is for styling of text using the Typography comp. The Typography comp manages
styling for text in the same way that the palette manages the styling for our color system.

In docs and in customization/default theme we can see the default theme object the materialUI provides to us. Last time we took a look at
palette object, but this time we're interested in typography object, there you can change the defaults for font across your app.
The fontFamily by default will fall back, depending on whether or not the user's browser has the specified font.
In fontSize you can change the base font-size for the app although the way the materialUI actually handles fonts with the Typography comp is a
little different. So you set the fontSize in typography object but then under each of those h1, h2 and ... which are called typography variants and
you can access them with the variant prop, in those objects(h1, h2, ...) they use a font-size based on rem which is a responsive unit and is
based on the fontSize property that you set in typography object. So as you set a central font-size, then, they generate proportional responsive
font-sizes for each varient(therefore, each variant has a separate fontSize property) which helps the look of your app across all device sizes.

Now in Header file, use Typography comp. You can wrap a text inside Typography comp and also need to set the variant prop on that Typography comp and
for value, specify whichever one of those variants from the default theme(h1, ...). So like: variant="h3" which also by default has font-weight of 400.
But I want a font-weight of 300.
For doing this, go to Theme.js file and outside of palette object, we're gonna give it another property(because we want to overwrite some stuff).
So give it typography property and there, we can set our customizations for any of the variants. So there put the variants to customize(only put
the things you want to actually CUSTOMIZE or OVERWRITE).

Another prop that we have to control the styling of the text with our Typography comp is the color prop. This can be set to either of the
theme options, so between primary(if you set both background-color and color to same thing the text would be disappear- remember that the background-
color of materialUI comps are by default set to primary, so if you ALSO set the color prop to primary, the text might be get invisible.).
The color prop can be primary, secondary or error.

What if you don't want to change the h3 for all of them but you JUST want to specify changes for your h3 IN A SPECIFIC PLACE OF YOUR WEBSITE?
We can do that using the inline styling system.
*/
/* 18-12. Styling - Inline:
You're now familiar with materialUI theming system and what the default theme provides for us. But what about when you don't actually need a
theme? You're not trying to change all of the types of comps across your app but you just want to apply styling to one comp within your app?
That is exactly what inline styling is and materialUI provides a great system for doing this which ties into the theming system.
With that we can fix that margin problem with our AppBar which is covering up our little hello underneath it.

In docs, styles/basics/getting started it shows you an example of how it's using inline styles to create that little button and it's using the
makeStyles function which we pass our styles into it and those styles are in format of JSS as an object.

Then we save that makeStyles() call with our style object passed to it, to useStyles constant. Then in our functional comp, we call
useStyles as a function since it's a hook which now gives us access to the styles under the classes constant.

By the time our comps are actually rendered, that JSS is compiled into actual css and so having it there on the classes constant, lets us just
access that class.root for className.
So makeStyles() GENERATES our styles and then useStyles() gives us ACCESS to them on our classes constant(which is the result of calling
useStyles()).

So now we understand how to setup our JSS styles and then get access to them within our comp. Let's use them in Header file. So above exporting
of our Header comp, let's call makeStyles() and assign it to useStyles and in makeStyles(), we're actually gonna use a slightly different
syntax than the docs example which is gonna give us access to the theme inside of our styles. We'll need a property from the theme to fix our
problem with the header currently sitting on top of our hello text. So inside () of makeStyles(), we need to receive theme.
In the first style that we want to create, we're gonna call the class toolbarMargin and inside of that toolbarMargin object, we're gonna use
the spread operator to copy over some properties out of our theme. The property that we want specifically, is theme.mixins.toolbar.
In docs and in it's customization/default theme, you can see the mixins object and there we have the toolbar object and in there we have a couple
pf properties.
By using the spread operator, we have now copied all of those styles over to where we can now apply them to a comp or in this actually just a
regular html element.
Then above the return statement of Header function, create the classes constant which is the result of calling useStyles() hook. That gives us
access to the toolbarMargin style on our classes constant and then right below </ElevationScroll>, add a <div className={classes.toolbarMargin} />.
Now we get an error which says: Parsing error: Adjacent jsx elements must be wrapped in an enclosing tag, so we can not have those two just
sitting next to each other, so wrap them in <React.Fragment> . The <React.Fragment> makes it so that we can have those two elements sitting
side by side each other without actually rendering anything else to the page.

Now what that <div className={classes.toolbarMargin}> is doing is provided from materialUI. They give us that mixins.toolbar so that we can
solve this exact problem. So that contains the height of our AppBar and when we apply it to that <div> which is place after </ElevationScroll> ,
what it does is it creates a little cushion under the AppBar since the AppBar is floating fixed in place at the top of the screen and then
pushes the currently hidden content underneath it, out to where it can be seen on the screen.

19-13. AppBar Logo:
Get rid of that <Typography> comp which is currently inside <Toolbar>.
We can separate our imports for the materialUI comps versus our OWN created comps. Now import your logo in Header. So now:
import logo from '../../assets/logo.svg';.
After using that <img> with our imported logo, you notice 1) there's a gap on the left side of logo 2) our hello is covered
by that image again!

So now we want to remove the padding that exists by default in one of the inner <div>s of AppBar. Now instead of actually trying to provide a
style to the image or to the toolbar that either removes the padding or moves the image one way or another to cover up the gap, materialUI provides
an easy way for us to do this. So on the <Toolbar> we can use disableGutters prop and we could add a true value for that prop, but if you actually
leave off the true, that is what it will just default to. So instead of disableGutters={true} we just said: disableGutters because it's default
value is true.

We used theme.mixins.toolbar which it applied a minimum height to the toolbar which makes it so it pushed our content out from underneath it.
However we've now changed the height of our toolbar with the addition of the logo, but that extra minimum height margin set on that
<div className={classes.toolbarMargin}> is still the same height as the previous default toolbar had and so that's why it's not pushing the
content out far enough to cover the new height. So we need to add a little bit of extra height to that margin and get the content to pop
back out again(visible again). So add a little extra marginBottom to toolbarMargin class.

Currently we have an error that says: Error: while trying to use the following icon from the Manifest: http://localhost:3000/logo102.png (download
error or resource isn't a valid image)

20-14. Favicon:*/
