pyinstaller --add-binary ./One.dll;. --add-binary ./Multi.dll;. --add-data ../dist;./html --add-data ./data;./data -F main.py
rem pyinstaller -F main.spec