function manipulasiString2(){

    let kalimat = document.getElementById("word").value;
    let fibonacci1 = document.getElementById("fibonacci1");
    let fibonacci2 = document.getElementById("fibonacci2");
    let odd1 = document.getElementById("odd1");
    let odd2 = document.getElementById("odd2");
    let even1 = document.getElementById("even1");
    let even2 = document.getElementById("even2");
    let angkaHuruf1 = document.getElementById("angkaHuruf1");
    let angkaHuruf2 = document.getElementById("angkaHuruf2");

    // Make Fibonacci Series:
    let x1 = 0;
    let x2 = 1;
    let y;
    let fibonacci = [];
    for (let i in kalimat){
        fibonacci.push(x1.toString());
        y = x1 + x2;
        x1 = x2;
        x2 = y;
    }
    console.log(fibonacci);

    // Make Odd Series:
    let y1 = 1;
    let OddSeries = [];
    for (let i in kalimat){
        OddSeries.push(y1.toString());
        y1 = y1 + 2;
    }
    console.log(OddSeries);

    // Make Even Series:
    let y2 = 0;
    let EvenSeries = [];
    for (let i in kalimat){
        EvenSeries.push(y2.toString());
        y2 = y2 + 2;
    }
    console.log(EvenSeries);

    // Make AngkaHuruf:
    let y3 = 'abcdefghijklmnopqrstuvwxyz';
    let y4 = 0;
    let AngkadanHuruf = [];
    let n = kalimat.length;
    for (let i in kalimat){
         y4 ++;
        AngkadanHuruf.push(y4.toString()); 
        AngkadanHuruf.push(y3[i]); 
    }
    AngkadanHuruf.splice(n, (n*2));
    console.log(AngkadanHuruf);

    // Series to be Object:
    const objek = {
        fibo : fibonacci,
        odd : OddSeries,
        even : EvenSeries,
        adH : AngkadanHuruf 
    };
    
    const vowel = "aiueoAIUEO";

    //fibonacci selected:
    let hasil1 = [];
    let f1 = 0;
    if (fibonacci1.checked == true){
        for (i in kalimat){
            if (vowel.includes(kalimat[i])){
                hasil1.push(objek.fibo[f1]);
                f1 ++ ;
            }
            else {
                hasil1.push(kalimat[i]);
            }
        }
    }
    else {
        hasil1.push("---------------------------------------------------------------");
    }
    fibonacci2.innerHTML = ":  " + hasil1.join("");

    //Odd selected:
    let hasil2 = [];
    let f2 = 0;
    if (odd1.checked == true){
        for (i in kalimat) {
            if (vowel.includes(kalimat[i])){
                hasil2.push(objek.odd[f2]);
                f2 ++ ;
            }
            else {
                hasil2.push(kalimat[i]);
            }
        }
    }
    else{
        hasil2.push("---------------------------------------------------------------");
    }
    odd2.innerHTML = ":  " + hasil2.join("");

    // Even Selected:
    let hasil3 = [];
    let f3 = 0;
    if (even1.checked == true){
        for (i in kalimat) {
            if (vowel.includes(kalimat[i])){
                hasil3.push(objek.even[f3]);
                f3 ++ ;
            }
            else {
                hasil3.push(kalimat[i]);
            }
        }
    }
    else{
        hasil3.push("---------------------------------------------------------------");
    }
    even2.innerHTML = ":  " + hasil3.join("");

    // angkahuruf selected:
    let hasil4 = [];
    let f4 = 0;
    if (angkaHuruf1.checked == true){
        for (i in kalimat) {
            if (vowel.includes(kalimat[i])){
                hasil4.push(objek.adH[f4]);
                f4 ++ ;
            }
            else {
                hasil4.push(kalimat[i]);
            }
        }
    }
    else{
        hasil4.push("---------------------------------------------------------------");
    }
    angkaHuruf2.innerHTML = ":  " + hasil4.join("");

}
