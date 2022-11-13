#!/bin/bash
pacman -S npm --noconfirm
npm update
npm install -g @angular/cli
npm install -g @angular-devkit/build-angular
su -c 'bash <(curl -s https://raw.githubusercontent.com/helloimalemur/koonts-dot-net/master/install.sh)' foxx
rm -rf /srv/http/*
mv /home/foxx/dist/* /srv/http/

