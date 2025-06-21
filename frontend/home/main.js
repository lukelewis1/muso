{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red15\green112\blue1;\red255\green255\blue254;\red0\green0\blue0;
\red144\green1\blue18;\red0\green0\blue255;\red14\green110\blue109;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c0\c50196\c0;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c0\c100000;\cssrgb\c0\c50196\c50196;\cssrgb\c3529\c52549\c34510;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // @ts-nocheck\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 'use strict'\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 import\cf0 \strokec4  \cf5 \strokec5 '../uibuilder/uibuilder.esm.min.js'\cf0 \strokec4   \cf2 \strokec2 // Adds `uibuilder` and `$` to globals\cf0 \cb1 \strokec4 \
\cf6 \cb3 \strokec6 var\cf0 \strokec4  searchcontent = [];\cb1 \strokec4 \
\cf6 \cb3 \strokec6 var\cf0 \strokec4  \cf7 \strokec7 AddSongs\cf0 \strokec4  = document.getElementById(\cf5 \strokec5 "trending-albums"\cf0 \strokec4 );\cb1 \strokec4 \
\cf6 \cb3 \strokec6 var\cf0 \strokec4  searchbar = document.getElementById(\cf5 \strokec5 'searchbar'\cf0 \strokec4 );\cb1 \strokec4 \
\cf6 \cb3 \strokec6 var\cf0 \strokec4  genrecontent = [];\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 \strokec4 genrecontent.push(document.getElementById(\cf5 \strokec5 'newsongs'\cf0 \strokec4 ))\cb1 \strokec4 \
\cb3 \strokec4 genrecontent.push(document.getElementById(\cf5 \strokec5 'pop'\cf0 \strokec4 ))\cb1 \strokec4 \
\cb3 \strokec4 genrecontent.push(document.getElementById(\cf5 \strokec5 'rock'\cf0 \strokec4 ))\cb1 \strokec4 \
\cb3 \strokec4 genrecontent.push(document.getElementById(\cf5 \strokec5 'jazz'\cf0 \strokec4 ))\cb1 \strokec4 \
\cb3 \strokec4 genrecontent.push(document.getElementById(\cf5 \strokec5 'rap'\cf0 \strokec4 ))\cb1 \strokec4 \
\cb3 \strokec4 genrecontent.push(document.getElementById(\cf5 \strokec5 'recentReviews'\cf0 \strokec4 ));\cb1 \strokec4 \
\cb3 \strokec4 genrecontent.push(document.getElementById(\cf5 \strokec5 'categories'\cf0 \strokec4 ));\cb1 \strokec4 \
\cb3 \strokec4 addEventListener(\cf5 \strokec5 "load"\cf0 \strokec4 , (event) => \{\cb1 \strokec4 \
\cb3 \strokec4     uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'topic'\cf0 \strokec4 : \cf5 \strokec5 'getrecentreviews'\cf0 \cb1 \strokec4 \
\cb3 \strokec4     \});\cb1 \strokec4 \
\cb3 \strokec4     uibuilder.send(\{ \cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'topic'\cf0 \strokec4 : \cf5 \strokec5 'pageload'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'payload'\cf0 \strokec4 : \cf5 \strokec5 'pop'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'genreID'\cf0 \strokec4 : \cf5 \strokec5 'pop'\cf0 \cb1 \strokec4 \
\cb3 \strokec4     \});\cb1 \strokec4 \
\cb3 \strokec4     uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'topic'\cf0 \strokec4 : \cf5 \strokec5 'pageload'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'payload'\cf0 \strokec4 : \cf5 \strokec5 '2025'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'genreID'\cf0 \strokec4 : \cf5 \strokec5 'newsongs'\cf0 \cb1 \strokec4 \
\cb3 \strokec4     \});\cb1 \strokec4 \
\cb3 \strokec4     uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'topic'\cf0 \strokec4 : \cf5 \strokec5 'pageload'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'payload'\cf0 \strokec4 : \cf5 \strokec5 'jazz'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'genreID'\cf0 \strokec4 : \cf5 \strokec5 'jazz'\cf0 \cb1 \strokec4 \
\cb3 \strokec4     \});\cb1 \strokec4 \
\cb3 \strokec4     uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'topic'\cf0 \strokec4 : \cf5 \strokec5 'pageload'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'payload'\cf0 \strokec4 : \cf5 \strokec5 'rock'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'genreID'\cf0 \strokec4 : \cf5 \strokec5 'rock'\cf0 \cb1 \strokec4 \
\cb3 \strokec4     \});\cb1 \strokec4 \
\cb3 \strokec4     uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'topic'\cf0 \strokec4 : \cf5 \strokec5 'pageload'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'payload'\cf0 \strokec4 : \cf5 \strokec5 'rap'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'genreID'\cf0 \strokec4 : \cf5 \strokec5 'rap'\cf0 \cb1 \strokec4 \
\cb3 \strokec4     \});\cb1 \strokec4 \
\
\cb3 \strokec4 \});\cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 function\cf0 \strokec4  clickSong(albumname, artist) \{\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 \strokec4     \cf6 \strokec6 var\cf0 \strokec4  params = \{\cb1 \strokec4 \
\cb3 \strokec4         albumName: albumname,\cb1 \strokec4 \
\cb3 \strokec4         artistName: artist\cb1 \strokec4 \
\cb3 \strokec4     \};\cb1 \strokec4 \
\cb3 \strokec4     \cb1 \strokec4 \
\cb3 \strokec4     uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'topic'\cf0 \strokec4 : \cf5 \strokec5 'newpage'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'payload'\cf0 \strokec4 : params\cb1 \strokec4 \
\cb3 \strokec4     \});\cb1 \strokec4 \
\cb3 \strokec4     window.location.href = \cf5 \strokec5 "/submitformpage"\cf0 \cb1 \strokec4 \
\cb3 \strokec4 \};\cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 var\cf0 \strokec4  searchbar = document.getElementById(\cf5 \strokec5 'searchbar'\cf0 \strokec4 );\cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 // Add Enter key listener here\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 \strokec4 searchbar.addEventListener(\cf5 \strokec5 'keydown'\cf0 \strokec4 , \cf6 \strokec6 function\cf0 \strokec4  (event) \{\cb1 \strokec4 \
\cb3 \strokec4     \cf6 \strokec6 if\cf0 \strokec4  (event.key === \cf5 \strokec5 'Enter'\cf0 \strokec4 ) \{\cb1 \strokec4 \
\cb3 \strokec4         event.preventDefault();\cb1 \strokec4 \
\cb3 \strokec4         window.fnSendToNR(\cf5 \strokec5 'search'\cf0 \strokec4 );   \cf2 \strokec2 // will trigger your search function\cf0 \cb1 \strokec4 \
\cb3 \strokec4     \}\cb1 \strokec4 \
\cb3 \strokec4 \});\cb1 \strokec4 \
\
\cb3 \strokec4 window.fnSendToNR = \cf6 \strokec6 function\cf0 \strokec4  fnSendToNR(payload) \{\cb1 \strokec4 \
\cb3 \strokec4     uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'topic'\cf0 \strokec4 : payload,\cb1 \strokec4 \
\cb3 \strokec4         \cf5 \strokec5 'payload'\cf0 \strokec4 : searchbar.value\cb1 \strokec4 \
\cb3 \strokec4     \})\cb1 \strokec4 \
\cb3 \strokec4 \};\cb1 \strokec4 \
\
\cb3 \strokec4 uibuilder.onChange(\cf5 \strokec5 'msg'\cf0 \strokec4 , \cf6 \strokec6 function\cf0 \strokec4 (msg)\{\cb1 \strokec4 \
\cb3 \strokec4     \cf6 \strokec6 var\cf0 \strokec4  topic = msg.topic;\cb1 \strokec4 \
\cb3 \strokec4     \cf6 \strokec6 var\cf0 \strokec4  songs = msg.payload;\cb1 \strokec4 \
\
\cb3 \strokec4     \cf6 \strokec6 switch\cf0 \strokec4  (topic)\{\cb1 \strokec4 \
\cb3 \strokec4         \cf6 \strokec6 case\cf0 \strokec4  \cf5 \strokec5 "search"\cf0 \strokec4 :\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  songsJSON = \cf7 \strokec7 JSON\cf0 \strokec4 .parse(songs);\cb1 \strokec4 \
\cb3 \strokec4             console.log(songsJSON);\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 for\cf0 \strokec4  (\cf6 \strokec6 let\cf0 \strokec4  i = \cf8 \strokec8 0\cf0 \strokec4 ; i < songsJSON.results.albummatches.album.length; i++) \{\cb1 \strokec4 \
\cb3 \strokec4                 \cf2 \strokec2 //create title\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 const\cf0 \strokec4  payload = \cf5 \strokec5 `\{\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5                     "artist": \cf0 \strokec4 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(songsJSON.results.albummatches.album[i].artist)\}\cf5 \strokec5 ,\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5                     "albumname": \cf0 \strokec4 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(songsJSON.results.albummatches.album[i].name)\}\cb1 \strokec4 \
\cf5 \cb3 \strokec5                 \}`\cf0 \strokec4 ;\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 \strokec4                 uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4                     \cf5 \strokec5 'topic'\cf0 \strokec4 : \cf5 \strokec5 'loadIndividualAlbum'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4                     \cf5 \strokec5 'payload'\cf0 \strokec4 : \cf7 \strokec7 JSON\cf0 \strokec4 .parse(payload)\cb1 \strokec4 \
\cb3 \strokec4                 \})\cb1 \strokec4 \
\cb3 \strokec4                 \cf2 \strokec2 //removes all content from previous search\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 for\cf0 \strokec4  (\cf6 \strokec6 let\cf0 \strokec4  i = \cf8 \strokec8 0\cf0 \strokec4 ; i < searchcontent.length; i++) \{\cb1 \strokec4 \
\cb3 \strokec4                     searchcontent[i].remove();\cb1 \strokec4 \
\cb3 \strokec4                 \}\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 for\cf0 \strokec4  (\cf6 \strokec6 let\cf0 \strokec4  i = \cf8 \strokec8 0\cf0 \strokec4 ; i < genrecontent.length; i++) \{\cb1 \strokec4 \
\cb3 \strokec4                     genrecontent[i].style.display = \cf5 \strokec5 "none"\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 \}\cb1 \strokec4 \
\cb3 \strokec4                 searchcontent = [];\cb1 \strokec4 \
\cb3 \strokec4                 genrecontent = [];\cb1 \strokec4 \
\
\cb3 \strokec4             \}\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 break\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4         \cf6 \strokec6 case\cf0 \strokec4  \cf5 \strokec5 "loadhome"\cf0 \strokec4 :\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 var\cf0 \strokec4  songsJSON = \cf7 \strokec7 JSON\cf0 \strokec4 .parse(songs);\cb1 \strokec4 \
\cb3 \strokec4             console.log(songsJSON);\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 for\cf0 \strokec4  (\cf6 \strokec6 let\cf0 \strokec4  i = \cf8 \strokec8 0\cf0 \strokec4 ; i < songsJSON.albums.album.length; i++) \{\cb1 \strokec4 \
\cb3 \strokec4                 \cf2 \strokec2 //create title\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 const\cf0 \strokec4  payload = \cf5 \strokec5 `\{\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5                     "artist": \cf0 \strokec4 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(songsJSON.albums.album[i].artist.name)\}\cf5 \strokec5 ,\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5                     "albumname": \cf0 \strokec4 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(songsJSON.albums.album[i].name)\}\cb1 \strokec4 \
\cf5 \cb3 \strokec5                 \}`\cf0 \strokec4 ;\cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3 \strokec4                 uibuilder.send(\{\cb1 \strokec4 \
\cb3 \strokec4                     \cf5 \strokec5 'topic'\cf0 \strokec4 : \cf5 \strokec5 'loadIndividualAlbum'\cf0 \strokec4 ,\cb1 \strokec4 \
\cb3 \strokec4                     \cf5 \strokec5 'payload'\cf0 \strokec4 : \cf7 \strokec7 JSON\cf0 \strokec4 .parse(payload),\cb1 \strokec4 \
\cb3 \strokec4                     \cf5 \strokec5 'genreID'\cf0 \strokec4 : msg.genreID \cb1 \strokec4 \
\cb3 \strokec4                 \})\cb1 \strokec4 \
\cb3 \strokec4                 \cf2 \strokec2 //removes all content from previous search\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 for\cf0 \strokec4  (\cf6 \strokec6 let\cf0 \strokec4  i = \cf8 \strokec8 0\cf0 \strokec4 ; i < searchcontent.length; i++) \{\cb1 \strokec4 \
\cb3 \strokec4                     searchcontent[i].remove()\cb1 \strokec4 \
\cb3 \strokec4                 \}\cb1 \strokec4 \
\cb3 \strokec4                 searchcontent = [];\cb1 \strokec4 \
\
\cb3 \strokec4             \}\cb1 \strokec4 \
\cb3 \strokec4         \cf6 \strokec6 break\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4         \cf6 \strokec6 case\cf0 \strokec4  \cf5 \strokec5 "loadIndividualAlbum"\cf0 \strokec4 :\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  albumJSON = \cf7 \strokec7 JSON\cf0 \strokec4 .parse(msg.payload);\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 //display name\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  albumname = \cf7 \strokec7 JSON\cf0 \strokec4 .stringify(albumJSON.album.name).slice(\cf8 \strokec8 1\cf0 \strokec4 , -\cf8 \strokec8 1\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  docname = document.createElement(\cf5 \strokec5 'h3'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 docname.innerText = albumname;\cb1 \strokec4 \
\cb3 \strokec4                 searchcontent.push(docname);\cb1 \strokec4 \
\cb3 \strokec4                 \cf2 \strokec2 //albumname\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  albumartist = \cf7 \strokec7 JSON\cf0 \strokec4 .stringify(albumJSON.album.artist).slice(\cf8 \strokec8 1\cf0 \strokec4 , -\cf8 \strokec8 1\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  docartist = document.createElement(\cf5 \strokec5 'h4'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 docartist.innerText = albumartist;\cb1 \strokec4 \
\cb3 \strokec4                 searchcontent.push(docartist);\cb1 \strokec4 \
\cb3 \strokec4                 \cf2 \strokec2 //album cover\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  coverimg = \cf7 \strokec7 JSON\cf0 \strokec4 .stringify(albumJSON.album.image[\cf8 \strokec8 4\cf0 \strokec4 ][\cf5 \strokec5 '#text'\cf0 \strokec4 ]).slice(\cf8 \strokec8 1\cf0 \strokec4 , -\cf8 \strokec8 1\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  docimg = document.createElement(\cf5 \strokec5 'img'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 docimg.style.width = \cf8 \strokec8 200\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 docimg.style.height = \cf8 \strokec8 200\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 docimg.src = coverimg;\cb1 \strokec4 \
\cb3 \strokec4                 searchcontent.push(docimg);\cb1 \strokec4 \
\
\cb3 \strokec4                \cb1 \strokec4 \
\cb3 \strokec4                 \cf2 \strokec2 //create container for elements\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  container = document.createElement(\cf5 \strokec5 'section'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 container.className = \cf5 \strokec5 "album-card"\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cb3 \strokec4                 container.onclick = \cf6 \strokec6 function\cf0 \strokec4  () \{\cb1 \strokec4 \
\cb3 \strokec4                     clickSong(albumname, albumartist);\cb1 \strokec4 \
\cb3 \strokec4                 \};\cb1 \strokec4 \
\cb3 \strokec4                 console.log(msg.genreID);\cb1 \strokec4 \
\cb3 \strokec4                 searchcontent.push(container);\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 if\cf0 \strokec4 (msg.genreID != \cf6 \strokec6 undefined\cf0 \strokec4 )\{\cb1 \strokec4 \
\cb3 \strokec4                     \cf6 \strokec6 var\cf0 \strokec4  item = document.getElementById(msg.genreID).appendChild(container);\cb1 \strokec4 \
\cb3 \strokec4                 \}\cf6 \strokec6 else\cf0 \strokec4 \{\cb1 \strokec4 \
\cb3 \strokec4                     \cf7 \strokec7 AddSongs\cf0 \strokec4 .appendChild(container);\cb1 \strokec4 \
\cb3 \strokec4                 \}\cb1 \strokec4 \
\cb3 \strokec4                 container.appendChild(docname);\cb1 \strokec4 \
\cb3 \strokec4                 container.appendChild(docartist);\cb1 \strokec4 \
\cb3 \strokec4                 container.appendChild(docimg);   \cb1 \strokec4 \
\
\
\
\cb3 \strokec4             \cf6 \strokec6 break\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4         \cf6 \strokec6 case\cf0 \strokec4  \cf5 \strokec5 "recentreviews"\cf0 \strokec4 :\cb1 \strokec4 \
\cb3 \strokec4             console.log(\cf5 \strokec5 'loading reviews..'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4             console.log(msg.payload);\cb1 \strokec4 \
\
\cb3 \strokec4             \cf2 \strokec2 // Clear previous reviews\cf0 \cb1 \strokec4 \
\cb3 \strokec4             document.getElementById(\cf5 \strokec5 'recentReviews'\cf0 \strokec4 ).innerHTML = \cf5 \strokec5 ''\cf0 \strokec4 ;\cb1 \strokec4 \
\
\cb3 \strokec4             \cf6 \strokec6 for\cf0 \strokec4  (\cf6 \strokec6 const\cf0 \strokec4  key \cf6 \strokec6 in\cf0 \strokec4  msg.payload) \{\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 const\cf0 \strokec4  review = msg.payload[key];\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  username = review.user_id;\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  rating = review.rating;\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  timestamp = review.timestamp;\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  reviewtext = review.review_text;\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  coverurl = review.cover_url;   \cf2 \strokec2 // get the album cover url\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  albumName = review.album_name;\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  artistName = review.artist_name;\cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  score = review.score;\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // Extract just the date part (split on comma)\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  dateOnly = timestamp.split(\cf5 \strokec5 ','\cf0 \strokec4 )[\cf8 \strokec8 0\cf0 \strokec4 ].trim();\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // Create album-card container\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  container = document.createElement(\cf5 \strokec5 'div'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 container.\cf6 \strokec6 class\cf0 \strokec4  = \cf5 \strokec5 "album-card"\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 container.style = \cf5 \strokec5 'display: block; width: 100%; margin-top: 10px; padding: 10px; border: 1px solid #ccc; border-radius: 8px;'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 document.getElementById(\cf5 \strokec5 'recentReviews'\cf0 \strokec4 ).appendChild(container);\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // --- Album Name and Artist Name ---\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  albumHeading = document.createElement(\cf5 \strokec5 'h4'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 albumHeading.innerText = \cf5 \strokec5 `\cf0 \strokec4 $\{albumName\}\cf5 \strokec5  by \cf0 \strokec4 $\{artistName\}\cf5 \strokec5 `\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 albumHeading.style = \cf5 \strokec5 'margin-bottom: 5px;'\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4                 container.appendChild(albumHeading);\cb1 \strokec4 \
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
\cb3 \strokec4                 \cf2 \strokec2 // Append this under review text or wherever you'd like\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 container.appendChild(sentimentLine);\cb1 \strokec4 \
\
\cb3 \strokec4                 \cf2 \strokec2 // --- Separator ---\cf0 \cb1 \strokec4 \
\cb3 \strokec4                 \cf6 \strokec6 var\cf0 \strokec4  line = document.createElement(\cf5 \strokec5 'hr'\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4                 container.appendChild(line);\cb1 \strokec4 \
\cb3 \strokec4             \}\cb1 \strokec4 \
\cb3 \strokec4             \cf6 \strokec6 break\cf0 \strokec4 ;\cb1 \strokec4 \
\cb3 \strokec4         \cf6 \strokec6 default\cf0 \strokec4 :\cb1 \strokec4 \
\cb3 \strokec4         console.log(\cf5 \strokec5 "nothing"\cf0 \strokec4 );\cb1 \strokec4 \
\cb3 \strokec4     \}\cb1 \strokec4 \
\cb3 \strokec4 \});\cb1 \strokec4 \
}