function funcall() {
    var userdata = [
        { firstname: 'sonal' },
        { lastname: 'kumari' },
        { email: 'sonal64kumari@gmail.com' },
        { phone: '9905815584' },
        { dateofbirth: '25.05.2005' },
        { gender: 'female' },
        { password: '0123456789' },
        { confirmpassword: '0123456789' },


function funcall() {
    var userdata = [
        { firstname: 'sonal' },
        { lastname: 'kumari' },
        { email: 'sonal64kumari@gmail.com' },
        { phone: '9905815584' },
        { dateofbirth: '25.05.2005' },
        { gender: 'female' },
        { password: '0123456789' },
        { confirmpassword: '0123456789' }
    ];
    var html = "<table border='2|1'>";

    setTimeout(() => {
        for (var i = 0; i < userdata.length; i++) {
            var key = Object.keys(userdata[i])[0];
            var value = userdata[i][key];
            html += '<tr>';
            html += '<td>' + key + '</td>'; // Use the key as the column name
            html += '<td>' + value + '</td>';
            html += '</tr>';
        }
        document.getElementById("table").innerHTML = html + '</table>'; // Close the table tag
    }, 500);
}

funcall();