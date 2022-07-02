1.) Inline elements : It taked only required width of the sceen .....span, anchor tag(a) etc.
2.) Block elements: It takes full width of the screem ......div, h1,h2..., section etc.


Inline element : top and botton margin do not effect on inline elements



There are there type of css 
1.) Inline css  : style="border: 1px solid green;"
2.) Internal css :  <style>
        h1 {
            background: red;
        }
    </style>
3.) External css :  <link rel="stylesheet" href="index.css">

There are four types of selctors in css
1.) #id selctors
2.) .class selctors
3.) [attribute] selctors
4.) element selctors(h1, section like that)

There are four combinator 

1) Adjacent Sibling : 

div + p {
    color : red 
}
Points :
a.) Elements share the same parent
b.) Second element comes immediately after first element

2.) General Sibling:

div ~ p{
    color:red
}

Points :
a.) Elements share the same parent
b.) Second element comes after first element

3.) Child Sibling :

div > p {
    color : red 
}
Points :
a.) Second element is a direct child of first element

3.) Descendant Sibling:
    div p {
        color : red
    }

Points :
a.) Second element is a Descendant of first element




Cascading in css => Multiple rules can apply to  the same Element
Specificity => Resolve conflicts arising from Multiple rules
Order :
Inline style
#Id selctors
.class, :pseudo-class and [attribute] selctors
<Tag> and ::pseudo-element selctors


Leave a rating

Your progress

Share

Useful Resources & Links
Complete MDN CSS Reference (don't learn this by heart!): https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

Do you prefer reading? Find written CSS docs on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS

Common CSS Properties Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

CSS Combinators: https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors

More details on CSS Specifity: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

Default Margin set by browser in body so we get rid of by simply
body {
    margin:0;
}

Margin collesping 

when two diferent elements have some margin but mergin between then will not be addition of both 
it will be max one of them ..this is Default behaviors 
we can have both margin alltogetther by margin-botton or margin-top properties 


Shortend Properties

margin-top : 10px
margin-right : 20px;
marging-bottom: 15px
margin-left : 5px;

can be written like 
margin : 10px 20px 15px 5 px;
margin : top right bottom left
margin : 10px 20px (top and bottom = 10px, left and right = 20px)



*** Very important peoerty box-sizing: border-box;
when we use height and width in our element and also use padding border and marging
then by default content and heigth are not modified and extra padding marding border gets added
but we use box-sizing: border-box; then padding and boder will be part of element height and width
only extra margin gets added

Universal selctor 
*{
box-sizing: border-box;
}
mainly use for below propery as it below mentioned does not effect in 
body selctor{
    box-sizing: border-box;
}

* {
    box-sizing: border-box;
}



*** display property
values => block, none, inline-block
block=> if you put this to inline element it behaves like block element and  takes full widht like block element
none : its been removed from visible document flow but exits in document dom..it does not take space in visible document flow
inline-block : mixer of inline and block element means can be used same line and having block properties like padding and margin

visibility: hidden also one property to hide element
but there is an difference between 
visibility: hidden it will be having space in visible document flow means it does not remove from document flow
display:none : it does not having space and its been remove from document flow

==========
HTML Refresher: Block-level vs Inline Elements
It's not really a CSS topic, though it's related to it: The difference between block-level and inline elements.

You can read a more detailed article (which also includes a YouTube video about HTML at the top of the page) here: https://academind.com/learn/html/beginner-s-guide/diving-deeper-into-html#block-level-vs-inline-elements

Here's the executive summary:

Block-level elements are rendered as a block and hence take up all the available horizontal space. You can set margin-top and margin-bottom and two block-level elements will render in two different lines.

Some examples are: <div> , <section> , <article> , <nav>  but also <h1> , <h2>  etc and <p> .

Inline elements on the other hand only take up the space they require to fit their content in. Hence two inline-elements will fit into the same line (as long as the combined content doesn't take up the entire space in which case a line break would be added).

They also use the box-model you learned about but margin-top  and margin-bottom  have no effect on the element. padding-top  and padding-bottom  also have a different effect. They don't push the adjacent content away but they will do so with the element border. You can read more about that behavior in the following article: https://hacks.mozilla.org/2015/03/understanding-inline-box-model/

Additionally, setting a width  or height  on an inline element also has no effect. The width and height is auto to take as much space as required by the content.

Logically, this makes sense since you don't want your inline elements to destroy your multi-line text-layout. If you want to do so or need both block-level and inline behavior, you can set display: inline-block  to merge behaviors.

Some example elements are: <a> , <span> , <img> 



====
vertical-align: middle; this is used for setting items in middle vertically


.... pseudo class and elements 

1.) pseudo class : Define the style of a "special state" of an element
example => :class name like :hover, :active, :first-of-type
2.) pseudo element: Define the style of a "specific part" of an element
example => ::element name like ::after,::before, ::first=letter


Leave a rating

Your progress

Share

Useful Resources & Links
CSS Box Model: https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model

box-sizing : https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

More on height & width: https://www.w3schools.com/css/css_dimension.asp

The display  Property: https://developer.mozilla.org/en-US/docs/Web/CSS/display

Pseudo Classes on the MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

Dive deeper into Pseudo Elements: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements


====

Useful Resources & Links
A discussion on "classes vs IDs": https://stackoverflow.com/questions/12889362/difference-between-id-and-class-in-css-and-when-to-use-it
When is using !important  okay? => https://css-tricks.com/when-using-important-is-the-right-choice/
The :not()  pseudo class: https://developer.mozilla.org/en-US/docs/Web/CSS/:not
Can I Use: https://caniuse.com/




===
float property 
values can we right left 
but we should not use for element positioning 
we can use for floating text around the image
to use for positioning we need to use hack 
with blank div and use
clear : both 
then float will not affect other elements

Useful Resources & Links
More on float: https://developer.mozilla.org/en-US/docs/Web/CSS/float

==========Most Important topic positioning of the elements
There is a propert called position: vale that define the position of the element
in the document flow
By Default always position:static is set
due to which all the element set (position)between html > body > element
Document flow :
html
body
element

But we can change the position of the element to change the value of position
There are four values given
1.) fixed
2.) absolute
3.) relative
4.) sticky

along with position there four properties which usefull to set element to the 
correct position 
top: value;
bottom:value;
left:value;
right:value;
without position value these are not applied.
There is concept called position context that means while positing the element with which respect element are 
geeting positioned like(these are the values refered)
element itself
view port 
html
body
etc.....

1.) fixed : When fixed value is assigned then it takes view port(can be considered screen) position 
and element get out the document flow and get fixed at one position on view port. 
2.) absolute : when absolute is applied then it takes its ancestor as position context which is having position property
if its ancestor does not have position property then it takes html as position context not view port 
3.) relative : when relative value is applied then its position context is element itself and also does not taken out from 
document flow. when you apply left right bottom top it taked reference itself to move to the correct position
while working with relative position we may face one issue when if any value given that takes the element out the body or section 
so the solution we can have that we can hide that element through overflow:hidden property
"overflow:hidden"
parent tag is body tag then we have to apply hidden property to body and html both because if we apply to body only 
then its been transfered to html so does not show any effect but it applied to body and html both
then it gets applied.
4.) sticky : its an combination of fixed and relative position property 
its an new value so many browser does not support yet.

** Stacking context : There is one more concept called stacking context with respect to z-index


===Another propery is z index 
z-index : value(+numbers and negative numbers)
This is also applicable only if position property set
Default value for all the element z-index : 0
if you want your element above the any element give more then that like 1
if you want your element below any element give less then that like -1

Useful Resources & Links
Dive Deeper into Selected Topics

Positioning theory: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning
More about the "position" property: https://developer.mozilla.org/en-US/docs/Web/CSS/position
The z-index: https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
The Stacking Context: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
The "sticky" value and current browser support: https://caniuse.com/#search=sticky


==== background image properties :
    background-image: url("freedom.jpg");
    background-size:  cover; or content or 450px 430px, 450px , 30% 40%, 50% 
    background-position: left 10% bottom 20%; or can be 10% 20% , left bottom, center, 20px 30px , many combination can be created
    background-repeat: no-repeat;
    background-origin: border-box; or content-box or padding-box
    background-clip: border-box; or content-box or padding-box

== Shortend for background image
background: url("freedom.jpg") left 10% bottom 20%/cover no-repeat border-box
background: image url background-position/background-size background-repeat background-origin background-clip
if background-origin and background-clip are same then  we can use it once for both


== liner gradient and radial gradient
There are some examples below :
    /* background-image: linear-gradient(to right, blue,red,green); */
    /* background-image: linear-gradient(180deg,red, blue,#808080); */
    /* background-image: linear-gradient(180deg, red 70%,blue 60%,grey); */
    /* background-image: radial-gradient(red,blue,green); */
    /* background-image: radial-gradient(circle, red, blue, green); */
    /* background-image: radial-gradient(ellipse, red, blue, green); */
    /* background-image: radial-gradient(ellipse farthest-corner at 20% 50%, red , blue 70%, green); */
    /* background-image: radial-gradient(ellipse closest-corner at 20% 50%, red , blue 70%, green); */

==stacking multiple backgrounds 
examples below
background: linear-gradient(to top, rgba(80,68,18,0.6) 10%, transparent), url("images/freedom.jpg") left 10% bottom 20%/cover no-repeat border-box, red;

== filters (Easily add visual effects to boxes and Affect all content)
there are losts of filter are there
  filter: grayscale(20%);

=== ======
Useful Resources & Links
The background  Property: https://developer.mozilla.org/en-US/docs/Web/CSS/background
Styling Images: https://www.w3schools.com/css/css3_images.asp
Filters: https://developer.mozilla.org/en-US/docs/Web/CSS/filter
Styling SVG: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS


Size and Units.
There are mulyiple units are there
px
%,
rem,
rm,
vh,
vw
Some time we need size more responsive as per browser setting it means when user change his browser font size it should reflect in our 
web application as well but that can not be possible by % and px as it created fix size.
For that we can rem and em but em has one property that we  do not use very oftenly 
as 1rem = 1em = 16px but in case of em it multiple the values with the inheriated values so 
for parent has 1.2en font size and in child we specifies font size 1.1em then the font size of that child text would be 1.1em * 1.2em 
but in case of rem it takes only the specified size applied to the element.




