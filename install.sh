#!/bin/bash
export NG_CLI_ANALYTICS=ci
cd ~
rm -rf koonts-dot-net/
git clone https://github.com/helloimalemur/koonts-dot-net
cd koonts-dot-net/
ng config -g cli.warnings.versionMismatch false
ng analytics disable
ng analytics off
ng build
npm install node
ng build
sudo rm -rf /srv/http/*
sudo mv dist/koonts/* /srv/http/
rm -rf koonts-dot-net/
