# -*- coding: utf-8 -*-

from icrawler.builtin import GoogleImageCrawler
import argparse
import sys


class GoogleImagesDownloader(object):
    def __init__(self):
        pass

    def crawler(self, root_dir, keyword):
        google_crawler = GoogleImageCrawler(storage={'root_dir': root_dir})
        with open('logs/GoogleImagesDownloader.log', 'a') as f:
            sys.stdout = f
            google_crawler.crawl(keyword=keyword, max_num=5)

    def runner(self, arguments):        
        self.crawler(arguments[0], arguments[1])

## CLI Controller
if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--root_dir", help="Output Root Directory")
    parser.add_argument("--keyword", help="Search Keyword")
    args = parser.parse_args()
    GoogleImagesDownloader().runner([args.root_dir, args.keyword])
