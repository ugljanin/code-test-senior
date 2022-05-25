# Senior Code Test
You will be tested on your knowledge of HTML, JS and CSS, It's encouraged to keep the solution as lightweight and simple as possible.
Expected time for this test should be around 2 hours.
Your final code should be hosted on Github which displays a live version along with the original source code.

# Actions
Recreate the highlighted module in the design folder

# Requirements
- Needs to be responsive
- The content comes from a collection retrieved via 2 api endpoints. For the purpose of this test
you can mock these JSON responses locally

First api endpoint returns collection info like the following. For this test use the “landing”
collectiontype

`
[
    {
        collectiontype: “home”
        collectionid:< use any unique key you wish>
    },
    {
        collectiontype: “landing”
        collectionid:< use any unique key you wish>
    }
    ……….. mock more entries if you wish
]
`

Second API call passes through the collection id from the first api call
Example: **localhost/api/collection/<collectionid>**
and returns a collection of articles belonging to the corresponding collection id. Note you
should have at least 4 dummy articles in the result.

`
[
    {
        Title: “live: Greg Inglis to announce nrl retirement….”
        Imageurl: <local image url>
        Intro: “Rabbitohs star Greg……”
        Published: 2
    },
    ………. mock more entries
]
`

These should map to the title, image, introduction paragraph and the publish time between
the clock and speech bubble icon

# Notes:
- Faded areas of the screenshot you can leave it as white space but the module is still
expected to sit in its current position within the layout
- Font family just get as color and size as close as you can
- Image content doesn’t have to reflect the screenshot as long as their aspect ratio is close.
- Spacing doesn’t have to be pixel perfect as long as its close

# Notes after the project is finished

This is the report on what I have done in order to make this all work.

At first you need to install npm scripts by running `npm install`.

After that, css files should be built. Sass files are located in assets/css. Building assets is possible with `npm run build:css`.

To run the script run `npm run start`.

It will run server on http://localhost:3000 which will show news that are collected from two endpoints. For that purpose I build 2 simulated API endpoints.

- http://localhost:3000/api/collections for retrieving collections
- http://localhost:3000/api/collection/landing-news for showing news from landing-news collection

Both are not real services, but are loading files located in `json` directory.

For displaying the content I used pug templates which are stored in `views` folder.
