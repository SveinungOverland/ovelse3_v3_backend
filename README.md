# ovelse3_v3_backend

Beskrivelse av stack:

REST server basert på express

Bruker body-parser middleware til express

Bruker flow for type sjekking

Bruker bcrypt for salting/hashing av bruker passord

Bruker mongodb (mlab.com)

Bruker mongoose for etablering av modeller og forespørsler mot db'en

Hostes på Heroku
Prosjektet blir kun buildet etter det har passert tester på
    Circleci & codeclimate

Testing bruker Mocha og Chai

Bruker dotenv for server spesifikke tokens (db token med passord osv)