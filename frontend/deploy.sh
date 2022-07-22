cd /home/msaweb/MSA_MIT/frontend
npm run build
sudo mv build /var/www/
cd /var/www/
sudo mv frontend/.htaccess build/
sudo rm -rf frontend
sudo mkdir frontend
sudo mv build/.htaccess frontend
sudo cp -R build/* frontend
sudo rm -rf build
sudo apachectl restart
