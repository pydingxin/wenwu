function make_formdata(o){
    var fd = new FormData();
    for(var i in o){
        fd.append(i, o[i]);
    }
    return fd;
}

function post_api(apiname, jdata, process_json){
  let url='http://localhost:80/api/'+apiname
  fetch(url,{
        method:"POST",
        headers:{Content_Type:'application/x-www-form-urlencoded'},
        body:make_formdata(jdata)
    }
    ).then(response => response.json())
    .then(data => process_json(data));  
}

o={
  'card_no':"371326199003120012",
  'ldt':"2022-11-15 00:00:00",
  'rdt':"2022-11-21 00:00:00"
}
p={
  'name':"鑫盛酒家",
  'ldt':"2022-11-15 00:00:00",
  'rdt':"2022-11-21 00:00:00"
}

post_api('sample_info',o, console.log)
post_api('resident_info',o, console.log)
post_api('same_tube',o, console.log)
post_api('visitor_record',o, console.log)
post_api('place_visitor_record', p,console.log)


columns=[
  { title: '证件号', dataIndex: 'CardNo' },
  { title: '姓名', dataIndex: 'Name' },
  { title: '手机号', dataIndex: 'Phone' },
  { title: '所属镇', dataIndex: 'Zhen' },
  { title: '所属村', dataIndex: 'Cun' },
  { title: '曾用地址', dataIndex: 'Address' },
]

function antd_table_columns_to_data(cols){
  for(let x of cols){
    console.log({x.dataIndex: x.title})
  }
}
antd_table_columns_to_data(columns)