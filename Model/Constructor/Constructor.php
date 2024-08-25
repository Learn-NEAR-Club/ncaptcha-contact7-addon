<?php

namespace LNCNcaptchaContact7Addon\Model\Constructor;

use LNCNcaptchaContact7Addon\Controllers\NCaptchaController;
use LNCNcaptchaContact7Addon\Model\Config;

/**
 * Init all main functionality
 *
 * Class Constructor
 * @package LNCNcaptchaContact7Addon\Model\Constructor
 */
class Constructor
{
    /**
     * Self Constructor object.
     * @var $instance
     */
    private static Constructor $instance;

    /**
     * Plugin options
     *
     * @var mixed
     */
    public static mixed $options;


    /**
     * @var Config
     */
    private Config $config;

    /**
     * protect singleton  clone
     */
    private function __clone()
    {

    }

    /**
     * Method to use native functions as methods
     *
     * @param $name
     * @param $arguments
     * @return bool|mixed
     */
    public function __call($name, $arguments)
    {
        if (function_exists($name)) {
            return call_user_func_array($name, $arguments);
        }
        return false;
    }

    public function __wakeup()
    {

    }

    private function __construct()
    {
        $this->config = new Config();
        $this->setUpActions();
        new NCaptchaController();
    }

    public function addScripts(): void
    {
        wp_enqueue_script(
            'ncaptcha-script',
            'https://ncaptcha.xyz/n-captcha/n-captcha@latest.js',
            [],
            null,
            true
        );
        wp_enqueue_script(
            'lnc-ncaptcha-contact7-addon',
            $this->config->getScriptsPath() . 'index.js',
            ['jquery', 'ncaptcha-script'],
            time(),
            true
        );
    }

    /**
     * Method to set up WP actions.
     */
    private function setUpActions(): void
    {
        add_action('wp_head', [&$this, 'provideExtraScripts']);
        add_action('wp_enqueue_scripts', [$this, 'addScripts']);
    }


    /**
     * Get self object
     *
     * @return Constructor object
     */
    public static function getInstance(): Constructor
    {
        if (empty(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }
}
