Owncloud customised cloud with registration
========

1. apt-get update
2. apt-get upgrade
3. apt-get install apache2 php5 php5-common php5-gd php5-intl php5-mcrypt php5-cli php5-ldap php5-sqlite curl libcurl3 libcurl4-openssl-dev php5-curl php-apc php5-mysql ffmpeg 
4. apt-get install mysql-client mysql-server
5. mysql_secure_installation  
6.  mysql -u root -p 
7.  create database owncloud;
8.  create user 'owncloud'@'localhost' IDENTIFIED BY '***';
9.  GRANT ALL ON owncloud.* to 'owncloud'@'localhost'; 
10. quit 
11. apt-get install ntp ntpdate  
12. nano /etc/ntp.conf (allservers set to -> server 0.ru.pool.ntp.org iburst dynamic)
13. ntpdate -bs 0.ru.pool.ntp.org 
14. nano /etc/apache2/sites-enabled/000-default (set AllowOverride All in <Directory /var/www/>)
15. service apache2 restart 
16. nano /etc/php5/apache2/php.ini (mysql.default_socket -> /var/run/mysqld/mysqld.sock;mysql.cache_size -> 4000;upload_max_filesize -> 1024M;post_max_size -> 1024M;memory_limit = 1024M; default_charset=UTF-8 )
17. cd /var/www/ 
18. wget https://download.owncloud.org/community/owncloud-7.0.4.tar.bz2
19. tar -xvf owncloud-7.0.4.tar.bz2
20. chown -R www-data:www-data /var/www/owncloud/ 
21. rm owncloud-7.0.4.tar.bz2
22. nano index.html (<html><head><meta http-equiv="refresh" content="0; url=owncloud" /></head></html>)
23. on http://ip/owncloud set admin user and db connection settings
24. apt-get install git
25. curl -sL https://deb.nodesourse.com/setup | bash -
26. apt-get install nodejs
27. apt-get install build-essential
28. cd /var/www/
29. tar -zcvf oc_backup.tar.gz owncloud/
30. git clone *this repo* tmp
31. cp -r -i -u tmp/* owncloud/
32. chmod -R 777 owncloud/config/node
33. cd owncloud/config/node
34. npm install request

