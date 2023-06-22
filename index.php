<?php
/**
 * Plugin Name: nCaptcha Contact Form 7 addon
 * Description: nCaptcha provider for Contact Form 7
 * Version: 0.0.1
 * Author: LNC
 * Author URI: http://learnnear.club/
 */

use LNCNcaptchaContact7Addon\Controllers\NCaptchaController;
use LNCNcaptchaContact7Addon\Model\Constructor\Constructor;

if (!function_exists('is_plugin_active')) {
    include_once(ABSPATH . 'wp-admin/includes/plugin.php');
}

try {
    $composerLoader = __DIR__ . '/vendor/autoload.php';
    if (file_exists($composerLoader)) {
        require_once $composerLoader;
    } else {
        throw new Exception(__('Install the composer for current work', 'lnc-ncaptcha-contact7-addon'));
    }
    if (!is_plugin_active('contact-form-7/wp-contact-form-7.php')) {
        throw new Exception(__('Contact form 7 plugin must be enabled'));
    }
    Constructor::getInstance();
} catch (Exception $exception) {
    deactivate_plugins('lnc-ncaptcha-contact7-addon/index.php');
    add_action('admin_notices', function () use ($exception) {
        echo '<div class="error"><p>' . esc_html($exception->getMessage()) . '</p></div>';
    });
}

$constructor = Constructor::getInstance();
