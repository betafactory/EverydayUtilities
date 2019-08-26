from icrawler.builtin import GoogleImageCrawler
import sys

google_crawler = GoogleImageCrawler(storage={'root_dir': sys.argv[1]})
google_crawler.crawl(keyword=sys.argv[2], max_num=100)