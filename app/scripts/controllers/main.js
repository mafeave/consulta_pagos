'use strict';

/**
 * @ngdoc function
 * @name consultaPagosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the consultaPagosApp
 */
angular.module('consultaPagosApp')
  .controller('MainCtrl', function (pagosRequest) {

    var self= this;

    self.dia=null;
    self.mes=null;
    self.anio=null;
    self.rango_inicial=null;
    self.rango_fin=null;
    self.rta=null;

      //uigrid
      self.gridOptions = {};
      self.gridOptions.columnDefs = [
        { name: 'DIA', displayName: 'Día', width: "10%"  },
        { name: 'MES', displayName: 'Mes', type: 'date', width: "10%"  },
        { name: 'ANO', displayName: 'Año', width: "10%"  },
        { name: 'VIGENCIA', displayName: 'Vigencia', width: "10%"  },
        { name: 'IDENTIFICACION', displayName: 'Identificación', width: "10%"  },
        { name: 'NOMBRE', displayName: 'Nombre', width: "20%"  },
        { name: 'CODIGO_CONCEPTO', displayName: 'Concepto', width: "10%"  },
        { name: 'NUMERO_CUENTA', displayName: 'N° Cuenta', width: "10%"  },
        { name: 'TIPO_INGRESO', displayName: 'Ingreso', width: "10%"  },
      ];


    self.consultarPagos= function(){
      var parametros = {
        'dia': self.dia,
        'mes': self.mes,
        'anio': self.anio,
        'rango_ini': self.rango_inicial,
        'rango_fin': self.rango_fin

      };
      pagosRequest.get(parametros).then(function(response){
        self.rta=null;
        self.pagos=null;
        if(response!=null){
          if(response=="No se encontraron coincidencias para la fecha ingresada "+self.dia+"-"+self.mes+"-"+self.anio){
            self.rta=response;
          }else{
            self.pagos=response;
            self.gridOptions.data = self.pagos;
          }
        }

      });

    }

  });
