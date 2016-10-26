<?php
/**
 * start.php
 *
 * Author: Patrick McGranaghan
 *
 * First block of code used on all pages
 *
 */
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
        <title><?php echo $config['title'];?> Home</title>

        <!-- meta -->
        <meta name="description" content="<?php echo $config['desc'];?>">
    
        <link href="assets/images/favicon.ico" rel="icon" type="image/x-icon">

        <!-- css -->
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
        <link href="assets/css/icons/icomoon/styles.css" rel="stylesheet" type="text/css">
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">
        <link href="assets/css/fullcalendar.min.css" rel="stylesheet" type="text/css">
        <link href="assets/css/fullcalendar.print.css" rel="stylesheet" media="print">
        <link href="assets/css/scheduler.min.css" rel="stylesheet" type="text/css">
        <link href="assets/css/core.min.css" rel="stylesheet" type="text/css">
        <link href="assets/css/components.min.css" rel="stylesheet" type="text/css">
        <link href="assets/css/colors.min.css" rel="stylesheet" type="text/css">
        <style type="text/css">
            .login-container .page-container {
                padding-top: 0 !important;
            }
        </style>
    </head>


    <body class="login-container">
        <div class="page-container">

            <!-- Page content -->
            <div class="page-content">

                <!-- Main content -->
                <div class="content-wrapper">

                    <!-- Content area -->
                    <div class="content no-padding-bottom">