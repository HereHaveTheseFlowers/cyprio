<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');


    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
        echo '...';

        $objectkey = $_POST["objectkey"];
        
        //make objectInfo.json
        $fp = fopen("../objects/$objectkey/objectInfo.json", 'w');
                
        $newobj = new stdClass();
        
        $newobj->name = $_POST["objectname"];
        $newobj->brand = $_POST["objectbrand"];
        $newobj->price = $_POST["objectprice"];
        $newobj->category = $_POST["objectcategory"];
        $newobj->description = $_POST["objectdescription"];
        $newobj->additionalInfo = $_POST["objectadditionalinfo"];
        $newobj->url = $_POST["objecturl"];
        $newobj->urlText = $_POST["objecturltext"];
        $newobj->altText = $_POST["objectalttext"];
        
        echo var_dump($newobj);

        //encode array into json
        $objectinfojson = json_encode($newobj, JSON_PRETTY_PRINT);
        
        echo $objectinfojson;
        
        fwrite($fp, $objectinfojson);
        fclose($fp);
            
        if ($_FILES["objectmainimage"]["name"]) {
            $filename = '../objects/' . $data["objectkey"] . '/main.png';
            if (file_exists($filename)) {
                unlink($filename);
            }
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($_FILES["objectmainimage"]["name"],PATHINFO_EXTENSION));
            $check = getimagesize($_FILES["objectmainimage"]["tmp_name"]);
        
            if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
            if($imageFileType != "png") {
                echo "Sorry, only PNG files are allowed.";
                $uploadOk = 0;
            }// Check if $uploadOk is set to 0 by an error
            if ($uploadOk == 0) {
                echo "Sorry, your file was not uploaded.";
            // if everything is ok, try to upload file
            } else {
                if (move_uploaded_file($_FILES["objectmainimage"]["tmp_name"], "../objects/$objectkey/main.png")) {
                    echo "The file " . $target_file . " has been uploaded.";
                } else {
                    echo "Sorry, there was an error uploading your file.";
                }
            }
        }
        if ($_FILES["objectpreviewimage"]["name"]) {
            $filename = '../objects/' . $data["objectkey"] . '/preview.png';
            if (file_exists($filename)) {
                unlink($filename);
            }
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($_FILES["objectpreviewimage"]["name"],PATHINFO_EXTENSION));
            $check = getimagesize($_FILES["objectpreviewimage"]["tmp_name"]);

            if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
            if($imageFileType != "png") {
                echo "Sorry, only PNG files are allowed.";
                $uploadOk = 0;
            }// Check if $uploadOk is set to 0 by an error
            if ($uploadOk == 0) {
                echo "Sorry, your file was not uploaded.";
            // if everything is ok, try to upload file
            } else {
                if (move_uploaded_file($_FILES["objectpreviewimage"]["tmp_name"], "../objects/$objectkey/preview.png")) {
                    echo "The file ". $target_file . " has been uploaded.";
                } else {
                    echo "Sorry, there was an error uploading your file.";
                }
            }
        }
    }
?>