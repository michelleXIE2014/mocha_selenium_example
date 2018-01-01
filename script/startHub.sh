#!/bin/bash
result=`ps -ef | grep selenium-server-standalone-3.8.1.jar`

if [ ! -z "$result" -a "$result" != " " ]; then
	pid=`echo $result | awk -F ' ' '{print $2}'` 
	echo $pid
	kill -9 $pid
	#java -jar selenium-server-standalone-3.8.1.jar -role hub & 
	#selenium grid hub can be set up in jenkins directly by using selnium plugin
fi
sleep 10
chrome_version="63.0"
fi	
ps -ef | grep selenium-server-standalone-3.8.1.jar

java -jar selenium-server-standalone-3.8.1.jar -role node -hub http://localhost:4444/grid/register/ -browser browserName=chrome,version=$chrome_version,maxInstances=9,platform=Mac -maxSession 9
