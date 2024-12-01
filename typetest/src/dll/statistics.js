export function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
   
    return age;
}

export function get_birthday(input_json){
    var json_data = input_json;
    var mass=[];
    //for( var i  in json_data){
        //return getAge(json_data[i].data_birthday);}};
     json_data.forEach(element => {
        //console.log(element.data_birthday)
        //return getAge(element.data_birthday)
        mass.push(getAge(element.data_birthday))});
        const sum = mass.reduce((partialSum, a) => partialSum + a, 0);

    return sum/(mass.length);  }


    export function get_workday(input_json){
        var json_data = input_json;
        var mass=[];
        //for( var i  in json_data){
            //return getAge(json_data[i].data_birthday);}};
         json_data.forEach(element => {
            //console.log(element.data_birthday)
            //return getAge(element.data_birthday)
            mass.push(getAge(element.data_workday))});
            const sum = mass.reduce((partialSum, a) => partialSum + a, 0);
    
        return sum/(mass.length);  }