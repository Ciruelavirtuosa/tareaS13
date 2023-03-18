class calculadora{
    //clean(){
        //document.getElementById("num1").value="";
        //document.getElementById("num2").value="";
        //document.getElementById("num3").value="";
        //document.getElementById("num4").value="";
        //document.getElementById("resp").textContent="";
    //}
    //1.Dado una serie de numeros presentar la suma de los numeros perfectos//
    sumaperfectos(){
        let arrays=document.getElementById("num1").value
        let cadena=arrays.split(";")
        let divisor= 1; let total=0; let acu=0
        let $resp = document.getElementById("resp")
        for(let pos=0;pos<cadena.length;pos++){
           while (divisor<cadena[pos]) {
            if (cadena[pos]%divisor==0) {
                acu=acu+divisor
            }
            divisor++
           }
           if (acu==cadena[pos]) {
            total=total+acu
           }
           divisor=1
           acu=0
        }
        $resp.textContent=(total)
    }
    //2.Dado una serie de numeros presentar los numeros primos//
    numerosprimos(){
        let arrays=document.getElementById("num1").value
        let cadena=arrays.split(";")
        let divisor = 2; let c=1
        let arr=[]
        let pos2=0
        let $resp = document.getElementById("resp")
        for(let pos=0;pos<cadena.length;pos++){
            while (divisor<cadena[pos] && c==1) {
                if (cadena[pos]%divisor==0) {
                    c=0
                }  else {
                    divisor++
                }
            }
            if (c==1) {
                arr[pos2]=cadena[pos]
                pos2++
            }
            c=1
            divisor=2
        }
        $resp.textContent=`los numeros primos son/es:\n ${arr}`
    }
    //3.Elaborar una funcion que reciba dos valores base y exponente. la funcion debera retornar la base elevada al exponente//
    potencia(base,exponent){
        let ex=1; let con=0
        while (con<exponent) {
            ex=base*ex
            con++
        }
        return ex
    }
    basyex(){
        let num1 = parseInt(document.getElementById("num3").value)
        let num2 = parseInt(document.getElementById("num4").value)
        let $resp = document.getElementById("resp")
        let potencia=this.potencia(num1,num2)
        $resp.textContent=(potencia)
    }
    //4.Dado una serie de numeros presentar el exponente de cada numero elavado a su propio numero//
    esponential(){
        let arrays=document.getElementById("num1").value
        let cadena=arrays.split(";")
        let arre2=[]
        let con=0; let po=1
        let $resp= document.getElementById("resp")
        for(let pos=0;pos<cadena.length;pos++){
            while (con<cadena[pos]) {
                po=cadena[pos]*po
                con++
            }
            arre2[pos]=po
            po=1
            con=0
        }
        $resp.textContent=(arre2)
    }
    //5.elaborar una funcion de la tabla de multiplicar de cualquier base del 1 al  12//
    demultiplicar(num){
        let arrays=[]
        let $resp= document.getElementById("resp")
        for(let pos=1;pos<=12;pos++) {
            arrays[pos]=num*pos
        }
        $resp.textContent=`${num}*1=${arrays[1]}\n${num}*2=${arrays[2]}\n${num}*3=${arrays[3]}\n${num}*4=${arrays[4]}\n${num}*5=${arrays[5]}\n${num}*6=${arrays[6]}\n${num}*7=${arrays[7]}\n${num}*8=${arrays[8]}\n${num}*9=${arrays[9]}\n${num}*10=${arrays[10]}\n${num}*11=${arrays[11]}\n${num}*12=${arrays[12]}\n`
    }
    
    tabla(){
        let num1= parseInt(document.getElementById("num1").value)
        this.demultiplicar(num1)
    }
    //funcion divisores 6 y 7//
    opdivisores(num1,num2,cond){
        let arrays=[]; let pos=0; let suma=0
        while (num2<num1) {
            if (num1%num2==0) {
                arrays[pos]=num2
                pos++
                suma=suma+num2
            }
            num2++
        }
        if (cond==0) {
            return arrays
        } else {
            return suma
        }
    }
    //6.Realizar una funcion que retorne los divisores de cualquier numero de cualquier valor inicial//
    arredivisores(){
        let num= parseInt(document.getElementById("num3").value)
        let inicio= parseInt(document.getElementById("num4").value)
        let arrd=this.opdivisores(num, inicio, 0)
        let $resp= document.getElementById("resp")
        $resp.textContent=(arrd)

    }
    //7.Realizar una funcion que retorne la suma de los divisores de cualquier numero de cualquier valor inicial//
    sumadivisores(){
        let num= parseInt(document.getElementById("num3").value)
        let inicio= parseInt(document.getElementById("num4").value)
        let total=this.opdivisores(num, inicio, 1)
        let $resp= document.getElementById("resp")
        $resp.textContent=(total)
    }
    //funcion digitos//
    opdigitos(num,cond){
        let arrays=[]
        let pares=[]
        let suma=0; let pos2=0
        for(let pos=0; pos<num.length; pos++){
            let pro=parseInt(num[pos])
            arrays[pos]=pro
            suma=suma+arrays[pos]
            if(arrays[pos]%2==0){
                pares[pos2]=arrays[pos]
                pos2++   
            }
        }
        if (cond==0) {
            return arrays
        } else {
            if (cond==1) {
                return suma
            } else {
                if (cond==2) {
                    return pares
                } else {
                    if (cond==3) {
                        return arrays[0]
                    } else {
                        return arrays[arrays.length-1]
                    }
                }
            }
        }
    }
    //8.Realizar una funcion que retorne un arreglo con los digitos de cualquier numero//
    arredig(){
        let num1= document.getElementById("num1").value
        let $resp= document.getElementById("resp")
        let arre=this.opdigitos(num1,0)
        $resp.textContent=(arre)
        
    }
    //9.Dado un numero presente la  suma de sus digitos//
    sumadig(){
        let num2= document.getElementById("num1").value
        let $resp= document.getElementById("resp")
        let sumato=this.opdigitos(num2,1)
        $resp.textContent=(sumato)
        
    }
    //10.Dado un numero presente los digitos pares//
    paresdig(){
        let num3= document.getElementById("num1").value
        let $resp= document.getElementById("resp")
        let par=this.opdigitos(num3,2)
        $resp.textContent=(par)
    }
    //11.Dado un numero presente su primer digito//
    primerdig(){
        let num4= document.getElementById("num1").value
        let $resp= document.getElementById("resp")
        let pri=this.opdigitos(num4,3)
        $resp.textContent=(pri)
    }
    //12.Dado un numero presente el ultimo digito//
    ultidig(){
        let num5= document.getElementById("num1").value
        let $resp= document.getElementById("resp")
        let ult=this.opdigitos(num5,4)
        $resp.textContent=(ult)
    }
    //tabla factorial 13 y 14//
    opfactorial(num){
        let arrays2=[]
        let factorial=1; let c=1
        for(let pos=0;pos<num.length;pos++){
            while (c<=num[pos]) {
                factorial=factorial*c
                arrays2[pos]=factorial
                c++
            }
            c=1
            factorial=1
        }
        return arrays2
    }
    //numfactorial(){
        //let num1= (document.getElementById("num1").value)
        //let $resp= document.getElementById("resp")
        //let factorial1=this.opfactorial(num1)
        //$resp.textContent=factorial1//
    //}
   //13.Elaborar una funcion que retorne el factorial de un numero-14.Dado un arreglo de numeros presentar sus factoriales//
    arrfactorial(){
        let num2= (document.getElementById("num1").value)
        let cadena=num2.split(";")
        let $resp= document.getElementById("resp")
        let factorial2=this.opfactorial(cadena)
        $resp.textContent=factorial2
    }
    //funcion entredos valores//
    arrentre(num1,num2){
        let arrays=[]
        let pos=0
        let msm=[]
        let no=`no existe numeros entre ${num1} y ${num2}`
        if (num1<num2) {
           while (num1<num2) {
            arrays[pos]=num1++
            pos++
           }
        } else {
            while (num1>num2) {
                arrays[pos]=num1--
                pos++
            }
        }
        return arrays
    }
    //15.Realizar una funcion que retorne un arreglo con los numeros dentro de un rango entre dos valores excluido el valor final//
    entredosvalores(){
        let num1= parseInt(document.getElementById("num3").value)
        let num2= parseInt(document.getElementById("num4").value)
        let $resp= document.getElementById("resp")
        let arre=this.arrentre(num1,num2)
        $resp.textContent=arre
    }
}
let cal= new calculadora