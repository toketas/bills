from peewee import *
import datetime

psql_db = PostgresqlDatabase('toketas', user='toketas')

class BaseModel(Model):
    """A base model that will use our Postgresql database"""

    class Meta:
        database = psql_db


def initialize_db():
    psql_db.connect()


class Category(BaseModel):
    id = PrimaryKeyField()
    #parent = ForeignKeyField('self', related_name='children')
    description = CharField()


class SubCategory(Category):
    parent = ForeignKeyField(Category)


class Spent(BaseModel):

    id = PrimaryKeyField()
    description = CharField()
    category = ForeignKeyField(SubCategory)
    amount = FloatField()
    credit = BooleanField()
    date = DateTimeField()
