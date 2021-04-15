$("#add_user").submit((event)=>{
    alert("Data inserted successfully")
})

$("#update_user").submit((event)=>{
    event.preventDefault();
    var unindexed_array = $("#update_user").serializeArray()
    let data = {}
    $.map(unindexed_array, (n,i)=>{
        data[n['name']]=n['value']
    })

    var request = {
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done((response)=>{
        alert("Data updated successfully")
    })
})


if(window.location.pathname=='/'){
    $ondelete = $('.table tbody td a.delete')
    $ondelete.click(()=>{
        var id = $('.table tbody td a.delete').attr('data-id')
        console.log(id)
        var request = {
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE",
        }

        if(confirm('Do you really want to delete this record')){
            $.ajax(request).done((response)=>{
                alert("Data deleted successfully")
                window.location.reload()
            })
        }
    })
}