var url="http://localhost:3300/api/Wizard";

function createWizard(){
    console.log(url);

    var myName = $('#name').val();
    var myLastname = $('#lastname').val();
    var myAge = $('#age').val();
    var myHouse = $('#house').val();
    var mySpeciality = $('#speciality').val();
    var myPatronus = $('#patronus').val();
        var myWizard={
            name : myName,
            lastname : myLastname,
            age : myAge,
            house : myHouse,
            speciality : mySpeciality,
            patronus : myPatronus,
        };
        console.log(myWizard);

        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function(data){
                console.log(data);
                $('#resultado').html(JSON.stringify(data.wizard));

            },
            data: JSON.stringify(wizard)
        });


    };


reader

function getAllWizards(){

    console.log(url);

    $.getJSON(url,
        function(json){
            console.log(json);

            var arrWizard = json.wizard;

            var htmlTableWizard = '<table border=1">';

            arrWizard.forEach(function(item){
                console.log(item);
                htmlTableWizard += '<tr>' +
                '<td>' + item.id + '<td>'+
                '<td>' + item.name + '<td>'+
                '<td>' + item.lastname + '<td>'+
                '<td>' + item.age+ '<td>'+
                '<td>' + item.house+ '<td>'+
                '<td>' + item.speciality + '<td>'+
                '<td>' + item.patronus + '<td>'+
            '</table>' +
        '</div>' +
    '</div>';                   
});
htmlTableWizard += '</table>';

    $('#resultado').html(htmlTableWizard);
}
);
}

function cambiarTema() {
    let body = document.getElementsByTagName("body")[0];
    let h1 = document.getElementsByTagName("h1")[0];
    let labels = document.getElementsByTagName("label");
    let buttons = document.getElementsByTagName("button");
  
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      h1.classList.remove("dark");
      for (let i = 0; i < labels.length; i++) {
        labels[i].classList.remove("dark");
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("dark");
      }
    } else {
      body.classList.add("dark");
      h1.classList.add("dark");
      for (let i = 0; i < labels.length; i++) {
        labels[i].classList.add("dark");
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("dark");
      }
    }
  }