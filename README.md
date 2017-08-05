# Node Socket Chat Application

#### This chat app is based off of the Socket.io documentation, running on a Node.js server, through Express.js.

## Installation 

###### (For Mac. If youre on Windows, youre on your own.)

### Step 1

download zip

### Step 2

extract to easily findable location

### Step 3

go to [nodejs.org](nodejs.org) and install the latest version of node. Should be 8.x.x.

### Step 4

open terminal and run

>npm -v

to verify your version

### Step 5

change directory to where you extracted the zip file with

>cd /your/folder/path

### Step 6

run

>node index

to verify that the server is working. if you get the response 

>listening on port 3000

it is working properly. 


### Step 7

make sure the ngrok executable is in the application directory

then open a **new** terminal window in the same directory (**DO NOT CLOSE THE OTHER TERMINAL WINDOW**)

then run

>./ngrok http 3000

the terminal window should open the ngrok aparatus (black with a few links)

### Step 8

copy the http://xxx.ngrok.io link and paste in a browser to test functionality

if you see a plain chat-styled window, it worked.

### Step 9

share with whoever you want! you have a chat apparatus now. remember, when you close the terminal windows, server will be shut down. whenever you want to re-initialize the server, folow step 6 through 8. remember that the chat apparatus will only be enabled and broadcasting to the server when both the terminal windows are open, so if you turn off your computer, you turn off the chat. if you want something more permanent without these limitations, try running it on an always-on dedicated server.

## This is my first work so enjoy!
