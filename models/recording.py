from odoo import models, fields, api
from odoo.exceptions import ValidationError


class Recording(models.Model):
    # db table name
    _name = "recs.recordings"
    _description = "Review recordings"
    _sort = "rec_timestamp desc"

    rec_name = fields.Char("Recording name")
    rec_timestamp = fields.Datetime("Recording time")
    rec_device = fields.Char("Recording device")
    rec_audio_file = fields.Binary("File")
    rec_filename = fields.Char("Filename")
    rec_transcription = fields.Text("Recording transcription")

    @api.constrains("rec_audio_file")
    def _check_date_end(self):
        for record in self:
            if not record.rec_filename.endswith([".wav", ".ogg", ".mp3"]):
                raise ValidationError("Uploaded file should be a .wav file.")
