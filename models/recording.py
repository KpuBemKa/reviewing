from odoo import models, fields


class Recording(models.Model):
    # db table name
    _name = "recs.recordings"
    _description = "Review recordings"

    # recording name
    rec_name = fields.Char()
    rec_timestamp = fields.Datetime()
    rec_audio_file = fields.Binary()
    rec_transcription = fields.Text()
