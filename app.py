from boggle import Boggle
from flask import Flask, request, render_template, flash, redirect, session, jsonify

# from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config["SECRET_KEY"] = "oh-so-secret"

# debug = DebugToolbarExtension(app)
boggle_game = Boggle()


@app.route("/")
def display_board():
    board = boggle_game.make_board()

    session["board"] = board
    session["successful_words"] = []
    return render_template("index.html", board=board)


@app.route("/", methods=["POST"])
def submit_word():
    word_input = request.json["word-input"]

    # if word already submitted, return "not okay"

    # if word is valid,
    board = session["board"]
    result_value = boggle_game.check_valid_word(board, word_input)

    if result_value == "ok":
        msg = f"added: {word_input}"
    elif result_value == "not-on-board":
        msg = f"{word_input} is not a valid word on this board"
    elif result_value == "not-word":
        msg = f"{word_input} is not a valid English word"
    # return jsonify("result": msg)
    return jsonify(result=result_value)
    #  not a valid english word
    # added: "word"
    # not a valid word on this board
    # flash(f"{word_input} is {result}")

