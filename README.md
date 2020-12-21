# github

## comands associated with branch
- git branch (name of branch)                       --> Create new branch.
- git branch -D (name of branch)                    --> Delete branch.
- git branch -a                                     --> show all branches.
- git checkout (name of branch)                     --> switch, change branch on which work.
- git merge (name of branch)                        --> merge, connect two branches (the example, merge feature branch witch master branch).

If you want connecting branch, you must do commit on branch which you want connect to master branch. Next you switch on master branch and in terminal execute the command "git merge (name of branch witch you want to connect master branch)".

## other usefull commands
- git log --graph --decorate --all --oneline        --> this command allows you see commit and branch in clearer character.

## remote repository
- git remote add origin (adres url to repository)    -->create connecting local repository with remote repository, that connect called "origin".
- git push -u origin master                          -->first push data, file... from local repository to remote repository witch uses origin connected. the flag -u is shortcut to "--set-upstream", that allows to indicate remote repository and branch on which want to push data. Next time you can use simple "git push".
- git push                                          -->push data, file... from local repository to remote repository.
- git fetch                                         -->download(not combines data witch local repository) data, file... from remote repository to local repository.
- git merge origin/master                            -->update (combines data from remote repository witch local) data, file... from remote repository to local repository. 

## How to connect witch remote repository
First you must create a connect witch remote repository     -> git remote add origin https://github.com/anteqkois/stowarzyszenie-sadecki-elektryk.git
Next                                                        -> git branch -M master
And last step is 

## update and merge data from remote repository(Every Time when you start working, check whether in remote repository, data have been changed)
You have execute command "git fetch" and next "git merge origin/master".

