from flask import Flask, jsonify, request
from flask_mysqldb import MySQL


## Importamos los files con las funciones de cada módulo
from backend.routes.colaborador import *

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'CONAFFEX'

mysql = MySQL(app)

@app.route('/',methods = ['GET'])
def getInit():
    return jsonify({"Hello":"Nano"})

## 1. ---- DECLARAMOS LAS RUTAS DE FUNCIÓN DE COLABORADOR ---- ##

@app.route('/colaborador',methods = ['POST'])
def registrarColaborador():    
    return addColaborador(mysql,request)

@app.route('/colaboradores',methods = ['GET'])
def obtenerColaboradores():    
    return getAllColaboradores(mysql)

@app.route('/getOneColaborador',methods = ['POST'])
def obtenerColaborador():    
    return getOneColaborador(mysql,request)

@app.route('/colaborador',methods = ['PUT'])
def actualizarColaborador():    
    return updateColaborador(mysql,request)

## 1. ---- DECLARAMOS LAS RUTAS DE FUNCIÓN DE COLABORADOR ---- ##

if __name__ == "_main_":
   app.run(debug=True)