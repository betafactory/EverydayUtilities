# -*- coding: utf-8 -*-

from flask import Blueprint, request, current_app as this, Response
from routes import UTILITY_RUNNER_PATH
from services.utils import stream_yield, stream_logs
from core.CoreHandler import CoreHandler
from subprocess import PIPE, Popen
from threading  import Thread
from Queue import Queue, Empty
from shelljob import proc
import sys
import eventlet
from multiprocessing import Process
import contextlib

eventlet.monkey_patch()
ON_POSIX = 'posix' in sys.builtin_module_names

base = Blueprint('base', __name__)

@contextlib.contextmanager
def redirect_stdout(target):
    original = sys.stdout
    sys.stdout = target
    yield
    sys.stdout = original

@base.route(UTILITY_RUNNER_PATH, methods=['POST'])
def utility_runner():
    eventlet.monkey_patch()
    this.logger.info("Initiating Utility Runner!")
    data = request.form.to_dict()
    # handler = Process(target=CoreHandler(data["type"], data["arguements"].split(",")).run)
    # handler.start()
    # g = proc.Group()
    # p = g.run( [ CoreHandler("GoogleImagesDownloader", "temporary, Sourav Badami").run ] )
    logpath = 'logs/{}.log'.format(data["type"])
    with open(logpath,'a') as f:
        with redirect_stdout(f):
            CoreHandler(data["type"], data["arguements"].split(",")).run()
    
    return Response(stream_logs(logpath),  mimetype= 'text/plain')