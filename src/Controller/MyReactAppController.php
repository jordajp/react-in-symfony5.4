<?php

namespace App\Controller;
use \Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MyReactAppController extends AbstractController
{
    /**
     * @Route("my-react-app",name="my-react-app")
     * @return void
     */
    public function myReactApp(): Response
    {
        return $this->render('my-react-app.html.twig');
    }
}