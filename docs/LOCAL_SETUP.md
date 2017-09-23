## Setting up your local dev enviroment

1. Signup and download ngrok -&gt; [https://ngrok.com/](https://ngrok.com/) 
2. Be sure to grab your auth token from the dashboard page on the ngrok website, and run the command on your local machine after installing it.  The command will look like:  
    1.  ngrok authtoken 4oFkoTRRFoiBHjyb65Ndq_223s77WnpdDsQR4zKeQwm 

3. Create and checkout a new branch 
    1. git clone [https://github.com/Lambda-School-Labs/Admin-Tools-API.git](https://github.com/Lambda-School-Labs/Admin-Tools-API.git) 
    2. git branch {your name or github username} 
    3. git checkout -b {your name or github username} 

4. Install dependencies 
    1. npm install 

5. Set your mongo db URI in the config.js file, either local or remote 
    1. Local: mongodb://localhost/pr-testing 
    2. mLab: mongodb://{username}:{password}@{mlab_acct}.mlab.com:{port}/pr-testing 

6. Start ngrok and point it to port 5000 
    1. ngrok http 5000 

7. Start local server 
    1. Npm run start:dev 

8. Create a new repository for testing  
    1. Go into the Settings tab 
    2. Click on the Webhooks link 
    3. Add webhook 
    4. Set Payload URL to the Forwarding address shown in your terminal running ngrok, should look like:  
        1. [https://674e3397.ngrok.io](https://674e3397.ngrok.io) 

    5. Set content type to “application/json” 
    6. Select the “Let me select individual events” radio option, then select the Pull request events 
    7. Make sure Active is checked 
    8. Click Add webhook 

Your development environment should be ready to go!

  

Note: Every time ngrok is restarted on your local machine, you will need to update the Payload URL in your webhook with the new forwarding address provided by ngrok