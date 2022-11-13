#!/bin/bash
sudo pacman -S npm --noconfirm
sudo npm update
sudo npm install -g @angular/cli
sudo npm install -g @angular-devkit/build-angular
bash <(curl -s https://raw.githubusercontent.com/helloimalemur/koonts-dot-net/master/install.sh)
sudo rm -rf /srv/http/*
sudo mv ~/dist/* /srv/http/

