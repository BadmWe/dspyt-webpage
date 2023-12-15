"""script to convert images to webp"""
import os
from PIL import Image

DIR = os.path.join('..', 'dspyt', 'public', 'images', 'posts', 'web3basketball')
#DIR = os.path.join('..', 'dspyt', 'public', 'authors')
#DIR = os.path.join('..', 'dspyt', 'public')

files = os.listdir(DIR)
images = [file for file in files if file.endswith(('jpg', 'png', "webp"))]

for element in images:
    file_path = os.path.join(DIR, element)
    with Image.open(file_path) as image:
        initial_size = os.path.getsize(file_path)
        image = image.convert('RGB')
        image_name, _ = os.path.splitext(element)
        webp_file_path = os.path.join(DIR, f'{image_name}.webp')
        image.save(webp_file_path, 'webp', quality=30)
        final_size = os.path.getsize(webp_file_path)
        reduction_percent = ((initial_size - final_size) / initial_size) * 100
        print(f"{element} % size reduction:{reduction_percent:.2f} %")
        print(f"{element} size reduction:{(initial_size - final_size)/(1024 * 1024):.2f} MB")
