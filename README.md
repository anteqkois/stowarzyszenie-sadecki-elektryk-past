# github

## comands associated with branch
- git branch (name of branch)                       --> Create new branch.
- git branch -D (name of branch)                    --> Delete branch.
- git branch -a                                     --> show all branches.
- git checkout (name of branch)                     --> switch, change branch on which work.
- git merge (name of branch)                        --> merge, connect two branches (the example, merge feature branch with master branch).

If you want connecting branch, you must do commit on branch which you want connect to master branch. Next you switch on master branch and in terminal execute the command "git merge (name of branch with you want to connect master branch)".

## other usefull commands
- git log --graph --decorate --all --oneline        --> this command allows you see commit and branch in clearer character.


## How to connect witc remote repository
- First you must create a connect with remote repository     -> git remote add origin https://github.com/anteqkois/stowarzyszenie-sadecki-elektryk.git
- Next                                                        -> git branch -M master
- And last step is 

## remote repository
- git remote add origin (adres url to repository)    -->create connecting local repository with remote repository, that connect called "origin".
- git push -u origin master                          -->first push data, file... from local repository to remote repository which uses origin connected. the flag -u is shortcut to "--set-upstream", that allows to indicate remote repository and branch on which want to push data. Next time you can use simple "git push".
- git push                                          -->push data, file... from local repository to remote repository.
- git fetch                                         -->download(not combines data with local repository) data, file... from remote repository to local repository.
- git merge origin/master                           -->update (combines data from remote repository with local) data, file... from remote repository to local repository.

## update and merge data from remote repository(Every Time when you start working, check whether in remote repository, data have been changed)
You have two option to update your local repository.
### First option:
- You have execute command "git fetch" and next "git merge origin/master" to join your branch to a remote branch.
### Second option:
- You have execute command "git pull" if you would at once dowland and combines data from remote repository in one step.

## test from remote repository
test one was successed
Test v.0.0.4

