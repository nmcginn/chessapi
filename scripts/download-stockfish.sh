#!/usr/bin/env bash

set -ex

wget https://stockfishchess.org/files/stockfish_14.1_linux_x64_bmi2.zip
unzip stockfish_14.1_linux_x64_bmi2.zip
rm stockfish_14.1_linux_x64_bmi2.zip
mkdir stockfish
cp stockfish_14.1_linux_x64_bmi2/stockfish_14.1_linux_x64_bmi2 stockfish/stockfish
chmod +x stockfish/stockfish
zip stockfish/stockfish.zip stockfish/stockfish
rm -r stockfish_14.1_linux_x64_bmi2
