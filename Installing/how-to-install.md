#How To Install Ionic

1. Install node.js
Enter in [node.js site](https://nodejs.org), download and install a node

2. Install cordova and ionic
Open a terminal or cmd and type:
'''
~$ sudo npm install -g cordova ionic
'''
This command line install ionic globally

3. Still in the terminal we should start a new aplication, so type ionic start /[nameofaplication]/ /[template]/:
'''
~$ ionic start MyFirstApp sidemenu
''' 

4. Now we should install a platform who we building a aplication... in my case android, so in terminal type:
'''
~$ sudo cordova platform add android
'''

And following this 4 steps you have a aplication in ionic, so for see it in browser you can type:
'''
~$ ionic serve
'''