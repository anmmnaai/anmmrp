# -*- coding: utf-8 -*-
# Part of anmMRP. See LICENSE file for full copyright and licensing details.

import anmmrp
import anmmrp.exceptions

def check(db, uid, passwd):
    res_users = anmmrp.registry(db)['res.users']
    return res_users.check(db, uid, passwd)

def compute_session_token(session, env):
    self = env['res.users'].browse(session.uid)
    return self._compute_session_token(session.sid)

def check_session(session, env):
    self = env['res.users'].browse(session.uid)
    expected = self._compute_session_token(session.sid)
    if expected and anmmrp.tools.misc.consteq(expected, session.session_token):
        return True
    return False
