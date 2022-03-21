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

