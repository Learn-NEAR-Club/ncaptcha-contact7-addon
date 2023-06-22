<?php

namespace LNCNcaptchaContact7Addon\Controllers;
class NCaptchaController
{
    public function __construct()
    {
        error_log('addCustomFields method is called.');
        add_action('wpcf7_init', [$this, 'addCustomFields']);
    }

    public function addCustomFields(): void
    {
        wpcf7_add_form_tag('ncaptcha', [$this, 'renderNCaptchaVerificationField']);
        wpcf7_add_form_tag('ncaptchatrans', [$this, 'renderNCaptchaTransactionField']);
    }

    public function renderNCaptchaVerificationField($tag): string
    {
        $tag = new \WPCF7_FormTag($tag);

        $price = $tag->get_option('price');
        $owner = $tag->get_option('owner');

        $priceValue = is_array($price) ? $price[0] : $price;
        $ownerValue = is_array($owner) ? $owner[0] : $owner;

        $html = '<div id="nCaptcha-verification" data-account="' . $ownerValue . '" data-price="' . $priceValue . '">';
        $html .= $tag->get_option('label', '');
        $html .= isset($tag->values['after']) && is_array($tag->values['after']) ? $tag->values['after'][0] : '';
        $html .= '</div>';

        return $html;
    }
    public function renderNCaptchaTransactionField($tag): string
    {
        return '<input type="hidden" class="nCaptcha-transaction-field"  name="transaction" value="" />';
    }

}
