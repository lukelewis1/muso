{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red15\green112\blue1;\red255\green255\blue254;\red0\green0\blue0;
\red144\green1\blue18;\red0\green0\blue255;\red14\green110\blue109;\red19\green118\blue70;\red107\green0\blue1;
}
{\*\expandedcolortbl;;\cssrgb\c0\c50196\c0;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c0\c100000;\cssrgb\c0\c50196\c50196;\cssrgb\c3529\c52549\c34510;\cssrgb\c50196\c0\c0;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // @ts-nocheck\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 /** Example of using the IIFE build of the uibuilder client library\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2  \cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 See the docs if the client doesn't start on its own.,\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 logLevel and showMsg can be controlled from Node-RED instead of here if preferred.*/\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 'use strict'\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 const\cf0 \strokec4  albumlocation = document.getElementById(\cf5 \strokec5 "albumlocation"\cf0 \strokec4 );\cb1 \strokec4 \
\cf6 \cb3 \strokec6 const\cf0 \strokec4  reviewlocation = document.getElementById(\cf5 \strokec5 "reviewArea"\cf0 \strokec4 ); \cb1 \strokec4 \
\
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 //data to be sent\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 \strokec4  \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 var\cf0 \strokec4  data = \{\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 \strokec4     album_name: \cf5 \strokec5 ""\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4     artist_name: \cf5 \strokec5 ""\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4     user_id: \cf5 \strokec5 ""\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4     review_text: \cf5 \strokec5 ""\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4     rating: \cf5 \strokec5 ""\cf0 \cb1 \strokec4 \
\cb3 \strokec4 \}\cb1 \strokec4 \
\cb3 \strokec4 addEventListener(\cf5 \strokec5 "DOMContentLoaded"\cf0 \strokec4 , (event) =>\{\cb1 \strokec4 \
\cb3 \strokec4     uibuilder.send(\{ topic: \cf5 \strokec5 'getData'\cf0 \strokec4  \});\cb1 \strokec4 \
\cb3 \strokec4 \})\cb1 \strokec4 \
\
\cb3 \strokec4 uibuilder.onChange(\cf5 \strokec5 'msg'\cf0 \strokec4 , \cf6 \strokec6 function\cf0 \strokec4  (msg) \{\cb1 \strokec4 \
\cb3 \strokec4     \cf6 \strokec6 var\cf0 \strokec4  topic = msg.topic;\cb1 \strokec4 \
\cb3 \strokec4     \cf6 \strokec6 switch\cf0 \strokec4  (topic)\{\cb1 \strokec4 \
\cb3 \strokec4         \cf6 \strokec6 case\cf0 \strokec4  \cf5 \strokec5 "loadform"\cf0 \strokec4 :\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  albumJSON = \cf7 \strokec7 JSON\cf0 \strokec4 .parse(msg.payload);\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 //display name\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  albumname = \cf7 \strokec7 JSON\cf0 \strokec4 .stringify(albumJSON.album.name).slice(\cf8 \strokec8 1\cf0 \strokec4 , -\cf8 \strokec8 1\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             data.album_name = albumname;\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  docname = document.createElement(\cf5 \strokec5 'h3'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             docname.innerText = albumname;\cb1 \strokec4 \
\cb3 \strokec4             \cf2 \strokec2 //albumname\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  albumartist = \cf7 \strokec7 JSON\cf0 \strokec4 .stringify(albumJSON.album.artist).slice(\cf8 \strokec8 1\cf0 \strokec4 , -\cf8 \strokec8 1\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  docartist = document.createElement(\cf5 \strokec5 'h4'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             data.artist_name = albumartist;\cb1 \strokec4 \
\cb3 \strokec4             docartist.innerText = albumartist;\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // album release date\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  releaseDate = \cf5 \strokec5 ''\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 if\cf0 \strokec4  (albumJSON.album.wiki && albumJSON.album.wiki.published) \{\cb1 \strokec4 \
\cb3 \strokec4                 \cf2 \strokec2 // Only take the part before the comma\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  rawDate = albumJSON.album.wiki.published.split(\cf5 \strokec5 ','\cf0 \strokec4 )[\cf8 \strokec8 0\cf0 \strokec4 ];\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // Split day, month, year\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  parts = rawDate.split(\cf5 \strokec5 ' '\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  day = parts[\cf8 \strokec8 0\cf0 \strokec4 ].replace(\cf9 \strokec9 /^0/\cf0 \strokec4 , \cf5 \strokec5 ''\cf0 \strokec4 ); \cf2 \strokec2 // remove leading zero\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  month = parts[\cf8 \strokec8 1\cf0 \strokec4 ];\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  year = parts[\cf8 \strokec8 2\cf0 \strokec4 ];\cb1 \strokec4 \
\
\cb3 \strokec4                 releaseDate = \cf5 \strokec5 `\cf0 \strokec4 $\{day\}\cf5 \strokec5  \cf0 \strokec4 $\{month\}\cf5 \strokec5  \cf0 \strokec4 $\{year\}\cf5 \strokec5 `\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             \} \cf6 \strokec6 else\cf0 \strokec4  \{\cb1 \strokec4 \
\cb3 \strokec4                 releaseDate = \cf5 \strokec5 'Unknown'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             \}\cb1 \strokec4 \
\
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  docrelease = document.createElement(\cf5 \strokec5 'p'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             docrelease.innerText = \cf5 \strokec5 `Album \'95 \cf0 \strokec4 $\{releaseDate\}\cf5 \strokec5 `\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             docrelease.style = \cf5 \strokec5 'color: gray; font-size: 0.9em; margin-bottom: 10px;'\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 //album cover\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  coverimg = \cf7 \strokec7 JSON\cf0 \strokec4 .stringify(albumJSON.album.image[\cf8 \strokec8 4\cf0 \strokec4 ][\cf5 \strokec5 '#text'\cf0 \strokec4 ]).slice(\cf8 \strokec8 1\cf0 \strokec4 , -\cf8 \strokec8 1\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  docimg = document.createElement(\cf5 \strokec5 'img'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             docimg.src = coverimg;\cb1 \strokec4 \
\cb3 \strokec4             docimg.crossOrigin = \cf5 \strokec5 "Anonymous"\cf0 \strokec4 ; \cf2 \strokec2 // IMPORTANT to avoid CORS issues when using canvas\cf0 \cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // Apply gradient background after image loads\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  colorThief = \cf6 \strokec6 new\cf0 \strokec4  \cf7 \strokec7 ColorThief\cf0 \strokec4 ();\cb1 \strokec4 \
\
\cb3 \strokec4             docimg.addEventListener(\cf5 \strokec5 'load'\cf0 \strokec4 , \cf6 \strokec6 function\cf0 \strokec4  () \{\cb1 \strokec4 \
\cb3 \strokec4                 \cf2 \strokec2 // Get dominant color\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  dominantColor = colorThief.getColor(docimg); \cf2 \strokec2 // returns [r, g, b]\cf0 \cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // Optional: get palette\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf2 \strokec2 // var palette = colorThief.getPalette(docimg, 2); // top 2 colors\cf0 \cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // Set gradient background on container\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 container.style.background = \cf5 \strokec5 `linear-gradient(to bottom right, rgb(\cf0 \strokec4 $\{dominantColor[\cf8 \strokec8 0\cf0 \strokec4 ]\}\cf5 \strokec5 ,\cf0 \strokec4 $\{dominantColor[\cf8 \strokec8 1\cf0 \strokec4 ]\}\cf5 \strokec5 ,\cf0 \strokec4 $\{dominantColor[\cf8 \strokec8 2\cf0 \strokec4 ]\}\cf5 \strokec5 ), #000000)`\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 container.style.padding = \cf5 \strokec5 '20px'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 container.style.borderRadius = \cf5 \strokec5 '10px'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             \});\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 //create container for elements\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  container = document.createElement(\cf5 \strokec5 'div'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             container.className = \cf5 \strokec5 "album-card"\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cb3 \strokec4             albumlocation.appendChild(container)\cb1 \strokec4 \
\cb3 \strokec4             container.appendChild(docname);\cb1 \strokec4 \
\cb3 \strokec4             container.appendChild(docartist);\cb1 \strokec4 \
\cb3 \strokec4             container.appendChild(docrelease);\cb1 \strokec4 \
\cb3 \strokec4             container.appendChild(docimg);\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // Create sentiment summary placeholder\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  sentimentSummary = document.createElement(\cf5 \strokec5 'div'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             sentimentSummary.id = \cf5 \strokec5 'sentimentSummary'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             sentimentSummary.style = \cf5 \strokec5 'margin-top: 10px; font-size: 1em;'\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // "Listeners' opinions:" part (italic)\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  sentimentLabelSpan = document.createElement(\cf5 \strokec5 'span'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             sentimentLabelSpan.innerText = \cf5 \strokec5 "What the Muso's are saying: "\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             sentimentLabelSpan.style = \cf5 \strokec5 'font-style: italic; font-weight: normal;'\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // Sentiment word (bold)\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  sentimentValueSpan = document.createElement(\cf5 \strokec5 'span'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             sentimentValueSpan.id = \cf5 \strokec5 'sentimentValue'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             sentimentValueSpan.innerText = \cf5 \strokec5 ''\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             sentimentValueSpan.style = \cf5 \strokec5 'font-weight: bold; font-style: normal;'\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // Sentiment score number (normal)\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  sentimentScoreSpan = document.createElement(\cf5 \strokec5 'span'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             sentimentScoreSpan.id = \cf5 \strokec5 'sentimentScore'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             sentimentScoreSpan.innerText = \cf5 \strokec5 ''\cf0 \strokec4 ;  \cf2 \strokec2 // initially blank\cf0 \cb1 \strokec4 \
\cb3 \strokec4             sentimentScoreSpan.style = \cf5 \strokec5 'font-weight: normal; font-style: normal; margin-left: 5px;'\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // Append all spans\cf0 \cb1 \strokec4 \
\cb3 \strokec4             sentimentSummary.appendChild(sentimentLabelSpan);\cb1 \strokec4 \
\cb3 \strokec4             sentimentSummary.appendChild(sentimentValueSpan);\cb1 \strokec4 \
\cb3 \strokec4             sentimentSummary.appendChild(sentimentScoreSpan);\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // Append to album card container\cf0 \cb1 \strokec4 \
\cb3 \strokec4             container.appendChild(sentimentSummary);\cb1 \strokec4 \
\cb3 \strokec4             \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  payload = \{\cb1 \strokec4 \
\cb3 \strokec4                 album_name: albumname,\cb1 \strokec4 \
\cb3 \strokec4                 album_artist: albumartist\cb1 \strokec4 \
\cb3 \strokec4             \}\cb1 \strokec4 \
\cb3 \strokec4             uibuilder.send(\{ \cb1 \strokec4 \
\cb3 \strokec4                 \cf5 \strokec5 "topic"\cf0 \strokec4 : \cf5 \strokec5 'getReviews'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4                 \cf5 \strokec5 "payload"\cf0 \strokec4 : payload\cb1 \strokec4 \
\cb3 \strokec4             \});\cb1 \strokec4 \
\cb3 \strokec4         \cf6 \strokec6 break\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4         \cf6 \strokec6 case\cf0 \strokec4  \cf5 \strokec5 "loadReviews"\cf0 \strokec4 :\cb1 \strokec4 \
\cb3 \strokec4             console.log(\cf5 \strokec5 'loading reviews..'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             console.log(msg.payload);\cb1 \strokec4 \
\
\cb3 \strokec4             reviewlocation.innerHTML = \cf5 \strokec5 ''\cf0 \strokec4 ; \cf2 \strokec2 // clear reviews\cf0 \cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // --- Sentiment calculation ---\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 let\cf0 \strokec4  scores = [];\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 for\cf0 \strokec4  (\cf6 \strokec6 const\cf0 \strokec4  key \cf6 \strokec6 in\cf0 \strokec4  msg.payload) \{\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 const\cf0 \strokec4  review = msg.payload[key];\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 if\cf0 \strokec4  (\cf6 \strokec6 typeof\cf0 \strokec4  review.score === \cf5 \strokec5 'number'\cf0 \strokec4 ) \{\cb1 \strokec4 \
\cb3 \strokec4                     scores.push(review.score);\cb1 \strokec4 \
\cb3 \strokec4                 \}\cb1 \strokec4 \
\cb3 \strokec4             \}\cb1 \strokec4 \
\
\cb3 \strokec4             \cf6 \strokec6 let\cf0 \strokec4  avgScore = \cf8 \strokec8 0\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 if\cf0 \strokec4  (scores.length > \cf8 \strokec8 0\cf0 \strokec4 ) \{\cb1 \strokec4 \
\cb3 \strokec4                 avgScore = scores.reduce((a, b) => a + b, \cf8 \strokec8 0\cf0 \strokec4 ) / scores.length;\cb1 \strokec4 \
\cb3 \strokec4             \}\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // Determine sentiment label\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 let\cf0 \strokec4  sentimentLabel = \cf5 \strokec5 ""\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 if\cf0 \strokec4  (avgScore > \cf8 \strokec8 0.25\cf0 \strokec4 ) \{\cb1 \strokec4 \
\cb3 \strokec4                 sentimentLabel = \cf5 \strokec5 "Positive"\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             \} \cf6 \strokec6 else\cf0 \strokec4  \cf6 \strokec6 if\cf0 \strokec4  (avgScore < -\cf8 \strokec8 0.25\cf0 \strokec4 ) \{\cb1 \strokec4 \
\cb3 \strokec4                 sentimentLabel = \cf5 \strokec5 "Negative"\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             \} \cf6 \strokec6 else\cf0 \strokec4  \{\cb1 \strokec4 \
\cb3 \strokec4                 sentimentLabel = \cf5 \strokec5 "Neutral"\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4             \}\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // Update the sentimentSummary div\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  sentimentElement = document.getElementById(\cf5 \strokec5 'sentimentValue'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  sentimentScoreElement = document.getElementById(\cf5 \strokec5 'sentimentScore'\cf0 \strokec4 );\cb1 \strokec4 \
\
\cb3 \strokec4             \cf6 \strokec6 if\cf0 \strokec4  (sentimentElement && sentimentScoreElement) \{\cb1 \strokec4 \
\cb3 \strokec4                 sentimentElement.innerText = sentimentLabel;  \cf2 \strokec2 // Positive / Neutral / Negative\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 sentimentScoreElement.innerText = \cf5 \strokec5 `(\cf0 \strokec4 $\{avgScore.toFixed(\cf8 \strokec8 2\cf0 \strokec4 )\}\cf5 \strokec5 )`\cf0 \strokec4 ;  \cf2 \strokec2 // show 2 decimal places\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \}\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // Now your reviews:\cf0 \cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 for\cf0 \strokec4  (\cf6 \strokec6 const\cf0 \strokec4  key \cf6 \strokec6 in\cf0 \strokec4  msg.payload) \{\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 const\cf0 \strokec4  review = msg.payload[key];\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  username = review.user_id;\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  rating = review.rating;\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  timestamp = review.timestamp;\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  reviewtext = review.review_text;\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  score = review.score; \cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // Extract just the date part\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  dateOnly = timestamp.split(\cf5 \strokec5 ','\cf0 \strokec4 )[\cf8 \strokec8 0\cf0 \strokec4 ].trim();\cb1 \strokec4 \
\
\
\cb3 \strokec4                 \cf2 \strokec2 // create container\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  container = document.createElement(\cf5 \strokec5 'div'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 container.\cf6 \strokec6 class\cf0 \strokec4  = \cf5 \strokec5 "album-card"\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 container.style = \cf5 \strokec5 'display: block; width: 100%; margin-top: 10px; padding: 10px; border: 1px solid #ccc; border-radius: 8px;'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 reviewlocation.appendChild(container);\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // --- Header row ---\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  headerRow = document.createElement(\cf5 \strokec5 'div'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 headerRow.style = \cf5 \strokec5 'display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;'\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // Left side: Review by <username> (username in bold only)\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  userLabel = document.createElement(\cf5 \strokec5 'span'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 userLabel.innerHTML = \cf5 \strokec5 `Review by <b>\cf0 \strokec4 $\{username\}\cf5 \strokec5 </b>`\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 headerRow.appendChild(userLabel);\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // Right side: rating stars\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  ratingContainer = document.createElement(\cf5 \strokec5 'div'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 ratingContainer.style = \cf5 \strokec5 'display: inline-block;'\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf6 \strokec6 let\cf0 \strokec4  fullStars = \cf7 \strokec7 Math\cf0 \strokec4 .floor(rating);\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 for\cf0 \strokec4  (\cf6 \strokec6 let\cf0 \strokec4  i = \cf8 \strokec8 0\cf0 \strokec4 ; i < fullStars; i++) \{\cb1 \strokec4 \
\cb3 \strokec4                     \cf6 \strokec6 var\cf0 \strokec4  star = document.createElement(\cf5 \strokec5 'span'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                     star.innerHTML = \cf5 \strokec5 "\uc0\u9733 "\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                     star.style = \cf5 \strokec5 'color:#59c3c3; margin-left: 2px;'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                     ratingContainer.appendChild(star);\cb1 \strokec4 \
\cb3 \strokec4                 \}\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf6 \strokec6 if\cf0 \strokec4  (rating - fullStars >= \cf8 \strokec8 0.5\cf0 \strokec4 ) \{\cb1 \strokec4 \
\cb3 \strokec4                     \cf6 \strokec6 var\cf0 \strokec4  halfStar = document.createElement(\cf5 \strokec5 'span'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                     halfStar.innerHTML = \cf5 \strokec5 "1/2"\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                     halfStar.style = \cf5 \strokec5 'color:#59c3c3; margin-left: 2px; font-size: 0.8em;'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                     ratingContainer.appendChild(halfStar);\cb1 \strokec4 \
\cb3 \strokec4                 \}\cb1 \strokec4 \
\
\cb3 \strokec4                 headerRow.appendChild(ratingContainer);\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // Append header row to container\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 container.appendChild(headerRow);\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // --- Date line ---\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  dateLine = document.createElement(\cf5 \strokec5 'p'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 dateLine.innerText = dateOnly;\cb1 \strokec4 \
\cb3 \strokec4                 dateLine.style = \cf5 \strokec5 'color: gray; font-size: 0.9em; margin-bottom: 5px;'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 container.appendChild(dateLine);\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // --- Review text ---\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  reviewtextdoc = document.createElement(\cf5 \strokec5 'p'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 reviewtextdoc.innerText = reviewtext;\cb1 \strokec4 \
\cb3 \strokec4                 reviewtextdoc.style = \cf5 \strokec5 'margin-top: 5px;'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 container.appendChild(reviewtextdoc);\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // --- NEW: Sentiment line ---\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  sentimentLine = document.createElement(\cf5 \strokec5 'p'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  sentimentText = \cf5 \strokec5 'Neutral'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 if\cf0 \strokec4  (score >= \cf8 \strokec8 0.25\cf0 \strokec4 ) \{\cb1 \strokec4 \
\cb3 \strokec4                     sentimentText = \cf5 \strokec5 'Positive'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 \} \cf6 \strokec6 else\cf0 \strokec4  \cf6 \strokec6 if\cf0 \strokec4  (score <= -\cf8 \strokec8 0.25\cf0 \strokec4 ) \{\cb1 \strokec4 \
\cb3 \strokec4                     sentimentText = \cf5 \strokec5 'Negative'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 \}\cb1 \strokec4 \
\
\cb3 \strokec4                 sentimentLine.innerText = \cf5 \strokec5 `Listener's opinion: \cf0 \strokec4 $\{sentimentText\}\cf5 \strokec5 `\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 sentimentLine.style = \cf5 \strokec5 'font-style: italic; margin-bottom: 5px; color: #555;'\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // Append this under album cover or wherever you'd like\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 container.appendChild(sentimentLine);\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // --- Separator ---\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  line = document.createElement(\cf5 \strokec5 'hr'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 container.appendChild(line);\cb1 \strokec4 \
\cb3 \strokec4             \}\cb1 \strokec4 \
\
\cb3 \strokec4         \cf6 \strokec6 break\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4         \cf6 \strokec6 default\cf0 \strokec4 :\cb1 \strokec4 \
\cb3 \strokec4             console.log(\cf5 \strokec5 "nothing"\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4     \}\cb1 \strokec4 \
\cb3 \strokec4 \})\cb1 \strokec4 \
\
\cb3 \strokec4 window.submitform = \cf6 \strokec6 function\cf0 \strokec4  submitform() \{\cb1 \strokec4 \
\cb3 \strokec4     data.user_id = document.getElementById(\cf5 \strokec5 "userID"\cf0 \strokec4 ).value;\cb1 \strokec4 \
\cb3 \strokec4     data.review_text = document.getElementById(\cf5 \strokec5 "reviewText"\cf0 \strokec4 ).value;\cb1 \strokec4 \
\
\cb3 \strokec4     \cf2 \strokec2 // get rating\cf0 \cb1 \strokec4 \
\cb3 \strokec4     \cf6 \strokec6 var\cf0 \strokec4  radios = document.getElementsByName(\cf5 \strokec5 'rating'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4     \cf6 \strokec6 for\cf0 \strokec4  (\cf6 \strokec6 var\cf0 \strokec4  i = \cf8 \strokec8 0\cf0 \strokec4 , length = radios.length; i < length; i++) \{\cb1 \strokec4 \
\cb3 \strokec4         \cf6 \strokec6 if\cf0 \strokec4  (radios[i].checked) \{\cb1 \strokec4 \
\cb3 \strokec4             data.rating = radios[i].value;\cb1 \strokec4 \
\cb3 \strokec4         \}\cb1 \strokec4 \
\cb3 \strokec4     \}\cb1 \strokec4 \
\
\cb3 \strokec4     uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'topic'\cf0 \strokec4 : \cf5 \strokec5 'submit_form'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'payload'\cf0 \strokec4 : data,\cb1 \strokec4 \
\cb3 \strokec4     \});\cb1 \strokec4 \
\
\cb3 \strokec4     \cf2 \strokec2 // Clear form fields\cf0 \cb1 \strokec4 \
\cb3 \strokec4     document.getElementById(\cf5 \strokec5 'userID'\cf0 \strokec4 ).value = \cf5 \strokec5 ''\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4     document.getElementById(\cf5 \strokec5 'reviewText'\cf0 \strokec4 ).value = \cf5 \strokec5 ''\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4     \cf6 \strokec6 for\cf0 \strokec4  (\cf6 \strokec6 var\cf0 \strokec4  i = \cf8 \strokec8 0\cf0 \strokec4 , length = radios.length; i < length; i++) \{\cb1 \strokec4 \
\cb3 \strokec4         radios[i].checked = \cf6 \strokec6 false\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4     \}\cb1 \strokec4 \
\
\cb3 \strokec4     \cf2 \strokec2 // Wait a bit, then request updated reviews for album\cf0 \cb1 \strokec4 \
\cb3 \strokec4     setTimeout(() => \{\cb1 \strokec4 \
\cb3 \strokec4         uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4             topic: \cf5 \strokec5 'getReviews'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4             payload: \{\cb1 \strokec4 \
\cb3 \strokec4                 album_name: data.album_name,\cb1 \strokec4 \
\cb3 \strokec4                 artist_name: data.artist_name\cb1 \strokec4 \
\cb3 \strokec4             \}\cb1 \strokec4 \
\cb3 \strokec4         \});\cb1 \strokec4 \
\
\cb3 \strokec4         \cf2 \strokec2 // Also refresh recent reviews (on home page)\cf0 \cb1 \strokec4 \
\cb3 \strokec4         uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4             topic: \cf5 \strokec5 'getrecentreviews'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4             payload: \{\}\cb1 \strokec4 \
\cb3 \strokec4         \});\cb1 \strokec4 \
\cb3 \strokec4     \}, \cf8 \strokec8 1000\cf0 \strokec4 ); \cf2 \strokec2 // adjust delay as needed\cf0 \cb1 \strokec4 \
\cb3 \strokec4 \};\cb1 \strokec4 \
}