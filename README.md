# nodejs-load-balancer  
I am primarily trying this on windows and faced few issues with pm2. I am writing, how I made it work and how to see that it works.  
It is all on localhost as this was for me to learn.
  
# How to run on windows  
1. You first set up your node.js backend and copy my server.js file.  
2. You can use pm2 to run multiple instances of the server on different ports, but for some reason the logs were crashing, so I decided to do it manually  
3. You open different cmdlets or powershell terminals and run 'node server.js 3000', 'node server.js 3001', 'node server.js 3002', 'node server.js 3003' each one in different terminal  
4. This is basically gets different instances of your server running on different ports of localhost (port: 3000, 3001, 3002, 3003)
5. To test if this is working you can use postman, or any form of curl, (I ran 'Invoke-WebRequest -URI http://localhost:3000/' in powershell, works like curl)  
6. On testing you'll receive the message 'Hello from port 3000', according to port no. and where you ran the server instance (the terminal) you should get the same log output printed.  

7. Then, install nginx on your system.  
8. After that inside the nginx folder (wherever you saved it) go to the conf folder and inside that open the nginx.conf file  
9. Copy the nginx.conf file I've committed in this repo. (The main difference would be the new upstream context and changes in the location context)  
10. Now go back to the main folder and run nginx.exe (you can do this by just typing nginx.exe in the correct directory in cmd)
11. The changes which are made in nginx.conf file basically set the different http://localhost:ports as upstream, to which http:localhost redirects.  
12. So now you can use postman, or curl, etc and hit the 'http://localhost/' and after running it 4-5 times you'll see that different ports are being hit. This means that nginx is distributing the requests.  
13. By default this is set to round robin algorithm for distribution. You can check online the different algos present and how to set them, it is quite simple, only 1 line needs to be added in nginx.conf file.  
