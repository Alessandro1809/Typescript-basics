(()=>{

    const Batman:string = 'Batman';
    const Superman:string = 'Superman';
    const Flash:string = 'Flash';
    const Arrow:string = `Arrow`;
    
    let justiceLeague:string;

    console.log(Batman.toUpperCase());//convierte a mayusculas directamente

    console.log(`I'm ${Batman}`);
    console.log(Batman[10].toUpperCase());//esto arrojaria undefined aunque sea en typescrit porque es valido pero la cadena no tiene mas de 6 acaracteres
    console.log(Batman[10]?.toUpperCase() || 'se murio');//esto arrojaria undefined si solo se deja lo que esta antes del || pero como etamosdandole un || yy evaluando con ? entonces no arrojaria 'se murio'
    
    

})()