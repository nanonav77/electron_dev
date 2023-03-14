from flask import jsonify
import MySQLdb.cursors
import json

def addColaborador(mysql,request):
    
    msg = ''
    datosIngresar = json.loads(request.data)

    if request.method == 'POST' and 'nombreCompleto' in datosIngresar and 'identificacion' in datosIngresar and 'tarjeta' in datosIngresar and 'telefono' in datosIngresar and 'observaciones' in datosIngresar and 'tipo' in datosIngresar and 'genero' in datosIngresar:
       nombreCompleto = datosIngresar["nombreCompleto"]
       identificacion = datosIngresar["identificacion"]
       tarjeta        = datosIngresar["tarjeta"]
       telefono       = datosIngresar["telefono"]
       observaciones  = datosIngresar["observaciones"]
       tipo           = datosIngresar["tipo"]
       genero         = datosIngresar["genero"]

       cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
       cursor.execute('INSERT INTO COLABORADOR_FEX VALUES (NULL, % s, % s, % s, % s, % s, % s, % s)', (nombreCompleto,identificacion,telefono,tarjeta,observaciones,tipo,genero, ))
       mysql.connection.commit()
       msg = 'Se ha creado un colaborador con éxito!'
    
    elif request.method == 'POST':
        msg = 'Por favor ingresar los datos solicitados!'
    
    return jsonify(msg)


def getAllColaboradores(mysql):
 
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute('SELECT * FROM COLABORADOR_FEX')
    colaboradores = cursor.fetchall()
    
    return jsonify(colaboradores)


def getOneColaborador(mysql,request):
 
    msg = ''
    colaborador = ''
    datoIngresado = json.loads(request.data)

    if request.method == 'POST' and 'numero' in datoIngresado:
       numero = datoIngresado["numero"]      
       cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
       cursor.execute('SELECT * FROM COLABORADOR_FEX WHERE NUMERO = % s', (numero, ))
       colaborador = cursor.fetchall()
       msg = 'Se ha encontrado el colaborador con éxito!'
    
    elif request.method == 'POST':
       msg = 'No se ha encontrado ningún colaborador!'

    return jsonify(colaborador)


def updateColaborador(mysql,request):

    msg = ''

    if request.method == 'PUT' and 'numeroColaborador' in request.form and 'nombreCompleto' in request.form and 'identificacion' in request.form and 'tarjeta' in request.form and 'telefono' in request.form and 'observaciones' in request.form and 'tipo' in request.form and 'genero' in request.form:
       numeroColaborador = request.form['   ']
       
       nombreCompleto = request.form['nombreCompleto']
       identificacion = request.form['identificacion']
       tarjeta        = request.form['tarjeta']
       telefono       = request.form['telefono']
       observaciones  = request.form['observaciones']
       tipo           = request.form['tipo']
       genero         = request.form['genero']

       cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
       cursor.execute("UPDATE COLABORADOR_FEX SET NOMBRE = %s, IDENTIFICACION = %s, TELEFONO = %s, NUM_TARJETA = %s, OBSERVACIONES = %s,TIPO = %s,GENERO = %s WHERE NUMERO = %s",
                     (nombreCompleto, identificacion, telefono, tarjeta, observaciones,tipo,genero,numeroColaborador))
       mysql.connection.commit()
       msg = 'Se ha actualizado el colaborador con éxito!'
    
    elif request.method == 'PUT':
        msg = 'Por favor ingresar los datos solicitados!'
    
    return msg
