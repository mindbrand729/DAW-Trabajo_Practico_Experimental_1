from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/nosotros')
def nosotros():
    return render_template('nosotros.html')

@app.route('/equipo')
def equipo():
    return render_template('equipo.html')

@app.route('/clientes')
def clientes():
    return render_template('clientes.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/productos')
def productos():
    return render_template('productos.html')

@app.route('/promocion')
def promocion():
    return render_template('promocion.html')

@app.route('/sucursales')
def sucursales():
    return render_template('sucursales.html')

if __name__ == "__main__":
    app.run(debug=True)