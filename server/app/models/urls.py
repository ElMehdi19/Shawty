from app import db

class Url(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    original_url = db.Column(db.Text, nullable=False)
    short_route = db.Column(db.String(6), nullable=False, unique=True)
    user_info = db.Column(db.PickleType, default={})
    visitors = db.Column(db.PickleType, default={})
    total_visitors = db.Column(db.Integer, default=0)
    reports = db.relationship('Report', backref='url', lazy=True)
    total_reports = db.Column(db.Integer, default=0)

    def __repr__(self):

        return f'({self.id}, {self.total_visitors}, {self.short_route}, {self.total_reports})'

    @property
    def as_dict(self):

        return { column.name: getattr(self, column.name) for column in self.__table__.columns }