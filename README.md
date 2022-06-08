# MIT Muslim Student Association  
## Getting Started 
- Download Python3 
  - https://www.python.org/downloads/ 
- Download Git <br />
  - https://git-scm.com/download/win 


#### Mac
- Open the terminal:
     - **Command** + **Space** (_gives you the search bar_)
     - search _terminal_ -> click **return**
#### Windows 
- Open Git Bash:
     - Go to **Start** and search _git_ -> select the **Git Bash**
#### General
```
git clone https://github.com/ATKatary/MSA_MIT.git         # getting the code files 
```
## Frontend 
http://127.0.0.1:3000 (_gives you access to local development frontend_)
### Setup 
#### General
``` 
cd MIT_MSA/frontend                                      # go into the project's frontend directory
npm install                                              # install all necessary dependencies
npm run start                                            # testing that you did everything correctly and frontend works
``` 
## Backend
http://127.0.0.1:8000/api (_gives you access to local development backend_)
### Setup
#### General
```
cd MIT_MSA/backend                                       # go into the project's backend directory
pip3 install virtualenv                                  # installing venv
virtualenv -p python3 venv                               # creating venv
```
#### Mac 
```
source env/bin/activate                                  # activate the virtual environment we will be working in
```
#### Windows 
```
source env/Scripts/activate                              # activate the virtual environment we will be working in
```
#### General
```     
pip3 install django                                      # install all the required files for django
pip3 install djangorestframework                         # install all the required files for the rest api framework
python3 manage.py runserver                              # testing that you did everything correctly and backend works
```
      
