<?php
    header('Content-type:text/json');
    $arr = array('age'=> '13', 'id'=>'motorola-defy-with-motoblur', 'name'=>'Motorola DEFY\u2122 with MOTOBLUR\u2122', 'snippet'=>'Are you ready for everything life throws your way?');
    $data = json_encode($arr);
    echo $data;
//     echo '[{"age":"13","id":"motorola-defy-with-motoblur","name":"Motorola DEFY\\u2122 with MOTOBLUR\\u2122","snippet":"Are you ready for everything life throws your way?"}]';
?>