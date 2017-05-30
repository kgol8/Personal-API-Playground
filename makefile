#!/bin/bash


pull:
	git config credential.helper cache
	git pull

reset:#resets the directory to the last commit
	git fetch --all
	git reset --hard origin/master
	git reset --hard HEAD
	git clean -f -d
	git pull
startserver:
	node app.js 

killserver:
	ps -ef | grep "nodejs app.js" | awk '{print $$2}' | xargs kill -2
	echo "PROBABLY WORKED"


killserver_alt:
	kill -2 $$(ps aux | grep 'nodejs app.js' | awk '{print $$2}')
	echo "PROBABLY WORKED"


startmongo:
	sudo service mongod start

killmongo:
	sudo service mongod stop