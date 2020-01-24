from boggle import Boggle
from flask import Flask, request, render_template, flash, redirect, session
# from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"

# debug = DebugToolbarExtension(app)

@app.route('/')
def display_board():
    boggle_game = Boggle()
    board = boggle_game.make_board()

    session['board'] = board

    return render_template('index.html', board=board)
