<?php

namespace LNCNcaptchaContact7Addon\Model\Abstractions;

/**
 * Class AdminPages
 *
 * @package LNCNcaptchaContact7Addon\Model\Abstractions
 */
abstract class AdminPages
{
    /**
     * AdminPages constructor.
     */
    public function __construct()
    {
        add_action('admin_menu', [&$this, 'addAdminPage']);
        add_action('admin_init', [&$this, 'registerSettings']);
    }

    /**
     * Method to register settings
     *
     */
    abstract public function registerSettings();

    /**
     * Method to display settings page.
     *
     */
    abstract public function displaySettingsPage();

    /**
     * Method to add Admin page
     *
     * @return void
     */
    abstract public function addAdminPage();
}
