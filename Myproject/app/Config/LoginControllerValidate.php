<?php

/**
 * Author:JOSE ROSELLON
 * Date:26/03/2024
 * Update Date:
 * Descriptions:
 * 
 */
include_once('../Config/Config.php');
 if (!empty($_POST) && isset($_POST)) {

 $userUser = $_POST['User_user'];


  $query = "CALL validateUser('" . $userUser . "')";
  $result = $mysqli->query($query);
  $countResult = $result->fetch_array();
   
  $result->free_result();
  $mysqli->close();
  //echo(  $countResult[0] );
  echo( "Send Email restar password user");

}
