# -*- coding: utf-8 -*-
from GoogleImagesDownloader import GoogleImagesDownloader


class CoreHandler(object):
    def __init__(self, toolname, arguments):
        self.toolname = toolname
        self.arguments = arguments
        self.command_set = {
            "GoogleImagesDownloader": "GoogleImagesDownloader",
            "SimpleHTTPServerWithUpload": "SimpleHTTPServerWithUpload"
        }

    def run(self):
        if self.toolname not in self.command_set:
            return False
        method = getattr(self, self.command_set[self.toolname])
        method(self.arguments)

    def GoogleImagesDownloader(self, arguments):
        GoogleImagesDownloader().runner(arguments)

    def SimpleHTTPServerWithUpload(self):
        pass