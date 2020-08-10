from app import db

class Report(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), nullable=False)
    user_ip = db.Column(db.String(32), default=None)
    details = db.Column(db.Text, nullable=False)
    url_id = db.Column(db.Integer, db.ForeignKey('url.id'), nullable=False)

    def __repr__(self):
        return f'(R #{self.id} | URL: {self.url_id})'