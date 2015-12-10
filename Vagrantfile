# -*- mode: ruby -*-
# vi: set ft=ruby :

$install = <<SCRIPT
apt-get update
# Use docker's install script to install latest version.
curl -s https://get.docker.com/ | sh

# Install docker-compose.
curl -L https://github.com/docker/compose/releases/download/1.5.2/docker-compose-`uname -s`-`uname -m` > /usr/bin/docker-compose
chmod a+x /usr/bin/docker-compose

# Install node.js
apt-get install -y nodejs npm
ln -s nodejs /usr/bin/node

# Configure
cd /vagrant/
docker-compose build
npm up
SCRIPT

$run =  <<SCRIPT
cd /vagrant/
node index.js
SCRIPT

Vagrant.configure(2) do |config|
config.vm.box = "phusion/ubuntu-14.04-amd64"
config.vm.network "forwarded_port", guest: 8081, host: 8081

# Provision using inline script defined above.
config.vm.provision "shell", inline: $install
config.vm.provision "shell", inline: $run , run: "always"
end
