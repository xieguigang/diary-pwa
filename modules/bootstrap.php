<?php

include __DIR__ . "/php.NET/package.php";
include __DIR__ . "/access.php";

define("WWWROOT", realpath(__DIR__ . "/.././"));

dotnet::AutoLoad(__DIR__ . "/config.ini.php");
dotnet::HandleRequest(new App(), new accessController());