# New York JavaScript Study Group
### Projects Monorepo (@nyjs-projects-monorepo)


This [monorepo](https://github.com/bobbwhy/nyjs-projects-monorepo) contains a series of practice projects for the 
*[New York JavaScript Study Meetup Group](https://www.meetup.com/New-York-JavaScript-Study-Group/)*
 
During our meetings we will work with different areas of this monorepo either to continue its construction or 
to illustrate specific techniques.

#### Current Status of Monorepo: Pre-Alpha 
Currently we are working to prepare this for the first workshop on 10/24.  While it should be possible
to start using some of the code here before then, it is not recommended.

By the first workshop, this repo will be ready to act as a starter kit.

#### Some things you need to make use of this Monorepo:
* git
* nodejs v 12.x
* docker


#### some ways to participate:

1: **Contribute directly to the Package Releases:** If you want to contribute, 
please attend one of our meetings and let us know.

2: **Work in your own personal branch(es) of this repository.**  You may wish to make modifications 
to one or more apps or sections of code in this repo for your own use only, while 
still using other sections as released.  In that case, create branches for your own 
personal use.

* You are free to work on your personal branches with the group or separately.
* You are not required to share your personal branches
* If you want, you can push your personal branches to the repo so you can allow others 
to review or use your work.
* You can also request that your personal branches are merged into one of the group's branches for release.
* You can merge releases branches into your personal branches on your own machine as you see fit.


You should name your personal branch in the following format:
 ``` 
 git branch [your_name_or_initials]/development 
```

If you wish to share your personal branches with the group, but not have them made as part 
of the library, you can simply push your branch to the repo.

**If you want to push a personal branch to the repo:** The first time you do, please make
sure no one else shares your name or initials.  You can see if any branch on the remote 
shares your name or initials in bash with the following commands.

```
    git fetch -a
    git branch -a | grep [your name or initials] 
```


## About MonoRepos
A monorepo is simply a repository that contains multiple packages that 
would otherwise be in their own repository ( which would be a multirepo ).
 

## NPM Commands for this Repo

### Fake-Data Package
* **fake:persons `yarn fake:persons`:** generates fake person data and saves it to 
packages/fake-data/data/persons.json

### Node Express Package
* **server:start `yarn server:start`:** starts the node express server.  
You can stop the server by ctrl-C

### Mongo Database
* **mongo:start `yarn mongo:start` or `npm run mongo:start`:** 
    * Starts the Mongo Database from Docker with .env/mongodb.env file.  If you do not 
    have that file, create it from the sample.env file
    * Starts Adminer Database GUI from Docker
    
* **mongo:stop `yarn mongo:stop`: or `npm run mongo:stop`**
    * Stops the Mongo Database from Docker
 

