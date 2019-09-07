# -*- coding: utf-8 -*-
from time import sleep

def stream_yield(g):
    while g.is_pending():
        lines = g.readlines()
        for proc, line in lines:
            yield line

def stream_logs(path):
        with open(path) as f:
            while True:
                yield f.read()
