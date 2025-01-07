from . import models
from . import controllers

"""
TODO

+ 1. Recording name should be in following format:
DEVICEID_DDMMYYYY_HHMM which will represent ID of the device (to identify table/unit), Date in following format 30/12/2024 and time like 1743 (17h 43m) rendering in following name (eg) qwruj41_30122024_1743

2. Calendar for date interval. Function to filter dates for viewing reviews only in specified time frame

+ 3. Expandable text. Some reviews are very long, which occupies a lot of text. Adding ability to extend and fully view text will save a lot of UI space

4. Add audio widget. KS_AUDIO provides free audio widget which is very easy to place on the UI page for listening reviews.
Audio Widget to playback audio
https://apps.odoo.com/apps/modules/17.0/ks_audio

+ 5. Recording name should be hidden by default for user. Following order of columns is by default: Recording time, Text Review with audio playback (or audio comes in the next column if not possible, Device ID, Rec File Name

"""