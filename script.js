function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    });

    
    var showfieldForOrigName = document.querySelector("#changedOrigNameGroup");
    

    if (modifyMyOwnNameCheck.checked==true ){
        showfieldForOrigName.style.display = '';
        document.getElementById('nameLine').value = '';
        document.getElementById('nameLine').placeholder = "Please, type your name here...";
    }

    else {
        showfieldForOrigName.style.display = 'none';
        document.getElementById('nameLine').placeholder = '';
    }

}



function fillNameLine() {

//fill the array with correct names
    const arr = [];
    if (document.getElementById('gender').value == 'female') {
        var newArr = arr.concat(girlNames);
    }
    else if (document.getElementById('gender').value == 'male') {
        newArr = arr.concat(boyNames);
    }
    else {
        newArr = arr.concat(neutralNames);
    }

    
    var manualName = document.getElementById("nameLine").value;
    var randomizedName = newArr[Math.floor(Math.random() * newArr.length)];
    
    if(modifyMyOwnNameCheck.checked == false){
        var outputName = randomizedName;``
        var showOutputName = document.getElementById("nameLine");
    } else if(modifyMyOwnNameCheck.checked == true){
        outputName = manualName;
        showOutputName = document.getElementById("changedOrigName");

    } 
    

    let pattern = /[\u0400-\u04FF]/;
    let pattern2 = /[\0-\9]/;
    let pattern3 = /[\~, \`, \@, \№, \;, \:, \<, \>, \^, \_, \|, \\, \{, \}, \[, \]]/;
    if (
    pattern.test(document.getElementById('nameLine').value)
    || pattern2.test(document.getElementById('nameLine').value)
    || pattern3.test(document.getElementById('nameLine').value)
    ){
    alert("No latin, no numbers, no bullshit. Don't fuck around kiddo.")
    } 
    else {

    let allLetters = /^[A-Za-z]+$/;
           // if (ownName.match(allLetters)){


//rules for girls
if(document.getElementById('gender').value == 'female'){


    if (modifyCheck.checked == true || modifyMyOwnNameCheck.checked == true){

        if (outputName.endsWith("ey")
            || outputName.endsWith("iy")
            || outputName.endsWith("ay")
            || outputName.endsWith("uy")
            || outputName.endsWith("oy")) {
            let modifiedOutputName1 = outputName + "a";
            let modifiedOutputName2 = outputName + "et";
            let modifiedOutputName3 = "А" + outputName.toLowerCase().slice(0,-1);
            let modifiedOutputName4 = "De" + outputName.toLowerCase() + "a";
            let modifiedOutputName5 = outputName.slice(0,-1) + "da";
            let modifiedOutputName6 = outputName.slice(0,-1) + "dia";

            let outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3, 
                modifiedOutputName4, 
                modifiedOutputName5, 
                modifiedOutputName6);
            let randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("y")
            || outputName.endsWith("i")) {
            modifiedOutputName1 = outputName.slice(0, -1) + "ry";
            modifiedOutputName2 = outputName.slice(0, -1) + "liya";
            modifiedOutputName3 = outputName.slice(0, -1) + "iya";
            modifiedOutputName4 = "De" + outputName.toLowerCase() + "a";
            modifiedOutputName5 = outputName.slice(0,-1) + "ada";
            modifiedOutputName6 = outputName.slice(0,-3) + "dalia";
            modifiedOutputName7 = outputName.slice(0,-3) + "lini";

            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3, 
                modifiedOutputName4, 
                modifiedOutputName5, 
                modifiedOutputName6,
                modifiedOutputName7);
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
            
        }
        else if (outputName.endsWith("ella")
            || outputName.endsWith("illa")
            || outputName.endsWith("ulla")
            || outputName.endsWith("olla")
            || outputName.endsWith("alla")
            || outputName.endsWith("elle")
            || outputName.endsWith("alle")
            || outputName.endsWith("ille")
            || outputName.endsWith("ulle")
            || outputName.endsWith("olle")
            || outputName.endsWith("ela")
            || outputName.endsWith("ala")
            || outputName.endsWith("ula")
            || outputName.endsWith("ila")
            || outputName.endsWith("ola")) {
            modifiedOutputName1 = outputName.slice(0, -4) + "ar";
            modifiedOutputName2 = outputName.slice(0, -4) + "eyshion";
            modifiedOutputName3 = outputName.slice(0, -4) + "estra";
            modifiedOutputName4 = outputName.slice(0, -4) + "iri";
            modifiedOutputName5 = outputName.slice(0, -4) + "eroe";
            modifiedOutputName6 = "Ada" + outputName.toLowerCase().slice(0, -6) + "iri";
            
            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4, 
                modifiedOutputName5,
                modifiedOutputName6);
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("a")) {
            modifiedOutputName1 = outputName + "liŋ";
            modifiedOutputName2 = outputName + "tis";
            modifiedOutputName3 = outputName.slice(0, -3) + "liŋ";
            modifiedOutputName4 = outputName.slice(0, -3) + "tis";
            modifiedOutputName5 = "Bri" + outputName.toLowerCase().slice(0, -3) + "linthia";
            modifiedOutputName6 = "De" + outputName.toLowerCase().slice(0, -3) + "tis";
            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2,
                modifiedOutputName3, 
                modifiedOutputName4,
                modifiedOutputName5, 
                modifiedOutputName6,
                );
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("leigh")) {
            modifiedOutputName1 = outputName.slice(0, -5) + "lea";
            modifiedOutputName2 = outputName.slice(0, -5) + "ly";
            modifiedOutputName3 = outputName.slice(0, -5) + "liet";
            modifiedOutputName4 = "A" + outputName.toLowerCase().slice(0, -3) + "tha";

            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2,
                modifiedOutputName3, 
                modifiedOutputName4,
                );
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("e") && outputName.length <= 5) {
            modifiedOutputName1 = outputName.slice(0, -1) + "prim";
            modifiedOutputName2 = outputName.slice(0, -1) + "deꭍ";
            modifiedOutputName3 = outputName.slice(0, -2) + "fata";
            modifiedOutputName4 = outputName.slice(0, -2) + "luna";

            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2,
                modifiedOutputName3,
                modifiedOutputName4
                ); 
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("e") && outputName.length > 5) {
            modifiedOutputName1 = outputName.slice(0, -4) + "ereya";
            modifiedOutputName2 = outputName.slice(0, -1) + "tia";
            modifiedOutputName3 = outputName.slice(0, -1) + "uma";
            modifiedOutputName4 = outputName.slice(0, -1) + "yne";
            
            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2,
                modifiedOutputName3,
                modifiedOutputName4
                );
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("ah")) {
            modifiedOutputName1 = outputName.slice(0, -2) + "yat";
            modifiedOutputName2 = outputName.slice(0, -2) + "ithy";
            modifiedOutputName3 = "Ton" + outputName.toLowerCase().slice(0, -3) + "ia";
            modifiedOutputName4 = outputName.slice(0, -2) + "ꭍ";
            modifiedOutputName5 = outputName.slice(0, -2) + "ya";

            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2,
                modifiedOutputName3,
                modifiedOutputName4,
                modifiedOutputName5
                );
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("b")
            || outputName.endsWith("c")
            || outputName.endsWith("d")
            || outputName.endsWith("f")
            || outputName.endsWith("g")
            || outputName.endsWith("h")
            || outputName.endsWith("j")
            || outputName.endsWith("k")
            || outputName.endsWith("l")
            || outputName.endsWith("m")
            || outputName.endsWith("n")
            || outputName.endsWith("o")
            || outputName.endsWith("p")
            || outputName.endsWith("q")
            || outputName.endsWith("r")
            || outputName.endsWith("s")
            || outputName.endsWith("t")
            || outputName.endsWith("u")
            || outputName.endsWith("v")
            || outputName.endsWith("w")
            || outputName.endsWith("x")
            || outputName.endsWith("y")
            || outputName.endsWith("z")) {


            modifiedOutputName1 = outputName.slice(0, -1) + "ira";
            modifiedOutputName2 = outputName.slice(0, -1) + "th";
            modifiedOutputName3 = outputName.slice(0, -1) + "deen";
            modifiedOutputName4 = outputName.slice(0, -1) + "ess";

            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2,
                modifiedOutputName3,
                modifiedOutputName4
                );
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }

    } else {
        document.getElementById("nameLine").value = outputName;
    }

}

    


    // rules for boiiiiiiiiii s
else if (document.getElementById('gender').value == 'male') {

    if (modifyCheck.checked == true || modifyMyOwnNameCheck.checked == true){

        if (outputName.includes("an")
            || outputName.endsWith("en")
            || outputName.endsWith("in")
            || outputName.endsWith("on")
            || outputName.endsWith("un")) {
            modifiedOutputName1 = outputName.slice(0, -2) + "an";
            modifiedOutputName2 = outputName.slice(0, -2) + "tan";
            modifiedOutputName3 = "Re" + outputName.toLowerCase().slice(0, -2) + "an";
            modifiedOutputName4 = "A" + outputName.toLowerCase().slice(0, -1) + "xas";
            modifiedOutputName5 = outputName.slice(0, -3) + "n";
            modifiedOutputName6 = outputName.slice(0, -1) + "terr";
            
            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4, 
                modifiedOutputName5,
                modifiedOutputName6);
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("y")
            || outputName.endsWith("i")) {
            modifiedOutputName1 = outputName.slice(0, -1) + "ey";
            modifiedOutputName2 = outputName.slice(0, -3) + "an";
            modifiedOutputName3 = outputName.slice(0, -1) + "nın";
            modifiedOutputName4 = outputName.slice(0, -1) + "shion";
            modifiedOutputName5 = outputName.slice(0, -1) + "rau";
            modifiedOutputName6 = outputName.slice(0, -1) + "dic";
            
            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4, 
                modifiedOutputName5,
                modifiedOutputName6);
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("ey")
            || outputName.endsWith("oy")
            || outputName.endsWith("ay")) {
                modifiedOutputName1 = outputName.slice(0, -2) + "ey";
                modifiedOutputName2 = outputName.slice(0, -4) + "an";
                modifiedOutputName3 = outputName.slice(0, -2) + "nın";
                modifiedOutputName4 = outputName.slice(0, -2) + "shion";
                modifiedOutputName5 = outputName.slice(0, -2) + "rau";
                modifiedOutputName6 = outputName.slice(0, -2) + "dic";
            
            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4, 
                modifiedOutputName5,
                modifiedOutputName6);
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("a")) {
            modifiedOutputName1 = outputName + "liŋ";
            modifiedOutputName2 = "A" + outputName.toLowerCase() + "shion";
            modifiedOutputName3 = "Ra" + outputName.toLowerCase().slice(0, -1);
            modifiedOutputName4 = outputName.slice(0, -1) + "an";
            modifiedOutputName5 = outputName.slice(0, -1) + "itt";

            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4, 
                modifiedOutputName5);
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("e") && outputName.length <= 5) {
            modifiedOutputName1 = outputName.slice(0, -1) + "ix";
            modifiedOutputName2 = outputName.slice(0, -3) + "aꭍ";
            modifiedOutputName3 = outputName.slice(0, -1) + "an";
            modifiedOutputName4 = outputName.slice(0, -1) + "ers";

            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4);
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("e") && outputName.length > 5) {
            modifiedOutputName1 = outputName.slice(0, -4) + "ix";
            modifiedOutputName2 = outputName.slice(0, -1) + "aꭍ";
            modifiedOutputName3 = outputName.slice(0, -1) + "an";
            modifiedOutputName4 = outputName.slice(0, -1) + "ers";
            
            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4);

                randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("b")
            || outputName.endsWith("c")
            || outputName.endsWith("d")
            || outputName.endsWith("f")
            || outputName.endsWith("g")
            || outputName.endsWith("h")
            || outputName.endsWith("j")
            || outputName.endsWith("k")
            || outputName.endsWith("l")
            || outputName.endsWith("m")
            || outputName.endsWith("n")
            || outputName.endsWith("o")
            || outputName.endsWith("p")
            || outputName.endsWith("q")
            || outputName.endsWith("r")
            || outputName.endsWith("s")
            || outputName.endsWith("t")
            || outputName.endsWith("u")
            || outputName.endsWith("v")
            || outputName.endsWith("w")
            || outputName.endsWith("x")
            || outputName.endsWith("y")
            || outputName.endsWith("z")) {
            modifiedOutputName1 = outputName.slice(0, -3) + "er";
            modifiedOutputName2 = outputName.slice(0, -1) + "crio";
            modifiedOutputName3 = outputName.slice(0, -3) + "crio";
            modifiedOutputName4 = outputName.slice(0, -1) + "tay";
            modifiedOutputName5 = "De" + outputName.toLowerCase().slice(0, -1) + "ray";
            modifiedOutputName6 = "A" + outputName.toLowerCase().slice(0, -3) + "tay";
            modifiedOutputName7 = outputName.slice(0, -3) + "ray";
            modifiedOutputName8 = outputName.slice(0, -2) + "er";

            modifiedOutputName9 = "A" + outputName.toLowerCase().slice(0, -1) + "kris";
            modifiedOutputName10 = outputName.slice(0, -3) + "shion";
            modifiedOutputName11 = outputName.slice(0, -3) + "ms";
            modifiedOutputName12 = outputName.slice(0, -2) + "thın";
            modifiedOutputName13 = outputName.slice(0, -2) + "fi";
            
            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3, 
                modifiedOutputName4,
                modifiedOutputName5, 
                modifiedOutputName6,
                modifiedOutputName7,
                modifiedOutputName8,
                modifiedOutputName9, 
                modifiedOutputName10,
                modifiedOutputName11,
                modifiedOutputName12,
                modifiedOutputName13
                );
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }

    } 
    
    else {
        document.getElementById("nameLine").value = outputName;
    }

} 



    //for neutral
else if (document.getElementById('gender').value == 'genderNetural') {
        
    if (modifyCheck.checked == true || modifyMyOwnNameCheck.checked == true){
        
        if (outputName.endsWith("ey")
            || outputName.endsWith("iy")
            || outputName.endsWith("ay")
            || outputName.endsWith("uy")
            || outputName.endsWith("oy")) {
            modifiedOutputName1 = outputName.slice(0, -2) + "an";
            modifiedOutputName2 = outputName.slice(0, -2) + "akay";
            modifiedOutputName3 = outputName.slice(0, -2) + "a";
            modifiedOutputName4 = outputName.slice(0, -2) + "ame";

            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4);

            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("y")
            || outputName.endsWith("i")) {
            modifiedOutputName1 = outputName.slice(0, -1) + "an";
            modifiedOutputName2 = outputName.slice(0, -1) + "akay";
            modifiedOutputName3 = outputName.slice(0, -1) + "a";
            modifiedOutputName4 = outputName.slice(0, -1) + "ame";
            modifiedOutputName5 = outputName.slice(0, -1) + "ey";
            
            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4);

            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("a")) {
            modifiedOutputName1 = outputName + "x";
            modifiedOutputName2 = outputName + "yli";
            modifiedOutputName3 = outputName + "yvi";
            modifiedOutputName4 = outputName.slice(0, -2) + "ytte";

            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4);

            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("e") && outputName.length <= 5) {
            modifiedOutputName1 = outputName.slice(0, -2) + "xi";
            modifiedOutputName2 = outputName.slice(0, -2) + "erey";
            modifiedOutputName3 = outputName.slice(0, -2) + "an";
            modifiedOutputName4 = outputName.slice(0, -2) + "lın";
            modifiedOutputName5 = outputName.slice(0, -2) + "liŋ";


            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4,
                modifiedOutputName5);

            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("e") && outputName.length > 5) {
            modifiedOutputName1 = outputName.slice(0, -3) + "erey";
            modifiedOutputName2 = outputName.slice(0, -3) + "xi";
            modifiedOutputName3 = outputName.slice(0, -3) + "an";
            modifiedOutputName4 = outputName.slice(0, -3) + "lın";
            modifiedOutputName5 = outputName.slice(0, -3) + "liŋ";
            
            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3,
                modifiedOutputName4,
                modifiedOutputName5);

            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }
        else if (outputName.endsWith("b")
            || outputName.endsWith("c")
            || outputName.endsWith("d")
            || outputName.endsWith("f")
            || outputName.endsWith("g")
            || outputName.endsWith("h")
            || outputName.endsWith("j")
            || outputName.endsWith("k")
            || outputName.endsWith("l")
            || outputName.endsWith("m")
            || outputName.endsWith("n")
            || outputName.endsWith("o")
            || outputName.endsWith("p")
            || outputName.endsWith("q")
            || outputName.endsWith("r")
            || outputName.endsWith("s")
            || outputName.endsWith("t")
            || outputName.endsWith("u")
            || outputName.endsWith("v")
            || outputName.endsWith("w")
            || outputName.endsWith("x")
            || outputName.endsWith("y")
            || outputName.endsWith("z")) {
            modifiedOutputName1 = outputName.slice(0, -2) + "er";
            modifiedOutputName2 = outputName.slice(0, -2) + "ir";
            modifiedOutputName3 = outputName.slice(0, -1) + "cri";
            modifiedOutputName4 = outputName.slice(0, -1) + "tis";
            modifiedOutputName5 = outputName.slice(0, -2) + "eye";
            modifiedOutputName6 = outputName.slice(0, -1) + "ti";
            modifiedOutputName7 = outputName.slice(0, -1) + "hope";
            modifiedOutputName8 = outputName.slice(0, -1) + "nesis";
            modifiedOutputName9 = outputName.slice(0, -1) + "go";
            modifiedOutputName10 = outputName.slice(0, -2) + "ive";
            modifiedOutputName11 = outputName.slice(0, -1) + "fy";
            modifiedOutputName12 = outputName.slice(0, -2) + "ery";

            outputOptionsPool = [];
            outputOptionsPool.push(
                modifiedOutputName1, 
                modifiedOutputName2, 
                modifiedOutputName3, 
                modifiedOutputName4,
                modifiedOutputName5, 
                modifiedOutputName6,
                modifiedOutputName7, 
                modifiedOutputName8, 
                modifiedOutputName9, 
                modifiedOutputName10,
                modifiedOutputName11, 
                modifiedOutputName12);
            randomizeOutputOption = outputOptionsPool[Math.floor(Math.random() * outputOptionsPool.length)];
            showOutputName.value = randomizeOutputOption;
        }

    }
        
    else {
        document.getElementById("nameLine").value = outputName;
    }

} 

    //just in case
    else {
        document.getElementById("nameLine").value = outputName;
    }

}


}
    
    

    // // for original name 
    // else if (modifyMyOwnNameCheck.checked == true){

        

    //     let pattern = /[\u0400-\u04FF]/;
    //     let pattern2 = /[\0-\9]/;
    //     let pattern3 = /[\~, \`, \@, \№, \;, \:, \<, \>, \^, \_, \|, \\, \{, \}, \[, \]]/;
    //     if (
    //         pattern.test(document.getElementById('nameLine').value)
    //         || pattern2.test(document.getElementById('nameLine').value)
    //         || pattern3.test(document.getElementById('nameLine').value)
    //         ){
    //         alert("No latin, no numbers, no bullshit. Don't fuck around kiddo.")
    //     } 
    //     else {

            

    //         let allLetters = /^[A-Za-z]+$/;
           // if (ownName.match(allLetters)){
                
            //     ownNameMod = ownName.slice(0, -2) + "ett";
            //     //ownNameMod = ownName.slice(0, -2) + "ett";
            //     //ownNameMod1 = ownName.slice(0, -1) + "ia";
            //     //ownNameMod2 = ownName.slice(0, -2) + "rix";
            //     //ownNameMod3 = "De" + ownName.toLowerCase().slice(0,-1);
            //     //ownNameMod4 = "A" + ownName.toLowerCase().slice(0,-1) + "iya";
            //     // ownNameMod5 = ownName.slice(0, -2) + "eye";
            //     // ownNameMod6 = ownName.slice(0, -1) + "ti";
            //     // ownNameMod7 = ownName.slice(0, -2) + "dia";
            //     // ownNameMod8 = ownName.slice(0, -2) + "ir";
            //     // ownNameMod9 = ownName.slice(0, -1) + "cri";
            //     // ownNameMod10 = ownName.slice(0, -1) + "tis";
            //     // ownNameMod11 = ownName.slice(0, -2) + "eye";
            //     // ownNameMod12 = ownName.slice(0, -1) + "ti";
            //     // ownNameMod13 = ownName.slice(0, -2) + "er";
            //     // ownNameMod14 = ownName.slice(0, -2) + "ir";
            //     // ownNameMod15 = ownName.slice(0, -1) + "cri";
            //     // ownNameMod16 = ownName.slice(0, -1) + "tis";
            //     // ownNameMod17 = ownName.slice(0, -2) + "eye";
            //     //let ownNameMod18 = ownName.slice(0, 2) + "s";
            //     let origArr = [];
            //     origArr.push(
            //         ownNameMod,
            //         //ownNameMod1, 
            //         //ownNameMod2, 
            //         //ownNameMod3, 
            //         //ownNameMod4,
            //             // ownNameMod5, 
            //             // ownNameMod6,
            //             // ownNameMod7,
            //             // ownNameMod8, 
            //             // ownNameMod9, 
            //             // ownNameMod10, 
            //             // ownNameMod11,
            //             // ownNameMod12, 
            //             // ownNameMod13,
            //             // ownNameMod14,
            //             // ownNameMod15, 
            //             // ownNameMod16, 
            //             // ownNameMod17, 
            //             // ownNameMod18
            //         );

            //     let origMod = origArr[Math.floor(Math.random() * origArr.length)];

                

                
                


            // } else{
                
            //     ownNameMod = ownName;
            //     document.getElementById("nameLine").value = ownNameMod;
            // }


            
        //}

        
    //}
    


    //for normal names
    
