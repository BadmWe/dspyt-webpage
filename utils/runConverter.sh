#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "DEBUG: Script directory is $SCRIPT_DIR"

source $SCRIPT_DIR/venv/Scripts/activate

echo "DEBUG: Virtual environment activated"

python $SCRIPT_DIR/convert.py

echo "DEBUG: Python script executed"