//https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/

guide to remember

// Steps to get it working
Add your secret in /config/config
Add your ATLAS uri string in /config/db

// Use postman to send a post to 
    https://localhost:3000/api/auth/register
    
    in the body (in a x-ww-form-encoded)
    name testname
    email test@mail.com
    password tstPword

    this should register a user 

    you can now log in
