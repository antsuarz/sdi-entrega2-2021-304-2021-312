module.exports = {
    mongo : null,
    app : null,
    init : function(app, mongo) {
        this.mongo = mongo;
        this.app = app;
    },
    insertarOferta : function(oferta, funcionCallback) {
        this.mongo.MongoClient.connect(this.app.get('db'), function(err, db) {
            if (err) {
                funcionCallback(null);
            } else {
                let collection = db.collection('ofertas');
                collection.insertOne(oferta, function(err, result) {
                    if (err) {
                        funcionCallback(null);
                    } else {
                        funcionCallback(result.ops[0]._id);
                    }
                    db.close();
                });
            }
        });
    },obtenerOfertas : function(criterio, funcionCallback){
        this.mongo.MongoClient.connect(this.app.get('db'), function(err, db) {
            if (err) {
                funcionCallback(null);
            } else {
                let collection = db.collection('ofertas');
                collection.find(criterio).toArray(function(err, ofertas) {
                    if (err) {
                        funcionCallback(null);
                    } else {
                        funcionCallback(ofertas);
                    }
                    db.close();
                });
            }
        });
    },
    insertarUsuario : function(usuario, funcionCallback) {
        this.mongo.MongoClient.connect(this.app.get('db'), function(err, db) {
            if (err) {
                funcionCallback(null);
            } else {
                let collection = db.collection('usuarios');
                collection.insert(usuario, function(err, result) {
                    if (err) {
                        funcionCallback(null);
                    } else {
                        funcionCallback(result.ops[0]._id);
                    }
                    db.close();
                });
            }
        });
    },
    obtenerUsuarios : function(criterio,funcionCallback){
        this.mongo.MongoClient.connect(this.app.get('db'), function(err, db) {
            if (err) {
                funcionCallback(null);
            } else {
                let collection = db.collection('usuarios');
                collection.find(criterio).toArray(function(err, usuarios) {
                    if (err) {
                        funcionCallback(null);
                    } else {
                        funcionCallback(usuarios);
                    }
                    db.close();
                });
            }
        });
    },


};