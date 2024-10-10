import CL_estudiante from "./CL_estudiante.js";
export default class CL_becado extends CL_estudiante {
    constructor(nombre, notas, materias){  
        super(nombre, notas, materias);
    }



    beca(){
        if(this.promNotas()>=15)
            return "tiene una beca de 30.00$";
        else 
            if(this.promNotas()>=10)
            return "tiene una beca de 20.00$";
        else 
            return "no recibe beca";    
        }
            
        

    

    
















































}




































