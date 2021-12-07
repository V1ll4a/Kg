let masa;
do{
    masa= Number (parseInt(prompt("Introsuzca su masa en kg")))
}while(isNaN(masa)|| masa < 0)
let estatura;
do{
    mestatura= Number (parseInt(prompt("Introsuzca su masa en kg")))
}while(isNaN(estatura)|| estatura < 0)
let imc = masa/(estatura*estatura)
let clasificacion
if(imc>= 40)
{
    clasificacion= "Obesidad III"
}else{
    if(imc >=35)
    {clasificacion= "Obesidad II"
    }else{
        if(imc >= 30)
        {clasificacion="Obesidad I"
        }else{
            if(imc >=25)
            {clasificacion= "Preobesidad"
            }else{
                if(imc >= 18.5)
                {clasificacion= "Intervalo normal"
                }else{
                    clasificacion= "Intervalo ponderado"
                }               
            }
    
        }    
    }
}
document.getElementById ("Respuesta").innerHTML= "Su IMC es"+imc+"y esta en la clasificacion"+clasificacion