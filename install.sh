#!/bin/bash
export NG_CLI_ANALYTICS=ci
cd ~
rm -rf koonts-dot-net/
git clone https://github.com/helloimalemur/koonts-dot-net
cd koonts-dot-net/
ng config -g cli.warnings.versionMismatch false
ng analytics disable
echo N | ng analytics off
ng build
npm install node
ng build
rm -rf ~/dist
mkdir ~/dist
mv dist/koonts/* ~/dist
rm -rf koonts-dot-net/


#sudo rm -rf /srv/http/*
#sudo mv dist/koonts/* /srv/http/
