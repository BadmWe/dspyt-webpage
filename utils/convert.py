"""script to convert images to webp"""
import os
from PIL import Image

DIR = '../dspyt/public/images/posts/uniswap/'

files = os.listdir(DIR)
images = [file for file in files if file.endswith(('jpg', 'png'))]

for element in images:
    #print(os.path.getsize(f'{DIR}/{element}'))
    image = Image.open(f'{DIR}/{element}')
    image = image.convert('RGB')
    image_name = element.split('.')[0]
    image.save(f'{DIR}/{image_name}.webp', 'webp')
    #print(os.path.getsize(f'{DIR}/{image_name}.webp'))
