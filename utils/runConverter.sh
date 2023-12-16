#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo "DEBUG: Script directory is $SCRIPT_DIR"

# Check if virtualenv is installed
if ! command -v virtualenv &> /dev/null
then
    echo "virtualenv is not installed. Installing..."
    pip install virtualenv
fi

# Create and activate the virtual environment
if [ ! -d "venv" ]
then
    virtualenv venv
fi
source $SCRIPT_DIR/venv/Scripts/activate

echo "DEBUG: Virtual environment activated"

# Install dependencies (assuming requirements.txt exists)
pip install -r $SCRIPT_DIR/requirements.txt

python $SCRIPT_DIR/convert.py

echo "DEBUG: Python script executed"
