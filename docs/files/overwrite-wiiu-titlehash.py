#!/usr/bin/env python3
from ftplib import FTP
from io import BytesIO
from sys import exit
from traceback import format_exc

server_ip = input('What is the IP address of the Wii U? ')

blank_digest = (b'F' * 0x40) + (b'\0' * 0x10)
digest_path = '/storage_slc/security/digest.bin'

try:
    print('Attempting to connect to {0}:21...'.format(server_ip))
    with FTP(server_ip) as f:
        resp = f.login()
        print('Server response:', resp)
        print('Overwriting {0}...'.format(digest_path))
        try:
            resp = f.storbinary('STOR ' + digest_path, BytesIO(blank_digest))
        except ftplib.error_perm:
            print("\nWARNING: Couldn't overwrite.")
            print('Make sure Haxchi CFW, CBHC, or Mocha is active.')
            exit(1)
        print('Server response:', resp)

    print('\nDone. Exit ftpiiu, then go to System Settings -> System Update.')
except Exception as e:
    print('\nERROR OCCURED - please send error.log!\n')
    print(format_exc(), end='')
    with open('err.log', 'w', encoding='utf-8') as o:
        o.write(format_exc())
