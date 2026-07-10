from odoo import http
from odoo.http import request


class WHM2(http.Controller):

    @http.route('/piquipiqui', type='http', auth='user', website=False)
    def index(self, **kwargs):
        session_info = request.env['ir.http'].session_info()
        return request.render('piquipiqui.piquipiqui_index', {
            'session_info': session_info,
        })
