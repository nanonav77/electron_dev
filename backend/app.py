from flask import Flask, jsonify, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'CONAFFEX'

mysql = MySQL(app)

@app.route('/',methods = ['GET'])
def getInit():
    return jsonify({"Hello":"Nano"})

@app.route('/colaborador',methods = ['POST'])
def registrarColaborador():
    
    msg = ''
    
    if request.method == 'POST' and 'nombreCompleto' in request.form and 'identificacion' in request.form and 'tarjeta' in request.form and 'telefono' in request.form and 'observaciones' in request.form and 'tipo' in request.form and 'genero' in request.form:
       nombreCompleto = request.form['nombreCompleto']
       identificacion = request.form['identificacion']
       tarjeta        = request.form['tarjeta']
       telefono       = request.form['telefono']
       observaciones  = request.form['observaciones']
       tipo           = request.form['tipo']
       genero         = request.form['genero']

       cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
       cursor.execute('INSERT INTO COLABORADOR_FEX VALUES (NULL, % s, % s, % s, % s, % s, % s, % s)', (nombreCompleto,identificacion,telefono,tarjeta,observaciones,tipo,genero, ))
       mysql.connection.commit()
       msg = 'Se ha creado un colaborador con éxito!'
    
    elif request.method == 'POST':
        msg = 'Por favor ingresar los datos solicitados!'
    
    return msg

if __name__ == "_main_":
   app.run(debug=True)