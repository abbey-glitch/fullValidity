<?php
$hostName = "localhost";
$database = "trial";
$username = "root";
$password = "";


//connect to database
$_conn = mysqli_connect($hostName, $username, $password, $database) or die("could not connect");