#!/usr/bin/env bash

set -ex

wget https://stockfishchess.org/files/stockfish_14.1_linux_x64_bmi2.zip
unzip stockfish_14.1_linux_x64_bmi2.zip
rm stockfish_14.1_linux_x64_bmi2.zip
cp stockfish_14.1_linux_x64_bmi2/stockfish_14.1_linux_x64_bmi2 scripts/stockfish
chmod +x scripts/stockfish
rm -r stockfish_14.1_linux_x64_bmi2
