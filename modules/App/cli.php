<?php

if (!isset($cli, $app) || PHP_SAPI !== 'cli') {
    return;
}

$cli->add(new App\Command\FlushTmp($app));
$cli->add(new App\Command\Env\Create($app));