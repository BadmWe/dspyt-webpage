"""script to convert images to webp"""
import os
from PIL import Image

script_dir = os.path.dirname(os.path.abspath(__file__))


DIR = os.path.abspath(os.path.join(
    script_dir, '..', 'dspyt',  'public', 'images', 'posts', 'mina',))

files = os.listdir(DIR)


images = [file for file in files if file.endswith(
    ('jpg', 'png', 'jpeg', 'webp'))]


existing_webp_files = [
    file for file in images if file.lower().endswith('.webp')]

for element in images:
    file_path = os.path.join(DIR, element)

    if file_path.lower().endswith(('.png', '.jpg', '.jpeg')):
        image_name, ext = os.path.splitext(element)
        webp_file_path = os.path.join(DIR, f'{image_name}.webp')

        if os.path.isfile(webp_file_path):
            print(
                f"{element} already has a corresponding WebP file. Skipping conversion.")

        # can further add conversion

        else:
            initial_size = os.path.getsize(file_path)
            with Image.open(file_path) as image:
                image = image.convert('RGB')
                image.save(webp_file_path, 'webp', quality=10)
            new_size = os.path.getsize(webp_file_path)

            if new_size < initial_size:
                # might need to remove og file
                print(
                    f"{element} converted and size reduced: {(initial_size - new_size) / (1024 * 1024):.2f} MB")
                reduction_percent = (
                    (initial_size - new_size) / initial_size) * 100
                print(f"{element} % size reduction: {reduction_percent:.2f} %")
            else:
                os.remove(webp_file_path)
                print(
                    f"{element} converted but size not reduced, original file kept")

    if file_path.lower().endswith('.webp'):

        initial_size = os.path.getsize(file_path)

        with Image.open(file_path) as image:
            webp_name, _ = os.path.splitext(element)
            new_webp_file_path = os.path.join(DIR, f'{webp_name}_new.webp')

            image = image.convert('RGB')
            image.save(new_webp_file_path, 'webp', quality=30)

            new_size = os.path.getsize(new_webp_file_path)

            if new_size < initial_size:
                os.remove(file_path)
                os.rename(new_webp_file_path, file_path)
                print(
                    f"{element} converted and size reduced: {(initial_size - new_size) / (1024 * 1024):.2f} MB")
                reduction_percent = (
                    (initial_size - new_size) / initial_size) * 100
                print(f"{element} % size reduction: {reduction_percent:.2f} %")
            else:
                os.remove(new_webp_file_path)
                print(
                    f"{element} converted but size not reduced, original file kept")
